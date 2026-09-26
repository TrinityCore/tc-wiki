---
title: tact_key
description: 
published: true
date: 2022-11-21T21:20:55.302Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:36.840Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Key1](#key1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key2](#key2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key3](#key3) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key4](#key4) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key5](#key5) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key6](#key6) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key7](#key7) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key8](#key8) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key9](#key9) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key10](#key10) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key11](#key11) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key12](#key12) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key13](#key13) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key14](#key14) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key15](#key15) | tinyint | unsigned |  | NO | 0 |  |  |
| [Key16](#key16) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Key1
*- no description -*
&nbsp;

### Key2
*- no description -*
&nbsp;

### Key3
*- no description -*
&nbsp;

### Key4
*- no description -*
&nbsp;

### Key5
*- no description -*
&nbsp;

### Key6
*- no description -*
&nbsp;

### Key7
*- no description -*
&nbsp;

### Key8
*- no description -*
&nbsp;

### Key9
*- no description -*
&nbsp;

### Key10
*- no description -*
&nbsp;

### Key11
*- no description -*
&nbsp;

### Key12
*- no description -*
&nbsp;

### Key13
*- no description -*
&nbsp;

### Key14
*- no description -*
&nbsp;

### Key15
*- no description -*
&nbsp;

### Key16
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


