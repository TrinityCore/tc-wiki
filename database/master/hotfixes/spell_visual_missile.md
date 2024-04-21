---
title: spell_visual_missile
description: 
published: true
date: 2022-11-21T22:45:47.383Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-12-15T19:38:58.870Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual_kit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_x_spell_visual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_x_spell_visual'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CastOffset1](#castoffset1) | float |  |  | NO | 0 |  |  |
| [CastOffset2](#castoffset2) | float |  |  | NO | 0 |  |  |
| [CastOffset3](#castoffset3) | float |  |  | NO | 0 |  |  |
| [ImpactOffset1](#impactoffset1) | float |  |  | NO | 0 |  |  |
| [ImpactOffset2](#impactoffset2) | float |  |  | NO | 0 |  |  |
| [ImpactOffset3](#impactoffset3) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellVisualEffectNameID](#spellvisualeffectnameid) | smallint | unsigned |  | NO | 0 |  |  |
| [SoundEntriesID](#soundentriesid) | int | unsigned |  | NO | 0 |  |  |
| [Attachment](#attachment) | tinyint | signed |  | NO | 0 |  |  |
| [DestinationAttachment](#destinationattachment) | tinyint | signed |  | NO | 0 |  |  |
| [CastPositionerID](#castpositionerid) | smallint | unsigned |  | NO | 0 |  |  |
| [ImpactPositionerID](#impactpositionerid) | smallint | unsigned |  | NO | 0 |  |  |
| [FollowGroundHeight](#followgroundheight) | int | signed |  | NO | 0 |  |  |
| [FollowGroundDropSpeed](#followgrounddropspeed) | int | unsigned |  | NO | 0 |  |  |
| [FollowGroundApproach](#followgroundapproach) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [SpellMissileMotionID](#spellmissilemotionid) | smallint | unsigned |  | NO | 0 |  |  |
| [AnimKitID](#animkitid) | int | unsigned |  | NO | 0 |  |  |
| [ClutterLevel](#clutterlevel) | tinyint | signed |  | NO | 0 |  |  |
| [DecayTimeAfterImpact](#decaytimeafterimpact) | int | signed |  | NO | 0 |  |  |
| [SpellVisualMissileSetID](#spellvisualmissilesetid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### CastOffset1
*- no description -*
&nbsp;

### CastOffset2
*- no description -*
&nbsp;

### CastOffset3
*- no description -*
&nbsp;

### ImpactOffset1
*- no description -*
&nbsp;

### ImpactOffset2
*- no description -*
&nbsp;

### ImpactOffset3
*- no description -*
&nbsp;

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### SpellVisualEffectNameID
*- no description -*
&nbsp;

### SoundEntriesID
*- no description -*
&nbsp;

### Attachment
*- no description -*
&nbsp;

### DestinationAttachment
*- no description -*
&nbsp;

### CastPositionerID
*- no description -*
&nbsp;

### ImpactPositionerID
*- no description -*
&nbsp;

### FollowGroundHeight
*- no description -*
&nbsp;

### FollowGroundDropSpeed
*- no description -*
&nbsp;

### FollowGroundApproach
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellMissileMotionID
*- no description -*
&nbsp;

### AnimKitID
*- no description -*
&nbsp;

### ClutterLevel
*- no description -*
&nbsp;

### DecayTimeAfterImpact
*- no description -*
&nbsp;

### SpellVisualMissileSetID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/spell_visual_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_visual_kit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_x_spell_visual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_x_spell_visual'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

