---
id: basics
title: Docker Basic
sidebar_label: Basics
---

### List all containers (only IDs)
```bash
docker ps -aq
```

### Stop all running containers
```bash
docker stop $(docker ps -aq)
```

### Remove all containers
```bash
docker rm $(docker ps -aq)
```

### Remove all images
```bash
docker rmi $(docker images -q)
```


