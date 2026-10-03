---
title: smart_scripts
description: 
published: true
date: 2025-11-16T14:46:49.818Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:09.695Z
---

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

&nbsp;

### id {#id-alt}
Incremental id bound to each **entryorguid** + **source_type** (0, 1, 2, ...).
&nbsp;

### link
Simple event linking;
Example: if **id** = 0 and **link** = 1; **id** 1 will only be able to occur if **id** = 0 was triggered.
&nbsp;

### event
::: details UpdateIC (0)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `9`: SMART_SCRIPT_TYPE_TIMED_ACTIONLIST

:::

::: details UpdateOOC (1)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT
 * `8`: SMART_SCRIPT_TYPE_INSTANCE

:::

::: details HealthPct (2)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details ManaPct (3)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Aggro (4)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Kill (5)
On creature / player kill
* **event_type**:
SMART_EVENT_KILL (5)
* **event_param1**:
CooldownMin (in msec.)
* **event_param2**:
CooldownMax (in msec.)
* **event_param3**:
  * 0: Any unit
  * 1: Player only
* **event_param4**:
if **event_param3** = 0: [creature entry](../world/creature_template#entry) (`0`: any)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Death (6)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Evade (7)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SpellHit (8)
On creature / gameobject spell hit
* **event_type**:
SMART_EVENT_SPELLHIT (8)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
(`0`: any SpellSchool)
  <!--@include: @/partial/335/spell-schools.md{28,37}-->

* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details Range (9)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details LineOfSightOOC (10)
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
  * 0: Any unit
  * 1: Player only

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Respawn (11)
On creature / gameobject Respawn
* **event_type**:
SMART_EVENT_RESPAWN (11)
* **event_param1**:
[`enum SMART_SCRIPT_RESPAWN_CONDITION`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L442-L448)
    | SMART_SCRIPT_RESPAWN_CONDITION_NONE | 0 |
  | SMART_SCRIPT_RESPAWN_CONDITION_MAP | 1 |
  | SMART_SCRIPT_RESPAWN_CONDITION_AREA | 2 |

* **event_param2**:
if **event_param1** = 1: [Map ID](/files/DBC/335/map#id-alt)
* **event_param3**:
if **event_param1** = 2: [AreaTable ID](/files/DBC/335/areatable#id-alt)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details TargetHealthPct ⚠️ (12)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details VictimCast (13)
On target casting spell
* **event_type**:
SMART_EVENT_VICTIM_CASTING (13)
* **event_param1**:
RepeatMin (in msec.)
* **event_param2**:
RepeatMax (in msec.)
* **event_param3**:
[Spell ID](/files/DBC/335/spell#id-alt) (`0`: any)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details FriendHealth ⚠️ (14)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details FriendCCed (15)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details FriendNoBuff (16)
On friendly lost buff
* **event_type**:
SMART_EVENT_FRIENDLY_MISSING_BUFF (16)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
Radius
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Summon (17)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details TargetManaPct ⚠️ (18)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details AcceptedQuest (19)
On target accepted quest
* **event_type**:
SMART_EVENT_ACCEPTED_QUEST (19)
* **event_param1**:
[quest ID](../world/quest_template#id-alt) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details RewardedQuest (20)
On target rewarded quest
* **event_type**:
SMART_EVENT_REWARD_QUEST (20)
* **event_param1**:
[quest ID](../world/quest_template#id-alt) (`0`: any)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details ReachedHome (21)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details ReceiveEmote (22)
On receive player emote
* **event_type**:
SMART_EVENT_RECEIVE_EMOTE (22)
* **event_param1**:
[EmotesText ID](/files/DBC/335/emotestext#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details HasAura (23)
On creature has aura (optional: more or equal stacks to **event_param2**)
* **event_type**:
SMART_EVENT_HAS_AURA (23)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
Stack amount
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details TargetBuffed (24)
On target buffed with spell (optional: more or equal stacks to **event_param2**)
* **event_type**:
SMART_EVENT_TARGET_BUFFED (24)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
Stack amount
* **event_param3**:
RepeatMin (in msec.)
* **event_param4**:
RepeatMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Reset (25)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details LineOfSightIC (26)
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
  * 0: Any unit
  * 1: Player only

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details PassengerEntered (27)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details PassengerLeft (28)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Charmed (29)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details TargetCharmed ⚠️ (30)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SpellHitTarget (31)
On target spell hit
* **event_type**:
SMART_EVENT_SPELLHIT_TARGET (31)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
(`0`: any SpellSchool)
  <!--@include: @/partial/335/spell-schools.md{28,37}-->

* **event_param3**:
CooldownMin (in msec.)
* **event_param4**:
CooldownMax (in msec.)
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Damaged (32)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details DamagedTarget (33)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details MovementType (34)

* **event_type**:
SMART_EVENT_MOVEMENTINFORM (34)
* **event_param1**:  
  <!--@include: @/partial/335/movement-generator-type.md-->

* **event_param2**:
PointID
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SummonDespawn (35)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details CorpseRemoved (36)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details InitSAI (37)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details DataSet (38)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details WaypointStart ⚠️ (39)
On creature waypoint ID started
> UNUSED, DO NOT REUSE
{.is-warning}
* **event_type**:
SMART_EVENT_WAYPOINT_START (39)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details WaypointReached (40)
On creature waypoint ID reached
* **event_type**:
SMART_EVENT_WAYPOINT_REACHED (40)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Trans.AddPlayer ❌ (41)
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
 * `7`: SMART_SCRIPT_TYPE_TRANSPORT

:::

::: details Trans.AddCreatue ❌ (42)
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
 * `7`: SMART_SCRIPT_TYPE_TRANSPORT

:::

::: details Trans.Rem.Player ❌ (43)
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
 * `7`: SMART_SCRIPT_TYPE_TRANSPORT

:::

::: details Trans.Relocate ❌ (44)
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
 * `7`: SMART_SCRIPT_TYPE_TRANSPORT

:::

::: details PlayerEnter ❌ (45)
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
 * `8`: SMART_SCRIPT_TYPE_INSTANCE

:::

::: details AreaTrigger (46)

* **event_type**:
SMART_EVENT_AREATRIGGER_ONTRIGGER (46)
* **event_param1**:
[AreaTrigger ID](/files/DBC/335/areatrigger#id-alt) (`0`: any)
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
 * `2`: SMART_SCRIPT_TYPE_AREATRIGGER

:::

::: details QuestAccepted ❌ (47)
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
 * `5`: SMART_SCRIPT_TYPE_QUEST

:::

::: details QuestProgress ❌ (48)
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
 * `5`: SMART_SCRIPT_TYPE_QUEST

:::

::: details QuestCompleted ❌ (49)
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
 * `5`: SMART_SCRIPT_TYPE_QUEST

:::

::: details QuestRewarded ❌ (50)
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
 * `5`: SMART_SCRIPT_TYPE_QUEST

:::

::: details QuestFailed ❌ (51)
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
 * `5`: SMART_SCRIPT_TYPE_QUEST

:::

::: details TextOver (52)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details ReceivedHeal (53)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details JustSummoned (54)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details WaypointPaused (55)
On creature paused at waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_PAUSED (55)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details WaypointResumed (56)
On Creature resumed after waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_RESUMED (56)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details WaypointStopped (57)
On creature stopped on waypoint ID
* **event_type**:
SMART_EVENT_WAYPOINT_STOPPED (57)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details WaypointEnded (58)
On creature waypoint path ended
* **event_type**:
SMART_EVENT_WAYPOINT_ENDED (58)
* **event_param1**:
[waypoint point](../world/waypoint_data#point) (`0`: any)
* **event_param2**:
[waypoint id](../world/waypoint_data#id-alt) (`0`: any)
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details EventTriggered (59)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details Update (60)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details Link (61)
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

:::

::: details GossipSelect (62)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details JustCreated (63)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details GossipHello (64)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details FollowComplete (65)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details EventPhase ⚠️ (66)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details BehindTarget ⚠️ (67)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details GameEventStart (68)
On game event started
* **event_type**:
SMART_EVENT_GAME_EVENT_START (68)
* **event_param1**:
[game_event eventEntry](../world/game_event#evententry)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details GameEventEnd (69)
On game event ended
* **event_type**:
SMART_EVENT_GAME_EVENT_END (69)
* **event_param1**:
[game_event eventEntry](../world/game_event#evententry)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details LootState (70)

* **event_type**:
SMART_EVENT_GO_LOOT_STATE_CHANGED (70)
* **event_param1**:  
  <!--@include: @/partial/335/loot-state.md-->

* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details GOEventInform (71)
On gameobject emits event
* **event_type**:
SMART_EVENT_GO_EVENT_INFORM (71)
* **event_param1**:
eventId from [gameobject template](../world/gameobject_template#data-0-23)
* **event_param2**:
`0`
* **event_param3**:
`0`
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details ActionDone (72)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Spellclick (73)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details FriendHealthPct (74)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details DistanceNPC (75)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details DistanceGO (76)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details CounterSet (77)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details SceneStart ❌ (78)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SceneTrigger ❌ (79)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SceneCancel ❌ (80)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SceneComplete ❌ (81)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SummonDies (82)

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
 * `0`: SMART_SCRIPT_TYPE_CREATURE
 * `1`: SMART_SCRIPT_TYPE_GAMEOBJECT

:::

::: details SpellCast (83)
on Spell::cast
* **event_type**:
SMART_EVENT_ON_SPELL_CAST (83)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SpellFailed (84)
on Unit::InterruptSpell
* **event_type**:
SMART_EVENT_ON_SPELL_FAILED (84)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SpellStart (85)
on Spell::prapare
* **event_type**:
SMART_EVENT_ON_SPELL_START (85)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details Despawn (86)
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
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details SendEventTrigger ⚠️ (87)
> UNUSED NEEDS CHERRYPICK
{.is-warning}
* **event_type**:
SMART_EVENT_SEND_EVENT_TRIGGER (87)
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

:::

::: details AreatriggerExit ❌ (88)
> don't use on 3.3.5a
{.is-danger}
* **event_type**:
SMART_EVENT_AREATRIGGER_EXIT (88)
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
 * `2`: SMART_SCRIPT_TYPE_AREATRIGGER

:::

::: details AuraApplied (89)
On aura applied
* **event_type**:
SMART_EVENT_ON_AURA_APPLIED (89)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

::: details AuraRemoved (90)
On aura removed
* **event_type**:
SMART_EVENT_ON_AURA_REMOVED (90)
* **event_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **event_param2**:
CooldownMin (in msec.)
* **event_param3**:
CooldownMax (in msec.)
* **event_param4**:
`0`
* **event_param5**:
`0`

valid for **source_type**
 * `0`: SMART_SCRIPT_TYPE_CREATURE

:::

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

&nbsp;

### action {#action-alt}
::: details None (0)
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

:::

::: details Talk (1)
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

:::

::: details SetFaction (2)
Sets faction of target creatures.
* **action_type**:
SMART_ACTION_SET_FACTION (2)
* **action_param1**:
[FactionTemplate ID](/files/DBC/335/factiontemplate#id-alt) (`0`: default)
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

:::

::: details Morph (3)
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

:::

::: details Sound (4)
Target units play a sound entry.
* **action_type**:
SMART_ACTION_SOUND (4)
* **action_param1**:
[SoundEntry ID](/files/DBC/335/soundentries#id-alt)
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

:::

::: details PlayEmote (5)
Plays an emote as oneshot. 
* **action_type**:
SMART_ACTION_PLAY_EMOTE (5)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id-alt)
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

:::

::: details FailQuest (6)
Fail quest for target players.
* **action_type**:
SMART_ACTION_FAIL_QUEST (6)
* **action_param1**:
[quest ID](../world/quest_template#id-alt)
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

:::

::: details OfferQuest (7)
Offer quest to target players.
* **action_type**:
SMART_ACTION_OFFER_QUEST (7)
* **action_param1**:
[quest ID](../world/quest_template#id-alt)
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

:::

::: details SetReactState (8)
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

:::

::: details ActivateObject (9)
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

:::

::: details PlayRandomEmote (10)
Play random emote. 
> Note: An **action_param** of 0 is skipped and not interpreted as emote: ONESHOT_NONE (0).
{.is-info}
* **action_type**:
SMART_ACTION_RANDOM_EMOTE (10)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id-alt) #1
* **action_param2**:
[Emote ID](/files/DBC/335/emotes#id-alt) #2
* **action_param3**:
[Emote ID](/files/DBC/335/emotes#id-alt) #3
* **action_param4**:
[Emote ID](/files/DBC/335/emotes#id-alt) #4
* **action_param5**:
[Emote ID](/files/DBC/335/emotes#id-alt) #5
* **action_param6**:
[Emote ID](/files/DBC/335/emotes#id-alt) #6

:::

::: details CastSpell (11)
Cast spell at targets.
* **action_type**:
SMART_ACTION_CAST (11)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **action_param2**:  
  <!--@include: @/partial/335/smart-cast-flags.md-->

* **action_param3**:  
  <!--@include: @/partial/335/trigger-cast-flags.md-->

* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details SummonNPC (12)
Summon NPC
* **action_type**:
SMART_ACTION_SUMMON_CREATURE (12)
* **action_param1**:
[creature entry](../world/creature_template#entry)
* **action_param2**:
  <!--@include: @/partial/335/temp-summon-type.md-->

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

:::

::: details ThreatPctSingle (13)
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

:::

::: details ThreatPctAll (14)
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

:::

::: details ExploreEvent (15)
Satisfy exploration requirement for quest for target players.
* **action_type**:
SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS (15)
* **action_param1**:
[QuestID](../world/quest_template#id-alt)
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

:::

::: details Reserved16 ❌ (16)
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

:::

::: details PlayEmoteState (17)
Play Emote Continuously. Useful for displaying activity on a NPC (fishing, working, etc.)
* **action_type**:
SMART_ACTION_SET_EMOTE_STATE (17)
* **action_param1**:
[Emote ID](/files/DBC/335/emotes#id-alt)
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

:::

::: details SetUnitFlags ⚠️ (18)
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

:::

::: details UnsetUnitFlags ⚠️ (19)
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

:::

::: details AutoAttack (20)
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

:::

::: details CombatMovement (21)
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

:::

::: details SetEventPhase (22)
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

:::

::: details IncEventPhase (23)
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

:::

::: details EnterEvadeMode (24)
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

:::

::: details FleeForAssist (25)
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

:::

::: details ExploreEventParty (26)
Like SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS (15) but for the whole party.
* **action_type**:
SMART_ACTION_CALL_GROUPEVENTHAPPENS (26)
* **action_param1**:
[quest ID](../world/quest_template#id-alt)
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

:::

::: details CombatStop (27)
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

:::

::: details RemoveAura (28)
Removes any or all auras from targets.
An **action_param1** = 0 will always remove all auras regardless of other parameters.
* **action_type**:
SMART_ACTION_REMOVEAURASFROMSPELL (28)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id-alt) (`0`: all auras)
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

:::

::: details Follow (29)
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
[creature entry](../world/creature_template#entry) or [quest ID](../world/quest_template#id-alt), depending on **action_param5**
* **action_param5**:
creditType:
  * 0: creature kill
  * 1: exploration event
* **action_param6**:
`0`

:::

::: details RandEventPhase (30)
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

:::

::: details RangeEventPhase (31)
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

:::

::: details ResetObject (32)
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

:::

::: details KillCredit (33)
Credits a creature kill to satisfy [quest RequiredNpcOrGo](../world/quest_template##requirednpcorgo-1-4) requirements to target players.
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

:::

::: details SetInstanceData (34)
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
  * type = 1: [`enum EncounterState`](https://github.com/TrinityCore/TrinityCore/blob/d7329e3d3a713404d8ecbd91ae5f988fd143b793/src/server/game/Instances/InstanceScript.h#L71-L79)
    | Value | Name |
    | --- | --- |
    | 0 | NOT_STARTED |
    | 1 | IN_PROGRESS |
    | 2 | FAIL |
    | 3 | DONE |
    | 4 | SPECIAL |
    | 5 | TO_BE_DECIDED |

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

:::

::: details SetInstanceData64 (35)
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

:::

::: details UpdateTemplate (36)
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

:::

::: details Die (37)
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

:::

::: details SetInCombat (38)
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

:::

::: details CallForHelp (39)
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

:::

::: details SetSheath (40)
Creature draws or puts away it's weapon.
* **action_type**:
SMART_ACTION_SET_SHEATH (40)
* **action_param1**:
  <!--@include: @/partial/335/unit-bytes2.md{4,9}-->

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

:::

::: details ForceDespawn (41)
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

:::

::: details SetInvincibleHP (42)
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

:::

::: details Mount (43)
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

:::

::: details SetGamePhase (44)
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

:::

::: details SetData (45)
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

:::

::: details AttackStop (46)
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

:::

::: details SetVisibility (47)
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

:::

::: details SetActive (48)
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

:::

::: details AttackStart (49)
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

:::

::: details SummonObject (50)
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

* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details KillUnit (51)
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

:::

::: details ActivateTaxi (52)
Sends target player to flight path.
> Note: The player must not be in combat, stunned or rooted.
{.is-info}
* **action_type**:
SMART_ACTION_ACTIVATE_TAXI (52)
* **action_param1**:
[TaxiPath ID](/files/DBC/335/taxipath#id-alt)
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

:::

::: details WaypointStart (53)
Creature starts Waypoint Movement. Use waypoint_data table to create movement.
* **action_type**:
SMART_ACTION_WP_START (53)
* **action_param1**:
run? (`0`/`1`)
* **action_param2**:
[waypoint id](../world/waypoint_data#id-alt)
* **action_param3**:
canRepeat? (`0`/`1`)
* **action_param4**:
Binds creature to [quest ID](../world/quest_template#id-alt). It's objective is satisfied when the last waypoint is reached and failed when the creature is killed or the player is out of range.
* **action_param5**:
despawntime (in msec.)
* **action_param6**:
`0`

:::

::: details WaypointPause (54)
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

:::

::: details WaypointStop (55)
Creature stops its Waypoint Movement.
* **action_type**:
SMART_ACTION_WP_STOP (55)
* **action_param1**:
despawnTime (in msec.)
* **action_param2**:
[quest ID](../world/quest_template#id-alt)
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

:::

::: details AddItem (56)
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

:::

::: details RemoveItem (57)
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

:::

::: details UseAITemplate ⚠️ (58)
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

:::

::: details SetRun (59)
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

:::

::: details DisableGravity (60)
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

:::

::: details SetSwim ⚠️ (61)
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

:::

::: details Teleport (62)
Teleport targets to World Position set in the same target definition.
* **action_type**:
SMART_ACTION_TELEPORT (62)
* **action_param1**:
[Map ID](/files/DBC/335/map#id-alt)
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

:::

::: details SetCounter (63)
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

:::

::: details StoreTargets (64)
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

:::

::: details WaypointResume (65)
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

:::

::: details SetOrientation (66)
Creature turns in a given direction, depending on **target_type**.
* SMART_TARGET_SELF (1): 
  * orientation of Home Position
* SMART_TARGET_POSITION (8): 
  * **target_o** value
* < other target selectors >: 
  * set to face selected target
&nbsp;

* **action_type**:
SMART_ACTION_SET_ORIENTATION (66)
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

:::

::: details NewTimedEvent (67)
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

:::

::: details PlayMovie (68)
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

:::

::: details MoveToPos (69)
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

:::

::: details EnableTmpObject (70)
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

:::

::: details EquipItem (71)
Set equipment on target creatures.
Slots 1 &ndash; 3 item entries are only used if no equipment ID is set.
* **action_type**:
SMART_ACTION_EQUIP (71)
* **action_param1**:
[equipment ID](../world/creature_equip_template#id-alt)
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

:::

::: details CloseGossip (72)
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

:::

::: details TriggerTimedEvent (73)
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

:::

::: details RemoveTimedEvent (74)
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

:::

::: details AddAura ⚠️ (75)
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

:::

::: details OverrideScript ⚠️ (76)
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

:::

::: details ResetScript ⚠️ (77)
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

:::

::: details ScriptReset (78)
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

:::

::: details SetRangedMove (79)
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

:::

::: details StartTimedAction (80)
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

:::

::: details SetNpcFlag (81)
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

:::

::: details AddNpcFlag (82)
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

:::

::: details RemoveNpcFlag (83)
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

:::

::: details SimpleTalk (84)
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

:::

::: details SelfCastSpell (85)
The targets will cast the spell on themselves.
* **action_type**:
SMART_ACTION_SELF_CAST (85)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **action_param2**:  
  <!--@include: @/partial/335/smart-cast-flags.md-->

* **action_param3**:  
  <!--@include: @/partial/335/trigger-cast-flags.md-->

* **action_param4**:
maxTargets (`0`: all targets)
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details CrossCastSpell (86)
CasterTarget will cast Spell ID on all (regular) targets.
> Use with caution when targeting multiple * multiple units.
{.is-warning}
* **action_type**:
SMART_ACTION_CROSS_CAST (86)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **action_param2**:  
  <!--@include: @/partial/335/smart-cast-flags.md-->

* **action_param3**:
caster_**target_type**
* **action_param4**:
caster_**target_param1**
* **action_param5**:
caster_**target_param2**
* **action_param6**:
caster_**target_param3**

:::

::: details RandTimedAction (87)
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

:::

::: details RandRangeTimedAction (88)
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

:::

::: details RandomMove (89)
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

:::

::: details SetUnitBytes (90)
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

:::

::: details RemoveUnitBytes (91)
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

:::

::: details InterruptSpell (92)
Interrupt the current spell being cast by target.
Without Spell ID, the core will find the current spell depending on withDelay and withInstant.
* **action_type**:
SMART_ACTION_INTERRUPT_SPELL (92)
* **action_param1**:
withDelayed? (`0`/`1`)
* **action_param2**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **action_param3**:
withInstant? (`0`/`1`)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details AnimateObject ⚠️ (93)
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

:::

::: details SetDynFlag ⚠️ (94)
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

:::

::: details AddDynFlag ⚠️ (95)
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

:::

::: details RemoveDynFlag ⚠️ (96)
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

:::

::: details JumpToPos (97)
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

:::

::: details SendGossip (98)
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

:::

::: details SetLootState (99)
Set loot state of target gameobjects.
* **action_type**:
SMART_ACTION_GO_SET_LOOT_STATE (99)
* **action_param1**:  
  <!--@include: @/partial/335/loot-state.md-->

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

:::

::: details SendTargets (100)
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

:::

::: details SetHomePos (101)
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

:::

::: details SetHealthRegen (102)
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

:::

::: details SetRoot (103)
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

:::

::: details SetGoFlag ⚠️ (104)
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

:::

::: details AddGoFlag ⚠️ (105)
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

:::

::: details RemoveGoFlag ⚠️ (106)
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

:::

::: details SpawnCreatureGrp (107)
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

:::

::: details SetPower (108)
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

:::

::: details AddPower (109)
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

:::

::: details RemovePower (110)
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

:::

::: details GameEventStop (111)
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

:::

::: details GameEventStart (112)
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

:::

::: details StartClosestWP (113)
Make target creatures follow the provided path closest to its location.
* **action_type**:
SMART_ACTION_START_CLOSEST_WAYPOINT (113)
* **action_param1**:
[waypoint id](../world/waypoint_data#id-alt) #1
* **action_param2**:
[waypoint id](../world/waypoint_data#id-alt) #2
* **action_param3**:
[waypoint id](../world/waypoint_data#id-alt) #3
* **action_param4**:
[waypoint id](../world/waypoint_data#id-alt) #4
* **action_param5**:
[waypoint id](../world/waypoint_data#id-alt) #5
* **action_param6**:
[waypoint id](../world/waypoint_data#id-alt) #6

:::

::: details MoveOffset (114)
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

:::

::: details RandomSound (115)
Target units play a random sound entry from list.
* **action_type**:
SMART_ACTION_RANDOM_SOUND (115)
* **action_param1**:
[SoundEntry ID](/files/DBC/335/soundentries#id-alt) #1
* **action_param2**:
[SoundEntry ID](/files/DBC/335/soundentries#id-alt) #2
* **action_param3**:
[SoundEntry ID](/files/DBC/335/soundentries#id-alt) #3
* **action_param4**:
[SoundEntry ID](/files/DBC/335/soundentries#id-alt) #4
* **action_param5**:
onlySelf
  * 0: heard by all players in visibility range
  * 1: heard by invoking player
* **action_param6**:
distanceSound
  * 0: uses WorldObject::PlayDirectSound()
  * 1: uses WorldObject::PlayDistanceSound()

:::

::: details SetCorpseDelay (116)
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

:::

::: details DisableEvade (117)
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

:::

::: details SetGoState (118)
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

:::

::: details SetCanFly ⚠️ (119)
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

:::

::: details RemoveAuraType ⚠️ (120)
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

:::

::: details SetSightDist ⚠️ (121)
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

:::

::: details Flee ⚠️ (122)
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

:::

::: details AddThreat (123)
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

:::

::: details LoadEquipment (124)
Load equipment on target creatures.
* **action_type**:
SMART_ACTION_LOAD_EQUIPMENT (124)
* **action_param1**:
[equipment ID](../world/creature_equip_template#id-alt)
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

:::

::: details TriggerRndTimedEvent (125)
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

:::

::: details RemoveAllObjects ⚠️ (126)
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

:::

::: details PauseMovement (127)
Target units pause movement caused by given movement slot.
* **action_type**:
SMART_ACTION_PAUSE_MOVEMENT (127)
* **action_param1**:  
  <!--@include: @/partial/335/movement-slot.md-->

* **action_param2**:
pause (in msec.)
`0`: indefinitely
* **action_param3**:
force? (`0`/`1`)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details PlayAnimkit ❌ (128)
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

:::

::: details ScenePlay ❌ (129)
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

:::

::: details SceneCancel ❌ (130)
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

:::

::: details SpawnSpawngroup (131)
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
  <!--@include: @/partial/335/smartai-spawn-flags.md-->

* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details DespawnSpawngroup (132)
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
  <!--@include: @/partial/335/smartai-spawn-flags.md-->

* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details RespawnUnit (133)
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

:::

::: details InvokerCastSpell (134)
Last invoker will cast spell ID with castFlags on target units.
* **action_type**:
SMART_ACTION_INVOKER_CAST (134)
* **action_param1**:
[Spell ID](/files/DBC/335/spell#id-alt)
* **action_param2**:  
  <!--@include: @/partial/335/smart-cast-flags.md-->

* **action_param3**:  
  <!--@include: @/partial/335/trigger-cast-flags.md-->

* **action_param4**:
maxTargets (`0`: all)
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details PlayCinematic (135)
Play cinematic for target players.
* **action_type**:
SMART_ACTION_PLAY_CINEMATIC (135)
* **action_param1**:
[CinematicSequence ID](/files/DBC/335/cinematicsequences#id-alt)
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

:::

::: details SetSpeed (136)
Set movement speed of target creatures.
* **action_type**:
SMART_ACTION_SET_MOVEMENT_SPEED (136)
* **action_param1**:  
  <!--@include: @/partial/335/movement-generator-type.md-->

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

:::

::: details PlaySpellVisual ❌ (137)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_PLAY_SPELL_VISUAL_KIT (137)
* **action_param1**:
[SpellVisualKit ID](/files/DBC/335/spellvisualkit#id-alt)
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

:::

::: details OverrideLight (138)
Override skybox visual in area.
* **action_type**:
SMART_ACTION_OVERRIDE_LIGHT (138)
* **action_param1**:
[AreaTable ID](/files/DBC/335/areatable#id-alt)
* **action_param2**:
area [Light ID](/files/DBC/335/light#id-alt)
* **action_param3**:
new [Light ID](/files/DBC/335/light#id-alt)
* **action_param4**:
fadeIn time (in msec.)
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details OverrideWeather (139)
Override weather in area.
* **action_type**:
SMART_ACTION_OVERRIDE_WEATHER (139)
* **action_param1**:
[AreaTable ID](/files/DBC/335/areatable#id-alt)
* **action_param2**:
[Weather ID](/files/DBC/335/weather#id-alt)
* **action_param3**:
intensity (`0`: low; `1`: full)
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

::: details SetAIAnim ❌ (140)
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

:::

::: details SetHover (141)
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

:::

::: details SetHealthPct (142)
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

:::

::: details CreateConvers. ❌ (143)
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

:::

::: details SetImmunePC (144)
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

:::

::: details SetImmuneNPC (145)
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

:::

::: details SetUninteractible (146)
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

:::

::: details ActivateGObject (147)
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

:::

::: details AddStoredTargets (148)
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

:::

::: details BecomeClone ❌ (149)
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

:::

::: details TriggerGameEvent ❌ (150)
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

:::

::: details DoAction ❌ (151)
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

:::

::: details CompleteQuest ❌ (152)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_COMPLETE_QUEST (152)
* **action_param1**:
QuestId
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

:::

::: details QuestCreditTalkTo ❌ (153)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_CREDIT_QUEST_OBJECTIVE_TALK_TO (153)
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

:::

::: details DestroyConversation ❌ (154)
> don't use on 3.3.5a
{.is-danger}
* **action_type**:
SMART_ACTION_DESTROY_CONVERSATION (154)
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

:::

::: details EnterVehicle ❌ (155)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_ENTER_VEHICLE (155)
* **action_param1**:
seatId
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

:::

::: details BoardPassenger ❌ (156)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_BOARD_PASSENGER (156)
* **action_param1**:
seatId
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

:::

::: details ExitVehicle ❌ (157)
> RESERVED, PENDING CHERRYPICK
{.is-danger}
* **action_type**:
SMART_ACTION_EXIT_VEHICLE (157)
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

:::

::: details ResumeMovement (158)
Target units resumes movement caused by given movement slot.
**action_type**:
SMART_ACTION_RESUME_MOVEMENT (158)
* **action_param1**:  
  <!--@include: @/partial/335/movement-slot.md-->

* **action_param2**:
ResumeTime (in ms.)
`0`: indefinitely
* **action_param3**:
`0`
* **action_param4**:
`0`
* **action_param5**:
`0`
* **action_param6**:
`0`

:::

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

&nbsp;

### comment
Commenting on SAI uses a template which is the following:
* "Creature name - Event - Action"
* "Minion of Gurok - On spawn - Set Random Movement"
&nbsp;

---
##### PowerType

<!--@include: @/partial/335/powers.md-->

&nbsp;
