---
title: garr_talent_tree
description: 
published: true
date: 2023-05-11T09:04:22.697Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:38:05.749Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [GarrTypeID](#garrtypeid) | tinyint | signed |  | NO | 0 |  |  |
| [ClassID](#classid) | int | signed |  | NO | 0 |  |  |
| [MaxTiers](#maxtiers) | tinyint | signed |  | NO | 0 |  |  |
| [UiOrder](#uiorder) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [GarrTalentTreeType](#garrtalenttreetype) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [FeatureTypeIndex](#featuretypeindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [FeatureSubtypeIndex](#featuresubtypeindex) | tinyint | signed |  | NO | 0 |  |  |
| [CurrencyID](#currencyid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### GarrTypeID
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### MaxTiers
*- no description -*
&nbsp;

### UiOrder
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### GarrTalentTreeType
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### FeatureTypeIndex
*- no description -*
&nbsp;

### FeatureSubtypeIndex
*- no description -*
&nbsp;

### CurrencyID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

