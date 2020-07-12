https://webcloud.se/blog/2020-02-16-github-actions-preview-deploys/

Running GitHub Actions on Preview Deploys
16 February 2020

GitHub Deploy Action PR checks

Ever wanted to run CI/CD tools like Lighthouse or Visual Regression tests against a PR preview deploy using GitHub actions? This is how I did it.
Preview deploys is a GitHub integration offered by services like Netlify and Zeit Now that will automatically deploy a changes from a feature branch to a production-like environment.

Many existing examples of testing static sites with GitHub actions involved running npm install and npm build, and then running a HTTP server to test against localhost. While this works, I wanted to run these tests against an actual preview deploy. The benefits of this would be:

Efficiency. Only running the tests if a preview deploy succeeded. If the deploys fails in the first step why even bother attempting running the rest of the CI/CD toolchain.

Trust. Running the CI/CD tests against a production-grade environment gives me more confidence in the test feedback and results.

Workflow
To understand all moving parts here, let's examine the full workflow written in text:

Commit code to a branch, push to GitHub
Open a Pull Request
Action: Immediately Run Static Checks:
Unit tests
ESlint/Prettier check
Deploy Changes to a "Preview Deploy"
Action: When preview deploy is done:
Run Lighthouse tests against Preview Deploy URL
Run Visual Regression tests against Preview Deploy URL
All checks green? Ask for code review!
Merge.
Profit.
GitHub Deployments
If you've setup preview deploys correctly there should be a link to "environments" on your repository page. Here you'll see "Deployed to Production" an "Deployed to Preview".

The nice thing about GitHub Deployments is that they are events that we can hook into. We want to run the action once the deployment has finished but only if it's successful. We can do this by triggering our workflow on the deployment_status event, but only run the job if github.event.deployment_status.state equals success.

Example Workflow: deploy_status conditional build
# .github/workflows/example_workflow.yml
name: Successful Deploy Action Example
on: deployment_status
jobs:
  build:
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - name: XYZ
        run: npm run xyz
        env:
          DEPLOY_URL: ${{ github.event.deployment_status.target_url }}
You'll also notice that i set the DEPLOY_URL environment variable here, retrieved from github.event.deployment_status.target_url. This will allow my NPM script to access the URL to the preview deploy through process.env.DEPLOY_URL.

Full Example #1: Lighthouse CI Integration
One of the actions I run on preview deploys are Lighthouse CI tests, to find any regressions in performance, accessibility, SEO or other best practices. I recommend you read the Lighthouse CI get started guide if you haven't already

name: Lighthouse CI
on: deployment_status
jobs:
  lhci:
    if: github.event.deployment_status.state == 'success'
    name: Lighthouse CI
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.3.x
          lhci autorun --collect.url=${DEPLOY_URL} --upload.target=temporary-public-storage || echo "LHCI failed!"
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
          DEPLOY_URL: ${{ github.event.deployment_status.target_url }}
In the above example I'm only running the lighthouse test against a single page. You can pass multiple URLs by passing the --collect.url multiple times. In the future I want to automate this by running only against the URLs that have potentially been affected by the changes in the PR (this could be done with a simple diff against master branch).

Also Worth mentioning is that I'm using upload.target=temporary-public-storage which means my HTML reports are being stored publicly on a shared Google Cloud Storage account (currently offered for free by Google but that might change)

Full Example #2 - Percy Visual Regression Tests
I'm using Percy to run and store my visual regressions tests. This workflow will take snapshots and compare them to the latest approved version on the master branch.

name: Visual Regression Test
on: deployment_status
jobs:
  build:
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: Percy Test
        run: |
          npm install
          npx percy exec -- node test/snapshots.js
        env:
          PERCY_TOKEN: ${{ secrets.PERCY_TOKEN }}
          DEPLOY_URL: ${{ github.event.deployment_status.target_url }}
Instead of running screenshots of all pages (e.g. blog posts individually == too many) I'm continuously running them on three specific URLs. These pages cover most of the ways I use UI components both in a "dark theme" and "light theme". I might also improve this in the future only to screenshot page that have a HTML diff. Here's the sample snapshots file:

const PercyScript = require('@percy/script');
PercyScript.run(async (page, percySnapshot) => {
  await page.goto(process.env.DEPLOY_URL);
  await percySnapshot('homepage');
  await page.click('#toggle-theme');
  await percySnapshot('homepage - dark');
});
And that's all for today folks! I hope you learned something.