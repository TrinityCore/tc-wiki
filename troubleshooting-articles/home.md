---
title: Troubleshooting
description: Collection of common troubles while working with TrinityCore
published: true
date: 2024-05-15T09:03:55.957Z
tags: troubleshooting, problem
editor: markdown
dateCreated: 2024-05-15T07:58:53.487Z
---

# Troubleshooting
At this page we will adress common errors/issues while working with TrinityCore.

If your issue is not listed, you may check out our social media channels to get support.

# Error/Issue

<details>
<summary><h2 style="display:inline-block">dyld: Library not loaded: libmysqlclient.XX.dylib</h2></summary>  
  
  # Tabs {.tabset}
  ## Issue

  Under macOS if you try to run the core and get the following error:

  ```bash
  dyld: Library not loaded: libmysqlclient.18.dylib

  Referenced from: /your/path/to/bin/./worldserver
  Reason: image not found
  Trace/BPT trap: 5
  ```

  This means it is looking for libmysqlclient.18.dylib file under /usr/lib/ folder but that file is not there.

  ## Solution

  The solution is to locate that file and create a symbolic link under /usr/lib/ by typing:

  ```bash
  sudo ln -s /path/to/your/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
  ```

  For example:

  ```bash
  sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib
  ```
</details>

<details>
<summary><h2 style="display:inline-block">Application Error: 0xc000007b</h2></summary>  
  
  # Tabs {.tabset}
  ## Issue
  The following error appears when launching worldserver.exe, authserver.exe or bnetserver.exe:
  
   ```bash
   Application Error
 
   The application was unable to start correctly (0xc000007b). Click OK to close the application.
   ```
  
  ## Solution1  
  This error usually happens when mixing 32 bit and 64 bit DLLs.
  
  It means that if you compiled TC in 32 bits mode (CMake option selected was "Visual Studio 12 2013") you will need the required DLLs in 32 bits as well.
  If you compiled TC in 64 bits mode (Cmake option selected was "Visual Studio 12 2013 Win64") you need all the DLLs in 64 bits mode. 

  >  1. Make sure that the DLLs: libeay32.dll, libmysql.dll, ssleay32.dll and libzmq-v120-mt-X_X_X.dll match the compile mode you selected.
  > a. Unsure if a .dll is 32 bits or 64 bits? See How to tell if .dll is 32 bits or 64 bits?.
  > b. Download links to all these dependencies are available in the page Requirements.
    <!-- {blockquote:.is-success} -->

  ## Solution2

  Any content here will go into the third tab...
</details>

<div class="boxBorder">
Your text here...
</div>