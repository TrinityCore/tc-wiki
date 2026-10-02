---
title: petition
description: 
published: true
date: 2024-04-16T19:57:12.448Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:58.984Z
---

> This table holds information on all ongoing petitions for a guild or for an arena team.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ownerguid](#ownerguid) | int | unsigned | PRI | NO |  |  |  |
| [petitionguid](#petitionguid) | int | unsigned |  | YES | 0 |  |  |
| [name](#name-alt) | varchar(24) |  |  | NO |  |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |

&nbsp;
## Description of fields

### ownerguid
The [character guid](../characters/characters#guid) of the owner that is trying to found the guild/arena team.
&nbsp;

### petitionguid
The [guid](../characters/item_instance#guid) of the charter item.
&nbsp;

### name {#name-alt}
The name of the guild or arena team that the player is petitioning for.
&nbsp;

### type
The type of the petition.

<!--@include: @/partial/335/charter-types.md-->

&nbsp;
