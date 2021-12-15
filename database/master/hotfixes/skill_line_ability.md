---
title: skill_line_ability
description: 
published: true
date: 2021-11-14T19:41:35.155Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_line'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [RaceMask](#racemask) | bigint(20) | signed |  | NO | 0 |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [SkillLine](#skillline) | smallint(6) | signed |  | NO | 0 |  |  |
| [Spell](#spell) | int(11) | signed |  | NO | 0 |  |  |
| [MinSkillLineRank](#minskilllinerank) | smallint(6) | signed |  | NO | 0 |  |  |
| [ClassMask](#classmask) | int(11) | signed |  | NO | 0 |  |  |
| [SupercedesSpell](#supercedesspell) | int(11) | signed |  | NO | 0 |  |  |
| [AcquireMethod](#acquiremethod) | tinyint(4) | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankHigh](#trivialskilllinerankhigh) | smallint(6) | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankLow](#trivialskilllineranklow) | smallint(6) | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [NumSkillUps](#numskillups) | tinyint(4) | signed |  | NO | 0 |  |  |
| [UniqueBit](#uniquebit) | smallint(6) | signed |  | NO | 0 |  |  |
| [TradeSkillCategoryID](#tradeskillcategoryid) | smallint(6) | signed |  | NO | 0 |  |  |
| [SkillupSkillLineID](#skillupskilllineid) | smallint(6) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### RaceMask
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### SkillLine
*- no description -*
&nbsp;

### Spell
*- no description -*
&nbsp;

### MinSkillLineRank
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### SupercedesSpell
*- no description -*
&nbsp;

### AcquireMethod
*- no description -*
&nbsp;

### TrivialSkillLineRankHigh
*- no description -*
&nbsp;

### TrivialSkillLineRankLow
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### NumSkillUps
*- no description -*
&nbsp;

### UniqueBit
*- no description -*
&nbsp;

### TradeSkillCategoryID
*- no description -*
&nbsp;

### SkillupSkillLineID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_line'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

