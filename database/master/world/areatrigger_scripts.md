---
title: areatrigger_scripts
description: Allows for an area trigger to be scripted with Trinity Script.
published: true
date: 2022-11-21T21:03:13.254Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:51.767Z
---

> This table only applies for old-school AreaTriggers!
{.is-warning}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | signed | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### entry
This is the trigger identifier from [AreaTrigger.db2](https://wago.tools/db2/areatrigger){target=_blank}.

> ScriptNames for new areatrigger system are applied inside [areatrigger_template.ScriptName](/database/master/world/areatrigger_template#scriptname)
{.is-info}

&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](/database/master/world/smart_scripts).
&nbsp;

