---
title: spell_power
description: 
published: true
date: 2022-12-19T18:39:07.759Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:50.953Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_name_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_power_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_power_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [ManaCost](#manacost) | int | signed |  | NO | 0 |  |  |
| [ManaCostPerLevel](#manacostperlevel) | int | signed |  | NO | 0 |  |  |
| [ManaPerSecond](#manapersecond) | int | signed |  | NO | 0 |  |  |
| [PowerDisplayID](#powerdisplayid) | int | unsigned |  | NO | 0 |  |  |
| [AltPowerBarID](#altpowerbarid) | int | signed |  | NO | 0 |  |  |
| [PowerCostPct](#powercostpct) | float |  |  | NO | 0 |  |  |
| [PowerCostMaxPct](#powercostmaxpct) | float |  |  | NO | 0 |  |  |
| [OptionalCostPct](#optionalcostpct) | float |  |  | NO | 0 |  |  |
| [PowerPctPerSecond](#powerpctpersecond) | float |  |  | NO | 0 |  |  |
| [PowerType](#powertype) | tinyint | signed |  | NO | 0 |  |  |
| [RequiredAuraSpellID](#requiredauraspellid) | int | signed |  | NO | 0 |  |  |
| [OptionalCost](#optionalcost) | int | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### ManaCost
*- no description -*
&nbsp;

### ManaCostPerLevel
*- no description -*
&nbsp;

### ManaPerSecond
*- no description -*
&nbsp;

### PowerDisplayID
*- no description -*
&nbsp;

### AltPowerBarID
*- no description -*
&nbsp;

### PowerCostPct
*- no description -*
&nbsp;

### PowerCostMaxPct
*- no description -*
&nbsp;

### OptionalCostPct
*- no description -*
&nbsp;

### PowerPctPerSecond
*- no description -*
&nbsp;

### PowerType
*- no description -*
&nbsp;

### RequiredAuraSpellID
*- no description -*
&nbsp;

### OptionalCost
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

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_name_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_power_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_power_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
