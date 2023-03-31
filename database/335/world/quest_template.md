---
title: quest_template
description: 
published: true
date: 2022-11-21T21:30:20.797Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T22:08:30.767Z
---

<a href="https://trinitycore.info/en/database/335/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
| [RequiredFactionId1](#requiredfactionid1) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredFactionId2](#requiredfactionid2) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredFactionValue1](#requiredfactionvalue1) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredFactionValue2](#requiredfactionvalue2) | mediumint | signed |  | NO | 0 |  |  |
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
| [RewardItem1](#rewarditem1) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount1](#rewardamount1) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem2](#rewarditem2) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount2](#rewardamount2) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem3](#rewarditem3) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount3](#rewardamount3) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardItem4](#rewarditem4) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardAmount4](#rewardamount4) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop1](#itemdrop1) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity1](#itemdropquantity1) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop2](#itemdrop2) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity2](#itemdropquantity2) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop3](#itemdrop3) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity3](#itemdropquantity3) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDrop4](#itemdrop4) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity4](#itemdropquantity4) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID1](#rewardchoiceitemid1) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity1](#rewardchoiceitemquantity1) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID2](#rewardchoiceitemid2) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity2](#rewardchoiceitemquantity2) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID3](#rewardchoiceitemid3) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity3](#rewardchoiceitemquantity3) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID4](#rewardchoiceitemid4) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity4](#rewardchoiceitemquantity4) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID5](#rewardchoiceitemid5) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity5](#rewardchoiceitemquantity5) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID6](#rewardchoiceitemid6) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity6](#rewardchoiceitemquantity6) | smallint | unsigned |  | NO | 0 |  |  |
| [POIContinent](#poicontinent) | smallint | unsigned |  | NO | 0 |  |  |
| [POIx](#poix) | float |  |  | NO | 0 |  |  |
| [POIy](#poiy) | float |  |  | NO | 0 |  |  |
| [POIPriority](#poipriority) | mediumint | unsigned |  | NO | 0 |  |  |
| [RewardTitle](#rewardtitle) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardTalents](#rewardtalents) | tinyint | unsigned |  | NO | 0 |  |  |
| [RewardArenaPoints](#rewardarenapoints) | smallint | unsigned |  | NO | 0 |  |  |
| [RewardFactionID1](#rewardfactionid1) | smallint | unsigned |  | NO | 0 |  | faction id from Faction.dbc in this case |
| [RewardFactionValue1](#rewardfactionvalue1) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride1](#rewardfactionoverride1) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID2](#rewardfactionid2) | smallint | unsigned |  | NO | 0 |  | faction id from Faction.dbc in this case |
| [RewardFactionValue2](#rewardfactionvalue2) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride2](#rewardfactionoverride2) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID3](#rewardfactionid3) | smallint | unsigned |  | NO | 0 |  | faction id from Faction.dbc in this case |
| [RewardFactionValue3](#rewardfactionvalue3) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride3](#rewardfactionoverride3) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID4](#rewardfactionid4) | smallint | unsigned |  | NO | 0 |  | faction id from Faction.dbc in this case |
| [RewardFactionValue4](#rewardfactionvalue4) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride4](#rewardfactionoverride4) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionID5](#rewardfactionid5) | smallint | unsigned |  | NO | 0 |  | faction id from Faction.dbc in this case |
| [RewardFactionValue5](#rewardfactionvalue5) | mediumint | signed |  | NO | 0 |  |  |
| [RewardFactionOverride5](#rewardfactionoverride5) | mediumint | signed |  | NO | 0 |  |  |
| [TimeAllowed](#timeallowed) | int | unsigned |  | NO | 0 |  |  |
| [AllowableRaces](#allowableraces) | smallint | unsigned |  | NO | 0 |  |  |
| [LogTitle](#logtitle) | text |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | text |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | text |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | text |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | text |  |  | YES | NULL |  |  |
| [RequiredNpcOrGo1](#requirednpcorgo1) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo2](#requirednpcorgo2) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo3](#requirednpcorgo3) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGo4](#requirednpcorgo4) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount1](#requirednpcorgocount1) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount2](#requirednpcorgocount2) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount3](#requirednpcorgocount3) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredNpcOrGoCount4](#requirednpcorgocount4) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId1](#requireditemid1) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId2](#requireditemid2) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId3](#requireditemid3) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId4](#requireditemid4) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId5](#requireditemid5) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemId6](#requireditemid6) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount1](#requireditemcount1) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount2](#requireditemcount2) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount3](#requireditemcount3) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount4](#requireditemcount4) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount5](#requireditemcount5) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredItemCount6](#requireditemcount6) | smallint | unsigned |  | NO | 0 |  |  |
| [Unknown0](#unknown0) | tinyint | unsigned |  | NO | 0 |  |  |
| [ObjectiveText1](#objectivetext1) | text |  |  | YES | NULL |  |  |
| [ObjectiveText2](#objectivetext2) | text |  |  | YES | NULL |  |  |
| [ObjectiveText3](#objectivetext3) | text |  |  | YES | NULL |  |  |
| [ObjectiveText4](#objectivetext4) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### QuestType
*- no description -*
&nbsp;

### QuestLevel
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### QuestSortID
*- no description -*
&nbsp;

### QuestInfoID
*- no description -*
&nbsp;

### SuggestedGroupNum
*- no description -*
&nbsp;

### RequiredFactionId1
*- no description -*
&nbsp;

### RequiredFactionId2
*- no description -*
&nbsp;

### RequiredFactionValue1
*- no description -*
&nbsp;

### RequiredFactionValue2
*- no description -*
&nbsp;

### RewardNextQuest
*- no description -*
&nbsp;

### RewardXPDifficulty
*- no description -*
&nbsp;

### RewardMoney
*- no description -*
&nbsp;

### RewardBonusMoney
*- no description -*
&nbsp;

### RewardDisplaySpell
*- no description -*
&nbsp;

### RewardSpell
*- no description -*
&nbsp;

### RewardHonor
*- no description -*
&nbsp;

### RewardKillHonor
*- no description -*
&nbsp;

### StartItem
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### RequiredPlayerKills
*- no description -*
&nbsp;

### RewardItem1
*- no description -*
&nbsp;

### RewardAmount1
*- no description -*
&nbsp;

### RewardItem2
*- no description -*
&nbsp;

### RewardAmount2
*- no description -*
&nbsp;

### RewardItem3
*- no description -*
&nbsp;

### RewardAmount3
*- no description -*
&nbsp;

### RewardItem4
*- no description -*
&nbsp;

### RewardAmount4
*- no description -*
&nbsp;

### ItemDrop1
*- no description -*
&nbsp;

### ItemDropQuantity1
*- no description -*
&nbsp;

### ItemDrop2
*- no description -*
&nbsp;

### ItemDropQuantity2
*- no description -*
&nbsp;

### ItemDrop3
*- no description -*
&nbsp;

### ItemDropQuantity3
*- no description -*
&nbsp;

### ItemDrop4
*- no description -*
&nbsp;

### ItemDropQuantity4
*- no description -*
&nbsp;

### RewardChoiceItemID1
*- no description -*
&nbsp;

### RewardChoiceItemQuantity1
*- no description -*
&nbsp;

### RewardChoiceItemID2
*- no description -*
&nbsp;

### RewardChoiceItemQuantity2
*- no description -*
&nbsp;

### RewardChoiceItemID3
*- no description -*
&nbsp;

### RewardChoiceItemQuantity3
*- no description -*
&nbsp;

### RewardChoiceItemID4
*- no description -*
&nbsp;

### RewardChoiceItemQuantity4
*- no description -*
&nbsp;

### RewardChoiceItemID5
*- no description -*
&nbsp;

### RewardChoiceItemQuantity5
*- no description -*
&nbsp;

### RewardChoiceItemID6
*- no description -*
&nbsp;

### RewardChoiceItemQuantity6
*- no description -*
&nbsp;

### POIContinent
*- no description -*
&nbsp;

### POIx
*- no description -*
&nbsp;

### POIy
*- no description -*
&nbsp;

### POIPriority
*- no description -*
&nbsp;

### RewardTitle
*- no description -*
&nbsp;

### RewardTalents
*- no description -*
&nbsp;

### RewardArenaPoints
*- no description -*
&nbsp;

### RewardFactionID1
*- no description -*
&nbsp;

### RewardFactionValue1
*- no description -*
&nbsp;

### RewardFactionOverride1
*- no description -*
&nbsp;

### RewardFactionID2
*- no description -*
&nbsp;

### RewardFactionValue2
*- no description -*
&nbsp;

### RewardFactionOverride2
*- no description -*
&nbsp;

### RewardFactionID3
*- no description -*
&nbsp;

### RewardFactionValue3
*- no description -*
&nbsp;

### RewardFactionOverride3
*- no description -*
&nbsp;

### RewardFactionID4
*- no description -*
&nbsp;

### RewardFactionValue4
*- no description -*
&nbsp;

### RewardFactionOverride4
*- no description -*
&nbsp;

### RewardFactionID5
*- no description -*
&nbsp;

### RewardFactionValue5
*- no description -*
&nbsp;

### RewardFactionOverride5
*- no description -*
&nbsp;

### TimeAllowed
*- no description -*
&nbsp;

### AllowableRaces
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

### QuestCompletionLog
*- no description -*
&nbsp;

### RequiredNpcOrGo1
*- no description -*
&nbsp;

### RequiredNpcOrGo2
*- no description -*
&nbsp;

### RequiredNpcOrGo3
*- no description -*
&nbsp;

### RequiredNpcOrGo4
*- no description -*
&nbsp;

### RequiredNpcOrGoCount1
*- no description -*
&nbsp;

### RequiredNpcOrGoCount2
*- no description -*
&nbsp;

### RequiredNpcOrGoCount3
*- no description -*
&nbsp;

### RequiredNpcOrGoCount4
*- no description -*
&nbsp;

### RequiredItemId1
*- no description -*
&nbsp;

### RequiredItemId2
*- no description -*
&nbsp;

### RequiredItemId3
*- no description -*
&nbsp;

### RequiredItemId4
*- no description -*
&nbsp;

### RequiredItemId5
*- no description -*
&nbsp;

### RequiredItemId6
*- no description -*
&nbsp;

### RequiredItemCount1
*- no description -*
&nbsp;

### RequiredItemCount2
*- no description -*
&nbsp;

### RequiredItemCount3
*- no description -*
&nbsp;

### RequiredItemCount4
*- no description -*
&nbsp;

### RequiredItemCount5
*- no description -*
&nbsp;

### RequiredItemCount6
*- no description -*
&nbsp;

### Unknown0
*- no description -*
&nbsp;

### ObjectiveText1
*- no description -*
&nbsp;

### ObjectiveText2
*- no description -*
&nbsp;

### ObjectiveText3
*- no description -*
&nbsp;

### ObjectiveText4
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
