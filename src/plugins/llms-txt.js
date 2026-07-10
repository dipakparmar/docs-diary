// ponytail: hand-rolled instead of a third-party plugin — the routes and
// titles already come out of the content-docs plugin, so this is just
// reading that data plus writing/serving two text files.
const fs = require('fs');
const path = require('path');

function stripFrontMatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

// ponytail: root route ("/") would otherwise write a hidden `.md` dotfile,
// which some static hosts refuse to serve — use index.md there instead.
function mdPath(route) {
  return route === '/' ? '/index.md' : `${route}.md`;
}

function buildPages(allContent, siteDir) {
  const docs = Object.values(allContent['docusaurus-plugin-content-docs'] ?? {})
    .flatMap((content) => content?.loadedVersions ?? [])
    .flatMap((v) => v.docs)
    .filter((d) => !d.draft && !d.unlisted);

  return docs
    .map((doc) => {
      const filePath = path.join(siteDir, doc.source.replace(/^@site[\\/]/, ''));
      const body = stripFrontMatter(fs.readFileSync(filePath, 'utf8')).trim();
      return {route: doc.permalink, title: doc.title, body};
    })
    .sort((a, b) => a.route.localeCompare(b.route));
}

function footer(siteUrl) {
  return `\n\n---\n\nFull site index: ${siteUrl}/llms.txt\nFull site content: ${siteUrl}/llms-full.txt\n`;
}

function buildIndex(pages, siteConfig) {
  return [
    `# ${siteConfig.title}`,
    '',
    `> ${siteConfig.url}`,
    '',
    '## Docs',
    '',
    ...pages.map((p) => `- [${p.title}](${siteConfig.url}${mdPath(p.route)})`),
    '',
  ].join('\n');
}

function buildFull(pages) {
  return pages.map((p) => `# ${p.title}\n\n${p.body}`).join('\n\n---\n\n');
}

module.exports = function llmsTxtPlugin(context) {
  // Populated by allContentLoaded, read by both configureWebpack (dev) and
  // postBuild (static export) — same data, two consumers.
  let pages = [];

  return {
    name: 'llms-txt',

    allContentLoaded({allContent}) {
      pages = buildPages(allContent, context.siteDir);
    },

    // Serves the same *.md / llms*.txt content during `pnpm start`, so
    // "Copy Markdown" works in dev too, not just against a static build.
    configureWebpack() {
      return {
        devServer: {
          setupMiddlewares(middlewares) {
            middlewares.unshift({
              name: 'llms-txt-dev',
              middleware(req, res, next) {
                const url = req.url.split('?')[0];
                if (url === '/llms.txt') {
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                  res.end(buildIndex(pages, context.siteConfig));
                  return;
                }
                if (url === '/llms-full.txt') {
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                  res.end(buildFull(pages));
                  return;
                }
                if (url.endsWith('.md')) {
                  const route = url === '/index.md' ? '/' : url.replace(/\.md$/, '');
                  const page = pages.find((p) => p.route === route);
                  if (page) {
                    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
                    res.end(page.body + footer(context.siteConfig.url));
                    return;
                  }
                }
                next();
              },
            });
            return middlewares;
          },
        },
      };
    },

    // Fumadocs-style: llms.txt (index), llms-full.txt (everything), and a
    // raw *.md copy of every page for agents that fetch `<url>.md` directly.
    async postBuild({outDir, siteConfig}) {
      for (const page of pages) {
        const dest = path.join(outDir, mdPath(page.route));
        fs.mkdirSync(path.dirname(dest), {recursive: true});
        fs.writeFileSync(dest, page.body + footer(siteConfig.url));
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), buildIndex(pages, siteConfig));
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), buildFull(pages));
    },
  };
};
