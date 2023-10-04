---
title: Vehicle.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/unitbloodlevels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'UnitBloodLevels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/vehicleseat" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VehicleSeat'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Vehicle.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=vehicle&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Vehicle)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [TurnSpeed](#turnspeed) | float |  |
| 3 | [PitchSpeed](#pitchspeed) | float |  |
| 4 | [PitchMin](#pitchmin) | float |  |
| 5 | [PitchMax](#pitchmax) | float |  |
| 6 | [SeatID_0](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 7 | [SeatID_1](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 8 | [SeatID_2](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 9 | [SeatID_3](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 10 | [SeatID_4](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 11 | [SeatID_5](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 12 | [SeatID_6](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 13 | [SeatID_7](#seatid) | uint32 | [VehicleSeat.dbc/0](/files/DBC/335/vehicleseat#id) |
| 14 | [MouseLookOffsetPitch](#mouselookoffsetpitch) | float |  |
| 15 | [CameraFadeDistScalarMin](#camerafadedistscalarmin) | float |  |
| 16 | [CameraFadeDistScalarMax](#camerafadedistscalarmax) | float |  |
| 17 | [CameraPitchOffset](#camerapitchoffset) | float |  |
| 18 | [FacingLimitRight](#facinglimitright) | float |  |
| 19 | [FacingLimitLeft](#facinglimitleft) | float |  |
| 20 | [MsslTrgtTurnLingering](#mssltrgtturnlingering) | float |  |
| 21 | [MsslTrgtPitchLingering](#mssltrgtpitchlingering) | float |  |
| 22 | [MsslTrgtMouseLingering](#mssltrgtmouselingering) | float |  |
| 23 | [MsslTrgtEndOpacity](#mssltrgtendopacity) | float |  |
| 24 | [MsslTrgtArcSpeed](#mssltrgtarcspeed) | float |  |
| 25 | [MsslTrgtArcRepeat](#mssltrgtarcrepeat) | float |  |
| 26 | [MsslTrgtArcWidth](#mssltrgtarcwidth) | float |  |
| 27 | [MsslTrgtImpactRadius_0](#mssltrgtimpactradius) | float |  |
| 28 | [MsslTrgtImpactRadius_1](#mssltrgtimpactradius) | float |  |
| 29 | [MsslTrgtArcTexture](#mssltrgtarctexture) | string |  |
| 30 | [MsslTrgtImpactTexture](#mssltrgtimpacttexture) | string |  |
| 31 | [MsslTrgtImpactModel_0](#mssltrgtimpactmodel) | string |  |
| 32 | [MsslTrgtImpactModel_1](#mssltrgtimpactmodel) | string |  |
| 33 | [CameraYawOffset](#camerayawoffset) | float |  |
| 34 | [UiLocomotionType](#uilocomotiontype) | uint32 |  |
| 35 | [MsslTrgtImpactTexRadius](#mssltrgtimpacttexradius) | float |  |
| 36 | [VehicleUIIndicatorID](#vehicleuiindicatorid) | uint32 | [VehicleUIIndicator.dbc/0](/files/DBC/335/vehicleuiindicator#id) |
| 37 | [PowerDisplayID_0](#powerdisplayid) | int32 | [PowerDisplay.dbc/0](/files/DBC/335/powerdisplay#id) |
| 38 | [PowerDisplayID_1](#powerdisplayid) | int32 | [PowerDisplay.dbc/0](/files/DBC/335/powerdisplay#id) |
| 39 | [PowerDisplayID_2](#powerdisplayid) | int32 | [PowerDisplay.dbc/0](/files/DBC/335/powerdisplay#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

[`enum VehicleFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Vehicle/VehicleDefines.h#L38-L49)
| Value | Flag   | Name | Comment |
|-------|--------|------|---------|
| 1 | 0x00000001 | VEHICLE_FLAG_NO_STRAFE | Sets MOVEFLAG2_NO_STRAFE |
| 2 | 0x00000002 | VEHICLE_FLAG_NO_JUMPING | Sets MOVEFLAG2_NO_JUMPING |
| 4 | 0x00000004 | VEHICLE_FLAG_FULLSPEEDTURNING | Sets MOVEFLAG2_FULLSPEEDTURNING |
| 16 | 0x00000010 | VEHICLE_FLAG_ALLOW_PITCHING | Sets MOVEFLAG2_ALLOW_PITCHING |
| 32 | 0x00000020 | VEHICLE_FLAG_FULLSPEEDPITCHING | Sets MOVEFLAG2_FULLSPEEDPITCHING |
| 64 | 0x00000040 | VEHICLE_FLAG_CUSTOM_PITCH | If set use pitchMin and pitchMax from DBC, otherwise pitchMin = -pi/2, pitchMax = pi/2 |
| 1024 | 0x00000400 | VEHICLE_FLAG_ADJUST_AIM_ANGLE | Lua_IsVehicleAimAngleAdjustable |
| 2048 | 0x00000800 | VEHICLE_FLAG_ADJUST_AIM_POWER | Lua_IsVehicleAimPowerAdjustable |
| 2097152 | 0x00200000 | VEHICLE_FLAG_FIXED_POSITION | Used for cannons, when they should be rooted |
{.dense}

&nbsp;

### TurnSpeed
<code>Col: 2 (float)</code>

*- no description -*
&nbsp;

### PitchSpeed
<code>Col: 3 (float)</code>

*- no description -*
&nbsp;

### PitchMin
<code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### PitchMax
<code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### SeatID
<code>Col: 6 &ndash; 13 (uint32)</code>

*- no description -*
&nbsp;

### MouseLookOffsetPitch
<code>Col: 14 (float)</code>

*- no description -*
&nbsp;

### CameraFadeDistScalarMin
<code>Col: 15 (float)</code>

*- no description -*
&nbsp;

### CameraFadeDistScalarMax
<code>Col: 16 (float)</code>

*- no description -*
&nbsp;

### CameraPitchOffset
<code>Col: 17 (float)</code>

*- no description -*
&nbsp;

### FacingLimitRight
<code>Col: 18 (float)</code>

*- no description -*
&nbsp;

### FacingLimitLeft
<code>Col: 19 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtTurnLingering
<code>Col: 20 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtPitchLingering
<code>Col: 21 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtMouseLingering
<code>Col: 22 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtEndOpacity
<code>Col: 23 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtArcSpeed
<code>Col: 24 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtArcRepeat
<code>Col: 25 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtArcWidth
<code>Col: 26 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtImpactRadius
<code>Col: 27 &ndash; 28 (float)</code>

*- no description -*
&nbsp;

### MsslTrgtArcTexture
<code>Col: 29 (string)</code>

*- no description -*
&nbsp;

### MsslTrgtImpactTexture
<code>Col: 30 (string)</code>

*- no description -*
&nbsp;

### MsslTrgtImpactModel
<code>Col: 31 &ndash; 32 (string)</code>

*- no description -*
&nbsp;

### CameraYawOffset
<code>Col: 33 (float)</code>

*- no description -*
&nbsp;

### UiLocomotionType
<code>Col: 34 (uint32)</code>

*- no description -*
&nbsp;

### MsslTrgtImpactTexRadius
<code>Col: 35 (float)</code>

*- no description -*
&nbsp;

### VehicleUIIndicatorID
<code>Col: 36 (uint32)</code>

*- no description -*
&nbsp;

### PowerDisplayID
<code>Col: 37 &ndash; 39 (int32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/unitbloodlevels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'UnitBloodLevels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/vehicleseat" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VehicleSeat'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
