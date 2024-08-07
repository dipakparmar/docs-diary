---
id: gpg
title: Git GPG
sidebar_label: GPG
---

## Installing gpg client

### mac

Installing with HomeBrew Client 

```
brew install gpg
```

## Setting up default GPG Client

```
git config --global gpg.program gpg2
```

## Setting up GPG Key

Better to use gpg2 instead of gpg in all below commands

### Generating a new pgp key 
```

gpg --gen-key
```

maybe you need some random work in your OS to generate a key. so run this command: 

```
find ./* /home/username -type d | xargs grep some_random_string > /dev/null
```

### Checking current keys

```
gpg --list-secret-keys --keyid-format LONG
```

### See your gpg public key

```
gpg --armor --export YOUR_KEY_ID
````

 **YOUR_KEY_ID** is the hash in front of `sec` in previous command. (for example `sec 4096R/234FAA343232333` => key id is: **234FAA343232333**)

### Set a gpg key for git
```
git config --global user.signingkey your_key_id
```

### To sign a single commit
```
git commit -S -a -m "Test a signed commit"
```

### Auto-sign all commits globaly
```
git config --global commit.gpgsign true
```