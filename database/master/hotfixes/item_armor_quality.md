---
title: item_armor_quality
description: 
published: true
date: 2022-11-21T21:15:35.262Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:27.717Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Qualitymod1](#qualitymod1) | float |  |  | NO | 0 |  |  |
| [Qualitymod2](#qualitymod2) | float |  |  | NO | 0 |  |  |
| [Qualitymod3](#qualitymod3) | float |  |  | NO | 0 |  |  |
| [Qualitymod4](#qualitymod4) | float |  |  | NO | 0 |  |  |
| [Qualitymod5](#qualitymod5) | float |  |  | NO | 0 |  |  |
| [Qualitymod6](#qualitymod6) | float |  |  | NO | 0 |  |  |
| [Qualitymod7](#qualitymod7) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Qualitymod1
*- no description -*
&nbsp;

### Qualitymod2
*- no description -*
&nbsp;

### Qualitymod3
*- no description -*
&nbsp;

### Qualitymod4
*- no description -*
&nbsp;

### Qualitymod5
*- no description -*
&nbsp;

### Qualitymod6
*- no description -*
&nbsp;

### Qualitymod7
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


