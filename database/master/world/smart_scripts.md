---
title: smart_scripts
description: 
published: true
date: 2022-11-21T21:42:27.440Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:32.378Z
---

<a href="https://trinitycore.info/en/database/master/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Manual editing smart_scripts table can be tedious and difficult, for easier writing scripts you can use additional TrinityCore tools like [WoW Database Editor](https://github.com/TrinityCore/WoWDatabaseEditor/).
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entryorguid](#entryorguid) | bigint | signed | PRI | NO | 0 |  |  |
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
| [event_param_string](##event_type) | varchar(255) |  |  | NO | '' |  |  |
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
| [comment](#comment) | mediumtext |  |  | NO |  |  | Event Comment |
&nbsp;
## Description of fields

### entryorguid
* Value depends on [source_type](#source_type).
* For [source_type](#source_type) **SMART_SCRIPT_TYPE_CREATURE** / **SMART_SCRIPT_TYPE_GAMEOBJECT**:
  * entryorguid > 0: [creature_template.entry](/en/database/master/world/creature_template#entry) / [gameobject_template.entry](/en/database/master/world/gameobject_template#entry).
  * entryorguid < 0: [creature.guid](/en/database/master/world/creature#guid) / [gameobject.guid](/en/database/master/world/gameobject#guid).
&nbsp;

### source_type
Object type (creature, gameobject, quest, etc.).
| Name | Value | Source | 
| :---  | ---: | :--- |
| SMART_SCRIPT_TYPE_CREATURE | 0 | [creature_template.entry](/en/database/master/world/creature_template#entry) or [creature.guid](/en/database/master/world/creature#guid) |
| SMART_SCRIPT_TYPE_GAMEOBJECT | 1 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) or [gameobject.guid](/en/database/master/world/gameobject#guid) |
| SMART_SCRIPT_TYPE_AREATRIGGER | 2 | Areatrigger.db2 (ID) |
| :x: SMART_SCRIPT_TYPE_EVENT | 3 | |
| :x: SMART_SCRIPT_TYPE_GOSSIP | 4 | |
| SMART_SCRIPT_TYPE_QUEST | 5 | [quest_template.ID](/en/database/master/world/quest_template#id) |
| :x: SMART_SCRIPT_TYPE_SPELL | 6 | |
| :x: SMART_SCRIPT_TYPE_TRANSPORT | 7 | |
| :x: SMART_SCRIPT_TYPE_INSTANCE | 8 | |
| SMART_SCRIPT_TYPE_TIMED_ACTIONLIST | 9 | [smart_scripts.entryorguid](#entryorguid) |
| SMART_SCRIPT_TYPE_SCENE | 10 | [scene_template.id](/en/database/master/world/scene_template#id) |
| SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY | 11 | [areatrigger_template.Id](/en/database/master/world/areatrigger_template#id) (IsServerSide = 0) |
| SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY_SERVERSIDE | 12 | [areatrigger_template.Id](/en/database/master/world/areatrigger_template#id) (IsServerSide = 1) |

>Please note :x:means that the source_type is not (yet) implemented.
{.is-danger}

### id
Incremental id bound to each [entryorguid](#entryorguid) & [source_type](#source_type) (0, 1, 2, ...).
&nbsp;

### link
Simple event linking.
> The linked [id](#id) must use [event_type](#event_type) **SMART_EVENT_LINK (61)**.
{.is-info}

> **Example**: If id = 0 and link = 1, id = 1 will only be able to occur if id = 0 was triggered.

### event_phase_mask
Event can only occur if the source is in this event phase. The default event phase is **SMART_EVENT_PHASE_ALWAYS (0)**.

| Name | Flag | Hex | Comment |
| :--- | ---: | :--- | :--- |
| SMART_EVENT_PHASE_ALWAYS | 0 | 0x000 | Means all phases (1 ... 12) |
| SMART_EVENT_PHASE_1 | 1 | 0x001 | Phase 1 only. |
| SMART_EVENT_PHASE_2 | 2 | 0x002 | Phase 2 only. |
| SMART_EVENT_PHASE_3 | 4 | 0x004 | Phase 3 only. |
| SMART_EVENT_PHASE_4 | 8 | 0x008 | Phase 4 only. |
| SMART_EVENT_PHASE_5 | 16 | 0x010 | Phase 5 only. |
| SMART_EVENT_PHASE_6 | 32 | 0x020 | Phase 6 only. |
| SMART_EVENT_PHASE_7 | 64 | 0x040 | Phase 7 only. |
| SMART_EVENT_PHASE_8 | 128 | 0x080 | Phase 8 only. |
| SMART_EVENT_PHASE_9 | 256 | 0x100 | Phase 9 only. |
| SMART_EVENT_PHASE_10 | 512 | 0x200 | Phase 10 only. |
| SMART_EVENT_PHASE_11 | 1024 | 0x400 | Phase 11 only. |
| SMART_EVENT_PHASE_12 | 2048 | 0x800 | Phase 12 only. |
> **Example**: If we want an event to be able to occur only in event phases 1 and 4, event_phase_mask: **1 + 8 = 9**.

> **Example**: Event phase change:
>* If the script is in phase 0 and we want it to go to event phase 1, we have two choices:
>   * **SMART_ACTION_INC_PHASE** by 1 or **SMART_ACTION_SET_PHASE** 1
>* If the script is in phase 0 and we want to skip to phase 2:
>   * **SMART_ACTION_INC_PHASE** by 2 or **SMART_ACTION_SET_PHASE** 2
>* If the script is in phase 1 andwe  want to skip to phase 2:
>   * **SMART_ACTION_INC_PHASE** by 1 or **SMART_ACTION_SET_PHASE** 2

### event_chance
This is the probability of the event to occur as a percentage from 0-100. So, if you want the event to occur roughly half of the time, then set this to 50.
&nbsp;

### event_flags
| Name | Flag | Hex | Comment |
| :--- | ---: | :--- | :--- |
| SMART_EVENT_FLAG_NOT_REPEATABLE | 1 | 0x01 | Event can not repeat |
| SMART_EVENT_FLAG_DIFFICULTY_0 | 2 | 0x02 | Event only occurs in instance difficulty 0 |
| SMART_EVENT_FLAG_DIFFICULTY_1 | 4 | 0x04 | Event only occurs in instance difficulty 1 |
| SMART_EVENT_FLAG_DIFFICULTY_2 | 8 | 0x08 | Event only occurs in instance difficulty 2 |
| SMART_EVENT_FLAG_DIFFICULTY_3 | 16 | 0x10 | Event only occurs in instance difficulty 3 |
| SMART_EVENT_FLAG_RESERVED_5 | 32 | 0x20 | |
| SMART_EVENT_FLAG_RESERVED_6 | 64 | 0x40 | |
| SMART_EVENT_FLAG_DEBUG_ONLY | 128 | 0x80 | Event only occurs in debug build |
| SMART_EVENT_FLAG_DONT_RESET | 256 | 0x100 | Event will not reset in SmartScript::OnReset() |
| SMART_EVENT_FLAG_WHILE_CHARMED | 512 | 0x200 | Event occurs even if AI owner is charmed |

### event_type

&nbsp;

### action_type
*- no description -*
&nbsp;

### target_type
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
