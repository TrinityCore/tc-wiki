---
title: quest_greeting_locale
description: 
published: true
date: 2024-05-16T11:19:34.551Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:03.627Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Greeting](#greeting) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### locale
[Localization](/how-to/localization):
| locale | Name |
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

### Greeting
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

