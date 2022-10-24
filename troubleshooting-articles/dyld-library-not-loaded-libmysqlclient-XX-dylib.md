---
title: dyld: Library not loaded: libmysqlclient.XX.dylib
description: 
published: true
date: 2022-10-24T09:38:31.040Z
tags: troubleshooting, libmysqlclient.xx.dylib
editor: markdown
dateCreated: 2022-10-24T09:29:55.086Z
---

# Problem
Under macOS if you try to run the core and get the following error:

```bash
apt-get update
apt-get install git clang cmake make gcc g++ libmariadb-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev libboost-all-dev mariadb-server p7zip default-libmysqlclient-dev
update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang 100
```

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
