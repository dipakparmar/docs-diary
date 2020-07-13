---
id: cli
title: Rancher CLI
sidebar_label: CLI
---

## Installing Rancher CLI

### Linux

```bash
#!/bin/bash

# Download rancher and rancher-compose command line tools
wget -O rancher-cli.tar.gz $(curl -s https://api.github.com/repos/rancher/cli/releases/latest | grep browser_download_url | grep 'linux-amd64' | head -n 1 | cut -d '"' -f 4)
wget -O rancher-compose.tar.gz $(curl -s https://api.github.com/repos/rancher/rancher-compose/releases/latest | grep browser_download_url | grep 'linux-amd64' | head -n 1 | cut -d '"' -f 4)

# extract the binaries from the tar archive
sudo tar -xzvf rancher-cli.tar.gz -C /usr/local/bin --strip-components=2
sudo tar -xzvf rancher-compose.tar.gz -C /usr/local/bin --strip-components=2

# Remove the archive
rm rancher-cli.tar.gz rancher-compose.tar.gz -f
```