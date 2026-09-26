---
title: updates
description: 
published: true
date: 2023-07-31T23:35:42.162Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:20.167Z
---

> This table contains sql updates already applied by the UpdateFetcher.
{.is-info}


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
The filename with extension of the update.
&nbsp;

### hash
SHA1 hash of the query.
&nbsp;

### state
Defines if an update is released or archived.
&nbsp;

### timestamp
Timestamp when the query was applied.
&nbsp;

### speed
Time the query took to apply in ms.
&nbsp;

