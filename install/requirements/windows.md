---
title: Windows Requirements
description: 
published: true
date: 2022-04-08T13:13:25.756Z
tags: requirements, installation, setup, windows
editor: markdown
dateCreated: 2021-08-14T03:18:48.201Z
---

## Supported Windows Operating Systems

> Windows 7 SP1 and their servers versions and up
> Both x86 and x64 versions are supported but x64 is recommended due to ram consumption
{.is-info}

## Software
> Processor with SSE2 support
> Boost ≥ 1.73 (latest stable recommended)
> MySQL ≥ 5.7
> OpenSSL = 1.x.x
> CMake ≥ 3.14 (latest stable recommended)
> MS Visual Studio (Community) ≥ 16.11.11 (2019) (Desktop) (Not previews)
{.is-info}

### 1. [Git](https://git-scm.com/download/win){target=_blank}

> View this thread for important details on how to install Git for best results.
{.is-info}

> During Git installation - Adjusting your PATH environment. Pick "**Run Git from the Windows Command Prompt**"
> ![git_ext_conf.png](/git_ext_conf.png)
{.is-warning}


#### 1.1 [Git Extensions](http://sourceforge.net/projects/gitextensions/){target=_blank}
Git Extensions adds some visual extras and an improved UI for Git.
&nbsp;

### 2. [Visual Studio](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=community&rel=16&utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=download+from+relnotes&utm_content=vs2019ga+button){target=_blank}
> The installer for VS 2019 (any edition) no longer installs the C++ compiler by default.
{.is-warning}

To enable it, select **Custom** in the type of installation and pick **Common Tools for Visual C++ 2019** in **Programming Languages** -> Visual C++
&nbsp;
![visualstudio.jpg](/visualstudio.jpg)
&nbsp;
If you are running a Windows 10 Creator/Anniversary Edition, you additional have to install Windows 10 SDK via **Indiviual components**
&nbsp;
![visualstudio_anniversary.png](/visualstudio_anniversary.png)
&nbsp;
**You can also install it from command line with the command:**
<div class="next-codeblock-no-line-numbers"></div>

```bash
vs_community.exe /q /norestart /InstallSelectableItems NativeLanguageSupport_Group
```
or if you have enterprise version with:
<div class="next-codeblock-no-line-numbers"></div>

```bash
vs_enterprise.exe /q /norestart /InstallSelectableItems NativeLanguageSupport_Group
```
&nbsp;

### 3. MySQL Server Community Edition

