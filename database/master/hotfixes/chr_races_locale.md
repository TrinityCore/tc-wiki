---
title: chr_races_locale
description: 
published: true
date: 2022-11-21T21:12:49.351Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:47.457Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_races" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_races'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_specialization" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_specialization'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Name_lang](#name_lang) | text |  |  | YES | NULL |  |  |
| [NameFemale_lang](#namefemale_lang) | text |  |  | YES | NULL |  |  |
| [NameLowercase_lang](#namelowercase_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercase_lang](#namefemalelowercase_lang) | text |  |  | YES | NULL |  |  |
| [LoreName_lang](#lorename_lang) | text |  |  | YES | NULL |  |  |
| [LoreNameFemale_lang](#lorenamefemale_lang) | text |  |  | YES | NULL |  |  |
| [LoreNameLower_lang](#lorenamelower_lang) | text |  |  | YES | NULL |  |  |
| [LoreNameLowerFemale_lang](#lorenamelowerfemale_lang) | text |  |  | YES | NULL |  |  |
| [LoreDescription_lang](#loredescription_lang) | text |  |  | YES | NULL |  |  |
| [ShortName_lang](#shortname_lang) | text |  |  | YES | NULL |  |  |
| [ShortNameFemale_lang](#shortnamefemale_lang) | text |  |  | YES | NULL |  |  |
| [ShortNameLower_lang](#shortnamelower_lang) | text |  |  | YES | NULL |  |  |
| [ShortNameLowerFemale_lang](#shortnamelowerfemale_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
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

### NameFemale_lang
*- no description -*
&nbsp;

### NameLowercase_lang
*- no description -*
&nbsp;

### NameFemaleLowercase_lang
*- no description -*
&nbsp;

### LoreName_lang
*- no description -*
&nbsp;

### LoreNameFemale_lang
*- no description -*
&nbsp;

### LoreNameLower_lang
*- no description -*
&nbsp;

### LoreNameLowerFemale_lang
*- no description -*
&nbsp;

### LoreDescription_lang
*- no description -*
&nbsp;

### ShortName_lang
*- no description -*
&nbsp;

### ShortNameFemale_lang
*- no description -*
&nbsp;

### ShortNameLower_lang
*- no description -*
&nbsp;

### ShortNameLowerFemale_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_races" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_races'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_specialization" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_specialization'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
