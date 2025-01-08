---
title: spawn_tracking_template
description: 
published: true
date: 2025-01-08T23:33:01.586Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T23:21:39.303Z
---

<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_tracking_state'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnTrackingId](#spawntrackingid) | int | unsigned | PRI | NO |  |  |  |
| [MapId](#mapid) | smallint | unsigned | | NO | 0 |  |  |
| [PhaseId](#phaseid) | int | signed | PRI | NO | 0 |  |  |
| [PhaseGroup](#phasegroup) | int | signed |  | NO | 0 |  |  |
| [PhaseUseFlags](#phaseuseflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SpawnTrackingId
SpawnTracking's unique id.
&nbsp;

### MapId
Determines to which Map the SpawnTracking is linked.
&nbsp;

### PhaseId
Determines to which Phase the SpawnTracking is linked.
&nbsp;

### PhaseGroup
Determines to which PhaseGroup the SpawnTracking is linked.
&nbsp;

### PhaseUseFlags
Mask

| Name | Value |
| --- | :---: |
| PHASE_USE_FLAGS_NONE            | 0x0 |
| PHASE_USE_FLAGS_ALWAYS_VISIBLE  | 0x1 |
| PHASE_USE_FLAGS_INVERSE         | 0x2 |
<!-- {table:.dense} -->
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_tracking_state'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

