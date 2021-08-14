---
title: Linux Requirements
description: 
published: true
date: 2021-08-14T00:09:23.038Z
tags: requirements, installation, setup, linux
editor: markdown
dateCreated: 2021-08-14T00:09:23.038Z
---

## Software
>Processor with SSE2 support 
>Boost ≥ 1.67
>MySQL ≥ 5.7.0
>OpenSSL ≥ 1.0.x
>CMake ≥ 3.13.4
>Clang  ≥ 5 (heavy recommended, especially on master branch) or GCC ≥ 7.1.0
>zlib ≥ 1.2.7
{.is-info}


>**Note:**
>While compiling you may get one error like: "c++: internal compiler error: Killed (program cc1plus)" the reasons of this can be:
>
>Low ram/swap amount: increase ram/swap to a minimum of 2GB of ram and 2GB of swap or decrease the amount of make -j to 1 (more concurrent compile threads = more memory usage). (you can get this using VPS servers)
>SELinux/grsecurity/Hardened kernel: Kernels that use ASLR as a security measure tend to mess up GCC's precompiled header implementation. Try using an unhardened kernel (without ASLR), or compiling using clang, or gcc without pch. (you can get this issue when using OVH hosting).
>
>
>
>Your server may be abruptly killed by an angry administrator or system staff or system restrictions for overuse of system resources and you willl see something like:
>
>collect2: fatal error: ld terminated with signal 9 [Killed] compilation terminated.
>
>you will need to use less jobs (make -j1) or increase swap.
{.is-warning}

## Debian based distributions
***(heavy recommended debian stable, it's the distribution we use to set minimum requirements)***

**Recommendation:** Use apt-get with stable source list instead of install packages. We recommend the latest stable version of your distribution. We usually update requirements to the lastest stable Debian version. Avoid mixing stable with experimental packages as it may break your linux OS.

Debian 10.x (you will need to use su to install the packages)
```
apt-get update
apt-get install git clang cmake make gcc g++ libmariadbclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev libboost-all-dev mariadb-server p7zip default-libmysqlclient-dev
update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang 100
```
Ubuntu 19.10/20.04/20.10 (you will need to use sudo to install the packages).
```

apt-get update
apt-get install git clang cmake make gcc g++ libmariadbclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev libboost-all-dev mariadb-server p7zip libmariadb-client-lgpl-dev-compat
update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang 100
```

> Anything under this is not tested by TrinityCore developers.
> 
> **Not supported:** Debian 9 or lower. Ubuntu 19.04 or lower.
> 
> AVOID CentOS.
> 
> If you have an old Ubuntu version, follow https://help.ubuntu.com/community/Upgrades steps to upgrade it.
{.is-info}

## Fedora based distributions
Tested on Fedora Server 27/28 (Fedora Workstation 27/28 should also work).
```
dnf install https://dev.mysql.com/get/mysql57-community-release-fc27-1.noarch.rpm
dnf install git clang cmake make gcc gcc-c++ community-mysql-devel compat-openssl10-devel bzip2-devel readline-devel ncurses-devel boost-devel community-mysql-server p7zip
rm -f /usr/bin/c++
update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang 100
```

# Tabs {.tabset}
## First Tab

Any content here will go into the first tab...

## Second Tab

Any content here will go into the second tab...

## Third Tab

Any content here will go into the third tab...