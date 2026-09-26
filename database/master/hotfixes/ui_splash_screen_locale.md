---
title: ui_splash_screen_locale
description: 
published: true
date: 2022-11-21T21:33:04.269Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T20:02:03.877Z
---

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

### ID {#id-alt}
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

