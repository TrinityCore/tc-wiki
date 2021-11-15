---
title: areatrigger_create_properties
description: 
published: true
date: 2021-11-15T16:40:05.757Z
tags: database, master, world
editor: markdown
dateCreated: 2021-11-14T20:12:34.174Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_create_properties_orbit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties_orbit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id) | int(10) | unsigned | PRI | NO |  |  |  |
| [AreaTriggerId](#areatriggerid) | int(10) | unsigned |  | NO |  |  |  |
| [MoveCurveId](#movecurveid) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScaleCurveId](#scalecurveid) | int(10) | unsigned |  | NO | 0 |  |  |
| [MorphCurveId](#morphcurveid) | int(10) | unsigned |  | NO | 0 |  |  |
| [FacingCurveId](#facingcurveid) | int(10) | unsigned |  | NO | 0 |  |  |
| [AnimId](#animid) | int(11) | signed |  | NO | -1 |  |  |
| [AnimKitId](#animkitid) | int(11) | signed |  | NO | 0 |  |  |
| [DecalPropertiesId](#decalpropertiesid) | int(10) | unsigned |  | NO | 0 |  |  |
| [TimeToTarget](#timetotarget) | int(10) | unsigned |  | NO | 0 |  |  |
| [TimeToTargetScale](#timetotargetscale) | int(10) | unsigned |  | NO | 0 |  |  |
| [Shape](#shape) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ShapeData0](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData1](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData2](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData3](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData4](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData5](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id
A unique identifier.
Areatriggers can have multiple creatre_properties.
&nbsp;

### AreaTriggerId
The ID of the [areatrigger_template](/database/master/world/areatrigger_template) that is used when instantiating this areatrigger.
&nbsp;

### MoveCurveId
*- no description -*
&nbsp;

### ScaleCurveId
*- no description -*
&nbsp;

### MorphCurveId
*- no description -*
&nbsp;

### FacingCurveId
*- no description -*
&nbsp;

### AnimId
*- no description -*
&nbsp;

### AnimKitId
*- no description -*
&nbsp;

### DecalPropertiesId
*- no description -*
&nbsp;

### TimeToTarget
*- no description -*
&nbsp;

### TimeToTargetScale
*- no description -*
&nbsp;

### Shape
Shape determines the general design of an areatrigger.

|ID|Name|
|:---:|:---: |
|0|AREATRIGGER_TYPE_SPHERE|
|1|AREATRIGGER_TYPE_BOX|
|2|AREATRIGGER_TYPE_UNK|
|3|AREATRIGGER_TYPE_POLYGON|
|4|AREATRIGGER_TYPE_CYLINDER|
|5|AREATRIGGER_TYPE_MAX|
&nbsp;

### ShapeData0-5
The data changes depending on the Shape.
| |SPHERE|BOX|UNK|POLYGON|POLYGON|
|:---:|:---:|:---:|:---:|:---:|:---:|
|ShapeData0| Radius | ExtentsX | | Height | Radius |
|ShapeData1| RadiusTarget | ExtentsY | | HeightTarget | RadiusTarget |
|ShapeData2| - | ExtentsZ | | - | Height |
|ShapeData3| - | ExtentsTargetX | | - | HeightTarget |
|ShapeData4| - | ExtentsTargetY | | - | LocationZOffset |
|ShapeData5| - | ExtentsTargetZ | | - | LocationZOffsetTarget |
&nbsp;

&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_create_properties_orbit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties_orbit'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

