---
title: world_map_overlay
description: 
published: true
date: 2021-11-14T19:41:35.184Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/hotfixes/world_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/world_state_expression" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_state_expression'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [UiMapArtID](#uimapartid) | int(10) | unsigned |  | NO | 0 |  |  |
| [TextureWidth](#texturewidth) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [TextureHeight](#textureheight) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [OffsetX](#offsetx) | int(11) | signed |  | NO | 0 |  |  |
| [OffsetY](#offsety) | int(11) | signed |  | NO | 0 |  |  |
| [HitRectTop](#hitrecttop) | int(11) | signed |  | NO | 0 |  |  |
| [HitRectBottom](#hitrectbottom) | int(11) | signed |  | NO | 0 |  |  |
| [HitRectLeft](#hitrectleft) | int(11) | signed |  | NO | 0 |  |  |
| [HitRectRight](#hitrectright) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaID1](#areaid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaID2](#areaid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaID3](#areaid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [AreaID4](#areaid4) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### UiMapArtID
*- no description -*
&nbsp;

### TextureWidth
*- no description -*
&nbsp;

### TextureHeight
*- no description -*
&nbsp;

### OffsetX
*- no description -*
&nbsp;

### OffsetY
*- no description -*
&nbsp;

### HitRectTop
*- no description -*
&nbsp;

### HitRectBottom
*- no description -*
&nbsp;

### HitRectLeft
*- no description -*
&nbsp;

### HitRectRight
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### AreaID1
*- no description -*
&nbsp;

### AreaID2
*- no description -*
&nbsp;

### AreaID3
*- no description -*
&nbsp;

### AreaID4
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/de/database/master/hotfixes/world_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/hotfixes/world_state_expression" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_state_expression'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

