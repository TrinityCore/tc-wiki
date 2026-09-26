---
title: guild_bank_tab
description: 
published: true
date: 2023-07-30T23:29:08.767Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:08.488Z
---

> This table holds information on all the tabs in use for all guilds that make use of the guild bank.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [TabName](#tabname) | varchar(16) |  |  | NO | '' |  |  |
| [TabIcon](#tabicon) | varchar(100) |  |  | NO | '' |  |  |
| [TabText](#tabtext) | varchar(500) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### TabId
tab index (Range: 0 – 5)
&nbsp;

### TabName
The name assigned to the tab.
&nbsp;

### TabIcon
The icon assigned to the tab.
An icon string like `INV_Misc_QuestionMark`.
&nbsp;

### TabText
The description assigned to the tab.
&nbsp;

