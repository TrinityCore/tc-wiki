---
title: gossip_menu_option_locale
description:
published: true
date: 2024-05-16T11:19:32.971Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T22:05:44.625Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MenuID](#menuid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [OptionID](#optionid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [Locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [OptionText](#optiontext) | mediumtext |  |  | YES | NULL |  |  |
| [BoxText](#boxtext) | mediumtext |  |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### MenuID
*- no description -*
&nbsp;

### OptionID
*- no description -*
&nbsp;

### Locale

<!--@include: @/partial/335/localization.md-->

&nbsp;

### OptionText
*- no description -*
&nbsp;

### BoxText
*- no description -*
&nbsp;
