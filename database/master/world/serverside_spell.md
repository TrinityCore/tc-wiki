---
title: serverside_spell
description: 
published: true
date: 2021-08-30T09:24:17.521Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/script_waypoint" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_waypoint'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'serverside_spell_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#Id) | int(10) | unsigned | PRI | NO |  |  |  |
| [DifficultyID](#DifficultyID) | int(11) | signed | PRI | NO | 0 |  |  |
| [CategoryId](#CategoryId) | int(10) | unsigned |  | NO | 0 |  |  |
| [Dispel](#Dispel) | int(10) | unsigned |  | NO | 0 |  |  |
| [Mechanic](#Mechanic) | int(10) | unsigned |  | NO | 0 |  |  |
| [Attributes](#Attributes) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx](#AttributesEx) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx2](#AttributesEx2) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx3](#AttributesEx3) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx4](#AttributesEx4) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx5](#AttributesEx5) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx6](#AttributesEx6) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx7](#AttributesEx7) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx8](#AttributesEx8) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx9](#AttributesEx9) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx10](#AttributesEx10) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx11](#AttributesEx11) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx12](#AttributesEx12) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx13](#AttributesEx13) | int(10) | unsigned |  | NO | 0 |  |  |
| [AttributesEx14](#AttributesEx14) | int(10) | unsigned |  | NO | 0 |  |  |
| [Stances](#Stances) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [StancesNot](#StancesNot) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [Targets](#Targets) | int(10) | unsigned |  | NO | 0 |  |  |
| [TargetCreatureType](#TargetCreatureType) | int(10) | unsigned |  | NO | 0 |  |  |
| [RequiresSpellFocus](#RequiresSpellFocus) | int(10) | unsigned |  | NO | 0 |  |  |
| [FacingCasterFlags](#FacingCasterFlags) | int(10) | unsigned |  | NO | 0 |  |  |
| [CasterAuraState](#CasterAuraState) | int(10) | unsigned |  | NO | 0 |  |  |
| [TargetAuraState](#TargetAuraState) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExcludeCasterAuraState](#ExcludeCasterAuraState) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExcludeTargetAuraState](#ExcludeTargetAuraState) | int(10) | unsigned |  | NO | 0 |  |  |
| [CasterAuraSpell](#CasterAuraSpell) | int(10) | unsigned |  | NO | 0 |  |  |
| [TargetAuraSpell](#TargetAuraSpell) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExcludeCasterAuraSpell](#ExcludeCasterAuraSpell) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExcludeTargetAuraSpell](#ExcludeTargetAuraSpell) | int(10) | unsigned |  | NO | 0 |  |  |
| [CastingTimeIndex](#CastingTimeIndex) | int(10) | unsigned |  | NO | 1 |  |  |
| [RecoveryTime](#RecoveryTime) | int(10) | unsigned |  | NO | 0 |  |  |
| [CategoryRecoveryTime](#CategoryRecoveryTime) | int(10) | unsigned |  | NO | 0 |  |  |
| [StartRecoveryCategory](#StartRecoveryCategory) | int(10) | unsigned |  | NO | 0 |  |  |
| [StartRecoveryTime](#StartRecoveryTime) | int(10) | unsigned |  | NO | 0 |  |  |
| [InterruptFlags](#InterruptFlags) | int(10) | unsigned |  | NO | 0 |  |  |
| [AuraInterruptFlags1](#AuraInterruptFlags1) | int(10) | unsigned |  | NO | 0 |  |  |
| [AuraInterruptFlags2](#AuraInterruptFlags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ChannelInterruptFlags1](#ChannelInterruptFlags1) | int(10) | unsigned |  | NO | 0 |  |  |
| [ChannelInterruptFlags2](#ChannelInterruptFlags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProcFlags](#ProcFlags) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProcChance](#ProcChance) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProcCharges](#ProcCharges) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProcCooldown](#ProcCooldown) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProcBasePPM](#ProcBasePPM) | float |  |  | NO | 0 |  |  |
| [MaxLevel](#MaxLevel) | int(10) | unsigned |  | NO | 0 |  |  |
| [BaseLevel](#BaseLevel) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellLevel](#SpellLevel) | int(10) | unsigned |  | NO | 0 |  |  |
| [DurationIndex](#DurationIndex) | int(10) | unsigned |  | NO | 0 |  |  |
| [RangeIndex](#RangeIndex) | int(10) | unsigned |  | NO | 1 |  |  |
| [Speed](#Speed) | float |  |  | NO | 0 |  |  |
| [LaunchDelay](#LaunchDelay) | float |  |  | NO | 0 |  |  |
| [StackAmount](#StackAmount) | int(10) | unsigned |  | NO | 0 |  |  |
| [EquippedItemClass](#EquippedItemClass) | int(11) | signed |  | NO | -1 |  |  |
| [EquippedItemSubClassMask](#EquippedItemSubClassMask) | int(11) | signed |  | NO | 0 |  |  |
| [EquippedItemInventoryTypeMask](#EquippedItemInventoryTypeMask) | int(11) | signed |  | NO | 0 |  |  |
| [ContentTuningId](#ContentTuningId) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellName](#SpellName) | varchar(100) | signed |  | YES | NULL |  |  |
| [ConeAngle](#ConeAngle) | float |  |  | NO | 0 |  |  |
| [ConeWidth](#ConeWidth) | float |  |  | NO | 0 |  |  |
| [MaxTargetLevel](#MaxTargetLevel) | int(10) | unsigned |  | NO | 0 |  |  |
| [MaxAffectedTargets](#MaxAffectedTargets) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellFamilyName](#SpellFamilyName) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags1](#SpellFamilyFlags1) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags2](#SpellFamilyFlags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags3](#SpellFamilyFlags3) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags4](#SpellFamilyFlags4) | int(10) | unsigned |  | NO | 0 |  |  |
| [DmgClass](#DmgClass) | int(10) | unsigned |  | NO | 0 |  |  |
| [PreventionType](#PreventionType) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaGroupId](#AreaGroupId) | int(11) | signed |  | NO | 0 |  |  |
| [SchoolMask](#SchoolMask) | int(10) | unsigned |  | NO | 0 |  |  |
| [ChargeCategoryId](#ChargeCategoryId) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### CategoryId
*- no description -*
&nbsp;

### Dispel
*- no description -*
&nbsp;

### Mechanic
*- no description -*
&nbsp;

### Attributes
*- no description -*
&nbsp;

### AttributesEx
*- no description -*
&nbsp;

### AttributesEx2
*- no description -*
&nbsp;

### AttributesEx3
*- no description -*
&nbsp;

### AttributesEx4
*- no description -*
&nbsp;

### AttributesEx5
*- no description -*
&nbsp;

### AttributesEx6
*- no description -*
&nbsp;

### AttributesEx7
*- no description -*
&nbsp;

### AttributesEx8
*- no description -*
&nbsp;

### AttributesEx9
*- no description -*
&nbsp;

### AttributesEx10
*- no description -*
&nbsp;

### AttributesEx11
*- no description -*
&nbsp;

### AttributesEx12
*- no description -*
&nbsp;

### AttributesEx13
*- no description -*
&nbsp;

### AttributesEx14
*- no description -*
&nbsp;

### Stances
*- no description -*
&nbsp;

### StancesNot
*- no description -*
&nbsp;

### Targets
*- no description -*
&nbsp;

### TargetCreatureType
*- no description -*
&nbsp;

### RequiresSpellFocus
*- no description -*
&nbsp;

### FacingCasterFlags
*- no description -*
&nbsp;

### CasterAuraState
*- no description -*
&nbsp;

### TargetAuraState
*- no description -*
&nbsp;

### ExcludeCasterAuraState
*- no description -*
&nbsp;

### ExcludeTargetAuraState
*- no description -*
&nbsp;

### CasterAuraSpell
*- no description -*
&nbsp;

### TargetAuraSpell
*- no description -*
&nbsp;

### ExcludeCasterAuraSpell
*- no description -*
&nbsp;

### ExcludeTargetAuraSpell
*- no description -*
&nbsp;

### CastingTimeIndex
*- no description -*
&nbsp;

### RecoveryTime
*- no description -*
&nbsp;

### CategoryRecoveryTime
*- no description -*
&nbsp;

### StartRecoveryCategory
*- no description -*
&nbsp;

### StartRecoveryTime
*- no description -*
&nbsp;

### InterruptFlags
*- no description -*
&nbsp;

### AuraInterruptFlags1
*- no description -*
&nbsp;

### AuraInterruptFlags2
*- no description -*
&nbsp;

### ChannelInterruptFlags1
*- no description -*
&nbsp;

### ChannelInterruptFlags2
*- no description -*
&nbsp;

### ProcFlags
*- no description -*
&nbsp;

### ProcChance
*- no description -*
&nbsp;

### ProcCharges
*- no description -*
&nbsp;

### ProcCooldown
*- no description -*
&nbsp;

### ProcBasePPM
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### BaseLevel
*- no description -*
&nbsp;

### SpellLevel
*- no description -*
&nbsp;

### DurationIndex
*- no description -*
&nbsp;

### RangeIndex
*- no description -*
&nbsp;

### Speed
*- no description -*
&nbsp;

### LaunchDelay
*- no description -*
&nbsp;

### StackAmount
*- no description -*
&nbsp;

### EquippedItemClass
*- no description -*
&nbsp;

### EquippedItemSubClassMask
*- no description -*
&nbsp;

### EquippedItemInventoryTypeMask
*- no description -*
&nbsp;

### ContentTuningId
*- no description -*
&nbsp;

### SpellName
*- no description -*
&nbsp;

### ConeAngle
*- no description -*
&nbsp;

### ConeWidth
*- no description -*
&nbsp;

### MaxTargetLevel
*- no description -*
&nbsp;

### MaxAffectedTargets
*- no description -*
&nbsp;

### SpellFamilyName
*- no description -*
&nbsp;

### SpellFamilyFlags1
*- no description -*
&nbsp;

### SpellFamilyFlags2
*- no description -*
&nbsp;

### SpellFamilyFlags3
*- no description -*
&nbsp;

### SpellFamilyFlags4
*- no description -*
&nbsp;

### DmgClass
*- no description -*
&nbsp;

### PreventionType
*- no description -*
&nbsp;

### AreaGroupId
*- no description -*
&nbsp;

### SchoolMask
*- no description -*
&nbsp;

### ChargeCategoryId
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/script_waypoint" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_waypoint'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'serverside_spell_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

