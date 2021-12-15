---
title: player_condition
description: 
published: true
date: 2021-11-14T19:41:35.143Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/phase_x_phase_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'phase_x_phase_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/player_condition_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_condition_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [RaceMask](#racemask) | bigint(20) | signed |  | NO | 0 |  |  |
| [FailureDescription](#failuredescription) | text |  |  | YES | NULL |  |  |
| [ClassMask](#classmask) | int(11) | signed |  | NO | 0 |  |  |
| [SkillLogic](#skilllogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [LanguageID](#languageid) | int(11) | signed |  | NO | 0 |  |  |
| [MinLanguage](#minlanguage) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxLanguage](#maxlanguage) | int(11) | signed |  | NO | 0 |  |  |
| [MaxFactionID](#maxfactionid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxReputation](#maxreputation) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ReputationLogic](#reputationlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrentPvpFaction](#currentpvpfaction) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PvpMedal](#pvpmedal) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PrevQuestLogic](#prevquestlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrQuestLogic](#currquestlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrentCompletedQuestLogic](#currentcompletedquestlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellLogic](#spelllogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemLogic](#itemlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemFlags](#itemflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraSpellLogic](#auraspelllogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [WorldStateExpressionID](#worldstateexpressionid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [WeatherID](#weatherid) | int(11) | signed |  | NO | 0 |  |  |
| [PartyStatus](#partystatus) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LifetimeMaxPVPRank](#lifetimemaxpvprank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AchievementLogic](#achievementlogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [Gender](#gender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [NativeGender](#nativegender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [AreaLogic](#arealogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgLogic](#lfglogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyLogic](#currencylogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillID](#questkillid) | int(11) | signed |  | NO | 0 |  |  |
| [QuestKillLogic](#questkilllogic) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinExpansionLevel](#minexpansionlevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaxExpansionLevel](#maxexpansionlevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinAvgItemLevel](#minavgitemlevel) | int(11) | signed |  | NO | 0 |  |  |
| [MaxAvgItemLevel](#maxavgitemlevel) | int(11) | signed |  | NO | 0 |  |  |
| [MinAvgEquippedItemLevel](#minavgequippeditemlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxAvgEquippedItemLevel](#maxavgequippeditemlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PhaseUseFlags](#phaseuseflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PhaseID](#phaseid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PhaseGroupID](#phasegroupid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [ChrSpecializationIndex](#chrspecializationindex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ChrSpecializationRole](#chrspecializationrole) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ModifierTreeID](#modifiertreeid) | int(10) | unsigned |  | NO | 0 |  |  |
| [PowerType](#powertype) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PowerTypeComp](#powertypecomp) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PowerTypeValue](#powertypevalue) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WeaponSubclassMask](#weaponsubclassmask) | int(11) | signed |  | NO | 0 |  |  |
| [MaxGuildLevel](#maxguildlevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinGuildLevel](#minguildlevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxExpansionTier](#maxexpansiontier) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinExpansionTier](#minexpansiontier) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MinPVPRank](#minpvprank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxPVPRank](#maxpvprank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int(11) | signed |  | NO | 0 |  |  |
| [CovenantID](#covenantid) | int(11) | signed |  | NO | 0 |  |  |
| [SkillID1](#skillid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID2](#skillid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID3](#skillid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SkillID4](#skillid4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill1](#minskill1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill2](#minskill2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill3](#minskill3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinSkill4](#minskill4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill1](#maxskill1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill2](#maxskill2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill3](#maxskill3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxSkill4](#maxskill4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinFactionID1](#minfactionid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinFactionID2](#minfactionid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinFactionID3](#minfactionid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinReputation1](#minreputation1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinReputation2](#minreputation2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinReputation3](#minreputation3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PrevQuestID1](#prevquestid1) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID2](#prevquestid2) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID3](#prevquestid3) | int(11) | signed |  | NO | 0 |  |  |
| [PrevQuestID4](#prevquestid4) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID1](#currquestid1) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID2](#currquestid2) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID3](#currquestid3) | int(11) | signed |  | NO | 0 |  |  |
| [CurrQuestID4](#currquestid4) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID1](#currentcompletedquestid1) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID2](#currentcompletedquestid2) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID3](#currentcompletedquestid3) | int(11) | signed |  | NO | 0 |  |  |
| [CurrentCompletedQuestID4](#currentcompletedquestid4) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID1](#spellid1) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID2](#spellid2) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID3](#spellid3) | int(11) | signed |  | NO | 0 |  |  |
| [SpellID4](#spellid4) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID1](#itemid1) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | int(11) | signed |  | NO | 0 |  |  |
| [ItemID4](#itemid4) | int(11) | signed |  | NO | 0 |  |  |
| [ItemCount1](#itemcount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount2](#itemcount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount3](#itemcount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemCount4](#itemcount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [Explored1](#explored1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Explored2](#explored2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Time1](#time1) | int(10) | unsigned |  | NO | 0 |  |  |
| [Time2](#time2) | int(10) | unsigned |  | NO | 0 |  |  |
| [AuraSpellID1](#auraspellid1) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID2](#auraspellid2) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID3](#auraspellid3) | int(11) | signed |  | NO | 0 |  |  |
| [AuraSpellID4](#auraspellid4) | int(11) | signed |  | NO | 0 |  |  |
| [AuraStacks1](#aurastacks1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks2](#aurastacks2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks3](#aurastacks3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AuraStacks4](#aurastacks4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Achievement1](#achievement1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement2](#achievement2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement3](#achievement3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Achievement4](#achievement4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID1](#areaid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID2](#areaid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID3](#areaid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaID4](#areaid4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LfgStatus1](#lfgstatus1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus2](#lfgstatus2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus3](#lfgstatus3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgStatus4](#lfgstatus4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare1](#lfgcompare1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare2](#lfgcompare2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare3](#lfgcompare3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgCompare4](#lfgcompare4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LfgValue1](#lfgvalue1) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue2](#lfgvalue2) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue3](#lfgvalue3) | int(10) | unsigned |  | NO | 0 |  |  |
| [LfgValue4](#lfgvalue4) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID1](#currencyid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID2](#currencyid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID3](#currencyid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyID4](#currencyid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount1](#currencycount1) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount2](#currencycount2) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount3](#currencycount3) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyCount4](#currencycount4) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster1](#questkillmonster1) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster2](#questkillmonster2) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster3](#questkillmonster3) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster4](#questkillmonster4) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster5](#questkillmonster5) | int(10) | unsigned |  | NO | 0 |  |  |
| [QuestKillMonster6](#questkillmonster6) | int(10) | unsigned |  | NO | 0 |  |  |
| [MovementFlags1](#movementflags1) | int(11) | signed |  | NO | 0 |  |  |
| [MovementFlags2](#movementflags2) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/phase_x_phase_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'phase_x_phase_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/player_condition_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_condition_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

