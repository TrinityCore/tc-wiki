---
title: quest_template
description: 
published: true
date: 2021-08-30T09:24:17.516Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_reward_display_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [QuestType](#QuestType) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [QuestPackageID](#QuestPackageID) | int(10) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#ContentTuningID) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestSortID](#QuestSortID) | smallint(6) | signed |  | NO | 0 |  |  |
| [QuestInfoID](#QuestInfoID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SuggestedGroupNum](#SuggestedGroupNum) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RewardNextQuest](#RewardNextQuest) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardXPDifficulty](#RewardXPDifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardXPMultiplier](#RewardXPMultiplier) | float |  |  | NO | 1 |  |  |
| [RewardMoney](#RewardMoney) | int(11) | signed |  | NO | 0 |  |  |
| [RewardMoneyDifficulty](#RewardMoneyDifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardMoneyMultiplier](#RewardMoneyMultiplier) | float |  |  | NO | 1 |  |  |
| [RewardBonusMoney](#RewardBonusMoney) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell1](#RewardDisplaySpell1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell2](#RewardDisplaySpell2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardDisplaySpell3](#RewardDisplaySpell3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardSpell](#RewardSpell) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardHonor](#RewardHonor) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardKillHonor](#RewardKillHonor) | int(10) | unsigned |  | NO | 0 |  |  |
| [StartItem](#StartItem) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPDifficulty](#RewardArtifactXPDifficulty) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArtifactXPMultiplier](#RewardArtifactXPMultiplier) | float |  |  | NO | 1 |  |  |
| [RewardArtifactCategoryID](#RewardArtifactCategoryID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [FlagsEx](#FlagsEx) | int(10) | unsigned |  | NO | 0 |  |  |
| [FlagsEx2](#FlagsEx2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem1](#RewardItem1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount1](#RewardAmount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem2](#RewardItem2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount2](#RewardAmount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem3](#RewardItem3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount3](#RewardAmount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardItem4](#RewardItem4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardAmount4](#RewardAmount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop1](#ItemDrop1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity1](#ItemDropQuantity1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop2](#ItemDrop2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity2](#ItemDropQuantity2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop3](#ItemDrop3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity3](#ItemDropQuantity3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDrop4](#ItemDrop4) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemDropQuantity4](#ItemDropQuantity4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID1](#RewardChoiceItemID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity1](#RewardChoiceItemQuantity1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID1](#RewardChoiceItemDisplayID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID2](#RewardChoiceItemID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity2](#RewardChoiceItemQuantity2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID2](#RewardChoiceItemDisplayID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID3](#RewardChoiceItemID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity3](#RewardChoiceItemQuantity3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID3](#RewardChoiceItemDisplayID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID4](#RewardChoiceItemID4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity4](#RewardChoiceItemQuantity4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID4](#RewardChoiceItemDisplayID4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID5](#RewardChoiceItemID5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity5](#RewardChoiceItemQuantity5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID5](#RewardChoiceItemDisplayID5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemID6](#RewardChoiceItemID6) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemQuantity6](#RewardChoiceItemQuantity6) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardChoiceItemDisplayID6](#RewardChoiceItemDisplayID6) | int(10) | unsigned |  | NO | 0 |  |  |
| [POIContinent](#POIContinent) | int(10) | unsigned |  | NO | 0 |  |  |
| [POIx](#POIx) | float |  |  | NO | 0 |  |  |
| [POIy](#POIy) | float |  |  | NO | 0 |  |  |
| [POIPriority](#POIPriority) | int(11) | signed |  | NO | 0 |  |  |
| [RewardTitle](#RewardTitle) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardArenaPoints](#RewardArenaPoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardSkillLineID](#RewardSkillLineID) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardNumSkillUps](#RewardNumSkillUps) | int(10) | unsigned |  | NO | 0 |  |  |
| [PortraitGiver](#PortraitGiver) | int(10) | unsigned |  | NO | 0 |  |  |
| [PortraitGiverMount](#PortraitGiverMount) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitGiverModelSceneID](#PortraitGiverModelSceneID) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitTurnIn](#PortraitTurnIn) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionID1](#RewardFactionID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue1](#RewardFactionValue1) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride1](#RewardFactionOverride1) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn1](#RewardFactionCapIn1) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID2](#RewardFactionID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue2](#RewardFactionValue2) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride2](#RewardFactionOverride2) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn2](#RewardFactionCapIn2) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID3](#RewardFactionID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue3](#RewardFactionValue3) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride3](#RewardFactionOverride3) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn3](#RewardFactionCapIn3) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID4](#RewardFactionID4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue4](#RewardFactionValue4) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride4](#RewardFactionOverride4) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn4](#RewardFactionCapIn4) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionID5](#RewardFactionID5) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardFactionValue5](#RewardFactionValue5) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionOverride5](#RewardFactionOverride5) | int(11) | signed |  | NO | 0 |  |  |
| [RewardFactionCapIn5](#RewardFactionCapIn5) | int(10) | signed |  | NO | 0 |  |  |
| [RewardFactionFlags](#RewardFactionFlags) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID1](#RewardCurrencyID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty1](#RewardCurrencyQty1) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID2](#RewardCurrencyID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty2](#RewardCurrencyQty2) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID3](#RewardCurrencyID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty3](#RewardCurrencyQty3) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyID4](#RewardCurrencyID4) | int(10) | unsigned |  | NO | 0 |  |  |
| [RewardCurrencyQty4](#RewardCurrencyQty4) | int(10) | unsigned |  | NO | 0 |  |  |
| [AcceptedSoundKitID](#AcceptedSoundKitID) | int(10) | unsigned |  | NO | 0 |  |  |
| [CompleteSoundKitID](#CompleteSoundKitID) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaGroupID](#AreaGroupID) | int(10) | unsigned |  | NO | 0 |  |  |
| [TimeAllowed](#TimeAllowed) | int(10) | unsigned |  | NO | 0 |  |  |
| [AllowableRaces](#AllowableRaces) | bigint(20) | unsigned |  | YES | 0 |  |  |
| [TreasurePickerID](#TreasurePickerID) | int(11) | signed |  | NO | 0 |  |  |
| [Expansion](#Expansion) | int(11) | signed |  | NO | 0 |  |  |
| [ManagedWorldStateID](#ManagedWorldStateID) | int(11) | signed |  | NO | 0 |  |  |
| [QuestSessionBonus](#QuestSessionBonus) | int(11) | signed |  | NO | 0 |  |  |
| [LogTitle](#LogTitle) | text |  |  | YES | NULL |  |  |
| [LogDescription](#LogDescription) | text |  |  | YES | NULL |  |  |
| [QuestDescription](#QuestDescription) | text |  |  | YES | NULL |  |  |
| [AreaDescription](#AreaDescription) | text |  |  | YES | NULL |  |  |
| [PortraitGiverText](#PortraitGiverText) | text |  |  | YES | NULL |  |  |
| [PortraitGiverName](#PortraitGiverName) | text |  |  | YES | NULL |  |  |
| [PortraitTurnInText](#PortraitTurnInText) | text |  |  | YES | NULL |  |  |
| [PortraitTurnInName](#PortraitTurnInName) | text |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#QuestCompletionLog) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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

