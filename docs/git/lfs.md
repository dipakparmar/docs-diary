---
id: lfs
title: Git lfs
sidebar_label: LFS
---

```bash
git clone --mirror ${BITBUCKET_REPO_URL} local_folder && pushd local_folder
git lfs migrate import --everything --verbose --include="*.wav,*.psd,*.tif"
git reflog expire --expire-unreachable=now --all && git gc --prune=now --aggressive
git push --mirror ${GITHUB_REPO_URL}
```
