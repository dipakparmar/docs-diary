---
id: global-protect-vpn
title: Global Protect VPN
sidebar_label: 🔑 Global Protect VPN
tags: [macOS, VPN, Global Protect VPN]
description: Stop Global Protect VPN from auto starting on boot and auto start after force quiting on macOS.
---

### Prevent Auto Starting Global Protect VPN  🌏

1. Open Finder and press <kbd>cmd</kbd> + <kbd>shift</kbd>  + <kbd>G</kbd>  .
2. Go to directory `~/Library/LaunchAgents/`  or run following command in terminal.

    ```bash
    open ~/Library/LaunchAgents/
    ```

3. Change value for following `<key>RunAtLoad</key>` & `<key>KeepAlive</key>` to **false** (Line. 12 & 14).

    ```xml {12,14} showLineNumbers
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