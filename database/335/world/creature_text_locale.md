---
title: creature_text_locale
description:
published: true
date: 2024-05-16T11:19:32.326Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T22:04:09.474Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ID](#id-alt) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Text](#text) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
*- no description -*
&nbsp;

### GroupID
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
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

### Text
*- no description -*
&nbsp;

