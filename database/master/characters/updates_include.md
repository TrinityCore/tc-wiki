---
title: updates_include
description: 
published: true
date: 2022-11-21T21:02:59.227Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:19:42.260Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [path](#path) | varchar(200) |  | PRI | NO |  |  | directory to include. $ means relative to the source directory. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  |  | NO | RELEASED |  | defines if the directory contains released or archived updates. |
&nbsp;
## Description of fields

### path
*- no description -*
&nbsp;

### state
*- no description -*
&nbsp;

