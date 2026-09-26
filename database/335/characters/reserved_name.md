---
title: reserved_name
description: 
published: true
date: 2024-05-16T12:09:46.379Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:14.903Z
---

> This table serves as a simple list of names that players cannot use when naming:
> \- characters (skippable with [`RBAC_PERM_SKIP_CHECK_CHARACTER_CREATION_RESERVEDNAME`](../auth/rbac_permissions))
> \- pets
> \- guilds 
> \- arena teams
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(12) |  | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### name {#name-alt}
The name that cannot be used by players when naming characters.
&nbsp;

