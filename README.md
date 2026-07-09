# Dipak's Docs Diary

My personal knowledge base — notes, guides, and fixes on DevOps, infrastructure,
networking, and everyday engineering. Live at **[docs.dipak.tech](https://docs.dipak.tech)**.

Built with [Docusaurus 3](https://docusaurus.io/) + TypeScript and Tailwind,
with Algolia DocSearch for search. The UI is themed to match
[dipak.tech](https://dipak.tech).

## Getting started

Requires [Node.js](https://nodejs.org) 24 (see [`.nvmrc`](.nvmrc)) and
[pnpm](https://pnpm.io).

```bash
pnpm install     # install dependencies
pnpm start       # dev server with live reload → http://localhost:3000
pnpm build       # build the static site into ./build
pnpm serve       # preview the production build locally
pnpm typecheck   # type-check with tsc
```

## Writing content

Docs live in [`docs/`](docs/), organized by topic (networking, containerization,
version control, …). Each page is Markdown/MDX with front matter, and the sidebar
is generated automatically — drop a new `.md`/`.mdx` file into the relevant folder
and it appears in the nav.

## Releasing

Versioning is managed with [Changesets](https://github.com/changesets/changesets).
For any user-facing change, add a changeset:

```bash
pnpm changeset
```

The version bump and `CHANGELOG.md` entry are applied when changes land on `main`.

## License

[MIT](LICENSE) © Dipak Parmar

![Repobeats analytics](https://repobeats.axiom.co/api/embed/38bd3d5aec7e29ab833432f5b13e99cb04bddc4f.svg 'Repobeats analytics image')
