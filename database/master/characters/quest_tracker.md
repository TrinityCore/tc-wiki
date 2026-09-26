---
title: quest_tracker
description: 
published: true
date: 2022-11-21T21:02:53.249Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:18:26.637Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [character_guid](#character_guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [quest_accept_time](#quest_accept_time) | datetime |  |  | NO |  |  |  |
| [quest_complete_time](#quest_complete_time) | datetime |  |  | YES | NULL |  |  |
| [quest_abandon_time](#quest_abandon_time) | datetime |  |  | YES | NULL |  |  |
| [completed_by_gm](#completed_by_gm) | tinyint(1) | signed |  | NO | 0 |  |  |
| [core_hash](#core_hash) | varchar(120) |  |  | NO | 0 |  |  |
| [core_revision](#core_revision) | varchar(120) |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### character_guid
*- no description -*
&nbsp;

### quest_accept_time
*- no description -*
&nbsp;

### quest_complete_time
*- no description -*
&nbsp;

### quest_abandon_time
*- no description -*
&nbsp;

### completed_by_gm
*- no description -*
&nbsp;

### core_hash
*- no description -*
&nbsp;

### core_revision
*- no description -*
&nbsp;

