---
title: garr_follower
description: 
published: true
date: 2024-09-05T22:45:58.356Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:10.829Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_class_spec_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_class_spec_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_follower_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_follower_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [HordeSourceText](#hordesourcetext) | text |  |  | YES | NULL |  |  |
| [AllianceSourceText](#alliancesourcetext) | text |  |  | YES | NULL |  |  |
| [TitleName](#titlename) | text |  |  | YES | NULL |  |  |
| [GarrTypeID](#garrtypeid) | tinyint | signed |  | NO | 0 |  |  |
| [GarrFollowerTypeID](#garrfollowertypeid) | tinyint | signed |  | NO | 0 |  |  |
| [HordeCreatureID](#hordecreatureid) | int | signed |  | NO | 0 |  |  |
| [AllianceCreatureID](#alliancecreatureid) | int | signed |  | NO | 0 |  |  |
| [HordeGarrFollRaceID](#hordegarrfollraceid) | tinyint | unsigned |  | NO | 0 |  |  |
| [AllianceGarrFollRaceID](#alliancegarrfollraceid) | tinyint | unsigned |  | NO | 0 |  |  |
| [HordeGarrClassSpecID](#hordegarrclassspecid) | int | signed |  | NO | 0 |  |  |
| [AllianceGarrClassSpecID](#alliancegarrclassspecid) | int | signed |  | NO | 0 |  |  |
| [Quality](#quality) | int | signed |  | NO | 0 |  |  |
| [FollowerLevel](#followerlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [ItemLevelWeapon](#itemlevelweapon) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemLevelArmor](#itemlevelarmor) | smallint | unsigned |  | NO | 0 |  |  |
| [HordeSourceTypeEnum](#hordesourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [AllianceSourceTypeEnum](#alliancesourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [HordeIconFileDataID](#hordeiconfiledataid) | int | signed |  | NO | 0 |  |  |
| [AllianceIconFileDataID](#allianceiconfiledataid) | int | signed |  | NO | 0 |  |  |
| [HordeGarrFollItemSetID](#hordegarrfollitemsetid) | smallint | unsigned |  | NO | 0 |  |  |
| [AllianceGarrFollItemSetID](#alliancegarrfollitemsetid) | smallint | unsigned |  | NO | 0 |  |  |
| [HordeUITextureKitID](#hordeuitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [AllianceUITextureKitID](#allianceuitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [Vitality](#vitality) | tinyint | unsigned |  | NO | 0 |  |  |
| [HordeFlavorGarrStringID](#hordeflavorgarrstringid) | tinyint | unsigned |  | NO | 0 |  |  |
| [AllianceFlavorGarrStringID](#allianceflavorgarrstringid) | tinyint | unsigned |  | NO | 0 |  |  |
| [HordeSlottingBroadcastTextID](#hordeslottingbroadcasttextid) | int | unsigned |  | NO | 0 |  |  |
| [AllySlottingBroadcastTextID](#allyslottingbroadcasttextid) | int | unsigned |  | NO | 0 |  |  |
| [ChrClassID](#chrclassid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Gender](#gender) | tinyint | unsigned |  | NO | 0 |  |  |
| [AutoCombatantID](#autocombatantid) | int | signed |  | NO | 0 |  |  |
| [CovenantID](#covenantid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### HordeSourceText
*- no description -*
&nbsp;

### AllianceSourceText
*- no description -*
&nbsp;

### TitleName
*- no description -*
&nbsp;

### GarrTypeID
*- no description -*
&nbsp;

### GarrFollowerTypeID
*- no description -*
&nbsp;

### HordeCreatureID
*- no description -*
&nbsp;

### AllianceCreatureID
*- no description -*
&nbsp;

### HordeGarrFollRaceID
*- no description -*
&nbsp;

### AllianceGarrFollRaceID
*- no description -*
&nbsp;

### HordeGarrClassSpecID
*- no description -*
&nbsp;

### AllianceGarrClassSpecID
*- no description -*
&nbsp;

### Quality
*- no description -*
&nbsp;

### FollowerLevel
*- no description -*
&nbsp;

### ItemLevelWeapon
*- no description -*
&nbsp;

### ItemLevelArmor
*- no description -*
&nbsp;

### HordeSourceTypeEnum
*- no description -*
&nbsp;

### AllianceSourceTypeEnum
*- no description -*
&nbsp;

### HordeIconFileDataID
*- no description -*
&nbsp;

### AllianceIconFileDataID
*- no description -*
&nbsp;

### HordeGarrFollItemSetID
*- no description -*
&nbsp;

### AllianceGarrFollItemSetID
*- no description -*
&nbsp;

### HordeUITextureKitID
*- no description -*
&nbsp;

### AllianceUITextureKitID
*- no description -*
&nbsp;

### Vitality
*- no description -*
&nbsp;

### HordeFlavorGarrStringID
*- no description -*
&nbsp;

### AllianceFlavorGarrStringID
*- no description -*
&nbsp;

### HordeSlottingBroadcastTextID
*- no description -*
&nbsp;

### AllySlottingBroadcastTextID
*- no description -*
&nbsp;

### ChrClassID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Gender
*- no description -*
&nbsp;

### AutoCombatantID
*- no description -*
&nbsp;

### CovenantID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_class_spec_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_class_spec_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_follower_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_follower_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
