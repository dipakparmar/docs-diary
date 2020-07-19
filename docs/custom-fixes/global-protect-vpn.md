---
id: global-protect-vpn
title: Global Protect VPN
sidebar_label: 🔑 Global Protect VPN
---


### Prevent Auto Starting Global Protect VPN  🌏

1. Open Finder and press `cmd + shift + G`
2. Go to directory by pasting 

```bash
~/Library/LaunchAgents/
```

3. Change value for following `<key>RunAtLoad</key>` & `<key>KeepAlive</key>` to **false**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.paloaltonetworks.gp.pangpa</string>
    <key>LimitLoadToSessionType</key>
    <string>Aqua</string>
    <key>Program</key>
    <string>/Applications/GlobalProtect.app/Contents/MacOS/GlobalProtect</string>
    <key>RunAtLoad</key>
    <false/>
    <key>KeepAlive</key>
    <false/>
</dict>
</plist>
```
