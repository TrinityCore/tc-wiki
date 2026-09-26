---
title: playerchoice_response_maw_power
description: 
published: true
date: 2022-11-21T21:07:08.294Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:05.274Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int | signed | PRI | NO |  |  |  |
| [TypeArtFileID](#typeartfileid) | int | signed |  | YES | 0 |  |  |
| [Rarity](#rarity) | int | signed |  | YES | 0 |  |  |
| [RarityColor](#raritycolor) | int | unsigned |  | YES | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | YES | 0 |  |  |
| [MaxStacks](#maxstacks) | int | signed |  | YES | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### TypeArtFileID
*- no description -*
&nbsp;

### Rarity
*- no description -*
&nbsp;

### RarityColor
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### MaxStacks
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


