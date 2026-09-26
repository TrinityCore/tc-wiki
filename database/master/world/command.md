---
title: command
description: Holds help and permission information for commands. This table does NOT create new commands. It only sets / overrides the permission and provides a help text.
published: true
date: 2022-11-21T21:03:39.214Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:27.863Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(50) |  | PRI | NO | '' |  |  |
| [help](#help) | mediumtext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### name {#name-alt}
The name of the command.
&nbsp;

### help
The help text displayed by the .help command.
&nbsp;

**Some battlenet commands:**
![command-bnetaccount.png](/command-bnetaccount.png)

