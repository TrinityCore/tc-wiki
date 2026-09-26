---
title: account_last_played_character
description: 
published: true
date: 2022-11-21T20:58:05.246Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:48:14.868Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO |  |  |  |
| [region](#region) | tinyint | unsigned | PRI | NO |  |  |  |
| [battlegroup](#battlegroup) | tinyint | unsigned | PRI | NO |  |  |  |
| [realmId](#realmid) | int | unsigned |  | YES | NULL |  |  |
| [characterName](#charactername) | varchar(12) |  |  | YES | NULL |  |  |
| [characterGUID](#characterguid) | bigint | unsigned |  | YES | NULL |  |  |
| [lastPlayedTime](#lastplayedtime) | int | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### accountId
*- no description -*
&nbsp;

### region
*- no description -*
&nbsp;

### battlegroup
*- no description -*
&nbsp;

### realmId
*- no description -*
&nbsp;

### characterName
*- no description -*
&nbsp;

### characterGUID
*- no description -*
&nbsp;

### lastPlayedTime
*- no description -*
&nbsp;

