---
title: creature_difficulty
description: 
published: true
date: 2022-11-21T21:13:09.317Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:14.276Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_display_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [CreatureID](#creatureid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | unsigned |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | unsigned |  | NO | 0 |  |  |
| [Flags3](#flags3) | int | unsigned |  | NO | 0 |  |  |
| [Flags4](#flags4) | int | unsigned |  | NO | 0 |  |  |
| [Flags5](#flags5) | int | unsigned |  | NO | 0 |  |  |
| [Flags6](#flags6) | int | unsigned |  | NO | 0 |  |  |
| [Flags7](#flags7) | int | unsigned |  | NO | 0 |  |  |
| [FactionTemplateID](#factiontemplateid) | smallint | unsigned |  | NO | 0 |  |  |
| [Expansion](#expansion) | tinyint | signed |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint | signed |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### CreatureID
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### Flags3
*- no description -*
&nbsp;

### Flags4
*- no description -*
&nbsp;

### Flags5
*- no description -*
&nbsp;

### Flags6
*- no description -*
&nbsp;

### Flags7
*- no description -*
&nbsp;

### FactionTemplateID
*- no description -*
&nbsp;

### Expansion
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_display_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

