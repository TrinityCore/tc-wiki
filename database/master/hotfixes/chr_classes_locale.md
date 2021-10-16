---
title: chr_classes_locale
description: 
published: true
date: 2021-08-30T19:58:43.025Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_classes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes_x_power_types" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_x_power_types'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) | signed | PRI | NO |  |  |  |
| [Name_lang](#name_lang) | text |  |  | YES | NULL |  |  |
| [NameMale_lang](#namemale_lang) | text |  |  | YES | NULL |  |  |
| [NameFemale_lang](#namefemale_lang) | text |  |  | YES | NULL |  |  |
| [Description_lang](#description_lang) | text |  |  | YES | NULL |  |  |
| [RoleInfoString_lang](#roleinfostring_lang) | text |  |  | YES | NULL |  |  |
| [DisabledString_lang](#disabledstring_lang) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameMale_lang](#hyphenatednamemale_lang) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameFemale_lang](#hyphenatednamefemale_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Name_lang
*- no description -*
&nbsp;

### NameMale_lang
*- no description -*
&nbsp;

### NameFemale_lang
*- no description -*
&nbsp;

### Description_lang
*- no description -*
&nbsp;

### RoleInfoString_lang
*- no description -*
&nbsp;

### DisabledString_lang
*- no description -*
&nbsp;

### HyphenatedNameMale_lang
*- no description -*
&nbsp;

### HyphenatedNameFemale_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_classes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes_x_power_types" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_x_power_types'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

