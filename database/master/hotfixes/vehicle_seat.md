---
title: vehicle_seat
description: 
published: true
date: 2024-09-05T22:46:08.873Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:56.626Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/vignette" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vignette'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [AttachmentOffsetX](#attachmentoffsetx) | float |  |  | NO | 0 |  |  |
| [AttachmentOffsetY](#attachmentoffsety) | float |  |  | NO | 0 |  |  |
| [AttachmentOffsetZ](#attachmentoffsetz) | float |  |  | NO | 0 |  |  |
| [CameraOffsetX](#cameraoffsetx) | float |  |  | NO | 0 |  |  |
| [CameraOffsetY](#cameraoffsety) | float |  |  | NO | 0 |  |  |
| [CameraOffsetZ](#cameraoffsetz) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [FlagsB](#flagsb) | int | signed |  | NO | 0 |  |  |
| [FlagsC](#flagsc) | int | signed |  | NO | 0 |  |  |
| [AttachmentID](#attachmentid) | int | signed |  | NO | 0 |  |  |
| [EnterPreDelay](#enterpredelay) | float |  |  | NO | 0 |  |  |
| [EnterSpeed](#enterspeed) | float |  |  | NO | 0 |  |  |
| [EnterGravity](#entergravity) | float |  |  | NO | 0 |  |  |
| [EnterMinDuration](#enterminduration) | float |  |  | NO | 0 |  |  |
| [EnterMaxDuration](#entermaxduration) | float |  |  | NO | 0 |  |  |
| [EnterMinArcHeight](#enterminarcheight) | float |  |  | NO | 0 |  |  |
| [EnterMaxArcHeight](#entermaxarcheight) | float |  |  | NO | 0 |  |  |
| [EnterAnimStart](#enteranimstart) | smallint | signed |  | NO | 0 |  |  |
| [EnterAnimLoop](#enteranimloop) | smallint | signed |  | NO | 0 |  |  |
| [RideAnimStart](#rideanimstart) | smallint | signed |  | NO | 0 |  |  |
| [RideAnimLoop](#rideanimloop) | smallint | signed |  | NO | 0 |  |  |
| [RideUpperAnimStart](#rideupperanimstart) | smallint | signed |  | NO | 0 |  |  |
| [RideUpperAnimLoop](#rideupperanimloop) | smallint | signed |  | NO | 0 |  |  |
| [ExitPreDelay](#exitpredelay) | float |  |  | NO | 0 |  |  |
| [ExitSpeed](#exitspeed) | float |  |  | NO | 0 |  |  |
| [ExitGravity](#exitgravity) | float |  |  | NO | 0 |  |  |
| [ExitMinDuration](#exitminduration) | float |  |  | NO | 0 |  |  |
| [ExitMaxDuration](#exitmaxduration) | float |  |  | NO | 0 |  |  |
| [ExitMinArcHeight](#exitminarcheight) | float |  |  | NO | 0 |  |  |
| [ExitMaxArcHeight](#exitmaxarcheight) | float |  |  | NO | 0 |  |  |
| [ExitAnimStart](#exitanimstart) | smallint | signed |  | NO | 0 |  |  |
| [ExitAnimLoop](#exitanimloop) | smallint | signed |  | NO | 0 |  |  |
| [ExitAnimEnd](#exitanimend) | smallint | signed |  | NO | 0 |  |  |
| [VehicleEnterAnim](#vehicleenteranim) | smallint | signed |  | NO | 0 |  |  |
| [VehicleEnterAnimBone](#vehicleenteranimbone) | tinyint | signed |  | NO | 0 |  |  |
| [VehicleExitAnim](#vehicleexitanim) | smallint | signed |  | NO | 0 |  |  |
| [VehicleExitAnimBone](#vehicleexitanimbone) | tinyint | signed |  | NO | 0 |  |  |
| [VehicleRideAnimLoop](#vehiclerideanimloop) | smallint | signed |  | NO | 0 |  |  |
| [VehicleRideAnimLoopBone](#vehiclerideanimloopbone) | tinyint | signed |  | NO | 0 |  |  |
| [PassengerAttachmentID](#passengerattachmentid) | tinyint | signed |  | NO | 0 |  |  |
| [PassengerYaw](#passengeryaw) | float |  |  | NO | 0 |  |  |
| [PassengerPitch](#passengerpitch) | float |  |  | NO | 0 |  |  |
| [PassengerRoll](#passengerroll) | float |  |  | NO | 0 |  |  |
| [VehicleEnterAnimDelay](#vehicleenteranimdelay) | float |  |  | NO | 0 |  |  |
| [VehicleExitAnimDelay](#vehicleexitanimdelay) | float |  |  | NO | 0 |  |  |
| [VehicleAbilityDisplay](#vehicleabilitydisplay) | tinyint | signed |  | NO | 0 |  |  |
| [EnterUISoundID](#enteruisoundid) | int | unsigned |  | NO | 0 |  |  |
| [ExitUISoundID](#exituisoundid) | int | unsigned |  | NO | 0 |  |  |
| [UiSkinFileDataID](#uiskinfiledataid) | int | signed |  | NO | 0 |  |  |
| [CameraEnteringDelay](#cameraenteringdelay) | float |  |  | NO | 0 |  |  |
| [CameraEnteringDuration](#cameraenteringduration) | float |  |  | NO | 0 |  |  |
| [CameraExitingDelay](#cameraexitingdelay) | float |  |  | NO | 0 |  |  |
| [CameraExitingDuration](#cameraexitingduration) | float |  |  | NO | 0 |  |  |
| [CameraPosChaseRate](#cameraposchaserate) | float |  |  | NO | 0 |  |  |
| [CameraFacingChaseRate](#camerafacingchaserate) | float |  |  | NO | 0 |  |  |
| [CameraEnteringZoom](#cameraenteringzoom) | float |  |  | NO | 0 |  |  |
| [CameraSeatZoomMin](#cameraseatzoommin) | float |  |  | NO | 0 |  |  |
| [CameraSeatZoomMax](#cameraseatzoommax) | float |  |  | NO | 0 |  |  |
| [EnterAnimKitID](#enteranimkitid) | smallint | signed |  | NO | 0 |  |  |
| [RideAnimKitID](#rideanimkitid) | smallint | signed |  | NO | 0 |  |  |
| [ExitAnimKitID](#exitanimkitid) | smallint | signed |  | NO | 0 |  |  |
| [VehicleEnterAnimKitID](#vehicleenteranimkitid) | smallint | signed |  | NO | 0 |  |  |
| [VehicleRideAnimKitID](#vehiclerideanimkitid) | smallint | signed |  | NO | 0 |  |  |
| [VehicleExitAnimKitID](#vehicleexitanimkitid) | smallint | signed |  | NO | 0 |  |  |
| [CameraModeID](#cameramodeid) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/vehicle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/vignette" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vignette'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
