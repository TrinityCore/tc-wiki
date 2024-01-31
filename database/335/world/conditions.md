---
title: conditions
description: 
published: true
date: 2024-01-31T20:26:51.940Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:10.475Z
---

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceTypeOrReferenceId](#sourcetypeorreferenceid) | int | signed | PRI | NO | 0 |  |  |
| [SourceGroup](#sourcetypeorreferenceid) | int | unsigned | PRI | NO | 0 |  |  |
| [SourceEntry](#sourcetypeorreferenceid) | int | signed | PRI | NO | 0 |  |  |
| [SourceId](#sourcetypeorreferenceid) | int | signed | PRI | NO | 0 |  |  |
| [ElseGroup](#elsegroup) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionTypeOrReference](#conditiontypeorreference) | int | signed | PRI | NO | 0 |  |  |
| [ConditionTarget](#conditiontypeorreference) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue1](#conditiontypeorreference) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue2](#conditiontypeorreference) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue3](#conditiontypeorreference) | int | unsigned | PRI | NO | 0 |  |  |
| [NegativeCondition](#negativecondition) | tinyint | unsigned |  | NO | 0 |  |  |
| [ErrorType](#errortype) | int | unsigned |  | NO | 0 |  |  |
| [ErrorTextId](#errortextid) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SourceTypeOrReferenceId
- if a negative value, id of a reference (referenced directly in the [ConditionTypeOrReference](#conditiontypeorreference) of another condition).
- If a positive value, source type of the condition to be applied:
| SourceTypeOrReferenceId | ID | SourceGroup | SourceEntry | SourceId | ConditionTarget | Notes |
| --- | :---: | --- | --- | :---: | :---: | :--- |
| CONDITION_SOURCE_TYPE_NONE | 0 | (Never used) | (Never used) | (Never used) | (Never used) | |
| CONDITION_SOURCE_TYPE_CREATURE_LOOT_TEMPLATE | 1 | [(creature/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(creature/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_DISENCHANT_LOOT_TEMPLATE | 2 | [(disenchant/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(disenchant/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_FISHING_LOOT_TEMPLATE | 3 | [(fishing/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(fishing/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 |Always 0  |  |
| CONDITION_SOURCE_TYPE_GAMEOBJECT_LOOT_TEMPLATE | 4 | [(gameobject/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(gameobject/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_ITEM_LOOT_TEMPLATE | 5 | [(item/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(item/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_MAIL_LOOT_TEMPLATE | 6 | [(mail/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(mail/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_MILLING_LOOT_TEMPLATE | 7 | [(milling/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(milling/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_PICKPOCKETING_LOOT_TEMPLATE | 8 | [(pickpocketing/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(pickpocketing/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_PROSPECTING_LOOT_TEMPLATE | 9 | [(prospecting/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(prospecting/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_REFERENCE_LOOT_TEMPLATE | 10 | [reference_loot_template Entry](/database/335/world/loot_template#entry) | [reference_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SKINNING_LOOT_TEMPLATE | 11 | [(skinning/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(skinning/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_LOOT_TEMPLATE | 12 | [(spell/reference)_loot_template Entry](/database/335/world/loot_template#entry) | [(spell/reference)_loot_template Item](/database/335/world/loot_template#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET | 13 | Mask of effects to be affected by condition:<br/>1 = EFFECT_0, 2 = EFFECT_1, 4 = EFFECT_2 | [Spell ID](/files/DBC/335/spell#id) | Always 0 | 0 : Potential spell Target | Don't use wowhead to get number of effects, data from wowhead sometimes doesn't match real effect number. |
| CONDITION_SOURCE_TYPE_GOSSIP_MENU | 14 | [GossipMenu MenuID](/database/335/world/gossip_menu#menuid) | [GossipMenu TextID](/database/335/world/gossip_menu#textid) | Always 0 | 0 = Player<br/>1 = WorldObject |  |
| CONDITION_SOURCE_TYPE_GOSSIP_MENU_OPTION | 15 | [GossipMenuOption MenuID](/database/335/world/gossip_menu_option#menuid) | [GossipMenuOption OptionID](/database/335/world/gossip_menu_option#optionid) | Always 0 | 0 = Player<br/>1 = WorldObject |  |
| CONDITION_SOURCE_TYPE_CREATURE_TEMPLATE_VEHICLE | 16 | Always 0 | [creature entry](/database/335/world/creature_template#entry) | Always 0 | 0 = Player riding vehicle<br/>1 = Vehicle creature |  |
| CONDITION_SOURCE_TYPE_SPELL | 17 | Always 0 | [Spell ID](/files/DBC/335/spell#id) | Always 0 | 0 = spell Caster<br/>1 =  Explicit Target of the spell<br/>(only for spells which take the object<br/>selected by caster into account) | <ul><li>This source type allows you to define caster/explicit target requirements for spell to be cast.</li><li>Explicit target of the spell is the target which is selected by player during cast, not all spells take that target into account.<br/>non-explicit targets of the spell (the ones which are selected by spell like area or nearby targets for example) <br/>are not affected by this condition source type, if you want to affect those use CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET instead.</li><li>If you are looking for old CONDITION_SOURCE_TYPE_ITEM_REQUIRED_TARGET, use this condition source type instead<br/>(ConditionTarget = 1 allows you to set requirements for a given spell, so to use this condition type you need spellid of the spell cast on item use).</li><li>Remember that conditions with the same ElseGroup value will be used to make logical AND check,<br/>so to allow different targets for the same spell effect you have to set ElseGroup respectively.</li></ul> |
| CONDITION_SOURCE_TYPE_SPELL_CLICK_EVENT | 18 | [spellclick creature](/database/335/world/npc_spellclick_spells#npc_entry) | [spellclick Spell](/database/335/world/npc_spellclick_spells#spell_id) | Always 0 | 0 = Clicker<br/>1 =  Spellclick target (clickee) |  |
| CONDITION_SOURCE_TYPE_QUEST_AVAILABLE | 19 | Always 0 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 | Condition must be met for quest to be available to player. |
| ~~UNUSED~~ | 20 |  |  |  |  |  |
| CONDITION_SOURCE_TYPE_VEHICLE_SPELL | 21 | [creature entry](/database/335/world/creature_template#entry) | [Spell ID](/files/DBC/335/spell#id) | Always 0 | 0 = Player for whom spell bar is shown<br/>1 =  Vehicle creature | This will show or hide spells in vehicle spell bar. |
| CONDITION_SOURCE_TYPE_SMART_EVENT | 22 | [SAI id](/database/335/world/smart_scripts#id) + 1 | [SAI EntryOrGuid](/database/335/world/smart_scripts#entryorguid) | [SAI SourceType](/database/335/world/smart_scripts#source_type) | 0 = Invoker<br/>1 = Object |  |
| CONDITION_SOURCE_TYPE_NPC_VENDOR | 23 | [vendor entry](/database/335/world/npc_vendor#entry) | [vendor item](/database/335/world/npc_vendor#item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_PROC | 24 | Always 0 | [Spell ID](/files/DBC/335/spell#id) of aura which triggers the proc | Always 0 | 0 = Actor<br/>1 = ActionTarget |  |
| :x: CONDITION_SOURCE_TYPE_TERRAIN_SWAP | 25 | Always 0 | terrainSwap - object in terrainswap | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_PHASE | 26 | PhaseID | [AreaTable ID](/files/DBC/335/areatable#id) (or 0 for any area) | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_GRAVEYARD | 27 | Always 0 | [world_safe_locs.ID](/en/database/master/world/world_safe_locs#id) | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_AREATRIGGER | 28 | [areatrigger_template.Id](/en/database/master/world/areatrigger_template#id) | 0 = **Non**-ServersideAreatrigger<br/>1 = ServersideAreatrigger  | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_CONVERSATION_LINE | 29 | Always 0 | ConversationLineID | Always 0 | (source code / new description here) |  |
| CONDITION_SOURCE_TYPE_AREATRIGGER_CLIENT_TRIGGERED | 30 | Always 0 | [Areatrigger ID](/files/DBC/335/areatrigger#id) | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_TRAINER_SPELL | 31 | TrainerID | [Spell ID](/files/DBC/335/spell#id) | Always 0 | (source code / new description here) |  |
| :x: CONDITION_SOURCE_TYPE_OBJECT_ID_VISIBILITY | 32 | CreatureID / GameObjectID | ObjectType:<br/>5 = Unit<br/>8 = GameObject | Always 0 | (source code / new description here) |  |

&nbsp;

### SourceGroup
See table above.
&nbsp;

### SourceEntry
See table above.
&nbsp;

### SourceId
See table above.
&nbsp;

### ElseGroup
Allows building grouped conditions - all entries belonging to the same condition (same SourceType, SourceGroup and SourceEntry) that share the same number in ElseGroup, define one group. The **entire condition** is met when **any of its groups** is met (logical OR). The **group** is met when **all of its entries are met** (logical AND).

Example:

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, the first one has ElseGroup = 1 and the second has ElseGroup = 2, this creates a Logical OR.

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, both has ElseGroup = 1, this creates a Logical AND.
&nbsp;

### ConditionTypeOrReference
- if a negative value, id of a reference (references directly the [SourceTypeOrReferenceId](#sourcetypeorreferenceid) of another condition).
- If a positive value, condition type to be applied:
| ConditionTypeOrReference (name) | Value | ConditionValue1 | ConditionValue2 | ConditionValue3| Usage |
| --- | :---: | --- | --- | --- | --- |
| CONDITION_NONE | 0 | (Never used) | (Never used) | (Never used) |  |
| CONDITION_AURA | 1 | [Spell ID](/files/DBC/335/spell#id) | Effect index (0-31) | Always 0 |  |
| CONDITION_ITEM | 2 | [item entry](/database/335/world/item_template#entry) | item count | 0 = not in bank<br/>1 = in bank |  |
| CONDITION_ITEM_EQUIPPED | 3 | [item entry](/database/335/world/item_template#entry) | Always 0 | Always 0 |  |
| CONDITION_ZONEID | 4 | [AreaTable ID](/files/DBC/335/areatable#id) where this condition will be true. | Always 0 | Always 0 |  |
| CONDITION_REPUTATION_RANK | 5 | [Faction ID](/files/DBC/335/faction#id) | **rank:**<pre>  1 = Hated<br/>  2 = Hostile<br/>  4 = Unfriendly<br/>  8 = Neutral<br/> 16 = Friendly<br/> 32 = Honored<br/> 64 = Revered<br/>128 = Exalted<pre/><br/>Add the target ranks together for the condition to be true for all those ranks. | Always 0 |  |
| CONDITION_TEAM | 6 | **TeamID:**<br/>Alliance = 469<br/>Horde = 67 | Always 0 | Always 0 |  |
| CONDITION_SKILL | 7 | Required [SkillLine ID](/files/DBC/335/skillline#id) | Skill rank value (e.g. from 1 to 450 for the 3.3.5 branch) | Always 0 |  |
| CONDITION_QUESTREWARDED | 8 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 |  |
| CONDITION_QUESTTAKEN | 9 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 |  |
| CONDITION_DRUNKENSTATE | 10 | <pre>Sober = 0<br/>Tipsy = 1<br/>Drunk = 2<br/>Smashed = 3<pre/> | Always 0 | Always 0 |  |
| CONDITION_WORLD_STATE | 11 | World state index | 	World state value | Always 0 |  |
| CONDITION_ACTIVE_EVENT | 12 | [event entry](/database/335/world/game_event#evententry) | Always 0 | Always 0 |  |
| CONDITION_INSTANCE_INFO | 13 | **entry** (see corresponding source script files for info) | **data** (see corresponding script source files for more info) | 0 = INSTANCE_INFO_DATA <br/>1 = INSTANCE_INFO_GUID_DATA <br/>2 = INSTANCE_INFO_BOSS_STATE <br/>3 = INSTANCE_INFO_DATA64 |  |
| CONDITION_QUEST_NONE | 14 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 |  |
| CONDITION_CLASS | 15 | Class mask from [ChrClass ID](/files/DBC/335/chrclasses#id)<br/>Add flags together for all classes where condition is true. | Always 0 | Always 0 |  |
| CONDITION_RACE | 16 | Race mask from [ChrRace ID](/files/DBC/335/chrraces#id)<br/>Add flags together for all races where condition is true. | Always 0 | Always 0 |  |
| CONDITION_ACHIEVEMENT | 17 | [Achievement ID](/files/DBC/335/achievement#id) | Always 0 | Always 0 |  |
| CONDITION_TITLE | 18 | [CharTitle ID](/files/DBC/335/chartitles#id) | Always 0 | Always 0 |  |
| CONDITION_SPAWNMASK | 19 | spawnMask from<br/>Creature.spawnMask / Gameobject.spawnMask | Always 0 | Always 0 |  |
| CONDITION_GENDER | 20 | 0 = Male<br/>1 = Female<br/>2 = None | Always 0 | Always 0 |  |
| CONDITION_UNIT_STATE | 21 | UnitState (enum from Unit.h) | Always 0 | Always 0 |  |
| CONDITION_MAPID | 22 | [Map ID](/files/DBC/335/map#id)<br/><br/>(0=Eastern Kingdoms, 1=Kalimdor, - and so on.) | Always 0 | Always 0 |  |
| CONDITION_AREAID | 23 | [AreaTable ID](/files/DBC/335/areatable#id) | Always 0 | Always 0 |  |
| CONDITION_CREATURE_TYPE | 24 | [creature type](/database/335/world/creature_template#type)<br/><br/>True if creature_template.type == ConditionValue1 | Always 0 | Always 0 |  |
| CONDITION_SPELL | 25 | [Spell ID](/files/DBC/335/spell#id) | Always 0 | Always 0 |  |
| CONDITION_PHASEMASK | 26 | phasemask value | Always 0 | Always 0 |  |
| CONDITION_LEVEL | 27 | Player level (1-80 in 3.3.5 \|\| 1-60 in 9.x) | **Optional:**<pre>  0 = Level must be equal<br/>  1 = Level must be higher<br/>  2 = Level must be lower<br/>  3 = Level must be higher or equal<br/>  4 = Level must be lower or equal.<pre/> | Always 0 |  |
| CONDITION_QUEST_COMPLETE | 28 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 |  |
| CONDITION_NEAR_CREATURE | 29 | [creature entry](/database/335/world/creature_template#entry) | Distance in yards | Alive=0<br/>Dead=1 |  |
| CONDITION_NEAR_GAMEOBJECT | 30 | [gameobject entry](/database/335/world/gameobject_template#entry) | Distance in yards | Always 0 |  |
| CONDITION_OBJECT_ENTRY_GUID | 31 | TypeID. Available object types:<br/>3 : TYPEID_UNIT<br/>4 : TYPEID_PLAYER<br/>5 : TYPEID_GAMEOBJECT<br/>7 : TYPEID_CORPSE (player corpse, after spirit release) | 0 = Any object of given TypeID<br/>if TypeID = TYPEID_UNIT => [creature entry](/database/335/world/creature_template#entry)<br/>if TypeID = TYPEID_GAMEOBJECT => [gameobject entry](/database/335/world/gameobject_template#entry) | 0 = Any object of given type<br/><br/>1 - 500k : [creature guid](/database/335/world/creature#guid) / [geobject guid](/database/335/world/geobject#guid) |  |
| CONDITION_TYPE_MASK | 32 | TypeMask - a bitmask of following object types:<br/>0x0008 - TYPEMASK_UNIT (8)<br/>0x0010 - TYPEMASK_PLAYER (16)<br/>0x0020 - TYPEMASK_GAMEOBJECT (32)<br/>0x0080 - TYPEMASK_CORPSE (player corpse after spirit release) (128) | Always 0 | Always 0 |  |
| CONDITION_RELATION_TO | 33 | Target to which relation is checked.<br/>- one of the ConditionTargets available in current SourceType | RelationType - defines relation of current ConditionTarget to target specified in ConditionValue1.<br/>0 - RELATION_SELF<br/>1 - RELATION_IN_PARTY<br/>2 - RELATION_IN_RAID_OR_PARTY<br/>3 - RELATION_OWNED_BY (ConditionTarget is owned by ConditionValue1)<br/>4 - RELATION_PASSENGER_OF (ConditionTarget is passenger of ConditionValue1)<br/>5 - RELATION_CREATED_BY (ConditionTarget is summoned by ConditionValue1) | Always 0 |  |
| CONDITION_REACTION_TO | 34 | Target to which reaction is checked.<br/>- one of the ConditionTargets available in current SourceType | rankMask: This bitmask defines the reaction(s) of the current ConditionTarget<br/>to the target specified in ConditionValue1 (which are allowed).<br/>Flags for the reactions are:<br/><pre>  1 = Hated<br/>  2 = Hostile<br/>  4 = Unfriendly<br/>  8 = Neutral<br/> 16 = Friendly<br/> 32 = Honored<br/> 64 = Revered<br/>128 = Exalted<pre/> | Always 0 |  |
| CONDITION_DISTANCE_TO | 35 | Target to which distance is checked<br/>- one of ConditionTargets available in current SourceType | Distance.<br/>Defines distance between current ConditionTarget and target specified in ConditionValue1 | ComparisionType:<br/>0 = distance must be equal to ConditionValue2<br/>1 = distance must be higher than ConditionValue2<br/>2 = distance must be lower than ConditionValue2<br/>3 = distance must be equal to or higher than ConditionValue2<br/>4 = distance must be equal to or lower than ConditionValue2 |  |
| CONDITION_ALIVE | 36 | Always 0 - Use **NegativeCondition** and the following settings:<br/>NegativeCondition = 0 if target needs to be ALIVE.<br/>NegativeCondition = 1 if target needs to be DEAD.<br/><br/>NOTE: A creature corpse and a creature that_looks_dead<br/>are two different things. One is actually dead<br/>and the other is just using an emote to appear dead.  | Always 0 | Always 0 |  |
| CONDITION_HP_VAL | 37 | HP value | ComparisionType:<br/><ul><li>0 = HP must be equal</li><li>1 = HP must be higher</li><li>2 = HP must be lesser</li><li>3 = HP must be equal or higher</li><li>4 = HP must be equal or lower</li></ul> | Always 0 |  |
| CONDITION_HP_PCT | 38 | Percentage of max HP | ComparisionType:<br/><ul><li>0 = Percentage of max HP must be equal</li><li>1 = Percentage of max HP must be higher</li><li>2 = Percentage of max HP must be lower</li><li>3 = Percentage of max HP must be equal or higher</li><li>4 = Percentage of max HP must be equal or lower</li></ul> | Always 0 |  |
| CONDITION_REALM_ACHIEVEMENT | 39 | [Achievement ID](/files/DBC/335/achievement#id) | Always 0 | Always 0 |  |
| CONDITION_IN_WATER | 40 | Always 0 - Use **NegativeCondition** and the following settings:<br/>NegativeCondition = 0 If target needs to be **on land**<br/>NegativeCondition = 1 If target needs to be **in water** | Always 0 | Always 0 |  |
| :x: CONDITION_TERRAIN_SWAP | 41 | terrainSwap - true if object is in terrainswap [ **master only** ] | Always 0 | Always 0 |  |
| CONDITION_STAND_STATE | 42 | stateType (exact or any): 0 = **Exact** state used in ConditionValue2<br/>1 = **Any** type of state in ConditionValue2 | Exact stand state, or generic state (stand / sit), depending on value 1<br/>0 = Standing 1 = Sitting | Always 0 |  |
| CONDITION_DAILY_QUEST_DONE | 43 | [quest ID](/database/335/world/quest_template#id) | Always 0 | Always 0 |  |
| CONDITION_CHARMED | 44 | Always 0 | Always 0 | Always 0 |  |
| CONDITION_PET_TYPE | 45 | mask | Always 0 | Always 0 |  |
| CONDITION_TAXI | 46 | Always 0 | Always 0 | Always 0 |  |
| CONDITION_QUESTSTATE | 47 | [quest ID](/database/335/world/quest_template#id) | state_mask: true if player is in any of the provided quest states for the quest<br/>1 = not taken<br/>2 = completed<br/>8 = in progress<br/>32 = failed<br/>64 = rewarded | Always 0 |  |
| CONDITION_QUEST_OBJECTIVE_PROGRESS | 48 | [quest ID](/database/335/world/quest_template#id) | Objective index (a value from 0 to 3) | Counter |  |
| CONDITION_DIFFICULTY_ID | 49 | Difficulty (0 None, 1 Normal, etc) | Always 0  | Always 0  | true if target's map has difficulty id |
| CONDITION_GAMEMASTER | 50 | canBeGM | Always 0 | Always 0 | true if player is gamemaster<br/>(or can be gamemaster) |
| CONDITION_OBJECT_ENTRY_GUID | 51 | TypeID | entry | guid | true if object is type TypeID<br/>and the entry is 0<br/>or matches entry of the object<br/>or matches guid of the object |
| CONDITION_TYPE_MASK | 52 | TypeMask | Always 0 | Always 0 | true if object is type object's<br/>TypeMask matches provided TypeMask |
| :x: CONDITION_BATTLE_PET_COUNT | 53 | SpecieId | count | ComparisonType | true if player has count of battle pet species
| :x: CONDITION_SCENARIO_STEP | 54 | ScenarioStepId (Only >= 5.0.3)| Always 0 | Always 0 | true if object is at scenario <br> with current step equal to ScenarioStepID |
| :x: CONDITION_SCENE_IN_PROGRESS | 55 | SceneScriptPackageId | Always 0 | Always 0 | true if player is playing a scene <br> with ScriptPackageId equal to given value |
| :x: CONDITION_PLAYER_CONDITION | 56 | PlayerConditionId | Always 0 | Always 0 | true if player satisfies PlayerCondition |
&nbsp;

### ConditionTarget
Allows selecting an object for which conditions will be checked. Available objects are dependant on SourceTypeOrReferenceId, for details see respective source type reference.
&nbsp;

### ConditionValue1
See [ConditionTypeOrReference](#conditiontypeorreference).
&nbsp;

### ConditionValue2
See [ConditionTypeOrReference](#conditiontypeorreference).
&nbsp;

### ConditionValue3
See [ConditionTypeOrReference](#conditiontypeorreference).
&nbsp;

### NegativeCondition
If set to 1, the condition will be "inverted"

Example: CONDITION_AURA with NegativeCondition will be true when the player does NOT have the aura.
&nbsp;

### ErrorType
Id from [/src/server/shared/SharedDefines.h#L977](https://github.com/TrinityCore/TrinityCore/blob/fb699dc641342c1e1a094ec5bff7b5e581dd0d01/src/server/shared/SharedDefines.h#L977). Will be displayed only for the below condition source type:

CONDITION_SOURCE_TYPE_SPELL = 17
&nbsp;

### ErrorTextId
Id from [/src/server/shared/SharedDefines.h#L1171](https://github.com/TrinityCore/TrinityCore/blob/fb699dc641342c1e1a094ec5bff7b5e581dd0d01/src/server/shared/SharedDefines.h#L1171). Will be displayed only for the below condition source type:

CONDITION_SOURCE_TYPE_SPELL = 17

(ErrorType must be SPELL_FAILED_CUSTOM_ERROR (211) otherwise 0)
&nbsp;

### ScriptName
The ScriptName this condition uses, if any.
&nbsp;

### Comment
Explanation of this condition or reference
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
