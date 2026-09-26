---
title: guild_bank_eventlog
description: 
published: true
date: 2022-11-21T21:01:42.632Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:46:54.153Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint | unsigned | PRI | NO | 0 |  | Guild Identificator |
| [LogGuid](#logguid) | int | unsigned | PRI | NO | 0 |  | Log record identificator - auxiliary column |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  | Guild bank TabId |
| [EventType](#eventtype) | tinyint | unsigned |  | NO | 0 |  | Event type |
| [PlayerGuid](#playerguid) | bigint | unsigned | MUL | NO | 0 |  |  |
| [ItemOrMoney](#itemormoney) | bigint | unsigned |  | NO | 0 |  |  |
| [ItemStackCount](#itemstackcount) | smallint | unsigned |  | NO | 0 |  |  |
| [DestTabId](#desttabid) | tinyint | unsigned |  | NO | 0 |  | Destination Tab Id |
| [TimeStamp](#timestamp) | bigint | signed |  | NO | 0 |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
*- no description -*
&nbsp;

### LogGuid
*- no description -*
&nbsp;

### TabId
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### PlayerGuid
*- no description -*
&nbsp;

### ItemOrMoney
*- no description -*
&nbsp;

### ItemStackCount
*- no description -*
&nbsp;

### DestTabId
*- no description -*
&nbsp;

### TimeStamp
*- no description -*
&nbsp;


