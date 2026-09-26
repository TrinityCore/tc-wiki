---
title: guild_newslog
description: 
published: true
date: 2022-11-21T21:01:54.094Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:49:30.027Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint | unsigned | PRI | NO | 0 |  | Guild Identificator |
| [LogGuid](#logguid) | int | unsigned | PRI | NO | 0 |  | Log record identificator - auxiliary column |
| [EventType](#eventtype) | tinyint | unsigned |  | NO | 0 |  | Event type |
| [PlayerGuid](#playerguid) | bigint | unsigned | MUL | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [Value](#value) | int | unsigned |  | NO | 0 |  |  |
| [TimeStamp](#timestamp) | bigint | signed |  | NO | 0 |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
*- no description -*
&nbsp;

### LogGuid
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### PlayerGuid
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Value
*- no description -*
&nbsp;

### TimeStamp
*- no description -*
&nbsp;


