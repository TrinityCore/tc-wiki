---
title: gameobject_template_addon
description: 
published: true
date: 2024-05-16T11:19:32.869Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:33.454Z
---

This table holds additional information on gameobjects.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | int | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | int | unsigned |  | NO | 0 |  |  |
| [artkit0](#artkit-0-3) | int | signed |  | NO | 0 |  |  |
| [artkit1](#artkit-0-3) | int | signed |  | NO | 0 |  |  |
| [artkit2](#artkit-0-3) | int | signed |  | NO | 0 |  |  |
| [artkit3](#artkit-0-3) | int | signed |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### entry
references [gameobject_template.entry](../world/gameobject_template#entry)
&nbsp;

### faction
Object's [FactionTemplate ID](/files/DBC/335/factiontemplate#id), if any.
&nbsp;

### flags

<!--@include: @/partial/335/gameobject-flags.md-->

&nbsp;

### mingold
Minimum money, in copper, that the gameobject can drop when accessed / used.
&nbsp;

### maxgold
Maximum money, in copper, that the gameobject can drop when accessed / used.
&nbsp;

### artkit\[0-3]
[GameObjectArtKit ID](/files/DBC/335/gameobjectartkit#id)
Updates display if object is activated by SPELL_EFFECT_ACTIVATE_OBJECT (86) with a MiscValue of 19&ndash;22.
&nbsp;
