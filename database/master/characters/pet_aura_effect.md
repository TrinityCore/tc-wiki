---
title: pet_aura_effect
description: 
published: true
date: 2022-11-21T21:02:35.290Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:16:03.486Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  | Global Unique Identifier |
| [casterGuid](#casterguid) | binary(16) |  | PRI | NO |  |  | Full Global Unique Identifier |
| [spell](#spell) | int | unsigned | PRI | NO |  |  |  |
| [effectMask](#effectmask) | int | unsigned | PRI | NO |  |  |  |
| [effectIndex](#effectindex) | tinyint | unsigned | PRI | NO |  |  |  |
| [amount](#amount) | int | signed |  | NO | 0 |  |  |
| [baseAmount](#baseamount) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### casterGuid
*- no description -*
&nbsp;

### spell
*- no description -*
&nbsp;

### effectMask
*- no description -*
&nbsp;

### effectIndex
*- no description -*
&nbsp;

### amount
*- no description -*
&nbsp;

### baseAmount
*- no description -*
&nbsp;

