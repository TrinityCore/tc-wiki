---
title: logs
description: This table stores all logs from authserver if database logging in config is enabled.
published: true
date: 2021-08-26T01:58:03.477Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T01:58:03.477Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[time](#time) | int(10) | unsigned | PRI | NO |  |  |  |
[realm](#realm) | int(10) | unsigned |  | NO |  |  |  |
[type](#type) | varchar(250) | signed |  | NO |  |  |  |
[level](#level) | tinyint(3) | unsigned |  | NO |  |  |  |
[string](#string) | text | signed |  | NO | 1 |  |  |

&nbsp;
## Description of fields

### time   
A unixtime timestamp indicating when this string was logged.
&nbsp;
    
### realm  
The RealmID of the realm this log string came from. 0 if realmd.
&nbsp;

### type
The type of log this is:

- LOG_TYPE_STRING = 0 — a normal informative string
- LOG_TYPE_ERROR = 1 — some sort of error
- LOG_TYPE_BASIC = 2 — basic information
- LOG_TYPE_DETAIL = 3 — detailed information
- LOG_TYPE_DEBUG = 4 — debugging information
- LOG_TYPE_CHAR = 5 — character-related
- LOG_TYPE_WORLD = 6 — world packet dump
- LOG_TYPE_RA = 7 — remote access logs
- LOG_TYPE_GM = 8 — gm command logs
- LOG_TYPE_CRASH = 9 — crash alarm logs
- LOG_TYPE_CHAT = 10 – chat/message logs
{.grid-list}

&nbsp;

### level
Depends on LogLevel in authserver.conf

- 1 - (Trace)
- 2 - (Debug)
- 3 - (Info)
- 4 - (Warn)
- 5 - (Error)
- 6 - (Fatal)
&nbsp;

### string
The actual string that has been logged.
&nbsp;
