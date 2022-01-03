---
title: spell_x_spell_visual
description: 
published: true
date: 2022-01-03T11:26:23.220Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_missile" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual_missile'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/summon_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'summon_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpellVisualID](#spellvisualid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Probability](#probability) | float |  |  | NO | 0 |  |  |
| [Priority](#priority) | int(11) | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int(11) | signed |  | NO | 0 |  |  |
| [ActiveIconFileID](#activeiconfileid) | int(11) | signed |  | NO | 0 |  |  |
| [ViewerUnitConditionID](#viewerunitconditionid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ViewerPlayerConditionID](#viewerplayerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [CasterUnitConditionID](#casterunitconditionid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [CasterPlayerConditionID](#casterplayerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### SpellVisualID
*- no description -*
&nbsp;

### Probability
*- no description -*
&nbsp;

### Priority
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### ActiveIconFileID
*- no description -*
&nbsp;

### ViewerUnitConditionID
*- no description -*
&nbsp;

### ViewerPlayerConditionID
*- no description -*
&nbsp;

### CasterUnitConditionID
*- no description -*
&nbsp;

### CasterPlayerConditionID
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

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_missile" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual_missile'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/summon_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'summon_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

