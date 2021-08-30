---
title: spell_effect
description: 
published: true
date: 2021-08-30T09:42:08.216Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_duration'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_equipped_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_equipped_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [EffectAura](#EffectAura) | smallint(6) | signed |  | NO | 0 |  |  |
| [DifficultyID](#DifficultyID) | int(11) | signed |  | NO | 0 |  |  |
| [EffectIndex](#EffectIndex) | int(11) | signed |  | NO | 0 |  |  |
| [Effect](#Effect) | int(11) | signed |  | NO | 0 |  |  |
| [EffectAmplitude](#EffectAmplitude) | float |  |  | NO | 0 |  |  |
| [EffectAttributes](#EffectAttributes) | int(11) | signed |  | NO | 0 |  |  |
| [EffectAuraPeriod](#EffectAuraPeriod) | int(11) | signed |  | NO | 0 |  |  |
| [EffectBonusCoefficient](#EffectBonusCoefficient) | float |  |  | NO | 0 |  |  |
| [EffectChainAmplitude](#EffectChainAmplitude) | float |  |  | NO | 0 |  |  |
| [EffectChainTargets](#EffectChainTargets) | int(11) | signed |  | NO | 0 |  |  |
| [EffectItemType](#EffectItemType) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMechanic](#EffectMechanic) | int(11) | signed |  | NO | 0 |  |  |
| [EffectPointsPerResource](#EffectPointsPerResource) | float |  |  | NO | 0 |  |  |
| [EffectPosFacing](#EffectPosFacing) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel](#EffectRealPointsPerLevel) | float |  |  | NO | 0 |  |  |
| [EffectTriggerSpell](#EffectTriggerSpell) | int(11) | signed |  | NO | 0 |  |  |
| [BonusCoefficientFromAP](#BonusCoefficientFromAP) | float |  |  | NO | 0 |  |  |
| [PvpMultiplier](#PvpMultiplier) | float |  |  | NO | 0 |  |  |
| [Coefficient](#Coefficient) | float |  |  | NO | 0 |  |  |
| [Variance](#Variance) | float |  |  | NO | 0 |  |  |
| [ResourceCoefficient](#ResourceCoefficient) | float |  |  | NO | 0 |  |  |
| [GroupSizeBasePointsCoefficient](#GroupSizeBasePointsCoefficient) | float |  |  | NO | 0 |  |  |
| [EffectBasePoints](#EffectBasePoints) | float |  |  | NO | 0 |  |  |
| [ScalingClass](#ScalingClass) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMiscValue1](#EffectMiscValue1) | int(11) | signed |  | NO | 0 |  |  |
| [EffectMiscValue2](#EffectMiscValue2) | int(11) | signed |  | NO | 0 |  |  |
| [EffectRadiusIndex1](#EffectRadiusIndex1) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex2](#EffectRadiusIndex2) | int(10) | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMask1](#EffectSpellClassMask1) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask2](#EffectSpellClassMask2) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask3](#EffectSpellClassMask3) | int(11) | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask4](#EffectSpellClassMask4) | int(11) | signed |  | NO | 0 |  |  |
| [ImplicitTarget1](#ImplicitTarget1) | smallint(6) | signed |  | NO | 0 |  |  |
| [ImplicitTarget2](#ImplicitTarget2) | smallint(6) | signed |  | NO | 0 |  |  |
| [SpellID](#SpellID) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_duration'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/spell_equipped_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_equipped_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

