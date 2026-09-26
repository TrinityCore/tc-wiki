---
title: uptime
description: This table holds the server's uptime. Trinity will automatically update the latest entry's value until it crashes and a new record is added.
published: true
date: 2022-11-21T20:58:52.232Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T03:16:18.297Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [realmid](#realmid) | int | unsigned | PRI | NO |  |  |  |
| [starttime](#starttime) | int | unsigned | PRI | NO | 0 |  |  |
| [uptime](#uptime) | int | unsigned |  | NO | 0 |  |  |
| [maxplayers](#maxplayers) | smallint | unsigned |  | NO | 0 |  |  |
| [revision](#revision) | varchar(255) |  |  | NO | Trinitycore |  |  |
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

