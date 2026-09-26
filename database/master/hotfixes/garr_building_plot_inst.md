---
title: garr_building_plot_inst
description: 
published: true
date: 2022-11-21T21:14:31.266Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:02.947Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MapOffsetX](#mapoffsetx) | float |  |  | NO | 0 |  |  |
| [MapOffsetY](#mapoffsety) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [GarrBuildingID](#garrbuildingid) | tinyint | unsigned |  | NO | 0 |  |  |
| [GarrSiteLevelPlotInstID](#garrsitelevelplotinstid) | smallint | unsigned |  | NO | 0 |  |  |
| [UiTextureAtlasMemberID](#uitextureatlasmemberid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### MapOffsetX
*- no description -*
&nbsp;

### MapOffsetY
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### GarrBuildingID
*- no description -*
&nbsp;

### GarrSiteLevelPlotInstID
*- no description -*
&nbsp;

### UiTextureAtlasMemberID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


