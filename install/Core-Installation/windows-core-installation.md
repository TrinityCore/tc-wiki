---
title: Windows Core Installation
description: 
published: true
date: 2024-08-30T21:49:14.148Z
tags: 
editor: markdown
dateCreated: 2021-08-15T10:17:42.057Z
---

## Getting started

Before you get scared by this long guide, we assure you the procedure is quite simple.  
Most of the following steps are to be performed only the first time you install TrinityCore and only the updating procedures will need to be run from time to time.

## Required Software

See [Windows Requirements](https://trinitycore.info/en/install/requirements/windows)

## Pulling & Compiling the Source

### Pulling the Source  
 

1.  Create a directory in which Core files will be pulled (for example: **C:\\TrinityCore**).
2.  Right-click on the directory and click on **Git Extensions -> Clone** (on recent versions: **GitExt Clone...**)
3.  Fill in the data as follow:

| **3.3.5 (WotLK 3.3.5a Client)**<br><br>**This will clone 3.3.5 branch,**<br><br>**this is the RECOMMENDED branch for starters and people wanting playable content.**<br><br>![](/git_ext_335.png) |
| --- |
| **master (currently The War Within client)**<br><br>**This will clone master branch,**<br><br>**note that this is** **NOT** **the recommended branch for starters,** <br><br>**this branch doesn't ship most of content after 3.3.5a.**<br><br>![](/git_ext_master.png) |

Click **Clone**. Within a few minutes all of the TrinityCore source files will be pulled into the directory **C:\\TrinityCore**.

Note: If you don't specify a branch, git will pull master by default! 

### Configuring and generating Visual C++ solutions with CMake  
 

Before you begin, create an empty directory called **Build**. In this example, we will use **C:\\Build**.

> Note: The following images serve as an example and partly show outdated software versions:
{.is-info}

|     |     |     |
| --- | --- | --- |
| ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step1.png?version=1&modificationDate=1494114428581&cacheVersion=1&api=v2&width=171&height=250)<br><br>Click **Browse Source...** -> Select   <br>the source directory (C:\\TrinityCore) | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step2.png?version=2&modificationDate=1494114478005&cacheVersion=1&api=v2&width=171&height=250)<br><br>2\. Click  **Browse Build...**  -> Select  <br>the build directory (C:\\Build) | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step3.png?version=2&modificationDate=1494114552102&cacheVersion=1&api=v2&width=171&height=250)<br><br>3\. Click **Configure** |
| ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step4.png?version=2&modificationDate=1494114601828&cacheVersion=1&api=v2&width=347&height=250)<br><br>4\. Make sure that **Use default native compilers**  <br> is checked (*should be checked by default*). | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step5.png?version=2&modificationDate=1494114627637&cacheVersion=1&api=v2&width=347&height=250)<br><br>5\. In the drop-down menu, choose the  <br>version of the compiler you downloaded  <br>in the [Software Required](https://trinitycore.atlassian.net/wiki/pages/resumedraft.action?draftId=10977329) section. Be sure to choose  <br>**Win64** version if you work on 64-bits compilation | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step6.png?version=3&modificationDate=1494116827416&cacheVersion=1&api=v2&height=250)<br><br>6\. Click **Finish**. |
| ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step7.png?version=2&modificationDate=1494114684996&cacheVersion=1&api=v2&width=179&height=250)<br><br>7\. Make sure **Tools** is checked already.  <br>This will compile the map extractors  <br>needed later in the setup.  <br>(*in master (up to 6.2.4 tag) branch, this will also*  <br>*generate connection\_patcher.exe*) | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step8.png?version=2&modificationDate=1494114756019&cacheVersion=1&api=v2&width=179&height=250)<br><br>8\. Click **Configure** again. As long as you have error(s) typed in red in the log window, you will have to check  <br>your parameters and click again on it. | ![](https://trinitycore.atlassian.net/wiki/download/thumbnails/10977329/Step9.png?version=2&modificationDate=1494114778929&cacheVersion=1&api=v2&width=179&height=250)<br><br>9\. Click **Generate**. This will install the  <br>selected build files into your C:\\Build folder. |

> **Some errors fixes**
> 
> -   If MySQL is not found by CMake it is required to set MYSQL\_INCLUDE\_DIR = C:/XX/MySQL/MySQL Server 5.XX**/include** and MYSQL\_LIBRARY= C:/XX/MySQL/MySQL Server 5.XX/**lib\_XX/libmysql.lib**.  
>     XX depends if you are compiling in 32 or 64 bits mode and the mysql version you have selected.
> -   If you get linker errors (e.g "error LNK2019: unresolved external symbol mysql\_server\_init"), make sure MYSQL\_LIBRARY is set to the libmysql.lib that matches your compile mode (x64 vs 32 bits).  
>     (If you do not see the MYSQL fields in CMake, tick the Advanced box).
> -   If you get an error that _CMake could NOT find OpenSSL_:
> 
> 1.  Check the **Advanced** checkbox
> 2.  Find the two OPENSSL entries in the list and point to the correct directories:  
>       _OPENSSL\_ROOT\_DIR_ is the installation path (by default, **C:/OpenSSL-Win32** or **C:/OpenSSL-Win64**)  
>       _OPENSSL\_INCLUDE\_DIR_ is the "include" folder in installation path (by default, **C:/OpenSSL-Win32/include** or **C:/OpenSSL-Win64/include**)

### Compiling the Source  
 

In Visual Studio, browse into your **C:\\Build** folder and open **TrinityCore.sln** with Visual Studio Community.

-   You can use the button \[**Open Project**\] in CMake window to open the solution directly with VS.

On the menu at the top, click **Build** and select **Configuration Manager**.

Set **Active Solution Configuration** to **RelWithDebInfo**

Right-click **ALL\_BUILD** and select **Build** (or go to the Build menu and click Rebuild Solution (Ctrl+Alt+F7)).

(if your GUI does not show Solution Explorer, click the **Build** menu and select **Rebuild Solution**).

1.  Compilation time differs from machine to machine, you can expect it to take anywhere between 5 and 30 minutes.
2.  If you are asked to "Reload build files" during the compile, do so.
3.  When the build is complete, you will find a message similar to the one below (the numbers may be different).

> **\========== Build: 22 succeeded, 0 failed, 0 up-to-date, 1 skipped ==========**
{.is-success}

You will find your freshly compiled binaries in the **C:\\Build\\bin\\RelWithDebInfo** or **C:\\Build\\bin\\Debug** folder. These are all used to run your server at the end of this instruction.

You will need the following files in order for the core to function properly:

| **3.3.5a**<br><br>**authserver.exe**  <br>**authserver.pdb**  <br>**authserver.conf.dist**  <br>**worldserver.exe**  <br>**worldserver.pdb**  <br>**worldserver.conf.dist**  <br>**libmysql.dll** <br>**legacy.dll**  <br>**libcrypto-3-x64.dll**  <br>**libssl-3-x64.dll** | **master (11.x)**<br><br>**bnetserver.exe**  <br>**bnetserver.pdb**  <br>**bnetserver.conf.dist**  <br>**bnetserver.cert.perm**  <br>**bnetserver.key.perm**  <br>**worldserver.exe**  <br>**worldserver.pdb**  <br>**worldserver.conf.dist**  <br>**libmysql.dll** <br>**legacy.dll**  <br>**libcrypto-3-x64.dll**  <br>**libssl-3-x64.dll**  <br>**openssl_ed25519.dll** |
| --- | --- |

  
There are four DLL files that need to be manually added to this folder, and you need to copy them over from the following installation/bin directories:

**libmysql.dll** →  C:\\Program Files\\MySQL\\MySQL Server 8.x\\lib\\

OpenSSL 3 requires the following files:

 **legacy.dll**
 **libssl-3-x64.dll**  
 **libcrypto-3-x64.dll** → C:\\OpenSSL-Win64\\bin

OpenSSL 1.1.1 requires the following files:

 **libssl-1\_1-x64.dll**  
 **libcrypto-1\_1-x64.dll** → C:\\OpenSSL-Win64\\bin

> **About compilation log and report**
> 
> pdb files only exist if you compile on Debug or RelWithDebInfo modes, it's not mandatory but it's recommended to compile core on at least RelWithDebInfo mode to get proper crashlogs. If you compile on Release mode the pdb files aren't needed.
> 
> To report crash logs it's MANDATORY to compile on Debug or RelWithDebInfo mode.
{.is-info}

> Please remember to rename the **worldserver.conf.dist** and **authserver.conf.dist / bnetserver.conf.dist** files to **worldserver.conf** and **authserver.conf / bnetserver.conf** respectively, unless you want to keep the configuration files of a previously compiled version of the core.
{.is-info}

### Keeping the Source Up-to-Date  
 

TrinityCore Developers are always at work fixing and adding new features to the core. You can always check them [here](https://github.com/TrinityCore/TrinityCore/), or by viewing them from within Git Extensions.

Open your TrinityCore repository in GitExtensions. 

1.  Click on the blue arrow
2.  In the new window, click Pull.

This will sync your local repo to the latest commits from the branch you have setup as default.

     3. Now you will need to re-run CMake Configure & Generate to update your solution (.SLN) files.

     4. Compile downloaded source.

     5. Run worldserver, it will apply all new sql files (can see that in console).

Profit!!

> **Bugs and errors reporting**
> 
> Before reporting bugs please update your core, since we commit a lot of things monthly. Even one week core is old and your bug can be fixed on next or latest updated revision.  
> Also keep in mind that this guide is meant to satisfy a maximum of people in compiling TrinityCore under Windows environment in a general and easy way. You may encounter variations  
> depending on many parameters.

### Help  
  
 

If you still have any problem, check:

-   Updating or starting with TrinityCore issues
-   Trouble with your TrinityCore Install / Readme 1st / FAQs
-   Or just start a new topic in the forums