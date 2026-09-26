---
title: creature_template_model
description: 
published: true
date: 2022-11-21T21:04:22.272Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:23.993Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [Idx](#idx) | int | unsigned | PRI | NO | 0 |  |  |
| [CreatureDisplayID](#creaturedisplayid) | int | unsigned |  | NO |  |  |  |
| [DisplayScale](#displayscale) | float |  |  | NO | 1 |  |  |
| [Probability](#probability) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureID
*- no description -*
&nbsp;

### Idx
*- no description -*
&nbsp;

### CreatureDisplayID
*- no description -*
&nbsp;

### DisplayScale
*- no description -*
&nbsp;

### Probability
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