- [MySQL Server Community Edition](https://dev.mysql.com/downloads/mysql/5.7.html){target=_blank} Version 5.7
  <span style="color:red">(not recommended, better use 8.0)</span>
- [MySQL Server Community Edition](https://dev.mysql.com/downloads/mysql/8.0.html){target=_blank} Version 8.0
  <span style="color:green">(highly recommended)</span>
{.links-list}

1. Download the Windows MSI Installer. 
2. Scroll down to the bottom and click on "No thanks, just take me to the downloads!"
3. When the installation is almost done, make sure "Launch the MySQL Instance Configuration Wizard" is checked, then click "Finish".
4. When the MySQL Instance Configuration Wizard launches, most default options are fine, but remember the username and password you use (root // whatever). You will need them to log into your chosen database management tool (below) in order to import SQL files later.
5. To test if MySQL is set up correctly, hit <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>DEL</kbd> on your keyboard, enter the Task Manager, and select the "Services" tab. In the list of services you should see "MySQL" with a status of "Running".
6. https://bugs.mysql.com/bug.php?id=76476
Please read the Suggested Bug Fix, as this works....or you will be in a loop of "wait for the DB to start?!?"
&nbsp;

### 4. Database management tools
Choose one of these

- mysql cli *(comes with MySQL installation)* 
*(fastest and recommended)*
- [SQLYog Community Edition](https://github.com/webyog/sqlyog-community/wiki/Downloads){target=_blank}
- [HeidiSQL](http://www.heidisql.com/download.php){target=_blank} *(Best for beginners)*
- [MySQL Workbench](http://dev.mysql.com/downloads/workbench/){target=_blank} (*already installed if you chose to install full MySQL package)*
- [DBeaver](https://dbeaver.io/){target=_blank} *(Multiplattform Database Management Tool)*
{.links-list}

&nbsp;

### 5. Test your tool
Try connecting to your MySQL instance that you installed above. Depending on the program, you may be looking for "**Connect to Host**" or "**New Connection**" or "**Session Manager**".
&nbsp;
	Create a new connection/session. The Hostname/IP address of "127.0.0.1" or "localhost" is fine if you installed MySQL on the same computer that you installed HeidiSQL or SQLYog. Simply fill in your root // whatever password and you should now be able to connect to your database
&nbsp;

### 6. [.NET Framework 3.5](http://www.microsoft.com/downloads/details.aspx?FamilyId=333325FD-AE52-4E35-B531-508D977D32A6&amp;displaylang=en){target=_blank} or above
(you should already have it via your Windows updates)
&nbsp;

### 7. [Boost](http://www.boost.org/){target=_blank}
1. Download the prebuilt Windows Binary for Visual Studio 2019
	- 64bit: [https://sourceforge.net/projects/boost/files/boost-binaries/1.73.0/boost_1_73_0-msvc-14.2-64.exe/download](https://sourceforge.net/projects/boost/files/boost-binaries/1.73.0/boost_1_73_0-msvc-14.2-64.exe/download){target=_blank}
	- 32bit: [https://sourceforge.net/projects/boost/files/boost-binaries/1.73.0/boost_1_73_0-msvc-14.2-32.exe/download](https://sourceforge.net/projects/boost/files/boost-binaries/1.73.0/boost_1_73_0-msvc-14.2-32.exe/download){target=_blank}
4. Install the package to the default location (usually C:\local\boost_1_XX_0\ .)
5. Add an environment variable to "System" variable named "BOOST_ROOT" and as value your Boost installation directory, e.g "C:/local/boost_1_72_0". Important is to use "**<span style="color:red">/</span>**", not "**<span style="color:red">\\</span>**"  when pointing to directory.
(Make sure that it does **<span style="color:red">not</span>** have a trailing slash (end of path). If you still get problems, add the same variable in the "USER" variables section too, like shown in the image below.)
![boost.jpg](/boost.jpg)Notice that this image shows the version number 1.72.0 - use your actual version number in your settings.
&nbsp;

### 8. [CMake](https://cmake.org/download/){target=_blank}

1. Download and install the **Latest Release** win32-x86.exe file, **<span style="color:red">NEVER</span>** <span style="color:red">the RC (Release Candidate) versions</span>.
2. “Visual Studio 14” is Microsoft Visual Studio 2015, or Visual C++ 14.0, or MSC 19.0 (confusing, right?) If I need to build for 64-bit, then I choose “Visual Studio 14 Win64” **<span style="color:red">we recommend to compile all on 64 bits mode</span>**
3. Note: If used different MySQL server e.g Wampserver with included MySQL or any other software, then is needed to point cmake to that directory (the same way how it was done for BOOST). Add an environment variable to "System" variable named "MYSQL_ROOT" and as value your MySQL installation directory, e.g "c:/wamp/bin/mysql/mysql5.7.19". Important is to use "**<span style="color:red">/</span>**", **not** "**<span style="color:red">\\</span>**"  when pointing to directory.
&nbsp;

### 9. MySQL development files
These files are shipped with MySQL Server, search for them at program files directory, MySQL\MySQL Server 8(5).X\lib and MySQL\MySQL Server 8(5).X\include.
&nbsp;

### 10. [OpenSSL](http://www.slproweb.com/products/Win32OpenSSL.html){target=_blank}
> Do not download OpenSSL version 3.x.x
{.is-warning}


> Download the 64bit version. Or you can get both if you plan to compile both 32 and 64bit, they can coexist side by side.
{.is-info}

1. Find the 64bit version by finding the latest 1.0.x or 1.1.x **Win64 OpenSSL** that is **NOT** the "light" version.
	- Example: **Win64 OpenSSL v1.1.1L**
&nbsp;
2. Find the 32bit version by finding the latest 1.0.x or 1.1.x **Win32 OpenSSL** that is **NOT** the "light" version.
	- Example: **Win32 OpenSSL v1.1.1L**
&nbsp;

> While installing OpenSSL, choose **The OpenSSL binaries (/bin) directory** (NOT "The Windows system directory")
> when given the choice on where to copy the OpenSSL DLLs. These DLLs will need to be located easily for Core Installation.
{.is-info}

&nbsp;
### (Optional)

1. If you use different PCs to compile/run Trinity, install one of the following packages on your Server-PC to avoid missing dependencies (depending on your Visual Studio Version and your Server-PC Operating System)
	- [Microsoft Visual C++ 2017 Redistributable Package](https://go.microsoft.com/fwlink/?LinkId=746572){target=_blank}
	- **<span style="color:red">NOTE: Whatever you do you CAN'T run TrinityCore on Windows XP or Windows 2003 or vista.</span>**
2. [TortoiseGit](http://code.google.com/p/tortoisegit/){target=_blank}
	- This instruction supports Git Extensions only, but TortoiseGit is another viable option if you're comfortable with the process.
  
<a href="https://dev.trinitycore.info/en/install/Core-Installation/windows-core-installation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Continue to 'Core Installation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
