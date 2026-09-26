---
title: logs
description: 
published: true
date: 2023-08-01T21:09:46.764Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:53.163Z
---

> This table stores all logs from authserver if database logging in [authserver.conf](/files/configuration/home) is enabled.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [time](#time) | int | unsigned |  | NO |  |  |  |
| [realm](#realm) | int | unsigned |  | NO |  |  |  |
| [type](#type) | varchar(250) |  |  | NO |  |  |  |
| [level](#level) | tinyint | unsigned |  | NO | 0 |  |  |
| [string](#string) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### time
A Unix timestamp indicating when this string was logged.
&nbsp;

### realm
The [realm id](../auth/realmlist#id) this log string came from. 

`0` if it came from realmd.
&nbsp;

### type
The type of log this is:
| ID | Name | Comment |
|----|------|---------|
| 0 | LOG_TYPE_STRING | a normal informative string |
| 1 | LOG_TYPE_ERROR | some sort of error |
| 2 | LOG_TYPE_BASIC | basic information |
| 3 | LOG_TYPE_DETAIL | detailed information |
| 4 | LOG_TYPE_DEBUG | debugging information |
| 5 | LOG_TYPE_CHAR | character-related |
| 6 | LOG_TYPE_WORLD | world packet dump |
| 7 | LOG_TYPE_RA | remote access logs |
| 8 | LOG_TYPE_GM | gm command logs |
| 9 | LOG_TYPE_CRASH | crash alarm logs |
| 10 | LOG_TYPE_CHAT | chat/message logs |
{.dense}

&nbsp;

### level
Depends on LogLevel in authserver.conf

`enum LogLevel`
| ID | Name |
|----|------|
| 1 | LOG_LEVEL_TRACE |
| 2 | LOG_LEVEL_DEBUG |
| 3 | LOG_LEVEL_INFO |
| 4 | LOG_LEVEL_WARN |
| 5 | LOG_LEVEL_ERROR |
| 6 | LOG_LEVEL_FATAL |
{.dense}

&nbsp;

### string
The actual string that has been logged.
&nbsp;

