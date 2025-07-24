---
title: smart_scripts
description: 
published: true
date: 2025-07-24T10:30:27.931Z
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
| [id](#id-alt) | smallint | unsigned | PRI | NO | 0 |  |  |
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
| [action_param_string](#action_param_string) | varchar(255) |  |  | YES |  |  |  |
| [target_type](#target_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [target_param1](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param2](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param3](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param4](#target_type) | int | unsigned |  | NO | 0 |  |  |
| [target_param_string](#target_param_string) | varchar(255) |  |  | YES |  |  |  |
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
{.dense}

>Please note :x:means that the source_type is not (yet) implemented.
{.is-danger}

### id <!-- {#id-alt} -->
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
{.dense}

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
| :warning: SMART_EVENT_FLAG_DIFFICULTY_0_DEPRECATED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2 | 0x02 | UNUSED, DO NOT REUSE |
| :warning: SMART_EVENT_FLAG_DIFFICULTY_1_DEPRECATED | 4 | 0x04 | UNUSED, DO NOT REUSE |
| :warning: SMART_EVENT_FLAG_DIFFICULTY_2_DEPRECATED | 8 | 0x08 | UNUSED, DO NOT REUSE |
| :warning: SMART_EVENT_FLAG_DIFFICULTY_3_DEPRECATED | 16 | 0x10 | UNUSED, DO NOT REUSE |
| :information_source: SMART_EVENT_FLAG_ACTIONLIST_WAITS | 32 | 0x20 | Timed action list will wait for action from this event to finish before moving on to next action |
| SMART_EVENT_FLAG_RESERVED_6 | 64 | 0x40 | |
| SMART_EVENT_FLAG_DEBUG_ONLY | 128 | 0x80 | Event only occurs in debug build |
| SMART_EVENT_FLAG_DONT_RESET | 256 | 0x100 | Event will not reset in SmartScript::OnReset() |
| SMART_EVENT_FLAG_WHILE_CHARMED | 512 | 0x200 | Event occurs even if AI owner is charmed |
{.dense}

<!-- .is-info is applied to list instead of the blockquote -->
<blockquote class="line is-info">
  <p><strong>SMART_EVENT_FLAG_ACTIONLIST_WAITS</strong> supports these actions:</p>
  <ul>
    <li>SMART_ACTION_TALK</li>
    <li>SMART_ACTION_SIMPLE_TALK</li>
    <li>SMART_ACTION_CAST
    <li>SMART_ACTION_SELF_CAST
    <li>SMART_ACTION_INVOKER_CAST
    <li>SMART_ACTION_MOVE_OFFSET</li>
    <li>SMART_ACTION_WP_START</li>
    <li>SMART_ACTION_MOVE_TO_POS</li>
    <li>SMART_ACTION_CROSS_CAST
    <li>SMART_ACTION_ACTIVATE_TAXI</li>
    <li>SMART_ACTION_JUMP_TO_POS</li>
    <li>SMART_ACTION_START_CLOSEST_WAYPOINT</li>
</ul>
</blockquote>

> Please *note* :warning:means that the event_flags is deprecated and should not be used.
{.is-warning}

### event_type
| Name | Value | Param1 | Param2 | Param3 | Param4 | Param5 | ParamString | Comment |
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
| SMART_EVENT_MOVEMENTINFORM | 34 | [MovementType](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Movement/MovementDefines.h#L28):<ul><li>0 &rarr; Any</li><li>1 &rarr; Random</li><li>2 &rarr; Waypoint ([waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid))</li><li>8 &rarr; Point</li><li>16 &rarr; Effect (Jump)</li></ul> | PointID (0xFFFFFFFF any) | | | | | On movement inform |
| SMART_EVENT_SUMMON_DESPAWNED | 35 | [creature_template.entry](/en/database/master/world/creature_template#entry) | CooldownMin | CooldownMax | | | | On summoned unit despawned |
| SMART_EVENT_CORPSE_REMOVED | 36 | | | | | | | On creature corpse removed |
| SMART_EVENT_AI_INIT | 37 | | | | | | | On AI init |
| SMART_EVENT_DATA_SET | 38 | Field | Value | CooldownMin | CooldownMax | | | On data set<br/>*(See SMART_ACTION_SET_DATA)* |
| :warning: SMART_EVENT_WAYPOINT_START | 39 | | | | | | | UNUSED, DO NOT REUSE |
| SMART_EVENT_WAYPOINT_REACHED | 40 | [waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid) (0xFFFFFFFF any) | [waypoint_path_node.PathId](/en/database/master/world/waypoint_path_node#pathid) (0 any) | | | | | On creature waypoint ID reached |
| :x: SMART_EVENT_TRANSPORT_ADDPLAYER | 41 | | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_ADDCREATURE | 42 | Entry (0 any) | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_REMOVE_PLAYER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 43 | | | | | | | Not yet implemented |
| :x: SMART_EVENT_TRANSPORT_RELOCATE | 44 | PointID | | | | | | Not yet implemented |
| :x: SMART_EVENT_INSTANCE_PLAYER_ENTER | 45 | Team (0 any) | CooldownMin | CooldownMax | | | | Not yet implemented |
| SMART_EVENT_AREATRIGGER_ENTER | 46 | | | | | | | On areatrigger enter |
| SMART_EVENT_QUEST_ACCEPTED | 47 | | | | | | | On target quest accepted |
| SMART_EVENT_QUEST_OBJ_COMPLETION | 48 | [quest_objectives.ID](/en/database/master/world/quest_objectives#id) | | | | | | On target quest objective completed |
| SMART_EVENT_QUEST_COMPLETION | 49 | | | | | | | On target quest completed |
| SMART_EVENT_QUEST_REWARDED | 50 | | | | | | | On target quest rewarded |
| SMART_EVENT_QUEST_FAIL | 51 | | | | | | | On target quest failed |
| SMART_EVENT_TEXT_OVER | 52 | [creature_text.GroupID](/en/database/master/world/creature_text#groupid) | [creature_text.CreatureID](/en/database/master/world/creature_text#creatureid) (0 any) | | | | | On text over event triggered after SMART_ACTION_TALK |
| SMART_EVENT_RECEIVE_HEAL | 53 | MinHeal | MaxHeal | CooldownMin | CooldownMax | | | On creature received healing |
| SMART_EVENT_JUST_SUMMONED | 54 | | | | | | | On summon |
| SMART_EVENT_WAYPOINT_PAUSED | 55 | [waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid) (0xFFFFFFFF any) | [waypoint_path_node.PathId](/en/database/master/world/waypoint_path_node#pathid) (0 any) | | | | | On creature waypoint ID paused |
| SMART_EVENT_WAYPOINT_RESUMED | 56 | [waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid) (0xFFFFFFFF any) | [waypoint_path_node.PathId](/en/database/master/world/waypoint_path_node#pathid) (0 any) | | | | | On creature waypoint ID resumed |
| SMART_EVENT_WAYPOINT_STOPPED | 57 | [waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid) (0xFFFFFFFF any) | [waypoint_path_node.PathId](/en/database/master/world/waypoint_path_node#pathid) (0 any) | | | | | On creature waypoint ID stopped |
| SMART_EVENT_WAYPOINT_ENDED | 58 | [waypoint_path_node.NodeId](/en/database/master/world/waypoint_path_node#nodeid) (0xFFFFFFFF any) | [waypoint_path_node.PathId](/en/database/master/world/waypoint_path_node#pathid) (0 any) | | | | | On creature waypoint ID ended |
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
| SMART_EVENT_AREATRIGGER_EXIT | 88 | | | | | | | On areatrigger exit |
{.dense}

> Please note :warning:means that the event_type is deprecated and should not be used.
{.is-warning}

> Please note :x:means that the event_type is not (yet) implemented.
{.is-danger}

### action_type
| Name | Value | Param1 | Param2 | Param3 | Param4 | Param5 | Param6 | ParamString | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SMART_ACTION_NONE | 0 |  |  |  |  |  |  |  | Do nothing |
| SMART_ACTION_TALK | 1 | [creature_text.GroupID](/en/database/master/world/creature_text#groupid) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_FACTION | 2 | [faction.db2.ID](https://wago.tools/db2/Faction) (0 for default) |  |  |  |  |  |  | Sets faction to creature. |
| SMART_ACTION_MORPH_TO_ENTRY_OR_MODEL | 3 | [creature_template.entry](/en/database/master/world/creature_template#entry) | Creature_template.modelID |  |  |  |  |  |  |
| SMART_ACTION_SOUND | 4 | SoundId | onlySelf (0/1) | Distant Sound (0/1) |  |  |  |  |  |
| SMART_ACTION_PLAY_EMOTE | 5 | [emote.db2.ID](https://wago.tools/db2/Emotes) |  |  |  |  |  |  | Play Emote |
| SMART_ACTION_FAIL_QUEST | 6 | [quest_template.ID](/en/database/master/world/quest_template#id) |  |  |  |  |  |  | Fail Quest of Target |
| SMART_ACTION_OFFER_QUEST | 7 | [quest_template.ID](/en/database/master/world/quest_template#id) |  |  |  |  |  |  | Add Quest to Target |
| SMART_ACTION_SET_REACT_STATE | 8 | State:<ul><li>0 &rarr; Passiv</li><li>1 &rarr; Defensive</li><li>2 &rarr; Aggresive</li><li>3 &rarr; Assist</li></ul>|  |  |  |  |  |  |  |
| SMART_ACTION_ACTIVATE_GOBJECT | 9 |  |  |  |  |  |  |  | Activate Object |
| SMART_ACTION_RANDOM_EMOTE | 10 | EmoteId1 | EmoteId2 | EmoteId3 | EmoteId4 | EmoteId5 | EmoteId6 |  | Play Random Emote |
| SMART_ACTION_CAST | 11 | SpellId | castFlag | triggeredFlags |  |  |  |  | Cast Spell ID at Target |
| SMART_ACTION_SUMMON_CREATURE | 12 | [creature_template.entry](/en/database/master/world/creature_template#entry) | Summon Type | duration in ms | attackInvoker | SmartActionSummonCreatureFlags:<ul><li>1 &rarr; PersonalSpawn</li><li>2 &rarr; PreferUnit</li></ul> |  |  | Summon Unit |
| SMART_ACTION_THREAT_SINGLE_PCT | 13 | Threat% inc | Threat% dec |  |  |  |  |  | Change Threat Percentage for Single Target |
| SMART_ACTION_THREAT_ALL_PCT | 14 | Threat% inc | Threat% dec |  |  |  |  |  | Change Threat Percentage for All Enemies |
| :warning: SMART_ACTION_CALL_AREAEXPLOREDOREVENTHAPPENS | 15 |  |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| SMART_ACTION_SET_INGAME_PHASE_ID | 16 | [PhaseID.db2](https://wago.tools/db2/Phase) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_EMOTE_STATE | 17 | [emote.db2.ID](https://wago.tools/db2/Emotes) |  |  |  |  |  |  | Play Emote Continuously |
| :warning: SMART_ACTION_SET_UNIT_FLAG | 18 |  |  |  |  |  |  |  | Can set Multi-able flags at once |
| :warning: SMART_ACTION_REMOVE_UNIT_FLAG | 19 |  |  |  |  |  |  |  | Can Remove Multi-able flags at once |
| SMART_ACTION_AUTO_ATTACK | 20 |  |  |  |  |  |  |  | Stop or Continue Automatic Attack. |
| SMART_ACTION_ALLOW_COMBAT_MOVEMENT | 21 |  |  |  |  |  |  |  | Allow or Disable Combat Movement|
| SMART_ACTION_SET_EVENT_PHASE | 22 | smart_scripts.event_phase_mask |  |  |  |  |  |  |  |
| SMART_ACTION_INC_EVENT_PHASE | 23 | increment | Decrement |  |  |  |  |  | Set param1 OR param2 (not both). Value 0 has no effect. |
| SMART_ACTION_EVADE | 24 |  |  |  |  |  |  |  | Evade Incoming Attack |
| SMART_ACTION_FLEE_FOR_ASSIST | 25 |  |  |  |  |  |  |  | If you want the fleeing NPC to say '%s attempts to run away in fear' on flee, use 1 on param1. 0 for no message. |
| :warning: SMART_ACTION_CALL_GROUPEVENTHAPPENS | 26 |  |  |  |  |  |  |  | UNUSED, DO NOT REUSE |
| SMART_ACTION_COMBAT_STOP | 27 |  |  |  |  |  |  |  |  |
| SMART_ACTION_REMOVEAURASFROMSPELL | 28 | SpellId | 0/1 onlyOwnedAuras |  |  |  |  |  | 0 removes all auras |
| SMART_ACTION_FOLLOW | 29 | Distance (0 = default value) | Angle (0 = default value) | End creature_template.entry | credit | creditType |  |  | Follow Target |
| SMART_ACTION_RANDOM_PHASE | 30 | smart_scripts.event_phase_mask1 | smart_scripts.event_phase_mask2 | smart_scripts.event_phase_mask3 | smart_scripts.event_phase_mask4 | smart_scripts.event_phase_mask5 | smart_scripts.event_phase_mask6 |  |  |
| SMART_ACTION_RANDOM_PHASE_RANGE | 31 | smart_scripts.event_phase_mask minimum | smart_scripts.event_phase_mask maximum |  |  |  |  |  |  |
| SMART_ACTION_RESET_GOBJECT | 32 |  |  |  |  |  |  |  | Reset Gameobject |
| SMART_ACTION_CALL_KILLEDMONSTER | 33 | [creature_template.entry](/en/database/master/world/creature_template#entry) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_INST_DATA | 34 | Field | Data | Type:<ul><li>0 &rarr; SetData</li><li>1 &rarr; SetBossState</li></ul>|  |  |  |  |  |
| SMART_ACTION_SET_INST_DATA64 | 35 | Field |  |  |  |  |  |  |  |
| SMART_ACTION_UPDATE_TEMPLATE | 36 | [creature_template.entry](/en/database/master/world/creature_template#entry) | Update Level |  |  |  |  |  |  |
| SMART_ACTION_DIE | 37 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SET_IN_COMBAT_WITH_ZONE | 38 |  |  |  |  |  |  |  |  |
| SMART_ACTION_CALL_FOR_HELP | 39 | Radius in yards | 0/1 (say call for help text) |  |  |  |  |  |  |
| SMART_ACTION_SET_SHEATH | 40 | Sheath:<ul><li>0 &rarr; unarmed</li><li>1 &rarr; melee</li><li>2 &rarr; ranged</li></ul> |  |  |  |  |  |  |  |
| SMART_ACTION_FORCE_DESPAWN | 41 | Despawn timer in ms | Respawn timer in sec |  |  |  |  |  |  |
| SMART_ACTION_SET_INVINCIBILITY_HP_LEVEL | 42 | flat hp value | percent hp value |  |  |  |  |  |  |
| SMART_ACTION_MOUNT_TO_ENTRY_OR_MODEL | 43 | [creature_template.entry](/en/database/master/world/creature_template#entry) | creature.template.ModelID |  |  |  |  |  |  |
| SMART_ACTION_SET_INGAME_PHASE_MASK | 44 | [creature.phaseId](/en/database/master/world/creature#PhaseId) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_DATA | 45 | Field | Data |  |  |  |  |  |  |
| SMART_ACTION_ATTACK_STOP | 46 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SET_VISIBILITY | 47 | 0/1 |  |  |  |  |  |  |  |
| SMART_ACTION_SET_ACTIVE | 48 | 0/1 |  |  |  |  |  |  |  |
| SMART_ACTION_ATTACK_START | 49 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SUMMON_GO | 50 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) |  |  |  |  |  |  |  |
| SMART_ACTION_KILL_UNIT | 51 |  |  |  |  |  |  |  |  |
| SMART_ACTION_ACTIVATE_TAXI | 52 | TaxiID |  |  |  |  |  |  |  |
| SMART_ACTION_WP_START | 53 | 0 = walk / 1 = run | waypoints.entry | canRepeat | quest_template.id | despawntime | reactState |  |  |
| SMART_ACTION_WP_PAUSE | 54 | time (in ms) |  |  |  |  |  |  |  |
| SMART_ACTION_WP_STOP | 55 | despawnTime | quest_template.id | fail (0/1) |  |  |  |  |  |
| SMART_ACTION_ADD_ITEM | 56 | [ItemSparse.db2.ID](https://wago.tools/db2/ItemSparse) | count |  |  |  |  |  |  |
| SMART_ACTION_REMOVE_ITEM | 57 | [ItemSparse.db2.ID](https://wago.tools/db2/ItemSparse) | count |  |  |  |  |  |  |
| SMART_ACTION_INSTALL_AI_TEMPLATE | 58 | TemplateID |  |  |  |  |  |  |  |
| SMART_ACTION_SET_RUN | 59 | 0 = off / 1 = on |  |  |  |  |  |  |  |
| SMART_ACTION_SET_DISABLE_GRAVITY | 60 | 0 = gravity on / 1 = gravity off |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_SET_SWIM | 61 |  |  |  |  |  |  |  |  |
| SMART_ACTION_TELEPORT | 62 | [map.db2.ID](https://wago.tools/db2/Map) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_COUNTER | 63 | CounterID | value | reset (0/1) |  |  |  |  |  |
| SMART_ACTION_STORE_TARGET_LIST | 64 | varID |  |  |  |  |  |  |  |
| SMART_ACTION_WP_RESUME | 65 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SET_ORIENTATION | 66 |  |  |  |  |  |  |  |  |
| SMART_ACTION_CREATE_TIMED_EVENT | 67 | id | InitialMin | InitialMax | RepeatMin | RepeatMax | chance |  |  |
| SMART_ACTION_PLAYMOVIE | 68 | entry |  |  |  |  |  |  |  |
| SMART_ACTION_MOVE_TO_POS | 69 | PointId | isTransport(0/1) | disablePathfinding(0/1) | ContactDistance |  |  |  |  |
| SMART_ACTION_ENABLE_TEMP_GOBJ | 70 | Respawn timer in sec |  |  |  |  |  |  |  |
| SMART_ACTION_EQUIP | 71 | [creature_equip_template.creatureId](/en//database/master/world/creature_equip_template#CreatureID) | slotmask | Slot1 | Slot2 | Slot3 |  |  |  |
| SMART_ACTION_CLOSE_GOSSIP | 72 |  |  |  |  |  |  |  |  |
| SMART_ACTION_TRIGGER_TIMED_EVENT | 73 | id(>1) |  |  |  |  |  |  |  |
| SMART_ACTION_REMOVE_TIMED_EVENT | 74 | id(>1) |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_ADD_AURA | 75 |  |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT | 76 |  |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_RESET_SCRIPT_BASE_OBJECT | 77 |  |  |  |  |  |  |  |  |
| SMART_ACTION_CALL_SCRIPT_RESET | 78 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SET_RANGED_MOVEMENT | 79 | attackDistance | attackAngle |  |  |  |  |  |  |
| SMART_ACTION_CALL_TIMED_ACTIONLIST | 80 | EntryOrGuid * 100 | timer update type(0 OOC, 1 IC, 2 ALWAYS) | 0/1 can override in going action list |  |  |  |  |  |
| SMART_ACTION_SET_NPC_FLAG | 81 | [creature_template.npcflag](/en/database/master/world/creature_template#npcflag) |  |  |  |  |  |  |  |
| SMART_ACTION_ADD_NPC_FLAG | 82 | [creature_template.npcflag](/en/database/master/world/creature_template#npcflag) |  |  |  |  |  |  |  |
| SMART_ACTION_REMOVE_NPC_FLAG | 83 | [creature_template.npcflag](/en/database/master/world/creature_template#npcflag) |  |  |  |  |  |  |  |
| SMART_ACTION_SIMPLE_TALK | 84 | [creature_text.GroupID](/en/database/master/world/creature_text#groupid) |  |  |  |  |  |  |  |
| SMART_ACTION_SELF_CAST | 85 | SpellID | castFlags | triggeredFlags |  |  |  |  |  |
| SMART_ACTION_CROSS_CAST | 86 | SpellID | castFlags | CasterTargetType | CasterTarget | CasterTarget param1 | CasterTarget param2 |  |  |
| SMART_ACTION_CALL_RANDOM_TIMED_ACTIONLIST | 87 | EntryOrGuid 1 | EntryOrGuid 2 | EntryOrGuid 3 | EntryOrGuid 4 | EntryOrGuid 5 | EntryOrGuid 6 |  |  |
| SMART_ACTION_CALL_RANDOM_RANGE_TIMED_ACTIONLIST | 88 | EntryOrGuid 1 | EntryOrGuid 2 |  |  |  |  |  |  |
| SMART_ACTION_RANDOM_MOVE | 89 | Radius |  |  |  |  |  |  |  |
| SMART_ACTION_SET_UNIT_FIELD_BYTES_1 | 90 | Value | Type |  |  |  |  |  |  |
| SMART_ACTION_REMOVE_UNIT_FIELD_BYTES_1 | 91 | Value | Type |  |  |  |  |  |  |
| SMART_ACTION_INTERRUPT_SPELL | 92 | With delay (0/1) | SpellId | instant (0/1) |  |  |  |  |  |
| :warning: SMART_ACTION_SEND_GO_CUSTOM_ANIM | 93 |  |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_SET_DYNAMIC_FLAG | 94 |  |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_ADD_DYNAMIC_FLAG | 95 |  |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_REMOVE_DYNAMIC_FLAG | 96 |  |  |  |  |  |  |  |  |
| SMART_ACTION_JUMP_TO_POS | 97 | Speed XY | Speed Z |  |  |  |  |  |  |
| SMART_ACTION_SEND_GOSSIP_MENU | 98 | gossip_menu.entry | gossip_menu.text_id |  |  |  |  |  |  |
| SMART_ACTION_GO_SET_LOOT_STATE | 99 | LootState:<ul><li>0 &rarr; Not Ready</li><li>1 &rarr; Ready</li><li>2 &rarr; Activated</li><li>3 &rarr; Just Deactivated</li></ul>|  |  |  |  |  |  |  |
| SMART_ACTION_SEND_TARGET_TO_TARGET | 100 | Id |  |  |  |  |  |  |  |
| SMART_ACTION_SET_HOME_POS | 101 |  |  |  |  |  |  |  |  |
| SMART_ACTION_SET_HEALTH_REGEN | 102 | 0/1 |  |  |  |  |  |  |  |
| SMART_ACTION_SET_ROOT | 103 | 0/1 |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_SET_GO_FLAG | 104 | [gameobject_template_addon.flags](/en//database/master/world/gameobject_template_addon#flags) |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_ADD_GO_FLAG | 105 | [gameobject_template_addon.flags](/en//database/master/world/gameobject_template_addon#flags) |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_REMOVE_GO_FLAG | 106 | [gameobject_template_addon.flags](/en//database/master/world/gameobject_template_addon#flags) |  |  |  |  |  |  |  |
| SMART_ACTION_SUMMON_CREATURE_GROUP | 107 | [creature_summon_groups.groupId](/en//database/master/world/creature_summon_groups#groupId) | Attack Invoker (0/1) |  |  |  |  |  |  |
| SMART_ACTION_SET_POWER | 108 | Power Type | New Power |  |  |  |  |  |  |
| SMART_ACTION_ADD_POWER | 109 | Power Type | Power to add |  |  |  |  |  |  |
| SMART_ACTION_REMOVE_POWER | 110 | Power Type | Power to remove |  |  |  |  |  |  |
| SMART_ACTION_GAME_EVENT_STOP | 111 | [game_event.eventEntry](/en/database/master/world/game_event#eventEntry) |  |  |  |  |  |  |  |
| SMART_ACTION_GAME_EVENT_START | 112 | [game_event.eventEntry](/en/database/master/world/game_event#eventEntry) |  |  |  |  |  |  |  |
| SMART_ACTION_START_CLOSEST_WAYPOINT | 113 | wp1 | wp2 | wp3 | wp4 | wp5 | wp6 |  |  |
| SMART_ACTION_MOVE_OFFSET | 114 |  |  |  |  |  |  |  |  |
| SMART_ACTION_RANDOM_SOUND | 115 | soundId1 | soundId2 | soundId3 | soundId4 | onlySelf(0/1) | Distant Sound (0/1) |  |  |
| SMART_ACTION_SET_CORPSE_DELAY | 116 | timer |  |  |  |  |  |  |  |
| SMART_ACTION_DISABLE_EVADE | 117 | disable evade (1) / re-enable (0) |  |  |  |  |  |  |  |
| SMART_ACTION_GO_SET_GO_STATE | 118 | State |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_SET_CAN_FLY | 119 | (0/1) |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_REMOVE_AURAS_BY_TYPE | 120 | type |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_SET_SIGHT_DIST | 121 | SightDistance |  |  |  |  |  |  |  |
| :warning: SMART_ACTION_FLEE | 122 | FleeTime |  |  |  |  |  |  |  |
| SMART_ACTION_ADD_THREAT | 123 | +threat | -threat |  |  |  |  |  |  |
| SMART_ACTION_LOAD_EQUIPMENT | 124 | Id |  |  |  |  |  |  |  |
| SMART_ACTION_TRIGGER_RANDOM_TIMED_EVENT | 125 | id min range | id max range |  |  |  |  |  |  |
| :warning: SMART_ACTION_REMOVE_ALL_GAMEOBJECTS | 126 |  |  |  |  |  |  |  |  |
| SMART_ACTION_PAUSE_MOVEMENT | 127 | MovementSlot | PauseTime (ms) | Forced |  |  |  |  |  |
| SMART_ACTION_PLAY_ANIMKIT | 128 | [AnimKit.db2.ID](https://wago.tools/db2/AnimKit) | type:<ul><li>0 &rarr; PlayOneShotAnimKitId</li><li>1 &rarr; SetAIAnimKitId</li><li>2 &rarr; SetMeleeAnimKitId</li><li>3 &rarr; SetMovementAnimKitId</li></ul>|  |  |  |  |  |  |
| SMART_ACTION_SCENE_PLAY | 129 | [scene_template.id](/en/database/master/world/scene_template#id) |  |  |  |  |  |  |  |
| SMART_ACTION_SCENE_CANCEL | 130 | [scene_template.id](/en/database/master/world/scene_template#id) |  |  |  |  |  |  |  |
| SMART_ACTION_SPAWN_SPAWNGROUP | 131 | [spawn_group.groupId](/en//database/master/world/spawn_group#groupId) | minDelay | maxDelay | spawnflags |  |  |  |  |
| SMART_ACTION_DESPAWN_SPAWNGROUP | 132 | [spawn_group.groupId](/en//database/master/world/spawn_group#groupId) | minDelay | maxDelay | spawnflags |  |  |  |  |
| SMART_ACTION_RESPAWN_BY_SPAWNID | 133 | spawnType (0 npc/ 1 gob) | SpawnId |  |  |  |  |  |  |
| SMART_ACTION_INVOKER_CAST | 134 | spellID | castFlag | triggeredFlags |  |  |  |  |  |
| SMART_ACTION_PLAY_CINEMATIC | 135 | entry | cinematic |  |  |  |  |  |  |
| SMART_ACTION_SET_MOVEMENT_SPEED | 136 | [MovementType](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Movement/MovementDefines.h#L28) | speedInteger | speedFraction |  |  |  |  |  |
| SMART_ACTION_PLAY_SPELL_VISUAL_KIT | 137 | [spellVisualKitId.db2.ID](https://wago.tools/db2/SpellVisualKit) |  |  |  |  |  |  |  |
| SMART_ACTION_OVERRIDE_LIGHT | 138 | zoneId | areaLightId | lightId (overrideLightId) | fadeInTime (transition Milliseconds) |  |  |  |  |
| SMART_ACTION_OVERRIDE_WEATHER | 139 | zoneId | weatherId | weatherGrade (intensity) |  |  |  |  |  |
| :warning: SMART_ACTION_SET_AI_ANIM_KIT | 140 | 	 |  |  |  |  |  |  |  |
| SMART_ACTION_SET_HOVER | 141 | 0 = Off / 1 = On |  |  |  |  |  |  |  |
| SMART_ACTION_SET_HEALTH_PCT | 142 | percent |  |  |  |  |  |  |  |
| SMART_ACTION_CREATE_CONVERSATION | 143 | [conversation_template.id](/en//database/master/world/conversation_template#Id) |  |  |  |  |  |  |  |
| SMART_ACTION_SET_IMMUNE_PC | 144 | 0 = Off / 1 = On |  |  |  |  |  |  |  |
| SMART_ACTION_SET_IMMUNE_NPC | 145 | 0 = Off / 1 = On |  |  |  |  |  |  |  |
| SMART_ACTION_SET_UNINTERACTIBLE | 146 | 0 = Off / 1 = On |  |  |  |  |  |  |  |
| SMART_ACTION_ACTIVATE_GAMEOBJECT | 147 | GameObjectActions |  |  |  |  |  |  |  |
| SMART_ACTION_ADD_TO_STORED_TARGET_LIST | 148 | varID |  |  |  |  |  |  |  |
| SMART_ACTION_BECOME_PERSONAL_CLONE_FOR_PLAYER | 149 | SummonType | duration in ms |  |  |  |  |  |  |
| SMART_ACTION_TRIGGER_GAME_EVENT | 150 | eventId |  |  |  |  |  |  |  |
| SMART_ACTION_DO_ACTION | 151 | actionId |  |  |  |  |  |  |  |
| SMART_ACTION_COMPLETE_QUEST | 152 | [quest_template.ID](/en/database/master/world/quest_template#id) |  |  |  |  |  |  | Complete quest with:<br/>*QUEST_FLAGS_COMPLETION_EVENT, QUEST_FLAGS_COMPLETION_AREA_TRIGGER or QUEST_FLAGS_TRACKING_EVENT* |
| SMART_ACTION_CREDIT_QUEST_OBJECTIVE_TALK_TO | 153 |  |  |  |  |  |  |  | Only valid for SMART_SCRIPT_TYPE_CREATURE |
| SMART_ACTION_DESTROY_CONVERSATION | 154 | [conversation_template.id](/en//database/master/world/conversation_template#Id) | isPrivate 0/1 | range |  |  |  |  |  |
| SMART_ACTION_ENTER_VEHICLE | 155 | seat.Id |  |  |  |  |  |  |  |
| SMART_ACTION_BOARD_PASSENGER | 156 | seat.Id |  |  |  |  |  |  |  |
| SMART_ACTION_EXIT_VEHICLE | 157 |  |  |  |  |  |  |  |  |
{.dense}

> Please note :warning:means that the action_type is deprecated and should not be used.
{.is-warning}


### target_type
| Name | Value | Param1 | Param2 | Param3 | Param4 | ParamString | X | Y | Z | O | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SMART_TARGET_NONE | 0 |  |  |  |  |  |  |  |  |  | None |
| SMART_TARGET_SELF | 1 |  |  |  |  |  |  |  |  |  | Self cast |
| SMART_TARGET_VICTIM | 2 |  |  |  |  |  |  |  |  |  | Our current target. (ie: highest aggro) |
| SMART_TARGET_SECOND_AGGRO | 3 | Max dist | Player only (0/1) | [PowerType](#enums) + 1 (0: any) |  |  |    |  |  |  | Second highest aggro |
| SMART_TARGET_HOSTILE_LAST_AGGRO | 4 | Max dist | Player only (0/1) | [PowerType](#enums) + 1 (0: any) |  |  |  |  |  |  | Dead last on aggro |
| SMART_TARGET_HOSTILE_RANDOM | 5 | Max dist | Player only (0/1) |[PowerType](#enums) + 1 (0: any) |  |  |  |  |  |  | Just any random target on our threat list |
| SMART_TARGET_HOSTILE_RANDOM_NOT_TOP | 6 | Max dist | Player only (0/1) | [PowerType](#enums) + 1 (0: any) |  |  |  |  |  |  | Any random target except top threat |
| SMART_TARGET_ACTION_INVOKER | 7 |  |  |  |  |  |  |  |  |  | Unit who caused this event to occur |
| SMART_TARGET_POSITION | 8 |  |  |  |  |  | x | y | z | o | Use xyzo from target params |
| SMART_TARGET_CREATURE_RANGE | 9 | [creature_template.entry](/en/database/master/world/creature_template#entry) (0: any) | Min dist | Max dist | Number of targets (0: all targets) | StringId |  |  |  |  | Creatures with specified entry within specified range |
| SMART_TARGET_CREATURE_GUID | 10 | [creature.guid](/en/database/master/world/creature#guid) | [creature.id](/en/database/master/world/creature#id) |  |  |  |  |  |  |  | Creature with specified GUID (and id) |
| SMART_TARGET_CREATURE_DISTANCE | 11 | [creature_template.entry](/en/database/master/world/creature_template#entry) (0: any) | Max dist | Number of targets (0: all targets) |  | StringId |  |  |  |  | Creatures with specified entry within distance |
| SMART_TARGET_STORED | 12 | Id |  |  |  |  |  |  |  |  | Uses pre-stored target (list) |
| SMART_TARGET_GAMEOBJECT_RANGE | 13 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) (0: any) | Min dist | Max dist | Number of targets (0: all targets) | StringId |  |  |  |  | Gameobjects with specified entry within specified range |
| SMART_TARGET_GAMEOBJECT_GUID | 14 | [gameobject.guid](/en/database/master/world/gameobject#guid) | [gameobject.id](/en/database/master/world/gameobject#id) |  |  |  |  |  |  |  | Gameobject with specified GUID (and id) |
| SMART_TARGET_GAMEOBJECT_DISTANCE | 15 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) (0: any) | Max dist | Number of targets (0: all targets) |  | StringId |  |  |  |  | Gameobjects with specified entry within distance |
| SMART_TARGET_INVOKER_PARTY | 16 |  |  |  |  |  |  |  |  |  | Invoker's party members |
| SMART_TARGET_PLAYER_RANGE | 17 | Min dist | Max dist |  |  |  |  |  |  |  | All players within specified range |
| SMART_TARGET_PLAYER_DISTANCE | 18 | Max dist |  |  |  |  |  |  |  |  | All players within specified distance |
| SMART_TARGET_CLOSEST_CREATURE | 19 | [creature_template.entry](/en/database/master/world/creature_template#entry) (0: any) | Max dist (0-100 yards) | Is dead (0/1) |  | StringId |  |  |  |  | Closest creature with specified entry within specified distance |
| SMART_TARGET_CLOSEST_GAMEOBJECT | 20 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) (0: any) | Max dist (0-100 yards) |  |  | StringId |  |  |  |  | Closest gameobject with specified entry within specified distance |
| SMART_TARGET_CLOSEST_PLAYER | 21 | Max dist |  |  |  |  |  |  |  |  | Closest player within specified distance |
| SMART_TARGET_ACTION_INVOKER_VEHICLE | 22 |  |  |  |  |  |  |  |  |  | Unit's vehicle who caused this event to occur |
| SMART_TARGET_OWNER_OR_SUMMONER | 23 | Use charmer or owner (0/1) |  |  |  |  |  |  |  |  | Unit's owner or summoner |
| SMART_TARGET_THREAT_LIST | 24 | Max dist |  |  |  |  |  |  |  |  | All units on creature's threat list |
| SMART_TARGET_CLOSEST_ENEMY | 25 | Max dist | Player only (0/1) |  |  |  |  |  |  |  | Any attackable target (creature or player) within specified distance |
| SMART_TARGET_CLOSEST_FRIENDLY | 26 | Max dist | Player only (0/1) |  |  |  |  |  |  |  | Any friendly unit (creature, player or pet) within specified distance |
| SMART_TARGET_LOOT_RECIPIENTS | 27 |  |  |  |  |  |  |  |  |  | All tagging players |
| SMART_TARGET_FARTHEST | 28 | Max dist | Player only (0/1) | Is in Los (0/1) |  |  |  |  |  |  | Farthest unit on the threat list |
| SMART_TARGET_VEHICLE_PASSENGER | 29 | SeatMask (0: all seats) |  |  |  |  |  |  |  |  | Vehicle targets unit in given seat |
| SMART_TARGET_CLOSEST_UNSPAWNED_GAMEOBJECT | 30 | [gameobject_template.entry](/en/database/master/world/gameobject_template#entry) (0: any) | Max dist (0-100 yards) |  |  |  |  |  |  |  | Closest unspawned gameobject with specified entry within specified distance.<br/>*(To be used only with SMART_ACTION_ENABLE_TEMP_GOBJ (70) and gameobjects with negative respawn time in the DB)* |
{.dense}

### comment
Commenting on SAI uses a template which is the following: `"Creature name - Event - Action"`
> **Example**: "Minion of Gurok - On spawn - Set Random Movement"

## Enums
### TabSet {.tabset}
#### PowerType
| Name | Value |
| :--- | :--- | 
| POWER_HEALTH              | -2 |
| POWER_MANA                | 0 |
| POWER_RAGE                | 1 |
| POWER_FOCUS               | 2 |
| POWER_ENERGY              | 3 |
| POWER_COMBO_POINTS        | 4 |
| POWER_RUNES               | 5 |
| POWER_RUNIC_POWER         | 6 |
| POWER_SOUL_SHARDS         | 7 |
| POWER_LUNAR_POWER         | 8 |
| POWER_HOLY_POWER          | 9 |
| POWER_ALTERNATE_POWER     | 10 |
| POWER_MAELSTROM           | 11 |
| POWER_CHI                 | 12 |
| POWER_INSANITY            | 13 |
| POWER_BURNING_EMBERS      | 14 |
| POWER_DEMONIC_FURY        | 15 |
| POWER_ARCANE_CHARGES      | 16 |
| POWER_FURY                | 17 |
| POWER_PAIN                | 18 |
| POWER_ESSENCE             | 19 |
| POWER_RUNE_BLOOD          | 20 |
| POWER_RUNE_FROST          | 21 |
| POWER_RUNE_UNHOLY         | 22 |
| POWER_ALTERNATE_QUEST     | 23 |
| POWER_ALTERNATE_ENCOUNTER | 24 |
| POWER_ALTERNATE_MOUNT     | 25 |
### EndTabset {.tabset}

<a href="https://trinitycore.info/en/database/master/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skinning_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
