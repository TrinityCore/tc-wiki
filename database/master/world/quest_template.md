---
title: quest_template
description: 
published: true
date: 2021-08-30T20:38:02.303Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_reward_display_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [QuestType](#questtype) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [QuestPackageID](#questpackageid) | int(10) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestSortID](#questsortid) | smallint(6) | signed |  | NO | 0 |  |  |
| [QuestInfoID](#questinfoid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SuggestedGroupNum](#suggestedgroupnum) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RewardNextQuest](#rewardnextquest) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardXPDifficulty](#rewardxpdifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardXPMultiplier](#rewardxpmultiplier) | float |  |  | NO | 1 |  |  |
| [RewardMoney](#rewardmoney) | int(11) | signed |  | NO | 0 |  |  |
| [RewardMoneyDifficulty](#rewardmoneydifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardMoneyMultiplier](#rewardmoneymultiplier) | float |  |  | NO | 1 |  |  |
| [RewardBonusMoney](#rewardbonusmoney) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell1](#rewarddisplayspell1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell2](#rewarddisplayspell2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell3](#rewarddisplayspell3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardSpell](#rewardspell) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardHonor](#rewardhonor) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardKillHonor](#rewardkillhonor) | int(10) | unsigned |  | NO | 0 |  |  |
| [StartItem](#startitem) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPDifficulty](#rewardartifactxpdifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPMultiplier](#rewardartifactxpmultiplier) | float |  |  | NO | 1 |  |  |
| [RewardArtifactCategoryID](#rewardartifactcategoryid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [FlagsEx](#flagsex) | int(10) | unsigned |  | NO | 0 |  |  |
| [FlagsEx2](#flagsex2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem1](#rewarditem1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount1](#rewardamount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem2](#rewarditem2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount2](#rewardamount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem3](#rewarditem3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount3](#rewardamount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem4](#rewarditem4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount4](#rewardamount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop1](#itemdrop1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity1](#itemdropquantity1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop2](#itemdrop2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity2](#itemdropquantity2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop3](#itemdrop3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity3](#itemdropquantity3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop4](#itemdrop4) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity4](#itemdropquantity4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID1](#rewardchoiceitemid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity1](#rewardchoiceitemquantity1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID1](#rewardchoiceitemdisplayid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID2](#rewardchoiceitemid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity2](#rewardchoiceitemquantity2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID2](#rewardchoiceitemdisplayid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID3](#rewardchoiceitemid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity3](#rewardchoiceitemquantity3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID3](#rewardchoiceitemdisplayid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID4](#rewardchoiceitemid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity4](#rewardchoiceitemquantity4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID4](#rewardchoiceitemdisplayid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID5](#rewardchoiceitemid5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity5](#rewardchoiceitemquantity5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID5](#rewardchoiceitemdisplayid5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID6](#rewardchoiceitemid6) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity6](#rewardchoiceitemquantity6) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID6](#rewardchoiceitemdisplayid6) | int(10) | unsigned |  | NO | 0 |  |  |
| [POIContinent](#poicontinent) | int(10) | unsigned |  | NO | 0 |  |  |
| [POIx](#poix) | float |  |  | NO | 0 |  |  |
| [POIy](#poiy) | float |  |  | NO | 0 |  |  |
| [POIPriority](#poipriority) | int(11) | signed |  | NO | 0 |  |  |
| [RewardTitle](#rewardtitle) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArenaPoints](#rewardarenapoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardSkillLineID](#rewardskilllineid) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardNumSkillUps](#rewardnumskillups) | int(10) | unsigned |  | NO | 0 |  |  |
| [PortraitGiver](#portraitgiver) | int(10) | unsigned |  | NO | 0 |  |  |
| [PortraitGiverMount](#portraitgivermount) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitGiverModelSceneID](#portraitgivermodelsceneid) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitTurnIn](#portraitturnin) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionID1](#rewardfactionid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue1](#rewardfactionvalue1) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride1](#rewardfactionoverride1) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn1](#rewardfactioncapin1) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID2](#rewardfactionid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue2](#rewardfactionvalue2) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride2](#rewardfactionoverride2) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn2](#rewardfactioncapin2) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID3](#rewardfactionid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue3](#rewardfactionvalue3) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride3](#rewardfactionoverride3) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn3](#rewardfactioncapin3) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID4](#rewardfactionid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue4](#rewardfactionvalue4) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride4](#rewardfactionoverride4) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn4](#rewardfactioncapin4) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID5](#rewardfactionid5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue5](#rewardfactionvalue5) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride5](#rewardfactionoverride5) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn5](#rewardfactioncapin5) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionFlags](#rewardfactionflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID1](#rewardcurrencyid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty1](#rewardcurrencyqty1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID2](#rewardcurrencyid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty2](#rewardcurrencyqty2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID3](#rewardcurrencyid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty3](#rewardcurrencyqty3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID4](#rewardcurrencyid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty4](#rewardcurrencyqty4) | int(10) | unsigned |  | NO | 0 |  |  |
| [AcceptedSoundKitID](#acceptedsoundkitid) | int(10) | unsigned |  | NO | 0 |  |  |
| [CompleteSoundKitID](#completesoundkitid) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaGroupID](#areagroupid) | int(10) | unsigned |  | NO | 0 |  |  |
| [TimeAllowed](#timeallowed) | int(10) | unsigned |  | NO | 0 |  |  |
| [AllowableRaces](#allowableraces) | bigint(20) | unsigned |  | YES | 0 |  |  |
| [TreasurePickerID](#treasurepickerid) | int(11) | signed |  | NO | 0 |  |  |
| [Expansion](#expansion) | int(11) | signed |  | NO | 0 |  |  |
| [ManagedWorldStateID](#managedworldstateid) | int(11) | signed |  | NO | 0 |  |  |
| [QuestSessionBonus](#questsessionbonus) | int(11) | signed |  | NO | 0 |  |  |
| [LogTitle](#logtitle) | text |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | text |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | text |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | text |  |  | YES | NULL |  |  |
| [PortraitGiverText](#portraitgivertext) | text |  |  | YES | NULL |  |  |
| [PortraitGiverName](#portraitgivername) | text |  |  | YES | NULL |  |  |
| [PortraitTurnInText](#portraitturnintext) | text |  |  | YES | NULL |  |  |
| [PortraitTurnInName](#portraitturninname) | text |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### QuestType
*- no description -*
&nbsp;

### QuestPackageID
*- no description -*
&nbsp;

### ContentTuningID
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

### RewardNextQuest
*- no description -*
&nbsp;

### RewardXPDifficulty
*- no description -*
&nbsp;

### RewardXPMultiplier
*- no description -*
&nbsp;

### RewardMoney
*- no description -*
&nbsp;

### RewardMoneyDifficulty
*- no description -*
&nbsp;

### RewardMoneyMultiplier
*- no description -*
&nbsp;

### RewardBonusMoney
*- no description -*
&nbsp;

### RewardDisplaySpell1
*- no description -*
&nbsp;

### RewardDisplaySpell2
*- no description -*
&nbsp;

### RewardDisplaySpell3
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
*- no description -*
&nbsp;

### FlagsEx
*- no description -*
&nbsp;

### FlagsEx2
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

### RewardChoiceItemDisplayID1
*- no description -*
&nbsp;

### RewardChoiceItemID2
*- no description -*
&nbsp;

### RewardChoiceItemQuantity2
*- no description -*
&nbsp;

### RewardChoiceItemDisplayID2
*- no description -*
&nbsp;

### RewardChoiceItemID3
*- no description -*
&nbsp;

### RewardChoiceItemQuantity3
*- no description -*
&nbsp;

### RewardChoiceItemDisplayID3
*- no description -*
&nbsp;

### RewardChoiceItemID4
*- no description -*
&nbsp;

### RewardChoiceItemQuantity4
*- no description -*
&nbsp;

### RewardChoiceItemDisplayID4
*- no description -*
&nbsp;

### RewardChoiceItemID5
*- no description -*
&nbsp;

### RewardChoiceItemQuantity5
*- no description -*
&nbsp;

### RewardChoiceItemDisplayID5
*- no description -*
&nbsp;

### RewardChoiceItemID6
*- no description -*
&nbsp;

### RewardChoiceItemQuantity6
*- no description -*
&nbsp;

### RewardChoiceItemDisplayID6
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

### RewardArenaPoints
*- no description -*
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

### RewardFactionID1
*- no description -*
&nbsp;

### RewardFactionValue1
*- no description -*
&nbsp;

### RewardFactionOverride1
*- no description -*
&nbsp;

### RewardFactionCapIn1
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

### RewardFactionCapIn2
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

### RewardFactionCapIn3
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

### RewardFactionCapIn4
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

### RewardFactionCapIn5
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
*- no description -*
&nbsp;

### AllowableRaces
*- no description -*
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
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_reward_display_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

