---
title: gm_bug
description: 
published: true
date: 2022-11-21T21:01:23.281Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:43:28.803Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [playerGuid](#playerguid) | bigint | unsigned |  | NO |  |  |  |
| [note](#note) | text |  |  | NO |  |  |  |
| [createTime](#createtime) | bigint | signed |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [facing](#facing) | float |  |  | NO | 0 |  |  |
| [closedBy](#closedby) | bigint | signed |  | NO | 0 |  |  |
| [assignedTo](#assignedto) | bigint | unsigned |  | NO | 0 |  | GUID of admin to whom ticket is assigned |
| [comment](#comment) | text |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### playerGuid
*- no description -*
&nbsp;

### note
*- no description -*
&nbsp;

### createTime
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### posX
*- no description -*
&nbsp;

### posY
*- no description -*
&nbsp;

### posZ
*- no description -*
&nbsp;

### facing
*- no description -*
&nbsp;

### closedBy
*- no description -*
&nbsp;

### assignedTo
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;


