---
title: logs_ip_actions
description: 
published: true
date: 2022-11-21T20:58:34.282Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:09:23.301Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  | auto_increment | Unique Identifier |
| [account_id](#account_id) | int | unsigned |  | NO |  |  | Account ID |
| [character_guid](#character_guid) | bigint | unsigned |  | NO |  |  | Character Guid |
| [realm_id](#realm_id) | int | unsigned |  | NO | 0 |  | Realm ID |
| [type](#type) | tinyint | unsigned |  | NO |  |  |  |
| [ip](#ip) | varchar(15) |  |  | NO | 127.0.0.1 |  |  |
| [systemnote](#systemnote) | text |  |  | YES | NULL |  | Notes inserted by system |
| [unixtime](#unixtime) | int | unsigned |  | NO |  |  | Unixtime |
| [time](#time) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED | Timestamp |
| [comment](#comment) | text |  |  | YES | NULL |  | Allows users to add a comment |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### account_id
*- no description -*
&nbsp;

### character_guid
*- no description -*
&nbsp;

### realm_id
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### ip
*- no description -*
&nbsp;

### systemnote
*- no description -*
&nbsp;

### unixtime
*- no description -*
&nbsp;

### time
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

