---
title: expected_stat
description: 
published: true
date: 2022-11-21T21:13:59.286Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:20.605Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/emotes_text_sound" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'emotes_text_sound'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'expected_stat_mod'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [CreatureHealth](#creaturehealth) | float |  |  | NO | 0 |  |  |
| [PlayerHealth](#playerhealth) | float |  |  | NO | 0 |  |  |
| [CreatureAutoAttackDps](#creatureautoattackdps) | float |  |  | NO | 0 |  |  |
| [CreatureArmor](#creaturearmor) | float |  |  | NO | 0 |  |  |
| [PlayerMana](#playermana) | float |  |  | NO | 0 |  |  |
| [PlayerPrimaryStat](#playerprimarystat) | float |  |  | NO | 0 |  |  |
| [PlayerSecondaryStat](#playersecondarystat) | float |  |  | NO | 0 |  |  |
| [ArmorConstant](#armorconstant) | float |  |  | NO | 0 |  |  |
| [CreatureSpellDamage](#creaturespelldamage) | float |  |  | NO | 0 |  |  |
| [Lvl](#lvl) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### CreatureHealth
*- no description -*
&nbsp;

### PlayerHealth
*- no description -*
&nbsp;

### CreatureAutoAttackDps
*- no description -*
&nbsp;

### CreatureArmor
*- no description -*
&nbsp;

### PlayerMana
*- no description -*
&nbsp;

### PlayerPrimaryStat
*- no description -*
&nbsp;

### PlayerSecondaryStat
*- no description -*
&nbsp;

### ArmorConstant
*- no description -*
&nbsp;

### CreatureSpellDamage
*- no description -*
&nbsp;

### Lvl
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/emotes_text_sound" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'emotes_text_sound'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'expected_stat_mod'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

