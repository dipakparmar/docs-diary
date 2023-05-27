# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

![GH Pages Build](https://github.com/dipakparmar/docs-diary/workflows/GH%20Pages%20Build/badge.svg)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

![Alt](https://repobeats.axiom.co/api/embed/38bd3d5aec7e29ab833432f5b13e99cb04bddc4f.svg 'Repobeats analytics image')
