---
title: ASan
description: how to use asan with trinitycore
published: true
date: 2022-12-29T13:24:03.582Z
tags: 
editor: markdown
dateCreated: 2022-05-03T14:01:45.304Z
---

# How to use ASan to debug TrinityCore
AddressSanitizer (or ASan) is an open source programming tool that detects memory corruption bugs such as buffer overflows or accesses to a dangling pointer (use-after-free). AddressSanitizer is based on compiler instrumentation and directly mapped shadow memory. 

- https://github.com/google/sanitizers/wiki/AddressSanitizer




YouTube channel [Binary Adventures](https://www.youtube.com/@BinaryAdventure) has a series of videos about Address Sanitizer. The first video shows how it works, this is where he starts to explain how a buffer overflow is detected 
- [AddressSanitizer - Understanding the output](https://youtu.be/wfk0K4tFHk4?t=582)

## Configuration

Compile TrinityCore with `-DASAN=1 -DCMAKE_BUILD_TYPE=RelWithDebInfo`

Ensure that a directory called worldasan exists in the bin directory, where worldserver is: 

```shell
cd <bin directory> # eg: cd ~/wow/bin

mkdir -p worldasan
```

Start your worldserver with the included environment variables:

```shell
ASAN_OPTIONS=halt_on_error=0:verbosity=1:log_path=worldasan/worldasan:detect_stack_use_after_return=1 \
LSAN_OPTIONS=verbosity=1:log_threads=1 ./worldserver
```

Test the result using `.debug asan memoryleak` and `.debug asan outofbounds` commands.



