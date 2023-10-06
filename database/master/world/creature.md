---
title: creature
description: 
published: true
date: 2023-10-06T19:27:09.332Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:41.375Z
---

<a href="https://trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | int | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnDifficulties](#spawndifficulties) | varchar(100) |  |  | NO | 0 |  |  |
| [phaseUseFlags](#phaseuseflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [PhaseId](#phaseid) | int | signed |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int | signed |  | YES | 0 |  |  |
| [terrainSwapMap](#terrainswapmap) | int | signed |  | NO | -1 |  |  |
| [modelid](#modelid) | int | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int | unsigned |  | NO | 120 |  |  |
| [wander_distance](#wander_distance) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | int | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int | unsigned |  | NO | 0 |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint | unsigned |  | YES | NULL |  |  |
| [unit_flags](#unit_flags) | int | unsigned |  | YES | NULL |  |  |
| [unit_flags2](#unit_flags2) | int | unsigned |  | YES | NULL |  |  |
| [unit_flags3](#unit_flags3) | int | unsigned |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [StringId](#stringid) | varchar(64) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
A unique identifier given to each creature to distinguish one creature from another. Two creatures can NOT have same GUID.
If a new creature will be spawned it should be within the GUID range of the current expansion when creature was added first on retail.

For example [Chromie](https://www.wowhead.com/npc=167032/chromie) is spawned in Orgrimmar and Stormwind, but was added in Shadowlands (9.x) on retail (expansion 8), so we would assign a GUID between 8000000 and 8999999. 

The GUID ranges are defined as followed:
|                    Expansion | GUID range start | GUID range end |
| ---------------------------- | ---------------- | -------------- |
| Vanilla (1.x)                |                1 |         249999 |
| The Burning Crusade (2.x)    |                1 |         249999 |
| Wrath of the Lich King (3.x) |          2000000 |        2999999 |
| Cataclysm (4.x)              |          3000000 |        3999999 |
| Mists of Pandaria (5.x)      |          4000000 |        4999999 |
| Warlords of Draenor (6.x)    |          5000000 |        5999999 |
| Legion (7.x)                 |          6000000 |        6999999 |
| Battle for Azeroth (8.x)     |          7000000 |        7999999 |
| Shadowlands (9.x)            |          8000000 |        8999999 |
| Dragonflight (10.x)          |          9000000 |        9999999 |
| :warning: Wrath of the Lich King (3.x)        |                1 |         249999 |
| :warning: Legacy Cataclysm (4.x)              |           250000 |         449999 |
| :warning: Legacy Mists of Pandaria (5.x)      |           250000 |         449999 |
| :warning: Legacy Warlords of Draenor (6.x)    |           450000 |         649999 |
| :warning: Legacy Legion (7.x)                 |           650000 |         849999 |
| :warning: Legacy Battle for Azeroth (8.x)     |           850000 |        1049999 |
| :warning: Legacy Shadowlands (9.x)            |          1050000 |        1249999 |
> Because the limit of several old ranges was reached, new ranges have been defined with the nomenclature **{ExpID}000000 - {ExpID}999999**. The old ranges should not be used.
{.is-warning}

### id
This links to [creature_template.entry](/en/database/master/world/creature_template#entry)
&nbsp;

### map
The ID of the map that the creature is spawned on.
&nbsp;

### zoneId
The ID of the zone that the creature is spawned on.
&nbsp;

### areaId
The ID of the area that the creature is spawned on.
&nbsp;

### spawnDifficulties
Comma separated list of difficulties.

| Name | Value
| --- | :---: |
| DIFFICULTY_NONE | 0 |
| DIFFICULTY_NORMAL | 1 |
| DIFFICULTY_HEROIC | 2 |
| DIFFICULTY_10_N | 3 |
| DIFFICULTY_25_N | 4 |
| DIFFICULTY_10_HC | 5 |
| DIFFICULTY_25_HC | 6 |
| DIFFICULTY_LFR | 7 |
| DIFFICULTY_MYTHIC_KEYSTONE | 8 |
| DIFFICULTY_40 | 9 |
| DIFFICULTY_3_MAN_SCENARIO_HC | 11 |
| DIFFICULTY_3_MAN_SCENARIO_N | 12 |
| DIFFICULTY_NORMAL_RAID | 14 |
| DIFFICULTY_HEROIC_RAID | 15 |
| DIFFICULTY_MYTHIC_RAID | 16 |
| DIFFICULTY_LFR_NEW | 17 |
| DIFFICULTY_EVENT_RAID | 18 |
| DIFFICULTY_EVENT_DUNGEON | 19 |
| DIFFICULTY_EVENT_SCENARIO | 20 |
| DIFFICULTY_MYTHIC | 23 |
| DIFFICULTY_TIMEWALKING | 24 |
| DIFFICULTY_WORLD_PVP_SCENARIO | 25 |
| DIFFICULTY_5_MAN_SCENARIO_N | 26 |
| DIFFICULTY_20_MAN_SCENARIO_N | 27 |
| DIFFICULTY_PVEVP_SCENARIO | 29 |
| DIFFICULTY_EVENT_SCENARIO_6 | 30 |
| DIFFICULTY_WORLD_PVP_SCENARIO_2 | 32 |
| DIFFICULTY_TIMEWALKING_RAID | 33 |
| DIFFICULTY_PVP | 34 |
| DIFFICULTY_NORMAL_ISLAND | 38 |
| DIFFICULTY_HEROIC_ISLAND | 39 |
| DIFFICULTY_MYTHIC_ISLAND | 40 |
| DIFFICULTY_PVP_ISLAND | 45 |
| DIFFICULTY_NORMAL_WARFRONT | 147 |
| DIFFICULTY_HEROIC_WARFRONT | 149 |
| DIFFICULTY_LFR_15TH_ANNIVERSARY | 151 |
| DIFFICULTY_VISIONS_OF_NZOTH | 152 |
| DIFFICULTY_TEEMING_ISLAND | 153 |
&nbsp;

### phaseUseFlags
Mask

| Name | Value |
| --- | :---: |
| PHASE_USE_FLAGS_NONE            | 0x0 |
| PHASE_USE_FLAGS_ALWAYS_VISIBLE  | 0x1 |
| PHASE_USE_FLAGS_INVERSE         | 0x2 |
&nbsp;

### PhaseId
Determines in which phase the creature is in.
Available phases can be found in Phase.db2
&nbsp;

### PhaseGroup
Determines in which PhaseGroup the creature is in.
A PhaseGroup sets a creature in multiple phases at once.
PhaseGroups can contain more Phases than you actually need.
Available PhaseGroups can be found in PhaseGroup.db2
&nbsp;

### terrainSwapMap
*- no description -*
&nbsp;

### modelid
The model ID associated with the creature. Note that two creatures that use the same template can have different models. See [creature_model_info](/en/database/master/world/creature_model_info) for more information on model-specific characteristics.

> This can be left at 0 and a random model from its assigned models in [creature_template](/en/database/master/world/creature_template) will be assigned by the core.
{.is-info}

### equipment_id
The ID as defined within [creature_equip_template](/en/database/master/world/creature_equip_template) corresponding to the entry. The value essential defines the equip:

-  **-1**: A random equip from the set of equips in [creature_equip_template](/en/database/master/world/creature_equip_template) will be chosen.
-   **0**: No equipment defined.
- **1+**: The individual id within [creature_equip_template](/en/database/master/world/creature_equip_template).
&nbsp;

### position_x
The X position of the creatures spawn point.
&nbsp;

### position_y
The Y position of the creatures spawn point.
&nbsp;

### position_z
The Z position of the creatures spawn point.
&nbsp;

### orientation
The orientation of the creatures spawn point. (North = 0.0; South = pi (3.14159))
&nbsp;

### spawntimesecs
The respawn time, in seconds, of the creature.
&nbsp;

### wander_distance
The maximum distance that the creature may spawn from its spawn point.
Also controls how far away the creature can walk from its spawn point if its [MovementType](#movementtype) = 1.
&nbsp;

### currentwaypoint
The current point of [waypoint_data](/en/database/master/world/waypoint_data) that the creature is on, if any.
&nbsp;

### curhealth
The health that the creature will spawn with.
&nbsp;

### curmana
The mana that the creature will spawn with.
&nbsp;

### MovementType
Same as [creature_template.MovementType](/en/database/master/world/creature_template#movementtype)

| ID | Type |
| :-: | --- |
| 0 |Idle; stay in one place |
| 1 |Random movement inside the spawndist radius |
| 2 |Waypoint movement |

> A creature.MovementType will override a [creature_template.MovementType](/en/database/master/world/creature_template#movementtype) record.
{.is-info}

### npcflag
Same as [creature_template.npcflag](/en/database/master/world/creature_template#npcflag)

> A creature.npcflag record will override a [creature_template.npcflag](/en/database/master/world/creature_template#npcflag) record.
{.is-info}

### unit_flags
Same as [creature_template.unit_flags](/en/database/master/world/creature_template#unit_flags)

> A creature.unit_flags record will override a creature_template.unit_flags record.
{.is-info}

A full list can be found [/src/server/game/Entities/Unit/UnitDefines.h#L118](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Entities/Unit/UnitDefines.h#L118){target=_blank}
&nbsp;

### unit_flags2
Same as [creature_template.unit_flags2](/en/database/master/world/creature_template#unit_flags2)

> A creature.unit_flags2 record will override a creature_template.unit_flags2 record.
{.is-info}

A full list can be found [/src/server/game/Entities/Unit/UnitDefines.h#L156](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Entities/Unit/UnitDefines.h#L156){target=_blank}
&nbsp;

### unit_flags3
Same as [creature_template.unit_flags3](/en/database/master/world/creature_template#unit_flags)

> A creature.unit_flags3 record will override a creature_template.unit_flags3 record.
{.is-info}

A full list can be found [/src/server/game/Entities/Unit/UnitDefines.h#L182](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Entities/Unit/UnitDefines.h#L182){target=_blank}
&nbsp;

### ScriptName
The name of the script that this creature uses, if any. This ties a script from a scripting engine to this creature.
&nbsp;

### StringId
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
