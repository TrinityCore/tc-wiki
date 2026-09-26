---
title: SpellDuration.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellDuration.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellDuration)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Duration](#duration) | int32 |  |
| 2 | [DurationPerLevel](#durationperlevel) | int32 |  |
| 3 | [MaxDuration](#maxduration) | int32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Duration
<code>Col: 1 (int32)</code>

Base duration in msec.
&nbsp;

### DurationPerLevel
:x: <code>Col: 2 (int32)</code>

*- not used -*
&nbsp;

### MaxDuration
<code>Col: 3 (int32)</code>

Max. duration in msec.
&nbsp;

