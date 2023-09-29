---
title: quest_template
description:
published: true
date: 2023-07-29T18:00:43.569Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:30.767Z
---

<a href="https://trinitycore.info/en/database/335/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains all basic definitions of available quests.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [QuestType](#questtype) | tinyint | unsigned |  | NO | 2 |  |  |
| [QuestLevel](#questlevel) | smallint | signed |  | NO | 1 |  |  |
| [MinLevel](#minlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [QuestSortID](#questsortid) | smallint | signed |  | NO | 0 |  |  |
| [QuestInfoID](#questinfoid) | smallint | unsigned |  | NO | 0 |  |  |
| [SuggestedGroupNum](#suggestedgroupnum) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredFactionId1](#requiredfactionid[1-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredFactionId2](#requiredfactionid[1-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredFactionValue1](#requiredfactionvalue[1-2]) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredFactionValue2](#requiredfactionvalue[1-2]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardNextQuest](#rewardnextquest) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardXPDifficulty](#rewardxpdifficulty) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardMoney](#rewardmoney) | int | signed |  | NO | 0 |  |  |
| [RewardBonusMoney](#rewardbonusmoney) | int | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell](#rewarddisplayspell) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardSpell](#rewardspell) | int | signed |  | NO | 0 |  |  |
| [RewardHonor](#rewardhonor) | int | signed |  | NO | 0 |  |  |
| [RewardKillHonor](#rewardkillhonor) | float |  |  | NO | 0 |  |  |
| [StartItem](#startitem) | mediumint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [RequiredPlayerKills](#requiredplayerkills) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardItem1](#rewarditem[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount1](#rewardamount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem2](#rewarditem[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount2](#rewardamount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem3](#rewarditem[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount3](#rewardamount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem4](#rewarditem[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount4](#rewardamount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop1](#itemdrop[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity1](#itemdropquantity[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop2](#itemdrop[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity2](#itemdropquantity[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop3](#itemdrop[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity3](#itemdropquantity[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop4](#itemdrop[1-4]) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity4](#itemdropquantity[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID1](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity1](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID2](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity2](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID3](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity3](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID4](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity4](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID5](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity5](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID6](#rewardchoiceitemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity6](#rewardchoiceitemquantity[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [POIContinent](#poicontinent) | smallint | unsigned |  | NO | 0 |  |  |
| [POIx](#poix) | float |  |  | NO | 0 |  |  |
| [POIy](#poiy) | float |  |  | NO | 0 |  |  |
| [POIPriority](#poipriority) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardTitle](#rewardtitle) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardTalents](#rewardtalents) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardArenaPoints](#rewardarenapoints) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardFactionID1](#rewardfactionid[1-5]) | smallint | unsigned |  | NO | 0 |  | [Faction ID](/files/DBC/335/faction#id) |
| [RewardFactionValue1](#rewardfactionvalue[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride1](#rewardfactionoverride[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID2](#rewardfactionid[1-5]) | smallint | unsigned |  | NO | 0 |  | [Faction ID](/files/DBC/335/faction#id) |
| [RewardFactionValue2](#rewardfactionvalue[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride2](#rewardfactionoverride[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID3](#rewardfactionid[1-5]) | smallint | unsigned |  | NO | 0 |  | [Faction ID](/files/DBC/335/faction#id) |
| [RewardFactionValue3](#rewardfactionvalue[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride3](#rewardfactionoverride[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID4](#rewardfactionid[1-5]) | smallint | unsigned |  | NO | 0 |  | [Faction ID](/files/DBC/335/faction#id) |
| [RewardFactionValue4](#rewardfactionvalue[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride4](#rewardfactionoverride[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID5](#rewardfactionid[1-5]) | smallint | unsigned |  | NO | 0 |  | [Faction ID](/files/DBC/335/faction#id) |
| [RewardFactionValue5](#rewardfactionvalue[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride5](#rewardfactionoverride[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [TimeAllowed](#timeallowed) | int | unsigned |  | NO | 0 |  |  |
| [AllowableRaces](#allowableraces) | smallint | unsigned |  | NO | 0 |  |  |
| [LogTitle](#logtitle) | text |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | text |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | text |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | text |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | text |  |  | YES | NULL |  |  |
| [RequiredNpcOrGo1](#requirednpcorgo[1-4]) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo2](#requirednpcorgo[1-4]) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo3](#requirednpcorgo[1-4]) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo4](#requirednpcorgo[1-4]) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount1](#requirednpcorgocount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount2](#requirednpcorgocount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount3](#requirednpcorgocount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount4](#requirednpcorgocount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId1](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId2](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId3](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId4](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId5](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId6](#requireditemid[1-6]) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount1](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount2](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount3](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount4](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount5](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount6](#requireditemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [Unknown0](#unknown0) | tinyint | unsigned |  | NO | 0 |  |  |
| [ObjectiveText1](#objectivetext[1-4]) | text |  |  | YES | NULL |  |  |
| [ObjectiveText2](#objectivetext[1-4]) | text |  |  | YES | NULL |  |  |
| [ObjectiveText3](#objectivetext[1-4]) | text |  |  | YES | NULL |  |  |
| [ObjectiveText4](#objectivetext[1-4]) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
The quest ID. This column is the Primary Key for the Table. Each quest ID must be unique!
&nbsp;

### QuestType
* 0: Quest is enabled, but it is auto-completed when accepted; this skips quest objectives and quest details.
* 1: Quest is disabled (not yet implemented in the core).
* 2: Quest is enabled (does not auto-complete).
* 3: Quest is a World Quest.
&nbsp;

### QuestLevel
Level of quest. Player receives full experience amount only if their level is less than or equal to Level+5. If Level is set to -1, the player's level will be used as (Quest)Level for the experience calculation.
&nbsp;

### MinLevel
Minimum level at which a player can get the quest.
&nbsp;

### QuestSortID
This field defines under what category the quest falls in the quest log.
* **QuestSortID** > 0: positive [AreaTable ID](/files/DBC/335/areatable#id)
* **QuestSortID** < 0: negative [QuestSort ID](/files/DBC/335/questsort#id) (in general profession, class or holiday quests)

[QuestSort](/files/DBC/335/questsort) excerpt:
| ID | Name |  | ID | Name |
|----|------|--|----|------|
| 22 | Seasonal | | 261 | Hunter |
| 24 | Herbalism | | 262 | Priest |
| 25 | Battlegrounds | | 263 | Druid |
| 41 | Day of the Dead | | 264 | Tailoring |
| 61 | Warlock | | 304 | Cooking |
| 81 | Warrior | | 324 | First Aid |
| 82 | Shaman | | 364 | Darkmoon Faire |
| 101 | Fishing | | 366 | Lunar Festival |
| 121 | Blacksmithing | | 369 | Midsummer |
| 141 | Paladin | | 370 | Brewfest |
| 161 | Mage | | 371 | Inscription |
| 162 | Rogue | | 372 | Death Knight |
| 181 | Alchemy | | 373 | Jewelcrafting |
| 182 | Leatherworking | | 374 | Noblegarden |
| 201 | Engineering | | 375 | Pilgrim's Bounty |
| 241 | Tournament | | 376 | Love is in the Air |
{.dense}

&nbsp;

### QuestInfoID
[QuestInfo ID](/files/DBC/335/questinfo#id)
| ID | Name |
|----|------|
| 1 | Group |
| 21 | Life |
| 41 | PvP |
| 62 | Raid |
| 81 | Dungeon |
| 82 | World Event |
| 83 | Legendary |
| 84 | Escort |
| 85 | Heroic |
| 88 | Raid (10) |
| 89 | Raid (25) |
{.dense}

&nbsp;

### SuggestedGroupNum
Recommended number of players to do the quest together.
&nbsp;

### RequiredFactionId\[1-2]
[Faction ID](/files/DBC/335/faction#id) for an objective to achieve a certain reputation value with.
&nbsp;

### RequiredFactionValue\[1-2]
Reputation value that the player must achieve with the faction in **RequiredFactionId** as part of the quest objectives.
Example Values:
| Value | Description |
|-------|-------------|
| -6001 | Hated |
|  3000 | Friendly |
|  9000 | Honored |
| 21000 | Revered |
| 42000 | Exalted |
{.dense}

&nbsp;

### RewardNextQuest
**ID** of the next quest in a chain. The result is, that if you end the quest, the new quest instantly appears from the quest giver.
&nbsp;

### RewardXPDifficulty
references [QuestXP Difficulty](/files/DBC/335/questxp#difficulty)
The amount of XP is determined by the **QuestLevel** (row) and **RewardXPDifficulty** (column) when reading from [QuestXP](/files/DBC/335/questxp) table.

If the quest is repeatable, XP will be given only once. The total XP that a character will receive is also affected by the level difference between the character's level and the quest's level.
&nbsp;

### RewardMoney
* **RewardMoney** > 0: Money in copper earned by completing the quest.
* **RewardMoney** < 0: Money in copper required to complete the quest.
&nbsp;

### RewardBonusMoney
The money a character at level 80 would get when they complete this quest.
&nbsp;

### RewardDisplaySpell
Spell that is shown to be casted on quest completion in the quest log. Note that this spell will NOT be casted if **RewardSpellCast** is non-zero. The spell in the other field will be casted instead, in which case the spell here only serves as the visual in the quest log.

> Note: This field comes straight from the WDB and should not be changed.
{.is-info}

&nbsp;

### RewardSpell
Spell that will always be casted at player when completing the quest. This can be a learn spell and player the learned some spell in result, or a buff spell for example. If this field is non-zero then this spell will ALWAYS be casted and the spell in **RewardDisplaySpell** will not.

> Note: This field comes straight from the WDB and should not be changed.
{.is-info}

&nbsp;

### RewardHonor
Number of honor points rewarded for completing this quest.
&nbsp;

### RewardKillHonor
Number of honorable kill honor rewarded for completing this quest.

Example: An example value is 8 for [For Great Honor](https://aowow.trinitycore.info/?quest=8388). At level 80 an honorable kill is worth 124 honor. Multiply this with 8 and you receive 992 honor as reward.
&nbsp;

### StartItem
[Item entry](../world/item_template#entry) given when accepting the quest. Item will be deleted when the quest is abandoned.
&nbsp;

### Flags
[`enum QuestFlags`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Quests/QuestDef.h)
| Value | Flag | Name | Description |
|-------|------|------|-------------|
| 1 | 0x000001 | QUEST_FLAGS_STAY_ALIVE | Not used currently; If the player dies, the quest is failed. |
| 2 | 0x000002 | QUEST_FLAGS_PARTY_ACCEPT | Not used currently. If player in party, all players that can accept this quest will receive confirmation box to accept quest CMSG_QUEST_CONFIRM_ACCEPT/SMSG_QUEST_CONFIRM_ACCEPT |
| 4 | 0x000004 | QUEST_FLAGS_EXPLORATION | Not used currently; Involves the activation of an areatrigger. |
| 8 | 0x000008 | QUEST_FLAGS_SHARABLE | Can be shared: Player::CanShareQuest() |
| 16 | 0x000010 | QUEST_FLAGS_HAS_CONDITION | Not used currently |
| 32 | 0x000020 | QUEST_FLAGS_HIDE_REWARD_POI | Not used currently: Unsure of content |
| 64 | 0x000040 | QUEST_FLAGS_RAID | Can be completed while in raid |
| 128 | 0x000080 | QUEST_FLAGS_TBC | Not used currently: Available if TBC expansion enabled only |
| 256 | 0x000100 | QUEST_FLAGS_NO_MONEY_FROM_XP | Not used currently: Experience is not converted to gold at max level |
| 512 | 0x000200 | QUEST_FLAGS_HIDDEN_REWARDS | Item and monetary rewards are hidden in the initial quest details page and in the quest log but will appear once ready to be rewarded. |
| 1024 | 0x000400 | QUEST_FLAGS_TRACKING | These quests are automatically rewarded on quest complete and they will never appear in quest log client side. |
| 2048 | 0x000800 | QUEST_FLAGS_DEPRECATE_REPUTATION | Not used currently |
| 4096 | 0x001000 | QUEST_FLAGS_DAILY | Daily repeatable quests |
| 8192 | 0x002000 | QUEST_FLAGS_FLAGS_PVP | Having this quest in log forces PvP flag |
| 16384 | 0x004000 | QUEST_FLAGS_UNAVAILABLE | Used on quests that are not generically available |
| 32768 | 0x008000 | QUEST_FLAGS_WEEKLY | Weekly repeatable quests |
| 65536 | 0x010000 | QUEST_FLAGS_AUTOCOMPLETE | auto complete |
| 131072 | 0x020000 | QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER | Displays usable item in quest tracker |
| 262144 | 0x040000 | QUEST_FLAGS_OBJ_TEXT | use Objective text as Complete text |
| 524288 | 0x080000 | QUEST_FLAGS_AUTO_ACCEPT | The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future. |
{.dense}

&nbsp;

### RequiredPlayerKills
Displays how much players you need to kill before completing the quest.
&nbsp;

### RewardItem\[1-4]
[Item entry](../world/item_template#entry) given as reward (no choice).
&nbsp;

### RewardAmount\[1-4]
The amount of items forced onto the player.
&nbsp;

### ItemDrop\[1-4]
[Item entry](../world/item_template#entry) that is needed indirectly by the quest. For example, the quests asks for item X but the only way to get item X is by activating item Y; however, item Y is also a quest item. Therefore you set item Y's entry in this field. This requirement will not appear in the quest text, it is just for the core to know when to drop a quest item that isn't in the **RequiredItemId\*** field but is still needed by the quest.
&nbsp;

### ItemDropQuantity\[1-4]
The maximum number of copies of the item in **RequiredSourceItemId\*** that can be picked up (and dropped by the core).
&nbsp;

### RewardChoiceItemID\[1-6]
The player has to pick one of **RewardChoiceItemID\*** as a reward.
&nbsp;

### RewardChoiceItemQuantity\[1-6]
The amount of items to reward if if the correspondig **RewardChoiceItemID\*** is selected.
&nbsp;

### POIContinent
[Map ID](/files/DBC/335/map#id) of a quest point of interest (POI - Point Of Interest). POI will be shown on the map when quest is active.
&nbsp;

### POIx
X coordinate of quest POI.
&nbsp;

### POIy
Y coordinate of quest POI.
&nbsp;

### POIPriority
*unknown / just sent to client*
&nbsp;

### RewardTitle
[CharTitle ID](/files/DBC/335/chartitles#id) to reward on completion.
&nbsp;

### RewardTalents
An amount of talent points to reward on completion.
&nbsp;

### RewardArenaPoints
An amount of arena points to reward on completion.
&nbsp;

### RewardFactionID\[1-5]
[Faction ID](/files/DBC/335/faction#id) for which the quest rewards reputation points.
&nbsp;

### RewardFactionValue\[1-5]
This field is used for reputation lookup in [QuestFactionReward](/files/DBC/335/questfactionreward). The value X in this field indicates index of [QuestFactionReward Difficulty](/files/DBC/335/questfactionreward#difficulty).
* **RewardFactionValue\*** > 0: Reputation from the first row of [QuestFactionReward](/files/DBC/335/questfactionreward) is used.
* **RewardFactionValue\*** < 0: Reputation from the second row of [QuestFactionReward](/files/DBC/335/questfactionreward) is used.

| ID | Rep0 | Rep1 | Rep2 | Rep3 | Rep4 | Rep5 | Rep6 | Rep7 | Rep8 | Rep9 |
|----|------|------|------|------|------|------|------|------|------|------|
1 | 0 | 10 | 25 | 75 | 150 | 250 | 350 | 500 | 1000 | 5 |
2 | 0 | -10 | -25 | -75 | -150 | -250 | -350 | -500 | -1000 | -5 |
{.dense}

&nbsp;

### RewardFactionOverride\[1-5]
This field is used to give reputation values not present in [QuestFactionReward](/files/DBC/335/questfactionreward) or to override them if **RewardFactionValue\*** is wrong for some reason. The value in this field is 100× the intended reputation reward (if you want to give 400 rep, put 40000 in **RewardFactionOverride\***).
&nbsp;

### TimeAllowed
Time in seconds that the player has to complete this quest.
&nbsp;

### AllowableRaces
Race mask of [ChrRace IDs](/files/DBC/335/chrraces#id) allowed to get the quest.
0 means the quest is accessible for all races.
| Value | Flag   | Name      |  | Value | Flag   | Name      |
|-------|--------|-----------|--|-------|--------|-----------|
|     1 | 0x0001 | Human     |  |     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |  |    16 | 0x0010 | Undead    |
|     8 | 0x0008 | Night Elf |  |    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |  |   128 | 0x0080 | Troll     |
|  1024 | 0x0400 | Draenei   |  |   512 | 0x0200 | Blood Elf |
|  1101 | 0x044D | *_Alliance_* |  |   690 | 0x02B2 | *_Horde_* |
{.dense}

&nbsp;

### LogTitle
Title of the quest.
&nbsp;

### LogDescription
Short description of quest objectives.
&nbsp;

### QuestDescription
Fulltext quest description under heading: _*Description*_

You can use certain placeholders that will be filled in in-game:
* `$B`: line break
* `$N`: player name
* `$R`: player race
* `$C`: player class
* `$Gmale:female;`: _male_ and _female_ can be replace with any synonymn you want and one will be chosen depending on the players gender
&nbsp;

### AreaDescription
Text for externally completed objective (e.g. area discovery)
&nbsp;

### QuestCompletionLog
Objective text displayed after all other objectives are completed.
Example: `Return to <NPC> at <Location> in <Zone>.`
&nbsp;

### RequiredNpcOrGo\[1-4]
* **RequiredNpcOrGo\*** > 0: The required [creature entry](../world/creature_template#entry) the player needs to kill/cast on in order to complete the quest.
* **RequiredNpcOrGo\*** < 0: The required [gameobject entry](../world/gameobject_template#entry) the player needs to cast on in order to complete the quest.

If [SpecialFlags](../world/quest_template_addon#specialflags) contains QUEST_SPECIAL_FLAGS_CAST (0x20), the objective is to cast on target, else kill.
> Note: If QUEST_SPECIAL_FLAGS_CAST is set and the spell has effects Send Event or Quest Complete, this field may be left empty.
{.is-info}

&nbsp;

### RequiredNpcOrGoCount\[1-4]
The number of times the creature or gameobject must be killed or casted upon.
&nbsp;

### RequiredItemId\[1-6]
The [item entry](../world/item_template#entry) the player needs to collect to complete the quest.
&nbsp;

### RequiredItemCount\[1-6]
The amount of required items.
&nbsp;

### Unknown0
*unknown & unused*
&nbsp;

### ObjectiveText\[1-4]
Used to define non-standard objective texts, that show up in the quest log. Example, "Heal fallen warrior" and the number gets added by **Required\*Count\*** values.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

## Examples
Always use [PrevQuestID](../world/quest_template_addon#prevquestid) before using [NextQuestID](../world/quest_template_addon#nextquestid). NextQuestID is considered optional and to be used only when PrevQuestID is not sufficient.
&nbsp;

### Basic quest
Single, stand-alone quest with no prerequisites
```
questA
```
```sql
ID = questA        PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;


### Chain of quests
Player get quests in a strict chain that must be completed in a specific order.
```
.   questA
      |
    questB
      |
    questC
      |
    questD
```
```sql
ID = questA   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questB
ID = questB   PrevQuestID = questA   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questC
ID = questC   PrevQuestID = questB   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questD
ID = questD   PrevQuestID = questC   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Chain of quests with multiple start quests
Player should only be allowed to complete one of three possible.
```
.   questA     questB    questC
      \           |         /
        ------ questD -----
                  |
               questE
```
```sql
ID = questA   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = questA   RewardNextQuest = questD
ID = questB   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = questA   RewardNextQuest = questD
ID = questC   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = questA   RewardNextQuest = questD
ID = questD   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questE
ID = questE   PrevQuestID = questD   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Chain of quests with multiple start quests
Player must complete all three initial quests before D becomes available.
```
.   questA     questB    questC
      \           |         /
        ------ questD -----
                  |
               questE
```
```sql
ID = questA   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = -questA  RewardNextQuest = questD
ID = questB   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = -questA  RewardNextQuest = questD
ID = questC   PrevQuestID = 0        NextQuestID = questD   ExclusiveGroup = -questA  RewardNextQuest = questD
ID = questD   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questE
ID = questE   PrevQuestID = questD   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Quests with split and a child quest
Completing A unlocks B and C that can be done at the same time. They both need to be completed before D becomes available. X is needed to obtain item for C and this quest should only be available if C is active.
```
.               questA
              /        \
          questB     questC  -  questX
              \        /
                questD
```
```sql
ID = questA   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
ID = questB   PrevQuestID = questA   NextQuestID = questD   ExclusiveGroup = -questB  RewardNextQuest = 0
ID = questC   PrevQuestID = questA   NextQuestID = questD   ExclusiveGroup = -questB  RewardNextQuest = 0
ID = questX   PrevQuestID = -questC  NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
ID = questD   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Multiple quest chains, leading to one final quest
Player may complete (not required to) X, but has to complete all three quest chains before final quest becomes available.
```
.                questX
                   |
     questA      questC      questE
       |           |            |
     questB      questD      questF
       \           |           /
         ------- questG ------
```
```sql
ID = questX   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questC
ID = questA   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questB
ID = questB   PrevQuestID = questA   NextQuestID = questG   ExclusiveGroup = -questB  RewardNextQuest = 0
ID = questC   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questD
ID = questD   PrevQuestID = questC   NextQuestID = questG   ExclusiveGroup = -questB  RewardNextQuest = 0
ID = questE   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questF
ID = questF   PrevQuestID = questE   NextQuestID = questG   ExclusiveGroup = -questB  RewardNextQuest = 0

ID = questG   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Complicated
Player must first complete A, then B to unlock the chain from C to E. Three other quests (F, G, H) in a group will also be unlocked, those can be done at the same time. The three grouped quests must all be completed before I becomes available. Completion of E and I is required to obtain the final quest.
```
.                questA
                   |
                 questB
              /          \
           questC       questF
             |          questG
           questD       questH
             |            |
           questE       questI
             \           /
                 questJ

```
```sql
ID = questA   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questB
ID = questB   PrevQuestID = questA   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0

ID = questC   PrevQuestID = questB   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questD
ID = questD   PrevQuestID = questC   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questE
ID = questE   PrevQuestID = questD   NextQuestID = questJ   ExclusiveGroup = -questE  RewardNextQuest = 0

ID = questF   PrevQuestID = questB   NextQuestID = questI   ExclusiveGroup = -questF  RewardNextQuest = 0
ID = questG   PrevQuestID = questB   NextQuestID = questI   ExclusiveGroup = -questF  RewardNextQuest = 0
ID = questH   PrevQuestID = questB   NextQuestID = questI   ExclusiveGroup = -questF  RewardNextQuest = 0

ID = questI   PrevQuestID = 0        NextQuestID = questJ   ExclusiveGroup = -questE  RewardNextQuest = 0

ID = questJ   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
&nbsp;

### Impossible - many quests may unlock many
Player can choose between two alternative chains (Chain A or B, but not both chains). A2 or B2 should unlock C, D and E when complete. When all three complete, F should be unlocked. If player get A3 or B3 after complete F, depends on if chain A or B was chosen.
```
.                questA1             questB1
                    |                   |
                 questA2             questB2
                    \                  /
                     ----  questC  ----
                           questD
                           questE
                             |
                           questF
                         /        \
                     questA3     questB3
```
```sql
ID = questA1  PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questA2
ID = questA2  PrevQuestID = questA1  NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0

ID = questB1  PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = questB2
ID = questB2  PrevQuestID = questB1  NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0

ID = questC   PrevQuestID = 0        NextQuestID = questF   ExclusiveGroup = -questC  RewardNextQuest = 0
ID = questD   PrevQuestID = 0        NextQuestID = questF   ExclusiveGroup = -questC  RewardNextQuest = 0
ID = questE   PrevQuestID = 0        NextQuestID = questF   ExclusiveGroup = -questC  RewardNextQuest = 0

ID = questF   PrevQuestID = 0        NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0

ID = questA3  PrevQuestID = questF   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
ID = questB3  PrevQuestID = questF   NextQuestID = 0        ExclusiveGroup = 0        RewardNextQuest = 0
```
> Note: If player can choose between chain A or B may be determined by faction status (aldor or scryer), using [RequiredMinRepFaction](../world/quest_template_addon#requiredminrepfaction) = 1. Player should not be able to be neutral+1 with both at the same time. This may be the common threshold to obtain aldor or scryer quests (this is unsure). If that is the case, only the unlock of C, D and E after complete A2 or B2 is the impossible part.
{.is-info}

> Note: With the [conditions](../world/conditions) now every quest chain is possible.
{.is-info}





<a href="https://trinitycore.info/en/database/335/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
