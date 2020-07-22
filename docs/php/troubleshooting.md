---
id: troubleshooting
title: PHP Troubleshooting
sidebar_label: Troubleshooting
---

#### Checking if php module is installed or not

```php
php -r 'echo "imagick is ".(extension_loaded("imagick")?"":"not ")."installed\n";'
```