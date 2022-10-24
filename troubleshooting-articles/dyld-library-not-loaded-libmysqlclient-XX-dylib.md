---
title: dyld: Library not loaded: libmysqlclient.XX.dylib
description: 
published: true
date: 2022-10-24T09:38:40.958Z
tags: troubleshooting, libmysqlclient.xx.dylib
editor: markdown
dateCreated: 2022-10-24T09:29:55.086Z
---

# Problem
Under macOS if you try to run the core and get the following error:

```bash
dyld: Library not loaded: libmysqlclient.18.dylib

Referenced from: /your/path/to/bin/./worldserver
Reason: image not found
Trace/BPT trap: 5
```

This means it is looking for libmysqlclient.18.dylib file under /usr/lib/ folder but that file is not there.

# Solution
The solution is to locate that file and create a symbolic link under /usr/lib/ by typing:

```bash
sudo ln -s /path/to/your/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
```

For example:

```bash
sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
```
