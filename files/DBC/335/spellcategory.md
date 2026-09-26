---
title: SpellCategory.dbc
description:
published: true
date: 2023-10-06T10:38:48.017Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:07:27.599Z
---

# SpellCategory.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellCategory)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

[`enum SpellCategoryFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L382-L386)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | SPELL_CATEGORY_FLAG_COOLDOWN_SCALES_WITH_WEAPON_SPEED | unused |
| 2 | 0x2 |  | cooldown is global |
| 4 | 0x4 | SPELL_CATEGORY_FLAG_COOLDOWN_STARTS_ON_EVENT |  |
{.dense}

&nbsp;

