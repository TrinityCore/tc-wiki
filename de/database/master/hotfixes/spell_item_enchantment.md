---
title: spell_item_enchantment
description: 
published: true
date: 2021-11-14T19:41:35.163Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [HordeName](#hordename) | text |  |  | YES | NULL |  |  |
| [EffectArg1](#effectarg1) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectArg2](#effectarg2) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectArg3](#effectarg3) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectScalingPoints1](#effectscalingpoints1) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints2](#effectscalingpoints2) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints3](#effectscalingpoints3) | float |  |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinItemLevel](#minitemlevel) | int(11) | signed |  | NO | 0 |  |  |
| [MaxItemLevel](#maxitemlevel) | int(11) | signed |  | NO | 0 |  |  |
| [TransmogUseConditionID](#transmoguseconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [TransmogCost](#transmogcost) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectPointsMin1](#effectpointsmin1) | smallint(6) | signed |  | NO | 0 |  |  |
| [EffectPointsMin2](#effectpointsmin2) | smallint(6) | signed |  | NO | 0 |  |  |
| [EffectPointsMin3](#effectpointsmin3) | smallint(6) | signed |  | NO | 0 |  |  |
| [ItemVisual](#itemvisual) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillID](#requiredskillid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#itemlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Charges](#charges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect1](#effect1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect2](#effect2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect3](#effect3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ScalingClass](#scalingclass) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ScalingClassRestricted](#scalingclassrestricted) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### HordeName
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

### Flags
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

<a href="https://trinitycore.info/de/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

