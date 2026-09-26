---
title: quest_money_reward
description: 
published: true
date: 2022-11-21T21:18:41.287Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:59:36.961Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Difficulty1](#difficulty1) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty2](#difficulty2) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty3](#difficulty3) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty4](#difficulty4) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty5](#difficulty5) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty6](#difficulty6) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty7](#difficulty7) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty8](#difficulty8) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty9](#difficulty9) | int | unsigned |  | NO | 0 |  |  |
| [Difficulty10](#difficulty10) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Difficulty1
*- no description -*
&nbsp;

### Difficulty2
*- no description -*
&nbsp;

### Difficulty3
*- no description -*
&nbsp;

### Difficulty4
*- no description -*
&nbsp;

### Difficulty5
*- no description -*
&nbsp;

### Difficulty6
*- no description -*
&nbsp;

### Difficulty7
*- no description -*
&nbsp;

### Difficulty8
*- no description -*
&nbsp;

### Difficulty9
*- no description -*
&nbsp;

### Difficulty10
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


