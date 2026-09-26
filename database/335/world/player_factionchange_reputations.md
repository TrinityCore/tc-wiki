---
title: player_factionchange_reputations
description:
published: true
date: 2023-07-11T21:15:15.134Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:12.610Z
---

Basically all faction/reputation changes made when player changes faction.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Faction ID](/files/DBC/335/faction#id). If you convert to horde and your factions have a record in his table, they will be converted to **horde_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

### horde_id
This is the horde [Faction ID](/files/DBC/335/faction#id). If you convert to alliance and your factions have a record in his table, they will be converted to **alliance_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

