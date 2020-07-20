---
id: helm
title: Helm
sidebar_label: Helm
---

## Installation

### Linux 

```bash
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

## Troubleshooting

### --name flag not found

Helm 3 uses new command syntax ` helm install [NAME] [CHART] [flags]`

```bash
helm install stable/nginx-ingress --name my-nginx
```

