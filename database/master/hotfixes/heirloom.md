---
title: heirloom
description: 
published: true
date: 2022-11-21T21:15:11.368Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:55.514Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceText](#sourcetext) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemID](#itemid) | int | signed |  | NO | 0 |  |  |
| [LegacyUpgradedItemID](#legacyupgradeditemid) | int | signed |  | NO | 0 |  |  |
| [StaticUpgradedItemID](#staticupgradeditemid) | int | signed |  | NO | 0 |  |  |
| [SourceTypeEnum](#sourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [LegacyItemID](#legacyitemid) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID1](#upgradeitemid1) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID2](#upgradeitemid2) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID3](#upgradeitemid3) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID4](#upgradeitemid4) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID5](#upgradeitemid5) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemID6](#upgradeitemid6) | int | signed |  | NO | 0 |  |  |
| [UpgradeItemBonusListID1](#upgradeitembonuslistid1) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID2](#upgradeitembonuslistid2) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID3](#upgradeitembonuslistid3) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID4](#upgradeitembonuslistid4) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID5](#upgradeitembonuslistid5) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeItemBonusListID6](#upgradeitembonuslistid6) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### SourceText
*- no description -*
&nbsp;

### ID {#id-alt}
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

### UpgradeItemID5
*- no description -*
&nbsp;

### UpgradeItemID6
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

### UpgradeItemBonusListID5
*- no description -*
&nbsp;

### UpgradeItemBonusListID6
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


