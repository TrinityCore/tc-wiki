---
title: world_effect
description: 
published: true
date: 2022-11-21T21:22:01.268Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:04:05.070Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/wmo_area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'wmo_area_table_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/world_map_overlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_map_overlay'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [QuestFeedbackEffectID](#questfeedbackeffectid) | int | unsigned |  | NO | 0 |  |  |
| [WhenToDisplay](#whentodisplay) | tinyint | unsigned |  | NO | 0 |  |  |
| [TargetType](#targettype) | tinyint | unsigned |  | NO | 0 |  |  |
| [TargetAsset](#targetasset) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [CombatConditionID](#combatconditionid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### QuestFeedbackEffectID
*- no description -*
&nbsp;

### WhenToDisplay
*- no description -*
&nbsp;

### TargetType
*- no description -*
&nbsp;

### TargetAsset
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### CombatConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/wmo_area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'wmo_area_table_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/world_map_overlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_map_overlay'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

