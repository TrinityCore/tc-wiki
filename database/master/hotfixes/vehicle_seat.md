---
title: vehicle_seat
description: 
published: true
date: 2021-08-30T09:44:29.598Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/wmo_area_table" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'wmo_area_table'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [AttachmentOffsetX](#AttachmentOffsetX) | float |  |  | NO | 0 |  |  |
| [AttachmentOffsetY](#AttachmentOffsetY) | float |  |  | NO | 0 |  |  |
| [AttachmentOffsetZ](#AttachmentOffsetZ) | float |  |  | NO | 0 |  |  |
| [CameraOffsetX](#CameraOffsetX) | float |  |  | NO | 0 |  |  |
| [CameraOffsetY](#CameraOffsetY) | float |  |  | NO | 0 |  |  |
| [CameraOffsetZ](#CameraOffsetZ) | float |  |  | NO | 0 |  |  |
| [Flags](#Flags) | int(11) | signed |  | NO | 0 |  |  |
| [FlagsB](#FlagsB) | int(11) | signed |  | NO | 0 |  |  |
| [FlagsC](#FlagsC) | int(11) | signed |  | NO | 0 |  |  |
| [AttachmentID](#AttachmentID) | tinyint(4) | signed |  | NO | 0 |  |  |
| [EnterPreDelay](#EnterPreDelay) | float |  |  | NO | 0 |  |  |
| [EnterSpeed](#EnterSpeed) | float |  |  | NO | 0 |  |  |
| [EnterGravity](#EnterGravity) | float |  |  | NO | 0 |  |  |
| [EnterMinDuration](#EnterMinDuration) | float |  |  | NO | 0 |  |  |
| [EnterMaxDuration](#EnterMaxDuration) | float |  |  | NO | 0 |  |  |
| [EnterMinArcHeight](#EnterMinArcHeight) | float |  |  | NO | 0 |  |  |
| [EnterMaxArcHeight](#EnterMaxArcHeight) | float |  |  | NO | 0 |  |  |
| [EnterAnimStart](#EnterAnimStart) | int(11) | signed |  | NO | 0 |  |  |
| [EnterAnimLoop](#EnterAnimLoop) | int(11) | signed |  | NO | 0 |  |  |
| [RideAnimStart](#RideAnimStart) | int(11) | signed |  | NO | 0 |  |  |
| [RideAnimLoop](#RideAnimLoop) | int(11) | signed |  | NO | 0 |  |  |
| [RideUpperAnimStart](#RideUpperAnimStart) | int(11) | signed |  | NO | 0 |  |  |
| [RideUpperAnimLoop](#RideUpperAnimLoop) | int(11) | signed |  | NO | 0 |  |  |
| [ExitPreDelay](#ExitPreDelay) | float |  |  | NO | 0 |  |  |
| [ExitSpeed](#ExitSpeed) | float |  |  | NO | 0 |  |  |
| [ExitGravity](#ExitGravity) | float |  |  | NO | 0 |  |  |
| [ExitMinDuration](#ExitMinDuration) | float |  |  | NO | 0 |  |  |
| [ExitMaxDuration](#ExitMaxDuration) | float |  |  | NO | 0 |  |  |
| [ExitMinArcHeight](#ExitMinArcHeight) | float |  |  | NO | 0 |  |  |
| [ExitMaxArcHeight](#ExitMaxArcHeight) | float |  |  | NO | 0 |  |  |
| [ExitAnimStart](#ExitAnimStart) | int(11) | signed |  | NO | 0 |  |  |
| [ExitAnimLoop](#ExitAnimLoop) | int(11) | signed |  | NO | 0 |  |  |
| [ExitAnimEnd](#ExitAnimEnd) | int(11) | signed |  | NO | 0 |  |  |
| [VehicleEnterAnim](#VehicleEnterAnim) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleEnterAnimBone](#VehicleEnterAnimBone) | tinyint(4) | signed |  | NO | 0 |  |  |
| [VehicleExitAnim](#VehicleExitAnim) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleExitAnimBone](#VehicleExitAnimBone) | tinyint(4) | signed |  | NO | 0 |  |  |
| [VehicleRideAnimLoop](#VehicleRideAnimLoop) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleRideAnimLoopBone](#VehicleRideAnimLoopBone) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PassengerAttachmentID](#PassengerAttachmentID) | tinyint(4) | signed |  | NO | 0 |  |  |
| [PassengerYaw](#PassengerYaw) | float |  |  | NO | 0 |  |  |
| [PassengerPitch](#PassengerPitch) | float |  |  | NO | 0 |  |  |
| [PassengerRoll](#PassengerRoll) | float |  |  | NO | 0 |  |  |
| [VehicleEnterAnimDelay](#VehicleEnterAnimDelay) | float |  |  | NO | 0 |  |  |
| [VehicleExitAnimDelay](#VehicleExitAnimDelay) | float |  |  | NO | 0 |  |  |
| [VehicleAbilityDisplay](#VehicleAbilityDisplay) | tinyint(4) | signed |  | NO | 0 |  |  |
| [EnterUISoundID](#EnterUISoundID) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExitUISoundID](#ExitUISoundID) | int(10) | unsigned |  | NO | 0 |  |  |
| [UiSkinFileDataID](#UiSkinFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [CameraEnteringDelay](#CameraEnteringDelay) | float |  |  | NO | 0 |  |  |
| [CameraEnteringDuration](#CameraEnteringDuration) | float |  |  | NO | 0 |  |  |
| [CameraExitingDelay](#CameraExitingDelay) | float |  |  | NO | 0 |  |  |
| [CameraExitingDuration](#CameraExitingDuration) | float |  |  | NO | 0 |  |  |
| [CameraPosChaseRate](#CameraPosChaseRate) | float |  |  | NO | 0 |  |  |
| [CameraFacingChaseRate](#CameraFacingChaseRate) | float |  |  | NO | 0 |  |  |
| [CameraEnteringZoom](#CameraEnteringZoom) | float |  |  | NO | 0 |  |  |
| [CameraSeatZoomMin](#CameraSeatZoomMin) | float |  |  | NO | 0 |  |  |
| [CameraSeatZoomMax](#CameraSeatZoomMax) | float |  |  | NO | 0 |  |  |
| [EnterAnimKitID](#EnterAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [RideAnimKitID](#RideAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [ExitAnimKitID](#ExitAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleEnterAnimKitID](#VehicleEnterAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleRideAnimKitID](#VehicleRideAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [VehicleExitAnimKitID](#VehicleExitAnimKitID) | smallint(6) | signed |  | NO | 0 |  |  |
| [CameraModeID](#CameraModeID) | smallint(6) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### AttachmentOffsetX
*- no description -*
&nbsp;

### AttachmentOffsetY
*- no description -*
&nbsp;

### AttachmentOffsetZ
*- no description -*
&nbsp;

### CameraOffsetX
*- no description -*
&nbsp;

### CameraOffsetY
*- no description -*
&nbsp;

### CameraOffsetZ
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### FlagsB
*- no description -*
&nbsp;

### FlagsC
*- no description -*
&nbsp;

### AttachmentID
*- no description -*
&nbsp;

### EnterPreDelay
*- no description -*
&nbsp;

### EnterSpeed
*- no description -*
&nbsp;

### EnterGravity
*- no description -*
&nbsp;

### EnterMinDuration
*- no description -*
&nbsp;

### EnterMaxDuration
*- no description -*
&nbsp;

### EnterMinArcHeight
*- no description -*
&nbsp;

### EnterMaxArcHeight
*- no description -*
&nbsp;

### EnterAnimStart
*- no description -*
&nbsp;

### EnterAnimLoop
*- no description -*
&nbsp;

### RideAnimStart
*- no description -*
&nbsp;

### RideAnimLoop
*- no description -*
&nbsp;

### RideUpperAnimStart
*- no description -*
&nbsp;

### RideUpperAnimLoop
*- no description -*
&nbsp;

### ExitPreDelay
*- no description -*
&nbsp;

### ExitSpeed
*- no description -*
&nbsp;

### ExitGravity
*- no description -*
&nbsp;

### ExitMinDuration
*- no description -*
&nbsp;

### ExitMaxDuration
*- no description -*
&nbsp;

### ExitMinArcHeight
*- no description -*
&nbsp;

### ExitMaxArcHeight
*- no description -*
&nbsp;

### ExitAnimStart
*- no description -*
&nbsp;

### ExitAnimLoop
*- no description -*
&nbsp;

### ExitAnimEnd
*- no description -*
&nbsp;

### VehicleEnterAnim
*- no description -*
&nbsp;

### VehicleEnterAnimBone
*- no description -*
&nbsp;

### VehicleExitAnim
*- no description -*
&nbsp;

### VehicleExitAnimBone
*- no description -*
&nbsp;

### VehicleRideAnimLoop
*- no description -*
&nbsp;

### VehicleRideAnimLoopBone
*- no description -*
&nbsp;

### PassengerAttachmentID
*- no description -*
&nbsp;

### PassengerYaw
*- no description -*
&nbsp;

### PassengerPitch
*- no description -*
&nbsp;

### PassengerRoll
*- no description -*
&nbsp;

### VehicleEnterAnimDelay
*- no description -*
&nbsp;

### VehicleExitAnimDelay
*- no description -*
&nbsp;

### VehicleAbilityDisplay
*- no description -*
&nbsp;

### EnterUISoundID
*- no description -*
&nbsp;

### ExitUISoundID
*- no description -*
&nbsp;

### UiSkinFileDataID
*- no description -*
&nbsp;

### CameraEnteringDelay
*- no description -*
&nbsp;

### CameraEnteringDuration
*- no description -*
&nbsp;

### CameraExitingDelay
*- no description -*
&nbsp;

### CameraExitingDuration
*- no description -*
&nbsp;

### CameraPosChaseRate
*- no description -*
&nbsp;

### CameraFacingChaseRate
*- no description -*
&nbsp;

### CameraEnteringZoom
*- no description -*
&nbsp;

### CameraSeatZoomMin
*- no description -*
&nbsp;

### CameraSeatZoomMax
*- no description -*
&nbsp;

### EnterAnimKitID
*- no description -*
&nbsp;

### RideAnimKitID
*- no description -*
&nbsp;

### ExitAnimKitID
*- no description -*
&nbsp;

### VehicleEnterAnimKitID
*- no description -*
&nbsp;

### VehicleRideAnimKitID
*- no description -*
&nbsp;

### VehicleExitAnimKitID
*- no description -*
&nbsp;

### CameraModeID
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/wmo_area_table" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'wmo_area_table'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

