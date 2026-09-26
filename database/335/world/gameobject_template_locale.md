---
title: gameobject_template_locale
description: 
published: true
date: 2024-05-16T11:19:32.887Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:36.191Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
| [castBarCaption](#castbarcaption) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
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

### name {#name-alt}
*- no description -*
&nbsp;

### castBarCaption
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

