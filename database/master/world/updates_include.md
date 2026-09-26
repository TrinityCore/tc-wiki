---
title: updates_include
description: 
published: true
date: 2022-11-21T21:09:49.212Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:50.344Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [path](#path) | varchar(200) |  | PRI | NO |  |  | directory to include. $ means relative to the source directory. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  |  | NO | RELEASED |  | defines if the directory contains released or archived updates. |
&nbsp;
## Description of fields

### path
Directory to include. Prefixing with $ means relative to the source directory.
&nbsp;

### state
Defines if the directory contains released or archived updates.
&nbsp;

