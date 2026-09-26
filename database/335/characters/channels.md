---
title: channels
description:
published: true
date: 2023-07-25T01:07:16.136Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:01.893Z
---

> Information and settings for ingame, player-based chat channels (not affecting the default system channels)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(128) |  | PRI | NO |  |  |  |
| [team](#team) | int | unsigned | PRI | NO |  |  |  |
| [announce](#announce) | tinyint | unsigned |  | NO | 1 |  |  |
| [ownership](#ownership) | tinyint | unsigned |  | NO | 1 |  |  |
| [password](#password) | varchar(32) |  |  | YES | NULL |  |  |
| [bannedList](#bannedlist) | text |  |  | YES | NULL |  |  |
| [lastUsed](#lastused) | int | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### name {#name-alt}
Name of the channel.
&nbsp;

### team
Allow access to channel from specified player faction. [Faction ID](/files/DBC/335/faction#id), but only the two are in use:
* 67: Horde
* 469: Alliance

If config setting `AllowTwoSide.Interaction.Channel` is enabled, the Alliance channel is used for both and **team** is ignored.

&nbsp;

### announce
Toggle if join/leave actions are announced to the channel.
* 0: do not announce
* 1: send announce
&nbsp;

### ownership
Toggle if the channel can be owned.
* 0: can not be owned.
* 1: owned by the first player to join.
&nbsp;

### password
Channel password

Empty, or a standard string-based password (no spaces allowed)
&nbsp;

### bannedList
Channel banlist

List of banned player names, separated by spaces
&nbsp;

### lastUsed
Used for automated cleaning of unused channels from database. Time is in unixtime.
&nbsp;

