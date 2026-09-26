---
title: character_pet_declinedname
description: 
published: true
date: 2023-07-27T17:35:09.903Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:52.882Z
---

> When connected to a server on [timezone 12](../auth/realmlist#timezone) or by setting [`DeclinedNames = 1`](/files/configuration/home) the client generates declinated versions of a cyrillic pet name.
> These are stored here.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [owner](#owner) | int | unsigned | MUL | NO | 0 |  |  |
| [genitive](#genitive) | varchar(12) |  |  | NO | '' |  |  |
| [dative](#dative) | varchar(12) |  |  | NO | '' |  |  |
| [accusative](#accusative) | varchar(12) |  |  | NO | '' |  |  |
| [instrumental](#instrumental) | varchar(12) |  |  | NO | '' |  |  |
| [prepositional](#prepositional) | varchar(12) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The [id](../characters/character_pet#id) of the pet.
&nbsp;

### owner
The [guid](../characters/characters#guid) of the pet's owner.
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

