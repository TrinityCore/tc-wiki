---
title: smart_scripts
description: 
published: true
date: 2023-07-16T17:06:17.171Z
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
| ID | Name | action_param1 | action_param2 | action_param3 | action_param4 | action_param5 | action_param6 | Comment |
|----|------|---------------|---------------|---------------|---------------|---------------|---------------|---------|
| 0 | SMART_ACTION_NONE |  |  |  |  |  |  | No action |
| 1 | SMART_ACTION_TALK |  |  |  |  |  |  | groupID from creature_text, duration to wait before TEXT_OVER event is triggered, useTalkTarget (0/1) - use target as talk target |
| 2 | SMART_ACTION_SET_FACTION |  |  |  |  |  |  | FactionId (or 0 for default) |
| 3 | SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL |  |  |  |  |  |  | Creature_template entry(param1) OR ModelId (param2) (or 0 for both to demorph) |
| 4 | SMART_ACTION_SOUND |  |  |  |  |  |  | SoundId, onlySelf |
| 5 | SMART_ACTION_PLAY_EMOTE |  |  |  |  |  |  | EmoteId |
| 6 | SMART_ACTION_FAIL_QUEST |  |  |  |  |  |  | QuestID |
| 7 | SMART_ACTION_OFFER_QUEST |  |  |  |  |  |  | QuestID, directAdd |
| 8 | SMART_ACTION_SET_REACT_STATE |  |  |  |  |  |  | state |
| 9 | SMART_ACTION_ACTIVATE_GOBJECT |  |  |  |  |  | |
| 10 | SMART_ACTION_RANDOM_EMOTE |  |  |  |  |  |  | EmoteId1, EmoteId2, EmoteId3... |
| 11 | SMART_ACTION_CAST |  |  |  |  |  |  | SpellId, CastFlags, TriggeredFlags |
| 12 | SMART_ACTION_SUMMON_CREATURE |  |  |  |  |  |  | CreatureID, summonType, duration in ms, attackInvoker, flags(SmartActionSummonCreatureFlags) |
| 13 | SMART_ACTION_THREAT_SINGLE_PCT |  |  |  |  |  |  | Threat% |
| 14 | SMART_ACTION_THREAT_ALL_PCT |  |  |  |  |  |  | Threat% |
| 15 | SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS |  |  |  |  |  |  | QuestID |
| 16 | SMART_ACTION_RESERVED_16 |  |  |  |  |  |  | used on 4.3.4 and higher scripts |
| 17 | SMART_ACTION_SET_EMOTE_STATE |  |  |  |  |  |  | emoteID |
| 18 | SMART_ACTION_SET_UNIT_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 19 | SMART_ACTION_REMOVE_UNIT_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 20 | SMART_ACTION_AUTO_ATTACK |  |  |  |  |  |  | AllowAttackState (0 = stop attack, anything else means continue attacking) |
| 21 | SMART_ACTION_ALLOW_COMBAT_MOVEMENT |  |  |  |  |  |  | AllowCombatMovement (0 = stop combat based movement, anything else continue attacking) |
| 22 | SMART_ACTION_SET_EVENT_PHASE |  |  |  |  |  |  | Phase |
| 23 | SMART_ACTION_INC_EVENT_PHASE |  |  |  |  |  |  | Value (may be negative to decrement phase, should not be 0) |
| 24 | SMART_ACTION_EVADE |  |  |  |  |  |  | toRespawnPosition (0 = Move to RespawnPosition, 1 = Move to last stored home position) |
| 25 | SMART_ACTION_FLEE_FOR_ASSIST |  |  |  |  |  |  | With Emote |
| 26 | SMART_ACTION_CALL_GROUPEVENTHAPPENS |  |  |  |  |  |  | QuestID |
| 27 | SMART_ACTION_COMBAT_STOP |  |  |  |  |  | |
| 28 | SMART_ACTION_REMOVEAURASFROMSPELL |  |  |  |  |  |  | Spellid (0 removes all auras), charges (0 removes aura) |
| 29 | SMART_ACTION_FOLLOW |  |  |  |  |  |  | Distance (0 = default), Angle (0 = default), EndCreatureEntry, credit, creditType (0monsterkill, 1event) |
| 30 | SMART_ACTION_RANDOM_PHASE |  |  |  |  |  |  | PhaseId1, PhaseId2, PhaseId3... |
| 31 | SMART_ACTION_RANDOM_PHASE_RANGE |  |  |  |  |  |  | PhaseMin, PhaseMax |
| 32 | SMART_ACTION_RESET_GOBJECT |  |  |  |  |  | |
| 33 | SMART_ACTION_CALL_KILLEDMONSTER |  |  |  |  |  |  | CreatureId, |
| 34 | SMART_ACTION_SET_INST_DATA |  |  |  |  |  |  | Field, Data, Type (0 = SetData, 1 = SetBossState) |
| 35 | SMART_ACTION_SET_INST_DATA64 |  |  |  |  |  |  | Field, |
| 36 | SMART_ACTION_UPDATE_TEMPLATE |  |  |  |  |  |  | Entry |
| 37 | SMART_ACTION_DIE |  |  |  |  |  |  | No Params |
| 38 | SMART_ACTION_SET_IN_COMBAT_WITH_ZONE |  |  |  |  |  |  | No Params |
| 39 | SMART_ACTION_CALL_FOR_HELP |  |  |  |  |  |  | Radius, With Emote |
| 40 | SMART_ACTION_SET_SHEATH |  |  |  |  |  |  | Sheath (0-unarmed, 1-melee, 2-ranged) |
| 41 | SMART_ACTION_FORCE_DESPAWN |  |  |  |  |  |  | timer |
| 42 | SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL |  |  |  |  |  |  | MinHpValue(+pct, -flat) |
| 43 | SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL |  |  |  |  |  |  | Creature_template entry(param1) OR ModelId (param2) (or 0 for both to dismount) |
| 44 | SMART_ACTION_SET_INGAME_PHASE_MASK |  |  |  |  |  |  | mask |
| 45 | SMART_ACTION_SET_DATA |  |  |  |  |  |  | Field, Data (only creature @todo) |
| 46 | SMART_ACTION_ATTACK_STOP |  |  |  |  |  | |
| 47 | SMART_ACTION_SET_VISIBILITY |  |  |  |  |  |  | on/off |
| 48 | SMART_ACTION_SET_ACTIVE |  |  |  |  |  |  | on/off |
| 49 | SMART_ACTION_ATTACK_START |  |  |  |  |  | |
| 50 | SMART_ACTION_SUMMON_GO |  |  |  |  |  |  | GameObjectID, DespawnTime in s |
| 51 | SMART_ACTION_KILL_UNIT |  |  |  |  |  | |
| 52 | SMART_ACTION_ACTIVATE_TAXI |  |  |  |  |  |  | TaxiID |
| 53 | SMART_ACTION_WP_START |  |  |  |  |  |  | run/walk, pathID, canRepeat, quest, despawntime |
| 54 | SMART_ACTION_WP_PAUSE |  |  |  |  |  |  | time |
| 55 | SMART_ACTION_WP_STOP |  |  |  |  |  |  | despawnTime, quest, fail? |
| 56 | SMART_ACTION_ADD_ITEM |  |  |  |  |  |  | itemID, count |
| 57 | SMART_ACTION_REMOVE_ITEM |  |  |  |  |  |  | itemID, count |
| 58 | SMART_ACTION_INSTALL_AI_TEMPLATE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 59 | SMART_ACTION_SET_RUN |  |  |  |  |  |  | 0/1 |
| 60 | SMART_ACTION_SET_DISABLE_GRAVITY |  |  |  |  |  |  | 0/1 |
| 61 | SMART_ACTION_SET_SWIM |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 62 | SMART_ACTION_TELEPORT |  |  |  |  |  |  | mapID, |
| 63 | SMART_ACTION_SET_COUNTER |  |  |  |  |  |  | id, value, reset (0/1) |
| 64 | SMART_ACTION_STORE_TARGET_LIST |  |  |  |  |  |  | varID, |
| 65 | SMART_ACTION_WP_RESUME |  |  |  |  |  |  | none |
| 66 | SMART_ACTION_SET_ORIENTATION |  |  |  |  |  | |
| 67 | SMART_ACTION_CREATE_TIMED_EVENT |  |  |  |  |  |  | id, InitialMin, InitialMax, RepeatMin(only if it repeats), RepeatMax(only if it repeats), chance |
| 68 | SMART_ACTION_PLAYMOVIE |  |  |  |  |  |  | entry |
| 69 | SMART_ACTION_MOVE_TO_POS |  |  |  |  |  |  | PointId, transport, disablePathfinding, ContactDistance |
| 70 | SMART_ACTION_ENABLE_TEMP_GOBJ |  |  |  |  |  |  | despawnTimer (sec) |
| 71 | SMART_ACTION_EQUIP |  |  |  |  |  |  | entry, slotmask slot1, slot2, slot3   , only slots with mask set will be sent to client, bits are 1, 2, 4, leaving mask 0 is defaulted to mask 7 (send all), slots1-3 are only used if no entry is set |
| 72 | SMART_ACTION_CLOSE_GOSSIP |  |  |  |  |  |  | none |
| 73 | SMART_ACTION_TRIGGER_TIMED_EVENT |  |  |  |  |  |  | id(>1) |
| 74 | SMART_ACTION_REMOVE_TIMED_EVENT |  |  |  |  |  |  | id(>1) |
| 75 | SMART_ACTION_ADD_AURA |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 76 | SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 77 | SMART_ACTION_RESET_SCRIPT_BASE_OBJECT |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 78 | SMART_ACTION_CALL_SCRIPT_RESET |  |  |  |  |  |  | none |
| 79 | SMART_ACTION_SET_RANGED_MOVEMENT |  |  |  |  |  |  | Distance, angle |
| 80 | SMART_ACTION_CALL_TIMED_ACTIONLIST |  |  |  |  |  |  | ID (overwrites already running actionlist), stop after combat?(0/1), timer update type(0-OOC, 1-IC, 2-ALWAYS) |
| 81 | SMART_ACTION_SET_NPC_FLAG |  |  |  |  |  |  | Flags |
| 82 | SMART_ACTION_ADD_NPC_FLAG |  |  |  |  |  |  | Flags |
| 83 | SMART_ACTION_REMOVE_NPC_FLAG |  |  |  |  |  |  | Flags |
| 84 | SMART_ACTION_SIMPLE_TALK |  |  |  |  |  |  | groupID, can be used to make players say groupID, Text_over event is not triggered, whisper can not be used (Target units will say the text) |
| 85 | SMART_ACTION_SELF_CAST |  |  |  |  |  |  | spellID, castFlags |
| 86 | SMART_ACTION_CROSS_CAST |  |  |  |  |  |  | spellID, castFlags, CasterTargetType, CasterTarget param1, CasterTarget param2, CasterTarget param3, ( + the origonal target fields as Destination target),   CasterTargets will cast spellID on all Targets  |(use with caution if targeting multiple * multiple units)
| 87 | SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST |  |  |  |  |  |  | script9 ids 1-9 |
| 88 | SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST |  |  |  |  |  |  | script9 id min, max |
| 89 | SMART_ACTION_RANDOM_MOVE |  |  |  |  |  |  | maxDist |
| 90 | SMART_ACTION_SET_UNIT_FIELD_BYTES_1 |  |  |  |  |  |  | bytes, target |
| 91 | SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1 |  |  |  |  |  |  | bytes, target |
| 92 | SMART_ACTION_INTERRUPT_SPELL |  |  |  |  |  |  | 93 | SMART_ACTION_SEND_GO_CUSTOM_ANIM                        UNUSED, DO NOT REUSE |
| 94 | SMART_ACTION_SET_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 95 | SMART_ACTION_ADD_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 96 | SMART_ACTION_REMOVE_DYNAMIC_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 97 | SMART_ACTION_JUMP_TO_POS |  |  |  |  |  |  | speedXY, speedZ, targetX, targetY, targetZ |
| 98 | SMART_ACTION_SEND_GOSSIP_MENU |  |  |  |  |  |  | menuId, optionId |
| 99 | SMART_ACTION_GO_SET_LOOT_STATE |  |  |  |  |  |  | state |
| 100 | SMART_ACTION_SEND_TARGET_TO_TARGET |  |  |  |  |  |  | id |
| 101 | SMART_ACTION_SET_HOME_POS |  |  |  |  |  |  | none |
| 102 | SMART_ACTION_SET_HEALTH_REGEN |  |  |  |  |  |  | 0/1 |
| 103 | SMART_ACTION_SET_ROOT |  |  |  |  |  |  | off/on |
| 104 | SMART_ACTION_SET_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 105 | SMART_ACTION_ADD_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 106 | SMART_ACTION_REMOVE_GO_FLAG |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 107 | SMART_ACTION_SUMMON_CREATURE_GROUP |  |  |  |  |  |  | Group, attackInvoker |
| 108 | SMART_ACTION_SET_POWER |  |  |  |  |  |  | PowerType, newPower |
| 109 | SMART_ACTION_ADD_POWER |  |  |  |  |  |  | PowerType, newPower |
| 110 | SMART_ACTION_REMOVE_POWER |  |  |  |  |  |  | PowerType, newPower |
| 111 | SMART_ACTION_GAME_EVENT_STOP |  |  |  |  |  |  | GameEventId |
| 112 | SMART_ACTION_GAME_EVENT_START |  |  |  |  |  |  | GameEventId |
| 113 | SMART_ACTION_START_CLOSEST_WAYPOINT |  |  |  |  |  |  | wp1, wp2, wp3, wp4, wp5, wp6, wp7 |
| 114 | SMART_ACTION_MOVE_OFFSET |  |  |  |  |  |  | 115 | SMART_ACTION_RANDOM_SOUND                              soundId1, soundId2, soundId3, soundId4, soundId5, onlySelf |
| 116 | SMART_ACTION_SET_CORPSE_DELAY |  |  |  |  |  |  | timer |
| 117 | SMART_ACTION_DISABLE_EVADE |  |  |  |  |  |  | 0/1 (1 = disabled, 0 = enabled) |
| 118 | SMART_ACTION_GO_SET_GO_STATE |  |  |  |  |  |  | state |
| 119 | SMART_ACTION_SET_CAN_FLY |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 120 | SMART_ACTION_REMOVE_AURAS_BY_TYPE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 121 | SMART_ACTION_SET_SIGHT_DIST |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 122 | SMART_ACTION_FLEE |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 123 | SMART_ACTION_ADD_THREAT |  |  |  |  |  |+threat, -threat |
| 124 | SMART_ACTION_LOAD_EQUIPMENT |  |  |  |  |  |  | id |
| 125 | SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT |  |  |  |  |  |  | id min range, id max range |
| 126 | SMART_ACTION_REMOVE_ALL_GAMEOBJECTS |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| 127 | SMART_ACTION_PAUSE_MOVEMENT |  |  |  |  |  |  | MovementSlot (default = 0, active = 1, controlled = 2), PauseTime (ms), Force |
| 128 | SMART_ACTION_PLAY_ANIMKIT |  |  |  |  |  |  | don't use on 3.3.5a |
| 129 | SMART_ACTION_SCENE_PLAY |  |  |  |  |  |  | don't use on 3.3.5a |
| 130 | SMART_ACTION_SCENE_CANCEL |  |  |  |  |  |  | don't use on 3.3.5a |
| 131 | SMART_ACTION_SPAWN_SPAWNGROUP |  |  |  |  |  |  | Group ID, min secs, max secs, spawnflags |
| 132 | SMART_ACTION_DESPAWN_SPAWNGROUP |  |  |  |  |  |  | Group ID, min secs, max secs, spawnflags |
| 133 | SMART_ACTION_RESPAWN_BY_SPAWNID |  |  |  |  |  |  | spawnType, spawnId |
| 134 | SMART_ACTION_INVOKER_CAST |  |  |  |  |  |  | spellID, castFlags |
| 135 | SMART_ACTION_PLAY_CINEMATIC |  |  |  |  |  |  | entry, cinematic |
| 136 | SMART_ACTION_SET_MOVEMENT_SPEED |  |  |  |  |  |  | movementType, speedInteger, speedFraction |
| 137 | SMART_ACTION_PLAY_SPELL_VISUAL_KIT |  |  |  |  |  |  | spellVisualKitId (RESERVED, PENDING CHERRYPICK) |
| 138 | SMART_ACTION_OVERRIDE_LIGHT |  |  |  |  |  |  | zoneId, overrideLightID, transitionMilliseconds |
| 139 | SMART_ACTION_OVERRIDE_WEATHER |  |  |  |  |  |  | zoneId, weatherId, intensity |
| 140 | SMART_ACTION_SET_AI_ANIM_KIT |  |  |  |  |  |  | DEPRECATED, DO REUSE (it was never used in any branch, treat as free action id) |
| 141 | SMART_ACTION_SET_HOVER |  |  |  |  |  |  | 0/1 |
| 142 | SMART_ACTION_SET_HEALTH_PCT |  |  |  |  |  |  | percent |
| 143 | SMART_ACTION_CREATE_CONVERSATION |  |  |  |  |  |  | don't use on 3.3.5a |
| 144 | SMART_ACTION_SET_IMMUNE_PC |  |  |  |  |  |  | 0/1 |
| 145 | SMART_ACTION_SET_IMMUNE_NPC |  |  |  |  |  |  | 0/1 |
| 146 | SMART_ACTION_SET_UNINTERACTIBLE |  |  |  |  |  |  | 0/1 |
| 147 | SMART_ACTION_ACTIVATE_GAMEOBJECT |  |  |  |  |  |  | GameObjectActions |
| 148 | SMART_ACTION_ADD_TO_STORED_TARGET_LIST |  |  |  |  |  |  | varID |
| 149 | SMART_ACTION_BECOME_PERSONAL_CLONE_FOR_PLAYER |  |  |  |  |  |  | don't use on 3.3.5a |
| 150 | SMART_ACTION_TRIGGER_GAME_EVENT |  |  |  |  |  |  | eventId, useSaiTargetAsGameEventSource (RESERVED, PENDING CHERRYPICK) |
| 151 | SMART_ACTION_DO_ACTION |  |  |  |  |  |  | actionId (RESERVED, PENDING CHERRYPICK) |
{.dense}

