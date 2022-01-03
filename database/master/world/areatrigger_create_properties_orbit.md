---
title: areatrigger_create_properties_orbit
description: 
published: true
date: 2022-01-03T11:24:59.078Z
tags: database, master, world
editor: markdown
dateCreated: 2021-11-14T20:12:37.294Z
---

<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_create_properties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties_polygon_vertex" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties_polygon_vertex'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AreaTriggerCreatePropertiesId](#areatriggercreatepropertiesid) | int(10) | unsigned | PRI | NO |  |  |  |
| [StartDelay](#startdelay) | int(10) | unsigned |  | NO | 0 |  |  |
| [CircleRadius](#circleradius) | float |  |  | NO | 0 |  |  |
| [BlendFromRadius](#blendfromradius) | float |  |  | NO | 0 |  |  |
| [InitialAngle](#initialangle) | float |  |  | NO | 0 |  |  |
| [ZOffset](#zoffset) | float |  |  | NO | 0 |  |  |
| [CounterClockwise](#counterclockwise) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CanLoop](#canloop) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### AreaTriggerCreatePropertiesId
The ID of the [areatrigger_create_properties](/database/master/world/areatrigger_create_properties).
&nbsp;

### StartDelay
*- no description -*
&nbsp;

### CircleRadius
*- no description -*
&nbsp;

### BlendFromRadius
*- no description -*
&nbsp;

### InitialAngle
*- no description -*
&nbsp;

### ZOffset
*- no description -*
&nbsp;

### CounterClockwise
*- no description -*
&nbsp;

### CanLoop
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_create_properties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties_polygon_vertex" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties_polygon_vertex'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

