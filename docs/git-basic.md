---
id: git-basic
title: Git Basic
sidebar_label: Basic
---

Just quick and simple guide for daily used commands!

## Installing Git

### Windows

Download from [git-scm](https://git-scm.com/download/win) and Install.

### Mac

Install with homebrew package manager

```
brew install git
```

### Linux

For RPM based os like fedora or cent-os

```
sudo dnf install git-all
```

For debian based like ubuntu

```
sudo apt install git-all
```

## Create a new repository

create a new folder and then 

```
git init
```

## Clone the repository

### https method

```
git clone [url of repo] ./
```

### ssh method

```
git clone username@host:user/reponame ./
```

## Add & Commit

### Add sepecifc file/s 
to change index

```
git add [filename]
```
### Add all changed files
to change index

```
git add .
```

### Commit the message
for changes in files

```
git commit -m "Commit message"
```

## Pushing changes 

### Push local head changes
to remote master 

```
git push origin master
```

### Add remote server to repo

```
git remote add origin [repo url]

```

## Branching

### Create
new branch from local head  (current state of changes)

```
git checkout -b [new branch name]
```

### Switch
back to master or other branch

```
git checkout master
```

### Delete
the branch 

```
git checkout -b [branch name]
```

### Push changes

```
git push origin [branch name]

```


## Merge and update

### Update
the local repo to latest commit from remote

```
git pull
```
 
### Merge 
other branch into current branch

```
git merge [branch name]
```

### Check diff 
between two branches

```
git diff [source branch] [target branch]
```

## Logs

### All log

```
git log
```

### Commit log by author

```
git log --author=[username]
```

### Log for changed files

```
git log --name-status
```


## Tags

### Add tag (locally)
to specific commit 

```
git tag [tag name] [commmit]
```

### Delete tag (locally)

```
git tag --delete [tag name]
```

### Push specific tag 
to remote

```
git push origin [tag name]
```

### Push all local tags 
to remote

```
git push origin --tags
```

## Tweaks

### Showing colorful output 
of command results (works only in local repo.)

```
git config color.ui true
```

