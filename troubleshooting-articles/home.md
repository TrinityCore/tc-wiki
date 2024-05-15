---
title: Troubleshooting
description: Collection of common troubles while working with TrinityCore
published: true
date: 2024-05-15T08:04:21.152Z
tags: troubleshooting, problem
editor: markdown
dateCreated: 2024-05-15T07:58:53.487Z
---

# Troubleshooting
At this page we will adress common errors/issues while working with TrinityCore.
Use the table of content to find a solution for your issues.

If your issue is not listed, you may check out our social media channels to get support.

## Error/Issue
<details>
  <summary>dyld: Library not loaded: libmysqlclient.XX.dylib</summary>
  
  ## dyld: Library not loaded: libmysqlclient.XX.dylib
  Under macOS if you try to run the core and get the following error:

  ```bash
  dyld: Library not loaded: libmysqlclient.18.dylib

  Referenced from: /your/path/to/bin/./worldserver
  Reason: image not found
  Trace/BPT trap: 5
  ```

  This means it is looking for libmysqlclient.18.dylib file under /usr/lib/ folder but that file is not there.

  ### Solution
  The solution is to locate that file and create a symbolic link under /usr/lib/ by typing:

  ```bash
  sudo ln -s /path/to/your/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
  ```

  For example:

  ```bash
  sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
  ```
</details>