---
title: macOS Requirements
description: 
published: true
date: 2023-06-16T21:57:37.462Z
tags: requirements, installation, setup, macos, mac
editor: markdown
dateCreated: 2021-08-14T00:39:12.068Z
---

## Software
> Processor with SSE2 support.
> Boost ≥ 1.71
> MySQL ≥ 5.7
> OpenSSL ≥ 1.1.x 
> CMake ≥ 3.18.4
> GCC ≥ 8.3.0 or Clang ≥ 7
{.is-info}

## Xcode
Xcode is available from the App Store for free. Run the following command from the terminal to install the required command line tools:
<div class="next-codeblock-no-line-numbers"></div>

```bash
xcode-select --install
```

## Dependencies
Use [Homebrew](http://brew.sh/), you can copy-paste the following.

<div class="next-codeblock-no-line-numbers"></div>

```bash
brew update
brew install mysql openssl readline cmake boost
brew config
```

## Help
If you still have any problem, check:

- Updating or starting with TrinityCore issues, Trouble with your TrinityCore Install / Readme 1st / FAQs
- Ask help on the Forum
- If you still have problems, you can try to ask help on IRC, but remember it's not real time 24/7 support, most of people there lives on GMT and they can be sleeping or working.