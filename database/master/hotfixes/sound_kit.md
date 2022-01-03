---
title: sound_kit
description: 
published: true
date: 2022-01-03T11:26:23.208Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/soulbind_conduit_rank" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'soulbind_conduit_rank'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spec_set_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spec_set_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [SoundType](#soundtype) | int(11) | signed |  | NO | 0 |  |  |
| [VolumeFloat](#volumefloat) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinDistance](#mindistance) | float |  |  | NO | 0 |  |  |
| [DistanceCutoff](#distancecutoff) | float |  |  | NO | 0 |  |  |
| [EAXDef](#eaxdef) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SoundKitAdvancedID](#soundkitadvancedid) | int(10) | unsigned |  | NO | 0 |  |  |
| [VolumeVariationPlus](#volumevariationplus) | float |  |  | NO | 0 |  |  |
| [VolumeVariationMinus](#volumevariationminus) | float |  |  | NO | 0 |  |  |
| [PitchVariationPlus](#pitchvariationplus) | float |  |  | NO | 0 |  |  |
| [PitchVariationMinus](#pitchvariationminus) | float |  |  | NO | 0 |  |  |
| [DialogType](#dialogtype) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PitchAdjust](#pitchadjust) | float |  |  | NO | 0 |  |  |
| [BusOverwriteID](#busoverwriteid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxInstances](#maxinstances) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### SoundType
*- no description -*
&nbsp;

### VolumeFloat
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### MinDistance
*- no description -*
&nbsp;

### DistanceCutoff
*- no description -*
&nbsp;

### EAXDef
*- no description -*
&nbsp;

### SoundKitAdvancedID
*- no description -*
&nbsp;

### VolumeVariationPlus
*- no description -*
&nbsp;

### VolumeVariationMinus
*- no description -*
&nbsp;

### PitchVariationPlus
*- no description -*
&nbsp;

### PitchVariationMinus
*- no description -*
&nbsp;

### DialogType
*- no description -*
&nbsp;

### PitchAdjust
*- no description -*
&nbsp;

### BusOverwriteID
*- no description -*
&nbsp;

### MaxInstances
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/soulbind_conduit_rank" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'soulbind_conduit_rank'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spec_set_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spec_set_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

