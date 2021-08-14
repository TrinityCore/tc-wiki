---
title: macOS Requirements
description: 
published: true
date: 2021-08-14T17:33:04.522Z
tags: requirements, installation, setup, macos, mac
editor: markdown
dateCreated: 2021-08-14T00:39:12.068Z
---

## Software
> Processor with SSE2 support 
> Boost ≥ 1.60
> MySQL ≥ 5.7
> OpenSSL ≥ 1.0.0 
> CMake ≥ 3.2.0
> GCC ≥ 6.3.0 or Clang  ≥ 3.3
{.is-info}

## Xcode
Xcode is available from the App Store for free. Run the following command from the terminal to install the required command line tools:
<div class="next-codeblock-no-line-numbers"></div>

```bash
xcode-select --install
```
## MySQL
MySQL is available as binaries for macOS: [MySQL Community Server 5.7.25](https://dev.mysql.com/downloads/mysql/5.7.html)

## Sources
The following dependencies have to be installed from sources for every branch of TrinityCore:

- [Boost 1.69.0](https://dl.bintray.com/boostorg/release/1.69.0/source/boost_1_69_0.tar.gz)
- [CMake 3.14.3](https://cmake.org/files/v3.14/cmake-3.14.3.tar.gz)
- [OpenSSL 1.0.2r](https://www.openssl.org/source/openssl-1.0.2r.tar.gz)
- [GNU Readline 8.0](https://ftp.gnu.org/gnu/readline/readline-8.0.tar.gz)

Alternatively, if you use [Homebrew](http://brew.sh/), you can copy-paste the following. A detailed guide can be found here: [[HowTo] Compile TrinityCore on Mac OS X using Homebrew](http://www.trinitycore.org/f/topic/10515-howto-compile-trinitycore-on-mac-os-x-using-homebrew)

<div class="next-codeblock-no-line-numbers"></div>

```bash
brew update
brew install mysql openssl readline cmake boost
```

## Help
If you still have any problem, check:

- Updating or starting with TrinityCore issues, Trouble with your TrinityCore Install / Readme 1st / FAQs
- Ask help on the Forum
- If you still have problems, you can try to ask help on IRC, but remember it's not real time 24/7 support, most of people there lives on GMT and they can be sleeping or working.