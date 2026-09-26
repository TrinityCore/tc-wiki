---
title: updates
description: 
published: true
date: 2024-09-05T22:48:28.545Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:47.765Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(200) |  | PRI | NO |  |  | filename with extension of the update. |
| [hash](#hash) | char(40) |  |  | YES | '' |  | sha1 hash of the sql file. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  |  | NO | RELEASED |  | defines if an update is released or archived. |
| [timestamp](#timestamp) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED | timestamp when the query was applied. |
| [speed](#speed) | int | unsigned |  | NO | 0 |  | time the query takes to apply in ms. |
&nbsp;
## Description of fields

### name {#name-alt}
Filename with extension of the update
&nbsp;

### hash
SHA1 hash of the sql file
&nbsp;

### state
Defines if an update is released or archived.
Archived means its part of TDB.
&nbsp;

### timestamp
Timestamp when the query was applied
&nbsp;

### speed
Time the query took to apply in ms
&nbsp;

