---
title: spawn_tracking_template
description: 
published: true
date: 2025-01-08T23:33:15.615Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T23:21:39.303Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnTrackingId](#spawntrackingid) | int | unsigned | PRI | NO |  |  |  |
| [MapId](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [PhaseId](#phaseid) | int | signed |  | NO | 0 |  |  |
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


