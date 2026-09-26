---
title: achievement_reward_locale
description:
published: true
date: 2024-05-16T11:19:31.133Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:41.230Z
---

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
references [achievement_reward](../world/achievement_reward#id)
&nbsp;

### Locale
[Localization](/how-to/localization):
| Locale | Name |
| :---: | :---: |
| koKR | Korean|
| frFR | French|
| deDE | German|
| zhCN | Chinese |
| zhTW | Taiwanese |
| esES | Spanish (EU) |
| esMX | Spanish (Latin American) |
| ruRU | Russian |
{.dense}

&nbsp;

### Subject
This is the subject of the mail that you receive.
&nbsp;

### Body
This is the text of the body of that mail that you receive.
&nbsp;

