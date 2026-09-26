---
title: updates_include
description: 
published: true
date: 2023-07-31T23:34:01.616Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:22.826Z
---

> This table tells the core where to look for sql updates on startup.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [path](#path) | varchar(200) |  | PRI | NO |  |  | directory to include. $ means relative to the source directory. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  |  | NO | RELEASED |  | defines if the directory contains released or archived updates. |
&nbsp;
## Description of fields

### path
Directory to include. $ means relative to the source directory.

Example: `$/sql/updates/characters`
&nbsp;

### state
Defines if the directory contains released or archived updates.
&nbsp;

