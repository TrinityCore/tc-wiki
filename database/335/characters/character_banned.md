---
title: character_banned
description: 
published: true
date: 2023-07-25T19:26:03.277Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:20.380Z
---

> This table lists all of the characters that have been banned along with the date when (or if) the ban will expire.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [bandate](#bandate) | int | unsigned | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | int | unsigned |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) |  |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) |  |  | NO |  |  |  |
| [active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### bandate
The date when the character was banned, in Unix time.
&nbsp;

### unbandate
The date when the character will be automatically unbanned, in Unix time. A value less than the bandate means, in effect, a permanent ban.
&nbsp;

### bannedby
The character name with the rights to the `.ban` command that banned the character.
&nbsp;

### banreason
The reason for the ban.
&nbsp;

### active
Boolean controlling if the ban is currently active or not.
* 0: expired
* 1: active
&nbsp;

