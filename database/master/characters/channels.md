---
title: channels
description: 
published: true
date: 2022-11-21T20:59:28.250Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:18:00.153Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(128) |  | PRI | NO |  |  |  |
| [team](#team) | int | unsigned | PRI | NO |  |  |  |
| [announce](#announce) | tinyint | unsigned |  | NO | 1 |  |  |
| [ownership](#ownership) | tinyint | unsigned |  | NO | 1 |  |  |
| [password](#password) | varchar(128) |  |  | YES | NULL |  |  |
| [bannedList](#bannedlist) | text |  |  | YES | NULL |  |  |
| [lastUsed](#lastused) | bigint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### name {#name-alt}
*- no description -*
&nbsp;

### team
*- no description -*
&nbsp;

### announce
*- no description -*
&nbsp;

### ownership
*- no description -*
&nbsp;

### password
*- no description -*
&nbsp;

### bannedList
*- no description -*
&nbsp;

### lastUsed
*- no description -*
&nbsp;

