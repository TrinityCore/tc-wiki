---
title: map
description: 
published: true
date: 2021-08-30T09:44:29.556Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/mail_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Directory](#Directory) | text |  |  | YES | NULL |  |  |
| [MapName](#MapName) | text |  |  | YES | NULL |  |  |
| [MapDescription0](#MapDescription0) | text |  |  | YES | NULL |  |  |
| [MapDescription1](#MapDescription1) | text |  |  | YES | NULL |  |  |
| [PvpShortDescription](#PvpShortDescription) | text |  |  | YES | NULL |  |  |
| [PvpLongDescription](#PvpLongDescription) | text |  |  | YES | NULL |  |  |
| [CorpseX](#CorpseX) | float |  |  | NO | 0 |  |  |
| [CorpseY](#CorpseY) | float |  |  | NO | 0 |  |  |
| [MapType](#MapType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [InstanceType](#InstanceType) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ExpansionID](#ExpansionID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AreaTableID](#AreaTableID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LoadingScreenID](#LoadingScreenID) | smallint(6) | signed |  | NO | 0 |  |  |
| [TimeOfDayOverride](#TimeOfDayOverride) | smallint(6) | signed |  | NO | 0 |  |  |
| [ParentMapID](#ParentMapID) | smallint(6) | signed |  | NO | 0 |  |  |
| [CosmeticParentMapID](#CosmeticParentMapID) | smallint(6) | signed |  | NO | 0 |  |  |
| [TimeOffset](#TimeOffset) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinimapIconScale](#MinimapIconScale) | float |  |  | NO | 0 |  |  |
| [CorpseMapID](#CorpseMapID) | smallint(6) | signed |  | NO | 0 |  |  |
| [MaxPlayers](#MaxPlayers) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WindSettingsID](#WindSettingsID) | smallint(6) | signed |  | NO | 0 |  |  |
| [ZmpFileDataID](#ZmpFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [WdtFileDataID](#WdtFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [Flags1](#Flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#Flags2) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Directory
*- no description -*
&nbsp;

### MapName
*- no description -*
&nbsp;

### MapDescription0
*- no description -*
&nbsp;

### MapDescription1
*- no description -*
&nbsp;

### PvpShortDescription
*- no description -*
&nbsp;

### PvpLongDescription
*- no description -*
&nbsp;

### CorpseX
*- no description -*
&nbsp;

### CorpseY
*- no description -*
&nbsp;

### MapType
*- no description -*
&nbsp;

### InstanceType
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### AreaTableID
*- no description -*
&nbsp;

### LoadingScreenID
*- no description -*
&nbsp;

### TimeOfDayOverride
*- no description -*
&nbsp;

### ParentMapID
*- no description -*
&nbsp;

### CosmeticParentMapID
*- no description -*
&nbsp;

### TimeOffset
*- no description -*
&nbsp;

### MinimapIconScale
*- no description -*
&nbsp;

### CorpseMapID
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### WindSettingsID
*- no description -*
&nbsp;

### ZmpFileDataID
*- no description -*
&nbsp;

### WdtFileDataID
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/mail_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

