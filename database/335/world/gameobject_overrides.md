---
title: gameobject_overrides
description:
published: true
date: 2023-07-09T21:34:19.689Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:19.760Z
---

This table changes the faction and flags values of an gameobject on a per-spawn basis.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spawnId](#spawnid) | int | unsigned | PRI | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### spawnId
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

### faction
[FactionTemplate ID](/files/DBC/335/factiontemplate#id-alt)
Replaces faction from [gameobject_template_addon.faction](../world/gameobject_template_addon#faction) if set.
&nbsp;

### flags
Replaces flags from [gameobject_template_addon.flags](../world/gameobject_template_addon#flags) if set.

<!--@include: @/partial/335/gameobject-flags.md-->

&nbsp;
