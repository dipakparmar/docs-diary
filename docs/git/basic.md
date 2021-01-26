---
id: basic
title: Git Basic
sidebar_label: Basic
slug: /
---

Just quick and simple guide for daily used commands!

## Installing Git

### Windows

Download from [git-scm](https://git-scm.com/download/win) and Install.

### Mac

Install with homebrew package manager

```bash
brew install git
```

### Linux

For RPM based os like fedora or cent-os

```bash
sudo dnf install git-all
```

For debian based like ubuntu

```bash
sudo apt install git-all
```

## Create a new repository

create a new folder and then

```bash
git init
```

## Clone the repository

### https method

```bash
git clone [url of repo] ./
```

### ssh method

```bash
git clone username@host:user/reponame ./
```

## Add & Commit

### Add sepecifc file/s

to change index

```bash
git add [filename]
```

### Add all changed files

to change index

```bash
git add .
```

### Commit the message

for changes in files

```bash
git commit -m "Commit message"
```

## Pushing changes

### Push local head changes

to remote master

```bash
git push origin master
```

### Add remote server to repo

```bash
git remote add origin [repo url]

```

## Branching

### Create

new branch from local head (current state of changes)

```bash
git checkout -b [new branch name]
```

### Switch

back to master or other branch

```bash
git checkout master
```

### Delete

the branch

```bash
git checkout -b [branch name]
```

### Push changes

```bash
git push origin [branch name]

```

## Merge and update

### Update

the local repo to latest commit from remote

```bash
git pull
```

### Merge

other branch into current branch

```bash
git merge [branch name]
```

### Check diff

between two branches

```bash
git diff [source branch] [target branch]
```

## Logs

### All log

```bash
git log
```

### Commit log by author

```bash
git log --author=[username]
```

### Log for changed files

```bash
git log --name-status
```

## Tags

### Add tag (locally)

to specific commit

```bash
git tag [tag name] [commmit]
```

### Delete tag (locally)

```bash
git tag --delete [tag name]
```

### Push specific tag to remote

```bash
git push origin [tag name]
```

### Push all local tags

to remote

```bash
git push origin --tags
```

### Create empty branch without history (no previous commits)

```bash
git checkout --orphan [new branch name]
```

## Tweaks

### Showing colorful output

of command results (works only in local repo.)

```bash
git config color.ui true
```

### .gitignore

[Generate .gitignore with gitingnore.io](http://gitignore.io/)
