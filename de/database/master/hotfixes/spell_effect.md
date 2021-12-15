---
title: spell_effect
description: 
published: true
date: 2021-11-14T19:41:35.161Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/hotfixes/spell_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_duration'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/spell_equipped_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_equipped_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [EffectAura](#effectaura) | smallint(6) | signed |  | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int(11) | signed |  | NO | 0 |  |  |
| [EffectIndex](#effectindex) | int(11) | signed |  | NO | 0 |  |  |
| [Effect](#effect) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectAmplitude](#effectamplitude) | float |  |  | NO | 0 |  |  |
| [EffectAttributes](#effectattributes) | int(11) | signed |  | NO | 0 |  |  |
| [EffectAuraPeriod](#effectauraperiod) | int(11) | signed |  | NO | 0 |  |  |
| [EffectBonusCoefficient](#effectbonuscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectChainAmplitude](#effectchainamplitude) | float |  |  | NO | 0 |  |  |
| [EffectChainTargets](#effectchaintargets) | int(11) | signed |  | NO | 0 |  |  |
| [EffectItemType](#effectitemtype) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMechanic](#effectmechanic) | int(11) | signed |  | NO | 0 |  |  |
| [EffectPointsPerResource](#effectpointsperresource) | float |  |  | NO | 0 |  |  |
| [EffectPosFacing](#effectposfacing) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel](#effectrealpointsperlevel) | float |  |  | NO | 0 |  |  |
| [EffectTriggerSpell](#effecttriggerspell) | int(11) | signed |  | NO | 0 |  |  |
| [BonusCoefficientFromAP](#bonuscoefficientfromap) | float |  |  | NO | 0 |  |  |
| [PvpMultiplier](#pvpmultiplier) | float |  |  | NO | 0 |  |  |
| [Coefficient](#coefficient) | float |  |  | NO | 0 |  |  |
| [Variance](#variance) | float |  |  | NO | 0 |  |  |
| [ResourceCoefficient](#resourcecoefficient) | float |  |  | NO | 0 |  |  |
| [GroupSizeBasePointsCoefficient](#groupsizebasepointscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectBasePoints](#effectbasepoints) | float |  |  | NO | 0 |  |  |
| [ScalingClass](#scalingclass) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMiscValue1](#effectmiscvalue1) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMiscValue2](#effectmiscvalue2) | int(11) | signed |  | NO | 0 |  |  |
| [EffectRadiusIndex1](#effectradiusindex1) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex2](#effectradiusindex2) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMask1](#effectspellclassmask1) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask2](#effectspellclassmask2) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask3](#effectspellclassmask3) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask4](#effectspellclassmask4) | int(11) | signed |  | NO | 0 |  |  |
| [ImplicitTarget1](#implicittarget1) | smallint(6) | signed |  | NO | 0 |  |  |
| [ImplicitTarget2](#implicittarget2) | smallint(6) | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### EffectAura
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### EffectIndex
*- no description -*
&nbsp;

### Effect
*- no description -*
&nbsp;

### EffectAmplitude
*- no description -*
&nbsp;

### EffectAttributes
*- no description -*
&nbsp;

### EffectAuraPeriod
*- no description -*
&nbsp;

### EffectBonusCoefficient
*- no description -*
&nbsp;

### EffectChainAmplitude
*- no description -*
&nbsp;

### EffectChainTargets
*- no description -*
&nbsp;

### EffectItemType
*- no description -*
&nbsp;

### EffectMechanic
*- no description -*
&nbsp;

### EffectPointsPerResource
*- no description -*
&nbsp;

### EffectPosFacing
*- no description -*
&nbsp;

### EffectRealPointsPerLevel
*- no description -*
&nbsp;

### EffectTriggerSpell
*- no description -*
&nbsp;

### BonusCoefficientFromAP
*- no description -*
&nbsp;

### PvpMultiplier
*- no description -*
&nbsp;

### Coefficient
*- no description -*
&nbsp;

### Variance
*- no description -*
&nbsp;

### ResourceCoefficient
*- no description -*
&nbsp;

### GroupSizeBasePointsCoefficient
*- no description -*
&nbsp;

### EffectBasePoints
*- no description -*
&nbsp;

### ScalingClass
*- no description -*
&nbsp;

### EffectMiscValue1
*- no description -*
&nbsp;

### EffectMiscValue2
*- no description -*
&nbsp;

### EffectRadiusIndex1
*- no description -*
&nbsp;

### EffectRadiusIndex2
*- no description -*
&nbsp;

### EffectSpellClassMask1
*- no description -*
&nbsp;

### EffectSpellClassMask2
*- no description -*
&nbsp;

### EffectSpellClassMask3
*- no description -*
&nbsp;

### EffectSpellClassMask4
*- no description -*
&nbsp;

### ImplicitTarget1
*- no description -*
&nbsp;

### ImplicitTarget2
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/de/database/master/hotfixes/spell_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_duration'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/spell_equipped_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_equipped_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

