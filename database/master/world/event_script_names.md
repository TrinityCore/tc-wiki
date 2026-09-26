---
title: event_script_names
description: 
published: true
date: 2023-07-09T10:57:33.139Z
tags: database, master, world
editor: markdown
dateCreated: 2023-07-09T10:57:33.139Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
Event ID.
- **Gameobject**: [Gameobject_template](/database/master/world/gameobject_template) data referencing GameEvents
- **Spell**: SPELL_EFFECT_SEND_EVENT (MiscValue)
- **Taxi path**: TaxiPathNode.db2 (ArrivalEventID & DepartureEventID)
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
This might also be '**SmartEventTrigger**'. It will then use [SmartAI](/database/master/world/smart_scripts).
&nbsp;

