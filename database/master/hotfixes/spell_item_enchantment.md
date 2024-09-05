---
title: spell_item_enchantment
description: 
published: true
date: 2024-09-05T22:46:05.378Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:26.726Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [HordeName](#hordename) | text |  |  | YES | NULL |  |  |
| [Duration](#duration) | int | signed |  | NO | 0 |  |  |
| [EffectArg1](#effectarg1) | int | unsigned |  | NO | 0 |  |  |
| [EffectArg2](#effectarg2) | int | unsigned |  | NO | 0 |  |  |
| [EffectArg3](#effectarg3) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [EffectScalingPoints1](#effectscalingpoints1) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints2](#effectscalingpoints2) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints3](#effectscalingpoints3) | float |  |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | unsigned |  | NO | 0 |  |  |
| [MinItemLevel](#minitemlevel) | int | signed |  | NO | 0 |  |  |
| [MaxItemLevel](#maxitemlevel) | int | signed |  | NO | 0 |  |  |
| [TransmogUseConditionID](#transmoguseconditionid) | int | unsigned |  | NO | 0 |  |  |
| [TransmogCost](#transmogcost) | int | unsigned |  | NO | 0 |  |  |
| [EffectPointsMin1](#effectpointsmin1) | smallint | signed |  | NO | 0 |  |  |
| [EffectPointsMin2](#effectpointsmin2) | smallint | signed |  | NO | 0 |  |  |
| [EffectPointsMin3](#effectpointsmin3) | smallint | signed |  | NO | 0 |  |  |
| [ItemVisual](#itemvisual) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillID](#requiredskillid) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#itemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [Charges](#charges) | tinyint | unsigned |  | NO | 0 |  |  |
| [Effect1](#effect1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Effect2](#effect2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Effect3](#effect3) | tinyint | unsigned |  | NO | 0 |  |  |
| [ScalingClass](#scalingclass) | tinyint | signed |  | NO | 0 |  |  |
| [ScalingClassRestricted](#scalingclassrestricted) | tinyint | signed |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### HordeName
*- no description -*
&nbsp;

### Duration
*- no description -*
&nbsp;

### EffectArg1
*- no description -*
&nbsp;

### EffectArg2
*- no description -*
&nbsp;

### EffectArg3
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### EffectScalingPoints1
*- no description -*
&nbsp;

### EffectScalingPoints2
*- no description -*
&nbsp;

### EffectScalingPoints3
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### MinItemLevel
*- no description -*
&nbsp;

### MaxItemLevel
*- no description -*
&nbsp;

### TransmogUseConditionID
*- no description -*
&nbsp;

### TransmogCost
*- no description -*
&nbsp;

### EffectPointsMin1
*- no description -*
&nbsp;

### EffectPointsMin2
*- no description -*
&nbsp;

### EffectPointsMin3
*- no description -*
&nbsp;

### ItemVisual
*- no description -*
&nbsp;

### RequiredSkillID
*- no description -*
&nbsp;

### RequiredSkillRank
*- no description -*
&nbsp;

### ItemLevel
*- no description -*
&nbsp;

### Charges
*- no description -*
&nbsp;

### Effect1
*- no description -*
&nbsp;

### Effect2
*- no description -*
&nbsp;

### Effect3
*- no description -*
&nbsp;

### ScalingClass
*- no description -*
&nbsp;

### ScalingClassRestricted
*- no description -*
&nbsp;

### ConditionID
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
