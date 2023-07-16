---
title: smart_scripts
description: 
published: true
date: 2023-07-16T15:43:50.601Z
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
| [id](#id) | smallint | unsigned | PRI | NO | 0 |  |  |
| [link](#link) | smallint | unsigned | PRI | NO | 0 |  |  |
| [event_type](#event_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [event_phase_mask](#event_phase_mask) | smallint | unsigned |  | NO | 0 |  |  |
| [event_chance](#event_chance) | tinyint | unsigned |  | NO | 100 |  |  |
| [event_flags](#event_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [event_param1](#event_param1) | int | unsigned |  | NO | 0 |  |  |
| [event_param2](#event_param2) | int | unsigned |  | NO | 0 |  |  |
| [event_param3](#event_param3) | int | unsigned |  | NO | 0 |  |  |
| [event_param4](#event_param4) | int | unsigned |  | NO | 0 |  |  |
| [event_param5](#event_param5) | int | unsigned |  | NO | 0 |  |  |
| [action_type](#action_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [action_param1](#action_param1) | int | unsigned |  | NO | 0 |  |  |
| [action_param2](#action_param2) | int | unsigned |  | NO | 0 |  |  |
| [action_param3](#action_param3) | int | unsigned |  | NO | 0 |  |  |
| [action_param4](#action_param4) | int | unsigned |  | NO | 0 |  |  |
| [action_param5](#action_param5) | int | unsigned |  | NO | 0 |  |  |
| [action_param6](#action_param6) | int | unsigned |  | NO | 0 |  |  |
| [target_type](#target_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [target_param1](#target_param1) | int | unsigned |  | NO | 0 |  |  |
| [target_param2](#target_param2) | int | unsigned |  | NO | 0 |  |  |
| [target_param3](#target_param3) | int | unsigned |  | NO | 0 |  |  |
| [target_param4](#target_param4) | int | unsigned |  | NO | 0 |  |  |
| [target_x](#target_x) | float |  |  | NO | 0 |  |  |
| [target_y](#target_y) | float |  |  | NO | 0 |  |  |
| [target_z](#target_z) | float |  |  | NO | 0 |  |  |
| [target_o](#target_o) | float |  |  | NO | 0 |  |  |
| [comment](#comment) | text |  |  | NO |  |  | Event Comment |
&nbsp;
## Description of fields

### entryorguid
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

### id
Incremental id bound to each **entryorguid** + **source_type** (0, 1, 2, ...).
&nbsp;

### link
Simple event linking;
Example: if **id** = 0 and **link** = 1; **id** 1 will only be able to occur if **id** = 0 was triggered.
&nbsp;

### event_type
| ID | Name | param1 | param 2 | param 3 | param 4 | param 5 | source_type | Comment |
|----|------|--------|---------|---------|---------|---------|-------------------|---------|
| 0 | SMART_EVENT_UPDATE_IC | InitialMin |  InitialMax |  RepeatMin |  RepeatMax |  | 0 + 9 | Update in combat. |
| 1 | SMART_EVENT_UPDATE_OOC | InitialMin |  InitialMax |  RepeatMin |  RepeatMax |  | 0 + 1 + 8 | Update out of combat. |
| 2 | SMART_EVENT_HEALTH_PCT | HPMin% |  HPMax% |   RepeatMin |  RepeatMax |  | 0 | Health Percentage |
| 3 | SMART_EVENT_MANA_PCT | ManaMin% |  ManaMax% |  RepeatMin |  RepeatMax |  | 0 | Mana Percentage |
| 4 | SMART_EVENT_AGGRO |  |  |  |  |  | 0 | On Creature Aggro |
| 5 | SMART_EVENT_KILL | CooldownMin | CooldownMax | Player only (0/1) | [creature entry](../world/creature_template#entry) (if param3 is 0) |  | 0 | On Creature Kill |
| 6 | SMART_EVENT_DEATH |  |  |  |  |  | 0 | On Creature Death |
| 7 | SMART_EVENT_EVADE |  |  |  |  |  | 0 | On Creature Enter Evade Mode |
| 8 | SMART_EVENT_SPELLHIT | SpellID | [SchoolMask](#spellschoolmask) (0: any) | CooldownMin | CooldownMax |  | 0 + 1 | On Creature/Gameobject Spell Hit |
| 9 | SMART_EVENT_RANGE | MinDist | MaxDist | RepeatMin | RepeatMax |  | 0 | On Target In Range |
| 10 | SMART_EVENT_OOC_LOS | 0: Hostile<br>1: Not Hostile<br>2: Any | MaxRange | CooldownMin | CooldownMax |  | 0 | On Target In Distance Out of Combat |
| 11 | SMART_EVENT_RESPAWN | type (None= 0, Map = 1, Area = 2) | MapId | ZoneId |  |  | 0 + 1 | On Creature/Gameobject Respawn |
| 12 | :x: SMART_EVENT_TARGET_HEALTH_PCT |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Health Percentage |
| 13 | SMART_EVENT_VICTIM_CASTING | RepeatMin | RepeatMax | SpellID (0: any) |  |  | 0 | On Target Casting Spell |
| 14 | :x: SMART_EVENT_FRIENDLY_HEALTH |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Friendly Health Deficit |
| 15 | SMART_EVENT_FRIENDLY_IS_CC | Radius | RepeatMin | RepeatMax |  |  | 0 | Feared, Charmed, Rooted, Stunned, Confused |
| 16 | SMART_EVENT_FRIENDLY_MISSING_BUFF | SpellID | Radius | RepeatMin | RepeatMax |  | 0 | On Friendly Lost Buff |
| 17 | SMART_EVENT_SUMMONED_UNIT | [creature entry](..world/creature_template#entry) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Creature/Gameobject Summoned Unit |
| 18 | :x: SMART_EVENT_TARGET_MANA_PCT |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Mana Percentage |
| 19 | SMART_EVENT_ACCEPTED_QUEST | [quest id](..world/quest_template#id) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Target Accepted Quest |
| 20 | SMART_EVENT_REWARD_QUEST | [quest id](..world/quest_template#id) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Target Rewarded Quest |
| 21 | SMART_EVENT_REACHED_HOME |  |  |  |  |  | 0 | On Creature Reached Home Pos. |
| 22 | SMART_EVENT_RECEIVE_EMOTE | EmoteId | CooldownMin | CooldownMax | condition |, val1, val2, val3  | 0 | On Receive Emote. |
| 23 | SMART_EVENT_HAS_AURA | SpellID | Stack amount | RepeatMin | RepeatMax |  | 0 | On Creature Has Aura |
| 24 | SMART_EVENT_TARGET_BUFFED | SpellID | Stack amount | RepeatMin | RepeatMax |  | 0 | On Target Buffed With Spell |
| 25 | SMART_EVENT_RESET |  |  |  |  |  | 0 | Called after combat, when the creature respawn and spawn. |
| 26 | SMART_EVENT_IC_LOS | 0: Hostile<br>1: Not Hostile<br>2: Any | MaxRange | CooldownMin | CooldownMax |  | 0 | On Target In Distance In Combat |
| 27 | SMART_EVENT_PASSENGER_BOARDED | CooldownMin | CooldownMax |  |  |  | 0 | On Player/NPC Entered Creature (Vehicle) |
| 28 | SMART_EVENT_PASSENGER_REMOVED | CooldownMin | CooldownMax |  |  |  | 0 | On Player/NPC Left Creature (Vehicle) |
| 29 | SMART_EVENT_CHARMED | 0: onApply; 1: onRemove |  |  |  |  | 0 | On Creature Charmed |
| 30 | :x: SMART_EVENT_CHARMED_TARGET |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Charmed |
| 31 | SMART_EVENT_SPELLHIT_TARGET | SpellID | [SchoolMask](#spellschoolmask) (0: any) | CooldownMin | CooldownMax |  | 0 | On Target Spell Hit |
| 32 | SMART_EVENT_DAMAGED | MinDmg | MaxDmg | CooldownMin | CooldownMax |  | 0 | On Creature Damaged |
| 33 | SMART_EVENT_DAMAGED_TARGET | MinDmg | MaxDmg | CooldownMin | CooldownMax |  | 0 | On Target Damaged |
| 34 | SMART_EVENT_MOVEMENTINFORM | MovementType (0: any) | PointID |  |  |  | 0 | [`enum MovementGeneratorType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L26) |
| 35 | SMART_EVENT_SUMMON_DESPAWNED | [creature entry](..world/creature_template#entry) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Summoned Unit Despawned |
| 36 | SMART_EVENT_CORPSE_REMOVED |  |  |  |  |  | 0 | On Creature Corpse Removed |
| 37 | SMART_EVENT_AI_INIT |  |  |  |  |  | 0 + 1 | SmartScript::OnInitialize() |
| 38 | SMART_EVENT_DATA_SET | FieldId | Value | CooldownMin | CooldownMax |  | 0 + 1 | On Creature/Gameobject Data Set (SMART_ACTION_SET_DATA) |
| 39 | :x: SMART_EVENT_WAYPOINT_START |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Creature Waypoint ID Started |
| 40 | SMART_EVENT_WAYPOINT_REACHED | PointId (0: any) | pathID (0: any) |  |  |  | 0 | On Creature Waypoint ID Reached |
| 41 | :x: SMART_EVENT_TRANSPORT_ADDPLAYER |  |  |  |  |  | 7 | source_type unavailable |
| 42 | :x: SMART_EVENT_TRANSPORT_ADDCREATURE | Entry (0: any) |  |  |  |  | 7 | source_type unavailable |
| 43 | :x: SMART_EVENT_TRANSPORT_REMOVE_PLAYER |  |  |  |  |  | 7 | source_type unavailable |
| 44 | :x: SMART_EVENT_TRANSPORT_RELOCATE | PointId |  |  |  |  | 7 | source_type unavailable |
| 45 | :x: SMART_EVENT_INSTANCE_PLAYER_ENTER | Team (0: any) | CooldownMin | CooldownMax |  |  | 8 | source_type unavailable |
| 46 | SMART_EVENT_AREATRIGGER_ONTRIGGER | TriggerId (0: any) |  |  |  |  | 2 |  |
| 47 | :x: SMART_EVENT_QUEST_ACCEPTED |  |  |  |  |  | 5 | source_type unavailable - On Target Quest Accepted|
| 48 | :x: SMART_EVENT_QUEST_OBJ_COMPLETION |  |  |  |  |  | 5 | source_type unavailable - On Target Quest Objective Completed |
| 49 | :x: SMART_EVENT_QUEST_COMPLETION |  |  |  |  |  | 5 | source_type unavailable - On Target Quest Completed |
| 50 | :x: SMART_EVENT_QUEST_REWARDED |  |  |  |  |  | 5 | source_type unavailable - On Target Quest Rewarded |
| 51 | :x: SMART_EVENT_QUEST_FAIL |  |  |  |  |  | 5 | source_type unavailable - On Target Quest Failed |
| 52 | SMART_EVENT_TEXT_OVER | [GroupId](../world/creature_text#groupid) | [creature entry](../world/creature_template#entry) who talks (0: any) |  |  |  | 0 + 1 | On TEXT_OVER Event Triggered After SMART_ACTION_TALK |
| 53 | SMART_EVENT_RECEIVE_HEAL | MinHeal | MaxHeal | CooldownMin | CooldownMax |  | 0 | On Creature Received Healing |
| 54 | SMART_EVENT_JUST_SUMMONED |  |  |  |  |  | 0 | On Creature Just spawned |
| 55 | SMART_EVENT_WAYPOINT_PAUSED | PointId (0: any) | pathID (0: any) |  |  |  | 0 | On Creature Paused at Waypoint ID |
| 56 | SMART_EVENT_WAYPOINT_RESUMED | PointId (0: any) | pathID (0: any) |  |  |  | 0 | On Creature Resumed after Waypoint ID |
| 57 | SMART_EVENT_WAYPOINT_STOPPED | PointId (0: any) | pathID (0: any) |  |  |  | 0 | On Creature Stopped On Waypoint ID |
| 58 | SMART_EVENT_WAYPOINT_ENDED | PointId (0: any) | pathID (0: any) |  |  |  | 0 | On Creature Waypoint Path Ended |
| 59 | SMART_EVENT_TIMED_EVENT_TRIGGERED | id |  |  |  |  | 0 + 1 | On SMART_ACTION_TRIGGER_TIMED_EVENT, SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT trigger |
| 60 | SMART_EVENT_UPDATE | InitialMin | InitialMax | RepeatMin | RepeatMax |  | 0 + 1 | Update always. |
| 61 | SMART_EVENT_LINK |  |  |  |  |  | < any > | requires another **link** to point at this entries **id**; used to link together multiple events, does not use any extra resources to iterate event lists needlessly |
| 62 | SMART_EVENT_GOSSIP_SELECT | [menuID](../world/gossip_menu_option#menuid) | [OptionID](../world/gossip_menu_option#optionid) |  |  |  | 0 + 1 |  |
| 63 | SMART_EVENT_JUST_CREATED |  |  |  |  |  | 0 + 1 | ? same as SMART_EVENT_AI_INIT ? |
| 64 | SMART_EVENT_GOSSIP_HELLO | noReportUse (for GOs)<br>0: onGossipHello and onReportUse (may trigger twice)<br>1: onGossipHello only<br>2: onReportUse only |  |  |  |  | 0 + 1 | On Right-Click Creature/Gameobject that have gossip enabled. |
| 65 | SMART_EVENT_FOLLOW_COMPLETED |  |  |  |  |  | 0 | On Stop Following |
| 66 | :x: SMART_EVENT_EVENT_PHASE_CHANGE |  |  |  |  |  | 0 + 1 | UNUSED, DO NOT REUSE - On event phase mask set |
| 67 | :x: SMART_EVENT_IS_BEHIND_TARGET |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Creature is behind target. |
| 68 | SMART_EVENT_GAME_EVENT_START | [game_event.eventEntry](../world/game_event#eventEntry) |  |  |  |  | 0 + 1 | On game_event started. |
| 69 | SMART_EVENT_GAME_EVENT_END | [game_event.eventEntry](../world/game_event#eventEntry) |  |  |  |  | 0 + 1 | On game_event ended. |
| 70 | SMART_EVENT_GO_LOOT_STATE_CHANGED | LootState |  |  |  |  | 1 | [`enum LootState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/GameObject/GameObject.h#L74) |
| 71 | SMART_EVENT_GO_EVENT_INFORM | eventId |  |  |  |  | 1 | event id from [gameobject template](../world/gameobject_template) |
| 72 | SMART_EVENT_ACTION_DONE | eventId |  |  |  |  | 0 | manual values or [enum EventId](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h) passed by `SmartAI::DoAction()` |
| 73 | SMART_EVENT_ON_SPELLCLICK |  |  |  |  |  | 0 |  |
| 74 | SMART_EVENT_FRIENDLY_HEALTH_PCT | minHpPct | maxHpPct | repeatMin | repeatMax |  | 0 | 'friendly' determined by **target_type** |
| 75 | SMART_EVENT_DISTANCE_CREATURE | [creature guid](../world/creature#guid) | [creature entry](..world/creature_template#entry) | distance | repeat |  | 0 | On creature guid OR any instance of creature entry is within distance. |
| 76 | SMART_EVENT_DISTANCE_GAMEOBJECT | [gameobject guid](../world/gameobject#guid) | [gameobject entry](../world/gameobject_template#entry) | distance | repeat |  | 0 | On gameobject guid OR any instance of gameobject entry is within distance. |
| 77 | SMART_EVENT_COUNTER_SET | counterId | value | cooldownMin | cooldownMax |  | 0 + 1 | after SMART_ACTION_SET_COUNTER, check if quantity of counterId is equal to value |
| 78 | :x: SMART_EVENT_SCENE_START |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 79 | :x: SMART_EVENT_SCENE_TRIGGER |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 80 | :x: SMART_EVENT_SCENE_CANCEL |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 81 | :x: SMART_EVENT_SCENE_COMPLETE |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 82 | SMART_EVENT_SUMMONED_UNIT_DIES | [creature entry](..world/creature_template#entry) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 |  |
| 83 | SMART_EVENT_ON_SPELL_CAST | SpellID | CooldownMin | CooldownMax |  |  | 0 | on Spell::cast |
| 84 | SMART_EVENT_ON_SPELL_FAILED | SpellID | CooldownMin | CooldownMax |  |  | 0 | on Unit::InterruptSpell |
| 85 | SMART_EVENT_ON_SPELL_START | SpellID | CooldownMin | CooldownMax |  |  | 0 | on Spell::prapare |
| 86 | SMART_EVENT_ON_DESPAWN |  |  |  |  |  | 0 | On Before Creature Removed |
{.dense}

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

### action_type
*- no description -*
&nbsp;

### action_param\[1-6]
*- no description -*
&nbsp;

### target_type
*- no description -*
&nbsp;

### target_param\[1-4]
*- no description -*
&nbsp;

### target_x
*- no description -*
&nbsp;

### target_y
*- no description -*
&nbsp;

### target_z
*- no description -*
&nbsp;

### target_o
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

## Additional Descriptions

### SpellSchoolMask
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


<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>