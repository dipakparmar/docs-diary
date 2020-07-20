---
id: host-installation
title: Rancher Host Installation
sidebar_label: Host Installation
---

### Rancher - Docker Installation

```bash
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  rancher/rancher:latest \
  --acme-domain <YOUR.DNS.NAME>
  ```