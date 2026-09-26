---
title: scenario_poi_points
description: 
published: true
date: 2022-11-21T21:08:26.249Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:55.409Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CriteriaTreeID](#criteriatreeid) | int | signed | PRI | NO | 0 |  |  |
| [Idx1](#idx1) | int | signed | PRI | NO | 0 |  |  |
| [Idx2](#idx2) | int | signed | PRI | NO | 0 |  |  |
| [X](#x) | int | signed |  | NO | 0 |  |  |
| [Y](#y) | int | signed |  | NO | 0 |  |  |
| [Z](#z) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CriteriaTreeID
*- no description -*
&nbsp;

### Idx1
*- no description -*
&nbsp;

### Idx2
*- no description -*
&nbsp;

### X
*- no description -*
&nbsp;

### Y
*- no description -*
&nbsp;

### Z
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


