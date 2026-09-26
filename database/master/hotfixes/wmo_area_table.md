---
title: wmo_area_table
description: 
published: true
date: 2024-05-15T12:31:08.886Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:59.676Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AreaName](#areaname) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [WmoID](#wmoid) | smallint | unsigned |  | NO | 0 |  |  |
| [NameSetID](#namesetid) | tinyint | unsigned |  | NO | 0 |  |  |
| [WmoGroupID](#wmogroupid) | int | signed |  | NO | 0 |  |  |
| [SoundProviderPref](#soundproviderpref) | tinyint | unsigned |  | NO | 0 |  |  |
| [SoundProviderPrefUnderwater](#soundproviderprefunderwater) | tinyint | unsigned |  | NO | 0 |  |  |
| [AmbienceID](#ambienceid) | smallint | unsigned |  | NO | 0 |  |  |
| [UwAmbience](#uwambience) | smallint | unsigned |  | NO | 0 |  |  |
| [ZoneMusic](#zonemusic) | smallint | unsigned |  | NO | 0 |  |  |
| [UwZoneMusic](#uwzonemusic) | int | unsigned |  | NO | 0 |  |  |
| [IntroSound](#introsound) | smallint | unsigned |  | NO | 0 |  |  |
| [UwIntroSound](#uwintrosound) | smallint | unsigned |  | NO | 0 |  |  |
| [AreaTableID](#areatableid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### AreaName
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### WmoID
*- no description -*
&nbsp;

### NameSetID
*- no description -*
&nbsp;

### WmoGroupID
*- no description -*
&nbsp;

### SoundProviderPref
*- no description -*
&nbsp;

### SoundProviderPrefUnderwater
*- no description -*
&nbsp;

### AmbienceID
*- no description -*
&nbsp;

### UwAmbience
*- no description -*
&nbsp;

### ZoneMusic
*- no description -*
&nbsp;

### UwZoneMusic
*- no description -*
&nbsp;

### IntroSound
*- no description -*
&nbsp;

### UwIntroSound
*- no description -*
&nbsp;

### AreaTableID
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


