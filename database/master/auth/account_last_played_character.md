---
title: account_last_played_character
description: 
published: true
date: 2021-08-21T00:45:39.544Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:48:14.868Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
| [accountId](#) | int(10) | unsigned | PRI | NO |  |  |  |
| [region](#) | tinyint(3) | unsigned | PRI | NO |  |  |  |
| [battlegroup](#) | tinyint(3) | unsigned | PRI | NO |  |  |  |
| [realmId](#) | int(10) | unsigned |  | YES | NULL |  |  |
| [characterName](#) | varchar(12) | signed |  | YES | NULL |  |  |
| [characterGUID](#) | bigint(20) | unsigned |  | YES | NULL |  |  |
| [lastPlayedTime](#) | int(10) | unsigned |  | YES | NULL |  |  |

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
