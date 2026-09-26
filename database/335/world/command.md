---
title: command
description: 
published: true
date: 2023-07-08T17:40:37.467Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:07.851Z
---

Holds help information for commands. This table does NOT create new commands. It only provides a help text.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(50) |  | PRI | NO | '' |  |  |
| [help](#help) | longtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### name {#name-alt}
The name of the command.
&nbsp;

### help
The help text displayed by the `.help` command.
&nbsp;

**Some battlenet commands:**
![command-bnetaccount.png](/command-bnetaccount.png)

