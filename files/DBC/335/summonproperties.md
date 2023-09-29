---
title: SummonProperties.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/stringlookups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'StringLookups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Talent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SummonProperties.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=summonproperties&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SummonProperties)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Control](#control) | uint32 |  |
| 2 | [Faction](#faction) | uint32 | [FactionTemplate.dbc/0](/files/DBC/335/factiontemplate#id) |
| 3 | [Title](#title) | uint32 |  |
| 4 | [Slot](#slot) | uint32 |  |
| 5 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Control
<code>Col: 1 (uint32)</code>

[`enum SummonCategory`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3292-L3301)
| ID | Name | Comment |
|----|------|---------|
| 0 | SUMMON_CATEGORY_WILD | None |
| 1 | SUMMON_CATEGORY_ALLY | Guardian |
| 2 | SUMMON_CATEGORY_PET | Pet |
| 3 | SUMMON_CATEGORY_PUPPET | Possessed |
| 4 | SUMMON_CATEGORY_VEHICLE | Vehicle |
| 5 | SUMMON_CATEGORY_UNK | as of patch 3.3.5a only Bone Spike in Icecrown Citadel uses this category |
{.dense}

&nbsp;

### Faction
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Title
<code>Col: 3 (uint32)</code>

`UNITNAME_SUMMON_TITLE%d` in `/Interface/GlueXML/GlobalStrings.lua`
&nbsp;

### Slot
<code>Col: 4 (uint32)</code>

[`enum SummonSlot`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3220-L3331)
| ID | Name |
|----|------|
| 0 | SUMMON_SLOT_PET |
| 1 | SUMMON_SLOT_TOTEM_FIRE |
| 2 | SUMMON_SLOT_TOTEM_EARTH |
| 3 | SUMMON_SLOT_TOTEM_WATER |
| 4 | SUMMON_SLOT_TOTEM_AIR |
| 5 | SUMMON_SLOT_MINIPET |
| 6 | SUMMON_SLOT_QUEST |
{.dense}

&nbsp;

### Flags
<code>Col: 5 (uint32)</code>

[`enum SummonPropFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L411-L430)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | SUMMON_PROP_FLAG_UNK1 | Attack Summoner? |
| 2 | 0x0002 | SUMMON_PROP_FLAG_UNK2 | Help when Summoned in combat? |
| 4 | 0x0004 | SUMMON_PROP_FLAG_UNK3 | Use Level Offset? |
| 8 | 0x0008 | SUMMON_PROP_FLAG_UNK4 | Despawn on Summoner Death? |
| 16 | 0x0010 | SUMMON_PROP_FLAG_PERSONAL_SPAWN | Personal Spawn (creature visible only by summoner) |
| 32 | 0x0020 | SUMMON_PROP_FLAG_UNK6 | Cannot Dismiss Pet? |
| 64 | 0x0040 | SUMMON_PROP_FLAG_UNK7 | Use Demon Timeout? |
| 128 | 0x0080 | SUMMON_PROP_FLAG_UNK8 | Unlimited Summons? |
| 256 | 0x0100 | SUMMON_PROP_FLAG_UNK9 | Use Creature Level? |
| 512 | 0x0200 | SUMMON_PROP_FLAG_UNK10 | Join Summoner's Spawn Group? |
| 1024 | 0x0400 | SUMMON_PROP_FLAG_UNK11 | Do Not Toggle? |
| 2048 | 0x0800 | SUMMON_PROP_FLAG_UNK12 | Despawn When Expired? |
| 4096 | 0x1000 | SUMMON_PROP_FLAG_UNK13 | Use Summoner Faction? |
| 8192 | 0x2000 | SUMMON_PROP_FLAG_UNK14 | Do Not Follow Mounted Summoner? |
| 16384 | 0x4000 | SUMMON_PROP_FLAG_UNK15 | Save Pet Autocast? |
| 32768 | 0x8000 | SUMMON_PROP_FLAG_UNK16 | Ignore Summoner's Phase? (Wild Only) |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/stringlookups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'StringLookups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Talent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
