---
title: conditions
description: 
published: true
date: 2024-05-10T15:12:11.284Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:10.475Z
---

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceTypeOrReferenceId](#source) | int | signed | PRI | NO | 0 |  |  |
| [SourceGroup](#source) | int | unsigned | PRI | NO | 0 |  |  |
| [SourceEntry](#source) | int | signed | PRI | NO | 0 |  |  |
| [SourceId](#source) | int | signed | PRI | NO | 0 |  |  |
| [ElseGroup](#elsegroup) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionTypeOrReference](#condition) | int | signed | PRI | NO | 0 |  |  |
| [ConditionTarget](#conditiontarget) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue1](#condition) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue2](#condition) | int | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue3](#condition) | int | unsigned | PRI | NO | 0 |  |  |
| [NegativeCondition](#negativecondition) | tinyint | unsigned |  | NO | 0 |  |  |
| [ErrorType](#errortype) | int | unsigned |  | NO | 0 |  |  |
| [ErrorTextId](#errortextid) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### Source
- **SourceTypeOrReferenceId** < 0: id of a reference (referenced directly in the [ConditionTypeOrReference](#condition) of another condition).
- **SourceTypeOrReferenceId** > 0: source type of the condition to be applied:

### Tabset {.tabset}
#### None (0)
* **SourceTypeOrReferenceId**: 
CONDITION_SOURCE_TYPE_NONE (0)
* **SourceGroup**:
\-
* **SourceEntry**:
\-
* **SourceId**:
\-
* **ConditionTarget**:
\-
#### CreatureLoot (1)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_CREATURE_LOOT_TEMPLATE (1)
* **SourceGroup**:
[(creature/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(creature/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### DisenchantLoot (2)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_DISENCHANT_LOOT_TEMPLATE (2)
* **SourceGroup**:
[(disenchant/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(disenchant/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### FishingLoot (3)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_FISHING_LOOT_TEMPLATE (3)
* **SourceGroup**:
[(fishing/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(fishing/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### GameobjectLoot (4)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_GAMEOBJECT_LOOT_TEMPLATE (4)
* **SourceGroup**:
[(gameobject/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(gameobject/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### ItemLoot (5)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_ITEM_LOOT_TEMPLATE (5)
* **SourceGroup**:
[(item/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(item/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### MailLoot (6)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_MAIL_LOOT_TEMPLATE (6)
* **SourceGroup**:
[(mail/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(mail/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### MillingLoot (7)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_MILLING_LOOT_TEMPLATE (7)
* **SourceGroup**:
[(milling/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(milling/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### PickpocketLoot (8)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_PICKPOCKETING_LOOT_TEMPLATE (8)
* **SourceGroup**:
[(pickpocketing/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(pickpocketing/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### ProspectingLoot (9)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_PROSPECTING_LOOT_TEMPLATE (9)
* **SourceGroup**:
[(prospecting/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(prospecting/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### ReferenceLoot (10)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_REFERENCE_LOOT_TEMPLATE (10)
* **SourceGroup**:
[reference_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[reference_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### SkinningLoot (11)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SKINNING_LOOT_TEMPLATE (11)
* **SourceGroup**:
[(skinning/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(skinning/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### SpellLoot (12)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPELL_LOOT_TEMPLATE (12)
* **SourceGroup**:
[(spell/reference)_loot_template Entry](/database/335/world/loot_template#entry)
* **SourceEntry**:
[(spell/reference)_loot_template Item](/database/335/world/loot_template#item)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`
#### Impl.SpellTarget (13)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET (13)
* **SourceGroup**:
Mask of effects to be affected by condition:
  |--|--|
  | EFFECT_0 | 0x1 |
  | EFFECT_1 | 0x2 |
  | EFFECT_2 | 0x4 |
  {.dense}
* **SourceEntry**:
[Spell ID](/files/DBC/335/spell#id)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Potential spell Target
  * 1: Spell caster

> Don't use wowhead to get number of effects, data from wowhead sometimes doesn't match real effect number.
{.is-info}
#### GossipMenu (14)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_GOSSIP_MENU (14)
* **SourceGroup**:
[GossipMenu MenuID](/database/335/world/gossip_menu#menuid)
* **SourceEntry**:
[GossipMenu TextID](/database/335/world/gossip_menu#textid)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Player
  * 1: WorldObject
#### GossipMenuOption (15)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_GOSSIP_MENU_OPTION (15)
* **SourceGroup**:
[GossipMenuOption MenuID](/database/335/world/gossip_menu_option#menuid)
* **SourceEntry**:
[GossipMenuOption OptionID](/database/335/world/gossip_menu_option#optionid)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Player
  * 1: WorldObject
#### VehicleCreature (16)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_CREATURE_TEMPLATE_VEHICLE (16)
* **SourceGroup**:
`0`
* **SourceEntry**:
[creature entry](/database/335/world/creature_template#entry)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Player riding vehicle
  * 1: Vehicle creature
#### Spell (17)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPELL (17)
* **SourceGroup**:
`0`
* **SourceEntry**:
[Spell ID](/files/DBC/335/spell#id)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: spell Caster
  * 1: Explicit Target of the spell (only for spells which take the object selected by caster into account)

This source type allows you to define caster/explicit target requirements for spell to be cast.

Explicit target of the spell is the target which is selected by player during cast, not all spells take that target into account. Non-explicit targets of the spell (the ones which are selected by spell like area or nearby targets for example) are not affected by this condition source type, if you want to affect those use CONDITION_SOURCE_TYPE_SPELL_IMPLICIT_TARGET (13) instead.

If you are looking for old CONDITION_SOURCE_TYPE_ITEM_REQUIRED_TARGET, use this condition source type instead (ConditionTarget = 1 allows you to set requirements for a given spell, so to use this condition type you need spellid of the spell cast on item use).

Remember that conditions with the same ElseGroup value will be used to make logical AND check, so to allow different targets for the same spell effect you have to set ElseGroup respectively.
#### ClickEvent (18)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPELL_CLICK_EVENT (18)
* **SourceGroup**:
[spellclick creature](/database/335/world/npc_spellclick_spells#npc_entry)
* **SourceEntry**:
[spellclick Spell](/database/335/world/npc_spellclick_spells#spell_id)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Clicker
  * 1: Spellclick target
#### Quest (19)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_QUEST_AVAILABLE (19)
* **SourceGroup**:
`0`
* **SourceEntry**:
[quest ID](/database/335/world/quest_template#id)
* **SourceId**:
`0`
* **ConditionTarget**:
`0`

Condition must be met for quest to be available to player.
#### Unused ❌&nbsp;(20)
* **SourceTypeOrReferenceId**: 
UNUSED (20)
* **SourceGroup**:
\-
* **SourceEntry**:
\-
* **SourceId**:
\-
* **ConditionTarget**:
\-

> UNUSED
{.is-danger}
#### VehicleSpell (21)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_VEHICLE_SPELL (21)
* **SourceGroup**:
[creature entry](/database/335/world/creature_template#entry)
* **SourceEntry**:
[Spell ID](/files/DBC/335/spell#id)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Player for whom spell bar is shown
  * 1: Vehicle creature

This will show or hide spells in vehicle spell bar.
#### SmartEvent (22)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SMART_EVENT (22)
* **SourceGroup**:
[smart_script id](/database/335/world/smart_scripts#id) + 1
* **SourceEntry**:
[smart_script EntryOrGuid](/database/335/world/smart_scripts#entryorguid)
* **SourceId**:
[smart_script SourceType](/database/335/world/smart_scripts#source_type)
* **ConditionTarget**:
  * 0: Invoker
  * 1: Object
#### NPCVendor (23)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_NPC_VENDOR (23)
* **SourceGroup**:
[vendor entry](/database/335/world/npc_vendor#entry)
* **SourceEntry**:
[vendor item](/database/335/world/npc_vendor#item)
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Player
  * 1: Vendor
#### SpellProc (24)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPELL_PROC (24)
* **SourceGroup**:
`0`
* **SourceEntry**:
[Spell ID](/files/DBC/335/spell#id) of aura which triggers the proc
* **SourceId**:
`0`
* **ConditionTarget**:
  * 0: Actor
  * 1: ActionTarget
#### TerrainSwap ❌&nbsp;(25)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_TERRAIN_SWAP (25)
* **SourceGroup**:
`0`
* **SourceEntry**:
terrainSwap - object in terrainswap
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### Phase ❌&nbsp;(26)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_PHASE (26)
* **SourceGroup**:
PhaseID
* **SourceEntry**:
[AreaTable ID](/files/DBC/335/areatable#id) (or 0 for any area)
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### Graveyard ❌&nbsp;(27)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_GRAVEYARD (27)
* **SourceGroup**:
`0`
* **SourceEntry**:
[world_safe_locs.ID](/en/database/master/world/world_safe_locs#id)
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### Areatrigger ❌&nbsp;(28)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_AREATRIGGER (28)
* **SourceGroup**:
[areatrigger_template.Id](/en/database/master/world/areatrigger_template#id)
* **SourceEntry**:
  * 0: **Non**-ServersideAreatrigger
  * 1: ServersideAreatrigger 
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> Note: this refers to dynamically spawned areatriggers, not the ones from AreaTrigger.dbc/db2
{.is-info}

> RESERVED master branch
{.is-warning}
#### Conversation ❌&nbsp;(29)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_CONVERSATION_LINE (29)
* **SourceGroup**:
`0`
* **SourceEntry**:
ConversationLineID
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### ClientAreatrigger (30)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_AREATRIGGER_CLIENT_TRIGGERED (30)
* **SourceGroup**:
`0`
* **SourceEntry**:
[Areatrigger ID](/files/DBC/335/areatrigger#id)
* **SourceId**:
`0`
* **ConditionTarget**:
\-
#### TrainerSpell ❌&nbsp;(31)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_TRAINER_SPELL (31)
* **SourceGroup**:
TrainerID
* **SourceEntry**:
[Spell ID](/files/DBC/335/spell#id)
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### ObjectVisibility ❌&nbsp;(32)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_OBJECT_ID_VISIBILITY (32)
* **SourceGroup**:
CreatureID / GameObjectID
* **SourceEntry**:
ObjectType:
  * 5: Unit
  * 8: GameObject
* **SourceId**:
`0`
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
#### SpawnGroup ❌&nbsp;(33)
* **SourceTypeOrReferenceId**:
CONDITION_SOURCE_TYPE_SPAWN_GROUP (33)
* **SourceGroup**:
\-
* **SourceEntry**:
\-
* **SourceId**:
\-
* **ConditionTarget**:
\-
> RESERVED master branch
{.is-warning}
### EndTabset {.tabset}
&nbsp;

### ElseGroup
Allows building grouped conditions - all entries belonging to the same condition (same SourceType, SourceGroup and SourceEntry) that share the same number in ElseGroup, define one group. The **entire condition** is met when **any of its groups** is met (logical OR). The **group** is met when **all of its entries are met** (logical AND).

Example:

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, the first one has ElseGroup = 1 and the second has ElseGroup = 2, this creates a Logical OR.

Two conditions with the same SourceType, SourceGroup and SourceEntry but with a different Condition, both has ElseGroup = 1, this creates a Logical AND.
&nbsp;

### Condition
- **ConditionTypeOrReference** < 0: id of a reference (references directly the [SourceTypeOrReferenceId](#sourcetypeorreferenceid) of another condition).
- **ConditionTypeOrReference** > 0: condition type to be applied:
### Tabset {.tabset}
#### None (0)
* **ConditionTypeOrReference**:
CONDITION_NONE (0)
* **ConditionValue1**:
(Never used)
* **ConditionValue2**:
(Never used)
* **ConditionValue3**:
(Never used)

always true
#### Aura (1)
* **ConditionTypeOrReference**:
CONDITION_AURA (1)
* **ConditionValue1**:
[Spell ID](/files/DBC/335/spell#id)
* **ConditionValue2**:
Effect index (0 &ndash; 2)
* **ConditionValue3**:
`0`

true if target has aura from spell with effect index
#### Item (2)
* **ConditionTypeOrReference**:
CONDITION_ITEM (2)
* **ConditionValue1**:
[item entry](/database/335/world/item_template#entry)
* **ConditionValue2**:
item count
* **ConditionValue3**:
  * 0: inventory only
  * 1: inventory + bank

true if has count of item (if **ConditionValue3** is set it searches in bank slots too)
#### ItemEquipped (3)
* **ConditionTypeOrReference**:
CONDITION_ITEM_EQUIPPED (3)
* **ConditionValue1**:
[item entry](/database/335/world/item_template#entry)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if has item equipped
#### Zone (4)
* **ConditionTypeOrReference**:
CONDITION_ZONEID (4)
* **ConditionValue1**:
[AreaTable ID](/files/DBC/335/areatable#id) where this condition will be true.
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if in zone
#### Reputation (5)
* **ConditionTypeOrReference**:
CONDITION_REPUTATION_RANK (5)
* **ConditionValue1**:
[Faction ID](/files/DBC/335/faction#id)
* **ConditionValue2**:
Add the target ranks together for the condition to be true for all those ranks.
[`enum ReputationRank`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L203-L213)
  | Value | Flag | Name |
  |--|--|--|
  | 1 | 0x01 | REP_HATED |
  | 2 | 0x02 | REP_HOSTILE |
  | 4 | 0x04 | REP_UNFRIENDLY |
  | 8 | 0x08 | REP_NEUTRAL |
  | 16 | 0x10 | REP_FRIENDLY |
  | 32 | 0x20 | REP_HONORED |
  | 64 | 0x40 | REP_REVERED |
  | 128 | 0x80 | REP_EXALTED |
  {.dense}
* **ConditionValue3**:
`0`
#### Team (6)
* **ConditionTypeOrReference**:
CONDITION_TEAM (6)
* **ConditionValue1**:
  * 469: Alliance
  * 67: Horde
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`
#### Skill (7)
* **ConditionTypeOrReference**:
CONDITION_SKILL (7)
* **ConditionValue1**:
Required [SkillLine ID](/files/DBC/335/skillline#id)
* **ConditionValue2**:
Skill rank value (1 &ndash; 450)
* **ConditionValue3**:
`0`
#### QuestReward (8)
* **ConditionTypeOrReference**:
CONDITION_QUESTREWARDED (8)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if quest was rewarded before
#### QuestTaken (9)
* **ConditionTypeOrReference**:
CONDITION_QUESTTAKEN (9)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true while quest active
#### Drunk (10)
* **ConditionTypeOrReference**:
CONDITION_DRUNKENSTATE (10)
* **ConditionValue1**:
[`enum DrunkenState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Player/Player.h#L319-L325)
  |--|--|
  | DRUNKEN_SOBER | 0 |
  | DRUNKEN_TIPSY | 1 |
  | DRUNKEN_DRUNK | 2 |
  | DRUNKEN_SMASHED | 3 |
  {.dense}
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player is drunk enough
#### Worldstate (11)
* **ConditionTypeOrReference**:
CONDITION_WORLD_STATE (11)
* **ConditionValue1**:
World state index
* **ConditionValue2**:
World state value
* **ConditionValue3**:
`0`

true if world has the value for the index
#### ActiveEvent (12)
* **ConditionTypeOrReference**:
CONDITION_ACTIVE_EVENT (12)
* **ConditionValue1**:
[event entry](/database/335/world/game_event#evententry)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if event is active
#### InstanceInfo (13)
* **ConditionTypeOrReference**:
CONDITION_INSTANCE_INFO (13)
* **ConditionValue1**:
_entry_: (see corresponding source script files for info)
* **ConditionValue2**:
_data_: (see corresponding source script files for more info)
* **ConditionValue3**:
[`enum InstanceInfo`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Conditions/ConditionMgr.h#L175-L181)
  |--|--|
  | INSTANCE_INFO_DATA  | 0 |
  | INSTANCE_INFO_GUID_DATA  | 1 |
  | INSTANCE_INFO_BOSS_STATE | 2 |
  | INSTANCE_INFO_DATA64 | 3 |
  {.dense}

true if the instance info defined by **ConditionValue3** equals data.
#### QuestNone (14)
* **ConditionTypeOrReference**:
CONDITION_QUEST_NONE (14)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if doesn't have quest saved
#### Class (15)
* **ConditionTypeOrReference**:
CONDITION_CLASS (15)
* **ConditionValue1**:
Class mask from [ChrClass ID](/files/DBC/335/chrclasses#id)<br/>Add flags together for all classes where condition is true.
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player's class is equal to class
#### Race (16)
* **ConditionTypeOrReference**:
CONDITION_RACE (16)
* **ConditionValue1**:
Race mask from [ChrRace ID](/files/DBC/335/chrraces#id)<br/>Add flags together for all races where condition is true.
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player's race is equal to race
#### Achievement (17)
* **ConditionTypeOrReference**:
CONDITION_ACHIEVEMENT (17)
* **ConditionValue1**:
[Achievement ID](/files/DBC/335/achievement#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if achievement is complete
#### Title (18)
* **ConditionTypeOrReference**:
CONDITION_TITLE (18)
* **ConditionValue1**:
[CharTitle ID](/files/DBC/335/chartitles#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player has title
#### SpawnMask (19)
* **ConditionTypeOrReference**:
CONDITION_SPAWNMASK (19)
* **ConditionValue1**:
[creature spawnMask](/database/335/world/creature#spawnmask) or [gameobject spawnMask](/database/335/world/gameobject#spawnmask)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if in spawnMask
#### Gender (20)
* **ConditionTypeOrReference**:
CONDITION_GENDER (20)
* **ConditionValue1**:
[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
  |--|--|
  | GENDER_MALE | 0 |
  | GENDER_FEMALE | 1 |
  | GENDER_NONE | 2 |
  {.dense}
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player's gender is equal to gender
#### UnitState (21)
* **ConditionTypeOrReference**:
CONDITION_UNIT_STATE (21)
* **ConditionValue1**:
[`enum UnitState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/Unit.h#L217C1-L268)
  | Value | Flag | Name | Comment |
  |--|--|--|--|
  | 1 | 0x00000001 | UNIT_STATE_DIED | player has fake death aura |
  | 2 | 0x00000002 | UNIT_STATE_MELEE_ATTACKING | player is melee attacking someone |
  | 4 | 0x00000004 | UNIT_STATE_CHARMED | having any kind of charm aura on self |
  | 8 | 0x00000008 | UNIT_STATE_STUNNED | |
  | 16 | 0x00000010 | UNIT_STATE_ROAMING | |
  | 32 | 0x00000020 | UNIT_STATE_CHASE | |
  | 64 | 0x00000040 | UNIT_STATE_FOCUSING | |
  | 128 | 0x00000080 | UNIT_STATE_FLEEING | |
  | 256 | 0x00000100 | UNIT_STATE_IN_FLIGHT | player is in flight mode |
  | 512 | 0x00000200 | UNIT_STATE_FOLLOW | |
  | 1024 | 0x00000400 | UNIT_STATE_ROOT | |
  | 2048 | 0x00000800 | UNIT_STATE_CONFUSED | |
  | 4096 | 0x00001000 | UNIT_STATE_DISTRACTED | |
  | 8192 | 0x00002000 | UNIT_STATE_ISOLATED | area auras do not affect other players |
  | 16384 | 0x00004000 | UNIT_STATE_ATTACK_PLAYER | |
  | 32768 | 0x00008000 | UNIT_STATE_CASTING | |
  | 65536 | 0x00010000 | UNIT_STATE_POSSESSED | being possessed by another unit |
  | 131072 | 0x00020000 | UNIT_STATE_CHARGING | |
  | 262144 | 0x00040000 | UNIT_STATE_JUMPING | |
  | 524288 | 0x00080000 | UNIT_STATE_FOLLOW_FORMATION | |
  | 1048576 | 0x00100000 | UNIT_STATE_MOVE | |
  | 2097152 | 0x00200000 | UNIT_STATE_ROTATING | |
  | 4194304 | 0x00400000 | UNIT_STATE_EVADE | |
  | 8388608 | 0x00800000 | UNIT_STATE_ROAMING_MOVE | |
  | 16777216 | 0x01000000 | UNIT_STATE_CONFUSED_MOVE | |
  | 33554432 | 0x02000000 | UNIT_STATE_FLEEING_MOVE | |
  | 67108864 | 0x04000000 | UNIT_STATE_CHASE_MOVE | |
  | 134217728 | 0x08000000 | UNIT_STATE_FOLLOW_MOVE | |
  | 268435456 | 0x10000000 | UNIT_STATE_IGNORE_PATHFINDING | do not use pathfinding in any MovementGenerator |
  | 536870912 | 0x20000000 | UNIT_STATE_FOLLOW_FORMATION_MOVE | |
  {.dense}
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if unit has unitState
#### Map (22)
* **ConditionTypeOrReference**:
CONDITION_MAPID (22)
* **ConditionValue1**:
[Map ID](/files/DBC/335/map#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if in map
#### Area (23)
* **ConditionTypeOrReference**:
CONDITION_AREAID (23)
* **ConditionValue1**:
[AreaTable ID](/files/DBC/335/areatable#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if in area
#### CreatureType (24)
* **ConditionTypeOrReference**:
CONDITION_CREATURE_TYPE (24)
* **ConditionValue1**:
[creature type](/database/335/world/creature_template#type)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if creature type = value1
#### Spell (25)
* **ConditionTypeOrReference**:
CONDITION_SPELL (25)
* **ConditionValue1**:
[Spell ID](/files/DBC/335/spell#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player has learned spell
#### PhaseMask (26)
* **ConditionTypeOrReference**:
CONDITION_PHASEMASK (26)
* **ConditionValue1**:
phasemask value
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if object is in phasemask
#### Level (27)
* **ConditionTypeOrReference**:
CONDITION_LEVEL (27)
* **ConditionValue1**:
Player/Creature level (1 &ndash; 83)
* **ConditionValue2**:
[ComparisonType](#comparisontype)
* **ConditionValue3**:
`0`

true if unit's level is equal to **ConditionValue1** (**ConditionValue2** can modify the statement)
#### QuestComplete (28)
* **ConditionTypeOrReference**:
CONDITION_QUEST_COMPLETE (28)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player has quest with all objectives complete, but not yet rewarded
#### NearCreature (29)
* **ConditionTypeOrReference**:
CONDITION_NEAR_CREATURE (29)
* **ConditionValue1**:
[creature entry](/database/335/world/creature_template#entry)
* **ConditionValue2**:
Distance in yards
* **ConditionValue3**:
  * 0: Alive
  * 1: Dead

true if there is a creature of entry in range
#### NearGameobject (30)
* **ConditionTypeOrReference**:
CONDITION_NEAR_GAMEOBJECT (30)
* **ConditionValue1**:
[gameobject entry](/database/335/world/gameobject_template#entry)
* **ConditionValue2**:
Distance in yards
* **ConditionValue3**:
`0`

true if there is a gameobject of entry in range
#### ObjectEntry (31)
* **ConditionTypeOrReference**:
CONDITION_OBJECT_ENTRY_GUID (31)
* **ConditionValue1**:
TypeID - Available object types:
  * 3: TYPEID_UNIT
  * 4: TYPEID_PLAYER
  * 5: TYPEID_GAMEOBJECT
  * 7: TYPEID_CORPSE (player corpse, after spirit release)
* **ConditionValue2**:
  * 0: Any object of given TypeID
  * TypeID = TYPEID_UNIT: [creature entry](/database/335/world/creature_template#entry)
  * TypeID = TYPEID_GAMEOBJECT: [gameobject entry](/database/335/world/gameobject_template#entry)
* **ConditionValue3**:
  * 0: Any object of given TypeID
  * TypeID = TYPEID_UNIT: [creature guid](/database/335/world/creature#guid)
  * TypeID = TYPEID_GAMEOBJECT: [gameobject guid](/database/335/world/gameobject#guid)

true if object is type TypeID and the entry is 0 or matches entry of the object or matches guid of the object
#### TypeMask (32)
* **ConditionTypeOrReference**:
CONDITION_TYPE_MASK (32)
* **ConditionValue1**:
TypeMask - a bitmask of following object types:
  | Value | Flag | Name |
  |--|--|--|
  | 8 | 0x08 | TYPEMASK_UNIT |
  | 16 | 0x10 | TYPEMASK_PLAYER |
  | 32 | 0x20 | TYPEMASK_GAMEOBJECT |
  | 128 | 0x80 | TYPEMASK_CORPSE (player corpse after spirit release) |
  {.dense}
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if object's TypeMask matches provided TypeMask
#### Relation (33)
* **ConditionTypeOrReference**:
CONDITION_RELATION_TO (33)
* **ConditionValue1**:
Target to which relation is checked.
  - one of the ConditionTargets available in current SourceType
* **ConditionValue2**:
[`enum RelationType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Conditions/ConditionMgr.h#L164-L173) - defines relation of current **ConditionTarget** to target specified in **ConditionValue1**.
  |--|--|--|
  | 0 | RELATION_SELF | |
  | 1 | RELATION_IN_PARTY | |
  | 2 | RELATION_IN_RAID_OR_PARTY | |
  | 3 | RELATION_OWNED_BY | **ConditionTarget** is owned by **ConditionValue1** |
  | 4 | RELATION_PASSENGER_OF | **ConditionTarget** is passenger of **ConditionValue1** |
  | 5 | RELATION_CREATED_BY | **ConditionTarget** is summoned by **ConditionValue1** |
  {.dense}
* **ConditionValue3**:
`0`

true if object is in given relation with object specified by **ConditionTarget**
#### Reaction (34)
* **ConditionTypeOrReference**:
CONDITION_REACTION_TO (34)
* **ConditionValue1**:
Target to which reaction is checked.
  - one of the ConditionTargets available in current SourceType
* **ConditionValue2**:
rankMask: This bitmask defines the reaction(s) of the current **ConditionTarget** to the target specified in **ConditionValue1** (which are allowed).
[`enum ReputationRank`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L203-L213)
  | Value | Flag | Name |
  |--|--|--|
  | 1 | 0x01 | REP_HATED |
  | 2 | 0x02 | REP_HOSTILE |
  | 4 | 0x04 | REP_UNFRIENDLY |
  | 8 | 0x08 | REP_NEUTRAL |
  | 16 | 0x10 | REP_FRIENDLY |
  | 32 | 0x20 | REP_HONORED |
  | 64 | 0x40 | REP_REVERED |
  | 128 | 0x80 | REP_EXALTED |
  {.dense}
* **ConditionValue3**:
`0`

true if object's reaction matches rankMask object specified by **ConditionTarget**
#### Distance (35)
* **ConditionTypeOrReference**:
CONDITION_DISTANCE_TO (35)
* **ConditionValue1**:
Target to which distance is checked
  - one of the ConditionTargets available in current SourceType
* **ConditionValue2**:
Distance between current **ConditionTarget** and target specified in **ConditionValue1**
* **ConditionValue3**:
[ComparisonType](#comparisontype)

true if object and **ConditionTarget** are within distance given by parameters
#### Alive (36)
* **ConditionTypeOrReference**:
CONDITION_ALIVE (36)
* **ConditionValue1**:
`0`
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

Use **NegativeCondition** to test for the inverse:
* **NegativeCondition** = 0: if target needs to be ALIVE.
* **NegativeCondition** = 1: if target needs to be DEAD.

> Note: A creature corpse and a creature that _looks_ dead are two different things. One is actually dead and the other is just using an emote to appear dead.
{.is-info}

true if unit is alive
#### HitpointVal (37)
* **ConditionTypeOrReference**:
CONDITION_HP_VAL (37)
* **ConditionValue1**:
HP value
* **ConditionValue2**:
[ComparisonType](#comparisontype)
* **ConditionValue3**:
`0`

true if unit's hp matches given value
#### HitpointPct (38)
* **ConditionTypeOrReference**:
CONDITION_HP_PCT (38)
* **ConditionValue1**:
Percentage of max HP
* **ConditionValue2**:
[ComparisonType](#comparisontype)
* **ConditionValue3**:
`0`

true if unit's hp matches given pct
#### RealmAchievement (39)
* **ConditionTypeOrReference**:
CONDITION_REALM_ACHIEVEMENT (39)
* **ConditionValue1**:
[Achievement ID](/files/DBC/335/achievement#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if realm achievement is complete
#### InWater (40)
* **ConditionTypeOrReference**:
CONDITION_IN_WATER (40)
* **ConditionValue1**:
`0` 
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

Use **NegativeCondition** to test for the inverse:
* **NegativeCondition** = 0: If target needs to be IN WATER.
* **NegativeCondition** = 1: If target needs to be ON LAND.

true if unit in water
#### TerrainSwap ❌&nbsp;(41)
* **ConditionTypeOrReference**:
CONDITION_TERRAIN_SWAP (41)
* **ConditionValue1**:
terrainSwap
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

> RESERVED master branch
{.is-warning}

true if object is in terrainswap
#### StandState (42)
* **ConditionTypeOrReference**:
CONDITION_STAND_STATE (42)
* **ConditionValue1**:
stateType (exact or any):
  * 0: **Exact** state used in ConditionValue2
  * 1: **Any** type of state in ConditionValue2
* **ConditionValue2**:
  * stateType = 0: exact stand state
    * value from [`enum UnitStandStateType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L32-L46)
  * stateType = 1: generic stand state 
    * 0: Standing
    * 1: Sitting
* **ConditionValue3**:
`0`

true if unit matches specified sitstate
#### DailyQuest (43)
* **ConditionTypeOrReference**:
CONDITION_DAILY_QUEST_DONE (43)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if daily quest has been completed for the day
#### Charmed (44)
* **ConditionTypeOrReference**:
CONDITION_CHARMED (44)
* **ConditionValue1**:
`0`
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if unit is currently charmed
#### PetType (45)
* **ConditionTypeOrReference**:
CONDITION_PET_TYPE (45)
* **ConditionValue1**:
  * 0: SUMMON_PET
  * 1: HUNTER_PET
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player has a pet of given type(s)
#### Taxi (46)
* **ConditionTypeOrReference**:
CONDITION_TAXI (46)
* **ConditionValue1**:
`0`
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player is on taxi
#### QuestState (47)
* **ConditionTypeOrReference**:
CONDITION_QUESTSTATE (47)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
state_mask from [`enum QuestStatus`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Quests/QuestDef.h#L102-L112)
  | Value | Flag | Name |
  |--|--|--|
  | 1 | 0x01 | QUEST_STATUS_NONE |
  | 2 | 0x02 | QUEST_STATUS_COMPLETE |
  | 8 | 0x08 | QUEST_STATUS_INCOMPLETE |
  | 32 | 0x20 | QUEST_STATUS_FAILED |
  | 64 | 0x40 | QUEST_STATUS_REWARDED |
  {.dense}
* **ConditionValue3**:
`0`

true if player is in any of the provided quest states for the quest
#### QuestProgress (48)
* **ConditionTypeOrReference**:
CONDITION_QUEST_OBJECTIVE_PROGRESS (48)
* **ConditionValue1**:
[quest ID](/database/335/world/quest_template#id)
* **ConditionValue2**:
Objective index (0 &ndash; 3)
* **ConditionValue3**:
Counter

true if player has reached the specified objectiveCount quest progress for the objectiveIndex for the specified quest
#### Difficulty (49)
* **ConditionTypeOrReference**:
CONDITION_DIFFICULTY_ID (49)
* **ConditionValue1**:
  [`enum Difficulty`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L278-L290)
  | Raid | Dungeon | Value |
  |--|--|:-:|
  | RAID_DIFFICULTY_10MAN_NORMAL | DUNGEON_DIFFICULTY_NORMAL | 0 |
  | RAID_DIFFICULTY_25MAN_NORMAL | DUNGEON_DIFFICULTY_HEROIC | 1 |
  | RAID_DIFFICULTY_10MAN_HEROIC |  | 2 |
  | RAID_DIFFICULTY_25MAN_HEROIC |  | 3 |
  {.dense}
* **ConditionValue2**:
`0` 
* **ConditionValue3**:
`0` 

true if map has difficulty id
#### Gamemaster (50)
* **ConditionTypeOrReference**:
CONDITION_GAMEMASTER (50)
* **ConditionValue1**:
canBeGM (0, 1)
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

true if player is gamemaster (or can be gamemaster)
#### ObjectEntry2 ❌&nbsp;(51)
* **ConditionTypeOrReference**:
CONDITION_OBJECT_ENTRY_GUID_MASTER (51)
* **ConditionValue1**:
TypeID
* **ConditionValue2**:
entry
* **ConditionValue3**:
guid

> RESERVED master branch
{.is-warning}

true if object is type TypeID and the entry is 0 or matches entry of the object or matches guid of the object
#### TypeMask2 ❌&nbsp;(52)
* **ConditionTypeOrReference**:
CONDITION_TYPE_MASK_MASTER (52)
* **ConditionValue1**:
TypeMask
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

> RESERVED master branch
{.is-warning}

true if object is type object's TypeMask matches provided TypeMask using master branch TypeMask
#### BattlePetCount ❌&nbsp;(53)
* **ConditionTypeOrReference**:
CONDITION_BATTLE_PET_COUNT (53)
* **ConditionValue1**:
SpeciesId
* **ConditionValue2**:
count
* **ConditionValue3**:
[ComparisonType](#comparisontype)

> RESERVED master branch
{.is-warning}

true if player has count of battle pet species
#### ScenarioStep ❌&nbsp;(54)
* **ConditionTypeOrReference**:
CONDITION_SCENARIO_STEP (54)
* **ConditionValue1**:
cenarioStepId
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

> RESERVED master branch
{.is-warning}

true if object is at scenario with current step equal to ScenarioStepID
#### SceneProgress ❌&nbsp;(55)
* **ConditionTypeOrReference**:
CONDITION_SCENE_IN_PROGRESS (55)
* **ConditionValue1**:
SceneScriptPackageId
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

> RESERVED master branch
{.is-warning}

true if player is playing a scene with ScriptPackageId equal to given value
#### PlayerCondition ❌&nbsp;(56)
* **ConditionTypeOrReference**:
CONDITION_PLAYER_CONDITION (56)
* **ConditionValue1**:
PlayerConditionId
* **ConditionValue2**:
`0`
* **ConditionValue3**:
`0`

> RESERVED master branch
{.is-warning}

true if player satisfies PlayerCondition

### EndTabset {.tabset}
&nbsp;

##### ComparisonType
[`enum ComparisonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/common/Utilities/Util.h#L505-L513)
|-|:-:|-|-|
| 0 | == | COMP_TYPE_EQ | ConditionType must be equal to ConditionValue |
| 1 | > | COMP_TYPE_HIGH | ConditionType must be higher than ConditionValue |
| 2 | < | COMP_TYPE_LOW | ConditionType must be lower than ConditionValue |
| 3 | >= | COMP_TYPE_HIGH_EQ | ConditionType must be higher or equal to ConditionValue |
| 4 | <= | COMP_TYPE_LOW_EQ | ConditionType must be lower or equal to ConditionValue |
&nbsp;

### ConditionTarget
Allows selecting an object for which conditions will be checked. Available objects are dependant on SourceTypeOrReferenceId, for details see respective source type reference.
&nbsp;

### NegativeCondition
If set to 1, the condition will be "inverted"

Example: CONDITION_AURA (1) with NegativeCondition will be true when the player does NOT have the aura.
&nbsp;

### ErrorType
Id from [/src/server/shared/SharedDefines.h#L977](https://github.com/TrinityCore/TrinityCore/blob/fb699dc641342c1e1a094ec5bff7b5e581dd0d01/src/server/shared/SharedDefines.h#L977). Will be displayed only for the below condition source type:

CONDITION_SOURCE_TYPE_SPELL (17)
&nbsp;

### ErrorTextId
Id from [/src/server/shared/SharedDefines.h#L1171](https://github.com/TrinityCore/TrinityCore/blob/fb699dc641342c1e1a094ec5bff7b5e581dd0d01/src/server/shared/SharedDefines.h#L1171). Will be displayed only for the below condition source type:

CONDITION_SOURCE_TYPE_SPELL (17)

(ErrorType must be SPELL_FAILED_CUSTOM_ERROR (211) otherwise 0)
&nbsp;

### ScriptName
The ScriptName this condition uses, if any.
&nbsp;

### Comment
Explanation of this condition or reference
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
