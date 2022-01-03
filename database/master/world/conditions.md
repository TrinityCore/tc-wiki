---
title: conditions
description: This table allows you to define conditions for various systems - Gossip, loot etc.
published: true
date: 2022-01-03T11:24:59.083Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/conversation_actors" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_actors'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceTypeOrReferenceId](#sourcetypeorreferenceid) | int(11) | signed | PRI | NO | 0 |  |  |
| [SourceGroup](#sourcegroup) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [SourceEntry](#sourceentry) | int(11) | signed | PRI | NO | 0 |  |  |
| [SourceId](#sourceid) | int(11) | signed | PRI | NO | 0 |  |  |
| [ElseGroup](#elsegroup) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ConditionTypeOrReference](#conditiontypeorreference) | int(11) | signed | PRI | NO | 0 |  |  |
| [ConditionTarget](#conditiontarget) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue1](#conditionvalue1) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue2](#conditionvalue2) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue3](#conditionvalue3) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [NegativeCondition](#negativecondition) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ErrorType](#errortype) | int(10) | unsigned |  | NO | 0 |  |  |
| [ErrorTextId](#errortextid) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) | signed |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SourceTypeOrReferenceId
| SourceTypeOrReferenceId | ID | SourceGroup | SourceEntry | SourceId | ConditionTarget | Notes |
| --- | :---: | --- | --- | :---: | :---: | :--- |
| CONDITION_SOURCE_TYPE_NONE | 0 | See REFERENCE TEMPLATES | (conditions#REFERENCE TEMPLATES) | Always 0 | (See below) | Only used in Reference Templates! See below. |
| CONDITION_SOURCE_TYPE_CREATURE_LOOT_TEMPLATE | 1 | creature_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_DISENCHANT_LOOT_TEMPLATE | 2 | disenchant_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_FISHING_LOOT_TEMPLATE | 3 | fishing_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 |Always 0  |  |
| CONDITION_SOURCE_TYPE_GAMEOBJECT_LOOT_TEMPLATE | 4 | gameobject_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_ITEM_LOOT_TEMPLATE | 5 | item_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_MAIL_LOOT_TEMPLATE | 6 | mail_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_MILLING_LOOT_TEMPLATE | 7 | milling_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_PICKPOCKETING_LOOT_TEMPLATE | 8 | pickpocketing_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_PROSPECTING_LOOT_TEMPLATE | 9 | prospecting_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_REFERENCE_LOOT_TEMPLATE | 10 | reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SKINNING_LOOT_TEMPLATE | 11 | skinning_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_LOOT_TEMPLATE | 12 | spell_loot_template.Entry or <br/> reference_loot_template.Entry | item id (_loot_template.Item or <br/> reference_loot_template.Item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET | 13 | Mask of effects to be affected by condition:<br/>1 = EFFECT_0, 2 = EFFECT_1, 4 = EFFECT_2 | Spell Id from  Spell DBC file | Always 0 | 0 : Potential spell Target | Don't use wowhead to get number of effects, data from wowhead sometimes doesn't match real effect number. |
| CONDITION_SOURCE_TYPE_GOSSIP_MENU | 14 | gossip_menu.entry (gossip menu entry) | gossip_menu.text_id (points to npc_text.ID) | Always 0 | 0 = Player<br/>1 = WorldObject |  |
| CONDITION_SOURCE_TYPE_GOSSIP_MENU_OPTION | 15 | gossip_menu_option.menu_id (menu entry) | gossip_menu_option.id | Always 0 | 0 = Player<br/>1 = WorldObject |  |
| CONDITION_SOURCE_TYPE_CREATURE_TEMPLATE_VEHICLE | 16 | Always 0 | creature entry (creature_template.entry) | Always 0 | 0 = Player riding vehicle<br/>1 = Vehicle creature |  |
| CONDITION_SOURCE_TYPE_SPELL | 17 | Always 0 | Spell ID from Spell.dbc | Always 0 | 0 = spell Caster<br/>1 =  Explicit Target of the spell<br/>(only for spells which take the object<br/>selected by caster into account) | <ul><li>This source type allows you to define caster/explicit target requirements for spell to be cast.</li><li>Explicit target of the spell is the target which is selected by player during cast, not all spells take that target into account.<br/>non-explicit targets of the spell (the ones which are selected by spell like area or nearby targets for example) <br/>are not affected by this condition source type, if you want to affect those use CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET instead.</li><li>If you are looking for old CONDITION_SOURCE_TYPE_ITEM_REQUIRED_TARGET, use this condition source type instead<br/>(ConditionTarget = 1 allows you to set requirements for a given spell, so to use this condition type you need spellid of the spell cast on item use).</li><li>Remember that conditions with the same ElseGroup value will be used to make logical AND check,<br/>so to allow different targets for the same spell effect you have to set ElseGroup respectively.</li></ul> |
| CONDITION_SOURCE_TYPE_SPELL_CLICK_EVENT | 18 | creature entry (npc_spellclick_spells.npc_entry) | Spell (npc_spellclick_spells.spell_id) | Always 0 | 0 = Clicker<br/>1 =  Spellclick target (clickee) |  |
| CONDITION_SOURCE_TYPE_QUEST_AVAILABLE | 19 | Always 0 | QuestID | Always 0 | 	Always 0 | Condition must be met for quest to be available to player. |
| ~~UNUSED~~ | 20 |  |  |  |  |  |
| CONDITION_SOURCE_TYPE_VEHICLE_SPELL | 21 | creature entry (creature_template.entry) | Spell ID from Spell.dbc | Always 0 | 0 = Player for whom spell bar is shown<br/>1 =  Vehicle creature | This will show or hide spells in vehicle spell bar. |
| CONDITION_SOURCE_TYPE_SMART_EVENT | 22 | ID (smart_scripts.id) + 1 | EntryOrGuid (smart_scripts.entryorguid) | SourceType<br/>(smart_scripts.source_type) | 0 = Invoker<br/>1 = Object |  |
| CONDITION_SOURCE_TYPE_NPC_VENDOR | 23 | vendor entry (npc_vendor.entry) | item entry (npc_vendor.item) | Always 0 | Always 0 |  |
| CONDITION_SOURCE_TYPE_SPELL_PROC | 24 | Always 0 | Spell ID of aura which triggers the proc | Always 0 | 0 = Actor<br/>1 = ActionTarget |  |
| CONDITION_SOURCE_TYPE_TERRAIN_SWAP | 25 | Always 0 | terrainSwap - object in terrainswap | Always 0 | (source code / new description here) |  |
| CONDITION_SOURCE_TYPE_PHASE | 26 | PhaseID | Zone or Area ID (or 0 for any area) | Always 0 | (source code / new description here) |  |
| CONDITION_SOURCE_TYPE_MAX | 27 |  |  |  |  | (Placeholder) |

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
| ConditionTypeOrReference (name) | Value | ConditionValue1 | ConditionValue2 | ConditionValue3| Usage |
| --- | :---: | --- | --- | --- | --- |
| CONDITION_NONE | 0 | (Never used) | (Never used) | (Never used) |  |
| CONDITION_AURA | 1 | Spell ID from Spell.dbc | Effect index (0-31) | Always 0 |  |
| CONDITION_ITEM | 2 | item entry (item_template.entry) | item count | 0 = not in bank<br/>1 = in bank |  |
| CONDITION_ITEM_EQUIPPED | 3 | item entry (item_template.entry) | Always 0 | Always 0 |  |
| CONDITION_ZONEID | 4 | Zone ID where this condition will be true. | Always 0 | Always 0 |  |
| CONDITION_REPUTATION_RANK | 5 | Faction template ID from Faction.dbc | **rank:**<pre>  1 = Hated<br/>  2 = Hostile<br/>  4 = Unfriendly<br/>  8 = Neutral<br/> 16 = Friendly<br/> 32 = Honored<br/> 64 = Revered<br/>128 = Exalted<pre/><br/>Add the target ranks together for the condition to be true for all those ranks. | Always 0 |  |
| CONDITION_TEAM | 6 | placeholder | placeholder | placeholder |  |
| CONDITION_SKILL | 7 | placeholder | placeholder | placeholder |  |
| CONDITION_QUESTREWARDED | 8 | placeholder | placeholder | placeholder |  |
| CONDITION_QUESTTAKEN | 9 | placeholder | placeholder | placeholder |  |
| CONDITION_DRUNKENSTATE | 10 | placeholder | placeholder | placeholder |  |
| CONDITION_WORLD_STATE | 11 | placeholder | placeholder | placeholder |  |
| CONDITION_ACTIVE_EVENT | 12 | placeholder | placeholder | placeholder |  |
| CONDITION_INSTANCE_INFO | 13 | placeholder | placeholder | placeholder |  |
| CONDITION_QUEST_NONE | 14 | placeholder | placeholder | placeholder |  |
| CONDITION_CLASS | 15 | placeholder | placeholder | placeholder |  |
| CONDITION_RACE | 16 | placeholder | placeholder | placeholder |  |
| CONDITION_ACHIEVEMENT | 17 | placeholder | placeholder | placeholder |  |
| CONDITION_TITLE | 18 | placeholder | placeholder | placeholder |  |
| CONDITION_SPAWNMASK | 19 | placeholder | placeholder | placeholder |  |
| CONDITION_GENDER | 20 | placeholder | placeholder | placeholder |  |
| CONDITION_UNIT_STATE | 21 | placeholder | placeholder | placeholder |  |
| CONDITION_MAPID | 22 | placeholder | placeholder | placeholder |  |
| CONDITION_AREAID | 23 | placeholder | placeholder | placeholder |  |
| CONDITION_CREATURE_TYPE | 24 | placeholder | placeholder | placeholder |  |
| CONDITION_SPELL | 25 | placeholder | placeholder | placeholder |  |
| CONDITION_PHASEMASK | 26 | placeholder | placeholder | placeholder |  |
| CONDITION_LEVEL | 27 | placeholder | placeholder | placeholder |  |
| CONDITION_QUEST_COMPLETE | 28 | placeholder | placeholder | placeholder |  |
| CONDITION_NEAR_CREATURE | 29 | placeholder | placeholder | placeholder |  |
| CONDITION_NEAR_GAMEOBJECT | 30 | placeholder | placeholder | placeholder |  |
| CONDITION_OBJECT_ENTRY_GUID | 31 | placeholder | placeholder | placeholder |  |
| CONDITION_TYPE_MASK | 32 | placeholder | placeholder | placeholder |  |
| CONDITION_RELATION_TO | 33 | placeholder | placeholder | placeholder |  |
| CONDITION_REACTION_TO | 34 | placeholder | placeholder | placeholder |  |
| CONDITION_DISTANCE_TO | 35 | placeholder | placeholder | placeholder |  |
| CONDITION_ALIVE | 36 | placeholder | placeholder | placeholder |  |
| CONDITION_HP_VAL | 37 | placeholder | placeholder | placeholder |  |
| CONDITION_HP_PCT | 38 | placeholder | placeholder | placeholder |  |
| CONDITION_REALM_ACHIEVEMENT | 39 | placeholder | placeholder | placeholder |  |
| CONDITION_IN_WATER | 40 | placeholder | placeholder | placeholder |  |
| CONDITION_TERRAIN_SWAP | 41 | placeholder | placeholder | placeholder |  |
| CONDITION_STAND_STATE | 42 | placeholder | placeholder | placeholder |  |
| CONDITION_DAILY_QUEST_DONE | 43 | placeholder | placeholder | placeholder |  |
| CONDITION_CHARMED | 44 | placeholder | placeholder | placeholder |  |
| CONDITION_PET_TYPE | 45 | placeholder | placeholder | placeholder |  |
| CONDITION_TAXI | 46 | placeholder | placeholder | placeholder |  |
| CONDITION_QUESTSTATE | 47 | placeholder | placeholder | placeholder |  |
| CONDITION_QUEST_OBJECTIVE_COMPLETE | 48 | placeholder | placeholder | placeholder |  |
| CONDITION_DIFFICULTY_ID | 49 | placeholder | placeholder | placeholder | placeholder |
| placeholder | 50 | placeholder | placeholder | placeholder | placeholder |
| CONDITION_OBJECT_ENTRY_GUID | 51 | placeholder | placeholder | placeholder | placeholder |
| CONDITION_TYPE_MASK | 52 | placeholder | placeholder | placeholder | placeholder |
&nbsp;

### ConditionTarget
*- no description -*
&nbsp;

### ConditionValue1
See below.
&nbsp;

### ConditionValue2
See below.
&nbsp;

### ConditionValue3
See below.
&nbsp;

### NegativeCondition
If set to 1, the condition will be "inverted"

Example: CONDITION_AURA with NegativeCondition will be true when the player does NOT have the aura.
&nbsp;

### ErrorType
*- no description -*
&nbsp;

### ErrorTextId
*- no description -*
&nbsp;

### ScriptName
The ScriptName this condition uses, if any.
&nbsp;

### Comment
Explanation of this condition or reference
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/conversation_actors" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_actors'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

