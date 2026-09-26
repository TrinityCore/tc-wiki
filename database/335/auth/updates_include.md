---
title: updates_include
description: 
published: true
date: 2022-11-21T21:22:41.227Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, auth
editor: markdown
dateCreated: 2021-08-30T21:58:19.471Z
---

> List of directories where we want to include sql updates.
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
&nbsp;

### state
Defines if the directory contains released or archived updates.
&nbsp;

