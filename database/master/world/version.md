---
title: version
description: 
published: true
date: 2023-04-02T00:35:55.885Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:00.552Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [core_version](#core_version) | varchar(250) |  | PRI | NO | '' |  | Core revision dumped at startup. |
| [core_revision](#core_revision) | varchar(120) |  |  | YES | NULL |  |  |
| [db_version](#db_version) | varchar(120) |  |  | YES | NULL |  | Version of world DB. |
| [cache_id](#cache_id) | int | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### core_version
Full text description from the core  version your server is currently running on.
Example: 
```
TrinityCore rev. 8e48ef7863c5 2015-03-22 01:28:02 +0100 (6.x branch) (Win64, Release)
```
&nbsp;

### core_revision
Commit hash your server is currently running on, i.e. `Unknown` or `8e48ef7863c5`
&nbsp;

### db_version
Database Version your server is currently running on. Example: `TDB 335.58`
&nbsp;

### cache_id
Minor DB version. Example: `58`
&nbsp;

