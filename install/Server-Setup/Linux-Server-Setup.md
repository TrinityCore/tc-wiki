---
title: Linux Server Setup
description: 
published: true
date: 2022-09-27T12:07:29.147Z
tags: 
editor: markdown
dateCreated: 2022-09-27T12:07:29.147Z
---

# Linux Server Setup

> Compile tools in **RelWithDebInfo or Release** mode. 
> Debug is way slower for extraction and only suggested if you have specific crashes to report.
{.is-warning}

Extracting Cameras, DBC (or DB2), Maps, VMaps & MMaps

## Cameras, DBC and Maps files
```
cd <your WoW client directory>
/home/<username>/server/bin/mapextractor
mkdir /home/<username>/server/data
  
# Next line is 3.3.5 only
cp -r Cameras dbc maps /home/<username>/server/data
# Next line is master only
cp -r Cameras dbc maps gt /home/<username>/server/data
 
edit worldserver.conf and change datadir from "." to "../data"
```

## Visual Maps (aka vmaps)
You can also extract vmaps which will take quite a while depending on your machine (up to hours on ancient hardware).
Note: If you stop vmap4extractor before finish you will need to delete the Buildings directory before start again.

```
cd <your WoW client directory>
/home/<username>/server/bin/vmap4extractor
mkdir vmaps
/home/<username>/server/bin/vmap4assembler Buildings vmaps
cp -r vmaps /home/<username>/server/data
```
When this is complete you will receive the following message which can be safely ignored.
```
Processing Map 724
[################################################################]
Extracting GameObject models...Extracting World\Wmo\Band\Final_Stage.wmo
No such file.
Couldn't open RootWmo!!!
Done!
  
Extract V4.00 2012_02. Work complete. No errors.
```

## Movement Maps (aka mmaps - optional RECOMMENDED)
Extracting mmaps will take quite a while depending on your machine (up to hours).
```
cd <your WoW client directory>
mkdir mmaps
/home/<username>/server/bin/mmaps_generator
cp -r mmaps /home/<username>/server/data
```

## Setting up the configuration files
First of all you need to find the two default config files (named worldserver.conf.dist and authserver.conf.dist (bnetserver.conf.dist in master) ) and copy these to their namesakes without the .dist extension. You can find them within /trinitycore/etc/ (may vary).
```
cp worldserver.conf.dist worldserver.conf
cp authserver.conf.dist authserver.conf # 3.3.5 only
cp bnetserver.conf.dist bnetserver.conf # master only
```