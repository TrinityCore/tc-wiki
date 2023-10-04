---
title: creature
description:
published: true
date: 2023-07-07T21:41:32.257Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:13.159Z
---

<a href="https://trinitycore.info/en/database/335/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains individual creature spawn data. Spawn of a creature is an instance of the creature object in the world.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  | auto_increment | Global Unique Identifier |
| [id](#id) | mediumint | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnMask](#spawnmask) | tinyint | unsigned |  | NO | 1 |  |  |
| [phaseMask](#phasemask) | int | unsigned |  | NO | 1 |  |  |
| [modelid](#modelid) | mediumint | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int | unsigned |  | NO | 120 |  |  |
| [wander_distance](#wander_distance) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | mediumint | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int | unsigned |  | NO | 0 |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | int | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | YES | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### guid
A unique identifier given to each creature to distinguish one creature from another. Two creatures can NOT have same GUID.
&nbsp;

### id
The [entry](../world/creature_template#entry) of the template that is used when instantiating this creature.
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) of the position of the creature.
&nbsp;

### zoneId
calculated by the core if `Calculate.Creature.Zone.Area.Data` is enabled
&nbsp;

### areaId
calculated by the core if `Calculate.Creature.Zone.Area.Data` is enabled
&nbsp;

### spawnMask
Controls under which difficulties the creature is spawned.
| Value | Comment |
|-------|---------|
| 0x00 | Not spawned |
| 0x01 | Spawned only in 10-man-normal versions of map (includes maps without a heroic mode) |
| 0x02 | Spawned only in 25-man-normal versions of map (or heroics pre 3.2) |
| 0x04 | Spawned only in 10-man-heroic versions of map |
| 0x08 | Spawned only in 25-man-heroic versions of map |
| 0x0F | Spawned in all versions of map |
{.dense}

&nbsp;

### phaseMask
This is a bitmask field that describes all the phases that a creature will appear in. Aura 261 determines the phase you can see. For example, if you had this aura https://aowow.trinitycore.info/?spell=55782, you would be able to see creatures in phase 2. If you wanted the creature to be visible in both phase 1 and phase 2, you would set the phaseMask to 3.

&nbsp;

### modelid
The model ID associated with this creature. Note that two creatures that use the same template can have different models. See [creature_model_info](../world/creature_model_info#displayid) for more information on model-specific characteristics.

NOTE: This can be left at 0 and a random model from its assigned models in [creature_template](../world/creature_template#modelid1) will be assigned by the core.
&nbsp;

### equipment_id
The id as defined within [creature_equip_template](../world/creature_equip_template#creatureid) corresponding to the entry. The value essential defines the equip:
* -1. A random equip chosen from it's pre-definition.
* 0.  No equipment defined.
* 1+. The individual id within [creature_equip_template](../world/creature_equip_template).
&nbsp;

### position_x
The X position of the creature.
&nbsp;

### position_y
The Y position of the creature.
&nbsp;

### position_z
The Z position of the creature.
&nbsp;

### orientation
The orientation of the creature. (North = 0.0; South = pi (3.14159))
&nbsp;

### spawntimesecs
The respawn time of the creature in seconds.
&nbsp;

### wander_distance
The maximum distance that the creature should spawn from its spawn point. Also controls how far away the creature can walk from its spawn point if its [MovementType](#movementtype) = 1.
&nbsp;

### currentwaypoint
The current waypoint number that the creature is on, if any. (see [waypoint_data.point](../world/waypoint_data#point))
&nbsp;

### curhealth
The current health that the creature has.
&nbsp;

### curmana
The current mana that the creature has.
&nbsp;

### MovementType
The movement type associated with this creature. Usually the same as [creature_template.MovementType](../world/creature_template#movementtype) but can be different.
&nbsp;

### npcflag
Same as [creature_template.npcflag](../world/creature_template#npcflag)
NOTE: A creature.npcflag record will override a creature_template.npcflag record.
&nbsp;

### unit_flags
Same as [creature_template.unit_flags](../world/creature_template#unit_flags)
NOTE: A creature.unit_flags record will override a creature_template.unit_flags record.
&nbsp;

### dynamicflags
Same as [creature_template.dynamicflags](../world/creature_template#dynamicflags)
NOTE: A creature.dynamicflags record will override a creature_template.dynamicflags record.
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](../world/smart_scripts).
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
