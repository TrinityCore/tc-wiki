---
title: smart_scripts
description: 
published: true
date: 2023-11-01T19:35:35.667Z
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
| [Difficulties](#difficulties) | varchar(100) |  |  | NO | '' |  |  |
| [event_type](#event_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [event_phase_mask](#event_phase_mask) | smallint | unsigned |  | NO | 0 |  |  |
| [event_chance](#event_chance) | tinyint | unsigned |  | NO | 100 |  |  |
| [event_flags](#event_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [event_param1](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param2](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param3](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param4](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param5](#event_type) | int | unsigned |  | NO | 0 |  |  |
| [event_param_string](#event_type) | varchar(255) |  |  | NO | '' |  |  |
| [action_type](#action_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [action_param1](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param2](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param3](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param4](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param5](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param6](#action_type) | int | unsigned |  | NO | 0 |  |  |
| [action_param7](#action_type) | int | unsigned |  | NO | 0 |  |  |
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

| Name | Value | Source | Script name | Base Object |
| :---  | ---: | :--- | :--- | :--- |
| SMART_SCRIPT_TYPE_CREATURE | 0 | [creature_template.entry](/en/database/master/world/creature_template#entry) or [creature.guid](/en/database/master/world/creature#guid) | SmartAI ([creature_template.AIName](/en/database/master/world/creature_template#ainame)) | Creature |
| SMART_SCRIPT_TYPE_GAMEOBJECT | 1 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) or [gameobject.guid](/en/database/master/world/gameobject#guid) | SmartGameObjectAI ([gameobject_template.AIName](/en/database/master/world/gameobject_template#ainame)) | GameObject |
| SMART_SCRIPT_TYPE_AREATRIGGER | 2 | Areatrigger.db2 (ID) | SmartTrigger ([areatrigger_scripts.ScriptName](/en/database/master/world/areatrigger_scripts#scriptname)) | Player |
| SMART_SCRIPT_TYPE_EVENT | 3 | [event_script_names.Id](/en/database/master/world/event_script_names#id) | SmartEventTrigger ([event_script_names.ScriptName](/en/database/master/world/event_script_names#scriptname)) | Player, Creature or GameObject |
| :x: SMART_SCRIPT_TYPE_GOSSIP | 4 | | | |
| SMART_SCRIPT_TYPE_QUEST | 5 | [quest_template.ID](/en/database/master/world/quest_template#id) | SmartQuest ([quest_template_addon.ScriptName](/en/database/master/world/quest_template_addon#scriptname)) | Player |
| :x: SMART_SCRIPT_TYPE_SPELL | 6 | | | |
| :x: SMART_SCRIPT_TYPE_TRANSPORT | 7 | | | |
| :x: SMART_SCRIPT_TYPE_INSTANCE | 8 | | | |
| SMART_SCRIPT_TYPE_TIMED_ACTIONLIST | 9 | [smart_scripts.entryorguid](#entryorguid) | | Creature, GameObject or AreaTrigger |
| SMART_SCRIPT_TYPE_SCENE | 10 | [scene_template.id](/en/database/master/world/scene_template#id) | SmartScene ([scene_template.ScriptName](/en/database/master/world/scene_template#scriptname)) | Player |
| SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY | 11 | [areatrigger_template.Id](/en/database/master/world/areatrigger_template#id) (IsServerSide = 0) | SmartAreaTriggerAI ([areatrigger.ScriptName](/en/database/master/world/areatrigger#scriptname)) | AreaTrigger |
| SMART_SCRIPT_TYPE_AREATRIGGER_ENTITY_SERVERSIDE | 12 | [areatrigger_template.Id](/en/database/master/world/areatrigger_template#id) (IsServerSide = 1) | SmartAreaTriggerAI ([areatrigger.ScriptName](/en/database/master/world/areatrigger#scriptname)) | AreaTrigger |

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

### Difficulties
Comma-separated list of difficulties where only the event can occur. `''` means everywhere.
> **Examples**:
> * '' &rarr; Everywhere
> * '0' &rarr; Open world
> * '1,2' &rarr; Dungeon normal/heroic
> * '0,3' &rarr; Open world and Raid 10 Player
> * '3,4,5,6' &rarr; Raid 10/25 normal/heroic

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
| SMART_EVENT_FLAG_DIFFICULTY_0_DEPRECATED | 2 | 0x02 | UNUSED, DO NOT REUSE |
| SMART_EVENT_FLAG_DIFFICULTY_1_DEPRECATED | 4 | 0x04 | UNUSED, DO NOT REUSE |
| SMART_EVENT_FLAG_DIFFICULTY_2_DEPRECATED | 8 | 0x08 | UNUSED, DO NOT REUSE |
| SMART_EVENT_FLAG_DIFFICULTY_3_DEPRECATED | 16 | 0x10 | UNUSED, DO NOT REUSE |
| SMART_EVENT_FLAG_RESERVED_5 | 32 | 0x20 | |
| SMART_EVENT_FLAG_RESERVED_6 | 64 | 0x40 | |
| SMART_EVENT_FLAG_DEBUG_ONLY | 128 | 0x80 | Event only occurs in debug build |
| SMART_EVENT_FLAG_DONT_RESET | 256 | 0x100 | Event will not reset in SmartScript::OnReset() |
| SMART_EVENT_FLAG_WHILE_CHARMED | 512 | 0x200 | Event occurs even if AI owner is charmed |

### event_type
| Name | Value | Param1 | Param2 | Param3 | Param4 | Param5 | ParamString| Comment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
SMART_EVENT_UPDATE_IC | 0 | InitialMin | InitialMax | RepeatMin | RepeatMax | | | In combat |
SMART_EVENT_UPDATE_OOC | 1 | InitialMin | InitialMax | RepeatMin | RepeatMax | | | Out of combat 
SMART_EVENT_HEALTH_PCT | 2 | MinHpPct | MaxHpPct | RepeatMin | RepeatMax | | | Health percentage |
SMART_EVENT_MANA_PCT | 3 | MinManaPct | MaxManaPct | RepeatMin | RepeatMax | | | Mana percentage|
SMART_EVENT_AGGRO | 4 | | | | | | | On creature aggro |
SMART_EVENT_KILL | 5 | CooldownMin | CooldownMax | Player only (0/1) | [creature_template.entry](/en/database/master/world/creature_template#entry)<br/>*(If Param3 is 0)* | | | On creature kill |
SMART_EVENT_DEATH | 6 | | | | | | | On creature death |
SMART_EVENT_EVADE | 7 | | | | | | | On creature evade attack |
SMART_EVENT_SPELLHIT | 8 | SpellID | School | CooldownMin | CooldownMax | | | On spell hit |
SMART_EVENT_RANGE | 9 | MinDist | MaxDist | RepeatMin | RepeatMax | | | On target in range |
SMART_EVENT_OOC_LOS | 10 | HostilityMode:<ul><li>0 &rarr; Hostile</li><li>1 &rarr; NotHostile</li><li>2 &rarr; Any</li></ul> | MaxRange | CooldownMin | CooldownMax | Player only (0/1) | | On target in range (Out of combat) |
| SMART_EVENT_RESPAWN | 11 | Type:<ul><li>0 &rarr; None</li><li>1 &rarr; Map</li><li>2 &rarr; Area</li></ul> | MapId | ZoneId | | | | On spawn/respawn/summon |
| :warning: SMART_EVENT_TARGET_HEALTH_PCT | 12 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_VICTIM_CASTING | 13 | RepeatMin | RepeatMax | SpellID (0 any) | | | | On target casting spell |
| :warning: SMART_EVENT_FRIENDLY_HEALTH | 14 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_FRIENDLY_IS_CC | 15 | Radius | RepeatMin | RepeatMax | | | | On friendly in cc |
| SMART_EVENT_FRIENDLY_MISSING_BUFF | 16 | SpellID | Radius | RepeatMin | RepeatMax | | | On friendly lost buff |
| SMART_EVENT_SUMMONED_UNIT | 17 | [creature_template.entry](/en/database/master/world/creature_template#entry) (0 any) | CooldownMin | CooldownMax | | | | On summoned unit |
| :warning: SMART_EVENT_TARGET_MANA_PCT | 18 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_ACCEPTED_QUEST | 19 | QuestID (0 any) | RepeatMin | RepeatMax | | | | On target accepted quest |
| SMART_EVENT_REWARD_QUEST | 20 | QuestID (0 any) | RepeatMin | RepeatMax | | | | On target rewarded quest |
| SMART_EVENT_REACHED_HOME | 21 | | | | | | | On creature reached home |
| SMART_EVENT_RECEIVE_EMOTE | 22 | EmoteID (Emotes.db2) | CooldownMin | CooldownMax | | | | On emote received |
| SMART_EVENT_HAS_AURA | 23 | SpellID | Stacks | RepeatMin | RepeatMax | | | On creature has aura |
| SMART_EVENT_TARGET_BUFFED | 24 | SpellID | Stacks | RepeatMin | RepeatMax | | | On target buffed with spell |
| SMART_EVENT_RESET | 25 | | | | | | | After combat or on spawn/respawn |
| SMART_EVENT_IC_LOS | 26 | HostilityMode:<ul><li>0 &rarr; Hostile</li><li>1 &rarr; NotHostile</li><li>2 &rarr; Any</li></ul> | MaxRange | CooldownMin | CooldownMax | Player only (0/1) | | On target in range (In combat) |
| SMART_EVENT_PASSENGER_BOARDED | 27 | CooldownMin | CooldownMax | | | | | On passenger boarded |
| SMART_EVENT_PASSENGER_REMOVED | 28 | CooldownMin | CooldownMax | | | | | On passenger removed |
| SMART_EVENT_CHARMED | 29 | Event:<ul><li>0 &rarr; On apply</li><li>1 &rarr; On remove</li></ul> | | | | | |  On creature charmed |
| :warning: SMART_EVENT_CHARMED_TARGET | 30 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_SPELLHIT_TARGET | 31 | SpellID | School | RepeatMin | RepeatMax | | | On target spell hit |
| SMART_EVENT_DAMAGED | 32 | MinDmg | MaxDmg | RepeatMin | RepeatMax | | | On damaged |
| SMART_EVENT_DAMAGED_TARGET | 33 | MinDmg | MaxDmg | RepeatMin | RepeatMax | | | On target damaged |
| SMART_EVENT_MOVEMENTINFORM | 34 | [MovementType](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Movement/MovementDefines.h#L28):<ul><li>0 &rarr; Any</li><li>1 &rarr; Random</li><li>2 &rarr; Waypoint ([waypoint_data.point](/en/database/master/world/waypoint_data#point))</li><li>8 &rarr; Point</li><li>16 &rarr; Effect (Jump)</li></ul> | PointID (0xFFFFFFFF any) | | | | | On movement inform |
| SMART_EVENT_SUMMON_DESPAWNED | 35 | [creature_template.entry](/en/database/master/world/creature_template#entry) | CooldownMin | CooldownMax | | | | On summoned unit despawned |
| SMART_EVENT_CORPSE_REMOVED | 36 | | | | | | | On creature corpse removed |
| SMART_EVENT_AI_INIT | 37 | | | | | | | On AI init |
| SMART_EVENT_DATA_SET | 38 | Field | Value | CooldownMin | CooldownMax | | | On data set<br/>*(See SMART_ACTION_SET_DATA)* |
| :warning: SMART_EVENT_WAYPOINT_START | 39 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_WAYPOINT_REACHED | 40 | PointID (0xFFFFFFFF any) | PathID (0 any) | | | | | On creature waypoint ID reached |
| :x: SMART_EVENT_TRANSPORT_ADDPLAYER | 41 | | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_ADDCREATURE | 42 | Entry (0 any) | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_REMOVE_PLAYER | 43 | | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_RELOCATE | 44 | PointID | | | | | | Not yet implemented |
| :x: SMART_EVENT_INSTANCE_PLAYER_ENTER | 45 | Team (0 any) | CooldownMin | CooldownMax | | | | Not yet implemented |
| SMART_EVENT_AREATRIGGER_ONTRIGGER | 46 | TriggerId (0 any) | | | | | | On areatrigger triggered |
| SMART_EVENT_QUEST_ACCEPTED | 47 | | | | | | | On target quest accepted |
| SMART_EVENT_QUEST_OBJ_COMPLETION | 48 | [quest_objectives.ID](/en/database/master/world/quest_objectives#id) | | | | | | On target quest objective completed |
| SMART_EVENT_QUEST_COMPLETION | 49 | | | | | | | On target quest completed |
| SMART_EVENT_QUEST_REWARDED | 50 | | | | | | | On target quest rewarded |
| SMART_EVENT_QUEST_FAIL | 51 | | | | | | | On target quest failed |
| SMART_EVENT_TEXT_OVER | 52 | [creature_text.GroupID](/en/database/master/world/creature_text#groupid) | [creature_text.CreatureID](/en/database/master/world/creature_text#creatureid) (0 any) | | | | | On text over event triggered after SMART_ACTION_TALK |
| SMART_EVENT_RECEIVE_HEAL | 53 | MinHeal | MaxHeal | CooldownMin | CooldownMax | | | On creature received healing |
| SMART_EVENT_JUST_SUMMONED | 54 | | | | | | | On summon |
| SMART_EVENT_WAYPOINT_PAUSED | 55 | PointID (0xFFFFFFFF any) | PathID (0 any) | | | | | On creature waypoint ID paused |
| SMART_EVENT_WAYPOINT_RESUMED | 56 | PointID (0xFFFFFFFF any) | PathID (0 any) | | | | | On creature waypoint ID resumed |
| SMART_EVENT_WAYPOINT_STOPPED | 57 | PointID (0xFFFFFFFF any) | PathID (0 any) | | | | | On creature waypoint ID stopped |
| SMART_EVENT_WAYPOINT_ENDED | 58 | PointID (0xFFFFFFFF any) | PathID (0 any) | | | | | On creature waypoint ID ended |
| SMART_EVENT_TIMED_EVENT_TRIGGERED | 59 | Id | | | | | | On timed event triggered<br/>*(See SMART_ACTION_TRIGGER_TIMED_EVENT)* |
| SMART_EVENT_UPDATE | 60 | InitialMin | InitialMax | RepeatMin | RepeatMax | | | On event update |
| SMART_EVENT_LINK | 61 | | | | | | | Used to link together multiple events ([smart_scripts.link](#link)) |
| SMART_EVENT_GOSSIP_SELECT | 62 | [gossip_menu_option.MenuID](/en/database/master/world/gossip_menu_option#menuid) | [gossip_menu_option.OptionID](/en/database/master/world/gossip_menu_option#optionid) | | | | | On gossip option selected |
| SMART_EVENT_JUST_CREATED | 63 | | | | | | | On spawn/respawn/summon |
| SMART_EVENT_GOSSIP_HELLO | 64 | NoReportUse (for GOs):<ul><li>0 &rarr; On gossip hello and on report use<br/>*(Action could be executed twice)*</li><li>1 &rarr; On gossip hello</li><li>2 &rarr; On report use</li></ul> | | | | | | On gossip hello |
| SMART_EVENT_FOLLOW_COMPLETED | 65 | | | | | | | On follow completed |
| :warning: SMART_EVENT_EVENT_PHASE_CHANGE | 66 | | | | | | | UNUSED, DO NOT REUSE |
| :warning: SMART_EVENT_IS_BEHIND_TARGET | 67 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_GAME_EVENT_START | 68 | [game_event.eventEntry](/en/database/master/world/game_event#evententry) | | | | | | On game_event started |
| SMART_EVENT_GAME_EVENT_END | 69 | [game_event.eventEntry](/en/database/master/world/game_event#evententry) | | | | | | On game_event ended |
| SMART_EVENT_GO_LOOT_STATE_CHANGED | 70 | State:<ul><li>0 &rarr; Not Ready</li><li>1 &rarr; Ready</li><li>2 &rarr; Activacted</li><li>3 &rarr; Just deactivated</li></ul> | | | | | | On go state changed |
| SMART_EVENT_GO_EVENT_INFORM | 71 | EventId | | | | | | On go event inform |
| SMART_EVENT_ACTION_DONE | 72 | ActionId | | | | | | On action done<br/>*(See SMART_ACTION_DO_ACTION)* |
| SMART_EVENT_ON_SPELLCLICK | 73 | | | | | | | On spellclick |
| SMART_EVENT_FRIENDLY_HEALTH_PCT | 74 | MinHpPct | MaxHpPct | RepeatMin | RepeatMax | Radius | | On friendly health percentage |
| SMART_EVENT_DISTANCE_CREATURE | 75 | [creature.guid](/en/database/master/world/creature#guid) | [creature_template.entry](/en/database/master/world/creature_template#entry) | Distance | Repeat interval (ms) | | | On creature guid/entry is within distance |
| SMART_EVENT_DISTANCE_GAMEOBJECT | 76 | [gameobject.guid](/en/database/master/world/gameobject#guid) | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) | Distance | Repeat interval (ms) | | | On gameobject guid/entry is within distance |
| SMART_EVENT_COUNTER_SET | 77 | CounterID | Value | CooldownMin | CooldownMax | | | On CounterID value equal to a specified value<br/>*(See SMART_ACTION_SET_COUNTER)* |
| SMART_EVENT_SCENE_START | 78 | | | | | | | On scene start |
| SMART_EVENT_SCENE_TRIGGER | 79 | | | | | | TriggerName | On scene trigger |
| SMART_EVENT_SCENE_CANCEL | 80 | | | | | | | On scene cancel |
| SMART_EVENT_SCENE_COMPLETE | 81 | | | | | | | On scene complete |
| SMART_EVENT_SUMMONED_UNIT_DIES | 82 | | | | | | | On summoned unit dies |
| SMART_EVENT_ON_SPELL_CAST | 83 | SpellID | CooldownMin | CooldownMax | | | | On spell cast |
| SMART_EVENT_ON_SPELL_FAILED | 84 | SpellID | CooldownMin | CooldownMax | | | | On spell failed |
| SMART_EVENT_ON_SPELL_START | 85 | SpellID | CooldownMin | CooldownMax | | | | On spell start |
| SMART_EVENT_ON_DESPAWN | 86 | | | | | | | On despawn |
| SMART_EVENT_SEND_EVENT_TRIGGER | 87 | | | | | | | On GameEvent triggered |

> Please note :warning:means that the event_type is deprecated and should not be used.
{.is-warning}

> Please note :x:means that the event_type is not (yet) implemented.
{.is-danger}

### action_type
*- no description -*
&nbsp;

### target_type
| Name | Value | target_param1 | target_param2 | target_param3 | target_param4 | target_x | target_y | target_z | target_o | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SMART_TARGET_NONE | 0 |  |  |  |  |  |  |  |  | None. |
| SMART_TARGET_SELF | 1 |  |  |  |  |  |  |  |  | Self cast. |
| SMART_TARGET_VICTIM | 2 |  |  |  |  |  |  |  |  | Our current target. (ie: highest aggro) |
| SMART_TARGET_SECOND_AGGRO | 3 |  |  |  |  |  |  |  |  | Second highest aggro |
| SMART_TARGET_HOSTILE_LAST_AGGRO | 4 |  |  |  |  |  |  |  |  | Dead last on aggro. |
| SMART_TARGET_HOSTILE_RANDOM | 5 |  |  |  |  |  |  |  |  | Just any random target on our threat list. |
| SMART_TARGET_HOSTILE_RANDOM_NOT_TOP | 6 |  |  |  |  |  |  |  |  | Any random target except top threat. |
| SMART_TARGET_ACTION_INVOKER | 7 |  |  |  |  |  |  |  |  | Unit who caused this Event to occur. |
| SMART_TARGET_POSITION | 8 |  |  |  |  | x | y | z | o | Use xyz from event params. |
| SMART_TARGET_CREATURE_RANGE | 9 | [creature.entry](/en/database/master/world/creature_template#entry) (0 any) | minDist | maxDist | Number of targets (0 = all targets) |  |  |  |  | (Random?) creature with specified ID within specified range. |
| SMART_TARGET_CREATURE_GUID | 10 | guid | entry |  |  |  |  |  |  | Creature with specified GUID. |
| SMART_TARGET_CREATURE_DISTANCE | 11 | [creature.entry](/en/database/master/world/creature_template#entry) (0 any) | maxDist | Number of targets (0 = all targets) |  |  |  |  |  | Creature with specified ID within distance. (Different from #9?) |
| SMART_TARGET_STORED | 12 | id |  |  |  |  |  |  |  | Uses pre-stored target(list) |
| SMART_TARGET_GAMEOBJECT_RANGE | 13 | [gameobject.entry](/en/database/master/world/gameobject_template#entry) | minDist | maxDist | Number of targets (0 = all targets) |  |  |  |  | (Random?) object with specified ID within specified range. |
| SMART_TARGET_GAMEOBJECT_GUID | 14 | guid | entry |  |  |  |  |  |  | Object with specified GUID. |
| SMART_TARGET_GAMEOBJECT_DISTANCE | 15 | [gameobject.entry](/en/database/master/world/gameobject_template#entry) | maxDist | Number of targets (0 = all targets) |  |  |  |  |  | Object with specified ID within distance. (Different from #13?) |
| SMART_TARGET_INVOKER_PARTY | 16 |  |  |  |  |  |  |  |  | Invoker's party members |
| SMART_TARGET_PLAYER_RANGE | 17 | minDist | maxDist |  |  |  |  |  |  | (Random?) player within specified range. |
| SMART_TARGET_PLAYER_DISTANCE | 18 | maxDist |  |  |  |  |  |  |  | (Random?) player within specified distance. (Different from #17?) |
| SMART_TARGET_CLOSEST_CREATURE | 19 | [creature.entry](/en/database/master/world/creature_template#entry) | maxDist (Can be from 0-100 yards) | dead? (0/1) |  |  |  |  |  | Closest creature with specified ID within specified range. |
| SMART_TARGET_CLOSEST_GAMEOBJECT | 20 | [gameobject.entry](/en/database/master/world/gameobject_template#entry) | maxDist (Can be from 0-100 yards) |  |  |  |  |  |  | Closest object with specified ID within specified range. |
| SMART_TARGET_CLOSEST_PLAYER | 21 | maxDist |  |  |  |  |  |  |  | Closest player within specified range. |
| SMART_TARGET_ACTION_INVOKER_VEHICLE | 22 |  |  |  |  |  |  |  |  | Unit's vehicle who caused this Event to occur |
| SMART_TARGET_OWNER_OR_SUMMONER | 23 |  |  |  |  |  |  |  |  | Unit's owner or summoner |
| SMART_TARGET_THREAT_LIST | 24 |  |  |  |  |  |  |  |  | All units on creature's threat list |
| SMART_TARGET_CLOSEST_ENEMY | 25 | maxDist | playerOnly (0/1) |  |  |  |  |  |  | Any attackable target (creature or player) within maxDist |
| SMART_TARGET_CLOSEST_FRIENDLY | 26 | maxDist | playerOnly (0/1) |  |  |  |  |  |  | Any friendly unit (creature, player or pet) within maxDist |
| SMART_TARGET_LOOT_RECIPIENTS | 27 |  |  |  |  |  |  |  |  | All tagging players |
| SMART_TARGET_FARTHEST | 28 | maxDist | playerOnly | isInLos (0/1) |  |  |  |  |  | Farthest unit on the threat list |
| SMART_TARGET_VEHICLE_ACCESSORY | 29 | seat |  |  |  |  |  |  |  | Vehicle can target unit in given seat |
| SMART_TARGET_CLOSEST_UNSPAWNED_GAMEOBJECT | 30 | [gameobject.entry](/en/database/master/world/gameobject_template#entry) | maxDist (Can be from 0-100 yards) |  |  |  |  |  |  | Closest unspawned object with specified ID within specified range. (to be used only with action 70 and gameobjects with negative respawn time in the DB) |
&nbsp;

### comment
Commenting on SAI uses a template which is the following: `"Creature name - Event - Action"`
> **Example**: "Minion of Gurok - On spawn - Set Random Movement"

<a href="https://trinitycore.info/en/database/master/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