&nbsp;

### target_type
| ID | Name | target_param1 | target_param2 |target_param3 | target_param4 | World Pos. | Comment |
|----|------|---------------|---------------|--------------|---------------|------------|---------|
| 0 | SMART_TARGET_NONE |  |  |  |  |  | NONE |
| 1 | SMART_TARGET_SELF |  |  |  |  |  | Self cast |
| 2 | SMART_TARGET_VICTIM |  |  |  |  |  | Our current target (ie: highest aggro) |
| 3 | SMART_TARGET_HOSTILE_SECOND_AGGRO | maxDist | playerOnly? (0/1) | [powerType](#powertypes) + 1 (0: any) |  |  | Second highest aggro|
| 4 | SMART_TARGET_HOSTILE_LAST_AGGRO | maxDist | playerOnly? (0/1) | [powerType](#powertypes) + 1 (0: any) |  |  | Dead last on aggro |
| 5 | SMART_TARGET_HOSTILE_RANDOM | maxDist | playerOnly? (0/1) | [powerType](#powertypes) + 1 (0: any) |  |  | Just any random target on our threat list |
| 6 | SMART_TARGET_HOSTILE_RANDOM_NOT_TOP | maxDist | playerOnly? (0/1) | [powerType](#powertypes) + 1 (0: any) |  |  | Any random target except top threat |
| 7 | SMART_TARGET_ACTION_INVOKER |  |  |  |  |  | Unit who caused this Event to occur |
| 8 | SMART_TARGET_POSITION |  |  |  |  | x y z o | use xyz from event params |
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

### PowerTypes
| Value | Name |
|-------|------|
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