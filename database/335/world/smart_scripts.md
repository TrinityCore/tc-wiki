---
title: smart_scripts
description: 
published: true
date: 2025-02-10T22:58:56.620Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:09.695Z
---

<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entryorguid](#entryorguid) | int | signed | PRI | NO |  |  |  |
| [source_type](#source_type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [id](#id-alt) | smallint | unsigned | PRI | NO | 0 |  |  |
| [link](#link) | smallint | unsigned | PRI | NO | 0 |  |  |
| [event_type](#event) | tinyint | unsigned |  | NO | 0 |  |  |
| [event_phase_mask](#event_phase_mask) | smallint | unsigned |  | NO | 0 |  |  |
| [event_chance](#event_chance) | tinyint | unsigned |  | NO | 100 |  |  |
| [event_flags](#event_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [event_param1](#event) | int | unsigned |  | NO | 0 |  |  |
| [event_param2](#event) | int | unsigned |  | NO | 0 |  |  |
| [event_param3](#event) | int | unsigned |  | NO | 0 |  |  |
| [event_param4](#event) | int | unsigned |  | NO | 0 |  |  |
| [event_param5](#event) | int | unsigned |  | NO | 0 |  |  |
| [action_type](#action-alt) | tinyint | unsigned |  | NO | 0 |  |  |
| [action_param1](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [action_param2](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [action_param3](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [action_param4](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [action_param5](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [action_param6](#action-alt) | int | unsigned |  | NO | 0 |  |  |
| [target_type](#target_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [target_param1](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param2](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param3](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param4](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_x](#target_type) | float |  |  | NO | 0 |  |  |
| [target_y](#target_type) | float |  |  | NO | 0 |  |  |
| [target_z](#target_type) | float |  |  | NO | 0 |  |  |
| [target_o](#target_type) | float |  |  | NO | 0 |  |  |
| [comment](#comment) | mediumtext |  |  | NO |  |  | Event Comment |
&nbsp;

## Description of fields

> Note: :x: means that the feature/option is not (yet) implemented.
{.is-info}


### entryorguid
* **source_type** = 9: invoking **entryorguid** * 100 (+i, if multiple timed action lists are set)
* **entryorguid** > 0: entry of the creature / game object / etc.
* **entryorguid** < 0: guid of the creature / game object / etc.

&nbsp;

### source_type
What type to script:
| ID | Name | Comment |
|----|------|---------|
| 0 | SMART_SCRIPT_TYPE_CREATURE |  |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |  |
| 2 | SMART_SCRIPT_TYPE_AREATRIGGER |  |
| 3 | :x: SMART_SCRIPT_TYPE_EVENT | not yet implemented |
| 4 | :x: SMART_SCRIPT_TYPE_GOSSIP | not yet implemented |
| 5 | :x: SMART_SCRIPT_TYPE_QUEST | not yet implemented |
| 6 | :x: SMART_SCRIPT_TYPE_SPELL | not yet implemented |
| 7 | :x: SMART_SCRIPT_TYPE_TRANSPORT | not yet implemented |
| 8 | :x: SMART_SCRIPT_TYPE_INSTANCE | not yet implemented |
| 9 | SMART_SCRIPT_TYPE_TIMED_ACTIONLIST |  |
| 10 | :x: SMART_SCRIPT_TYPE_SCENE | RESERVED master branch |
| 11 | :x: SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY | RESERVED master branch |
| 12 | :x: SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY_SERVERSIDE | RESERVED master branch |
{.dense}

&nbsp;

### id <!-- {#id-alt} -->
Incremental id bound to each **entryorguid** + **source_type** (0, 1, 2, ...).
&nbsp;

### link
Simple event linking;
Example: if **id** = 0 and **link** = 1; **id** 1 will only be able to occur if **id** = 0 was triggered.
&nbsp;

### event
### Tabset {.tabset}
#### UpdateIC (0)
Update in combat.
* **event_type**:
SMART_EVENT_UPDATE_IC (0)
* **event_param1**:
InitialMin (in msec.)
* **event_param2**:
InitialMax (in msec.)
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 9 | SMART_SCRIPT_TYPE_TIMED_ACTIONLIST |
{.dense}
#### UpdateOOC (1)
Update out of combat.
* **event_type**:
SMART_EVENT_UPDATE_OOC (1)
* **event_param1**:
InitialMin (in msec.)
* **event_param2**:
InitialMax (in msec.)
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
| 8 | SMART_SCRIPT_TYPE_INSTANCE |
{.dense}
#### HealthPct (2)
Health percentage
* **event_type**:
SMART_EVENT_HEALTH_PCT (2)
* **event_param1**:
HPMin%
* **event_param2**:
HPMax%
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### ManaPct (3)
Mana percentage
* **event_type**:
SMART_EVENT_MANA_PCT (3)
* **event_param1**:
ManaMin%
* **event_param2**:
ManaMax%
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Aggro (4)
on creature aggro
* **event_type**:
SMART_EVENT_AGGRO (4)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Kill (5)
On creature / player kill
* **event_type**:
SMART_EVENT_KILL (5)
* **event_param1**:
CooldownMin (in msec.)
* **event_param2**:
CooldownMax (in msec.)
* **event_param3**:
Player only (`0`/`1`)
* **event_param4**:
if **event_param3** = 0: [creature entry](../world/creature_template#entry) (`0`: any)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Death (6)
On creature death
* **event_type**:
SMART_EVENT_DEATH (6)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Evade (7)
On creature enter evade mode
* **event_type**:
SMART_EVENT_EVADE (7)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SpellHit (8)
On creature / gameobject spell hit
* **event_type**:
SMART_EVENT_SPELLHIT (8)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
[`enum SpellSchools`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L303-L313) (`0`: any)
  | Value | Flag | Name |
  |-------|------|------|
  | 1 | 0x01 | SPELL_SCHOOL_NORMAL |
  | 2 | 0x02 | SPELL_SCHOOL_HOLY |
  | 4 | 0x04 | SPELL_SCHOOL_FIRE |
  | 8 | 0x08 | SPELL_SCHOOL_NATURE |
  | 16 | 0x10 | SPELL_SCHOOL_FROST |
  | 32 | 0x20 | SPELL_SCHOOL_SHADOW |
  | 64 | 0x40 | SPELL_SCHOOL_ARCANE |
  {.dense}
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### Range (9)
On target in range
* **event_type**:
SMART_EVENT_RANGE (9)
* **event_param1**:
MinDist
* **event_param2**:
MaxDist
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### LineOfSightOOC (10)
On target in distance out of combat
* **event_type**:
SMART_EVENT_OOC_LOS (10)
* **event_param1**:
  * 0: Hostile
  * 1: Not Hostile
  * 2: Any
* **event_param2**:
MaxRange
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Respawn (11)
On creature / gameobject Respawn
* **event_type**:
SMART_EVENT_RESPAWN (11)
* **event_param1**:
[`enum SMART_SCRIPT_RESPAWN_CONDITION`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L442-L448)
  |--|--|
  | SMART_SCRIPT_RESPAWN_CONDITION_NONE | 0 |
  | SMART_SCRIPT_RESPAWN_CONDITION_MAP | 1 |
  | SMART_SCRIPT_RESPAWN_CONDITION_AREA | 2 |
  {.dense}
* **event_param2**:
if **event_param1** = 1: [Map ID](/files/DBC/335/map#id)
* **event_param3**:
if **event_param1** = 2: [AreaTable ID](/files/DBC/335/areatable#id)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### TargetHealthPct ⚠️&nbsp;(12)
On target health percentage
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_TARGET_HEALTH_PCT (12)
* **event_param1**:
HPMin%
* **event_param2**:
HPMax%
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### VictimCast (13)
On target casting spell
* **event_type**:
SMART_EVENT_VICTIM_CASTING (13)
* **event_param1**:
RepeatMin (in msec.)
* **event_param2**:
RepeatMax (in msec.)
* **event_param3**:
[Spell ID](/files/DBC/335/spell#id) (`0`: any)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### FriendHealth ⚠️&nbsp;(14)
On friendly health deficit
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_FRIENDLY_HEALTH (14)
* **event_param1**:
HPDeficit
* **event_param2**:
Radius
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### FriendCCed (15)
Ally is feared, charmed, rooted, stunned or confused
* **event_type**:
SMART_EVENT_FRIENDLY_IS_CC (15)
* **event_param1**:
Radius
* **event_param2**:
RepeatMin (in msec.)
* **event_param3**:
RepeatMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### FriendNoBuff (16)
On friendly lost buff
* **event_type**:
SMART_EVENT_FRIENDLY_MISSING_BUFF (16)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
Radius
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Summon (17)
On creature / gameobject summoned unit
* **event_type**:
SMART_EVENT_SUMMONED_UNIT (17)
* **event_param1**:
[creature entry](../world/creature_template#entry) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### TargetManaPct ⚠️&nbsp;(18)
On target mana percentage
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_TARGET_MANA_PCT (18)
* **event_param1**:
ManaMin%
* **event_param2**:
ManaMax%
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### AcceptedQuest (19)
On target accepted quest
* **event_type**:
SMART_EVENT_ACCEPTED_QUEST (19)
* **event_param1**:
[quest ID](../world/quest_template#id) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### RewardedQuest (20)
On target rewarded quest
* **event_type**:
SMART_EVENT_REWARD_QUEST (20)
* **event_param1**:
[quest ID](../world/quest_template#id) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### ReachedHome (21)
On creature reached home position
* **event_type**:
SMART_EVENT_REACHED_HOME (21)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### ReceiveEmote (22)
On receive player emote
* **event_type**:
SMART_EVENT_RECEIVE_EMOTE (22)
* **event_param1**:
[EmotesText ID](/files/DBC/335/emotestext#id)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### HasAura (23)
On creature has aura (optional: more or equal stacks to **event_param2**)
* **event_type**:
SMART_EVENT_HAS_AURA (23)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
Stack amount
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### TargetBuffed (24)
On target buffed with spell (optional: more or equal stacks to **event_param2**)
* **event_type**:
SMART_EVENT_TARGET_BUFFED (24)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
Stack amount
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Reset (25)
Called after combat and when the creature respawns or spawns.
* **event_type**:
SMART_EVENT_RESET (25)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### LineOfSightIC (26)
On target in distance in combat
* **event_type**:
SMART_EVENT_IC_LOS (26)
* **event_param1**:
  * 0: Hostile
  * 1: Not Hostile
  * 2: Any
* **event_param2**:
MaxRange
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### PassengerEntered (27)
On player / creature entered creature (Vehicle)
* **event_type**:
SMART_EVENT_PASSENGER_BOARDED (27)
* **event_param1**:
CooldownMin (in msec.)
* **event_param2**:
CooldownMax (in msec.)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### PassengerLeft (28)
On player / creature left creature (Vehicle)
* **event_type**:
SMART_EVENT_PASSENGER_REMOVED (28)
* **event_param1**:
CooldownMin (in msec.)
* **event_param2**:
CooldownMax (in msec.)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Charmed (29)
On creature charmed
* **event_type**:
SMART_EVENT_CHARMED (29)
* **event_param1**:
  * 0: onApply
  * 1: onRemove
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### TargetCharmed ⚠️&nbsp;(30)
On target charmed
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_CHARMED_TARGET (30)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SpellHitTarget (31)
On target spell hit
* **event_type**:
SMART_EVENT_SPELLHIT_TARGET (31)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
[`enum SpellSchools`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L303-L313) or `0` (any SpellSchool)
  | Value | Flag | Name |
  |-------|------|------|
  | 1 | 0x01 | SPELL_SCHOOL_NORMAL |
  | 2 | 0x02 | SPELL_SCHOOL_HOLY |
  | 4 | 0x04 | SPELL_SCHOOL_FIRE |
  | 8 | 0x08 | SPELL_SCHOOL_NATURE |
  | 16 | 0x10 | SPELL_SCHOOL_FROST |
  | 32 | 0x20 | SPELL_SCHOOL_SHADOW |
  | 64 | 0x40 | SPELL_SCHOOL_ARCANE |
  {.dense}
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Damaged (32)
On creature damaged
* **event_type**:
SMART_EVENT_DAMAGED (32)
* **event_param1**:
MinDmg
* **event_param2**:
MaxDmg
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### DamagedTarget (33)
On target damaged
* **event_type**:
SMART_EVENT_DAMAGED_TARGET (33)
* **event_param1**:
MinDmg
* **event_param2**:
MaxDmg
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### MovementType (34)

* **event_type**:
SMART_EVENT_MOVEMENTINFORM (34)
* **event_param1**:
[`enum MovementGeneratorType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L26-L48)
  |--|--|--|--|--|
  | IDLE_MOTION_TYPE | 0 |  | DISTRACT_MOTION_TYPE | 10 |
  | RANDOM_MOTION_TYPE | 1 |  | ASSISTANCE_MOTION_TYPE | 11 |
  | WAYPOINT_MOTION_TYPE | 2 |  | ASSISTANCE_DISTRACT_MOTION_TYPE | 12 |
  | MAX_DB_MOTION_TYPE | 3 |  | TIMED_FLEEING_MOTION_TYPE | 13 |
  | CONFUSED_MOTION_TYPE | 4 |  | FOLLOW_MOTION_TYPE | 14 |
  | CHASE_MOTION_TYPE | 5 |  | ROTATE_MOTION_TYPE | 15 |
  | HOME_MOTION_TYPE | 6 |  | EFFECT_MOTION_TYPE | 16 |
  | FLIGHT_MOTION_TYPE | 7 |  | SPLINE_CHAIN_MOTION_TYPE | 17 |
  | POINT_MOTION_TYPE | 8 |  | FORMATION_MOTION_TYPE | 18 |
  | FLEEING_MOTION_TYPE | 9 |  |  |

  {.dense}
* **event_param2**:
PointID
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SummonDespawn (35)
On summoned unit despawned
* **event_type**:
SMART_EVENT_SUMMON_DESPAWNED (35)
* **event_param1**:
[creature entry](../world/creature_template#entry) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### CorpseRemoved (36)
On creature corpse removed
* **event_type**:
SMART_EVENT_CORPSE_REMOVED (36)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### InitSAI (37)
SmartScript::OnInitialize()
* **event_type**:
SMART_EVENT_AI_INIT (37)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### DataSet (38)
On creature / gameobject data set (SMART_ACTION_SET_DATA (45))
* **event_type**:
SMART_EVENT_DATA_SET (38)
* **event_param1**:
FieldId
* **event_param2**:
Value
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### WaypointStart ⚠️&nbsp;(39)
On creature waypoint ID started
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_WAYPOINT_START (39)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### WaypointReached (40)
On creature waypoint ID reached
* **event_type**:
SMART_EVENT_WAYPOINT_REACHED (40)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Trans.AddPlayer ❌&nbsp;(41)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_TRANSPORT_ADDPLAYER (41)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 7 | SMART_SCRIPT_TYPE_TRANSPORT |
{.dense}
#### Trans.AddCreatue ❌&nbsp;(42)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_TRANSPORT_ADDCREATURE (42)
* **event_param1**:
Entry (`0`: any)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 7 | SMART_SCRIPT_TYPE_TRANSPORT |
{.dense}
#### Trans.Rem.Player ❌&nbsp;(43)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_TRANSPORT_REMOVE_PLAYER (43)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 7 | SMART_SCRIPT_TYPE_TRANSPORT |
{.dense}
#### Trans.Relocate ❌&nbsp;(44)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_TRANSPORT_RELOCATE (44)
* **event_param1**:
PointId
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 7 | SMART_SCRIPT_TYPE_TRANSPORT |
{.dense}
#### PlayerEnter ❌&nbsp;(45)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_INSTANCE_PLAYER_ENTER (45)
* **event_param1**:
Team (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 8 | SMART_SCRIPT_TYPE_INSTANCE |
{.dense}
#### AreaTrigger (46)

* **event_type**:
SMART_EVENT_AREATRIGGER_ONTRIGGER (46)
* **event_param1**:
[AreaTrigger ID](/files/DBC/335/areatrigger#id) (`0`: any)
yes, same value as **entryorguid**
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 2 | SMART_SCRIPT_TYPE_AREATRIGGER |
{.dense}
#### QuestAccepted ❌&nbsp;(47)
On target quest accepted
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_QUEST_ACCEPTED (47)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 5 | SMART_SCRIPT_TYPE_QUEST |
{.dense}
#### QuestProgress ❌&nbsp;(48)
On target quest objective completed
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_QUEST_OBJ_COMPLETION (48)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 5 | SMART_SCRIPT_TYPE_QUEST |
{.dense}
#### QuestCompleted ❌&nbsp;(49)
On target quest completed
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_QUEST_COMPLETION (49)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 5 | SMART_SCRIPT_TYPE_QUEST |
{.dense}
#### QuestRewarded ❌&nbsp;(50)
On target quest rewarded
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_QUEST_REWARDED (50)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 5 | SMART_SCRIPT_TYPE_QUEST |
{.dense}
#### QuestFailed ❌&nbsp;(51)
On target quest failed
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_QUEST_FAIL (51)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 5 | SMART_SCRIPT_TYPE_QUEST |
{.dense}
#### TextOver (52)
On duration ended after SMART_ACTION_TALK (1)
* **event_type**:
SMART_EVENT_TEXT_OVER (52)
* **event_param1**:
[text GroupId](../world/creature_text#groupid)
* **event_param2**:
[creature entry](../world/creature_template#entry) who talks (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### ReceivedHeal (53)
On creature received healing
* **event_type**:
SMART_EVENT_RECEIVE_HEAL (53)
* **event_param1**:
MinHeal
* **event_param2**:
MaxHeal
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### JustSummoned (54)
On creature just spawned
* **event_type**:
SMART_EVENT_JUST_SUMMONED (54)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### WaypointPaused (55)
On creature paused at waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_PAUSED (55)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### WaypointResumed (56)
On Creature resumed after waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_RESUMED (56)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### WaypointStopped (57)
On creature stopped on waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_STOPPED (57)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### WaypointEnded (58)
On creature waypoint path ended
* **event_type**:
SMART_EVENT_WAYPOINT_ENDED (58)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### EventTriggered (59)
On SMART_ACTION_TRIGGER_TIMED_EVENT (73) trigger. 
> Note: Other ACTION_TIMED_EVENT actions create a SMART_ACTION_TRIGGER_TIMED_EVENT (73) in a roundabout way and will thus also trigger this event indirectly.
{.is-info}
* **event_type**:
SMART_EVENT_TIMED_EVENT_TRIGGERED (59)
* **event_param1**:
id
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### Update (60)
Update always
* **event_type**:
SMART_EVENT_UPDATE (60)
* **event_param1**:
InitialMin (in msec.)
* **event_param2**:
InitialMax (in msec.)
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### Link (61)
requires another **link** to point at this entries **id**
Used to link together multiple events, does not use any extra resources to iterate event lists needlessly.
* **event_type**:
SMART_EVENT_LINK (61)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
< any >

#### GossipSelect (62)
Player selects an option from the gossip menu.
* **event_type**:
SMART_EVENT_GOSSIP_SELECT (62)
* **event_param1**:
[gossip menuID](../world/gossip_menu_option#menuid)
* **event_param2**:
[gossip OptionID](../world/gossip_menu_option#optionid)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### JustCreated (63)
On creature / gameobject first time load
* **event_type**:
SMART_EVENT_JUST_CREATED (63)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### GossipHello (64)
On right click creature / gameobject that have gossip enabled
* **event_type**:
SMART_EVENT_GOSSIP_HELLO (64)
* **event_param1**:
OnReportUse (for GOs)
  * 0: onGossipHello and onReportUse (may trigger twice)
  * 1: onGossipHello only
  * 2: onReportUse only
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### FollowComplete (65)
On stop following
* **event_type**:
SMART_EVENT_FOLLOW_COMPLETED (65)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### EventPhase ⚠️&nbsp;(66)
On event phase mask set
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_EVENT_PHASE_CHANGE (66)
* **event_param1**:
event phase mask (<= SMART_EVENT_PHASE_ALL)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### BehindTarget ⚠️&nbsp;(67)
On creature is behind target
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_IS_BEHIND_TARGET (67)
* **event_param1**:
CooldownMin (in msec.)
* **event_param2**:
CooldownMax (in msec.)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### GameEventStart (68)
On game event started
* **event_type**:
SMART_EVENT_GAME_EVENT_START (68)
* **event_param1**:
[game_event eventEntry](../world/game_event#eventEntry)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### GameEventEnd (69)
On game event ended
* **event_type**:
SMART_EVENT_GAME_EVENT_END (69)
* **event_param1**:
[game_event eventEntry](../world/game_event#eventEntry)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### LootState (70)

* **event_type**:
SMART_EVENT_GO_LOOT_STATE_CHANGED (70)
* **event_param1**:
[`enum LootState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/GameObject/GameObject.h#L74-L79)
  | ID | Name | Comment |
  |----|------|---------|
  | 1 | GO_NOT_READY |  |
  | 2 | GO_READY | can be ready but despawned, and then not possible activate until spawn |
  | 3 | GO_ACTIVATE |  |
  | 4 | GO_JUST_DEACTIVATED |  |
  {.dense}
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### GOEventInform (71)
On gameobject emits event
* **event_type**:
SMART_EVENT_GO_EVENT_INFORM (71)
* **event_param1**:
eventId from [gameobject template](../world/gameobject_template#data0-23)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### ActionDone (72)
manual values or [enum EventId](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3336-L3350) passed by SmartAI::DoAction()
* **event_type**:
SMART_EVENT_ACTION_DONE (72)
* **event_param1**:
eventId
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Spellclick (73)
Player clicked on [spellclick enabled creature](../world/creature_template#npcflag)
* **event_type**:
SMART_EVENT_ON_SPELLCLICK (73)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### FriendHealthPct (74)
'friendly' determined by **target_type**
* **event_type**:
SMART_EVENT_FRIENDLY_HEALTH_PCT (74)
* **event_param1**:
minHpPct
* **event_param2**:
maxHpPct
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### DistanceNPC (75)
On creature guid _OR_ any instance of creature entry is within distance
* **event_type**:
SMART_EVENT_DISTANCE_CREATURE (75)
* **event_param1**:
[creature guid](../world/creature#guid)
* **event_param2**:
[creature entry](../world/creature_template#entry)
* **event_param3**:
distance
* **event_param4**:
repeat (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### DistanceGO (76)
On gameobject guid _OR_ any instance of gameobject entry is within distance
* **event_type**:
SMART_EVENT_DISTANCE_GAMEOBJECT (76)
* **event_param1**:
[gameobject guid](../world/gameobject#guid)
* **event_param2**:
[gameobject entry](../world/gameobject_template#entry)
* **event_param3**:
distance
* **event_param4**:
repeat (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### CounterSet (77)
after SMART_ACTION_SET_COUNTER (63), check if quantity of counterId is equal to value
* **event_type**:
SMART_EVENT_COUNTER_SET (77)
* **event_param1**:
counterId
* **event_param2**:
value
* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### SceneStart ❌&nbsp;(78)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_SCENE_START (78)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SceneTrigger ❌&nbsp;(79)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_SCENE_TRIGGER (79)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SceneCancel ❌&nbsp;(80)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_SCENE_CANCEL (80)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SceneComplete ❌&nbsp;(81)
> RESERVED for master branch
{.is-danger}
* **event_type**:
SMART_EVENT_SCENE_COMPLETE (81)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SummonDies (82)

* **event_type**:
SMART_EVENT_SUMMONED_UNIT_DIES (82)
* **event_param1**:
[creature entry](../world/creature_template#entry) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
| 1 | SMART_SCRIPT_TYPE_GAMEOBJECT |
{.dense}
#### SpellCast (83)
on Spell::cast
* **event_type**:
SMART_EVENT_ON_SPELL_CAST (83)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SpellFailed (84)
on Unit::InterruptSpell
* **event_type**:
SMART_EVENT_ON_SPELL_FAILED (84)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### SpellStart (85)
on Spell::prapare
* **event_type**:
SMART_EVENT_ON_SPELL_START (85)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
{.dense}
#### Despawn (86)
On before creature removed
* **event_type**:
SMART_EVENT_ON_DESPAWN (86)
* **event_param1**:
`0`
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
|--|--|
| 0 | SMART_SCRIPT_TYPE_CREATURE |
### EndTabset {.tabset}
&nbsp;

### event_phase_mask
When dealing with phases, phase IDs have to be used. There are 13 (12+1) different phases: 1, 2, ... 12 and the default 0.

Example: The script is in phase 0 by default - If we want it to go to phase 1, we got two choices:
&nbsp;&nbsp;&nbsp;&nbsp;SMART_ACTION_INC_PHASE by 1 or SMART_ACTION_SET_PHASE 1

If the script is in phase 0 and want to skip to phase 2:
&nbsp;&nbsp;&nbsp;&nbsp;SMART_ACTION_INC_PHASE by 2 or SMART_ACTION_SET_PHASE 2

If the script is in phase 1 and want to skip to phase 2:
&nbsp;&nbsp;&nbsp;&nbsp;SMART_ACTION_INC_PHASE by 1 or SMART_ACTION_SET_PHASE 2
&nbsp;

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x0000 | SMART_EVENT_PHASE_ALWAYS | Means all phases (1 ... 12) |
| 1 | 0x0001 | SMART_EVENT_PHASE_1 |  |
| 2 | 0x0002 | SMART_EVENT_PHASE_2 |  |
| 4 | 0x0004 | SMART_EVENT_PHASE_3 |  |
| 8 | 0x0008 | SMART_EVENT_PHASE_4 |  |
| 16 | 0x0010 | SMART_EVENT_PHASE_5 |  |
| 32 | 0x0020 | SMART_EVENT_PHASE_6 |  |
| 64 | 0x0040 | SMART_EVENT_PHASE_7 |  |
| 128 | 0x0080 | SMART_EVENT_PHASE_8 |  |
| 256 | 0x0100 | SMART_EVENT_PHASE_9 |  |
| 512 | 0x0200 | SMART_EVENT_PHASE_10 |  |
| 1024 | 0x0400 | SMART_EVENT_PHASE_11 |  |
| 2048 | 0x0800 | SMART_EVENT_PHASE_12 |  |
{.dense}

&nbsp;

### event_chance
This is the probability of the event to occur as a percentage from 0-100. So, if you want the event to occur roughly half of the time, then set this to 50.
&nbsp;

### event_flags
Sets if the event should not repeat or should only happen in a given instance/dungeon difficulty (if applicable):

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | SMART_EVENT_FLAG_NOT_REPEATABLE | Event can not repeat |
| 2 | 0x0002 | SMART_EVENT_FLAG_DIFFICULTY_0 | Event only occurs in instance difficulty 0 |
| 4 | 0x0004 | SMART_EVENT_FLAG_DIFFICULTY_1 | Event only occurs in instance difficulty 1 |
| 8 | 0x0008 | SMART_EVENT_FLAG_DIFFICULTY_2 | Event only occurs in instance difficulty 2 |
| 16 | 0x0010 | SMART_EVENT_FLAG_DIFFICULTY_3 | Event only occurs in instance difficulty 3 |
| 128 | 0x0080 | SMART_EVENT_FLAG_DEBUG_ONLY | Event only occurs in debug build |
| 256 | 0x0100 | SMART_EVENT_FLAG_DONT_RESET | Event will not reset in SmartScript::OnReset() |
| 512 | 0x0200 | SMART_EVENT_FLAG_WHILE_CHARMED | Event occurs even if AI owner is charmed |
{.dense}

&nbsp;

### action <!-- {#action-alt} -->
### Tabset {.tabset}
#### None (0)
No action.
* **action_type**:
SMART_ACTION_NONE (0)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Talk (1)
Display a creature text entry.
> Note: SMART_EVENT_TEXT_OVER (52) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_TALK (1)
* **action_param1**:
[text GroupID](../world/creature_text#groupid)
* **action_param2**:
duration (in msec.)
* **action_param3**:
useTalkTarget: only considered for creature targets
  * 0: target talks to invoker
  * 1: creature talks to target
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetFaction (2)
Sets faction of target creatures.
* **action_type**:
SMART_ACTION_SET_FACTION (2)
* **action_param1**:
[FactionTemplate ID](/files/DBC/335/factiontemplate#id) (`0`: default)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Morph (3)
Target creatures take on another appearance.
> Note: creature entry takes precedence over DisplayID. If both are `0`, the original appearance is restored.
{.is-info}
* **action_type**:
SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL (3)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
[modelInfo DisplayID](../world/creature_model_info#displayid)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Sound (4)
Target units play a sound entry.
* **action_type**:
SMART_ACTION_SOUND (4)
* **action_param1**:
[SoundEntry ID](/files/DBC/335/soundentries#id)
* **action_param2**:
onlySelf
  * 0: heard by all players in visibility range
  * 1: heard by invoking player
* **action_param3**:
distanceSound
  * 0: uses WorldObject::PlayDirectSound()
  * 1: uses WorldObject::PlayDistanceSound()
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlayEmote (5)
Plays an emote as oneshot. 
* **action_type**:
SMART_ACTION_PLAY_EMOTE (5)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### FailQuest (6)
Fail quest for target players.
* **action_type**:
SMART_ACTION_FAIL_QUEST (6)
* **action_param1**:
[quest ID](../world/quest_template#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### OfferQuest (7)
Offer quest to target players.
* **action_type**:
SMART_ACTION_OFFER_QUEST (7)
* **action_param1**:
[quest ID](../world/quest_template#id)
* **action_param2**:
directAdd:
  * 0: offer quest
  * 1: add quest to log
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetReactState (8)
Makes the target react passive, defensive or aggressive.
* **action_type**:
SMART_ACTION_SET_REACT_STATE (8)
* **action_param1**:
[`enum ReactStates`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L406-L411)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | REACT_PASSIVE | Does not defend or attack at all. Does nothing. |
  | 1 | REACT_DEFENSIVE | Only attacks back when attacked. |
  | 2 | REACT_AGGRESSIVE | Will attack if on threat list and in threat radius. (default) |
  {.dense}
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ActivateObject (9)
Set target gameobjects as active. This opens a door or makes a container lootable.
* **action_type**:
SMART_ACTION_ACTIVATE_GOBJECT (9)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlayRandomEmote (10)
Play random emote. 
> Note: An **action_param** of 0 is skipped and not interpreted as emote: ONESHOT_NONE (0).
{.is-info}
* **action_type**:
SMART_ACTION_RANDOM_EMOTE (10)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id) #1
* **action_param2**:
[Emote ID](/files/DBC/335/emotes#id) #2
* **action_param3**:
[Emote ID](/files/DBC/335/emotes#id) #3
* **action_param4**:
[Emote ID](/files/DBC/335/emotes#id) #4
* **action_param5**:
[Emote ID](/files/DBC/335/emotes#id) #5
* **action_param6**:
[Emote ID](/files/DBC/335/emotes#id) #6
#### CastSpell (11)
Cast spell at targets.
* **action_type**:
SMART_ACTION_CAST (11)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **action_param2**:
[`enum SmartCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1541-L1550)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x01 | SMARTCAST_INTERRUPT_PREVIOUS |  Interrupt any spell casting |
  | 2 | 0x02 | SMARTCAST_TRIGGERED |  Triggered (this makes spell cost zero mana and have no cast time) |
  | 4 | 0x04 | :x: SMARTCAST_FORCE_CAST | Forces cast even if creature is out of mana or out of range |
  | 8 | 0x08 | :x: SMARTCAST_NO_MELEE_IF_OOM | Prevents creature from entering melee if out of mana or out of range |
  | 16 | 0x10 | :x: SMARTCAST_FORCE_TARGET_SELF | Forces the target to cast this spell on itself |
  | 32 | 0x20 | SMARTCAST_AURA_NOT_PRESENT |  Only casts the spell if the target does not have an aura from the spell |
  | 64 | 0x40 | SMARTCAST_COMBAT_MOVE |  Prevents combat movement if cast successful. Allows movement on range, OOM, LOS |
  {.dense}
* **action_param3**:
[`enum TriggerCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L146-L173)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x00000001 | TRIGGERED_IGNORE_GCD | Will ignore GCD |
  | 2 | 0x00000002 | TRIGGERED_IGNORE_SPELL_AND_CATEGORY_CD | Will ignore Spell and Category cooldowns |
  | 4 | 0x00000004 | TRIGGERED_IGNORE_POWER_AND_REAGENT_COST | Will ignore power and reagent cost |
  | 8 | 0x00000008 | TRIGGERED_IGNORE_CAST_ITEM | Will not take away cast item or update related achievement criteria |
  | 16 | 0x00000010 | TRIGGERED_IGNORE_AURA_SCALING | Will ignore aura scaling |
  | 32 | 0x00000020 | TRIGGERED_IGNORE_CAST_IN_PROGRESS | Will not check if a current cast is in progress |
  | 64 | 0x00000040 | TRIGGERED_IGNORE_COMBO_POINTS | Will ignore combo point requirement |
  | 128 | 0x00000080 | TRIGGERED_CAST_DIRECTLY | In Spell::prepare, will be cast directly without setting containers for executed spell |
  | 256 | 0x00000100 | TRIGGERED_IGNORE_AURA_INTERRUPT_FLAGS | Will ignore interruptible aura's at cast |
  | 512 | 0x00000200 | TRIGGERED_IGNORE_SET_FACING | Will not adjust facing to target (if any) |
  | 1024 | 0x00000400 | TRIGGERED_IGNORE_SHAPESHIFT | Will ignore shapeshift checks |
  | 2048 | 0x00000800 | TRIGGERED_IGNORE_CASTER_AURASTATE | Will ignore caster aura states including combat requirements and death state |
  | 4096 | 0x00001000 | TRIGGERED_DISALLOW_PROC_EVENTS | Disallows proc events from triggered spell (default) |
  | 8192 | 0x00002000 | TRIGGERED_IGNORE_CASTER_MOUNTED_OR_ON_VEHICLE | Will ignore mounted/on vehicle restrictions |
  | 65536 | 0x00010000 | TRIGGERED_IGNORE_CASTER_AURAS | Will ignore caster aura restrictions or requirements |
  | 131072 | 0x00020000 | TRIGGERED_DONT_RESET_PERIODIC_TIMER | Will allow periodic aura timers to keep ticking (instead of resetting) |
  | 262144 | 0x00040000 | TRIGGERED_DONT_REPORT_CAST_ERROR | Will return SPELL_FAILED_DONT_REPORT in CheckCast functions |
  | 524288 | 0x00080000 | TRIGGERED_IGNORE_EQUIPPED_ITEM_REQUIREMENT | Will ignore equipped item requirements |
  {.dense}
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SummonNPC (12)
Summon NPC
* **action_type**:
SMART_ACTION_SUMMON_CREATURE (12)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
[`enum TempSummonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Object/ObjectDefines.h#L59-L69)
  | ID | Name | Comment |
  |----|------|---------|
  | 1 | TEMPSUMMON_TIMED_OR_DEAD_DESPAWN | despawns after a specified time OR when the creature disappears |
  | 2 | TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN | despawns after a specified time OR when the creature dies |
  | 3 | TEMPSUMMON_TIMED_DESPAWN | despawns after a specified time |
  | 4 | TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT | despawns after a specified time after the creature is out of combat |
  | 5 | TEMPSUMMON_CORPSE_DESPAWN | despawns instantly after death |
  | 6 | TEMPSUMMON_CORPSE_TIMED_DESPAWN | despawns after a specified time after death |
  | 7 | TEMPSUMMON_DEAD_DESPAWN | despawns when the creature disappears |
  | 8 | TEMPSUMMON_MANUAL_DESPAWN | despawns when UnSummon() is called |
  {.dense}
* **action_param3**:
duration in ms
* **action_param4**:
attackInvoker? (`0`/`1`)
* **action_param5**:
SmartActionSummonCreatureFlags:
  * 0x1: PersonalSpawn (only visible to summoner)
  * 0x2: PreferUnit (.. as summoner)
* **action_param6**:
`0`
#### ThreatPctSingle (13)
Change own threat percentage against target units.
* **action_type**:
SMART_ACTION_THREAT_SINGLE_PCT (13)
* **action_param1**:
Threat% increase
* **action_param2**:
Threat% decrease
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ThreatPctAll (14)
Change own threat percentage against all units engaged with this creature.
* **action_type**:
SMART_ACTION_THREAT_ALL_PCT (14)
* **action_param1**:
Threat% increase
* **action_param2**:
Threat% decrease
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ExploreEvent (15)
Satisfy exploration requirement for quest for target players.
* **action_type**:
SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS (15)
* **action_param1**:
[QuestID](../world/quest_template#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Reserved16 ❌&nbsp;(16)
> used on 4.3.4 and higher scripts
{.is-danger}
* **action_type**:
SMART_ACTION_RESERVED_16 (16)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlayEmoteState (17)
Play Emote Continuously. Useful for displaying activity on a NPC (fishing, working, etc.)
* **action_type**:
SMART_ACTION_SET_EMOTE_STATE (17)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetUnitFlags ⚠️&nbsp;(18)
Set multiple flags at once
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_UNIT_FLAG (18)
* **action_param1**:
flags
* **action_param2**:
  * 0: set unit_flags
  * 1: set unit_flags2
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### UnsetUnitFlags ⚠️&nbsp;(19)
Remove multiple flags at once
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_REMOVE_UNIT_FLAG (19)
* **action_param1**:
flags
* **action_param2**:
  * 0: unset unit_flags
  * 1: unset unit_flags2
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AutoAttack (20)
Set if creature can auto attack.
* **action_type**:
SMART_ACTION_AUTO_ATTACK (20)
* **action_param1**:
allowAttack
  * 0: no and stop if currently auto attacking
  * 1: yes
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### CombatMovement (21)
Set if creature can move during combat.
* **action_type**:
SMART_ACTION_ALLOW_COMBAT_MOVEMENT (21)
* **action_param1**:
allowMovement? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetEventPhase (22)
Set own event phase. (see **event_phase_mask**)
* **action_type**:
SMART_ACTION_SET_EVENT_PHASE (22)
* **action_param1**:
phase
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### IncEventPhase (23)
Increment or decrement own event phase. (see **event_phase_mask**)
> Note: only set increment OR decrement, not both.
{.is-info}
* **action_type**:
SMART_ACTION_INC_EVENT_PHASE (23)
* **action_param1**:
increment
* **action_param2**:
decrement
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### EnterEvadeMode (24)
This creature enters evade mode.
> Note: SMART_EVENT_EVADE (7) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_EVADE (24)
* **action_param1**:
  * 0: to respawn pos.
  * 1: to last stored home pos.
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### FleeForAssist (25)
This creature walks towards nearest ally.
* **action_type**:
SMART_ACTION_FLEE_FOR_ASSIST (25)
* **action_param1**:
withEmote
  * 0: *- nothing -*
  * 1: <span style="color:#ff8040; background-color:#000; padding:2px 5px;">%s attempts to run away in fear</span>
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ExploreEventParty (26)
Like SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS (15) but for the whole party.
* **action_type**:
SMART_ACTION_CALL_GROUPEVENTHAPPENS (26)
* **action_param1**:
[quest ID](../world/quest_template#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### CombatStop (27)
Creature disengages combat.
* **action_type**:
SMART_ACTION_COMBAT_STOP (27)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveAura (28)
Removes any or all auras from targets.
An **action_param1** = 0 will always remove all auras regardless of other parameters.
* **action_type**:
SMART_ACTION_REMOVEAURASFROMSPELL (28)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id) (`0`: all auras)
* **action_param2**:
charges (`0`: all charges)
* **action_param3**:
onlyOwned? (`0`/`1`)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Follow (29)
Creature starts to follow target at distance and angle. Optional quest credit is rewarded upon StopFollow.
* **action_type**:
SMART_ACTION_FOLLOW (29)
* **action_param1**:
distance (`0`: default)
* **action_param2**:
angle (`0`: default)
* **action_param3**:
Following ends when reaching [creature entry](../world/creature_template#entry)
* **action_param4**:
[creature entry](../world/creature_template#entry) or [quest ID](../world/quest_template#id), depending on **action_param5**
* **action_param5**:
creditType:
  * 0: creature kill
  * 1: exploration event
* **action_param6**:
`0`
#### RandEventPhase (30)
Set own event phase to random phase from **action_param**. (see **event_phase_mask**)

> Note: An **action_param** of 0 is skipped and not interpreted as SMART_EVENT_PHASE_ALWAYS (0)
{.is-info}
* **action_type**:
SMART_ACTION_RANDOM_PHASE (30)
* **action_param1**:
Phase1
* **action_param2**:
Phase2
* **action_param3**:
Phase3
* **action_param4**:
Phase4
* **action_param5**:
Phase5
* **action_param6**:
Phase6
#### RangeEventPhase (31)
Set own event phase to phase in within given range. (see **event_phase_mask**)
* **action_type**:
SMART_ACTION_RANDOM_PHASE_RANGE (31)
* **action_param1**:
PhaseMin
* **action_param2**:
PhaseMax
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ResetObject (32)
Resets active target gameobjects.
* **action_type**:
SMART_ACTION_RESET_GOBJECT (32)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### KillCredit (33)
Credits a creature kill to satisfy [quest RequiredNpcOrGo](../world/quest_template##requirednpcorgo1-4) requirements to target players.
> Note: If target is SMART_TARGET_NONE (0) or SMART_TARGET_SELF (1), the kill is credited to all players eligible for loot from this creature.
{.is-info} 
* **action_type**:
SMART_ACTION_CALL_KILLEDMONSTER (33)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetInstanceData (34)
Store data in scripted instance this entity is located in.
* **action_type**:
SMART_ACTION_SET_INST_DATA (34)
* **action_param1**:
field
  * type = 0: fieldId
  * type = 1: bossId
* **action_param2**:
data
  * type = 0: arbitrary data
  * type = 1: [`enum EncounterState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Instances/InstanceScript.h#L68-L76)
    |--|--|
    | NOT_STARTED | 0 |
    | IN_PROGRESS | 1 |
    | FAIL | 2 |
    | DONE | 3 |
    | SPECIAL | 4 |
    {.dense}
* **action_param3**:
type:
  * 0: SetData
  * 1: SetBossState
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetInstanceData64 (35)
Store target's guid in scripted instance this entity is located in.
* **action_type**:
SMART_ACTION_SET_INST_DATA64 (35)
* **action_param1**:
fieldId
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### UpdateTemplate (36)
Updates creature template of target creature to given entry.
Can set level from given creature entry.
* **action_type**:
SMART_ACTION_UPDATE_TEMPLATE (36)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
updateLevel? (`0`/`1`)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Die (37)
Creature suicides.
* **action_type**:
SMART_ACTION_DIE (37)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetInCombat (38)
Creature engages all players in instanced map.
* **action_type**:
SMART_ACTION_SET_IN_COMBAT_WITH_ZONE (38)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### CallForHelp (39)
Allies in range start assisting creature. Must be in combat.
* **action_type**:
SMART_ACTION_CALL_FOR_HELP (39)
* **action_param1**:
range
* **action_param2**:
withEmote
  * 0: *- nothing -*
  * 1: <span style="color:#ff8040; background-color:#000; padding:2px 5px;">%s calls for help!</span>
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetSheath (40)
Creature draws or puts away it's weapon.
* **action_type**:
SMART_ACTION_SET_SHEATH (40)
* **action_param1**:
[`enum SheathState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L96-L103)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | SHEATH_STATE_UNARMED | non prepared weapon |
  | 1 | SHEATH_STATE_MELEE | prepared melee weapon |
  | 2 | SHEATH_STATE_RANGED | prepared ranged weapon |
  {.dense}
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ForceDespawn (41)
Despawns target creatures / gameobjects.
* **action_type**:
SMART_ACTION_FORCE_DESPAWN (41)
* **action_param1**:
despawnDelay (in msec.)
* **action_param2**:
forceRespawnTimer (in sec.) (`0`: default respawn)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetInvincibleHP (42)
Target creatures become damage immune below HP threshold.
> Note: Percent value takes precedence over flat value.
{.is-info}
* **action_type**:
SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL (42)
* **action_param1**:
flat HP
* **action_param2**:
percent HP (0 &ndash; 100)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Mount (43)
Target creatures mount / dismount.
> Note: creature entry takes precedence over DisplayID. If both are `0` the target dismounts.
{.is-info}
* **action_type**:
SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL (43)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
[modelInfo DisplayID](../world/creature_model_info#displayid)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetGamePhase (44)
Set visibility phase mask of all targets.
* **action_type**:
SMART_ACTION_SET_INGAME_PHASE_MASK (44)
* **action_param1**:
phaseMask
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetData (45)
Store data in fieldId in AI enabled targets.
* **action_type**:
SMART_ACTION_SET_DATA (45)
* **action_param1**:
fieldId
* **action_param2**:
data
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AttackStop (46)
Target creatures stop melee, spell casting during combat and victim chasing.
* **action_type**:
SMART_ACTION_ATTACK_STOP (46)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetVisibility (47)
Set visibility of unit targets.
* **action_type**:
SMART_ACTION_SET_VISIBILITY (47)
* **action_param1**:
visible? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetActive (48)
Enables/disables grid active for targets. (They update without a player being present)
* **action_type**:
SMART_ACTION_SET_ACTIVE (48)
* **action_param1**:
active? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AttackStart (49)
Creature starts attacking random target.
* **action_type**:
SMART_ACTION_ATTACK_START (49)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SummonObject (50)
Spawns Gameobject, use **target_type** to set spawn position.
* **action_type**:
SMART_ACTION_SUMMON_GO (50)
* **action_param1**:
[gameobject entry](../world/gameobject_template#entry)
* **action_param2**:
despawnTime (in sec.)
* **action_param3**:
[`enum GOSummonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Object/ObjectDefines.h#L85-L89)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | GO_SUMMON_TIMED_OR_CORPSE_DESPAWN | despawns after a specified time OR when the summoner dies |
  | 1 | GO_SUMMON_TIMED_DESPAWN | despawns after a specified time |
  {.dense}
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### KillUnit (51)
Forces targets to suicide.
* **action_type**:
SMART_ACTION_KILL_UNIT (51)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ActivateTaxi (52)
Sends target player to flight path.
> Note: The player must not be in combat, stunned or rooted.
{.is-info}
* **action_type**:
SMART_ACTION_ACTIVATE_TAXI (52)
* **action_param1**:
[TaxiPath ID](/files/DBC/335/taxipath#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### WaypointStart (53)
Creature starts Waypoint Movement. Use waypoints table to create movement.
* **action_type**:
SMART_ACTION_WP_START (53)
* **action_param1**:
run? (`0`/`1`)
* **action_param2**:
[Waypoint entry](../world/waypoints#entry)
* **action_param3**:
canRepeat? (`0`/`1`)
* **action_param4**:
Binds creature to [quest ID](../world/quest_template#id). It's objective is satisfied when the last waypoint is reached and failed when the creature is killed or the player is out of range.
* **action_param5**:
despawntime (in msec.)
* **action_param6**:
`0`
#### WaypointPause (54)
Creature pauses its Waypoint Movement for given time.
* **action_type**:
SMART_ACTION_WP_PAUSE (54)
* **action_param1**:
time (in msec.)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### WaypointStop (55)
Creature stops its Waypoint Movement.
* **action_type**:
SMART_ACTION_WP_STOP (55)
* **action_param1**:
despawnTime (in msec.)
* **action_param2**:
[quest ID](../world/quest_template#id)
* **action_param3**:
failQuest?
  * 0: quest objective is satisfied
  * 1: quest fails
  
  Quest must be set in **action_param2** or by SMART_ACTION_WP_START (53)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddItem (56)
Adds count of item to target players.
* **action_type**:
SMART_ACTION_ADD_ITEM (56)
* **action_param1**:
[item entry](../world/item_template#entry)
* **action_param2**:
count
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveItem (57)
Removes count of item from target players.
* **action_type**:
SMART_ACTION_REMOVE_ITEM (57)
* **action_param1**:
[item entry](../world/item_template#entry)
* **action_param2**:
count
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### UseAITemplate ⚠️&nbsp;(58)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_INSTALL_AI_TEMPLATE (58)
* **action_param1**:
AITemplateID
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetRun (59)
Set if creature can run or must walk.
* **action_type**:
SMART_ACTION_SET_RUN (59)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### DisableGravity (60)
Enable/disable smooth aerial movement for creature.
> Note: Only works for creatures with INHABIT_AIR (4).
{.is-info}
* **action_type**:
SMART_ACTION_SET_DISABLE_GRAVITY (60)
* **action_param1**:
disable
  * 0: gravity is disabled
  * 1: gravity is enabled
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetSwim ⚠️&nbsp;(61)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_SWIM (61)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Teleport (62)
Teleport targets to World Position set in the same target definition.
* **action_type**:
SMART_ACTION_TELEPORT (62)
* **action_param1**:
[Map ID](/files/DBC/335/map#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetCounter (63)
Store value in counterId in SAI enabled targets.
> Note: SMART_EVENT_COUNTER_SET (77) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_SET_COUNTER (63)
* **action_param1**:
counterID
* **action_param2**:
value
* **action_param3**:
reset
  * 0: add value to counter
  * 1: set counter to value
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### StoreTargets (64)
Store selected targets in varID for later use.
* **action_type**:
SMART_ACTION_STORE_TARGET_LIST (64)
* **action_param1**:
varID
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### WaypointResume (65)
Creature continues paused Waypoint Movement.
* **action_type**:
SMART_ACTION_WP_RESUME (65)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetOrientation (66)
Creature turns in a given direction, depending on target.
* **action_type**:
SMART_ACTION_SET_ORIENTATION (66)
* **action_param1**:
orientation
  * SMART_TARGET_SELF (1): orientation of Home Position
  * SMART_TARGET_POSITION (8): **target_o** value
  * < other target selectors >: set to face selected target
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### NewTimedEvent (67)
Similar to SMART_ACTION_TRIGGER_TIMED_EVENT (73) but delayed and optionally repeatable.
> Note: SMART_EVENT_TIMED_EVENT_TRIGGERED (77) will be triggered.
{.is-info}
* **action_type**:
SMART_ACTION_CREATE_TIMED_EVENT (67)
* **action_param1**:
id
* **action_param2**:
InitialMin (in msec.)
* **action_param3**:
InitialMax (in msec.)
* **action_param4**:
RepeatMin (`0`: no repeat; in msec.)
* **action_param5**:
RepeatMax (`0`: no repeat; in msec.)
* **action_param6**:
chance (`0`: 100%)
#### PlayMovie (68)
Play movie for target players.
* **action_type**:
SMART_ACTION_PLAYMOVIE (68)
* **action_param1**:
MovieID
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### MoveToPos (69)
Move to target Entity or target World Position.
> Note: SMART_EVENT_MOVEMENTINFORM (34) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_MOVE_TO_POS (69)
* **action_param1**:
PointID
* **action_param2**:
onTransport? (`0`/`1`)
* **action_param3**:
noPathfinding? (`0`/`1`)
* **action_param4**:
ContactDistance
* **action_param5**:
`0`
* **action_param6**:
`0`
#### EnableTmpObject (70)
Enable target Gameobjects, not spawned by default.
* **action_type**:
SMART_ACTION_ENABLE_TEMP_GOBJ (70)
* **action_param1**:
respawn time (in sec.)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### EquipItem (71)
Set equipment on target creatures.
Slots 1 &ndash; 3 item entries are only used if no equipment ID is set.
* **action_type**:
SMART_ACTION_EQUIP (71)
* **action_param1**:
[equipment ID](../world/creature_equip_template#id)
* **action_param2**:
slotmask (`0`: 0x7)
Only slots matching the slotmask are equipped.
* **action_param3**:
right hand slot (1) [item entry](../world/item_template#entry)
* **action_param4**:
left hand slot (2) [item entry](../world/item_template#entry)
* **action_param5**:
ranged slot (3) [item entry](../world/item_template#entry)
* **action_param6**:
`0`
#### CloseGossip (72)
Closes open gossip window.
* **action_type**:
SMART_ACTION_CLOSE_GOSSIP (72)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### TriggerTimedEvent (73)
> Note: SMART_EVENT_TIMED_EVENT_TRIGGERED (77) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_TRIGGER_TIMED_EVENT (73)
* **action_param1**:
id
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveTimedEvent (74)
Delete scheduled Timed Event with id.
* **action_type**:
SMART_ACTION_REMOVE_TIMED_EVENT (74)
* **action_param1**:
id
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddAura ⚠️&nbsp;(75)
Add aura to target units.
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_ADD_AURA (75)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### OverrideScript ⚠️&nbsp;(76)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT (76)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ResetScript ⚠️&nbsp;(77)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_RESET_SCRIPT_BASE_OBJECT (77)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ScriptReset (78)
Reset this creature / gameobject.
> Note: SMART_EVENT_RESET (25) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_CALL_SCRIPT_RESET (78)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetRangedMove (79)
Sets attack distance and angle for SAI enabled target creatures currenctly in combat.
* **action_type**:
SMART_ACTION_SET_RANGED_MOVEMENT (79)
* **action_param1**:
attackDistance
* **action_param2**:
attackAngle
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### StartTimedAction (80)
Start TimedActionList on SAI enabled targets.
* **action_type**:
SMART_ACTION_CALL_TIMED_ACTIONLIST (80)
* **action_param1**:
**entryorguid**
* **action_param2**:
updateType
  * 0: out of combat
  * 1: in combat
  * 2: always
* **action_param3**:
allowOverride? (`0`/`1`)
Determines if an already active TimedActionList can be overridden.
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetNpcFlag (81)
Replace npcflags on target creature.
* **action_type**:
SMART_ACTION_SET_NPC_FLAG (81)
* **action_param1**:
[creature npcflag](../world/creature_template#npcflag)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddNpcFlag (82)
Add npcflags to target creatures.
* **action_type**:
SMART_ACTION_ADD_NPC_FLAG (82)
* **action_param1**:
[creature npcflag](../world/creature_template#npcflag)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveNpcFlag (83)
Remove npcflags from target creatures.
* **action_type**:
SMART_ACTION_REMOVE_NPC_FLAG (83)
* **action_param1**:
[creature npcflag](../world/creature_template#npcflag)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SimpleTalk (84)
Target units will say the text.
> Note: SMART_EVENT_TEXT_OVER (52) is **not** triggered.
{.is-warning}
* **action_type**:
SMART_ACTION_SIMPLE_TALK (84)
* **action_param1**:
[text groupID](../world/creature_text#groupid)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SelfCastSpell (85)
The targets will cast the spell on themselves.
* **action_type**:
SMART_ACTION_SELF_CAST (85)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **action_param2**:
[`enum SmartCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1541-L1550)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x01 | SMARTCAST_INTERRUPT_PREVIOUS |  Interrupt any spell casting |
  | 2 | 0x02 | SMARTCAST_TRIGGERED |  Triggered (this makes spell cost zero mana and have no cast time) |
  | 4 | 0x04 | :x: SMARTCAST_FORCE_CAST | Forces cast even if creature is out of mana or out of range |
  | 8 | 0x08 | :x: SMARTCAST_NO_MELEE_IF_OOM | Prevents creature from entering melee if out of mana or out of range |
  | 16 | 0x10 | :x: SMARTCAST_FORCE_TARGET_SELF | Forces the target to cast this spell on itself |
  | 32 | 0x20 | SMARTCAST_AURA_NOT_PRESENT |  Only casts the spell if the target does not have an aura from the spell |
  | 64 | 0x40 | SMARTCAST_COMBAT_MOVE |  Prevents combat movement if cast successful. Allows movement on range, OOM, LOS |
  {.dense}
* **action_param3**:
[`enum TriggerCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L146-L173)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x00000001 | TRIGGERED_IGNORE_GCD | Will ignore GCD |
  | 2 | 0x00000002 | TRIGGERED_IGNORE_SPELL_AND_CATEGORY_CD | Will ignore Spell and Category cooldowns |
  | 4 | 0x00000004 | TRIGGERED_IGNORE_POWER_AND_REAGENT_COST | Will ignore power and reagent cost |
  | 8 | 0x00000008 | TRIGGERED_IGNORE_CAST_ITEM | Will not take away cast item or update related achievement criteria |
  | 16 | 0x00000010 | TRIGGERED_IGNORE_AURA_SCALING | Will ignore aura scaling |
  | 32 | 0x00000020 | TRIGGERED_IGNORE_CAST_IN_PROGRESS | Will not check if a current cast is in progress |
  | 64 | 0x00000040 | TRIGGERED_IGNORE_COMBO_POINTS | Will ignore combo point requirement |
  | 128 | 0x00000080 | TRIGGERED_CAST_DIRECTLY | In Spell::prepare, will be cast directly without setting containers for executed spell |
  | 256 | 0x00000100 | TRIGGERED_IGNORE_AURA_INTERRUPT_FLAGS | Will ignore interruptible aura's at cast |
  | 512 | 0x00000200 | TRIGGERED_IGNORE_SET_FACING | Will not adjust facing to target (if any) |
  | 1024 | 0x00000400 | TRIGGERED_IGNORE_SHAPESHIFT | Will ignore shapeshift checks |
  | 2048 | 0x00000800 | TRIGGERED_IGNORE_CASTER_AURASTATE | Will ignore caster aura states including combat requirements and death state |
  | 4096 | 0x00001000 | TRIGGERED_DISALLOW_PROC_EVENTS | Disallows proc events from triggered spell (default) |
  | 8192 | 0x00002000 | TRIGGERED_IGNORE_CASTER_MOUNTED_OR_ON_VEHICLE | Will ignore mounted/on vehicle restrictions |
  | 65536 | 0x00010000 | TRIGGERED_IGNORE_CASTER_AURAS | Will ignore caster aura restrictions or requirements |
  | 131072 | 0x00020000 | TRIGGERED_DONT_RESET_PERIODIC_TIMER | Will allow periodic aura timers to keep ticking (instead of resetting) |
  | 262144 | 0x00040000 | TRIGGERED_DONT_REPORT_CAST_ERROR | Will return SPELL_FAILED_DONT_REPORT in CheckCast functions |
  | 524288 | 0x00080000 | TRIGGERED_IGNORE_EQUIPPED_ITEM_REQUIREMENT | Will ignore equipped item requirements |
  {.dense}
* **action_param4**:
maxTargets (`0`: all targets)
* **action_param5**:
`0`
* **action_param6**:
`0`
#### CrossCastSpell (86)
CasterTarget will cast Spell ID on all (regular) targets.
> Use with caution when targeting multiple * multiple units.
{.is-warning}
* **action_type**:
SMART_ACTION_CROSS_CAST (86)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **action_param2**:
[`enum SmartCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1541-L1550)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x01 | SMARTCAST_INTERRUPT_PREVIOUS |  Interrupt any spell casting |
  | 2 | 0x02 | SMARTCAST_TRIGGERED |  Triggered (this makes spell cost zero mana and have no cast time) |
  | 4 | 0x04 | :x: SMARTCAST_FORCE_CAST | Forces cast even if creature is out of mana or out of range |
  | 8 | 0x08 | :x: SMARTCAST_NO_MELEE_IF_OOM | Prevents creature from entering melee if out of mana or out of range |
  | 16 | 0x10 | :x: SMARTCAST_FORCE_TARGET_SELF | Forces the target to cast this spell on itself |
  | 32 | 0x20 | SMARTCAST_AURA_NOT_PRESENT |  Only casts the spell if the target does not have an aura from the spell |
  | 64 | 0x40 | SMARTCAST_COMBAT_MOVE |  Prevents combat movement if cast successful. Allows movement on range, OOM, LOS |
  {.dense}
* **action_param3**:
caster_**target_type**
* **action_param4**:
caster_**target_param1**
* **action_param5**:
caster_**target_param2**
* **action_param6**:
caster_**target_param3**
#### RandTimedAction (87)
Start random (**entryorguid** > 0) TimedActionList on SAI enabled targets.
* **action_type**:
SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST (87)
* **action_param1**:
**entryorguid** #1
* **action_param2**:
**entryorguid** #2
* **action_param3**:
**entryorguid** #3
* **action_param4**:
**entryorguid** #4
* **action_param5**:
**entryorguid** #5
* **action_param6**:
**entryorguid** #6
#### RandRangeTimedAction (88)
Start random (min <= **entryorguid** <= max) TimedActionList on SAI enabled targets.
* **action_type**:
SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST (88)
* **action_param1**:
min. **entryorguid**
* **action_param2**:
max. **entryorguid**
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RandomMove (89)
Target creatures move maxDist in random direction. If no target was found, this creature moves instead.
* **action_type**:
SMART_ACTION_RANDOM_MOVE (89)
* **action_param1**:
maxDist (`0`: use idle movement)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetUnitBytes (90)
Set BYTES_1 for target units at given offset.
* **action_type**:
SMART_ACTION_SET_UNIT_FIELD_BYTES_1 (90)
* **action_param1**:
bytes
* **action_param2**:
offset
  * 0: [StandState](../world/creature_template_addon#standstate)
  * 2: [VisFlags](../world/creature_template_addon#visflags)
  * 3: [AnimTier](../world/creature_template_addon#animtier)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveUnitBytes (91)
Reset BYTES_1 for target units at given offset.
* **action_type**:
SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1 (91)
* **action_param1**:
bytes
* **action_param2**:
offset
  * 0: [StandState](../world/creature_template_addon#standstate)
  * 2: [VisFlags](../world/creature_template_addon#visflags)
  * 3: [AnimTier](../world/creature_template_addon#animtier)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### InterruptSpell (92)
Interrupt the current spell being cast by target.
Without Spell ID, the core will find the current spell depending on withDelay and withInstant.
* **action_type**:
SMART_ACTION_INTERRUPT_SPELL (92)
* **action_param1**:
withDelayed? (`0`/`1`)
* **action_param2**:
[Spell ID](/files/DBC/335/spell#id)
* **action_param3**:
withInstant? (`0`/`1`)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AnimateObject ⚠️&nbsp;(93)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SEND_GO_CUSTOM_ANIM (93)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetDynFlag ⚠️&nbsp;(94)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_DYNAMIC_FLAG (94)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddDynFlag ⚠️&nbsp;(95)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_ADD_DYNAMIC_FLAG (95)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveDynFlag ⚠️&nbsp;(96)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_REMOVE_DYNAMIC_FLAG (96)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### JumpToPos (97)
Target creatures jump to World Position set in the same target definition. Speed* describes the jump arc.
* **action_type**:
SMART_ACTION_JUMP_TO_POS (97)
* **action_param1**:
speedXY
* **action_param2**:
speedZ
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SendGossip (98)
Open gossip menu to target players. Can be used together with SMART_EVENT_GOSSIP_HELLO (64) to set custom gossip.
* **action_type**:
SMART_ACTION_SEND_GOSSIP_MENU (98)
* **action_param1**:
[gossip MenuID](../world/gossip_menu#menuid)
* **action_param2**:
[gossip TextID](../world/gossip_menu#textid)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetLootState (99)
Set loot state of target gameobjects.
* **action_type**:
SMART_ACTION_GO_SET_LOOT_STATE (99)
* **action_param1**:
[`enum LootState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/GameObject/GameObject.h#L74-L79)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | GO_NOT_READY |  |
  | 1 | GO_READY | can be ready but despawned, and then not possible activate until spawn |
  | 2 | GO_ACTIVATE |  |
  | 3 | GO_JUST_DEACTIVATED |  |
  {.dense}
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SendTargets (100)
Send targets previously stored with SMART_ACTION_STORE_TARGET_LIST (64), to target creatures / gameobjects.
The other entities can then access them as if it was their own stored list.
* **action_type**:
SMART_ACTION_SEND_TARGET_TO_TARGET (100)
* **action_param1**:
varId
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetHomePos (101)
Set Home Position of target creatures.
If **target_type** is SMART_TARGET_POSITION (8) Home Position is the World Position defined in target, otherwise it's the creatures current position. 
* **action_type**:
SMART_ACTION_SET_HOME_POS (101)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetHealthRegen (102)
Enable/Disable health regeneration for target creatures.
* **action_type**:
SMART_ACTION_SET_HEALTH_REGEN (102)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetRoot (103)
Root/Unroot target creatures.
* **action_type**:
SMART_ACTION_SET_ROOT (103)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetGoFlag ⚠️&nbsp;(104)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_GO_FLAG (104)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddGoFlag ⚠️&nbsp;(105)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_ADD_GO_FLAG (105)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveGoFlag ⚠️&nbsp;(106)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_REMOVE_GO_FLAG (106)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SpawnCreatureGrp (107)
Summon a predefined creature group, attacking event invoker. 
* **action_type**:
SMART_ACTION_SUMMON_CREATURE_GROUP (107)
* **action_param1**:
[summon group groupID](../world/creature_summon_groups#groupid)
* **action_param2**:
attackInvoker? (`0`/`1`)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetPower (108)
Set power of target units to given amount.
* **action_type**:
SMART_ACTION_SET_POWER (108)
* **action_param1**:
[PowerType](#powertype)
* **action_param2**:
amount
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddPower (109)
Add given amount of power to target units.
* **action_type**:
SMART_ACTION_ADD_POWER (109)
* **action_param1**:
[PowerType](#powertype)
* **action_param2**:
amount
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemovePower (110)
Remove given amount of power from target units.
* **action_type**:
SMART_ACTION_REMOVE_POWER (110)
* **action_param1**:
[PowerType](#powertype)
* **action_param2**:
amount
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### GameEventStop (111)
Stop currently active game event.
* **action_type**:
SMART_ACTION_GAME_EVENT_STOP (111)
* **action_param1**:
[game event eventEntry](../world/game_event#evententry)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### GameEventStart (112)
Start currently inactive game event.
* **action_type**:
SMART_ACTION_GAME_EVENT_START (112)
* **action_param1**:
[game event eventEntry](../world/game_event#evententry)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### StartClosestWP (113)
Make target creatures follow the provided path closest to its location.
* **action_type**:
SMART_ACTION_START_CLOSEST_WAYPOINT (113)
* **action_param1**:
[waypoint entry](../world/waypoints#entry) #1
* **action_param2**:
[waypoint entry](../world/waypoints#entry) #2
* **action_param3**:
[waypoint entry](../world/waypoints#entry) #3
* **action_param4**:
[waypoint entry](../world/waypoints#entry) #4
* **action_param5**:
[waypoint entry](../world/waypoints#entry) #5
* **action_param6**:
[waypoint entry](../world/waypoints#entry) #6
#### MoveOffset (114)
Target creatures move to World Position offset set in the same target definition.
* **action_type**:
SMART_ACTION_MOVE_OFFSET (114)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RandomSound (115)
Target units play a random sound entry from list.
* **action_type**:
SMART_ACTION_RANDOM_SOUND (115)
* **action_param1**:
[SoundEntry ID](/files/DBC/335/soundentries#id) #1
* **action_param2**:
[SoundEntry ID](/files/DBC/335/soundentries#id) #2
* **action_param3**:
[SoundEntry ID](/files/DBC/335/soundentries#id) #3
* **action_param4**:
[SoundEntry ID](/files/DBC/335/soundentries#id) #4
* **action_param5**:
onlySelf
  * 0: heard by all players in visibility range
  * 1: heard by invoking player
* **action_param6**:
distanceSound
  * 0: uses WorldObject::PlayDirectSound()
  * 1: uses WorldObject::PlayDistanceSound()
#### SetCorpseDelay (116)
Set corpse despawn for target creatures.
* **action_type**:
SMART_ACTION_SET_CORPSE_DELAY (116)
* **action_param1**:
time (in sec.)
* **action_param2**:
includeDecayRatio? (`0`/`1`)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### DisableEvade (117)
Disable/Enable evade mode for this creature.
* **action_type**:
SMART_ACTION_DISABLE_EVADE (117)
* **action_param1**:
disabled? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetGoState (118)
Set state of target gameobjects.
* **action_type**:
SMART_ACTION_GO_SET_GO_STATE (118)
* **action_param1**:
[`enum GOState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1655-L1660)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | GO_STATE_ACTIVE | show in world as used and not reset (closed door open) |
  | 1 | GO_STATE_READY | show in world as ready (closed door close) |
  | 2 | GO_STATE_DESTROYED | show the object in-game as already used and not yet reset (e.g. door opened by a cannon blast) |
  {.dense}
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetCanFly ⚠️&nbsp;(119)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_CAN_FLY (119)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveAuraType ⚠️&nbsp;(120)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_REMOVE_AURAS_BY_TYPE (120)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetSightDist ⚠️&nbsp;(121)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_SET_SIGHT_DIST (121)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### Flee ⚠️&nbsp;(122)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_FLEE (122)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddThreat (123)
Change own threat amount against target units.
* **action_type**:
SMART_ACTION_ADD_THREAT (123)
* **action_param1**:
flat increase
* **action_param2**:
flat decrease
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### LoadEquipment (124)
Load equipment on target creatures.
* **action_type**:
SMART_ACTION_LOAD_EQUIPMENT (124)
* **action_param1**:
[equipment ID](../world/creature_equip_template#id)
* **action_param2**:
forceUnequip? (`0`/`1`)
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### TriggerRndTimedEvent (125)
Trigger random (min <= id <= max) Timed Event.
> Note: SMART_EVENT_TIMED_EVENT_TRIGGERED (77) is triggered.
{.is-info}
* **action_type**:
SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT (125)
* **action_param1**:
min. id
* **action_param2**:
max. id
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RemoveAllObjects ⚠️&nbsp;(126)
> UNUSED, DO NOT REUSE
{.is-warning}
* **action_type**:
SMART_ACTION_REMOVE_ALL_GAMEOBJECTS (126)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PauseMovement (127)
Target units pause movement caused by given movement slot.
* **action_type**:
SMART_ACTION_PAUSE_MOVEMENT (127)
* **action_param1**:
[`enum MovementSlot`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L63-L68)
  | ID | Name | Comment |
  |----|------|---------|
  | 0 | MOTION_SLOT_DEFAULT | idle, follow, etc. |
  | 1 | MOTION_SLOT_ACTIVE | point movement |
  {.dense}
* **action_param2**:
pause (in msec.)
* **action_param3**:
force? (`0`/`1`)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlayAnimkit ❌&nbsp;(128)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_PLAY_ANIMKIT (128)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ScenePlay ❌&nbsp;(129)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_SCENE_PLAY (129)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SceneCancel ❌&nbsp;(130)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_SCENE_CANCEL (130)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SpawnSpawngroup (131)
Spawn predefined group of creatures.
* **action_type**:
SMART_ACTION_SPAWN_SPAWNGROUP (131)
* **action_param1**:
[spawn group groupId](../world/spawn_group_template#groupid)
* **action_param2**:
minDelay (in sec.)
* **action_param3**:
maxDelay (in sec.)
* **action_param4**:
[`enum SMARTAI_SPAWN_FLAGS`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1196-L1202)
  | Value | Flag | Name |
  |-------|------|------|
  | 1 | 0x01 | SMARTAI_SPAWN_FLAG_IGNORE_RESPAWN |
  | 2 | 0x02 | SMARTAI_SPAWN_FLAG_FORCE_SPAWN |
  | 4 | 0x04 | SMARTAI_SPAWN_FLAG_NOSAVE_RESPAWN |
  {.dense}
* **action_param5**:
`0`
* **action_param6**:
`0`
#### DespawnSpawngroup (132)
Despawn predefined group of creatures.
* **action_type**:
SMART_ACTION_DESPAWN_SPAWNGROUP (132)
* **action_param1**:
[spawn group groupId](../world/spawn_group_template#groupid)
* **action_param2**:
minDelay (in sec.)
* **action_param3**:
maxDelay (in sec.)
* **action_param4**:
[`enum SMARTAI_SPAWN_FLAGS`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1196-L1202)
  | Value | Flag | Name |
  |-------|------|------|
  | 1 | 0x01 | SMARTAI_SPAWN_FLAG_IGNORE_RESPAWN |
  | 2 | 0x02 | SMARTAI_SPAWN_FLAG_FORCE_SPAWN |
  | 4 | 0x04 | SMARTAI_SPAWN_FLAG_NOSAVE_RESPAWN |
  {.dense}
* **action_param5**:
`0`
* **action_param6**:
`0`
#### RespawnUnit (133)
Respawn a single creature / gameobject. 
* **action_type**:
SMART_ACTION_RESPAWN_BY_SPAWNID (133)
* **action_param1**:
type
  * 0: [creature](../world/creature)
  * 1: [gameobject](../world/gameobject)
* **action_param2**:
guid
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### InvokerCastSpell (134)
Last invoker will cast spell ID with castFlags on target units.
* **action_type**:
SMART_ACTION_INVOKER_CAST (134)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id)
* **action_param2**:
[`enum SmartCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1541-L1550)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x01 | SMARTCAST_INTERRUPT_PREVIOUS |  Interrupt any spell casting |
  | 2 | 0x02 | SMARTCAST_TRIGGERED |  Triggered (this makes spell cost zero mana and have no cast time) |
  | 4 | 0x04 | :x: SMARTCAST_FORCE_CAST | Forces cast even if creature is out of mana or out of range |
  | 8 | 0x08 | :x: SMARTCAST_NO_MELEE_IF_OOM | Prevents creature from entering melee if out of mana or out of range |
  | 16 | 0x10 | :x: SMARTCAST_FORCE_TARGET_SELF | Forces the target to cast this spell on itself |
  | 32 | 0x20 | SMARTCAST_AURA_NOT_PRESENT |  Only casts the spell if the target does not have an aura from the spell |
  | 64 | 0x40 | SMARTCAST_COMBAT_MOVE |  Prevents combat movement if cast successful. Allows movement on range, OOM, LOS |
  {.dense}
* **action_param3**:
[`enum TriggerCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L146-L173)
  | Value | Flag | Name | Comment |
  |-------|------|------|---------|
  | 1 | 0x00000001 | TRIGGERED_IGNORE_GCD | Will ignore GCD |
  | 2 | 0x00000002 | TRIGGERED_IGNORE_SPELL_AND_CATEGORY_CD | Will ignore Spell and Category cooldowns |
  | 4 | 0x00000004 | TRIGGERED_IGNORE_POWER_AND_REAGENT_COST | Will ignore power and reagent cost |
  | 8 | 0x00000008 | TRIGGERED_IGNORE_CAST_ITEM | Will not take away cast item or update related achievement criteria |
  | 16 | 0x00000010 | TRIGGERED_IGNORE_AURA_SCALING | Will ignore aura scaling |
  | 32 | 0x00000020 | TRIGGERED_IGNORE_CAST_IN_PROGRESS | Will not check if a current cast is in progress |
  | 64 | 0x00000040 | TRIGGERED_IGNORE_COMBO_POINTS | Will ignore combo point requirement |
  | 128 | 0x00000080 | TRIGGERED_CAST_DIRECTLY | In Spell::prepare, will be cast directly without setting containers for executed spell |
  | 256 | 0x00000100 | TRIGGERED_IGNORE_AURA_INTERRUPT_FLAGS | Will ignore interruptible aura's at cast |
  | 512 | 0x00000200 | TRIGGERED_IGNORE_SET_FACING | Will not adjust facing to target (if any) |
  | 1024 | 0x00000400 | TRIGGERED_IGNORE_SHAPESHIFT | Will ignore shapeshift checks |
  | 2048 | 0x00000800 | TRIGGERED_IGNORE_CASTER_AURASTATE | Will ignore caster aura states including combat requirements and death state |
  | 4096 | 0x00001000 | TRIGGERED_DISALLOW_PROC_EVENTS | Disallows proc events from triggered spell (default) |
  | 8192 | 0x00002000 | TRIGGERED_IGNORE_CASTER_MOUNTED_OR_ON_VEHICLE | Will ignore mounted/on vehicle restrictions |
  | 65536 | 0x00010000 | TRIGGERED_IGNORE_CASTER_AURAS | Will ignore caster aura restrictions or requirements |
  | 131072 | 0x00020000 | TRIGGERED_DONT_RESET_PERIODIC_TIMER | Will allow periodic aura timers to keep ticking (instead of resetting) |
  | 262144 | 0x00040000 | TRIGGERED_DONT_REPORT_CAST_ERROR | Will return SPELL_FAILED_DONT_REPORT in CheckCast functions |
  | 524288 | 0x00080000 | TRIGGERED_IGNORE_EQUIPPED_ITEM_REQUIREMENT | Will ignore equipped item requirements |
  {.dense}
* **action_param4**:
maxTargets (`0`: all)
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlayCinematic (135)
Play cinematic for target players.
* **action_type**:
SMART_ACTION_PLAY_CINEMATIC (135)
* **action_param1**:
[CinematicSequence ID](/files/DBC/335/cinematicsequences#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetSpeed (136)
Set movement speed of target creatures.
* **action_type**:
SMART_ACTION_SET_MOVEMENT_SPEED (136)
* **action_param1**:
[`enum MovementGeneratorType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L26-L48)
  |--|--|
  | IDLE_MOTION_TYPE | 0 |
  | RANDOM_MOTION_TYPE | 1 |
  | WAYPOINT_MOTION_TYPE | 2 |
  | MAX_DB_MOTION_TYPE | 3 |
  | CONFUSED_MOTION_TYPE | 4 |
  | CHASE_MOTION_TYPE | 5 |
  | HOME_MOTION_TYPE | 6 |
  | FLIGHT_MOTION_TYPE | 7 |
  | POINT_MOTION_TYPE | 8 |
  | FLEEING_MOTION_TYPE | 9 |
  | DISTRACT_MOTION_TYPE | 10 |
  | ASSISTANCE_MOTION_TYPE | 11 |
  | ASSISTANCE_DISTRACT_MOTION_TYPE | 12 |
  | TIMED_FLEEING_MOTION_TYPE | 13 |
  | FOLLOW_MOTION_TYPE | 14 |
  | ROTATE_MOTION_TYPE | 15 |
  | EFFECT_MOTION_TYPE | 16 |
  | SPLINE_CHAIN_MOTION_TYPE | 17 |
  | FORMATION_MOTION_TYPE | 18 |
  {.dense}
* **action_param2**:
speedInteger
* **action_param3**:
speedFraction
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### PlaySpellVisual ❌&nbsp;(137)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_PLAY_SPELL_VISUAL_KIT (137)
* **action_param1**:
[SpellVisualKit ID](/files/DBC/335/spellvisualkit#id)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### OverrideLight (138)
Override skybox visual in area.
* **action_type**:
SMART_ACTION_OVERRIDE_LIGHT (138)
* **action_param1**:
[AreaTable ID](/files/DBC/335/areatable#id)
* **action_param2**:
area [Light ID](/files/DBC/335/light#id)
* **action_param3**:
new [Light ID](/files/DBC/335/light#id)
* **action_param4**:
fadeIn time (in msec.)
* **action_param5**:
`0`
* **action_param6**:
`0`
#### OverrideWeather (139)
Override weather in area.
* **action_type**:
SMART_ACTION_OVERRIDE_WEATHER (139)
* **action_param1**:
[AreaTable ID](/files/DBC/335/areatable#id)
* **action_param2**:
[Weather ID](/files/DBC/335/weather#id)
* **action_param3**:
intensity (`0`: low; `1`: full)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetAIAnim ❌&nbsp;(140)
> DEPRECATED, DO REUSE
{.is-danger}
* **action_type**:
SMART_ACTION_SET_AI_ANIM_KIT (140)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetHover (141)
Enable/Disable hover for target units.
* **action_type**:
SMART_ACTION_SET_HOVER (141)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetHealthPct (142)
Set current health percentage of target units.
* **action_type**:
SMART_ACTION_SET_HEALTH_PCT (142)
* **action_param1**:
percent
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### CreateConvers. ❌&nbsp;(143)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_CREATE_CONVERSATION (143)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetImmunePC (144)
Enable/Disable immunity to players of target units.
* **action_type**:
SMART_ACTION_SET_IMMUNE_PC (144)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetImmuneNPC (145)
Enable/Disable immunity to creatures of target units.
* **action_type**:
SMART_ACTION_SET_IMMUNE_NPC (145)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### SetUninteractible (146)
Make/Reset target units uninteractible.
* **action_type**:
SMART_ACTION_SET_UNINTERACTIBLE (146)
* **action_param1**:
enable? (`0`/`1`)
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### ActivateGObject (147)
Activate target gameobjects, using given action.
* **action_type**:
SMART_ACTION_ACTIVATE_GAMEOBJECT (147)
* **action_param1**:
[`enum GameObjectActions`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/GameObject/GameObjectData.h#L687-L715)
  | ID | Name | Comment |
  |----|------|---------|
  | 1 | AnimateCustom0 | Animate Custom0 |
  | 2 | AnimateCustom1 | Animate Custom1 |
  | 3 | AnimateCustom2 | Animate Custom2 |
  | 4 | AnimateCustom3 | Animate Custom3 |
  | 5 | Disturb | Disturb - Triggers trap |
  | 6 | Unlock | Unlock - Resets GO_FLAG_LOCKED |
  | 7 | Lock | Lock - Sets GO_FLAG_LOCKED |
  | 8 | Open | Open - Sets GO_STATE_ACTIVE |
  | 9 | OpenAndUnlock | Open + Unlock - Sets GO_STATE_ACTIVE and resets GO_FLAG_LOCKED |
  | 10 | Close | Close - Sets GO_STATE_READY |
  | 11 | ToggleOpen | Toggle Open |
  | 12 | Destroy | Destroy - Sets GO_STATE_DESTROYED |
  | 13 | Rebuild | Rebuild - Resets from GO_STATE_DESTROYED |
  | 14 | Creation | Creation |
  | 15 | Despawn | Despawn |
  | 16 | MakeInert | Make Inert - Disables interactions |
  | 17 | MakeActive | Make Active - Enables interactions |
  | 18 | CloseAndLock | Close + Lock - Sets GO_STATE_READY and sets GO_FLAG_LOCKED |
  | 19 | UseArtKit0 | Use ArtKit0 - 46904: 121 |
  | 20 | UseArtKit1 | Use ArtKit1 - 36639: 81, 46903: 122 |
  | 21 | UseArtKit2 | Use ArtKit2 |
  | 22 | UseArtKit3 | Use ArtKit3 |
  | 23 | SetTapList | Set Tap List |
  {.dense}
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### AddStoredTargets (148)
Add selected targets to varID for later use.
* **action_type**:
SMART_ACTION_ADD_TO_STORED_TARGET_LIST (148)
* **action_param1**:
varID
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### BecomeClone ❌&nbsp;(149)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_BECOME_PERSONAL_CLONE_FOR_PLAYER (149)
* **action_param1**:
`0`
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### TriggerGameEvent ❌&nbsp;(150)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_TRIGGER_GAME_EVENT (150)
* **action_param1**:
eventId
* **action_param2**:
useSaiTargetAsGameEventSource
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
#### DoAction ❌&nbsp;(151)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_DO_ACTION (151)
* **action_param1**:
actionId
* **action_param2**:
`0`
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`
### EndTabset {.tabset}
&nbsp;

### target_type
| ID | Name | target_param1 | target_param2 |target_param3 | target_param4 | World Pos. | Comment |
|----|------|---------------|---------------|--------------|---------------|------------|---------|
| 0 | SMART_TARGET_NONE |  |  |  |  |  | NONE |
| 1 | SMART_TARGET_SELF |  |  |  |  |  | Self cast |
| 2 | SMART_TARGET_VICTIM |  |  |  |  |  | Our current target (ie: highest aggro) |
| 3 | SMART_TARGET_HOSTILE_SECOND_AGGRO | maxDist | playerOnly? (0/1) | [powerType](#powertype) + 1 (0: any) |  |  | Second highest aggro|
| 4 | SMART_TARGET_HOSTILE_LAST_AGGRO | maxDist | playerOnly? (0/1) | [powerType](#powertype) + 1 (0: any) |  |  | Dead last on aggro |
| 5 | SMART_TARGET_HOSTILE_RANDOM | maxDist | playerOnly? (0/1) | [powerType](#powertype) + 1 (0: any) |  |  | Just any random target on our threat list |
| 6 | SMART_TARGET_HOSTILE_RANDOM_NOT_TOP | maxDist | playerOnly? (0/1) | [powerType](#powertype) + 1 (0: any) |  |  | Any random target except top threat |
| 7 | SMART_TARGET_ACTION_INVOKER |  |  |  |  |  | Unit who caused this Event to occur |
| 8 | SMART_TARGET_POSITION |  |  |  |  | [x y z o](/how-to/worldposition) | use xyz from target params |
| 9 | SMART_TARGET_CREATURE_RANGE | [creature entry](../world/creature_template#entry) (0: any) | minDist | maxDist | maxTargets (0: all) |  | Creatures with specified entry within specified range. |
| 10 | SMART_TARGET_CREATURE_GUID | [creature guid](../world/creature#guid) | [creature entry](../world/creature_template#entry) (0: any) |  |  |  | Creature with specified GUID (and entry). |
| 11 | SMART_TARGET_CREATURE_DISTANCE | [creature entry](../world/creature_template#entry) (0: any) | maxDist | maxTargets (0: all) |  |  | Creatures with specified entry within distance. (Like #9 w/o minDist) |
| 12 | SMART_TARGET_STORED | id |  |  |  |  | uses pre-stored target (list) |
| 13 | SMART_TARGET_GAMEOBJECT_RANGE | [gameobject entry](../world/gameobject_template#entry) (0: any) | minDist | maxDist | maxTargets (0: all) |  | Gameobjects with specified entry within specified range. |
| 14 | SMART_TARGET_GAMEOBJECT_GUID | [gameobject guid](../world/gameobject#guid) | [gameobject entry](../world/gameobject_template#entry) (0: any) |  |  |  | Gameobject with specified GUID (and entry). |
| 15 | SMART_TARGET_GAMEOBJECT_DISTANCE | [gameobject entry](../world/gameobject_template#entry) (0: any) | maxDist |maxTargets (0: all) |  |  | Gameobjects with specified entry within distance. (Like #13 w/o minDist) |
| 16 | SMART_TARGET_INVOKER_PARTY |  |  |  |  |  | invoker's party members |
| 17 | SMART_TARGET_PLAYER_RANGE | minDist | maxDist |  |  |  | Players within specified range. |
| 18 | SMART_TARGET_PLAYER_DISTANCE | maxDist |  |  |  |  | Player within specified distance. (Like #17 w/o minDist)  |
| 19 | SMART_TARGET_CLOSEST_CREATURE | [creature entry](../world/creature_template#entry) (0: any) | maxDist (0: 100m) | dead? (0/1) |  |  | Closest creature with specified entry within specified range. |
| 20 | SMART_TARGET_CLOSEST_GAMEOBJECT | [gameobject entry](../world/gameobject_template#entry) (0: any) | maxDist (0: 100m) |  |  |  | Closest gameobject with specified entry within specified range. |
| 21 | SMART_TARGET_CLOSEST_PLAYER | maxDist |  |  |  |  | Closest player within specified range. |
| 22 | SMART_TARGET_ACTION_INVOKER_VEHICLE |  |  |  |  |  | Unit's vehicle who caused this Event to occur |
| 23 | SMART_TARGET_OWNER_OR_SUMMONER |  |  |  |  |  | Unit's owner or summoner, Use Owner/Charmer of this unit |
| 24 | SMART_TARGET_THREAT_LIST | maxDist (0: any)  |  |  |  |  | All units on creature's threat list |
| 25 | SMART_TARGET_CLOSEST_ENEMY | maxDist | playerOnly? (0/1) |  |  |  | Any attackable target (creature or player) within maxDist |
| 26 | SMART_TARGET_CLOSEST_FRIENDLY | maxDist | playerOnly? (0/1) |  |  |  | Any friendly unit (creature, player or pet) within maxDist |
| 27 | SMART_TARGET_LOOT_RECIPIENTS |  |  |  |  |  | all players that have tagged this creature (for kill credit) |
| 28 | SMART_TARGET_FARTHEST | maxDist | playerOnly? (0/1) | isInLos? (0/1) |  |  | Farthest unit on the threat list |
| 29 | SMART_TARGET_VEHICLE_PASSENGER | seatMask (0: all seats) |  |  |  |  | Vehicle can target unit in given seat |
| 30 | SMART_TARGET_CLOSEST_UNSPAWNED_GAMEOBJECT | [gameobject entry](../world/gameobject_template#entry) (0: any) | maxDist |  |  |  | Closest unspawned gameobject with specified entry within specified range.<br>To be used only with SMART_ACTION_ENABLE_TEMP_GOBJ (70) and gameobjects with negative respawn time in the DB. |
{.dense}

&nbsp;

### comment
Commenting on SAI uses a template which is the following:
* "Creature name - Event - Action"
* "Minion of Gurok - On spawn - Set Random Movement"
&nbsp;

---
##### PowerType
[`enum Powers`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L286-L298)
| ID | Name |
|----|------|
| -2 | POWER_HEALTH |
| 0 | POWER_MANA |
| 1 | POWER_RAGE |
| 2 | POWER_FOCUS |
| 3 | POWER_ENERGY |
| 4 | POWER_HAPPINESS |
| 5 | POWER_RUNE |
| 6 | POWER_RUNIC_POWER |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
