---
title: character_declinedname
description: 
published: true
date: 2023-07-27T17:35:16.099Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:28.370Z
---

> When connected to a server on [timezone 12](../auth/realmlist#timezone) or by setting [`DeclinedNames = 1`](/files/configuration/home) the ruRU client generates declinated versions of a cyrillic player characters name.
> These are stored here.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [genitive](#genitive) | varchar(15) |  |  | NO | '' |  |  |
| [dative](#dative) | varchar(15) |  |  | NO | '' |  |  |
| [accusative](#accusative) | varchar(15) |  |  | NO | '' |  |  |
| [instrumental](#instrumental) | varchar(15) |  |  | NO | '' |  |  |
| [prepositional](#prepositional) | varchar(15) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### genitive
Name in genetive casus.
&nbsp;

### dative
Name in dative casus.
&nbsp;

### accusative
Name in accusative casus.
&nbsp;

### instrumental
Name in instrumental casus.
&nbsp;

### prepositional
Name in prepositional casus.
&nbsp;

