---
title: ASan
description: how to use asan with trinitycore
published: true
date: 2022-05-03T14:02:38.848Z
tags: 
editor: markdown
dateCreated: 2022-05-03T14:01:45.304Z
---

# How to use ASAN to debug trinitycore
compile trinitycore with -DASAN=1 -DCMAKE_BUILD_TYPE=RelWithDebInfo

Ensure that a directory called worldasan exists in the bin directory, where worldserver is: 

cd <bin directory> eg: cd ~/wow/bin

mkdir -p worldasan

start core with:

ASAN_OPTIONS=halt_on_error=0:verbosity=1:log_path=worldasan/worldasan:detect_stack_use_after_return=1 LSAN_OPTIONS=verbosity=1:log_threads=1 ./worldserver

Test the result using ".debug asan memoryleak" and ".debug asan outofbounds" commands.

enjoy your valgrind like debug without slowing your server like hell.

More read [AddressSanitizer](https://github.com/google/sanitizers/wiki/AddressSanitizer)

YouTube channel Binary Adventures has a series of videos about Address Sanitizer. The first video shows how it works, this is where he starts to explain how a buffer overflow is detected [AddressSanitizer Tutorial 1 - Understanding the output (Stack Overflow)](https://youtu.be/wfk0K4tFHk4?t=582)