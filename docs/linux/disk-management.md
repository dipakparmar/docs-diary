---
id: disk-management
title: Disk Management
sidebar_label: Disk Management
---

### Check Partations

```bash 
sudo lsblk
```

Output 

```bash
Output
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
loop0     7:0    0 91.1M  1 loop /snap/core/6531
loop1     7:1    0 56.7M  1 loop /snap/google-cloud-sdk/75
sda       8:0    0   10G  0 disk 
├─sda1    8:1    0  9.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part /boot/efi
sdb       8:16   0   10G  0 disk 
```

### Format the disk (ext4)

```bash
sudo mkfs.ext4 -m 0 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/DEVICE_ID
```

### Mount the new disk

Create a new directory

```bash
sudo mkdir -p /folder/directory
```

Mount disk to the directory

```bash
sudo mount -o discard,defaults /dev/sdb /folder/directory
```

Set read write permission
```bash
sudo chmod a+w /folder/directory
```

### Set up auto mount on Restart

Creating backup of current fstab (failsafe 😉)

```bash
sudo cp /etc/fstab /etc/fstab.backup
```

Get the UUID of the disk

```bash
sudo blkid /dev/DEVICE_ID
```
Create an entry in /etc/fstab to mount the /dev/sdb persistent disk at /folder/directory using its UUID.

```bash
echo UUID=`sudo blkid -s UUID -o value /dev/sdb` /folder/directory ext4 discard,defaults,nofail 0 2 | sudo tee -a /etc/fstab
```

**Note: Replace dev/sdb if your disk id is different**

## Verify entry

```bash
cat /etc/fstab
```