---
title: FactionTemplate.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/factiongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'FactionGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/filedata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'FileData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# FactionTemplate.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=factiontemplate&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/FactionTemplate)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Faction](#faction) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 2 | [Flags](#flags) | uint32 |  |
| 3 | [FactionGroup](#factiongroup) | uint32 | [FactionGroup.dbc/1](/files/DBC/335/factiongroup#maskid) |
| 4 | [FriendGroup](#friendgroup) | uint32 | [FactionGroup.dbc/1](/files/DBC/335/factiongroup#maskid) |
| 5 | [EnemyGroup](#enemygroup) | uint32 | [FactionGroup.dbc/1](/files/DBC/335/factiongroup#maskid) |
| 6 | [Enemies_0](#enemies) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 7 | [Enemies_1](#enemies) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 8 | [Enemies_2](#enemies) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 9 | [Enemies_3](#enemies) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 10 | [Friend_0](#friend) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 11 | [Friend_1](#friend) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 12 | [Friend_2](#friend) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 13 | [Friend_3](#friend) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Faction
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 2 (uint32)</code>

[`enum FactionTemplateFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L317-L322)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 |  | Respond to call for help |
| 2 | 0x0002 |  | Broadcast to enemies (low priority) |
| 4 | 0x0004 |  | Broadcast to enemies (med priority) |
| 8 | 0x0008 |  | Broadcast to enemies (high priority) |
| 16 | 0x0010 |  | Search for enemies (low priority) |
| 32 | 0x0020 |  | Search for enemies (med priority) |
| 64 | 0x0040 |  | Search for enemies (high priority) |
| 128 | 0x0080 |  | Search for friends (low priority) |
| 256 | 0x0100 |  | Search for friends (med priority) |
| 512 | 0x0200 |  | Search for friends (high priority) |
| 1024 | 0x0400 |  | Flee from call for help |
| 2048 | 0x0800 | FACTION_TEMPLATE_FLAG_PVP | Assist players |
| 4096 | 0x1000 | FACTION_TEMPLATE_FLAG_CONTESTED_GUARD | Attack PvP active players |
| 8192 | 0x2000 | FACTION_TEMPLATE_FLAG_HOSTILE_BY_DEFAULT | Hates all except friends  |
{.dense}

&nbsp;

### FactionGroup
<code>Col: 3 (uint32)</code>

Same mask logic in **FriendGroup** and **EnemyGroup**
| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x01 | 1 - All players (and pets) |
| 2 | 0x02 | 2 - Alliance players (and their pets) |
| 4 | 0x04 | 3 - Horde players (and their pets) |
| 8 | 0x08 | 4 - Monster (Not a player nor a pet) |
{.dense}

&nbsp;

### FriendGroup
<code>Col: 4 (uint32)</code>

isFriendlyTo:
`(FriendGroup & otherFactionTemplate.FactionGroup) || (FactionGroup & otherFactionTemplate.FriendGroup)`
&nbsp;

### EnemyGroup
<code>Col: 5 (uint32)</code>

IsHostileTo:
`(EnemyGroup & otherFactionTemplate.FactionGroup) != 0`
&nbsp;

### Enemies
<code>Col: 6 &ndash; 9 (uint32)</code>

Always enemy of these factions. Overriding **FriendGroup** and **EnemyGroup** relations.
&nbsp;

### Friend
<code>Col: 10 &ndash; 13 (uint32)</code>

Always friendly to these factions. Overriding **FriendGroup** and **EnemyGroup** relations.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/factiongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'FactionGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/filedata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'FileData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
