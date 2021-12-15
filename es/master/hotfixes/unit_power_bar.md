---
title: unit_power_bar
description: 
published: true
date: 2021-11-14T19:41:35.181Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_splash_screen_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_splash_screen_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/unit_power_bar_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'unit_power_bar_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Cost](#cost) | text |  |  | YES | NULL |  |  |
| [OutOfError](#outoferror) | text |  |  | YES | NULL |  |  |
| [ToolTip](#tooltip) | text |  |  | YES | NULL |  |  |
| [MinPower](#minpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [MaxPower](#maxpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [StartPower](#startpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [CenterPower](#centerpower) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RegenerationPeace](#regenerationpeace) | float |  |  | NO | 0 |  |  |
| [RegenerationCombat](#regenerationcombat) | float |  |  | NO | 0 |  |  |
| [BarType](#bartype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [StartInset](#startinset) | float |  |  | NO | 0 |  |  |
| [EndInset](#endinset) | float |  |  | NO | 0 |  |  |
| [FileDataID1](#filedataid1) | int(11) | signed |  | NO | 0 |  |  |
| [FileDataID2](#filedataid2) | int(11) | signed |  | NO | 0 |  |  |
| [FileDataID3](#filedataid3) | int(11) | signed |  | NO | 0 |  |  |
| [FileDataID4](#filedataid4) | int(11) | signed |  | NO | 0 |  |  |
| [FileDataID5](#filedataid5) | int(11) | signed |  | NO | 0 |  |  |
| [FileDataID6](#filedataid6) | int(11) | signed |  | NO | 0 |  |  |
| [Color1](#color1) | int(11) | signed |  | NO | 0 |  |  |
| [Color2](#color2) | int(11) | signed |  | NO | 0 |  |  |
| [Color3](#color3) | int(11) | signed |  | NO | 0 |  |  |
| [Color4](#color4) | int(11) | signed |  | NO | 0 |  |  |
| [Color5](#color5) | int(11) | signed |  | NO | 0 |  |  |
| [Color6](#color6) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Cost
*- no description -*
&nbsp;

### OutOfError
*- no description -*
&nbsp;

### ToolTip
*- no description -*
&nbsp;

### MinPower
*- no description -*
&nbsp;

### MaxPower
*- no description -*
&nbsp;

### StartPower
*- no description -*
&nbsp;

### CenterPower
*- no description -*
&nbsp;

### RegenerationPeace
*- no description -*
&nbsp;

### RegenerationCombat
*- no description -*
&nbsp;

### BarType
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### StartInset
*- no description -*
&nbsp;

### EndInset
*- no description -*
&nbsp;

### FileDataID1
*- no description -*
&nbsp;

### FileDataID2
*- no description -*
&nbsp;

### FileDataID3
*- no description -*
&nbsp;

### FileDataID4
*- no description -*
&nbsp;

### FileDataID5
*- no description -*
&nbsp;

### FileDataID6
*- no description -*
&nbsp;

### Color1
*- no description -*
&nbsp;

### Color2
*- no description -*
&nbsp;

### Color3
*- no description -*
&nbsp;

### Color4
*- no description -*
&nbsp;

### Color5
*- no description -*
&nbsp;

### Color6
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_splash_screen_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_splash_screen_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/unit_power_bar_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'unit_power_bar_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

