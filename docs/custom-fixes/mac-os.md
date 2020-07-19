---
id: mac-os
title: mac OS
sidebar_label: 💻 mac OS
---

### Dock changes position on two screens 🖥

It was so annoying, when dock keep jumping from my main screen to another screen. for first few times i ignored but, it started furstrated me so went to google to findout some solution i'm the only one or some other two screen geeks are having same issue. And found that I'm not the one, found few soultions that I'm mentioning here.

#### 1. Apple's Mission control uses seperate space thing which distinguish your screens ⚠️

try disbaling displays have separte spaces

**Pro**: that fixes the moving dock, yay 🤩 but hear the con

**Con**:  you loose the multi desktop feature, it's kinda a second screen presenter mode for your screen so for this was workaround

> I checked **Mission Control** and **Display have separate Spaces** is checked. - "Felix Hernandez"


#### 2. For some pepole it's a bug and but for apple it's feature ✅

Found interesting reply by [SputnikTechnologies](https://discussions.apple.com/thread/5527972?answerId=23831944022#23831944022)

> Hey guys, So apparently, this is an actual feature and not a bug. Its been ******* me off as well as I use 3 monitors, but I read on a different forum how to actually make it appear on a different monitor and **all you have to do is actually move your mouse to the center of the screen, and move it all the way down as if you're trying to drive into the bottom of the screen.** you'll see it appears on any monitor you do this to (clearly being a feature). I think its stupid and would love to have the option to disable this without losing my separate spaces for each monitor, but I guess this is the Apple way. What can ya do? Hope this helps.



Orignal Discussion: https://discussions.apple.com/thread/5527972?answerId=23674095022#23674095022

### Reseting mac OS Dock 

copy and paste this on terminal 

```bash
defaults delete com.apple.dock; killall Dock
```