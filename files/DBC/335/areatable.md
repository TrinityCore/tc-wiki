---
title: AreaTable.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/areapoi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaPOI'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areatrigger" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaTrigger'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AreaTable.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=areatable&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AreaTable)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [ParentAreaID](#parentareaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 3 | [AreaBit](#areabit) | uint32 |  |
| 4 | [Flags](#flags) | uint32 |  |
| 5 | [SoundProviderPref](#soundproviderpref) | uint32 | [SoundProviderPreferences.dbc/0](/files/DBC/335/soundproviderpreferences#id) |
| 6 | [SoundProviderPrefUnderwater](#soundproviderprefunderwater) | uint32 | [SoundProviderPreferences.dbc/0](/files/DBC/335/soundproviderpreferences#id) |
| 7 | [AmbienceID](#ambienceid) | uint32 | [SoundAmbience.dbc/0](/files/DBC/335/soundambience#id) |
| 8 | [ZoneMusic](#zonemusic) | uint32 | [ZoneMusic.dbc/0](/files/DBC/335/zonemusic#id) |
| 9 | [IntroSound](#introsound) | uint32 | [ZoneIntroMusicTable.dbc/0](/files/DBC/335/zoneintromusictable#id) |
| 10 | [ExplorationLevel](#explorationlevel) | int32 |  |
| 11 | [AreaName_0](#areaname) | string |  |
| 12 | [AreaName_1](#areaname) | string |  |
| 13 | [AreaName_2](#areaname) | string |  |
| 14 | [AreaName_3](#areaname) | string |  |
| 15 | [AreaName_4](#areaname) | string |  |
| 16 | [AreaName_5](#areaname) | string |  |
| 17 | [AreaName_6](#areaname) | string |  |
| 18 | [AreaName_7](#areaname) | string |  |
| 19 | [AreaName_8](#areaname) | string |  |
| 20 | [AreaName_9](#areaname) | string |  |
| 21 | [AreaName_10](#areaname) | string |  |
| 22 | [AreaName_11](#areaname) | string |  |
| 23 | [AreaName_12](#areaname) | string |  |
| 24 | [AreaName_13](#areaname) | string |  |
| 25 | [AreaName_14](#areaname) | string |  |
| 26 | [AreaName_15](#areaname) | string |  |
| 27 | [AreaName_lang_mask](#areaname) | uint32 |  |
| 28 | [FactionGroupMask](#factiongroupmask) | uint32 | [FactionGroup.dbc/1](/files/DBC/335/factiongroup#maskid) |
| 29 | [LiquidTypeID_0](#liquidtypeid) | uint32 |  |
| 30 | [LiquidTypeID_1](#liquidtypeid) | uint32 |  |
| 31 | [LiquidTypeID_2](#liquidtypeid) | uint32 |  |
| 32 | [LiquidTypeID_3](#liquidtypeid) | uint32 |  |
| 33 | [MinElevation](#minelevation) | float |  |
| 34 | [AmbientMultiplier](#ambientmultiplier) | float |  |
| 35 | [LightID](#lightid) | uint32 | [Light.dbc/0](/files/DBC/335/light#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ContinentID
<code>Col: 1 (uint32)</code>

Map this area belongs to.
&nbsp;

### ParentAreaID
<code>Col: 2 (uint32)</code>

Recursive. If this is a sub-area, it will link to its parent area.
&nbsp;

### AreaBit
<code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 4 (uint32)</code>

[`enum AreaFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L245-L276)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | AREA_FLAG_UNK0 | Unknown |
| 2 | 0x00000002 | AREA_FLAG_UNK1 | Razorfen Downs, Naxxramas and Acherus: The Ebon Hold (3.3.5a) |
| 4 | 0x00000004 | AREA_FLAG_UNK2 | Only used for areas on map 571 (development before) |
| 8 | 0x00000008 | AREA_FLAG_SLAVE_CAPITAL | city and city subzones |
| 16 | 0x00000010 | AREA_FLAG_UNK3 | can't find common meaning |
| 32 | 0x00000020 | AREA_FLAG_SLAVE_CAPITAL2 | slave capital city flag? |
| 64 | 0x00000040 | AREA_FLAG_ALLOW_DUELS | allow to duel here |
| 128 | 0x00000080 | AREA_FLAG_ARENA | arena, both instanced and world arenas |
| 256 | 0x00000100 | AREA_FLAG_CAPITAL | main capital city flag |
| 512 | 0x00000200 | AREA_FLAG_CITY | only for one zone named "City" (where it located?) |
| 1024 | 0x00000400 | AREA_FLAG_OUTLAND | expansion zones? (only Eye of the Storm not have this flag, but have 0x00004000 flag) |
| 2048 | 0x00000800 | AREA_FLAG_SANCTUARY | sanctuary area (PvP disabled) |
| 4096 | 0x00001000 | AREA_FLAG_NEED_FLY | Respawn alive at the graveyard without corpse |
| 8192 | 0x00002000 | AREA_FLAG_UNUSED1 | Unused in 3.3.5a |
| 16384 | 0x00004000 | AREA_FLAG_OUTLAND2 | expansion zones? (only Circle of Blood Arena not have this flag, but have 0x00000400 flag) |
| 32768 | 0x00008000 | AREA_FLAG_OUTDOOR_PVP | pvp objective area? (Death's Door also has this flag although it's no pvp object area) |
| 65536 | 0x00010000 | AREA_FLAG_ARENA_INSTANCE | used by instanced arenas only |
| 131072 | 0x00020000 | AREA_FLAG_UNUSED2 | Unused in 3.3.5a |
| 262144 | 0x00040000 | AREA_FLAG_CONTESTED_AREA | On PvP servers these areas are considered contested, even though the zone it is contained in is a Horde/Alliance territory. |
| 524288 | 0x00080000 | AREA_FLAG_UNK4 | Valgarde and Acherus: The Ebon Hold |
| 1048576 | 0x00100000 | AREA_FLAG_LOWLEVEL | used for some starting areas with ExplorationLevel <= 15 |
| 2097152 | 0x00200000 | AREA_FLAG_TOWN | small towns with Inn |
| 4194304 | 0x00400000 | AREA_FLAG_REST_ZONE_HORDE | Instead of using areatriggers, the zone will act as one for Horde players (Warsong Hold, Acherus: The Ebon Hold, New Agamand Inn, Vengeance Landing Inn, Sunreaver Pavilion, etc) |
| 8388608 | 0x00800000 | AREA_FLAG_REST_ZONE_ALLIANCE | Instead of using areatriggers, the zone will act as one for Alliance players (Valgarde, Acherus: The Ebon Hold, Westguard Inn, Silver Covenant Pavilion, etc) |
| 16777216 | 0x01000000 | AREA_FLAG_WINTERGRASP | Wintergrasp and it's subzones |
| 33554432 | 0x02000000 | AREA_FLAG_INSIDE | used for determinating spell related inside/outside questions in Map::IsOutdoors |
| 67108864 | 0x04000000 | AREA_FLAG_OUTSIDE | used for determinating spell related inside/outside questions in Map::IsOutdoors |
| 134217728 | 0x08000000 | AREA_FLAG_WINTERGRASP_2 | Can Hearth And Resurrect From Area |
| 536870912 | 0x20000000 | AREA_FLAG_NO_FLY_ZONE | Marks zones where you cannot fly |
{.dense}

&nbsp;

### SoundProviderPref
:x: <code>Col: 5 (uint32)</code>

EAX settings
&nbsp;

### SoundProviderPrefUnderwater
:x: <code>Col: 6 (uint32)</code>

Underwater EAX settings
&nbsp;

### AmbienceID
:x: <code>Col: 7 (uint32)</code>

Ambient sound
&nbsp;

### ZoneMusic
:x: <code>Col: 8 (uint32)</code>

Ambient music
&nbsp;

### IntroSound
:x: <code>Col: 9 (uint32)</code>

Music upon entering the zone.
&nbsp;

### ExplorationLevel
<code>Col: 10 (int32)</code>

Level this is made for.
&nbsp;

### AreaName
<code>Col: 11 &ndash; 27 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### FactionGroupMask
<code>Col: 28 (uint32)</code>

Bitmask of FactionGroup MaskIDs as bit offset.
&nbsp;

### LiquidTypeID
<code>Col: 29 &ndash; 32 (uint32)</code>

Liquid override by type
[`enum LiquidType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/tools/map_extractor/adt.h#L27-L33)
| Index | Name |
|-------|------|
| 0 | LIQUID_TYPE_WATER |
| 1 | LIQUID_TYPE_OCEAN |
| 2 | LIQUID_TYPE_MAGMA |
| 3 | LIQUID_TYPE_SLIME |
{.dense}

&nbsp;

### MinElevation
:x: <code>Col: 33 (float)</code>

-5000, -500, 1000
&nbsp;

### AmbientMultiplier
:x: <code>Col: 34 (float)</code>

0.0 - 1.0; Something to do with character ambient lighting
&nbsp;

### LightID
:x: <code>Col: 35 (uint32)</code>

Skybox, ambient lighting and fog.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/areapoi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaPOI'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areatrigger" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaTrigger'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
