---
title: updates_include
description: List of directories where we want to include sql updates.
published: true
date: 2022-11-21T20:58:50.218Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T03:12:59.858Z
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

