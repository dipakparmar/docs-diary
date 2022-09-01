---
id: rsync
title: Rsync
sidebar_label: rsync
keywords: [rsync, sync files and directories, sync files and directories between servers],
description: 'Learn basics of rsync cli to sync files and directories.'
tags: [Files, Tools]
---
## Syntax

```bash
rsync [options] source [destination]
```

**Options**:

- `-a, --archive` copy all metadata with sync (symbolic links, file permissions, user & group ownership and timestamps etc.)
- `-v, --verbose` will give you summary of process 
- `-h, --human-readable format` Outputs in a human readable format. 
- `-z, --compress` compress file data during the transfer

## Local

### Copy data from `foo` to `bar`

```bash
rsync -avh foo/ bar/ 
```

## Remote

### Basics

```bash
rsync local-file user@remote-host:remote-file
```

### Rsync using ssh

```bash
rsync -avhze ssh /foo user@remote-host:/tmp/
```

### Rsync with particular file permissions

```bash
rsync -avhe ssh --chown=USER:GROUP /foo user@remote-host:/tmp/
```

### Rsync with --ignore-existing-files

Does not ignore directory

```bash
rsync --ignore-existing -avhe /foo user@remote-host:/tmp/
```

### Show progress during transfer

```bash
rsync -avhe ssh --progress /foo user@remote-host:/tmp/
```

### Update the remote only if there is a newer version is on the local filesystem ( timestampz based )

```bash
rsync -avhe ssh --progress --update /foo root@remote-host:/tmp/
```

### Automatically delete files from local-host after successful transferring

delete only files not directories

```bash
rsync -avhe ssh --remove-source-files /foo user@backup-server:/tmp
```

### Performing a Dry run with rsync

```bash
rsync -avhe ssh --dry-run --chown=USER:GROUP /foo user@remote-host:/
```