---
id: esxi-troubleshooting
title: ESXi Troubleshooting
sidebar_label: ESXi Troubleshooting
---

### Changing from passthrough to non-passthrough devices fails to take effect after a reboot

1. Edit the `/etc/vmware/esx.conf` file by changing the owner of the PCI device from passthru to vmkernel.

   Example of the edit:

   Change from: `/device/000:02.0/owner = "passthru"`

   Change to: `/device/000:02.0/owner = "vmkernel"`

   Replace 000.02.0 with the PCI address of the device. You can it fro ESXi Dashboard.

2. Reboot the ESXi host.

> Note: for some reason if the line is not there, adding it does not work.

Ref.: https://www.reddit.com/r/vmware/comments/k7p6zc/unable_to_disable_passthrough_for_ehci_controllers/
