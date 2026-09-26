---
title: guild_member
description: 
published: true
date: 2023-07-30T23:54:11.254Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:13.733Z
---

> This table holds information on the members of all guilds, their ranks in the guild, and any notes made by them or by guild officers.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | MUL | NO |  |  | Guild Identificator |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [rank](#rank) | tinyint | unsigned |  | NO |  |  |  |
| [pnote](#pnote) | varchar(31) |  |  | NO | '' |  |  |
| [offnote](#offnote) | varchar(31) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### guid
The [character guid](../characters/characters#guid) of the guild member.
&nbsp;

### rank
The [guild rank](../characters/guild_rank#rid) per member.
&nbsp;

### pnote
The note set by the player that can be read by everyone.
&nbsp;

### offnote
The note set by officers in the guild that can only be read by other officers of the guild.
&nbsp;

