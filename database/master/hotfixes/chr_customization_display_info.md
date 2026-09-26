---
title: chr_customization_display_info
description: 
published: true
date: 2024-02-11T20:02:21.374Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:23.366Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ShapeshiftFormID](#shapeshiftformid) | int | signed |  | NO | 0 |  |  |
| [DisplayID](#displayid) | int | signed |  | NO | 0 |  |  |
| [BarberShopMinCameraDistance](#barbershopmincameradistance) | float |  |  | NO | 0 |  |  |
| [BarberShopHeightOffset](#barbershopheightoffset) | float |  |  | NO | 0 |  |  |
| [BarberShopCameraZoomOffset](#barbershopcamerazoomoffset) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ShapeshiftFormID
*- no description -*
&nbsp;

### DisplayID
*- no description -*
&nbsp;

### BarberShopMinCameraDistance
*- no description -*
&nbsp;

### BarberShopHeightOffset
*- no description -*
&nbsp;

### BarberShopCameraZoomOffset
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

