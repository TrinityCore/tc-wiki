---
title: GDB: GNU Project Debugger
description: 
published: true
date: 2023-10-24T03:10:04.948Z
tags: debugger, gnu, gdb
editor: markdown
dateCreated: 2023-10-24T03:10:04.948Z
---

# Introduction/Requirements
This is a simple/dirty tutorial of what is GDB and how to use it.
This tutorial assumes that you can start your trinity-core by typing:
```bash
trinity-core
```
in the console. Also, it assumes that you installed GDB already. Else, check this tutorial for help.

# Step by step
1. Before you start debugging trinity you need to have ensured that it is compiled with debug information you must pass -DCMAKE_BUILD_TYPE=Debug as a cmake option and compile. This however might be particulary slow and take a huge amount of ram while compiling.
2. Now you can start trinity with gdb by typing this.
	```bash gdb trinity-core
	gdb trinity-core
	```
Then you will most likely see something like this:
```bash
user@*:~/home/sources/build$ gdb trinity-core
GNU gdb 6.8-debian
Copyright (C) 2008 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "x86_64-linux-gnu"...
(gdb)
```
(gdb) - is the GDB command prompt , here you can type some commands, almost like in normal shell.

3. Now after you have gdb running, you may instruct it to start trinity (by having gdb start trinity you can debug it), here is the command:
	```bash
	run
	```
	Just type it and if you are lucky you will have trinity loading.
  
4. Ok ... you made it, now trinity runs. Take a break until it crash, then you can come back

5. When trinity crashes you will most likely see this message, or any similar.
	```bash
	Program received signal SIGSEGV, Segmentation fault.
	[Switching to Thread 0x42c5c950 (LWP 9283)]
	Player (this=0x42c598e0, session=0x0) at ../../../src/game/Player.cpp:265
	265    ../../../src/game/Player.cpp: No such file or directory.
	    in ../../../src/game/Player.cpp
	(gdb)
	```

6. Now you can type some comands to get information about the crash, and possibly give it to some dev to fix the problem.
	Here are the commands that are best to be typed ( or at least I find the most usefull for crash report )
	```bash
	shell echo -e "\nCRASH ON" `date`
	info program
	shell echo -e "\nBACKTRACE\n"
	bt
	shell echo -e "\nBACKTRACE FULL\n"
	bt full
	shell echo -e "\nTHREADS\n"
	info threads
	shell echo -e "\nTHREADS BACKTRACE\n"
	thread apply all bt full
	```
	Just type them one after another and give the output in your bug report ...

7. OK. Thats it, now we can think of some way to automate all this process. GDB has 2 very good switches:
	```bash
	--batch            Exit after processing options.
	--command=FILE, -x Execute GDB commands from FILE.
	```
	So you can put all the commands in one file and have GDB execute it, and when it finishes to exit. Lets say we put this in one file called gdb-commands.
	```bash
	run
	shell echo -e "\nCRASH ON" `date`
	info program
	shell echo -e "\nBACKTRACE\n"
	bt
	shell echo -e "\nBACKTRACE FULL\n"
	bt full
	shell echo -e "\nTHREADS\n"
	info threads
	thread apply all bt full
 	```
8. Now you can start the whole monster with:
	```bash
	gdb trinity-core --batch -x /path/to/gdb-commands
	```
9. I assume you didn't get this and need more assistance, so i put this together for you
	<details>
		<summary>Restarter Script</summary>
		
		```bash
		#! /bin/bash
		DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
		echo $DIR
		cd $DIR
		echo "run\n" > gdbcommands
		echo "shell echo -e \"SERVERCRASHEVENT\"        " >> gdbcommands
		echo "shell echo -e \"\nCRASH ON\" `date`       " >> gdbcommands
		echo "info program                              " >> gdbcommands
		echo "shell echo -e \"\nBACKTRACE\n\"           " >> gdbcommands
		echo "bt                                        " >> gdbcommands
		echo "shell echo -e \"\nBACKTRACE FULL\n\"      " >> gdbcommands
		echo "bt full                                   " >> gdbcommands
		echo "shell echo -e \"\nTHREADS\n\"             " >> gdbcommands
		echo "info threads                              " >> gdbcommands
		echo "shell echo -e \"\nTHREADS BACKTRACE\n\"   " >> gdbcommands
		echo "thread apply all bt full                  " >> gdbcommands
		chmod +x gdbcommands
		while :
		do
		    echo "starting worldserver";
		    #./worldserver
		    mkdir -p crashes
		    gdb worldserver --batch -x gdbcommands | tee crashes/current
		    FILE=$(date +%s)
		    sed -i '1,/SERVERCRASHEVENT/d' crashes/current
		    mv crashes/current crashes/$FILE".crash"
		    find crashes/ -name '*.crash' -and -size -10k -delete
		    echo "worldserver stopped";
		    sleep 1
		done
		```
	</details>
	This is a restarter that will output crashlogs with unixtime of crash as their filename. Which you can later either send to trinitycore devs or fix yourself!

# TIPS

1. You can also redirect stdout to some log file. I mean this:
	```bash
	gdb trinity-core --batch -x /path/to/gdb-commands > /some/log/file
	```
2. You can add a tail command to gdb-commands file to get the latest lines from your server.log file:
	```bash
	shell echo -e "\nSERVER.LOG\n"
	shell tail -n 50 /path/to/your/server.log/code50 means how much lanes to take from server.log
	```
3. You can add -ggdb3 -g3 flags to your CXXFLAGS in order to get more debug output. If you add them there is no need to add --with-debug-info switch in order to get meaningfull backtrace.

4. You can pass arguments to trinity-core by passing them to the run gdb command ( run -c /path/to/trinitycore.conf ).
