---
title: vehicle
description: 
published: true
date: 2023-05-11T09:04:24.417Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:53.783Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/vehicle_seat" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_seat'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [FlagsB](#flagsb) | int | signed |  | NO | 0 |  |  |
| [TurnSpeed](#turnspeed) | float |  |  | NO | 0 |  |  |
| [PitchSpeed](#pitchspeed) | float |  |  | NO | 0 |  |  |
| [PitchMin](#pitchmin) | float |  |  | NO | 0 |  |  |
| [PitchMax](#pitchmax) | float |  |  | NO | 0 |  |  |
| [MouseLookOffsetPitch](#mouselookoffsetpitch) | float |  |  | NO | 0 |  |  |
| [CameraFadeDistScalarMin](#camerafadedistscalarmin) | float |  |  | NO | 0 |  |  |
| [CameraFadeDistScalarMax](#camerafadedistscalarmax) | float |  |  | NO | 0 |  |  |
| [CameraPitchOffset](#camerapitchoffset) | float |  |  | NO | 0 |  |  |
| [FacingLimitRight](#facinglimitright) | float |  |  | NO | 0 |  |  |
| [FacingLimitLeft](#facinglimitleft) | float |  |  | NO | 0 |  |  |
| [CameraYawOffset](#camerayawoffset) | float |  |  | NO | 0 |  |  |
| [VehicleUIIndicatorID](#vehicleuiindicatorid) | smallint | unsigned |  | NO | 0 |  |  |
| [MissileTargetingID](#missiletargetingid) | int | signed |  | NO | 0 |  |  |
| [VehiclePOITypeID](#vehiclepoitypeid) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID1](#seatid1) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID2](#seatid2) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID3](#seatid3) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID4](#seatid4) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID5](#seatid5) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID6](#seatid6) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID7](#seatid7) | smallint | unsigned |  | NO | 0 |  |  |
| [SeatID8](#seatid8) | smallint | unsigned |  | NO | 0 |  |  |
| [PowerDisplayID1](#powerdisplayid1) | smallint | unsigned |  | NO | 0 |  |  |
| [PowerDisplayID2](#powerdisplayid2) | smallint | unsigned |  | NO | 0 |  |  |
| [PowerDisplayID3](#powerdisplayid3) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### FlagsB
*- no description -*
&nbsp;

### TurnSpeed
*- no description -*
&nbsp;

### PitchSpeed
*- no description -*
&nbsp;

### PitchMin
*- no description -*
&nbsp;

### PitchMax
*- no description -*
&nbsp;

### MouseLookOffsetPitch
*- no description -*
&nbsp;

### CameraFadeDistScalarMin
*- no description -*
&nbsp;

### CameraFadeDistScalarMax
*- no description -*
&nbsp;

### CameraPitchOffset
*- no description -*
&nbsp;

### FacingLimitRight
*- no description -*
&nbsp;

### FacingLimitLeft
*- no description -*
&nbsp;

### CameraYawOffset
*- no description -*
&nbsp;

### VehicleUIIndicatorID
*- no description -*
&nbsp;

### MissileTargetingID
*- no description -*
&nbsp;

### VehiclePOITypeID
*- no description -*
&nbsp;

### SeatID1
*- no description -*
&nbsp;

### SeatID2
*- no description -*
&nbsp;

### SeatID3
*- no description -*
&nbsp;

### SeatID4
*- no description -*
&nbsp;

### SeatID5
*- no description -*
&nbsp;

### SeatID6
*- no description -*
&nbsp;

### SeatID7
*- no description -*
&nbsp;

### SeatID8
*- no description -*
&nbsp;

### PowerDisplayID1
*- no description -*
&nbsp;

### PowerDisplayID2
*- no description -*
&nbsp;

### PowerDisplayID3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/vehicle_seat" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_seat'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
