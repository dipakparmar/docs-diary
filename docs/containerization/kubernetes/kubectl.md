---
id: kubectl
title: kubectl
sidebar_label: kubectl
---

## Installation

### Linux

```bash
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
```
```bash
chmod +x ./kubectl && sudo mv ./kubectl /usr/local/bin/kubectl
```