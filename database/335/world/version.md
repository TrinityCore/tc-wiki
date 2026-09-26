---
title: version
description: 
published: true
date: 2023-07-24T18:13:19.941Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:40.788Z
---

Includes information on current core and database version.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [core_version](#core_version) | varchar(255) |  | PRI | NO | '' |  | Core revision dumped at startup. |
| [core_revision](#core_revision) | varchar(120) |  |  | YES | NULL |  |  |
| [db_version](#db_version) | varchar(120) |  |  | YES | NULL |  | Version of world DB. |
| [cache_id](#cache_id) | int | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### core_version
Full text description from the core  version your server is currently running on.

Example: `TrinityCore rev. d1c6b9d253fa+ 2023-06-13 18:56:22 +0200 (3.3.5 branch) (Unix, Debug, Dynamic)`
&nbsp;

### core_revision
Core Revision Hash your server is currently running on.

Example: `Unknown` or `d1c6b9d253fa+`.
&nbsp;

### db_version
Database Version your server is currently running on. 

Example: `TDB 335.23061`
&nbsp;

### cache_id
Minor DB version. 

Example: `23061`
&nbsp;

