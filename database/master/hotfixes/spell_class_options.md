---
title: spell_class_options
description: 
published: true
date: 2022-11-21T21:19:47.246Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:05.211Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [ModalNextSpell](#modalnextspell) | int | unsigned |  | NO | 0 |  |  |
| [SpellClassSet](#spellclassset) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellClassMask1](#spellclassmask1) | int | signed |  | NO | 0 |  |  |
| [SpellClassMask2](#spellclassmask2) | int | signed |  | NO | 0 |  |  |
| [SpellClassMask3](#spellclassmask3) | int | signed |  | NO | 0 |  |  |
| [SpellClassMask4](#spellclassmask4) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### ModalNextSpell
*- no description -*
&nbsp;

### SpellClassSet
*- no description -*
&nbsp;

### SpellClassMask1
*- no description -*
&nbsp;

### SpellClassMask2
*- no description -*
&nbsp;

### SpellClassMask3
*- no description -*
&nbsp;

### SpellClassMask4
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


