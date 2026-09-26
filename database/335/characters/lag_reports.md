---
title: lag_reports
description:
published: true
date: 2023-07-30T16:50:17.798Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:40.327Z
---

> Stores player reported lag events.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [reportId](#reportid) | int | unsigned | PRI | NO |  | auto_increment |  |
| [guid](#guid) | int | unsigned |  | NO | 0 |  |  |
| [lagType](#lagtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [latency](#latency) | int | unsigned |  | NO | 0 |  |  |
| [createTime](#createtime) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### reportId
Unique report enumerator.
&nbsp;

### guid
The [guid](../characters/characters#guid) of the reporting character.
&nbsp;

### lagType
`enum LagReportType`
| ID | Name |
|----|------|
| 1 | LAG_REPORT_TYPE_LOOT |
| 2 | LAG_REPORT_TYPE_AUCTION_HOUSE |
| 3 | LAG_REPORT_TYPE_MAIL |
| 4 | LAG_REPORT_TYPE_CHAT |
| 5 | LAG_REPORT_TYPE_MOVEMENT |
| 6 | LAG_REPORT_TYPE_SPELL |
{.dense}

&nbsp;

### mapId
[Map ID](/files/DBC/335/map#id) where lag was reported.
&nbsp;

### posX
X position where lag was reported.
&nbsp;

### posY
Y position where lag was reported.
&nbsp;

### posZ
Z position where lag was reported.
&nbsp;

### latency
Measured lag amount in ms.
&nbsp;

### createTime
Unix timestamp when report was received.
&nbsp;

