---
title: ui_splash_screen_locale
description: 
published: true
date: 2022-11-21T21:33:04.269Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T20:02:03.877Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/ui_splash_screen" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_splash_screen'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/unit_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'unit_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Header_lang](#header_lang) | text |  |  | YES | NULL |  |  |
| [TopLeftFeatureTitle_lang](#topleftfeaturetitle_lang) | text |  |  | YES | NULL |  |  |
| [TopLeftFeatureDesc_lang](#topleftfeaturedesc_lang) | text |  |  | YES | NULL |  |  |
| [BottomLeftFeatureTitle_lang](#bottomleftfeaturetitle_lang) | text |  |  | YES | NULL |  |  |
| [BottomLeftFeatureDesc_lang](#bottomleftfeaturedesc_lang) | text |  |  | YES | NULL |  |  |
| [RightFeatureTitle_lang](#rightfeaturetitle_lang) | text |  |  | YES | NULL |  |  |
| [RightFeatureDesc_lang](#rightfeaturedesc_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Header_lang
*- no description -*
&nbsp;

### TopLeftFeatureTitle_lang
*- no description -*
&nbsp;

### TopLeftFeatureDesc_lang
*- no description -*
&nbsp;

### BottomLeftFeatureTitle_lang
*- no description -*
&nbsp;

### BottomLeftFeatureDesc_lang
*- no description -*
&nbsp;

### RightFeatureTitle_lang
*- no description -*
&nbsp;

### RightFeatureDesc_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/ui_splash_screen" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_splash_screen'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/unit_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'unit_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
