---
title: override_spell_data
description: 
published: true
date: 2022-11-21T21:17:56.306Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:37.954Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Spells1](#spells1) | int | signed |  | NO | 0 |  |  |
| [Spells2](#spells2) | int | signed |  | NO | 0 |  |  |
| [Spells3](#spells3) | int | signed |  | NO | 0 |  |  |
| [Spells4](#spells4) | int | signed |  | NO | 0 |  |  |
| [Spells5](#spells5) | int | signed |  | NO | 0 |  |  |
| [Spells6](#spells6) | int | signed |  | NO | 0 |  |  |
| [Spells7](#spells7) | int | signed |  | NO | 0 |  |  |
| [Spells8](#spells8) | int | signed |  | NO | 0 |  |  |
| [Spells9](#spells9) | int | signed |  | NO | 0 |  |  |
| [Spells10](#spells10) | int | signed |  | NO | 0 |  |  |
| [PlayerActionBarFileDataID](#playeractionbarfiledataid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Spells1
*- no description -*
&nbsp;

### Spells2
*- no description -*
&nbsp;

### Spells3
*- no description -*
&nbsp;

### Spells4
*- no description -*
&nbsp;

### Spells5
*- no description -*
&nbsp;

### Spells6
*- no description -*
&nbsp;

### Spells7
*- no description -*
&nbsp;

### Spells8
*- no description -*
&nbsp;

### Spells9
*- no description -*
&nbsp;

### Spells10
*- no description -*
&nbsp;

### PlayerActionBarFileDataID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


