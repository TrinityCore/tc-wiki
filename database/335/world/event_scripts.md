---
title: event_scripts
description: 
published: true
date: 2024-05-16T11:19:32.384Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:17.487Z
---

Holds scripts activated whenever an event is activated, be it by an object or as the spell effect SPELL_EFFECT_SEND_EVENT (61).

[Please refer to the generic description of the script system for more information.](/database/335/world/scripts)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned |  | NO | 0 |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [command](#command) | int | unsigned |  | NO | 0 |  |  |
| [datalong](#datalong) | int | unsigned |  | NO | 0 |  |  |
| [datalong2](#datalong2) | int | unsigned |  | NO | 0 |  |  |
| [dataint](#dataint) | int | signed |  | NO | 0 |  |  |
| [x](#x) | float |  |  | NO | 0 |  |  |
| [y](#y) | float |  |  | NO | 0 |  |  |
| [z](#z) | float |  |  | NO | 0 |  |  |
| [o](#o) | float |  |  | NO | 0 |  |  |
| [Comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### delay
*- no description -*
&nbsp;

### command
*- no description -*
&nbsp;

### datalong
*- no description -*
&nbsp;

### datalong2
*- no description -*
&nbsp;

### dataint
*- no description -*
&nbsp;

### x
*- no description -*
&nbsp;

### y
*- no description -*
&nbsp;

### z
*- no description -*
&nbsp;

### o
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

