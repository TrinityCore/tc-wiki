---
title: VehicleSeat.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/vehicleuiindicator" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VehicleUIIndicator'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# VehicleSeat.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=vehicleseat&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/VehicleSeat)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [AttachmentID](#attachmentid) | int32 |  |
| 3 | [AttachmentOffset_X](#attachmentoffset) | float |  |
| 4 | [AttachmentOffset_Y](#attachmentoffset) | float |  |
| 5 | [AttachmentOffset_Z](#attachmentoffset) | float |  |
| 6 | [EnterPreDelay](#enterpredelay) | float |  |
| 7 | [EnterSpeed](#enterspeed) | float |  |
| 8 | [EnterGravity](#entergravity) | float |  |
| 9 | [EnterMinDuration](#enterminduration) | float |  |
| 10 | [EnterMaxDuration](#entermaxduration) | float |  |
| 11 | [EnterMinArcHeight](#enterminarcheight) | float |  |
| 12 | [EnterMaxArcHeight](#entermaxarcheight) | float |  |
| 13 | [EnterAnimStart](#enteranimstart) | int32 |  |
| 14 | [EnterAnimLoop](#enteranimloop) | int32 |  |
| 15 | [RideAnimStart](#rideanimstart) | int32 |  |
| 16 | [RideAnimLoop](#rideanimloop) | int32 |  |
| 17 | [RideUpperAnimStart](#rideupperanimstart) | int32 |  |
| 18 | [RideUpperAnimLoop](#rideupperanimloop) | int32 |  |
| 19 | [ExitPreDelay](#exitpredelay) | float |  |
| 20 | [ExitSpeed](#exitspeed) | float |  |
| 21 | [ExitGravity](#exitgravity) | float |  |
| 22 | [ExitMinDuration](#exitminduration) | float |  |
| 23 | [ExitMaxDuration](#exitmaxduration) | float |  |
| 24 | [ExitMinArcHeight](#exitminarcheight) | float |  |
| 25 | [ExitMaxArcHeight](#exitmaxarcheight) | float |  |
| 26 | [ExitAnimStart](#exitanimstart) | int32 |  |
| 27 | [ExitAnimLoop](#exitanimloop) | int32 |  |
| 28 | [ExitAnimEnd](#exitanimend) | int32 |  |
| 29 | [PassengerYaw](#passengeryaw) | float |  |
| 30 | [PassengerPitch](#passengerpitch) | float |  |
| 31 | [PassengerRoll](#passengerroll) | float |  |
| 32 | [PassengerAttachmentID](#passengerattachmentid) | int32 |  |
| 33 | [VehicleEnterAnim](#vehicleenteranim) | int32 |  |
| 34 | [VehicleExitAnim](#vehicleexitanim) | int32 |  |
| 35 | [VehicleRideAnimLoop](#vehiclerideanimloop) | int32 |  |
| 36 | [VehicleEnterAnimBone](#vehicleenteranimbone) | int32 |  |
| 37 | [VehicleExitAnimBone](#vehicleexitanimbone) | int32 |  |
| 38 | [VehicleRideAnimLoopBone](#vehiclerideanimloopbone) | int32 |  |
| 39 | [VehicleEnterAnimDelay](#vehicleenteranimdelay) | float |  |
| 40 | [VehicleExitAnimDelay](#vehicleexitanimdelay) | float |  |
| 41 | [VehicleAbilityDisplay](#vehicleabilitydisplay) | uint32 |  |
| 42 | [EnterUISoundID](#enteruisoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 43 | [ExitUISoundID](#exituisoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 44 | [UiSkin](#uiskin) | int32 |  |
| 45 | [FlagsB](#flagsb) | uint32 |  |
| 46 | [CameraEnteringDelay](#cameraenteringdelay) | float |  |
| 47 | [CameraEnteringDuration](#cameraenteringduration) | float |  |
| 48 | [CameraExitingDelay](#cameraexitingdelay) | float |  |
| 49 | [CameraExitingDuration](#cameraexitingduration) | float |  |
| 50 | [CameraOffset_X](#cameraoffset) | float |  |
| 51 | [CameraOffset_Y](#cameraoffset) | float |  |
| 52 | [CameraOffset_Z](#cameraoffset) | float |  |
| 53 | [CameraPosChaseRate](#cameraposchaserate) | float |  |
| 54 | [CameraFacingChaseRate](#camerafacingchaserate) | float |  |
| 55 | [CameraEnteringZoom](#cameraenteringzoom) | float |  |
| 56 | [CameraSeatZoomMin](#cameraseatzoommin) | float |  |
| 57 | [CameraSeatZoomMax](#cameraseatzoommax) | float |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

[`enum VehicleSeatFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L450-L484)
| Value | Flag   | Name | Comment |
|-------|--------|------|---------|
| 1 | 0x00000001 | VEHICLE_SEAT_FLAG_HAS_LOWER_ANIM_FOR_ENTER |  |
| 2 | 0x00000002 | VEHICLE_SEAT_FLAG_HAS_LOWER_ANIM_FOR_RIDE |  |
| 8 | 0x00000008 | VEHICLE_SEAT_FLAG_SHOULD_USE_VEH_SEAT_EXIT_ANIM_ON_VOLUNTARY_EXIT |  |
| 512 | 0x00000200 | VEHICLE_SEAT_FLAG_HIDE_PASSENGER | Passenger is hidden |
| 1024 | 0x00000400 | VEHICLE_SEAT_FLAG_ALLOW_TURNING | needed for CGCamera__SyncFreeLookFacing |
| 2048 | 0x00000800 | VEHICLE_SEAT_FLAG_CAN_CONTROL | Lua_UnitInVehicleControlSeat |
| 4096 | 0x00001000 | VEHICLE_SEAT_FLAG_CAN_CAST_MOUNT_SPELL | Can cast spells with SPELL_AURA_MOUNTED from seat (possibly 4.x only, 0 seats on 3.3.5a) |
| 8192 | 0x00002000 | VEHICLE_SEAT_FLAG_UNCONTROLLED | can override !& VEHICLE_SEAT_FLAG_CAN_ENTER_OR_EXIT |
| 16384 | 0x00004000 | VEHICLE_SEAT_FLAG_CAN_ATTACK | Can attack, cast spells and use items from vehicle |
| 32768 | 0x00008000 | VEHICLE_SEAT_FLAG_SHOULD_USE_VEH_SEAT_EXIT_ANIM_ON_FORCED_EXIT |  |
| 131072 | 0x00020000 | VEHICLE_SEAT_FLAG_UNK18 | Needs research and support (28 vehicles): Allow entering vehicles while keeping specific permanent(?) auras that impose visuals (states like beeing under freeze/stun mechanic, emote state animations). |
| 262144 | 0x00040000 | VEHICLE_SEAT_FLAG_HAS_VEH_EXIT_ANIM_VOLUNTARY_EXIT |  |
| 524288 | 0x00080000 | VEHICLE_SEAT_FLAG_HAS_VEH_EXIT_ANIM_FORCED_EXIT |  |
| 1048576 | 0x00100000 | VEHICLE_SEAT_FLAG_PASSENGER_NOT_SELECTABLE |  |
| 4194304 | 0x00400000 | VEHICLE_SEAT_FLAG_REC_HAS_VEHICLE_ENTER_ANIM |  |
| 8388608 | 0x00800000 | VEHICLE_SEAT_FLAG_IS_USING_VEHICLE_CONTROLS | Lua_IsUsingVehicleControls |
| 16777216 | 0x01000000 | VEHICLE_SEAT_FLAG_ENABLE_VEHICLE_ZOOM |  |
| 33554432 | 0x02000000 | VEHICLE_SEAT_FLAG_CAN_ENTER_OR_EXIT | Lua_CanExitVehicle - can enter and exit at free will |
| 67108864 | 0x04000000 | VEHICLE_SEAT_FLAG_CAN_SWITCH | Lua_CanSwitchVehicleSeats |
| 134217728 | 0x08000000 | VEHICLE_SEAT_FLAG_HAS_START_WARITING_FOR_VEH_TRANSITION_ANIM_ENTER |  |
| 268435456 | 0x10000000 | VEHICLE_SEAT_FLAG_HAS_START_WARITING_FOR_VEH_TRANSITION_ANIM_EXIT |  |
| 536870912 | 0x20000000 | VEHICLE_SEAT_FLAG_CAN_CAST | Lua_UnitHasVehicleUI |
| 1073741824 | 0x40000000 | VEHICLE_SEAT_FLAG_UNK2 | checked in conjunction with 0x800 in CastSpell2 |
| 2147483648 | 0x80000000 | VEHICLE_SEAT_FLAG_ALLOWS_INTERACTION |  |
{.dense}

&nbsp;

### AttachmentID
<code>Col: 2 (int32)</code>

*- no description -*
&nbsp;

### AttachmentOffset
<code>Col: 3 &ndash; 5 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### EnterPreDelay
<code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### EnterSpeed
<code>Col: 7 (float)</code>

*- no description -*
&nbsp;

### EnterGravity
<code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### EnterMinDuration
<code>Col: 9 (float)</code>

*- no description -*
&nbsp;

### EnterMaxDuration
<code>Col: 10 (float)</code>

*- no description -*
&nbsp;

### EnterMinArcHeight
<code>Col: 11 (float)</code>

*- no description -*
&nbsp;

### EnterMaxArcHeight
<code>Col: 12 (float)</code>

*- no description -*
&nbsp;

### EnterAnimStart
<code>Col: 13 (int32)</code>

*- no description -*
&nbsp;

### EnterAnimLoop
<code>Col: 14 (int32)</code>

*- no description -*
&nbsp;

### RideAnimStart
<code>Col: 15 (int32)</code>

*- no description -*
&nbsp;

### RideAnimLoop
<code>Col: 16 (int32)</code>

*- no description -*
&nbsp;

### RideUpperAnimStart
<code>Col: 17 (int32)</code>

*- no description -*
&nbsp;

### RideUpperAnimLoop
<code>Col: 18 (int32)</code>

*- no description -*
&nbsp;

### ExitPreDelay
<code>Col: 19 (float)</code>

*- no description -*
&nbsp;

### ExitSpeed
<code>Col: 20 (float)</code>

*- no description -*
&nbsp;

### ExitGravity
<code>Col: 21 (float)</code>

*- no description -*
&nbsp;

### ExitMinDuration
<code>Col: 22 (float)</code>

*- no description -*
&nbsp;

### ExitMaxDuration
<code>Col: 23 (float)</code>

*- no description -*
&nbsp;

### ExitMinArcHeight
<code>Col: 24 (float)</code>

*- no description -*
&nbsp;

### ExitMaxArcHeight
<code>Col: 25 (float)</code>

*- no description -*
&nbsp;

### ExitAnimStart
<code>Col: 26 (int32)</code>

*- no description -*
&nbsp;

### ExitAnimLoop
<code>Col: 27 (int32)</code>

*- no description -*
&nbsp;

### ExitAnimEnd
<code>Col: 28 (int32)</code>

*- no description -*
&nbsp;

### PassengerYaw
<code>Col: 29 (float)</code>

*- no description -*
&nbsp;

### PassengerPitch
<code>Col: 30 (float)</code>

*- no description -*
&nbsp;

### PassengerRoll
<code>Col: 31 (float)</code>

*- no description -*
&nbsp;

### PassengerAttachmentID
<code>Col: 32 (int32)</code>

*- no description -*
&nbsp;

### VehicleEnterAnim
<code>Col: 33 (int32)</code>

*- no description -*
&nbsp;

### VehicleExitAnim
<code>Col: 34 (int32)</code>

*- no description -*
&nbsp;

### VehicleRideAnimLoop
<code>Col: 35 (int32)</code>

*- no description -*
&nbsp;

### VehicleEnterAnimBone
<code>Col: 36 (int32)</code>

*- no description -*
&nbsp;

### VehicleExitAnimBone
<code>Col: 37 (int32)</code>

*- no description -*
&nbsp;

### VehicleRideAnimLoopBone
<code>Col: 38 (int32)</code>

*- no description -*
&nbsp;

### VehicleEnterAnimDelay
<code>Col: 39 (float)</code>

*- no description -*
&nbsp;

### VehicleExitAnimDelay
<code>Col: 40 (float)</code>

*- no description -*
&nbsp;

### VehicleAbilityDisplay
<code>Col: 41 (uint32)</code>

*- no description -*
&nbsp;

### EnterUISoundID
<code>Col: 42 (uint32)</code>

*- no description -*
&nbsp;

### ExitUISoundID
<code>Col: 43 (uint32)</code>

*- no description -*
&nbsp;

### UiSkin
<code>Col: 44 (int32)</code>

*- no description -*
&nbsp;

### FlagsB
<code>Col: 45 (uint32)</code>

[`enum VehicleSeatFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L486-L498)
| Value | Flag   | Name | Comment |
|-------|--------|------|---------|
| 2 | 0x00000002 | VEHICLE_SEAT_FLAG_B_USABLE_FORCED |  |
| 8 | 0x00000008 | VEHICLE_SEAT_FLAG_B_TARGETS_IN_RAIDUI | Lua_UnitTargetsVehicleInRaidUI |
| 32 | 0x00000020 | VEHICLE_SEAT_FLAG_B_EJECTABLE | ejectable |
| 64 | 0x00000040 | VEHICLE_SEAT_FLAG_B_USABLE_FORCED_2 |  |
| 256 | 0x00000100 | VEHICLE_SEAT_FLAG_B_USABLE_FORCED_3 |  |
| 131072 | 0x00020000 | VEHICLE_SEAT_FLAG_B_KEEP_PET |  |
| 33554432 | 0x02000000 | VEHICLE_SEAT_FLAG_B_USABLE_FORCED_4 |  |
| 67108864 | 0x04000000 | VEHICLE_SEAT_FLAG_B_CAN_SWITCH |  |
| 2147483648 | 0x80000000 | VEHICLE_SEAT_FLAG_B_VEHICLE_PLAYERFRAME_UI | Lua_UnitHasVehiclePlayerFrameUI - actually checked for flagsb &~ 0x80000000 |
{.dense}

&nbsp;

### CameraEnteringDelay
:x: <code>Col: 46 (float)</code>

*- no description -*
&nbsp;

### CameraEnteringDuration
:x: <code>Col: 47 (float)</code>

*- no description -*
&nbsp;

### CameraExitingDelay
:x: <code>Col: 48 (float)</code>

*- no description -*
&nbsp;

### CameraExitingDuration
:x: <code>Col: 49 (float)</code>

*- no description -*
&nbsp;

### CameraOffset
:x: <code>Col: 50 &ndash; 52 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### CameraPosChaseRate
:x: <code>Col: 53 (float)</code>

*- no description -*
&nbsp;

### CameraFacingChaseRate
:x: <code>Col: 54 (float)</code>

*- no description -*
&nbsp;

### CameraEnteringZoom
:x: <code>Col: 55 (float)</code>

*- no description -*
&nbsp;

### CameraSeatZoomMin
:x: <code>Col: 56 (float)</code>

*- no description -*
&nbsp;

### CameraSeatZoomMax
:x: <code>Col: 57 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/vehicleuiindicator" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'VehicleUIIndicator'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
