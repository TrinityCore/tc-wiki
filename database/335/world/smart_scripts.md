---
title: smart_scripts
description:
published: true
date: 2023-07-18T14:51:59.828Z
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
| [event_param1](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param2](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param3](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param4](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param5](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [action_type](#action_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [action_param1](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param2](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param3](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param4](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param5](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param6](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [target_type](#target_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [target_param1](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param2](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param3](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param4](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_x](#target_type) | float |  |  | NO | 0 |  |  |
| [target_y](#target_type) | float |  |  | NO | 0 |  |  |
| [target_z](#target_type) | float |  |  | NO | 0 |  |  |
| [target_o](#target_type) | float |  |  | NO | 0 |  |  |
| [comment](#comment) | text |  |  | NO |  |  | Event Comment |
&nbsp;

## Description of fields

> Note: :x:means that the feature/option is not (yet) implemented.
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

### id
Incremental id bound to each **entryorguid** + **source_type** (0, 1, 2, ...).
&nbsp;

### link
Simple event linking;
Example: if **id** = 0 and **link** = 1; **id** 1 will only be able to occur if **id** = 0 was triggered.
&nbsp;

### event_type
| ID | Name | event_param1 | event_param2 | event_param3 | event_param4 | event_param5 | valid source_types | Comment |
|----|------|--------|---------|---------|---------|---------|-------------------|---------|
| 0 | SMART_EVENT_UPDATE_IC | InitialMin |  InitialMax |  RepeatMin |  RepeatMax |  | 0 + 9 | Update in combat. |
| 1 | SMART_EVENT_UPDATE_OOC | InitialMin |  InitialMax |  RepeatMin |  RepeatMax |  | 0 + 1 + 8 | Update out of combat. |
| 2 | SMART_EVENT_HEALTH_PCT | HPMin% |  HPMax% |   RepeatMin |  RepeatMax |  | 0 | Health Percentage |
| 3 | SMART_EVENT_MANA_PCT | ManaMin% |  ManaMax% |  RepeatMin |  RepeatMax |  | 0 | Mana Percentage |
| 4 | SMART_EVENT_AGGRO |  |  |  |  |  | 0 | On Creature Aggro |
| 5 | SMART_EVENT_KILL | CooldownMin | CooldownMax | Player only (0/1) | [creature entry](../world/creature_template#entry) (if param3 is 0) |  | 0 | On Creature Kill |
| 6 | SMART_EVENT_DEATH |  |  |  |  |  | 0 | On Creature Death |
| 7 | SMART_EVENT_EVADE |  |  |  |  |  | 0 | On Creature Enter Evade Mode |
| 8 | SMART_EVENT_SPELLHIT | [Spell ID](/files/DBC/335/spell#id) | [SchoolMask](#spellschoolmask) (0: any) | CooldownMin | CooldownMax |  | 0 + 1 | On Creature/Gameobject Spell Hit |
| 9 | SMART_EVENT_RANGE | MinDist | MaxDist | RepeatMin | RepeatMax |  | 0 | On Target In Range |
| 10 | SMART_EVENT_OOC_LOS | 0: Hostile<br>1: Not Hostile<br>2: Any | MaxRange | CooldownMin | CooldownMax |  | 0 | On Target In Distance Out of Combat |
| 11 | SMART_EVENT_RESPAWN | type (None= 0, Map = 1, Area = 2) | [Map ID](/files/DBC/335/map#id) | [AreaTable ID](/files/DBC/335/areatable#id) |  |  | 0 + 1 | On Creature/Gameobject Respawn |
| 12 | :x: SMART_EVENT_TARGET_HEALTH_PCT |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Health Percentage |
| 13 | SMART_EVENT_VICTIM_CASTING | RepeatMin | RepeatMax | [Spell ID](/files/DBC/335/spell#id) (0: any) |  |  | 0 | On Target Casting Spell |
| 14 | :x: SMART_EVENT_FRIENDLY_HEALTH |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Friendly Health Deficit |
| 15 | SMART_EVENT_FRIENDLY_IS_CC | Radius | RepeatMin | RepeatMax |  |  | 0 | Feared, Charmed, Rooted, Stunned, Confused |
| 16 | SMART_EVENT_FRIENDLY_MISSING_BUFF | [Spell ID](/files/DBC/335/spell#id) | Radius | RepeatMin | RepeatMax |  | 0 | On Friendly Lost Buff |
| 17 | SMART_EVENT_SUMMONED_UNIT | [creature entry](..world/creature_template#entry) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Creature/Gameobject Summoned Unit |
| 18 | :x: SMART_EVENT_TARGET_MANA_PCT |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Mana Percentage |
| 19 | SMART_EVENT_ACCEPTED_QUEST | [quest ID](..world/quest_template#id) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Target Accepted Quest |
| 20 | SMART_EVENT_REWARD_QUEST | [quest ID](..world/quest_template#id) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 | On Target Rewarded Quest |
| 21 | SMART_EVENT_REACHED_HOME |  |  |  |  |  | 0 | On Creature Reached Home Pos. |
| 22 | SMART_EVENT_RECEIVE_EMOTE | [EmotesText ID](/files/DBC/335/emotestext#id) | CooldownMin | CooldownMax | condition |, val1, val2, val3  | 0 | On Receive Player Emote. |
| 23 | SMART_EVENT_HAS_AURA | [Spell ID](/files/DBC/335/spell#id) | Stack amount | RepeatMin | RepeatMax |  | 0 | On Creature Has Aura |
| 24 | SMART_EVENT_TARGET_BUFFED | [Spell ID](/files/DBC/335/spell#id) | Stack amount | RepeatMin | RepeatMax |  | 0 | On Target Buffed With Spell |
| 25 | SMART_EVENT_RESET |  |  |  |  |  | 0 | Called after combat, when the creature respawn and spawn. |
| 26 | SMART_EVENT_IC_LOS | 0: Hostile<br>1: Not Hostile<br>2: Any | MaxRange | CooldownMin | CooldownMax |  | 0 | On Target In Distance In Combat |
| 27 | SMART_EVENT_PASSENGER_BOARDED | CooldownMin | CooldownMax |  |  |  | 0 | On Player/NPC Entered Creature (Vehicle) |
| 28 | SMART_EVENT_PASSENGER_REMOVED | CooldownMin | CooldownMax |  |  |  | 0 | On Player/NPC Left Creature (Vehicle) |
| 29 | SMART_EVENT_CHARMED | 0: onApply; 1: onRemove |  |  |  |  | 0 | On Creature Charmed |
| 30 | :x: SMART_EVENT_CHARMED_TARGET |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Target Charmed |
| 31 | SMART_EVENT_SPELLHIT_TARGET | [Spell ID](/files/DBC/335/spell#id) | [SchoolMask](#spellschoolmask) (0: any) | CooldownMin | CooldownMax |  | 0 | On Target Spell Hit |
| 32 | SMART_EVENT_DAMAGED | MinDmg | MaxDmg | CooldownMin | CooldownMax |  | 0 | On Creature Damaged |
| 33 | SMART_EVENT_DAMAGED_TARGET | MinDmg | MaxDmg | CooldownMin | CooldownMax |  | 0 | On Target Damaged |
| 34 | SMART_EVENT_MOVEMENTINFORM | [MovementType](#movementtype) (0: any) | PointID |  |  |  | 0 |  |
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
| 46 | SMART_EVENT_AREATRIGGER_ONTRIGGER | [AreaTrigger ID](/files/DBC/335/areatrigger#id) (0: any) |  |  |  |  | 2 |  |
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
| 59 | SMART_EVENT_TIMED_EVENT_TRIGGERED | id |  |  |  |  | 0 + 1 | On SMART_ACTION_TRIGGER_TIMED_EVENT (73) or<br> SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT (125) trigger |
| 60 | SMART_EVENT_UPDATE | InitialMin | InitialMax | RepeatMin | RepeatMax |  | 0 + 1 | Update always. |
| 61 | SMART_EVENT_LINK |  |  |  |  |  | < any > | requires another **link** to point at this entries **id**<br>Used to link together multiple events, does not use any extra resources to iterate event lists needlessly |
| 62 | SMART_EVENT_GOSSIP_SELECT | [menuID](../world/gossip_menu_option#menuid) | [OptionID](../world/gossip_menu_option#optionid) |  |  |  | 0 + 1 |  |
| 63 | SMART_EVENT_JUST_CREATED |  |  |  |  |  | 0 + 1 | ? same as SMART_EVENT_AI_INIT ? |
| 64 | SMART_EVENT_GOSSIP_HELLO | noReportUse (for GOs)<br>0: onGossipHello and onReportUse (may trigger twice)<br>1: onGossipHello only<br>2: onReportUse only |  |  |  |  | 0 + 1 | On Right-Click Creature/Gameobject that have gossip enabled. |
| 65 | SMART_EVENT_FOLLOW_COMPLETED |  |  |  |  |  | 0 | On Stop Following |
| 66 | :x: SMART_EVENT_EVENT_PHASE_CHANGE |  |  |  |  |  | 0 + 1 | UNUSED, DO NOT REUSE - On event phase mask set |
| 67 | :x: SMART_EVENT_IS_BEHIND_TARGET |  |  |  |  |  | 0 | UNUSED, DO NOT REUSE - On Creature is behind target. |
| 68 | SMART_EVENT_GAME_EVENT_START | [game_event.eventEntry](../world/game_event#eventEntry) |  |  |  |  | 0 + 1 | On game_event started. |
| 69 | SMART_EVENT_GAME_EVENT_END | [game_event.eventEntry](../world/game_event#eventEntry) |  |  |  |  | 0 + 1 | On game_event ended. |
| 70 | SMART_EVENT_GO_LOOT_STATE_CHANGED | [LootState](#lootstate) |  |  |  |  | 1 |  |
| 71 | SMART_EVENT_GO_EVENT_INFORM | eventId |  |  |  |  | 1 | event id from [gameobject template](../world/gameobject_template) |
| 72 | SMART_EVENT_ACTION_DONE | eventId |  |  |  |  | 0 | manual values or [enum EventId](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3336-L3350) passed by SmartAI::DoAction() |
| 73 | SMART_EVENT_ON_SPELLCLICK |  |  |  |  |  | 0 |  |
| 74 | SMART_EVENT_FRIENDLY_HEALTH_PCT | minHpPct | maxHpPct | repeatMin | repeatMax |  | 0 | 'friendly' determined by **target_type** |
| 75 | SMART_EVENT_DISTANCE_CREATURE | [creature guid](../world/creature#guid) | [creature entry](..world/creature_template#entry) | distance | repeat |  | 0 | On creature guid OR any instance of creature entry is within distance. |
| 76 | SMART_EVENT_DISTANCE_GAMEOBJECT | [gameobject guid](../world/gameobject#guid) | [gameobject entry](../world/gameobject_template#entry) | distance | repeat |  | 0 | On gameobject guid OR any instance of gameobject entry is within distance. |
| 77 | SMART_EVENT_COUNTER_SET | counterId | value | cooldownMin | cooldownMax |  | 0 + 1 | after SMART_ACTION_SET_COUNTER (63), check if quantity of counterId is equal to value |
| 78 | :x: SMART_EVENT_SCENE_START |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 79 | :x: SMART_EVENT_SCENE_TRIGGER |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 80 | :x: SMART_EVENT_SCENE_CANCEL |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 81 | :x: SMART_EVENT_SCENE_COMPLETE |  |  |  |  |  | 0 | don't use on 3.3.5a |
| 82 | SMART_EVENT_SUMMONED_UNIT_DIES | [creature entry](..world/creature_template#entry) (0: any) | CooldownMin | CooldownMax |  |  | 0 + 1 |  |
| 83 | SMART_EVENT_ON_SPELL_CAST | [Spell ID](/files/DBC/335/spell#id) | CooldownMin | CooldownMax |  |  | 0 | on Spell::cast |
| 84 | SMART_EVENT_ON_SPELL_FAILED | [Spell ID](/files/DBC/335/spell#id) | CooldownMin | CooldownMax |  |  | 0 | on Unit::InterruptSpell |
| 85 | SMART_EVENT_ON_SPELL_START | [Spell ID](/files/DBC/335/spell#id) | CooldownMin | CooldownMax |  |  | 0 | on Spell::prapare |
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
| ID | Name | action_param1 | action_param2 | action_param3 | action_param4 | action_param5 | action_param6 | Comment |
|----|------|---------------|---------------|---------------|---------------|---------------|---------------|---------|
| 0 | SMART_ACTION_NONE |  |  |  |  |  |  | No action |
| 1 | SMART_ACTION_TALK | [GroupID](../world/creature_text#groupid) | duration in ms to wait before<br>TEXT_OVER event is triggered | useTalkTarget:<br>0 - target talks to invoker<br>1 - creature talks to target |  |  |  | action_param3 only relevant for creature targets |
| 2 | SMART_ACTION_SET_FACTION | [FactionTemplate ID](/files/DBC/335/factiontemplate#id) (0: default) |  |  |  |  |  | Sets faction to creature. |
| 3 | SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL | [creature entry](../world/creature_template#entry) | [DisplayID](../world/creature_model_info#displayid) |  |  |  |  | set one or the other; both 0: demorph |
| 4 | SMART_ACTION_SOUND | [SoundEntry ID](/files/DBC/335/soundentries#id) | onlySelf? (0/1) | distantSound? (0/1) |  |  |  | distantSound: external sound source |
| 5 | SMART_ACTION_PLAY_EMOTE | [Emote ID](/files/DBC/335/emotes#id) |  |  |  |  |  |  |
| 6 | SMART_ACTION_FAIL_QUEST | [quest ID](../world/quest_template#id) |  |  |  |  |  | Fail quest of target. |
| 7 | SMART_ACTION_OFFER_QUEST | [quest ID](../world/quest_template#id) | directAdd:<br>0 - offer quest<br>1 - add quest to log |  |  |  |  | Offer quest to target. |
| 8 | SMART_ACTION_SET_REACT_STATE | [state](#reactstate) |  |  |  |  |  |  |
| 9 | SMART_ACTION_ACTIVATE_GOBJECT |  |  |  |  |  |  | Set gameobject active. |
| 10 | SMART_ACTION_RANDOM_EMOTE | [Emote ID1](/files/DBC/335/emotes#id) | [Emote ID2](/files/DBC/335/emotes#id) | [Emote ID3](/files/DBC/335/emotes#id) | [Emote ID4](/files/DBC/335/emotes#id) | [Emote ID5](/files/DBC/335/emotes#id) | [Emote ID6](/files/DBC/335/emotes#id) | Play random emote. |
| 11 | SMART_ACTION_CAST | [Spell ID](/files/DBC/335/spell#id) | [CastFlags](#smartcastflags) | [TriggeredFlags](#triggercastflags) |  |  |  | Cast spell at taget. |
| 12 | SMART_ACTION_SUMMON_CREATURE | [creature entry](../world/creature_template#entry) | [SummonType](#summontype) | duration in ms | attackInvoker? (0/1) | SmartActionSummonCreatureFlags:<br>0x1 - PersonalSpawn<br>0x2 - PreferUnit |  | Summon NPC |
| 13 | SMART_ACTION_THREAT_SINGLE_PCT | Threat% incr. | Threat% decr. |  |  |  |  | Change threat percentage for single target |
| 14 | SMART_ACTION_THREAT_ALL_PCT | Threat% incr. | Threat% decr. |  |  |  |  | Change threat percentage for all targets |
| 15 | SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS | [QuestID](../world/quest_template#id) |  |  |  |  |  | Satisfy exploration requirement for quest. |
| 16 | :x: SMART_ACTION_RESERVED_16 |  |  |  |  |  |  | used on 4.3.4 and higher scripts |
| 17 | SMART_ACTION_SET_EMOTE_STATE | [Emote ID](/files/DBC/335/emotes#id) |  |  |  |  |  | Play Emote Continuously |
| 18 | :x: SMART_ACTION_SET_UNIT_FLAG | flags | 0: set unit_flags<br>1: set unit_flags2 |  |  |  |  | UNUSED, DO NOT REUSE - Set multiple flags at once|
| 19 | :x: SMART_ACTION_REMOVE_UNIT_FLAG | flags | 0: unset unit_flags<br>1: unset unit_flags2 |  |  |  |  | UNUSED, DO NOT REUSE - Remove multiple flags at once|
| 20 | SMART_ACTION_AUTO_ATTACK | allowAttack? (0/1) |  |  |  |  |  | Start or Stop auto hits |
| 21 | SMART_ACTION_ALLOW_COMBAT_MOVEMENT | allowMovement? (0/1) |  |  |  |  |  | Allow or Disable Combat Movement |
| 22 | SMART_ACTION_SET_EVENT_PHASE | phase |  |  |  |  |  | see **event_phase_mask** |
| 23 | SMART_ACTION_INC_EVENT_PHASE | increment | decrement |  |  |  |  | only increment OR decrement, not both |
| 24 | SMART_ACTION_EVADE | 0: to respawn pos.<br>1: to last stored home pos. |  |  |  |  |  | Enter Evade mode. |
| 25 | SMART_ACTION_FLEE_FOR_ASSIST | withEmote? (0/1) |  |  |  |  |  | Emote: '%s attempts to run away in fear'  |
| 26 | SMART_ACTION_CALL_GROUPEVENTHAPPENS | [quest ID](../world/quest_template#id) |  |  |  |  |  | Like #15 but for whole party. |
| 27 | SMART_ACTION_COMBAT_STOP |  |  |  |  |  |  |  |
| 28 | SMART_ACTION_REMOVEAURASFROMSPELL | [Spell ID](/files/DBC/335/spell#id) (0: any) | charges (0: all) | onlyOwned? (0/1) |  |  |  |  |
| 29 | SMART_ACTION_FOLLOW | distance (0: default) | angle (0: default) | [end creature entry](../world/creature_template#entry) | credit | creditType:<br>0 - moster kill<br>1 - event |  | Following ends when reaching end creature.<br>Credit is rewarded upon StopFollow. |
| 30 | SMART_ACTION_RANDOM_PHASE | Phase1 | Phase2 | Phase3 | Phase4 | Phase5 | Phase6 | see **event_phase_mask** |
| 31 | SMART_ACTION_RANDOM_PHASE_RANGE | PhaseMin | PhaseMax |  |  |  |  | see **event_phase_mask** |
| 32 | SMART_ACTION_RESET_GOBJECT |  |  |  |  |  | |
| 33 | SMART_ACTION_CALL_KILLEDMONSTER | [creature entry](../world/creature_template#entry) |  |  |  |  |  | Satisfies [RequiredNpcOrGo](../world/quest_template#RequiredNpcOrGo1) |
| 34 | SMART_ACTION_SET_INST_DATA | fieldId | data | type:<br>0 - SetData<br>1 - SetBossState |  |  |  | if type:<br>0 - arbitrary data<br>1 - [EncounterState](#encounterstate) |
| 35 | SMART_ACTION_SET_INST_DATA64 | fieldId |  |  |  |  |  | save target's guid in instance's fieldId |
| 36 | SMART_ACTION_UPDATE_TEMPLATE | [creature entry](../world/creature_template#entry) | updateLevel? (0/1) |  |  |  |  | Updates creature_template to given entry.<br>Can set level from given creature entry. |
| 37 | SMART_ACTION_DIE |  |  |  |  |  |  | Creature suicides. |
| 38 | SMART_ACTION_SET_IN_COMBAT_WITH_ZONE |  |  |  |  |  |  |  |
| 39 | SMART_ACTION_CALL_FOR_HELP | range | withEmote? (0/1) |  |  |  |  | Emote: '%s calls for help!'. |
| 40 | SMART_ACTION_SET_SHEATH | [state](#sheathstate) |  |  |  |  |  |  |
| 41 | SMART_ACTION_FORCE_DESPAWN | despawnDelay in ms | forceRespawnTimer in sec |  |  |  |  | respawn is optional |
| 42 | SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL | flat HP | pct HP |  |  |  |  | pct takes precedent over flat |
| 43 | SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL | [creature entry](../world/creature_template#entry) | [DisplayID](../world/creature_model_info#displayid) |  |  |  |  | set one or the other; both 0: dismount |
| 44 | SMART_ACTION_SET_INGAME_PHASE_MASK | phaseMask |  |  |  |  |  | Sets phaseMask of target |
| 45 | SMART_ACTION_SET_DATA | fieldId | data |  |  |  |  | write data to fieldId in AI enabled target |
| 46 | SMART_ACTION_ATTACK_STOP |  |  |  |  |  |  | Stop melee, spell casting during combat, chasing the target and facing |
| 47 | SMART_ACTION_SET_VISIBILITY | visible? (0/1) |  |  |  |  |  | set target visibility |
| 48 | SMART_ACTION_SET_ACTIVE | active? (0/1) |  |  |  |  |  | make target grid active/inactive |
| 49 | SMART_ACTION_ATTACK_START |  |  |  |  |  |  | start attacking random target |
| 50 | SMART_ACTION_SUMMON_GO | [gameobject entry](../world/gameobject_template#entry) | despawnTime in sec | [SummonType](#gosummontype) |  |  |  | Spawns Gameobject, use target_type to set spawn position. |
| 51 | SMART_ACTION_KILL_UNIT |  |  |  |  |  |  | Forces non-player target to suicide. |
| 52 | SMART_ACTION_ACTIVATE_TAXI | [TaxiPath ID](/files/DBC/335/taxipath#id) |  |  |  |  |  | Sends target player to flight path. You have to be close to Flight Master, which gives Taxi ID you need.  |
| 53 | SMART_ACTION_WP_START | run? (0/1) | [Waypoint entry](../world/waypoints#entry) | canRepeat? (0/1) | [quest ID](../world/quest_template#id) | despawntime |  | Creature starts Waypoint Movement. Use waypoints table to create movement. |
| 54 | SMART_ACTION_WP_PAUSE | time in ms |  |  |  |  |  | Creature pauses its Waypoint Movement for given time. |
| 55 | SMART_ACTION_WP_STOP | despawnTime | [quest ID](../world/quest_template#id) | failQuest? (0/1) |  |  |  | Creature stops its Waypoint Movement. |
| 56 | SMART_ACTION_ADD_ITEM | [item entry](../world/item_template#entry) | count |  |  |  |  | Adds item(s) to player. |
| 57 | SMART_ACTION_REMOVE_ITEM | [item entry](../world/item_template#entry) | count |  |  |  |  | Removes item(s) from player. |
| 58 | :x: SMART_ACTION_INSTALL_AI_TEMPLATE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 59 | SMART_ACTION_SET_RUN | enable? (0/1) |  |  |  |  |  |  |
| 60 | SMART_ACTION_SET_DISABLE_GRAVITY | disable? (0/1) |  |  |  |  |  | Only works for creatures with inhabit air. |
| 61 | :x: SMART_ACTION_SET_SWIM |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 62 | SMART_ACTION_TELEPORT | [Map ID](/files/DBC/335/map#id) |  |  |  |  |  | Use World Pos. from **target_type** to set destination |
| 63 | SMART_ACTION_SET_COUNTER | counterID | value | reset? (0/1) |  |  |  |  |
| 64 | SMART_ACTION_STORE_TARGET_LIST | varID |  |  |  |  |  |  |
| 65 | SMART_ACTION_WP_RESUME |  |  |  |  |  |  | Creature continues in its Waypoint Movement. |
| 66 | SMART_ACTION_SET_ORIENTATION | orientation:<br>1 - HomePos. orientation<br>8 - **target_o** value<br>!0 - facing target |  |  |  |  |  | depends on targets:<br>1 - SMART_TARGET_SELF<br> 8 - SMART_TARGET_POSITION<br> !0 - !SMART_TARGET_NONE |
| 67 | SMART_ACTION_CREATE_TIMED_EVENT | id | InitialMin | InitialMax | RepeatMin (0: no repeat) | RepeatMax (0: no repeat) | chance (0: 100%) |  |
| 68 | SMART_ACTION_PLAYMOVIE | MovieID |  |  |  |  |  | requires target player |
| 69 | SMART_ACTION_MOVE_TO_POS | PointID | onTransport? (0/1) | noPathfinding? (0/1) | ContactDistance |  |  | PointID is called by SMART_EVENT_MOVEMENTINFORM.<br>Position is set with **target_type** |
| 70 | SMART_ACTION_ENABLE_TEMP_GOBJ | respawn time in sec |  |  |  |  |  | GO selected by **target_type** |
| 71 | SMART_ACTION_EQUIP | [equipment ID](../world/creature_equip_template#id) | slotmask (0: 0x7) | [right(1) item entry](../world/item_template#entry) | [left(2) item entry](../world/item_template#entry) | [ranged(3) item entry](../world/item_template#entry) |  | Set equipment on target creature.<br>Slots1-3 item entries are only used if no equipment ID is set. |
| 72 | SMART_ACTION_CLOSE_GOSSIP |  |  |  |  |  |  | Closes gossip window. |
| 73 | SMART_ACTION_TRIGGER_TIMED_EVENT | id |  |  |  |  |  |  |
| 74 | SMART_ACTION_REMOVE_TIMED_EVENT | id |  |  |  |  |  |  |
| 75 | :x: SMART_ACTION_ADD_AURA |  |  |  |  |  |  | UNUSED, DO NOT REUSE - Adds aura to player(s).  |
| 76 | :x: SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 77 | :x: SMART_ACTION_RESET_SCRIPT_BASE_OBJECT |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 78 | SMART_ACTION_CALL_SCRIPT_RESET |  |  |  |  |  |  |  |
| 79 | SMART_ACTION_SET_RANGED_MOVEMENT | attackDistance | arrackAngle |  |  |  |  | Sets movement to follow at a specific range to the target. |
| 80 | SMART_ACTION_CALL_TIMED_ACTIONLIST | **entryorguid** | updateType:<br>0 - out of combat<br>1 - in combat<br>2 - always | allowOverride? (0/1) |  |  |  | Start TimedActionList on SAI enabled target. |
| 81 | SMART_ACTION_SET_NPC_FLAG | [npcflag](../world/creature_template#npcflag) |  |  |  |  |  | Replace npcflags on creature taget |
| 82 | SMART_ACTION_ADD_NPC_FLAG | [npcflag](../world/creature_template#npcflag) |  |  |  |  |  | Add npcflags to creature taget |
| 83 | SMART_ACTION_REMOVE_NPC_FLAG | [npcflag](../world/creature_template#npcflag) |  |  |  |  |  | Remove npcflags from creature taget |
| 84 | SMART_ACTION_SIMPLE_TALK | [groupID](../world/creature_text#groupid) |  |  |  |  |  | Target units will say the text.<br>TEXT_OVER event is not triggered. |
| 85 | SMART_ACTION_SELF_CAST | [Spell ID](/files/DBC/335/spell#id) | [CastFlags](#smartcastflags) | [TriggeredFlags](#triggercastflags) | maxTargets (0: all) |  |  | The targets will cast the spell on it themself |
| 86 | SMART_ACTION_CROSS_CAST | [Spell ID](/files/DBC/335/spell#id) | [CastFlags](#smartcastflags) | caster_**target_type** | caster_**target_param1** | caster_**target_param2** | caster_**target_param3** | CasterTarget will cast Spell ID on all (regular) targets.<br>Use with caution if targeting multiple * multiple units.
| 87 | SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST | **entryorguid**1 | **entryorguid**2 | **entryorguid**3 | **entryorguid**4 | **entryorguid**5 | **entryorguid**6 | Start random (id > 0) TimedActionList on SAI enabled target. |
| 88 | SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST | min. **entryorguid** | max. **entryorguid** |  |  |  |  | Start random (min <= id <= max) TimedActionList on SAI enabled target. |
| 89 | SMART_ACTION_RANDOM_MOVE | maxDist (0: idleMove) |  |  |  |  |  | Creature target or self moves maxDist in random direction. |
| 90 | SMART_ACTION_SET_UNIT_FIELD_BYTES_1 | bytes | target:<br>0 - [StandState](../world/creature_template_addon#standstate)<br>2 - [VisFlags](../world/creature_template_addon#visflags)<br>3 - [AnimTier](../world/creature_template_addon#animtier)  |  |  |  |  | Set units BYTES_1 at target offset. |
| 91 | SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1 | bytes | target:<br>0 - [StandState](../world/creature_template_addon#standstate)<br>2 - [VisFlags](../world/creature_template_addon#visflags)<br>3 - [AnimTier](../world/creature_template_addon#animtier)  |  |  |  |  | Reset units BYTES_1 at target offset. |
| 92 | SMART_ACTION_INTERRUPT_SPELL | withDelayed? (0/1) | [Spell ID](/files/DBC/335/spell#id) | withInstant? (0/1) |  |  |  | Interrupt the current spell being cast by target.<br>Without Spell ID, the core will find the current spell depending on withDelay and withInstant. |
| 93 | :x: SMART_ACTION_SEND_GO_CUSTOM_ANIM |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 94 | :x: SMART_ACTION_SET_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 95 | :x: SMART_ACTION_ADD_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 96 | :x: SMART_ACTION_REMOVE_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 97 | SMART_ACTION_JUMP_TO_POS | speedXY | speedZ |  |  |  |  | Creature jumps to target, speed* describes the arc |
| 98 | SMART_ACTION_SEND_GOSSIP_MENU | [MenuID](../world/gossip_menu#menuid) | [TextID](../world/gossip_menu#textid) |  |  |  |  | Can be used together with SMART_EVENT_GOSSIP_HELLO to set custom gossip. |
| 99 | SMART_ACTION_GO_SET_LOOT_STATE | [state](#lootstate) |  |  |  |  |  | Set state of target gameobject. |
| 100 | SMART_ACTION_SEND_TARGET_TO_TARGET | varId |  |  |  |  |  | Send targets previously stored with SMART_ACTION_STORE_TARGET, to another npc/go.<br>The other npc/go can then access them as if it was its own stored list. |
| 101 | SMART_ACTION_SET_HOME_POS |  |  |  |  |  |  | Set target creatures home pos. to:<br>SMART_TARGET_SELF (1) - creatures current World pos.<br>SMART_TARGET_POSITION (8) - World pos. from **target_type**<br> NOT SMART_TARGET_NONE (!0) - targets current World pos. |
| 102 | SMART_ACTION_SET_HEALTH_REGEN | enable? (0/1) |  |  |  |  |  | Enable/Disable health regeneration for target creature. |
| 103 | SMART_ACTION_SET_ROOT | enable? (0/1) |  |  |  |  |  | Root/Unroot target creature. |
| 104 | :x: SMART_ACTION_SET_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 105 | :x: SMART_ACTION_ADD_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 106 | :x: SMART_ACTION_REMOVE_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 107 | SMART_ACTION_SUMMON_CREATURE_GROUP | [groupID](../world/creature_summon_groups#groupid) | attackInvoker? (0/1) |  |  |  |  | target not used |
| 108 | SMART_ACTION_SET_POWER | [PowerType](#powertype) | new power |  |  |  |  |  |
| 109 | SMART_ACTION_ADD_POWER | [PowerType](#powertype) | power to add |  |  |  |  |  |
| 110 | SMART_ACTION_REMOVE_POWER | [PowerType](#powertype) | power to remove |  |  |  |  |  |
| 111 | SMART_ACTION_GAME_EVENT_STOP | [eventEntry](../world/game_event#evententry) |  |  |  |  |  |  |
| 112 | SMART_ACTION_GAME_EVENT_START | [eventEntry](../world/game_event#evententry) |  |  |  |  |  |  |
| 113 | SMART_ACTION_START_CLOSEST_WAYPOINT | [entry1](../world/waypoints#entry) | [entry2](../world/waypoints#entry) | [entry3](../world/waypoints#entry) | [entry4](../world/waypoints#entry) | [entry5](../world/waypoints#entry) | [entry6](../world/waypoints#entry) | Make target creature follow waypoint path closest to its location. |
| 114 | SMART_ACTION_MOVE_OFFSET |  |  |  |  |  |  | Use SMART_TARGET_SELF (1) _and also_ set target World pos. to use as offset. |
| 115 | SMART_ACTION_RANDOM_SOUND | [SoundEntry ID1](/files/DBC/335/soundentries#id) | [SoundEntry ID2](/files/DBC/335/soundentries#id) | [SoundEntry ID3](/files/DBC/335/soundentries#id) | [SoundEntry ID4](/files/DBC/335/soundentries#id) | onlySelf? (0/1) | distantSound? (0/1) | Play random sound from list. |
| 116 | SMART_ACTION_SET_CORPSE_DELAY | time | includeDecayRatio? (0/1) |  |  |  |  | Set corpse despawn for target creature. |
| 117 | SMART_ACTION_DISABLE_EVADE | disabled? (0/1) |  |  |  |  |  | Disable/Enable evade mode for target creature. |
| 118 | SMART_ACTION_GO_SET_GO_STATE | [state](#gostate) |  |  |  |  |  | Set state for target gameobject. |
| 119 | :x: SMART_ACTION_SET_CAN_FLY |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 120 | :x: SMART_ACTION_REMOVE_AURAS_BY_TYPE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 121 | :x: SMART_ACTION_SET_SIGHT_DIST |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 122 | :x: SMART_ACTION_FLEE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 123 | SMART_ACTION_ADD_THREAT | flat incr. | flat decr. |  |  |  |  | Change target threat. |
| 124 | SMART_ACTION_LOAD_EQUIPMENT | [equipment ID](../world/creature_equip_template#id) | forceUnequip? (0/1) |  |  |  |  | Load equipment on target creature. |
| 125 | SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT | min. id | max. id |  |  |  |  |  |
| 126 | :x: SMART_ACTION_REMOVE_ALL_GAMEOBJECTS |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 127 | SMART_ACTION_PAUSE_MOVEMENT | [MovementSlot](#movementslot) | pause in ms | force? (0/1) |  |  |  |  |
| 128 | :x: SMART_ACTION_PLAY_ANIMKIT |  |  |  |  |  |  | don't use on 3.3.5a |
| 129 | :x: SMART_ACTION_SCENE_PLAY |  |  |  |  |  |  | don't use on 3.3.5a |
| 130 | :x: SMART_ACTION_SCENE_CANCEL |  |  |  |  |  |  | don't use on 3.3.5a |
| 131 | SMART_ACTION_SPAWN_SPAWNGROUP | [groupId](../world/spawn_group_template#groupid) | minDelay in sec | maxDelay in sec | [spawnFlags](#smartspawnflags) |  |  |  |
| 132 | SMART_ACTION_DESPAWN_SPAWNGROUP | [groupId](../world/spawn_group_template#groupid) | minDelay in sec | maxDelay in sec | [spawnFlags](#smartspawnflags) |  |  |  |
| 133 | SMART_ACTION_RESPAWN_BY_SPAWNID | type:<br>0 - [creature](../world/creature)<br>1 - [gameobject](../world/gameobject) | guid |  |  |  |  | Self or target determines the map to repsawn on. |
| 134 | SMART_ACTION_INVOKER_CAST | [Spell ID](/files/DBC/335/spell#id) | [CastFlags](#smartcastflags) | [TriggeredFlags](#triggercastflags) | maxTargets (0: all) |  |  | If avaliable, last invoker will cast spell ID with castFlags on targets. |
| 135 | SMART_ACTION_PLAY_CINEMATIC | [CinematicSequence ID](/files/DBC/335/cinematicsequences#id) |  |  |  |  |  | Play cinematic for target player. |
| 136 | SMART_ACTION_SET_MOVEMENT_SPEED | [MovementType](#movementtype) | speedInteger | speedInteger |  |  |  | Set movement speed of target creature. |
| 137 | :x: SMART_ACTION_PLAY_SPELL_VISUAL_KIT | [SpellVisualKit ID](/files/DBC/335/spellvisualkit#id) |  |  |  |  |  | RESERVED, PENDING CHERRYPICK |
| 138 | SMART_ACTION_OVERRIDE_LIGHT | [AreaTable ID](/files/DBC/335/areatable#id) | area [Light ID](/files/DBC/335/light#id) | new [Light ID](/files/DBC/335/light#id) | fadeIn time in ms |  |  | Override skybox visual in area. |
| 139 | SMART_ACTION_OVERRIDE_WEATHER | [AreaTable ID](/files/DBC/335/areatable#id) | [Weather ID](/files/DBC/335/weather#id) | intensity (0: low - 1: full) |  |  |  | Override weather in area. |
| 140 | :x: SMART_ACTION_SET_AI_ANIM_KIT |  |  |  |  |  |  | DEPRECATED, DO REUSE  |
| 141 | SMART_ACTION_SET_HOVER | enable? (01/) |  |  |  |  |  | Enable/Disable target unit hover. |
| 142 | SMART_ACTION_SET_HEALTH_PCT | percent |  |  |  |  |  | Set target units current health percentage. |
| 143 | :x: SMART_ACTION_CREATE_CONVERSATION |  |  |  |  |  |  | don't use on 3.3.5a |
| 144 | SMART_ACTION_SET_IMMUNE_PC | enable? (0/1) |  |  |  |  |  | Enable/Disable target unit immunity to players. |
| 145 | SMART_ACTION_SET_IMMUNE_NPC | enable? (0/1) |  |  |  |  |  |  |
| 146 | SMART_ACTION_SET_UNINTERACTIBLE | enable? (0/1) |  |  |  |  |  | Make/Reset target unit uninteractible. |
| 147 | SMART_ACTION_ACTIVATE_GAMEOBJECT | [action](#goactions) |  |  |  |  |  |  |
| 148 | SMART_ACTION_ADD_TO_STORED_TARGET_LIST | varID |  |  |  |  |  |  |
| 149 | :x: SMART_ACTION_BECOME_PERSONAL_CLONE_FOR_PLAYER |  |  |  |  |  |  | don't use on 3.3.5a |
| 150 | :x: SMART_ACTION_TRIGGER_GAME_EVENT | eventId | useSaiTargetAsGameEventSource |  |  |  |  | RESERVED, PENDING CHERRYPICK |
| 151 | :x: SMART_ACTION_DO_ACTION | actionId |  |  |  |  |  | RESERVED, PENDING CHERRYPICK |
{.dense}

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
| 8 | SMART_TARGET_POSITION |  |  |  |  | [x y z o](/how-to/worldposition) | use xyz from event params |
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

## Additional Descriptions

### SpellSchoolMask
[`enum SpellSchools`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L303-L313)
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

&nbsp;

### PowerType
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

### MovementType
[`enum MovementGeneratorType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L26-L48)
| ID | Name |
|----|------|
| 0 | IDLE_MOTION_TYPE |
| 1 | RANDOM_MOTION_TYPE |
| 2 | WAYPOINT_MOTION_TYPE |
| 3 | MAX_DB_MOTION_TYPE |
| 4 | CONFUSED_MOTION_TYPE |
| 5 | CHASE_MOTION_TYPE |
| 6 | HOME_MOTION_TYPE |
| 7 | FLIGHT_MOTION_TYPE |
| 8 | POINT_MOTION_TYPE |
| 9 | FLEEING_MOTION_TYPE |
| 10 | DISTRACT_MOTION_TYPE |
| 11 | ASSISTANCE_MOTION_TYPE |
| 12 | ASSISTANCE_DISTRACT_MOTION_TYPE |
| 13 | TIMED_FLEEING_MOTION_TYPE |
| 14 | FOLLOW_MOTION_TYPE |
| 15 | ROTATE_MOTION_TYPE |
| 16 | EFFECT_MOTION_TYPE |
| 17 | SPLINE_CHAIN_MOTION_TYPE |
| 18 | FORMATION_MOTION_TYPE |
{.dense}

&nbsp;

### MovementSlot
[`enum MovementSlot`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Movement/MovementDefines.h#L63-L68)
| ID | Name | Comment |
|----|------|---------|
| 0 | MOTION_SLOT_DEFAULT | idle, follow, etc. |
| 1 | MOTION_SLOT_ACTIVE | point movement |
{.dense}

&nbsp;

### LootState
[`enum LootState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/GameObject/GameObject.h#L74-L79)
| ID | Name | Comment |
|----|------|---------|
| 1 | GO_NOT_READY |  |
| 2 | GO_READY | can be ready but despawned, and then not possible activate until spawn |
| 3 | GO_ACTIVATE |  |
| 4 | GO_JUST_DEACTIVATED |  |
{.dense}

&nbsp;

### GOState
[`enum GOState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h.h#L1655-L1660)
| ID | Name | Comment |
|----|------|---------|
| 0 | GO_STATE_ACTIVE | show in world as used and not reset (closed door open) |
| 1 | GO_STATE_READY | show in world as ready (closed door close) |
| 2 | GO_STATE_DESTROYED | show the object in-game as already used and not yet reset (e.g. door opened by a cannon blast) |
{.dense}

&nbsp;

### GOActions
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

&nbsp;

### ReactState
[`enum ReactStates`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L406-L411)
| ID | Name | Comment |
|----|------|---------|
| 0 | REACT_PASSIVE | Does not defend or attack at all. Does nothing. |
| 1 | REACT_DEFENSIVE | Only attacks back when attacked. |
| 2 | REACT_AGGRESSIVE | Will attack if on threat list and in threat radius. (default) |
{.dense}

&nbsp;

### SmartSpawnFlags
[`enum SMARTAI_SPAWN_FLAGS`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1196-L1202)
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | SMARTAI_SPAWN_FLAG_IGNORE_RESPAWN |
| 2 | 0x02 | SMARTAI_SPAWN_FLAG_FORCE_SPAWN |
| 4 | 0x04 | SMARTAI_SPAWN_FLAG_NOSAVE_RESPAWN |
{.dense}

&nbsp;

### SmartCastFlags
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

&nbsp;

### TriggerCastFlags
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

&nbsp;

### SummonType
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

&nbsp;

### GOSummonType
[`enum GOSummonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Object/ObjectDefines.h#L85-L89)
| ID | Name | Comment |
|----|------|---------|
| 0 | GO_SUMMON_TIMED_OR_CORPSE_DESPAWN | despawns after a specified time OR when the summoner dies |
| 1 | GO_SUMMON_TIMED_DESPAWN | despawns after a specified time |
{.dense}

&nbsp;

### EncounterState
[`enum EncounterState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Instances/InstanceScript.h#L68-L76)
| ID | Name |
|----|------|
| 0 | NOT_STARTED |
| 1 | IN_PROGRESS |
| 2 | FAIL |
| 3 | DONE |
| 4 | SPECIAL |
{.dense}

&nbsp;

### SheathState
[`enum SheathState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L96-L103)
| ID | Name | Comment |
|----|------|---------|
| 0 | SHEATH_STATE_UNARMED | non prepared weapon |
| 1 | SHEATH_STATE_MELEE | prepared melee weapon |
| 2 | SHEATH_STATE_RANGED | prepared ranged weapon |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
