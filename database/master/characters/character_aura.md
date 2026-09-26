---
title: character_aura
description: 
published: true
date: 2022-11-21T20:59:40.369Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:19:44.413Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | binary(16) |  | PRI | NO |  |  | Full Global Unique Identifier |
| [itemGuid](#itemguid) | binary(16) |  | PRI | NO |  |  |  |
| [spell](#spell) | int | unsigned | PRI | NO |  |  |  |
| [effectMask](#effectmask) | int | unsigned | PRI | NO |  |  |  |
| [recalculateMask](#recalculatemask) | int | unsigned |  | NO | 0 |  |  |
| [difficulty](#difficulty) | tinyint | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [maxDuration](#maxduration) | int | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint | unsigned |  | NO | 0 |  |  |
| [castItemId](#castitemid) | int | unsigned |  | NO | 0 |  |  |
| [castItemLevel](#castitemlevel) | int | signed |  | NO | -1 |  |  |
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

### recalculateMask
*- no description -*
&nbsp;

### difficulty
*- no description -*
&nbsp;

### stackCount
*- no description -*
&nbsp;

### maxDuration
*- no description -*
&nbsp;

### remainTime
*- no description -*
&nbsp;

### remainCharges
*- no description -*
&nbsp;

### castItemId
*- no description -*
&nbsp;

### castItemLevel
*- no description -*
&nbsp;

