---
title: trainer_locale
description: 
published: true
date: 2024-05-16T11:19:35.964Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:13.137Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Greeting_lang](#greeting_lang) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
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

### Greeting_lang
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

