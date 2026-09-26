---
title: achievement_reward_locale
description:
published: true
date: 2022-11-21T21:03:07.264Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:43.912Z
---

> This is the localization table of ['achievement_reward'](/database/master/world/achievement_reward)
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Subject](#subject) | mediumtext |  |  | YES | NULL |  |  |
| [Body](#body) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
ID from [Achievement.db2](https://wago.tools/db2/achievement){target=_blank}
&nbsp;

### Locale
|Value|Locale|
|:---:|:---: |
|deDE|German|
|esES|Spanish|
|esMX|Spanish (Latin American)|
|frFR|French|
|itIT|Italian|
|koKR|Korean|
|ptBR|Portuguese|
|ruRU|Russian|
|zhCN|Chinese (China)|
|zhTW|Chinese (Taiwan/Traditional)|
&nbsp;

### Subject
This is the subject of the mail that you receive.
&nbsp;

### Body
This is the text of the body of that mail that you receive.
&nbsp;

