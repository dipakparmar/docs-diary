---
id: networking
title: Networking
sidebar_label: Networking
---

### Find the process of service running/using port

#### Using lsof

```bash
lsof -i :22
```

#### Using ss

```bash
ss -ltnup 'sport = :22'
```

#### Using netstat

```bash
netstat -ltnup
```

- l – show only listening sockets
- t – show TCP connections
- n – show addresses in a numerical form
- u – show UDP connections
- p – show process id/program name
