---
id: curl
title: curl
sidebar_label: curl
keywords: [curl basics]
description: 'Learn some basics of curl cli tool and usefull combination of its options.'
tags: [Tools]
---

### Curl run remote script

```shell
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

### ping and retrieve ssl info of the host

```shell
curl -gkvLI -H 'User-Agent: your-agent-name daemon 2.4' -H 'Accept: */*' -H 'Connection: Close' -H 'Accept-Language: en' -m 30 --connect-timeout 10 https://xyx.com
```
