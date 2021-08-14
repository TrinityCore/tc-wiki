---
title: Linux Requirements
description: 
published: true
date: 2021-08-14T13:58:59.856Z
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

## OS
## Linux {.tabset}
### Debian based distributions
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

### Fedora based distributions
Tested on Fedora Server 27/28 (Fedora Workstation 27/28 should also work).
```
dnf install https://dev.mysql.com/get/mysql57-community-release-fc27-1.noarch.rpm
dnf install git clang cmake make gcc gcc-c++ community-mysql-devel compat-openssl10-devel bzip2-devel readline-devel ncurses-devel boost-devel community-mysql-server p7zip
rm -f /usr/bin/c++
update-alternatives --install /usr/bin/cc cc /usr/bin/clang 100
update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang 100
```

### Red Hat based distributions

> NOT SUPPORTED!
{.is-warning}
```
yum install epel-release
yum install git cmake3 make clang mariadb-devel openssl-devel bzip2-devel readline-devel ncurses-devel gcc-c++
ln -s /usr/bin/cmake3 /usr/bin/cmake
yum install centos-release-scl
yum install devtoolset-6-gcc-c++
scl enable devtoolset-6 bash
gcc --version | head -1
 
yum install libquadmath-devel python-devel
curl -L https://dl.bintray.com/boostorg/release/1.64.0/source/boost_1_64_0.tar.gz -o boost_1_64_0.tar.gz
tar -zxvf boost_1_64_0.tar.gz
cd boost_1_64_0
./bootstrap.sh
./b2 install
 
yum install mariadb-server p7zip 
```
> **Note:** You will only have to compile the boost library one time, unless you update your kernel or update certain security packages. You will also need to update boost-devel. The developer libraries will conflict with the compiled version of boost on Red Hat distros. Also be sure to install boost-devel after compiling latest version of boost.
{.is-info}


> **Note:** Some distribution versions might not match our requirements for CMake. If you can't install the EPEL repository on your build server, use the following instructions to install CMake manually.
>
>```
>curl https://cmake.org/files/v3.6/cmake-3.6.1.tar.gz -o cmake-3.6.1.tar.gz
>tar -zxvf cmake-3.6.1.tar.gz
>cd cmake-3.6.1
>./bootstrap
>make
>make install
>```
{.is-info}


### Arch Linux based distributions

> NOT SUPPORTED!
> FOLLOW AT YOUR OWN RISK!
{.is-warning}

Tested on 2/19/2020. If you run into any issues with the dependencies don't report it to the TrinityCore team, report it to me on through email at paulrblack.prb@gmail.com
```
pacman -S git clang cmake make gcc openssl bzip2 readline ncurses boost p7zip rpcsvc-proto
mkdir ~/mysql-tmp
cd ~/mysql-tmp
wget https://aur.archlinux.org/cgit/aur.git/snapshot/mysql57.tar.gz # Note if this no longer exists go here and download the snapshot https://aur.archlinux.org/packages/mysql57/
tar -xf mysql57.tar.gz
cd mysql57
makepkg
sudo pacman -U libmysqlclient57-5.7.29-1-x86_64.pkg.tar.xz mysql-clients57-5.7.29-1-x86_64.pkg.tar.xz mysql57-5.7.29-1-x86_64.pkg.tar.xz
cd ~
rm -rf ./mysql-tmp
```
Or if you have yay installed, you can follow this instead
```
pacman -S --needed git clang cmake make gcc openssl bzip2 readline ncurses boost p7zip rpcsvc-proto
yay -S mysql57
```
Then initialize your MySQL database
```
sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
```

## Help
If you still have any problem, check:

Updating or starting with TrinityCore issues, Trouble with your TrinityCore Install / Readme 1st / FAQs
Ask help on the Forum
If you still have problems, you can try to ask help on IRC, but remember it's not real time 24/7 support, most of people there lives on GMT and they can be sleeping or working.