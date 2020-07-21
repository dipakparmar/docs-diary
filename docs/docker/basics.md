---
id: basics
title: Docker Basic
sidebar_label: Basics
---

### Manage Docker as a non-root user

> The docker group grants privileges equivalent to the root user.

1. Create the docker group.

```bash
sudo groupadd docker
```

2. Add your user to the docker group.

```bash
sudo usermod -aG docker $USER
```

3. Log out and log back in so that your group membership is re-evaluated.



### Configure Docker to start on boot

```bash
sudo systemctl enable docker
```

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

### Checking logs of container

```bash
docker logs <container id>
```
for live log pass `-f` or `--follow` eg. `docker logs -f <container id>`