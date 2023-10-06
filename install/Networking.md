---
title: Networking
description: 
published: true
date: 2023-10-06T21:52:34.619Z
tags: 
editor: markdown
dateCreated: 2021-09-20T14:27:15.045Z
---

# Networking
> **Introduction**
This guide is intended for advanced setups or just to provide more details in setting up your realm for local or internet use. In general the default setup explained in your particular OS specific guide should be fine for simple setups.

This guide is not meant to replace the How-to guides for your particular operating system. If you didn't read that guide go back and do that first.


## Worldserver and Authserver configurations


For almost all basic setup scenarios the default localhost (127.0.0.1) IP settings should be left alone. The default bindip (0.0.0.0) should be left alone as well.

Setting the auth database realmlist for internet connections
This is where you have to use your internet IP so clients from the internet can find your server. You have to have the ports 3724 (3.3.5a / 4.3.4 authserver(legacy)) and 8085 (3.3.5a, 4.3.4 worldserver(legacy)), 1119, 8085, 8086 (4.3.4 TCPP) and 1119, 8081, 8085, 8086 (master only) forwarded or open from your router / firewall, if you plan to have different version servers you will need to use a different worldserver ports for the other versions. 

## Realmlist Table


You need to make sure that your authserver / bnetserver (6.x and >) application directs incoming connections to your realm.

Run your chosen database management tool (ex. SQLYog or HeidiSQL, but also web-applications like Phpmyadmin for servers with php extension)*
If you need to connect to your database from one external machine, read https://www.enovision.net/mysql-ssh-tunnel-heidisql instead open ports to mysql server.
Open the auth database and find the realmlist table. You need to edit the address field according to your needs:
LAN IP (192.168.x.x) - If you are installing TrinityCore on a different computer from where you run WoW, but all the computers involved are on the same network (router) use that computer's Local Area Network IP.
127.0.0.1 - Also known as "localhost". Leave this setting alone here and in your configs if you've installed TrinityCore on the same computer you run WoW on, and only you are connecting to it.
External IP – If you want other people to connect to your server, use your external IP. Visit http://www.whatismyip.com/ to find your external IP address.

##  Help

If you still have any problem, check:

- Updating or starting with TrinityCore issues, Trouble with your TrinityCore Install / Readme 1st / FAQs
- [Ask help on the Forum.](https://community.trinitycore.org/)
- If you still have problems, you can try to ask help on [IRC](https://trinitycore.atlassian.net/wiki/spaces/tc/pages/2130200/IRC), but remember it's not real time 24/7 support, most of people there lives on GMT and they can be sleeping or working.
