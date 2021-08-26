---
title: uptime
description: This table holds the server's uptime. Trinity will automatically update the latest entry's value until it crashes and a new record is added.
published: true
date: 2021-08-26T03:16:18.297Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T03:16:18.297Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[realmid](#realmid) | int(10) | unsigned | PRI | NO |  |  |  |
[starttime](#starttime) | int(10) | unsigned |  | NO | 0 |  |  |
[uptime](#uptime) | int(10) | unsigned |  | NO | 0 |  |  |
[maxplayers](#maxplayers) | smallint(5) | unsigned |  | NO | 0 |  |  |
[revision](#revision) | varchar(255) | signed |  | NO | 'Trinitycore' |  |  |

&nbsp;
## Description of fields

### realmid   
The ID of the realm. See realmlist.id
&nbsp;
    
### starttime  
The time when the server was started, in Unix time.
&nbsp;

### uptime
The uptime of the server, in seconds.
&nbsp;

### maxplayers
The maximum number of players connected.
&nbsp;

### revision
The detailed revision of the worldserver
&nbsp;
