---
title: character_void_storage
description: 
published: true
date: 2022-11-21T21:01:08.265Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:37:13.719Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [itemId](#itemid) | bigint | unsigned | PRI | NO |  |  |  |
| [playerGuid](#playerguid) | bigint | unsigned | MUL | NO |  |  |  |
| [itemEntry](#itementry) | int | unsigned |  | NO |  |  |  |
| [slot](#slot) | tinyint | unsigned |  | NO |  |  |  |
| [creatorGuid](#creatorguid) | bigint | unsigned |  | NO | 0 |  |  |
| [randomBonusListId](#randombonuslistid) | int | unsigned |  | NO | 0 |  |  |
| [fixedScalingLevel](#fixedscalinglevel) | int | unsigned |  | YES | 0 |  |  |
| [artifactKnowledgeLevel](#artifactknowledgelevel) | int | unsigned |  | YES | 0 |  |  |
| [context](#context) | tinyint | unsigned |  | NO | 0 |  |  |
| [bonusListIDs](#bonuslistids) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### itemId
*- no description -*
&nbsp;

### playerGuid
*- no description -*
&nbsp;

### itemEntry
*- no description -*
&nbsp;

### slot
*- no description -*
&nbsp;

### creatorGuid
*- no description -*
&nbsp;

### randomBonusListId
*- no description -*
&nbsp;

### fixedScalingLevel
*- no description -*
&nbsp;

### artifactKnowledgeLevel
*- no description -*
&nbsp;

### context
*- no description -*
&nbsp;

### bonusListIDs
*- no description -*
&nbsp;


