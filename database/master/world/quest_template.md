---
title: quest_template
description: 
published: true
date: 2023-10-06T19:27:11.710Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:31.131Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_reward_display_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [QuestType](#questtype) | tinyint | unsigned |  | NO | 2 |  |  |
| [QuestPackageID](#questpackageid) | int | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | unsigned |  | NO | 0 |  |  |
| [QuestSortID](#questsortid) | smallint | signed |  | NO | 0 |  |  |
| [QuestInfoID](#questinfoid) | smallint | unsigned |  | NO | 0 |  |  |
| [SuggestedGroupNum](#suggestedgroupnum) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardNextQuest](#rewardnextquest) | int | unsigned |  | NO | 0 |  |  |
| [RewardXPDifficulty](#rewardxpdifficulty) | int | unsigned |  | NO | 0 |  |  |
| [RewardXPMultiplier](#rewardxpmultiplier) | float |  |  | NO | 1 |  |  |
| [RewardMoneyDifficulty](#rewardmoneydifficulty) | int | unsigned |  | NO | 0 |  |  |
| [RewardMoneyMultiplier](#rewardmoneymultiplier) | float |  |  | NO | 1 |  |  |
| [RewardBonusMoney](#rewardbonusmoney) | int | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell1](#rewarddisplayspell1) | int | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell2](#rewarddisplayspell2) | int | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell3](#rewarddisplayspell3) | int | unsigned |  | NO | 0 |  |  |
| [RewardSpell](#rewardspell) | int | unsigned |  | NO | 0 |  |  |
| [RewardHonor](#rewardhonor) | int | unsigned |  | NO | 0 |  |  |
| [RewardKillHonor](#rewardkillhonor) | int | unsigned |  | NO | 0 |  |  |
| [StartItem](#startitem) | int | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPDifficulty](#rewardartifactxpdifficulty) | int | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPMultiplier](#rewardartifactxpmultiplier) | float |  |  | NO | 1 |  |  |
| [RewardArtifactCategoryID](#rewardartifactcategoryid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [FlagsEx](#flagsex) | int | unsigned |  | NO | 0 |  |  |
| [FlagsEx2](#flagsex2) | int | unsigned |  | NO | 0 |  |  |
| [RewardItem1](#rewarditem1) | int | unsigned |  | NO | 0 |  |  |
| [RewardAmount1](#rewardamount1) | int | unsigned |  | NO | 0 |  |  |
| [RewardItem2](#rewarditem2) | int | unsigned |  | NO | 0 |  |  |
| [RewardAmount2](#rewardamount2) | int | unsigned |  | NO | 0 |  |  |
| [RewardItem3](#rewarditem3) | int | unsigned |  | NO | 0 |  |  |
| [RewardAmount3](#rewardamount3) | int | unsigned |  | NO | 0 |  |  |
| [RewardItem4](#rewarditem4) | int | unsigned |  | NO | 0 |  |  |
| [RewardAmount4](#rewardamount4) | int | unsigned |  | NO | 0 |  |  |
| [ItemDrop1](#itemdrop1) | int | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity1](#itemdropquantity1) | int | unsigned |  | NO | 0 |  |  |
| [ItemDrop2](#itemdrop2) | int | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity2](#itemdropquantity2) | int | unsigned |  | NO | 0 |  |  |
| [ItemDrop3](#itemdrop3) | int | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity3](#itemdropquantity3) | int | unsigned |  | NO | 0 |  |  |
| [ItemDrop4](#itemdrop4) | int | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity4](#itemdropquantity4) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID1](#rewardchoiceitemid1) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity1](#rewardchoiceitemquantity1) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID1](#rewardchoiceitemdisplayid1) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID2](#rewardchoiceitemid2) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity2](#rewardchoiceitemquantity2) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID2](#rewardchoiceitemdisplayid2) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID3](#rewardchoiceitemid3) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity3](#rewardchoiceitemquantity3) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID3](#rewardchoiceitemdisplayid3) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID4](#rewardchoiceitemid4) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity4](#rewardchoiceitemquantity4) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID4](#rewardchoiceitemdisplayid4) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID5](#rewardchoiceitemid5) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity5](#rewardchoiceitemquantity5) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID5](#rewardchoiceitemdisplayid5) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID6](#rewardchoiceitemid6) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity6](#rewardchoiceitemquantity6) | int | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID6](#rewardchoiceitemdisplayid6) | int | unsigned |  | NO | 0 |  |  |
| [POIContinent](#poicontinent) | int | unsigned |  | NO | 0 |  |  |
| [POIx](#poix) | float |  |  | NO | 0 |  |  |
| [POIy](#poiy) | float |  |  | NO | 0 |  |  |
| [POIPriority](#poipriority) | int | signed |  | NO | 0 |  |  |
| [RewardTitle](#rewardtitle) | int | unsigned |  | NO | 0 |  |  |
| [RewardArenaPoints](#rewardarenapoints) | int | unsigned |  | NO | 0 |  |  |
| [RewardSkillLineID](#rewardskilllineid) | int | unsigned |  | NO | 0 |  |  |
| [RewardNumSkillUps](#rewardnumskillups) | int | unsigned |  | NO | 0 |  |  |
| [PortraitGiver](#portraitgiver) | int | unsigned |  | NO | 0 |  |  |
| [PortraitGiverMount](#portraitgivermount) | int | signed |  | NO | 0 |  |  |
| [PortraitGiverModelSceneID](#portraitgivermodelsceneid) | int | signed |  | NO | 0 |  |  |
| [PortraitTurnIn](#portraitturnin) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionID1](#rewardfactionid1) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue1](#rewardfactionvalue1) | int | signed |  | NO | 0 |  |  |
| [RewardFactionOverride1](#rewardfactionoverride1) | int | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn1](#rewardfactioncapin1) | int | signed |  | NO | 0 |  |  |
| [RewardFactionID2](#rewardfactionid2) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue2](#rewardfactionvalue2) | int | signed |  | NO | 0 |  |  |
| [RewardFactionOverride2](#rewardfactionoverride2) | int | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn2](#rewardfactioncapin2) | int | signed |  | NO | 0 |  |  |
| [RewardFactionID3](#rewardfactionid3) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue3](#rewardfactionvalue3) | int | signed |  | NO | 0 |  |  |
| [RewardFactionOverride3](#rewardfactionoverride3) | int | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn3](#rewardfactioncapin3) | int | signed |  | NO | 0 |  |  |
| [RewardFactionID4](#rewardfactionid4) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue4](#rewardfactionvalue4) | int | signed |  | NO | 0 |  |  |
| [RewardFactionOverride4](#rewardfactionoverride4) | int | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn4](#rewardfactioncapin4) | int | signed |  | NO | 0 |  |  |
| [RewardFactionID5](#rewardfactionid5) | int | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue5](#rewardfactionvalue5) | int | signed |  | NO | 0 |  |  |
| [RewardFactionOverride5](#rewardfactionoverride5) | int | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn5](#rewardfactioncapin5) | int | signed |  | NO | 0 |  |  |
| [RewardFactionFlags](#rewardfactionflags) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID1](#rewardcurrencyid1) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty1](#rewardcurrencyqty1) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID2](#rewardcurrencyid2) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty2](#rewardcurrencyqty2) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID3](#rewardcurrencyid3) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty3](#rewardcurrencyqty3) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID4](#rewardcurrencyid4) | int | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty4](#rewardcurrencyqty4) | int | unsigned |  | NO | 0 |  |  |
| [AcceptedSoundKitID](#acceptedsoundkitid) | int | unsigned |  | NO | 0 |  |  |
| [CompleteSoundKitID](#completesoundkitid) | int | unsigned |  | NO | 0 |  |  |
| [AreaGroupID](#areagroupid) | int | unsigned |  | NO | 0 |  |  |
| [TimeAllowed](#timeallowed) | bigint | signed |  | NO | 0 |  |  |
| [AllowableRaces](#allowableraces) | bigint | unsigned |  | YES | 0 |  |  |
| [TreasurePickerID](#treasurepickerid) | int | signed |  | NO | 0 |  |  |
| [Expansion](#expansion) | int | signed |  | NO | 0 |  |  |
| [ManagedWorldStateID](#managedworldstateid) | int | signed |  | NO | 0 |  |  |
| [QuestSessionBonus](#questsessionbonus) | int | signed |  | NO | 0 |  |  |
| [LogTitle](#logtitle) | mediumtext |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | mediumtext |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | mediumtext |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverText](#portraitgivertext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverName](#portraitgivername) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInText](#portraitturnintext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInName](#portraitturninname) | mediumtext |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
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

### ContentTuningID
*- no description -*
&nbsp;

### QuestSortID
This field defines under what category the quest falls in the quest log.
* **QuestSortID** > 0: positive [AreaTable ID](https://wow.tools/dbc/?dbc=areatable)
* **QuestSortID** < 0: negative [QuestSort ID](https://wow.tools/dbc/?dbc=questsort) (in general profession, class or holiday quests)

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
[QuestInfo ID](https://wow.tools/dbc/?dbc=questinfo)
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

### RewardNextQuest
**ID** of the next quest in a chain. The result is, that if you end the quest, the new quest instantly appears from the quest giver.
&nbsp;

### RewardXPDifficulty
references [QuestXP Difficulty](https://wow.tools/dbc/?dbc=questxp)
The amount of XP is determined by the **QuestLevel** (row) and **RewardXPDifficulty** (column) when reading from [QuestXP](https://wow.tools/dbc/?dbc=questxp) table.

If the quest is repeatable, XP will be given only once. The total XP that a character will receive is also affected by the level difference between the character's level and the quest's level.
&nbsp;

### RewardXPMultiplier
*- no description -*
&nbsp;

### RewardMoneyDifficulty
*- no description -*
&nbsp;

### RewardMoneyMultiplier
*- no description -*
&nbsp;

### RewardBonusMoney
The money a character at level 80 would get when they complete this quest.
&nbsp;

### RewardDisplaySpell[1-3]
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
[Item entry](https://wow.tools/dbc/?dbc=itemsparse) given when accepting the quest. Item will be deleted when the quest is abandoned.
&nbsp;

### RewardArtifactXPDifficulty
*- no description -*
&nbsp;

### RewardArtifactXPMultiplier
*- no description -*
&nbsp;

### RewardArtifactCategoryID
*- no description -*
&nbsp;

### Flags
[`enum QuestFlags`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Quests/QuestDef.h)
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

### FlagsEx
*- no description -*
&nbsp;

### FlagsEx2
*- no description -*
&nbsp;

### RewardItem\[1-4]
[Item entry](../world/item_template#entry) given as reward (no choice).
&nbsp;

### RewardAmount\[1-4]
The amount of items forced onto the player.
&nbsp;

### ItemDrop\[1-4]
[Item entry](https://wow.tools/dbc/?dbc=itemsparse) that is needed indirectly by the quest. For example, the quests asks for item X but the only way to get item X is by activating item Y; however, item Y is also a quest item. Therefore you set item Y's entry in this field. This requirement will not appear in the quest text, it is just for the core to know when to drop a quest item that isn't in the **RequiredItemId\*** field but is still needed by the quest.
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
[Map ID](https://wow.tools/dbc/?dbc=map) of a quest point of interest (POI - Point Of Interest). POI will be shown on the map when quest is active.
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
[CharTitle ID](https://wow.tools/dbc/?dbc=chartitles) to reward on completion.
&nbsp;

### RewardArenaPoints
An amount of arena points to reward on completion.
&nbsp;

### RewardSkillLineID
*- no description -*
&nbsp;

### RewardNumSkillUps
*- no description -*
&nbsp;

### PortraitGiver
*- no description -*
&nbsp;

### PortraitGiverMount
*- no description -*
&nbsp;

### PortraitGiverModelSceneID
*- no description -*
&nbsp;

### PortraitTurnIn
*- no description -*
&nbsp;

### RewardFactionID\[1-5]
[Faction ID](https://wow.tools/dbc/?dbc=faction) for which the quest rewards reputation points.
&nbsp;

### RewardFactionValue\[1-5]
This field is used for reputation lookup in [QuestFactionReward](https://wow.tools/dbc/?dbc=questfactionreward). The value X in this field indicates index of [QuestFactionReward Difficulty](https://wow.tools/dbc/?dbc=questfactionreward).
* **RewardFactionValue\*** > 0: Reputation from the first row of [QuestFactionReward](https://wow.tools/dbc/?dbc=questfactionreward) is used.
* **RewardFactionValue\*** < 0: Reputation from the second row of [QuestFactionReward](https://wow.tools/dbc/?dbc=questfactionreward) is used.

| ID | Rep0 | Rep1 | Rep2 | Rep3 | Rep4 | Rep5 | Rep6 | Rep7 | Rep8 | Rep9 |
|----|------|------|------|------|------|------|------|------|------|------|
1 | 0 | 10 | 25 | 75 | 150 | 250 | 350 | 500 | 1000 | 5 |
2 | 0 | -10 | -25 | -75 | -150 | -250 | -350 | -500 | -1000 | -5 |
{.dense}

&nbsp;

### RewardFactionOverride\[1-5]
This field is used to give reputation values not present in [QuestFactionReward](https://wow.tools/dbc/?dbc=questfactionreward) or to override them if **RewardFactionValue\*** is wrong for some reason. The value in this field is 100× the intended reputation reward (if you want to give 400 rep, put 40000 in **RewardFactionOverride\***).
&nbsp;

### RewardFactionCapIn\[1-5]
*- no description -*
&nbsp;

### RewardFactionFlags
*- no description -*
&nbsp;

### RewardCurrencyID1
*- no description -*
&nbsp;

### RewardCurrencyQty1
*- no description -*
&nbsp;

### RewardCurrencyID2
*- no description -*
&nbsp;

### RewardCurrencyQty2
*- no description -*
&nbsp;

### RewardCurrencyID3
*- no description -*
&nbsp;

### RewardCurrencyQty3
*- no description -*
&nbsp;

### RewardCurrencyID4
*- no description -*
&nbsp;

### RewardCurrencyQty4
*- no description -*
&nbsp;

### AcceptedSoundKitID
*- no description -*
&nbsp;

### CompleteSoundKitID
*- no description -*
&nbsp;

### AreaGroupID
*- no description -*
&nbsp;

### TimeAllowed
Time in seconds that the player has to complete this quest.
&nbsp;

### AllowableRaces
Race mask of [ChrRace IDs](https://wow.tools/dbc/?dbc=chrraces) allowed to get the quest.
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
UPDATE ME
&nbsp;

### TreasurePickerID
*- no description -*
&nbsp;

### Expansion
*- no description -*
&nbsp;

### ManagedWorldStateID
*- no description -*
&nbsp;

### QuestSessionBonus
*- no description -*
&nbsp;

### LogTitle
*- no description -*
&nbsp;

### LogDescription
*- no description -*
&nbsp;

### QuestDescription
*- no description -*
&nbsp;

### AreaDescription
*- no description -*
&nbsp;

### PortraitGiverText
*- no description -*
&nbsp;

### PortraitGiverName
*- no description -*
&nbsp;

### PortraitTurnInText
*- no description -*
&nbsp;

### PortraitTurnInName
*- no description -*
&nbsp;

### QuestCompletionLog
Objective text displayed after all other objectives are completed.
Example: `Return to <NPC> at <Location> in <Zone>.`
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_reward_display_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
