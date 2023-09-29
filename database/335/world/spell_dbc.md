---
title: spell_dbc
description:
published: true
date: 2023-07-23T17:21:54.627Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:26.493Z
---

<a href="https://trinitycore.info/en/database/335/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_custom_attr'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_enchant_proc_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_enchant_proc_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Structurally similar to the [Spell.dbc](/files/DBC/335/spell) file, this table holds supplemental data on spells referenced by, but missing from the [Spell.dbc](/files/DBC/335/spell) file.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id) | int | unsigned | PRI | NO |  |  |  |
| [Dispel](#dispel) | int | unsigned |  | NO | 0 |  |  |
| [Mechanic](#mechanic) | int | unsigned |  | NO | 0 |  |  |
| [Attributes](#attributes) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx](#attributesex) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx2](#attributesex2) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx3](#attributesex3) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx4](#attributesex4) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx5](#attributesex5) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx6](#attributesex6) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx7](#attributesex7) | int | unsigned |  | NO | 0 |  |  |
| [Stances](#stances) | int | unsigned |  | NO | 0 |  |  |
| [StancesNot](#stancesnot) | int | unsigned |  | NO | 0 |  |  |
| [Targets](#targets) | int | unsigned |  | NO | 0 |  |  |
| [CastingTimeIndex](#castingtimeindex) | int | unsigned |  | NO | 1 |  |  |
| [AuraInterruptFlags](#aurainterruptflags) | int | unsigned |  | NO | 0 |  |  |
| [ProcFlags](#procflags) | int | unsigned |  | NO | 0 |  |  |
| [ProcChance](#procchance) | int | unsigned |  | NO | 0 |  |  |
| [ProcCharges](#proccharges) | int | unsigned |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | int | unsigned |  | NO | 0 |  |  |
| [BaseLevel](#baselevel) | int | unsigned |  | NO | 0 |  |  |
| [SpellLevel](#spelllevel) | int | unsigned |  | NO | 0 |  |  |
| [DurationIndex](#durationindex) | int | unsigned |  | NO | 0 |  |  |
| [RangeIndex](#rangeindex) | int | unsigned |  | NO | 1 |  |  |
| [StackAmount](#stackamount) | int | unsigned |  | NO | 0 |  |  |
| [EquippedItemClass](#equippeditemclass) | int | signed |  | NO | -1 |  |  |
| [EquippedItemSubClassMask](#equippeditemsubclassmask) | int | signed |  | NO | 0 |  |  |
| [EquippedItemInventoryTypeMask](#equippediteminventorytypemask) | int | signed |  | NO | 0 |  |  |
| [Effect1](#effect1) | int | unsigned |  | NO | 0 |  |  |
| [Effect2](#effect2) | int | unsigned |  | NO | 0 |  |  |
| [Effect3](#effect3) | int | unsigned |  | NO | 0 |  |  |
| [EffectDieSides1](#effectdiesides1) | int | signed |  | NO | 0 |  |  |
| [EffectDieSides2](#effectdiesides2) | int | signed |  | NO | 0 |  |  |
| [EffectDieSides3](#effectdiesides3) | int | signed |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel1](#effectrealpointsperlevel1) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel2](#effectrealpointsperlevel2) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel3](#effectrealpointsperlevel3) | float |  |  | NO | 0 |  |  |
| [EffectBasePoints1](#effectbasepoints1) | int | signed |  | NO | 0 |  |  |
| [EffectBasePoints2](#effectbasepoints2) | int | signed |  | NO | 0 |  |  |
| [EffectBasePoints3](#effectbasepoints3) | int | signed |  | NO | 0 |  |  |
| [EffectMechanic1](#effectmechanic1) | int | unsigned |  | NO | 0 |  |  |
| [EffectMechanic2](#effectmechanic2) | int | unsigned |  | NO | 0 |  |  |
| [EffectMechanic3](#effectmechanic3) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetA1](#effectimplicittargeta1) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetA2](#effectimplicittargeta2) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetA3](#effectimplicittargeta3) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetB1](#effectimplicittargetb1) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetB2](#effectimplicittargetb2) | int | unsigned |  | NO | 0 |  |  |
| [EffectImplicitTargetB3](#effectimplicittargetb3) | int | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex1](#effectradiusindex1) | int | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex2](#effectradiusindex2) | int | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex3](#effectradiusindex3) | int | unsigned |  | NO | 0 |  |  |
| [EffectApplyAuraName1](#effectapplyauraname1) | int | unsigned |  | NO | 0 |  |  |
| [EffectApplyAuraName2](#effectapplyauraname2) | int | unsigned |  | NO | 0 |  |  |
| [EffectApplyAuraName3](#effectapplyauraname3) | int | unsigned |  | NO | 0 |  |  |
| [EffectAmplitude1](#effectamplitude1) | int | signed |  | NO | 0 |  |  |
| [EffectAmplitude2](#effectamplitude2) | int | signed |  | NO | 0 |  |  |
| [EffectAmplitude3](#effectamplitude3) | int | signed |  | NO | 0 |  |  |
| [EffectMultipleValue1](#effectmultiplevalue1) | float |  |  | NO | 0 |  |  |
| [EffectMultipleValue2](#effectmultiplevalue2) | float |  |  | NO | 0 |  |  |
| [EffectMultipleValue3](#effectmultiplevalue3) | float |  |  | NO | 0 |  |  |
| [EffectItemType1](#effectitemtype1) | int | unsigned |  | NO | 0 |  |  |
| [EffectItemType2](#effectitemtype2) | int | unsigned |  | NO | 0 |  |  |
| [EffectItemType3](#effectitemtype3) | int | unsigned |  | NO | 0 |  |  |
| [EffectMiscValue1](#effectmiscvalue1) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValue2](#effectmiscvalue2) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValue3](#effectmiscvalue3) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValueB1](#effectmiscvalueb1) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValueB2](#effectmiscvalueb2) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValueB3](#effectmiscvalueb3) | int | signed |  | NO | 0 |  |  |
| [EffectTriggerSpell1](#effecttriggerspell1) | int | unsigned |  | NO | 0 |  |  |
| [EffectTriggerSpell2](#effecttriggerspell2) | int | unsigned |  | NO | 0 |  |  |
| [EffectTriggerSpell3](#effecttriggerspell3) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskA1](#effectspellclassmaska1) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskA2](#effectspellclassmaska2) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskA3](#effectspellclassmaska3) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskB1](#effectspellclassmaskb1) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskB2](#effectspellclassmaskb2) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskB3](#effectspellclassmaskb3) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskC1](#effectspellclassmaskc1) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskC2](#effectspellclassmaskc2) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMaskC3](#effectspellclassmaskc3) | int | unsigned |  | NO | 0 |  |  |
| [SpellName](#spellname) | varchar(100) |  |  | YES | NULL |  |  |
| [MaxTargetLevel](#maxtargetlevel) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyName](#spellfamilyname) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags1](#spellfamilyflags1) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags2](#spellfamilyflags2) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags3](#spellfamilyflags3) | int | unsigned |  | NO | 0 |  |  |
| [MaxAffectedTargets](#maxaffectedtargets) | int | unsigned |  | NO | 0 |  |  |
| [DmgClass](#dmgclass) | int | unsigned |  | NO | 0 |  |  |
| [PreventionType](#preventiontype) | int | unsigned |  | NO | 0 |  |  |
| [DmgMultiplier1](#dmgmultiplier1) | float |  |  | NO | 0 |  |  |
| [DmgMultiplier2](#dmgmultiplier2) | float |  |  | NO | 0 |  |  |
| [DmgMultiplier3](#dmgmultiplier3) | float |  |  | NO | 0 |  |  |
| [AreaGroupId](#areagroupid) | int | signed |  | NO | 0 |  |  |
| [SchoolMask](#schoolmask) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id
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

### Stances
*- no description -*
&nbsp;

### StancesNot
*- no description -*
&nbsp;

### Targets
*- no description -*
&nbsp;

### CastingTimeIndex
*- no description -*
&nbsp;

### AuraInterruptFlags
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

### Effect1
*- no description -*
&nbsp;

### Effect2
*- no description -*
&nbsp;

### Effect3
*- no description -*
&nbsp;

### EffectDieSides1
*- no description -*
&nbsp;

### EffectDieSides2
*- no description -*
&nbsp;

### EffectDieSides3
*- no description -*
&nbsp;

### EffectRealPointsPerLevel1
*- no description -*
&nbsp;

### EffectRealPointsPerLevel2
*- no description -*
&nbsp;

### EffectRealPointsPerLevel3
*- no description -*
&nbsp;

### EffectBasePoints1
*- no description -*
&nbsp;

### EffectBasePoints2
*- no description -*
&nbsp;

### EffectBasePoints3
*- no description -*
&nbsp;

### EffectMechanic1
*- no description -*
&nbsp;

### EffectMechanic2
*- no description -*
&nbsp;

### EffectMechanic3
*- no description -*
&nbsp;

### EffectImplicitTargetA1
*- no description -*
&nbsp;

### EffectImplicitTargetA2
*- no description -*
&nbsp;

### EffectImplicitTargetA3
*- no description -*
&nbsp;

### EffectImplicitTargetB1
*- no description -*
&nbsp;

### EffectImplicitTargetB2
*- no description -*
&nbsp;

### EffectImplicitTargetB3
*- no description -*
&nbsp;

### EffectRadiusIndex1
*- no description -*
&nbsp;

### EffectRadiusIndex2
*- no description -*
&nbsp;

### EffectRadiusIndex3
*- no description -*
&nbsp;

### EffectApplyAuraName1
*- no description -*
&nbsp;

### EffectApplyAuraName2
*- no description -*
&nbsp;

### EffectApplyAuraName3
*- no description -*
&nbsp;

### EffectAmplitude1
*- no description -*
&nbsp;

### EffectAmplitude2
*- no description -*
&nbsp;

### EffectAmplitude3
*- no description -*
&nbsp;

### EffectMultipleValue1
*- no description -*
&nbsp;

### EffectMultipleValue2
*- no description -*
&nbsp;

### EffectMultipleValue3
*- no description -*
&nbsp;

### EffectItemType1
*- no description -*
&nbsp;

### EffectItemType2
*- no description -*
&nbsp;

### EffectItemType3
*- no description -*
&nbsp;

### EffectMiscValue1
*- no description -*
&nbsp;

### EffectMiscValue2
*- no description -*
&nbsp;

### EffectMiscValue3
*- no description -*
&nbsp;

### EffectMiscValueB1
*- no description -*
&nbsp;

### EffectMiscValueB2
*- no description -*
&nbsp;

### EffectMiscValueB3
*- no description -*
&nbsp;

### EffectTriggerSpell1
*- no description -*
&nbsp;

### EffectTriggerSpell2
*- no description -*
&nbsp;

### EffectTriggerSpell3
*- no description -*
&nbsp;

### EffectSpellClassMaskA1
*- no description -*
&nbsp;

### EffectSpellClassMaskA2
*- no description -*
&nbsp;

### EffectSpellClassMaskA3
*- no description -*
&nbsp;

### EffectSpellClassMaskB1
*- no description -*
&nbsp;

### EffectSpellClassMaskB2
*- no description -*
&nbsp;

### EffectSpellClassMaskB3
*- no description -*
&nbsp;

### EffectSpellClassMaskC1
*- no description -*
&nbsp;

### EffectSpellClassMaskC2
*- no description -*
&nbsp;

### EffectSpellClassMaskC3
*- no description -*
&nbsp;

### SpellName
*- no description -*
&nbsp;

### MaxTargetLevel
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

### MaxAffectedTargets
*- no description -*
&nbsp;

### DmgClass
*- no description -*
&nbsp;

### PreventionType
*- no description -*
&nbsp;

### DmgMultiplier1
*- no description -*
&nbsp;

### DmgMultiplier2
*- no description -*
&nbsp;

### DmgMultiplier3
*- no description -*
&nbsp;

### AreaGroupId
*- no description -*
&nbsp;

### SchoolMask
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_custom_attr'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_enchant_proc_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_enchant_proc_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
