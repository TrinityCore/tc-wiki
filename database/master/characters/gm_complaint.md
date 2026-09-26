---
title: gm_complaint
description: 
published: true
date: 2022-11-21T21:01:25.392Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:43:44.734Z
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
| [targetCharacterGuid](#targetcharacterguid) | bigint | unsigned |  | NO |  |  |  |
| [reportType](#reporttype) | int | signed |  | NO | 0 |  |  |
| [reportMajorCategory](#reportmajorcategory) | int | signed |  | NO | 0 |  |  |
| [reportMinorCategoryFlags](#reportminorcategoryflags) | int | signed |  | NO | 0 |  |  |
| [reportLineIndex](#reportlineindex) | int | signed |  | NO |  |  |  |
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

### targetCharacterGuid
*- no description -*
&nbsp;

### reportType
*- no description -*
&nbsp;

### reportMajorCategory
*- no description -*
&nbsp;

### reportMinorCategoryFlags
*- no description -*
&nbsp;

### reportLineIndex
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

