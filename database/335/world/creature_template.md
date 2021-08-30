---
title: creature_template
description: 
published: true
date: 2021-08-30T22:01:28.022Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [difficulty_entry_1](#difficulty_entry_1) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_2](#difficulty_entry_2) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_3](#difficulty_entry_3) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [KillCredit1](#killcredit1) | int(10) | unsigned |  | NO | 0 |  |  |
| [KillCredit2](#killcredit2) | int(10) | unsigned |  | NO | 0 |  |  |
| [modelid1](#modelid1) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [modelid2](#modelid2) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [modelid3](#modelid3) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [modelid4](#modelid4) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [name](#name) | char(100) | signed | MUL | NO | 0 |  |  |
| [subname](#subname) | char(100) | signed |  | YES | NULL |  |  |
| [IconName](#iconname) | char(100) | signed |  | YES | NULL |  |  |
| [gossip_menu_id](#gossip_menu_id) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [minlevel](#minlevel) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [maxlevel](#maxlevel) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [exp](#exp) | smallint(6) | signed |  | NO | 0 |  |  |
| [faction](#faction) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | int(10) | unsigned |  | NO | 0 |  |  |
| [speed_walk](#speed_walk) | float |  |  | NO | 1 |  | Result of 2.5/2.5, most common value |
| [speed_run](#speed_run) | float |  |  | NO | 1.14286 |  | Result of 8.0/7.0, most common value |
| [scale](#scale) | float |  |  | NO | 1 |  |  |
| [rank](#rank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [dmgschool](#dmgschool) | tinyint(4) | signed |  | NO | 0 |  |  |
| [BaseAttackTime](#baseattacktime) | int(10) | unsigned |  | NO | 0 |  |  |
| [RangeAttackTime](#rangeattacktime) | int(10) | unsigned |  | NO | 0 |  |  |
| [BaseVariance](#basevariance) | float |  |  | NO | 1 |  |  |
| [RangeVariance](#rangevariance) | float |  |  | NO | 1 |  |  |
| [unit_class](#unit_class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags2](#unit_flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [family](#family) | tinyint(4) | signed |  | NO | 0 |  |  |
| [type](#type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [type_flags](#type_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [lootid](#lootid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [pickpocketloot](#pickpocketloot) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [skinloot](#skinloot) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [PetSpellDataId](#petspelldataid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [VehicleId](#vehicleid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [AIName](#ainame) | char(64) | signed |  | NO | '' |  |  |
| [MovementType](#movementtype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [HoverHeight](#hoverheight) | float |  |  | NO | 1 |  |  |
| [HealthModifier](#healthmodifier) | float |  |  | NO | 1 |  |  |
| [ManaModifier](#manamodifier) | float |  |  | NO | 1 |  |  |
| [ArmorModifier](#armormodifier) | float |  |  | NO | 1 |  |  |
| [DamageModifier](#damagemodifier) | float |  |  | NO | 1 |  |  |
| [ExperienceModifier](#experiencemodifier) | float |  |  | NO | 1 |  |  |
| [RacialLeader](#racialleader) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [movementId](#movementid) | int(11) | unsigned |  | NO | 0 |  |  |
| [RegenHealth](#regenhealth) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [mechanic_immune_mask](#mechanic_immune_mask) | int(10) | unsigned |  | NO | 0 |  |  |
| [spell_school_immune_mask](#spell_school_immune_mask) | int(3) | unsigned |  | NO | 0 |  |  |
| [flags_extra](#flags_extra) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint(5) | signed |  | YES | 0 |  |  |
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

### modelid1
*- no description -*
&nbsp;

### modelid2
*- no description -*
&nbsp;

### modelid3
*- no description -*
&nbsp;

### modelid4
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### subname
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

### exp
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

### dynamicflags
*- no description -*
&nbsp;

### family
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### type_flags
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

### PetSpellDataId
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

### ManaModifier
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

<a href="https://dev.trinitycore.info/en/database/335/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

