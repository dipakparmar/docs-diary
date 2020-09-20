
---
id: cleaning-node
title: Cleaning the Node
sidebar_label: Cleaning the node
---

## My Script

```bash
#!/bin/bash
echo "About to destroy Rancher 2.x install"
echo "5s to cancel with ^c"
echo
sleep 5

containers=$(docker ps -a | grep -E "rancher|k8s" | awk '{print $1}')
if [ "${containers}x" != "x" ]
then
  docker rm -f $containers
else
  echo "No containers - ignoring docker rm"
fi

images=$(docker images -a | grep -E "rancher|k8s" | awk '{print $3}')
if [ "${images}x" != "x" ]
then
  docker rmi $images
else
  echo "No images - ignoring docker rmi"
fi

docker volume prune


cleanupdirs="/var/lib/etcd /etc/kubernetes /etc/cni /opt/cni /var/lib/cni /var/run/calico /opt/rke"
for dir in $cleanupdirs; do
  echo "Removing $dir"
  rm -rf $dir
done

```

## Other

https://gist.github.com/superseb/06539c6dcd377e118d72bfefdd444f81#file-extended-cleanup-rancher2-sh

```bash
#!/bin/sh
# Backup your data
# Use at your own risk
# Usage ./extended-cleanup-rancher2.sh
# Include clearing all iptables: ./extended-cleanup-rancher2.sh flush
docker rm -f $(docker ps -qa)
docker rmi -f $(docker images -q)
docker volume rm $(docker volume ls -q)
for mount in $(mount | grep tmpfs | grep '/var/lib/kubelet' | awk '{ print $3 }') /var/lib/kubelet /var/lib/rancher; do umount $mount; done
cleanupdirs="/etc/ceph /etc/cni /etc/kubernetes /opt/cni /opt/rke /run/secrets/kubernetes.io /run/calico /run/flannel /var/lib/calico /var/lib/etcd /var/lib/cni /var/lib/kubelet /var/lib/rancher/rke/log /var/log/containers /var/log/pods /var/run/calico"
for dir in $cleanupdirs; do
  echo "Removing $dir"
  rm -rf $dir
done
cleanupinterfaces="flannel.1 cni0 tunl0"
for interface in $cleanupinterfaces; do
  echo "Deleting $interface"
  ip link delete $interface
done
if [ "$1" = "flush" ]; then
  echo "Parameter flush found, flushing all iptables"
  iptables -F -t nat
  iptables -X -t nat
  iptables -F -t mangle
  iptables -X -t mangle
  iptables -F
  iptables -X
  /etc/init.d/docker restart
else
  echo "Parameter flush not found, iptables not cleaned"
  ```

https://gist.github.com/superseb/06539c6dcd377e118d72bfefdd444f81#gistcomment-3341085

  ```bash
  #!/bin/bash
# Backup your data
# Use at your own risk
# Usage ./extended-cleanup-rancher2.sh
# Include clearing all iptables: ./extended-cleanup-rancher2.sh flush
containers=$(docker ps -qa)
[[ ! -z "$containers" ]] && docker rm -f $containers
images=$(docker images -q)
[[ ! -z "$images" ]] && docker rmi -f $images
volumes=$(docker volume ls -q)
[[ ! -z "$volumes" ]] && docker volume rm $volumes
for mount in $(mount | grep '/var/lib/kubelet' | awk '{ print $3 }') /var/lib/kubelet /var/lib/rancher; do umount $mount; done
cleanupdirs="/etc/ceph /etc/cni /etc/kubernetes /opt/cni /opt/rke /run/secrets/kubernetes.io /run/calico /run/flannel /var/lib/calico /var/lib/etcd /var/lib/cni /var/lib/kubelet /var/lib/rancher/rke/log /var/log/containers /var/log/pods /var/run/calico"
for dir in $cleanupdirs; do
  echo "Removing $dir"
  rm -rf $dir
done
cleanupinterfaces="flannel.1 cni0 tunl0"
for interface in $cleanupinterfaces; do
  echo "Deleting $interface"
  ip link delete $interface
done
if [ "$1" = "flush" ]; then
  echo "Parameter flush found, flushing all iptables"
  iptables -F -t nat
  iptables -X -t nat
  iptables -F -t mangle
  iptables -X -t mangle
  iptables -F
  iptables -X
  service docker restart
else
  echo "Parameter flush not found, iptables not cleaned"
fi
```

Ref:

- https://rancher.com/docs/rancher/v2.x/en/cluster-admin/cleaning-cluster-nodes/
- https://medium.com/@krisadas/remove-rancher-node-without-delete-vm-b7218d8ae76c