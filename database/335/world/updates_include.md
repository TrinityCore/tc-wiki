---
title: updates_include
description: 
published: true
date: 2023-07-24T19:17:14.206Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:26.885Z
---

This table tells the core where to look for sql updates on startup.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [path](#path) | varchar(200) |  | PRI | NO |  |  | directory to include. $ means relative to the source directory. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  |  | NO | RELEASED |  | defines if the directory contains released or archived updates. |
&nbsp;
## Description of fields

### path
A directory to check.

Example: `$/sql/updates/world`
&nbsp;

### state
Defines if the directory contains released or archived updates.
&nbsp;

