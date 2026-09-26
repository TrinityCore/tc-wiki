---
title: spell_effect
description: 
published: true
date: 2024-05-15T12:31:08.736Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:13.217Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [EffectAura](#effectaura) | smallint | signed |  | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int | signed |  | NO | 0 |  |  |
| [EffectIndex](#effectindex) | int | signed |  | NO | 0 |  |  |
| [Effect](#effect) | int | unsigned |  | NO | 0 |  |  |
| [EffectAmplitude](#effectamplitude) | float |  |  | NO | 0 |  |  |
| [EffectAttributes](#effectattributes) | int | signed |  | NO | 0 |  |  |
| [EffectAuraPeriod](#effectauraperiod) | int | signed |  | NO | 0 |  |  |
| [EffectBonusCoefficient](#effectbonuscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectChainAmplitude](#effectchainamplitude) | float |  |  | NO | 0 |  |  |
| [EffectChainTargets](#effectchaintargets) | int | signed |  | NO | 0 |  |  |
| [EffectItemType](#effectitemtype) | int | signed |  | NO | 0 |  |  |
| [EffectMechanic](#effectmechanic) | int | signed |  | NO | 0 |  |  |
| [EffectPointsPerResource](#effectpointsperresource) | float |  |  | NO | 0 |  |  |
| [EffectPosFacing](#effectposfacing) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel](#effectrealpointsperlevel) | float |  |  | NO | 0 |  |  |
| [EffectTriggerSpell](#effecttriggerspell) | int | signed |  | NO | 0 |  |  |
| [BonusCoefficientFromAP](#bonuscoefficientfromap) | float |  |  | NO | 0 |  |  |
| [PvpMultiplier](#pvpmultiplier) | float |  |  | NO | 0 |  |  |
| [Coefficient](#coefficient) | float |  |  | NO | 0 |  |  |
| [Variance](#variance) | float |  |  | NO | 0 |  |  |
| [ResourceCoefficient](#resourcecoefficient) | float |  |  | NO | 0 |  |  |
| [GroupSizeBasePointsCoefficient](#groupsizebasepointscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectBasePoints](#effectbasepoints) | float |  |  | NO | 0 |  |  |
| [ScalingClass](#scalingclass) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValue1](#effectmiscvalue1) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValue2](#effectmiscvalue2) | int | signed |  | NO | 0 |  |  |
| [EffectRadiusIndex1](#effectradiusindex1) | int | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex2](#effectradiusindex2) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMask1](#effectspellclassmask1) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask2](#effectspellclassmask2) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask3](#effectspellclassmask3) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask4](#effectspellclassmask4) | int | signed |  | NO | 0 |  |  |
| [ImplicitTarget1](#implicittarget1) | smallint | signed |  | NO | 0 |  |  |
| [ImplicitTarget2](#implicittarget2) | smallint | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
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


