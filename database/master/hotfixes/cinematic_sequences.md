---
title: cinematic_sequences
description: 
published: true
date: 2023-10-06T19:24:22.819Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:58.316Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SoundID](#soundid) | int | unsigned |  | NO | 0 |  |  |
| [Camera1](#camera1) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera2](#camera2) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera3](#camera3) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera4](#camera4) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera5](#camera5) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera6](#camera6) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera7](#camera7) | smallint | unsigned |  | NO | 0 |  |  |
| [Camera8](#camera8) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SoundID
*- no description -*
&nbsp;

### Camera1
*- no description -*
&nbsp;

### Camera2
*- no description -*
&nbsp;

### Camera3
*- no description -*
&nbsp;

### Camera4
*- no description -*
&nbsp;

### Camera5
*- no description -*
&nbsp;

### Camera6
*- no description -*
&nbsp;

### Camera7
*- no description -*
&nbsp;

### Camera8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


