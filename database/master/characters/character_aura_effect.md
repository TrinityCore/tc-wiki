---
title: character_aura_effect
description: 
published: true
date: 2022-11-21T20:59:42.270Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:20:02.024Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO |  |  |  |
| [casterGuid](#casterguid) | binary(16) |  | PRI | NO |  |  | Full Global Unique Identifier |
| [itemGuid](#itemguid) | binary(16) |  | PRI | NO |  |  |  |
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

### itemGuid
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

