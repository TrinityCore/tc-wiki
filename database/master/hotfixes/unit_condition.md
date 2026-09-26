---
title: unit_condition
description: 
published: true
date: 2024-09-05T22:46:08.024Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-02-06T20:30:08.309Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Variable1](#variable1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable2](#variable2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable3](#variable3) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable4](#variable4) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable5](#variable5) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable6](#variable6) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable7](#variable7) | tinyint | unsigned |  | NO | 0 |  |  |
| [Variable8](#variable8) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op1](#op1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op2](#op2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op3](#op3) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op4](#op4) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op5](#op5) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op6](#op6) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op7](#op7) | tinyint | unsigned |  | NO | 0 |  |  |
| [Op8](#op8) | tinyint | unsigned |  | NO | 0 |  |  |
| [Value1](#value1) | int | signed |  | NO | 0 |  |  |
| [Value2](#value2) | int | signed |  | NO | 0 |  |  |
| [Value3](#value3) | int | signed |  | NO | 0 |  |  |
| [Value4](#value4) | int | signed |  | NO | 0 |  |  |
| [Value5](#value5) | int | signed |  | NO | 0 |  |  |
| [Value6](#value6) | int | signed |  | NO | 0 |  |  |
| [Value7](#value7) | int | signed |  | NO | 0 |  |  |
| [Value8](#value8) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Variable1
*- no description -*
&nbsp;

### Variable2
*- no description -*
&nbsp;

### Variable3
*- no description -*
&nbsp;

### Variable4
*- no description -*
&nbsp;

### Variable5
*- no description -*
&nbsp;

### Variable6
*- no description -*
&nbsp;

### Variable7
*- no description -*
&nbsp;

### Variable8
*- no description -*
&nbsp;

### Op1
*- no description -*
&nbsp;

### Op2
*- no description -*
&nbsp;

### Op3
*- no description -*
&nbsp;

### Op4
*- no description -*
&nbsp;

### Op5
*- no description -*
&nbsp;

### Op6
*- no description -*
&nbsp;

### Op7
*- no description -*
&nbsp;

### Op8
*- no description -*
&nbsp;

### Value1
*- no description -*
&nbsp;

### Value2
*- no description -*
&nbsp;

### Value3
*- no description -*
&nbsp;

### Value4
*- no description -*
&nbsp;

### Value5
*- no description -*
&nbsp;

### Value6
*- no description -*
&nbsp;

### Value7
*- no description -*
&nbsp;

### Value8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

