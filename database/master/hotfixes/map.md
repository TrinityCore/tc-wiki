---
title: map
description: 
published: true
date: 2021-11-14T19:41:35.135Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/mail_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/map_challenge_mode" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_challenge_mode'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Directory](#directory) | text |  |  | YES | NULL |  |  |
| [MapName](#mapname) | text |  |  | YES | NULL |  |  |
| [MapDescription0](#mapdescription0) | text |  |  | YES | NULL |  |  |
| [MapDescription1](#mapdescription1) | text |  |  | YES | NULL |  |  |
| [PvpShortDescription](#pvpshortdescription) | text |  |  | YES | NULL |  |  |
| [PvpLongDescription](#pvplongdescription) | text |  |  | YES | NULL |  |  |
| [CorpseX](#corpsex) | float |  |  | NO | 0 |  |  |
| [CorpseY](#corpsey) | float |  |  | NO | 0 |  |  |
| [MapType](#maptype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [InstanceType](#instancetype) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AreaTableID](#areatableid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LoadingScreenID](#loadingscreenid) | smallint(6) | signed |  | NO | 0 |  |  |
| [TimeOfDayOverride](#timeofdayoverride) | smallint(6) | signed |  | NO | 0 |  |  |
| [ParentMapID](#parentmapid) | smallint(6) | signed |  | NO | 0 |  |  |
| [CosmeticParentMapID](#cosmeticparentmapid) | smallint(6) | signed |  | NO | 0 |  |  |
| [TimeOffset](#timeoffset) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinimapIconScale](#minimapiconscale) | float |  |  | NO | 0 |  |  |
| [CorpseMapID](#corpsemapid) | smallint(6) | signed |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WindSettingsID](#windsettingsid) | smallint(6) | signed |  | NO | 0 |  |  |
| [ZmpFileDataID](#zmpfiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [WdtFileDataID](#wdtfiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [Flags1](#flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/mail_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/map_challenge_mode" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_challenge_mode'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

