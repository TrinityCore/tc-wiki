---
title: creature_template
description: 
published: true
date: 2021-08-30T09:24:17.478Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [difficulty_entry_1](#difficulty_entry_1) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_2](#difficulty_entry_2) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_3](#difficulty_entry_3) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [KillCredit1](#KillCredit1) | int(10) | unsigned |  | NO | 0 |  |  |
| [KillCredit2](#KillCredit2) | int(10) | unsigned |  | NO | 0 |  |  |
| [name](#name) | text |  |  | YES | NULL |  |  |
| [femaleName](#femaleName) | text |  |  | YES | NULL |  |  |
| [subname](#subname) | text |  |  | YES | NULL |  |  |
| [TitleAlt](#TitleAlt) | text |  |  | YES | NULL |  |  |
| [IconName](#IconName) | varchar(64) | signed |  | YES | NULL |  |  |
| [gossip_menu_id](#gossip_menu_id) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [minlevel](#minlevel) | smallint(5) | signed |  | NO | 1 |  |  |
| [maxlevel](#maxlevel) | smallint(5) | signed |  | NO | 1 |  |  |
| [HealthScalingExpansion](#HealthScalingExpansion) | mediumint(5) | signed |  | NO | 0 |  |  |
| [RequiredExpansion](#RequiredExpansion) | mediumint(5) | signed |  | NO | 0 |  |  |
| [VignetteID](#VignetteID) | mediumint(5) | signed |  | NO | 0 |  |  |
| [faction](#faction) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [speed_walk](#speed_walk) | float |  |  | NO | 1 |  | Result of 2.5/2.5, most common value |
| [speed_run](#speed_run) | float |  |  | NO | 1.14286 |  | Result of 8.0/7.0, most common value |
| [scale](#scale) | float |  |  | NO | 1 |  |  |
| [rank](#rank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [dmgschool](#dmgschool) | tinyint(4) | signed |  | NO | 0 |  |  |
| [BaseAttackTime](#BaseAttackTime) | int(10) | unsigned |  | NO | 0 |  |  |
| [RangeAttackTime](#RangeAttackTime) | int(10) | unsigned |  | NO | 0 |  |  |
| [BaseVariance](#BaseVariance) | float |  |  | NO | 1 |  |  |
| [RangeVariance](#RangeVariance) | float |  |  | NO | 1 |  |  |
| [unit_class](#unit_class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags2](#unit_flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags3](#unit_flags3) | int(10) | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [family](#family) | int(11) | signed |  | NO | 0 |  |  |
| [trainer_class](#trainer_class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [type_flags](#type_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [type_flags2](#type_flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [lootid](#lootid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [pickpocketloot](#pickpocketloot) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [skinloot](#skinloot) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [resistance1](#resistance1) | smallint(6) | signed |  | NO | 0 |  |  |
| [resistance2](#resistance2) | smallint(6) | signed |  | NO | 0 |  |  |
| [resistance3](#resistance3) | smallint(6) | signed |  | NO | 0 |  |  |
| [resistance4](#resistance4) | smallint(6) | signed |  | NO | 0 |  |  |
| [resistance5](#resistance5) | smallint(6) | signed |  | NO | 0 |  |  |
| [resistance6](#resistance6) | smallint(6) | signed |  | NO | 0 |  |  |
| [spell1](#spell1) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell2](#spell2) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell3](#spell3) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell4](#spell4) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell5](#spell5) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell6](#spell6) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell7](#spell7) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [spell8](#spell8) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [VehicleId](#VehicleId) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [AIName](#AIName) | varchar(64) | signed |  | NO | '' |  |  |
| [MovementType](#MovementType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [HoverHeight](#HoverHeight) | float |  |  | NO | 1 |  |  |
| [HealthModifier](#HealthModifier) | float |  |  | NO | 1 |  |  |
| [HealthModifierExtra](#HealthModifierExtra) | float |  |  | NO | 1 |  |  |
| [ManaModifier](#ManaModifier) | float |  |  | NO | 1 |  |  |
| [ManaModifierExtra](#ManaModifierExtra) | float |  |  | NO | 1 |  |  |
| [ArmorModifier](#ArmorModifier) | float |  |  | NO | 1 |  |  |
| [DamageModifier](#DamageModifier) | float |  |  | NO | 1 |  |  |
| [ExperienceModifier](#ExperienceModifier) | float |  |  | NO | 1 |  |  |
| [RacialLeader](#RacialLeader) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [movementId](#movementId) | int(11) | unsigned |  | NO | 0 |  |  |
| [CreatureDifficultyID](#CreatureDifficultyID) | int(11) | signed |  | NO | 0 |  |  |
| [WidgetSetID](#WidgetSetID) | int(11) | signed |  | NO | 0 |  |  |
| [WidgetSetUnitConditionID](#WidgetSetUnitConditionID) | int(11) | signed |  | NO | 0 |  |  |
| [RegenHealth](#RegenHealth) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [mechanic_immune_mask](#mechanic_immune_mask) | int(10) | unsigned |  | NO | 0 |  |  |
| [spell_school_immune_mask](#spell_school_immune_mask) | int(3) | unsigned |  | NO | 0 |  |  |
| [flags_extra](#flags_extra) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#ScriptName) | varchar(64) | signed |  | NO | '' |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
*- no description -*
&nbsp;

### difficulty_entry_1
*- no description -*
&nbsp;

### difficulty_entry_2
*- no description -*
&nbsp;

### difficulty_entry_3
*- no description -*
&nbsp;

### KillCredit1
*- no description -*
&nbsp;

### KillCredit2
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### femaleName
*- no description -*
&nbsp;

### subname
*- no description -*
&nbsp;

### TitleAlt
*- no description -*
&nbsp;

### IconName
*- no description -*
&nbsp;

### gossip_menu_id
*- no description -*
&nbsp;

### minlevel
*- no description -*
&nbsp;

### maxlevel
*- no description -*
&nbsp;

### HealthScalingExpansion
*- no description -*
&nbsp;

### RequiredExpansion
*- no description -*
&nbsp;

### VignetteID
*- no description -*
&nbsp;

### faction
*- no description -*
&nbsp;

### npcflag
*- no description -*
&nbsp;

### speed_walk
*- no description -*
&nbsp;

### speed_run
*- no description -*
&nbsp;

### scale
*- no description -*
&nbsp;

### rank
*- no description -*
&nbsp;

### dmgschool
*- no description -*
&nbsp;

### BaseAttackTime
*- no description -*
&nbsp;

### RangeAttackTime
*- no description -*
&nbsp;

### BaseVariance
*- no description -*
&nbsp;

### RangeVariance
*- no description -*
&nbsp;

### unit_class
*- no description -*
&nbsp;

### unit_flags
*- no description -*
&nbsp;

### unit_flags2
*- no description -*
&nbsp;

### unit_flags3
*- no description -*
&nbsp;

### dynamicflags
*- no description -*
&nbsp;

### family
*- no description -*
&nbsp;

### trainer_class
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### type_flags
*- no description -*
&nbsp;

### type_flags2
*- no description -*
&nbsp;

### lootid
*- no description -*
&nbsp;

### pickpocketloot
*- no description -*
&nbsp;

### skinloot
*- no description -*
&nbsp;

### resistance1
*- no description -*
&nbsp;

### resistance2
*- no description -*
&nbsp;

### resistance3
*- no description -*
&nbsp;

### resistance4
*- no description -*
&nbsp;

### resistance5
*- no description -*
&nbsp;

### resistance6
*- no description -*
&nbsp;

### spell1
*- no description -*
&nbsp;

### spell2
*- no description -*
&nbsp;

### spell3
*- no description -*
&nbsp;

### spell4
*- no description -*
&nbsp;

### spell5
*- no description -*
&nbsp;

### spell6
*- no description -*
&nbsp;

### spell7
*- no description -*
&nbsp;

### spell8
*- no description -*
&nbsp;

### VehicleId
*- no description -*
&nbsp;

### mingold
*- no description -*
&nbsp;

### maxgold
*- no description -*
&nbsp;

### AIName
*- no description -*
&nbsp;

### MovementType
*- no description -*
&nbsp;

### HoverHeight
*- no description -*
&nbsp;

### HealthModifier
*- no description -*
&nbsp;

### HealthModifierExtra
*- no description -*
&nbsp;

### ManaModifier
*- no description -*
&nbsp;

### ManaModifierExtra
*- no description -*
&nbsp;

### ArmorModifier
*- no description -*
&nbsp;

### DamageModifier
*- no description -*
&nbsp;

### ExperienceModifier
*- no description -*
&nbsp;

### RacialLeader
*- no description -*
&nbsp;

### movementId
*- no description -*
&nbsp;

### CreatureDifficultyID
*- no description -*
&nbsp;

### WidgetSetID
*- no description -*
&nbsp;

### WidgetSetUnitConditionID
*- no description -*
&nbsp;

### RegenHealth
*- no description -*
&nbsp;

### mechanic_immune_mask
*- no description -*
&nbsp;

### spell_school_immune_mask
*- no description -*
&nbsp;

### flags_extra
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

