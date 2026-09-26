---
title: character_banned
description: 
published: true
date: 2022-11-21T20:59:46.258Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:20:38.863Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [bandate](#bandate) | bigint | signed | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | bigint | signed |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) |  |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) |  |  | NO |  |  |  |
| [active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### bandate
*- no description -*
&nbsp;

### unbandate
*- no description -*
&nbsp;

### bannedby
*- no description -*
&nbsp;

### banreason
*- no description -*
&nbsp;

### active
*- no description -*
&nbsp;

