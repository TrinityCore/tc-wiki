---
title: quest_template_addon
description: 
published: true
date: 2023-10-22T16:07:49.220Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:34.485Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [AllowableClasses](#allowableclasses) | int | unsigned |  | NO | 0 |  |  |
| [SourceSpellID](#sourcespellid) | int | unsigned |  | NO | 0 |  |  |
| [PrevQuestID](#prevquestid) | int | signed |  | NO | 0 |  |  |
| [NextQuestID](#nextquestid) | int | unsigned |  | NO | 0 |  |  |
| [ExclusiveGroup](#exclusivegroup) | int | signed |  | NO | 0 |  |  |
| [BreadcrumbForQuestId](#breadcrumbforquestid) | int | signed |  | NO | 0 |  |  |
| [RewardMailTemplateID](#rewardmailtemplateid) | int | unsigned |  | NO | 0 |  |  |
| [RewardMailDelay](#rewardmaildelay) | int | unsigned |  | NO | 0 |  |  |
| [RequiredSkillID](#requiredskillid) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillPoints](#requiredskillpoints) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredMinRepFaction](#requiredminrepfaction) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredMaxRepFaction](#requiredmaxrepfaction) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredMinRepValue](#requiredminrepvalue) | int | signed |  | NO | 0 |  |  |
| [RequiredMaxRepValue](#requiredmaxrepvalue) | int | signed |  | NO | 0 |  |  |
| [ProvidedItemCount](#provideditemcount) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpecialFlags](#specialflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### ID
references [quest_template.ID](../world/quest_template#id)
&nbsp;

### MaxLevel
Maximum level at which a player can get the quest.
&nbsp;

### AllowableClasses
Class mask of [ChrClass IDs](https://wow.tools/dbc/?dbc=chrraces) allowed to get the quest.
| Value | Flag   | Name         |
|-------|--------|--------------|
|     1 | 0x0001 | Warrior      |
|     2 | 0x0002 | Paladin      |
|     4 | 0x0004 | Hunter       |
|     8 | 0x0008 | Rogue        |
|    16 | 0x0010 | Priest       |
|    32 | 0x0020 | Death Knight |
|    64 | 0x0040 | Shaman       |
|   128 | 0x0080 | Mage         |
|   256 | 0x0100 | Warlock      |
|  1024 | 0x0400 | Druid        |
{.dense}

&nbsp;

### SourceSpellID
[Spell ID](https://wow.tools/dbc/?dbc=spell) cast on player when quest is started. Can be a buff or a learning spell.
&nbsp;

### PrevQuestID
* **PrevQuestID** > 0: Contains the previous quest id, that must be completed before this quest can be started.
* **PrevQuestID** < 0: Contains the parent quest id, that must be active before this quest can be started.
&nbsp;

### NextQuestID
* **NextQuestID** > 0: Contains the next quest id, if **PrevQuestID** of that quest is not sufficient.
* **NextQuestID** < 0: Contains the sub quest id, if **PrevQuestID** of that quest is not sufficient. If quest have many alternative next quests (class specific quests lead from single not class specific quest) field **PrevQuestID** in next quests can used for setting this dependence.
&nbsp;

### ExclusiveGroup
* **ExclusiveGroup** > 0: Allows to define a group of quests of which only one may be chosen and completed.
E.g. if from quests 1200, 1201 and 1202 only one should be allowed to be chosen, insert 1200 into ExclusiveGroup of all 3 quests.

* **ExclusiveGroup** < 0: Allows to define a group of quests of which all must be completed and rewarded to start next quest.
E.g. if quest 1000 dependent from one of quests 1200, 1201 and 1202 and all this quests have same negative exclusive group then all this quest must be completed and rewarded before quest 1000 can be started.

> Note: All quests that use an **ExclusiveGroup** must also have entries in [quest_pool_template](../world/quest_pool_template) and  [quest_pool_members](../world/quest_pool_members) in order for the core to choose one randomly. See the examples section for examples.
{.is-info}

&nbsp;

### BreadcrumbForQuestId
Breadcrumb quests exist for the sole purpose of guiding the player to a new zone or subzone to quest in. They are often given by NPCs upon completing the previous quest hub, as well as Hero's Call Boards, Warchief's Command Boards, and the Adventure Guide. Often there are multiple breadcrumb quests followed by the same follow-up quest, and normally they are mutually exclusive, meaning that accepting one breadcrumb quest will make all the others leading to the same location unavailable. Also, normally completing the follow-up quest will make any breadcrumb quests leading to it unavailable, whether or not they were completed.
**BreadcrumbForQuestId** is the follow up [quest_template.ID](../world/quest_template#id)
&nbsp;

### RewardMailTemplateID
If the quest gives as a reward an item from a possible list of items, the ID here corresponds to the proper entry in [mail_loot_template](../world/loot_template) and [MailTemplate ID](https://wow.tools/dbc/?dbc=mailtemplate). According to the rules in that loot template, items "looted" will be sent by mail at the completion of the quest.
&nbsp;

### RewardMailDelay
How many seconds to wait until the mail is sent to the character that turned in a quest rewarding mail loot.
&nbsp;

### RequiredSkillID
[SkillLine ID](https://wow.tools/dbc/?dbc=skillline) required to know to accept the quest.
&nbsp;

### RequiredSkillPoints
Skill points in **RequiredSkillID** required to have in order to accept the quest.
&nbsp;

### RequiredMinRepFaction
[Faction ID](https://wow.tools/dbc/?dbc=faction) for reputation requirement.
&nbsp;

### RequiredMaxRepFaction
[Faction ID](https://wow.tools/dbc/?dbc=faction) for reputation requirement.
&nbsp;

### RequiredMinRepValue
Players must have at least this reputation value for **RequiredMinRepFaction** in order to receive the quest.
&nbsp;

### RequiredMaxRepValue
Players can have at most this reputation value for **RequiredMaxRepFaction** in order to receive the quest.
&nbsp;

### ProvidedItemCount
Number of [StartItem](../world/quest_template#startitem) given to the player (inserted in the player's bags) upon accepting the quest.
&nbsp;

### SpecialFlags
This field is a bitmask and is for controlling server side quest functions. Blizzard keeps these data server-side and they are not sent to the client, so we have to populate the field manually.

excerpt from [`enum QuestSpecialFlags`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Quests/QuestDef.h):
| Value | Flag | Name | Description |
|-------|------|------|-------------|
| 1 | 0x01 | QUEST_SPECIAL_FLAGS_REPEATABLE |  |
| 2 | 0x02 | QUEST_SPECIAL_FLAGS_EXPLORATION_OR_EVENT | if required area explore, spell SPELL_EFFECT_QUEST_COMPLETE casting, an entry in [areatrigger_involvedrelation](../world/areatrigger_involvedrelation) or [\*_script](../world/scripts) command SCRIPT_COMMAND_QUEST_EXPLORED use |
| 4 | 0x04 | QUEST_SPECIAL_FLAGS_AUTO_ACCEPT | if the quest is to be auto-accepted. As of patch 3.3.5a only quests in the starter area need this flag. |
| 8 | 0x08 | QUEST_SPECIAL_FLAGS_DF_QUEST | if the quest is used by Dungeon Finder. |
| 16 | 0x10 | QUEST_SPECIAL_FLAGS_MONTHLY | if the quest is reset at the begining of the month |
| 32 | 0x20 | QUEST_SPECIAL_FLAGS_CAST | if the quest requires RequiredOrNpcGo killcredit but NOT kill (a spell cast). This action usually involves "killing" an invisible "bunny" NPC. |
{.dense}
UPDATE ME
&nbsp;

### ScriptName
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
