---
title: logs_ip_actions
description: Used to log ips of individual actions
published: true
date: 2021-08-26T02:09:23.301Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:09:23.301Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[id](#id) | int(10) | unsigned | PRI | NO |  | AUTO_INCREMENT | Unique Identifier |
[account_id](#account_id) | int(10) | unsigned |  | NO |  |  | Account ID |
[character_guid](#character_guid) | bigint(20) | unsigned |  | NO |  |  | Character Guid |
[type](#type) | tinyint(3) | unsigned |  | NO |  |  |  |
[ip](#ip) | varchar(15) | signed |  | NO | '127.0.0.1' |  |  |
[systemnote](#systemnote) | text | signed |  | YES |  |  | Notes inserted by system |
[unixtime](#unixtime) | int(10) | unsigned |  | NO |  |  | Unixtime |
[time](#time) | timestamp  | signed |  | NO | CURRENT_TIMESTAMP |  | Timestamp |
[comment](#comment) | text | signed |  | YES |  |  | Allows users to add a comment |

&nbsp;
## Description of fields

### id   
*- no description -*
&nbsp;
    
### account_id  
*- no description -*
&nbsp;

### character_guid
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
