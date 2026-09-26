---
title: garr_site_level_plot_inst
description: 
published: true
date: 2022-12-19T18:38:09.007Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:29.420Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [UiMarkerPosX](#uimarkerposx) | float |  |  | NO | 0 |  |  |
| [UiMarkerPosY](#uimarkerposy) | float |  |  | NO | 0 |  |  |
| [GarrSiteLevelID](#garrsitelevelid) | smallint | unsigned |  | NO | 0 |  |  |
| [GarrPlotInstanceID](#garrplotinstanceid) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiMarkerSize](#uimarkersize) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### UiMarkerPosX
*- no description -*
&nbsp;

### UiMarkerPosY
*- no description -*
&nbsp;

### GarrSiteLevelID
*- no description -*
&nbsp;

### GarrPlotInstanceID
*- no description -*
&nbsp;

### UiMarkerSize
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


