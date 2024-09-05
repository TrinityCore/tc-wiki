---
title: skill_line_ability
description: 
published: true
date: 2024-09-05T22:46:04.765Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:27.762Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_line'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_ability_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_ability_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [RaceMask](#racemask) | bigint | signed |  | NO | 0 |  |  |
| [AbilityVerb](#abilityverb) | text |  |  | YES | NULL |  |  |
| [AbilityAllVerb](#abilityallverb) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SkillLine](#skillline) | smallint | signed |  | NO | 0 |  |  |
| [Spell](#spell) | int | signed |  | NO | 0 |  |  |
| [MinSkillLineRank](#minskilllinerank) | smallint | signed |  | NO | 0 |  |  |
| [ClassMask](#classmask) | int | signed |  | NO | 0 |  |  |
| [SupercedesSpell](#supercedesspell) | int | signed |  | NO | 0 |  |  |
| [AcquireMethod](#acquiremethod) | int | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankHigh](#trivialskilllinerankhigh) | smallint | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankLow](#trivialskilllineranklow) | smallint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [NumSkillUps](#numskillups) | tinyint | signed |  | NO | 0 |  |  |
| [UniqueBit](#uniquebit) | smallint | signed |  | NO | 0 |  |  |
| [TradeSkillCategoryID](#tradeskillcategoryid) | smallint | signed |  | NO | 0 |  |  |
| [SkillupSkillLineID](#skillupskilllineid) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### RaceMask
*- no description -*
&nbsp;

### AbilityVerb
*- no description -*
&nbsp;

### AbilityAllVerb
*- no description -*
&nbsp;

### ID <!-- {#id-alt} -->
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

<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_line'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_ability_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_ability_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
