---
title: heirloom
description: 
published: true
date: 2021-08-30T19:58:43.053Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/guild_perk_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_perk_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'heirloom_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceText](#sourcetext) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ItemID](#itemid) | int(11) | signed |  | NO | 0 |  |  |
| [LegacyUpgradedItemID](#legacyupgradeditemid) | int(11) | signed |  | NO | 0 |  |  |
| [StaticUpgradedItemID](#staticupgradeditemid) | int(11) | signed |  | NO | 0 |  |  |
| [SourceTypeEnum](#sourcetypeenum) | tinyint(4) | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LegacyItemID](#legacyitemid) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeItemID1](#upgradeitemid1) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeItemID2](#upgradeitemid2) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeItemID3](#upgradeitemid3) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeItemID4](#upgradeitemid4) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeItemBonusListID1](#upgradeitembonuslistid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID2](#upgradeitembonuslistid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID3](#upgradeitembonuslistid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID4](#upgradeitembonuslistid4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SourceText
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### ItemID
*- no description -*
&nbsp;

### LegacyUpgradedItemID
*- no description -*
&nbsp;

### StaticUpgradedItemID
*- no description -*
&nbsp;

### SourceTypeEnum
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### LegacyItemID
*- no description -*
&nbsp;

### UpgradeItemID1
*- no description -*
&nbsp;

### UpgradeItemID2
*- no description -*
&nbsp;

### UpgradeItemID3
*- no description -*
&nbsp;

### UpgradeItemID4
*- no description -*
&nbsp;

### UpgradeItemBonusListID1
*- no description -*
&nbsp;

### UpgradeItemBonusListID2
*- no description -*
&nbsp;

### UpgradeItemBonusListID3
*- no description -*
&nbsp;

### UpgradeItemBonusListID4
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/guild_perk_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_perk_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'heirloom_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

