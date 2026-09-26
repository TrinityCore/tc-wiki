---
title: character_instance_lock
description: 
published: true
date: 2023-05-11T08:55:46.167Z
tags: database, master, characters
editor: markdown
dateCreated: 2022-12-19T18:36:55.053Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO |  |  |  |
| [mapId](#mapid) | int | unsigned | PRI | NO |  |  |  |
| [lockId](#lockid) | int | unsigned | PRI | NO |  |  |  |
| [instanceId](#instanceid) | int | unsigned |  | YES | NULL |  |  |
| [difficulty](#difficulty) | tinyint | unsigned |  | YES | NULL |  |  |
| [data](#data) | text |  |  | YES | NULL |  |  |
| [completedEncountersMask](#completedencountersmask) | int | unsigned |  | YES | NULL |  |  |
| [entranceWorldSafeLocId](#entranceworldsafelocid) | int | unsigned |  | YES | NULL |  |  |
| [expiryTime](#expirytime) | bigint | unsigned |  | YES | NULL |  |  |
| [extended](#extended) | tinyint | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### lockId
*- no description -*
&nbsp;

### instanceId
*- no description -*
&nbsp;

### difficulty
*- no description -*
&nbsp;

### data
*- no description -*
&nbsp;

### completedEncountersMask
*- no description -*
&nbsp;

### entranceWorldSafeLocId
*- no description -*
&nbsp;

### expiryTime
*- no description -*
&nbsp;

### extended
*- no description -*
&nbsp;

