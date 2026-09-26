---
title: character_battleground_data
description:
published: true
date: 2023-07-25T19:36:28.356Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:23.068Z
---

> This table holds information for each character in a battleground. Also hold info about their last position before joining the battleground.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [instanceId](#instanceid) | int | unsigned |  | NO |  |  | Instance Identifier |
| [team](#team) | smallint | unsigned |  | NO |  |  |  |
| [joinX](#joinx) | float |  |  | NO | 0 |  |  |
| [joinY](#joiny) | float |  |  | NO | 0 |  |  |
| [joinZ](#joinz) | float |  |  | NO | 0 |  |  |
| [joinO](#joino) | float |  |  | NO | 0 |  |  |
| [joinMapId](#joinmapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [taxiStart](#taxistart) | int | unsigned |  | NO | 0 |  |  |
| [taxiEnd](#taxiend) | int | unsigned |  | NO | 0 |  |  |
| [mountSpell](#mountspell) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### instanceId
This is the battleground instanceId. It's shared with [instance.id](/database/335/characters/instance), but instead of putting data in that table, it's here.
&nbsp;

### team
[Faction ID](/files/DBC/335/faction#id)
- 469: Alliance
- 67: Horde
- 0: GM
&nbsp;

### joinX
Character's last X position before joining a battleground.
&nbsp;

### joinY
Character's last Y position before joining a battleground.
&nbsp;

### joinZ
Character's last Z position before joining a battleground.
&nbsp;

### joinO
Character's last orientation before joining a battleground.
&nbsp;

### joinMapId
Character's last [Map ID](/files/DBC/335/map#id) before joining a battleground.
&nbsp;

### taxiStart
Character's last [TaxiNode ID](/files/DBC/335/taxinodes#id) before joining a battleground.
&nbsp;

### taxiEnd
Character's heading [TaxiNode ID](/files/DBC/335/taxinodes#id) before joining a battleground.
&nbsp;

### mountSpell
Character's mount [Spell ID](/files/DBC/335/spell#id) before joining a battleground.
&nbsp;

