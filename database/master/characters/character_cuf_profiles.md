---
title: character_cuf_profiles
description: 
published: true
date: 2022-11-21T20:59:52.317Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:21:30.199Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Character Guid |
| [id](#id-alt) | tinyint | unsigned | PRI | NO |  |  | Profile Id (0-4) |
| [name](#name-alt) | varchar(12) |  |  | NO |  |  | Profile Name |
| [frameHeight](#frameheight) | smallint | unsigned |  | NO | 0 |  | Profile Frame Height |
| [frameWidth](#framewidth) | smallint | unsigned |  | NO | 0 |  | Profile Frame Width |
| [sortBy](#sortby) | tinyint | unsigned |  | NO | 0 |  | Frame Sort By |
| [healthText](#healthtext) | tinyint | unsigned |  | NO | 0 |  | Frame Health Text |
| [boolOptions](#booloptions) | int | unsigned |  | NO | 0 |  | Many Configurable Bool Options |
| [topPoint](#toppoint) | tinyint | unsigned |  | NO | 0 |  | Frame top alignment |
| [bottomPoint](#bottompoint) | tinyint | unsigned |  | NO | 0 |  | Frame bottom alignment |
| [leftPoint](#leftpoint) | tinyint | unsigned |  | NO | 0 |  | Frame left alignment |
| [topOffset](#topoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from top |
| [bottomOffset](#bottomoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from bottom |
| [leftOffset](#leftoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from left |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### id {#id-alt}
*- no description -*
&nbsp;

### name {#name-alt}
*- no description -*
&nbsp;

### frameHeight
*- no description -*
&nbsp;

### frameWidth
*- no description -*
&nbsp;

### sortBy
*- no description -*
&nbsp;

### healthText
*- no description -*
&nbsp;

### boolOptions
*- no description -*
&nbsp;

### topPoint
*- no description -*
&nbsp;

### bottomPoint
*- no description -*
&nbsp;

### leftPoint
*- no description -*
&nbsp;

### topOffset
*- no description -*
&nbsp;

### bottomOffset
*- no description -*
&nbsp;

### leftOffset
*- no description -*
&nbsp;

