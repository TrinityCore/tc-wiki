---
title: disables
description:
published: true
date: 2023-07-09T14:30:20.588Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:12.118Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_text_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/disenchant_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'disenchant_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table is used to disable dungeons/bgs/spells/etc.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [sourceType](#sourcetype) | int | unsigned | PRI | NO |  |  |  |
| [entry](#entry) | int | unsigned | PRI | NO |  |  |  |
| [flags](#flags) | smallint | signed |  | NO |  |  |  |
| [params_0](#params_0) | varchar(255) |  |  | NO | '' |  |  |
| [params_1](#params_1) | varchar(255) |  |  | NO | '' |  |  |
| [comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### sourceType
| Value | Type |
|-------|------|
| 0 | DISABLE_TYPE_SPELL |
| 1 | DISABLE_TYPE_QUEST |
| 2 | DISABLE_TYPE_MAP |
| 3 | DISABLE_TYPE_BATTLEGROUND |
| 4 | DISABLE_TYPE_ACHIEVEMENT_CRITERIA |
| 5 | DISABLE_TYPE_OUTDOORPVP |
| 6 | DISABLE_TYPE_VMAP |
| 7 | DISABLE_TYPE_MMAP |
| 8 | DISABLE_TYPE_LFG_MAP |
{.dense}

&nbsp;

### entry
| sourceType | entry |
|-------|------|
| 0 | [Spell ID](/files/DBC/335/spell#id) |
| 1 | [quest_template.ID](../world/quest_template#id) |
| 3 | [BattlemasterList ID](/files/DBC/335/battlemasterlist#id) |
| 4 | criteria id from [AchivementCriteria ID](/files/DBC/335/achivementcriteria#id) |
| 5 | value from [`enum OutdoorPvPTypes`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/OutdoorPvP/OutdoorPvP.h)|
| 2, 6, 7, 8 | [Map ID](/files/DBC/335/map#id) |
&nbsp;

### flags
_sourceType: DISABLE_TYPE_SPELL_
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | SPELL_DISABLE_PLAYER | Spell disabled for players |
| 2 | 0x0002 | SPELL_DISABLE_CREATURE | Spell disabled for creatures |
| 4 | 0x0004 | SPELL_DISABLE_PET | Spell disabled for pets |
| 8 | 0x0008 | SPELL_DISABLE_DEPRECATED_SPELL | Spell completely disabled (used for no logner existing spells in DBCs) |
| 16 | 0x0010 | SPELL_DISABLE_MAP | Spell disabled for MapId |
| 32 | 0x0020 | SPELL_DISABLE_AREA | Spell disabled for AreaId |
| 64 | 0x0040 | SPELL_DISABLE_LOS | Line of Sight (LOS) is disabled for this spell (replaces "vmap.ignoreSpellIds" config option) |
| 128 | 0x0080 | SPELL_DISABLE_GAMEOBJECT | Spell disabled for game objects |
| 256 | 0x0100 | SPELL_DISABLE_ARENAS | disabled in arena |
| 512 | 0x0200 | SPELL_DISABLE_BATTLEGROUNDS | Spell disabled in battlegrounds |
{.dense}

&nbsp;
_sourceType: DISABLE_TYPE_MAP:_
Specifies what mode of the map is disabled (5man/10man/heroic/etc).
| Value | Flag | Name |
|-------|------|------|
| InstanceType of map = 1 (Dungeon) |||
| 1 | 0x01 | DUNGEON_STATUSFLAG_NORMAL |
| 2 | 0x02 | DUNGEON_STATUSFLAG_HEROIC |
| InstanceType of map = 4 (Raid) |||
| 1 | 0x01 | RAID_STATUSFLAG_10MAN_NORMAL |
| 2 | 0x02 | RAID_STATUSFLAG_25MAN_NORMAL |
| 4 | 0x04 | RAID_STATUSFLAG_10MAN_HEROIC |
| 8 | 0x08 | RAID_STATUSFLAG_25MAN_HEROIC |
{.dense}

&nbsp;
_sourceType: DISABLE_TYPE_VMAP:_
Specifies what part of the vMap system should be disabled on which map.
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | VMAP_DISABLE_AREAFLAG |
| 2 | 0x02 | VMAP_DISABLE_HEIGHT |
| 4 | 0x04 | VMAP_DISABLE_LOS |
| 8 | 0x08 | VMAP_LIQUIDSTATUS |
{.dense}

_other sourceTypes:_
* `flags = 0`
&nbsp;

### params_0
comma seperated list of [Map IDs](/files/DBC/335/map#id) if DISABLE_TYPE_SPELL used, 0 for all maps.
&nbsp;

### params_1
comma seperated list of [AreaTable IDs](/files/DBC/335/areatable#id) if DISABLE_TYPE_SPELL used, 0 for all areas.
&nbsp;

### comment
A comment as to why the something was disabled, or any other text that you want.
&nbsp;

## Examples
<code>INSERT INTO \`disables` VALUES (0, 8921, (1+16+32), "571,1", "1519", "Moonfire Example");</code>
.. will disable spell 8921 (Moonfire) for players in maps 571 (Northrend),1 (Kalimdor) and area 1519 (Stormwind City).

<code>INSERT INTO \`disables` VALUES (6, 1, (2 + 4), 0, 0, "Disable Kalimdor vMaps");</code>
.. will disable vMaps on whole Kalimdor.

<a href="https://trinitycore.info/en/database/335/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_text_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/disenchant_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'disenchant_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
