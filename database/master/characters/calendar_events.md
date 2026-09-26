---
title: calendar_events
description: 
published: true
date: 2022-11-21T20:59:24.374Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:17:23.993Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [EventID](#eventid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [Owner](#owner) | bigint | unsigned |  | NO | 0 |  |  |
| [Title](#title) | varchar(255) |  |  | NO | '' |  |  |
| [Description](#description) | varchar(255) |  |  | NO | '' |  |  |
| [EventType](#eventtype) | tinyint | unsigned |  | NO | 4 |  |  |
| [TextureID](#textureid) | int | signed |  | NO | -1 |  |  |
| [Date](#date) | bigint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [LockDate](#lockdate) | bigint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### EventID
*- no description -*
&nbsp;

### Owner
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### TextureID
*- no description -*
&nbsp;

### Date
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### LockDate
*- no description -*
&nbsp;

