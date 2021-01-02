---
id: certbot
title: certbot
sidebar_label: certbot
---

### certbot register a email

```shell
certbot register -m abc@example.com --work-dir ./ --logs-dir=./logs/
```

### generate a ssl cert with cerbot (let's encrypt)

```shell
certonly -d "*.xyz.com" -d "www.xyz.com" --manual
```
