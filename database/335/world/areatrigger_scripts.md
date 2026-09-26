---
title: areatrigger_scripts
description:
published: true
date: 2024-05-16T11:19:31.152Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:46.532Z
---

Allows for an area trigger to be scripted with Trinity Script.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | signed | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### entry
This is the [AreaTrigger ID](/files/DBC/335/areatrigger#id).
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](../world/smart_scripts).
&nbsp;

