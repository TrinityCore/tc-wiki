---
title: chr_races_locale
description: 
published: true
date: 2021-08-30T19:58:43.029Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_races'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_specialization" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_specialization'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) | signed | PRI | NO |  |  |  |
| [Name_lang](#name_lang) | text |  |  | YES | NULL |  |  |
| [NameFemale_lang](#namefemale_lang) | text |  |  | YES | NULL |  |  |
| [NameLowercase_lang](#namelowercase_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercase_lang](#namefemalelowercase_lang) | text |  |  | YES | NULL |  |  |
| [NameS_lang](#names_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleS_lang](#namefemales_lang) | text |  |  | YES | NULL |  |  |
| [NameLowercaseS_lang](#namelowercases_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercaseS_lang](#namefemalelowercases_lang) | text |  |  | YES | NULL |  |  |
| [RaceFantasyDescription_lang](#racefantasydescription_lang) | text |  |  | YES | NULL |  |  |
| [NameL_lang](#namel_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleL_lang](#namefemalel_lang) | text |  |  | YES | NULL |  |  |
| [NameLowercaseL_lang](#namelowercasel_lang) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercaseL_lang](#namefemalelowercasel_lang) | text |  |  | YES | NULL |  |  |
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

### NameFemale_lang
*- no description -*
&nbsp;

### NameLowercase_lang
*- no description -*
&nbsp;

### NameFemaleLowercase_lang
*- no description -*
&nbsp;

### NameS_lang
*- no description -*
&nbsp;

### NameFemaleS_lang
*- no description -*
&nbsp;

### NameLowercaseS_lang
*- no description -*
&nbsp;

### NameFemaleLowercaseS_lang
*- no description -*
&nbsp;

### RaceFantasyDescription_lang
*- no description -*
&nbsp;

### NameL_lang
*- no description -*
&nbsp;

### NameFemaleL_lang
*- no description -*
&nbsp;

### NameLowercaseL_lang
*- no description -*
&nbsp;

### NameFemaleLowercaseL_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_races'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_specialization" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_specialization'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

