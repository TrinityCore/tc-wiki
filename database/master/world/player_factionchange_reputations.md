---
title: player_factionchange_reputations
description:
published: true
date: 2022-11-21T21:06:50.204Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:41.948Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Faction ID](https://wago.tools/db2/faction). If you convert to horde and your factions have a record in his table, they will be converted to **horde_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

### horde_id
This is the horde [Faction ID](https://wago.tools/db2/faction). If you convert to alliance and your factions have a record in his table, they will be converted to **alliance_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

