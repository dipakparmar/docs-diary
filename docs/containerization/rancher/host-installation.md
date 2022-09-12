---
id: host-installation
title: Rancher Host Installation
sidebar_label: Host Installation
keywords: [Rancher Server Installation, Rancher Host Installation, Rancher Installation]
description: 'Learn how to setup rancher server aka. rancher host.'
tags: [Rancher, Kubernetes, Containerization, Docker]
---

### Rancher - Docker Installation

```bash
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  rancher/rancher:latest \
  --acme-domain <YOUR.DNS.NAME>
  ```