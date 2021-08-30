---
title: player_condition
description: 
published: true
date: 2021-08-30T09:42:08.198Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/phase_x_phase_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'phase_x_phase_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/player_condition_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_condition_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [RaceMask](#RaceMask) | bigint(20) | signed |  | NO | 0 |  |  |
| [FailureDescription](#FailureDescription) | text |  |  | YES | NULL |  |  |
| [ClassMask](#ClassMask) | int(11) | signed |  | NO | 0 |  |  |
| [SkillLogic](#SkillLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [LanguageID](#LanguageID) | int(11) | signed |  | NO | 0 |  |  |
| [MinLanguage](#MinLanguage) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxLanguage](#MaxLanguage) | int(11) | signed |  | NO | 0 |  |  |
| [MaxFactionID](#MaxFactionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxReputation](#MaxReputation) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ReputationLogic](#ReputationLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrentPvpFaction](#CurrentPvpFaction) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PvpMedal](#PvpMedal) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PrevQuestLogic](#PrevQuestLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrQuestLogic](#CurrQuestLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrentCompletedQuestLogic](#CurrentCompletedQuestLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellLogic](#SpellLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemLogic](#ItemLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemFlags](#ItemFlags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraSpellLogic](#AuraSpellLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [WorldStateExpressionID](#WorldStateExpressionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [WeatherID](#WeatherID) | int(11) | signed |  | NO | 0 |  |  |
| [PartyStatus](#PartyStatus) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LifetimeMaxPVPRank](#LifetimeMaxPVPRank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AchievementLogic](#AchievementLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [Gender](#Gender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [NativeGender](#NativeGender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [AreaLogic](#AreaLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgLogic](#LfgLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyLogic](#CurrencyLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillID](#QuestKillID) | int(11) | signed |  | NO | 0 |  |  |
| [QuestKillLogic](#QuestKillLogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinExpansionLevel](#MinExpansionLevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaxExpansionLevel](#MaxExpansionLevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinAvgItemLevel](#MinAvgItemLevel) | int(11) | signed |  | NO | 0 |  |  |
| [MaxAvgItemLevel](#MaxAvgItemLevel) | int(11) | signed |  | NO | 0 |  |  |
| [MinAvgEquippedItemLevel](#MinAvgEquippedItemLevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxAvgEquippedItemLevel](#MaxAvgEquippedItemLevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PhaseUseFlags](#PhaseUseFlags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PhaseID](#PhaseID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PhaseGroupID](#PhaseGroupID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | int(11) | signed |  | NO | 0 |  |  |
| [ChrSpecializationIndex](#ChrSpecializationIndex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ChrSpecializationRole](#ChrSpecializationRole) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ModifierTreeID](#ModifierTreeID) | int(10) | unsigned |  | NO | 0 |  |  |
| [PowerType](#PowerType) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PowerTypeComp](#PowerTypeComp) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PowerTypeValue](#PowerTypeValue) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WeaponSubclassMask](#WeaponSubclassMask) | int(11) | signed |  | NO | 0 |  |  |
| [MaxGuildLevel](#MaxGuildLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinGuildLevel](#MinGuildLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxExpansionTier](#MaxExpansionTier) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinExpansionTier](#MinExpansionTier) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinPVPRank](#MinPVPRank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxPVPRank](#MaxPVPRank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#ContentTuningID) | int(11) | signed |  | NO | 0 |  |  |
| [CovenantID](#CovenantID) | int(11) | signed |  | NO | 0 |  |  |
| [SkillID1](#SkillID1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID2](#SkillID2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID3](#SkillID3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID4](#SkillID4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill1](#MinSkill1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill2](#MinSkill2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill3](#MinSkill3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill4](#MinSkill4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill1](#MaxSkill1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill2](#MaxSkill2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill3](#MaxSkill3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill4](#MaxSkill4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinFactionID1](#MinFactionID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinFactionID2](#MinFactionID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinFactionID3](#MinFactionID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinReputation1](#MinReputation1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinReputation2](#MinReputation2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinReputation3](#MinReputation3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PrevQuestID1](#PrevQuestID1) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID2](#PrevQuestID2) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID3](#PrevQuestID3) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID4](#PrevQuestID4) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID1](#CurrQuestID1) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID2](#CurrQuestID2) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID3](#CurrQuestID3) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID4](#CurrQuestID4) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID1](#CurrentCompletedQuestID1) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID2](#CurrentCompletedQuestID2) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID3](#CurrentCompletedQuestID3) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID4](#CurrentCompletedQuestID4) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID1](#SpellID1) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID2](#SpellID2) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID3](#SpellID3) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID4](#SpellID4) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID1](#ItemID1) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID2](#ItemID2) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID3](#ItemID3) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID4](#ItemID4) | int(11) | signed |  | NO | 0 |  |  |
| [ItemCount1](#ItemCount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount2](#ItemCount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount3](#ItemCount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount4](#ItemCount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [Explored1](#Explored1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Explored2](#Explored2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Time1](#Time1) | int(10) | unsigned |  | NO | 0 |  |  |
| [Time2](#Time2) | int(10) | unsigned |  | NO | 0 |  |  |
| [AuraSpellID1](#AuraSpellID1) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID2](#AuraSpellID2) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID3](#AuraSpellID3) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID4](#AuraSpellID4) | int(11) | signed |  | NO | 0 |  |  |
| [AuraStacks1](#AuraStacks1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks2](#AuraStacks2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks3](#AuraStacks3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks4](#AuraStacks4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Achievement1](#Achievement1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement2](#Achievement2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement3](#Achievement3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement4](#Achievement4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID1](#AreaID1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID2](#AreaID2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID3](#AreaID3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID4](#AreaID4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LfgStatus1](#LfgStatus1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus2](#LfgStatus2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus3](#LfgStatus3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus4](#LfgStatus4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare1](#LfgCompare1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare2](#LfgCompare2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare3](#LfgCompare3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare4](#LfgCompare4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgValue1](#LfgValue1) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue2](#LfgValue2) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue3](#LfgValue3) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue4](#LfgValue4) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID1](#CurrencyID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID2](#CurrencyID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID3](#CurrencyID3) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID4](#CurrencyID4) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount1](#CurrencyCount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount2](#CurrencyCount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount3](#CurrencyCount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount4](#CurrencyCount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster1](#QuestKillMonster1) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster2](#QuestKillMonster2) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster3](#QuestKillMonster3) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster4](#QuestKillMonster4) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster5](#QuestKillMonster5) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster6](#QuestKillMonster6) | int(10) | unsigned |  | NO | 0 |  |  |
| [MovementFlags1](#MovementFlags1) | int(11) | signed |  | NO | 0 |  |  |
| [MovementFlags2](#MovementFlags2) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### RaceMask
*- no description -*
&nbsp;

### FailureDescription
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### SkillLogic
*- no description -*
&nbsp;

### LanguageID
*- no description -*
&nbsp;

### MinLanguage
*- no description -*
&nbsp;

### MaxLanguage
*- no description -*
&nbsp;

### MaxFactionID
*- no description -*
&nbsp;

### MaxReputation
*- no description -*
&nbsp;

### ReputationLogic
*- no description -*
&nbsp;

### CurrentPvpFaction
*- no description -*
&nbsp;

### PvpMedal
*- no description -*
&nbsp;

### PrevQuestLogic
*- no description -*
&nbsp;

### CurrQuestLogic
*- no description -*
&nbsp;

### CurrentCompletedQuestLogic
*- no description -*
&nbsp;

### SpellLogic
*- no description -*
&nbsp;

### ItemLogic
*- no description -*
&nbsp;

### ItemFlags
*- no description -*
&nbsp;

### AuraSpellLogic
*- no description -*
&nbsp;

### WorldStateExpressionID
*- no description -*
&nbsp;

### WeatherID
*- no description -*
&nbsp;

### PartyStatus
*- no description -*
&nbsp;

### LifetimeMaxPVPRank
*- no description -*
&nbsp;

### AchievementLogic
*- no description -*
&nbsp;

### Gender
*- no description -*
&nbsp;

### NativeGender
*- no description -*
&nbsp;

### AreaLogic
*- no description -*
&nbsp;

### LfgLogic
*- no description -*
&nbsp;

### CurrencyLogic
*- no description -*
&nbsp;

### QuestKillID
*- no description -*
&nbsp;

### QuestKillLogic
*- no description -*
&nbsp;

### MinExpansionLevel
*- no description -*
&nbsp;

### MaxExpansionLevel
*- no description -*
&nbsp;

### MinAvgItemLevel
*- no description -*
&nbsp;

### MaxAvgItemLevel
*- no description -*
&nbsp;

### MinAvgEquippedItemLevel
*- no description -*
&nbsp;

### MaxAvgEquippedItemLevel
*- no description -*
&nbsp;

### PhaseUseFlags
*- no description -*
&nbsp;

### PhaseID
*- no description -*
&nbsp;

### PhaseGroupID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChrSpecializationIndex
*- no description -*
&nbsp;

### ChrSpecializationRole
*- no description -*
&nbsp;

### ModifierTreeID
*- no description -*
&nbsp;

### PowerType
*- no description -*
&nbsp;

### PowerTypeComp
*- no description -*
&nbsp;

### PowerTypeValue
*- no description -*
&nbsp;

### WeaponSubclassMask
*- no description -*
&nbsp;

### MaxGuildLevel
*- no description -*
&nbsp;

### MinGuildLevel
*- no description -*
&nbsp;

### MaxExpansionTier
*- no description -*
&nbsp;

### MinExpansionTier
*- no description -*
&nbsp;

### MinPVPRank
*- no description -*
&nbsp;

### MaxPVPRank
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### CovenantID
*- no description -*
&nbsp;

### SkillID1
*- no description -*
&nbsp;

### SkillID2
*- no description -*
&nbsp;

### SkillID3
*- no description -*
&nbsp;

### SkillID4
*- no description -*
&nbsp;

### MinSkill1
*- no description -*
&nbsp;

### MinSkill2
*- no description -*
&nbsp;

### MinSkill3
*- no description -*
&nbsp;

### MinSkill4
*- no description -*
&nbsp;

### MaxSkill1
*- no description -*
&nbsp;

### MaxSkill2
*- no description -*
&nbsp;

### MaxSkill3
*- no description -*
&nbsp;

### MaxSkill4
*- no description -*
&nbsp;

### MinFactionID1
*- no description -*
&nbsp;

### MinFactionID2
*- no description -*
&nbsp;

### MinFactionID3
*- no description -*
&nbsp;

### MinReputation1
*- no description -*
&nbsp;

### MinReputation2
*- no description -*
&nbsp;

### MinReputation3
*- no description -*
&nbsp;

### PrevQuestID1
*- no description -*
&nbsp;

### PrevQuestID2
*- no description -*
&nbsp;

### PrevQuestID3
*- no description -*
&nbsp;

### PrevQuestID4
*- no description -*
&nbsp;

### CurrQuestID1
*- no description -*
&nbsp;

### CurrQuestID2
*- no description -*
&nbsp;

### CurrQuestID3
*- no description -*
&nbsp;

### CurrQuestID4
*- no description -*
&nbsp;

### CurrentCompletedQuestID1
*- no description -*
&nbsp;

### CurrentCompletedQuestID2
*- no description -*
&nbsp;

### CurrentCompletedQuestID3
*- no description -*
&nbsp;

### CurrentCompletedQuestID4
*- no description -*
&nbsp;

### SpellID1
*- no description -*
&nbsp;

### SpellID2
*- no description -*
&nbsp;

### SpellID3
*- no description -*
&nbsp;

### SpellID4
*- no description -*
&nbsp;

### ItemID1
*- no description -*
&nbsp;

### ItemID2
*- no description -*
&nbsp;

### ItemID3
*- no description -*
&nbsp;

### ItemID4
*- no description -*
&nbsp;

### ItemCount1
*- no description -*
&nbsp;

### ItemCount2
*- no description -*
&nbsp;

### ItemCount3
*- no description -*
&nbsp;

### ItemCount4
*- no description -*
&nbsp;

### Explored1
*- no description -*
&nbsp;

### Explored2
*- no description -*
&nbsp;

### Time1
*- no description -*
&nbsp;

### Time2
*- no description -*
&nbsp;

### AuraSpellID1
*- no description -*
&nbsp;

### AuraSpellID2
*- no description -*
&nbsp;

### AuraSpellID3
*- no description -*
&nbsp;

### AuraSpellID4
*- no description -*
&nbsp;

### AuraStacks1
*- no description -*
&nbsp;

### AuraStacks2
*- no description -*
&nbsp;

### AuraStacks3
*- no description -*
&nbsp;

### AuraStacks4
*- no description -*
&nbsp;

### Achievement1
*- no description -*
&nbsp;

### Achievement2
*- no description -*
&nbsp;

### Achievement3
*- no description -*
&nbsp;

### Achievement4
*- no description -*
&nbsp;

### AreaID1
*- no description -*
&nbsp;

### AreaID2
*- no description -*
&nbsp;

### AreaID3
*- no description -*
&nbsp;

### AreaID4
*- no description -*
&nbsp;

### LfgStatus1
*- no description -*
&nbsp;

### LfgStatus2
*- no description -*
&nbsp;

### LfgStatus3
*- no description -*
&nbsp;

### LfgStatus4
*- no description -*
&nbsp;

### LfgCompare1
*- no description -*
&nbsp;

### LfgCompare2
*- no description -*
&nbsp;

### LfgCompare3
*- no description -*
&nbsp;

### LfgCompare4
*- no description -*
&nbsp;

### LfgValue1
*- no description -*
&nbsp;

### LfgValue2
*- no description -*
&nbsp;

### LfgValue3
*- no description -*
&nbsp;

### LfgValue4
*- no description -*
&nbsp;

### CurrencyID1
*- no description -*
&nbsp;

### CurrencyID2
*- no description -*
&nbsp;

### CurrencyID3
*- no description -*
&nbsp;

### CurrencyID4
*- no description -*
&nbsp;

### CurrencyCount1
*- no description -*
&nbsp;

### CurrencyCount2
*- no description -*
&nbsp;

### CurrencyCount3
*- no description -*
&nbsp;

### CurrencyCount4
*- no description -*
&nbsp;

### QuestKillMonster1
*- no description -*
&nbsp;

### QuestKillMonster2
*- no description -*
&nbsp;

### QuestKillMonster3
*- no description -*
&nbsp;

### QuestKillMonster4
*- no description -*
&nbsp;

### QuestKillMonster5
*- no description -*
&nbsp;

### QuestKillMonster6
*- no description -*
&nbsp;

### MovementFlags1
*- no description -*
&nbsp;

### MovementFlags2
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/phase_x_phase_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'phase_x_phase_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/player_condition_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_condition_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

