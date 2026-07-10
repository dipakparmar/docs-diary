// ponytail: hand-rolled instead of a third-party plugin — the routes and
// titles already come out of the content-docs plugin, so this is just a
// postBuild read of that data plus two text files.
const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', '..');

function stripFrontMatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

// Fumadocs-style: llms.txt (index), llms-full.txt (everything), and a raw
// *.md copy of every page for agents that fetch `<url>.md` directly.
async function postBuild({ outDir, siteConfig, plugins }) {
  const docsPlugins = plugins.filter((p) => p.name === 'docusaurus-plugin-content-docs');
  const docs = docsPlugins
    .flatMap((p) => p.content?.loadedVersions ?? [])
    .flatMap((v) => v.docs)
    .filter((d) => !d.draft && !d.unlisted);

  const pages = docs
    .map((doc) => {
      const filePath = path.join(SITE_DIR, doc.source.replace(/^@site[\\/]/, ''));
      const body = stripFrontMatter(fs.readFileSync(filePath, 'utf8')).trim();
      return { route: doc.permalink, title: doc.title, body };
    })
    .sort((a, b) => a.route.localeCompare(b.route));

  // ponytail: root route ("/") would otherwise write a hidden `.md` dotfile,
  // which some static hosts refuse to serve — use index.md there instead.
  const mdPath = (route) => (route === '/' ? '/index.md' : `${route}.md`);

  for (const page of pages) {
    const dest = path.join(outDir, mdPath(page.route));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, page.body);
  }

  const index = [
    `# ${siteConfig.title}`,
    '',
    `> ${siteConfig.url}`,
    '',
    '## Docs',
    '',
    ...pages.map((p) => `- [${p.title}](${siteConfig.url}${mdPath(p.route)})`),
    '',
  ].join('\n');
  fs.writeFileSync(path.join(outDir, 'llms.txt'), index);

  const full = pages.map((p) => `# ${p.title}\n\n${p.body}`).join('\n\n---\n\n');
  fs.writeFileSync(path.join(outDir, 'llms-full.txt'), full);
}

module.exports = function llmsTxtPlugin() {
  return { name: 'llms-txt', postBuild };
};
