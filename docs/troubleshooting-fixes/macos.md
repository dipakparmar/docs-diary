---
id: macos
title: macOS Dock Troubleshooting
sidebar_label: 💻 macOS Dock
keywords: [Mac stop dock from Switching monitors, Dock keeps moving between monitors, macOS Dock]
tags: [macOS, macOS Dock, Dock, Troubleshooting]
description: Want to lock your Macs Dock to one screen? Here's how to keep the Dock on just one screen to keep it from moving.
---

## Dock changes position on two screens 🖥

It was so annoying when dock keeps jumping from my main screen to another screen. for the first few times, I ignored but, it started frustrated me so went to google to find out some solution I'm the only one or some other two screen geeks is having the same issue. And found that I'm not the one, found a few solutions that I'm mentioning here.

#### 1. Apple's Mission control uses a separate space thing which distinguishes your screens ⚠️

try disabling displays have separate spaces

**Pro**: that fixes the moving dock, yay 🤩 but here is the con

**Con**:  you lose the multi-desktop feature, it's kinda a second screen presenter mode for your screen so for this was a workaround

> I checked **Mission Control** and **Display has separate Spaces** is checked. - "Felix Hernandez"

#### 2. For some people it's a bug and but for apple, it's a feature ✅

*you can move dock from one screen to another screen by pointing arrow at the very bottom of the screen for 2-4 seconds! ✨*

Found interesting reply by [SputnikTechnologies](https://discussions.apple.com/thread/5527972?answerId=23831944022#23831944022)

> Hey guys, So apparently, this is an actual feature and not a bug. It's been ******* me off as well as I use 3 monitors, but I read on a different forum how to actually make it appear on a different monitor and **all you have to do is actually move your mouse to the center of the screen, and move it all the way down as if you're trying to drive into the bottom of the screen.** you'll see it appears on any monitor you do this to (clearly being a feature). I think it's stupid and would love to have the option to disable this without losing my separate spaces for each monitor, but I guess this is the Apple way. What can ya do? Hope this helps.

Orignal Discussion: https://discussions.apple.com/thread/5527972?answerId=23674095022#23674095022

### Reseting macOS Dock 

copy and paste this on terminal 

```bash
defaults delete com.apple.dock; killall Dock
```

### macOS maintenance fix with custom hidden features

https://www.titanium-software.fr/ 