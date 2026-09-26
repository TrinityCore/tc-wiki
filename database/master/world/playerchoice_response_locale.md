---
title: playerchoice_response_locale
description: 
published: true
date: 2022-11-21T21:07:06.306Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:02.658Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int | signed | PRI | NO |  |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Header](#header) | varchar(511) |  |  | NO | '' |  |  |
| [SubHeader](#subheader) | varchar(100) |  |  | NO | '' |  |  |
| [ButtonTooltip](#buttontooltip) | varchar(400) |  |  | NO | '' |  |  |
| [Answer](#answer) | varchar(511) |  |  | NO | '' |  |  |
| [Description](#description) | varchar(2047) |  |  | NO | '' |  |  |
| [Confirmation](#confirmation) | varchar(127) |  |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Header
*- no description -*
&nbsp;

### SubHeader
*- no description -*
&nbsp;

### ButtonTooltip
*- no description -*
&nbsp;

### Answer
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Confirmation
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

