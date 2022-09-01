---
id: basics
title: Helm Basic Commands
sidebar_label: Basics
keywords: [Helm Basic Commands, Helm basics, helm install app, helm upgrade, helm rollback, helm hooks, helm charts, helm charts management, helm plugin management, helm repo search]
description: 'Learn about helm basic commands and their usecase from installing new helm chart to upgrading chart, uninstalling helm chart and building/packing new helm chart'
tags: [Helm, Kubernetes]
---

## Install and Uninstall Apps

Install an app:

```bash
helm install [app-name] [chart]
```

Install an app in a specific namespace:

```bash
helm install [app-name] [chart] --namespace [namespace]
```

Override the default values with those specified in a file of your choice:

```bash
helm install [app-name] [chart] --values [yaml-file/url]
```

Run a test installation to validate and verify the chart:

```bash
helm install [app-name] --dry-run --debug
```

Uninstall a release:

```bash
helm uninstall [release]
```

## App Upgrade and Rollback

Upgrade an app:

```bash
helm upgrade [release] [chart]
```

Rollback changes if the upgrade fails:

```bash
helm upgrade [release] [chart] --atomic
```

Upgrade a release. If it does not exist on the system, install it:

```bash
helm upgrade [release] [chart] --install
```

Upgrade to a specified version:

```bash
helm upgrade [release] [chart] --version [version-number]
```

Rollback a release:

```bash

helm rollback [release] [revision]
```

## Download Release Information

Download all the release information:

```bash
helm get all [release]
```

Download all hooks:

```bash
helm get hooks [release]
```

Download the manifest:

```bash
helm get manifest [release]
```

Download the notes:

```bash
helm get notes [release]
```

Download the values file:

```bash
helm get values [release]
```

Fetch release history:

```bash
helm history [release]
```

## Add, Remove, and Update Repositories

Add a repository from the internet:

```bash
helm repo add [repository-name] [url]
```

Remove a repository from your system:

```bash
helm repo remove [repository-name]
```

Update repositories:

```bash
helm repo update
```

### List and Search Repositories

```bash
helm repo list
```

Generate an index file containing charts found in the current directory:

```bash
helm repo index
```

Search charts for a keyword:

```bash
helm search [keyword]
```

```bash
helm search repo [keyword]
```

Search Helm Hub:

```bash
helm search hub [keyword]
```

## Release Monitoring

List all available releases in the current namespace:

```bash
helm list
```

List all available releases across all namespaces:

```bash
helm list --all-namespaces
```

List all releases in a specific namespace:

```bash
helm list --namespace [namespace]
```

List all releases in a specific output format:

```bash
helm list --output [format]
```

Apply a filter to the list of releases using regular expressions:

```bash
helm list --filter '[expression]'
```

See the status of a specific release:

```bash
helm status [release]
```

### Display the release history

helm history [release]
See information about the Helm client environment:

```bash
helm env
```

## Plugin Management

Install plugins:

```bash
helm plugin install [path/url1] [path/url2] ...
```

View a list of all installed plugins:

```bash
helm plugin list
```

Update plugins:

```bash
helm plugin update [plugin1] [plugin2] ...
```

Uninstall a plugin:

```bash
helm plugin uninstall [plugin]
```

## Chart Management

```bash
helm create [name]
```

Package a chart into a chart archive:

```bash
helm package [chart-path]
```

Run tests to examine a chart and identify possible issues:

```bash
helm lint [chart]
```

Inspect a chart and list its contents:

```bash
helm show all [chart]
```

Display the chart’s definition:

```bash
helm show chart [chart]
```

Display the chart’s values:

```bash
helm show values [chart]
```

Download a chart:

```bash
helm pull [chart]
```

Download a chart and extract the archive’s contents into a directory:

```bash
helm pull [chart] --untar --untardir [directory]
```

Display a list of a chart’s dependencies:

```bash
helm dependency list [chart]
```

Get Help and Version Information
Display the general help output for Helm:

```bash
helm --help
```

Show help for a particular helm command:

```bash
helm [command] --help
```

See the installed version of Helm:

```bash
helm version
```
