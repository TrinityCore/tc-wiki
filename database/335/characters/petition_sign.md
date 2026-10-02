---
title: petition_sign
description: 
published: true
date: 2024-04-16T19:57:44.207Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:01.622Z
---

> This table holds information on all the signatures of a petition for either a guild or an arena team.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ownerguid](#ownerguid) | int | unsigned | MUL | NO |  |  |  |
| [petitionguid](#petitionguid) | int | unsigned | PRI | NO | 0 |  |  |
| [playerguid](#playerguid) | int | unsigned | PRI | NO | 0 |  |  |
| [player_account](#player_account) | int | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### ownerguid
The [character guid](../characters/characters#guid) of the owner that is trying to found the guild/arena team.
&nbsp;

### petitionguid
The [guid](../characters/item_instance#guid) of the charter item.
&nbsp;

### playerguid
The [character guid](../characters/characters#guid) of the player that has signed the charter
&nbsp;

### player_account
The [account id](../auth/account#id) of the player that has signed the charter. No two players can sign the same charter from the same account.
&nbsp;

### type
The type of the petition.

<!--@include: @/partial/335/charter-types.md-->

&nbsp;
