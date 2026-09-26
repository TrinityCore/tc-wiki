---
title: spell_linked_spell
description:
published: true
date: 2022-11-21T21:09:13.220Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:03.660Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_trigger](#spell_trigger) | int | signed | PRI | NO |  |  |  |
| [spell_effect](#spell_effect) | int | signed | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [comment](#comment) | mediumtext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### spell_trigger
The [Spell ID](https://wago.tools/db2/spell), which when cast, will trigger the spell listed in **spell_effect**.
&nbsp;

### spell_effect
The [Spell ID](https://wago.tools/db2/spell) that you want to be triggered. How this spell acts is determined by the **type** field.
&nbsp;

### type
Describes how both spells are linked
* 0: SPELL_LINK_CAST
| -- | -- | -- |
|  | **spell_trigger > 0** | **spell_trigger < 0** |
| **spell_effect > 0** | When spell_trigger is cast<br>spell_effect is also cast (as triggered cast) on the same targets, or caster. | When the aura of spell_trigger is removed<br>spell_effect is also cast (as triggered cast) on the same targets, or caster. |
| **spell_effect < 0** | When spell_trigger is cast<br>auras of spell_effect are removed. | When the aura of spell_trigger is removed<br>auras of spell_effect are removed. |


* 1: SPELL_LINK_HIT
| -- | -- | -- |
|  | **spell_trigger > 0** | **spell_trigger < 0** |
| **spell_effect > 0** | When spell_trigger hits it's target<br>spell_effect is cast (as triggered cast) on the same target. | *- invalid -* |
| **spell_effect < 0** | When spell_trigger hits it's target<br>auras of spell_effect are removed. | *- invalid -* |


* 2: SPELL_LINK_AURA
| -- | -- | -- | -- |
|  | **spell_trigger > 0** | **spell_trigger < 0** |
| **spell_effect > 0** | While aura of spell_trigger is applied<br>aura of spell_effect is also applied on the same target. | *- invalid -* |
| **spell_effect < 0** | While aura of spell_trigger is applied<br>target is immune to spell_effect. | *- invalid -* |

&nbsp;

### comment
Optional comment to explain the link.
&nbsp;

