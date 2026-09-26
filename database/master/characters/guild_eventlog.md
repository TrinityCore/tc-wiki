---
title: guild_eventlog
description: 
published: true
date: 2022-11-21T21:01:49.176Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:47:59.566Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint | unsigned | PRI | NO |  |  | Guild Identificator |
| [LogGuid](#logguid) | int | unsigned | PRI | NO |  |  | Log record identificator - auxiliary column |
| [EventType](#eventtype) | tinyint | unsigned |  | NO |  |  | Event type |
| [PlayerGuid1](#playerguid1) | bigint | unsigned | MUL | NO |  |  | Player 1 |
| [PlayerGuid2](#playerguid2) | bigint | unsigned | MUL | NO |  |  | Player 2 |
| [NewRank](#newrank) | tinyint | unsigned |  | NO |  |  | New rank(in case promotion/demotion) |
| [TimeStamp](#timestamp) | bigint | signed |  | NO |  |  | Event UNIX time |
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

### PlayerGuid1
*- no description -*
&nbsp;

### PlayerGuid2
*- no description -*
&nbsp;

### NewRank
*- no description -*
&nbsp;

### TimeStamp
*- no description -*
&nbsp;


