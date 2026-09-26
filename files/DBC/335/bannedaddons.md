---
title: BannedAddOns.dbc
description: 
published: true
date: 2025-10-24T18:44:55.445Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:01:17.020Z
---

# BannedAddOns.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/BannedAddOns)
&nbsp;

Extended by [banned_addons](/database/335/characters/banned_addons) table.

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [NameMD5_0](#namemd5) | uint32 |  |
| 2 | [NameMD5_1](#namemd5) | uint32 |  |
| 3 | [NameMD5_2](#namemd5) | uint32 |  |
| 4 | [NameMD5_3](#namemd5) | uint32 |  |
| 5 | [VersionMD5_0](#versionmd5) | uint32 |  |
| 6 | [VersionMD5_1](#versionmd5) | uint32 |  |
| 7 | [VersionMD5_2](#versionmd5) | uint32 |  |
| 8 | [VersionMD5_3](#versionmd5) | uint32 |  |
| 9 | [LastModified](#lastmodified) | uint32 |  |
| 10 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### NameMD5
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

MD5 of the toc Title tag.
&nbsp;

### VersionMD5
:x: <code>Col: 5 &ndash; 8 (uint32)</code>

MD5 of the toc Version tag.
&nbsp;

### LastModified
:x: <code>Col: 9 (uint32)</code>

In unix time.
&nbsp;

### Flags
:x: <code>Col: 10 (uint32)</code>

always `2`

Entries without this flag are ignored in FindBannedAddOn.
&nbsp;

