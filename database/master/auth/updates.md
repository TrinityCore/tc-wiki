---
title: updates
description: 
published: true
date: 2021-08-26T03:10:42.105Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T03:10:42.105Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[name](#name) | varchar(200) | signed | PRI | NO |  |  | filename with extension of the update. |
[hash](#hash) | char(40) | signed |  | YES |  |  | sha1 hash of the sql file. |
[state](#state) | enum('RELEASED','ARCHIVED') |  |  | NO | RELEASED |  | defines if an update is released or archived. |
[timestamp](#timestamp) | timestamp | signed |  | NO | CURRENT_TIMESTAMP |  | timestamp when the query was applied. |
[speed](#speed) | int(10) | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### name   
*- no description -*
&nbsp;
    
### hash  
*- no description -*
&nbsp;

### state
*- no description -*
&nbsp;

### timestamp
*- no description -*
&nbsp;

### speed
*- no description -*
&nbsp;
