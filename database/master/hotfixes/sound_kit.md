---
title: sound_kit
description: 
published: true
date: 2022-12-19T18:38:59.118Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:35.915Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SoundType](#soundtype) | int | signed |  | NO | 0 |  |  |
| [VolumeFloat](#volumefloat) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [MinDistance](#mindistance) | float |  |  | NO | 0 |  |  |
| [DistanceCutoff](#distancecutoff) | float |  |  | NO | 0 |  |  |
| [EAXDef](#eaxdef) | tinyint | unsigned |  | NO | 0 |  |  |
| [SoundKitAdvancedID](#soundkitadvancedid) | int | unsigned |  | NO | 0 |  |  |
| [VolumeVariationPlus](#volumevariationplus) | float |  |  | NO | 0 |  |  |
| [VolumeVariationMinus](#volumevariationminus) | float |  |  | NO | 0 |  |  |
| [PitchVariationPlus](#pitchvariationplus) | float |  |  | NO | 0 |  |  |
| [PitchVariationMinus](#pitchvariationminus) | float |  |  | NO | 0 |  |  |
| [DialogType](#dialogtype) | tinyint | signed |  | NO | 0 |  |  |
| [PitchAdjust](#pitchadjust) | float |  |  | NO | 0 |  |  |
| [BusOverwriteID](#busoverwriteid) | smallint | unsigned |  | NO | 0 |  |  |
| [MaxInstances](#maxinstances) | tinyint | unsigned |  | NO | 0 |  |  |
| [SoundMixGroupID](#soundmixgroupid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
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

### SoundMixGroupID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

