---
title: skill_discovery_template
description:
published: true
date: 2022-11-21T21:08:43.267Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:16.804Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | int | unsigned | PRI | NO | 0 |  | SpellId of the discoverable spell |
| [reqSpell](#reqspell) | int | unsigned | PRI | NO | 0 |  | spell requirement |
| [reqSkillValue](#reqskillvalue) | smallint | unsigned |  | NO | 0 |  | skill points requirement |
| [chance](#chance) | float |  |  | NO | 0 |  | chance to discover |
&nbsp;
## Description of fields

### spellId
The recipe [Spell ID](https://wago.tools/db2/spell) that has a chance to be automatically discovered.
&nbsp;

### reqSpell
* **reqSpell** = 0: Any recipe spell can trigger the discovery
* **reqSpell** > 0: Must use a specific recipe to trigger the discovery (e.g.: [Cauldron of Major Arcane Protection](https://aowow.trinitycore.info/?spell=41458) will only be discovered while using [Major Arcane Protection Potion](https://aowow.trinitycore.info/?spell=28575)).
&nbsp;

### reqSkillValue
The minimum points requirement in profession skill to discover **spellId**.
&nbsp;

### chance
The chance, in percent, that a recipe has of being automatically "discovered", whether by any recipe use or by the specific recipe use defined in **reqSpell**.
&nbsp;

