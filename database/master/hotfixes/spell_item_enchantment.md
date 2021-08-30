---
title: spell_item_enchantment
description: 
published: true
date: 2021-08-30T09:44:29.581Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [HordeName](#HordeName) | text |  |  | YES | NULL |  |  |
| [EffectArg1](#EffectArg1) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectArg2](#EffectArg2) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectArg3](#EffectArg3) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectScalingPoints1](#EffectScalingPoints1) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints2](#EffectScalingPoints2) | float |  |  | NO | 0 |  |  |
| [EffectScalingPoints3](#EffectScalingPoints3) | float |  |  | NO | 0 |  |  |
| [IconFileDataID](#IconFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [MinItemLevel](#MinItemLevel) | int(11) | signed |  | NO | 0 |  |  |
| [MaxItemLevel](#MaxItemLevel) | int(11) | signed |  | NO | 0 |  |  |
| [TransmogUseConditionID](#TransmogUseConditionID) | int(10) | unsigned |  | NO | 0 |  |  |
| [TransmogCost](#TransmogCost) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectPointsMin1](#EffectPointsMin1) | smallint(6) | signed |  | NO | 0 |  |  |
| [EffectPointsMin2](#EffectPointsMin2) | smallint(6) | signed |  | NO | 0 |  |  |
| [EffectPointsMin3](#EffectPointsMin3) | smallint(6) | signed |  | NO | 0 |  |  |
| [ItemVisual](#ItemVisual) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillID](#RequiredSkillID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#RequiredSkillRank) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#ItemLevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Charges](#Charges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect1](#Effect1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect2](#Effect2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Effect3](#Effect3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ScalingClass](#ScalingClass) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ScalingClassRestricted](#ScalingClassRestricted) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ConditionID](#ConditionID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinLevel](#MinLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxLevel](#MaxLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_interrupts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_interrupts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_item_enchantment_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_item_enchantment_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

