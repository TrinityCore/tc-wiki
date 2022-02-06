---
title: spell_visual_effect_name
description: 
published: true
date: 2022-02-06T18:26:40.989Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_visual_kit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ModelFileDataID](#modelfiledataid) | int | signed |  | NO | 0 |  |  |
| [BaseMissileSpeed](#basemissilespeed) | float |  |  | NO | 0 |  |  |
| [Scale](#scale) | float |  |  | NO | 0 |  |  |
| [MinAllowedScale](#minallowedscale) | float |  |  | NO | 0 |  |  |
| [MaxAllowedScale](#maxallowedscale) | float |  |  | NO | 0 |  |  |
| [Alpha](#alpha) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [TextureFileDataID](#texturefiledataid) | int | signed |  | NO | 0 |  |  |
| [EffectRadius](#effectradius) | float |  |  | NO | 0 |  |  |
| [Type](#type) | int | unsigned |  | NO | 0 |  |  |
| [GenericID](#genericid) | int | signed |  | NO | 0 |  |  |
| [RibbonQualityID](#ribbonqualityid) | int | unsigned |  | NO | 0 |  |  |
| [DissolveEffectID](#dissolveeffectid) | int | signed |  | NO | 0 |  |  |
| [ModelPosition](#modelposition) | int | signed |  | NO | 0 |  |  |
| [Unknown901](#unknown901) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ModelFileDataID
*- no description -*
&nbsp;

### BaseMissileSpeed
*- no description -*
&nbsp;

### Scale
*- no description -*
&nbsp;

### MinAllowedScale
*- no description -*
&nbsp;

### MaxAllowedScale
*- no description -*
&nbsp;

### Alpha
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### TextureFileDataID
*- no description -*
&nbsp;

### EffectRadius
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### GenericID
*- no description -*
&nbsp;

### RibbonQualityID
*- no description -*
&nbsp;

### DissolveEffectID
*- no description -*
&nbsp;

### ModelPosition
*- no description -*
&nbsp;

### Unknown901
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_visual_kit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

