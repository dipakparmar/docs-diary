---
id: dig
title: DNS Dig
sidebar_label: Dig
---

## Installing Dig util 

### Ubuntu 

```bash
apt-get install dnsutils
```

### Check Installation

```bash
dig -v
```

## Get All DNS Record Types

```bash
dig example.com ANY
```

## Get A Records

```bash
 dig EXAMPLE.COM +noall +answer
```

## Get NS Records

```bash
dig @8.8.8.8 +short NS domain.com
```

## Search For Record Type

```bash
dig example.com MX
```

```
dig example.com  txt (Query TXT record)
dig example.com  cname (Query CNAME record)
dig example.com  ns (Query NS record)
dig example.com  A (Query A record)
```

## Trace DNS Path

```bash
dig example.com +trace
```

## Reverse DNS Lookup

```bash
dig +answer -x 192.168.0.1
```

## Batch Queries

```
vi domain_list.txt
example.com
google.com
ubuntu.com
```

```bash
dig -f domain_list.txt +short
```