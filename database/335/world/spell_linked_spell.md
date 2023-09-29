---
title: spell_linked_spell
description:
published: true
date: 2023-07-22T21:14:28.702Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:40.502Z
---

<a href="https://trinitycore.info/en/database/335/world/spell_learn_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_learn_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table provides data for spell linking system, telling it which spells trigger what, and under which conditions.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_trigger](#spell_trigger) | mediumint | signed | PRI | NO |  |  |  |
| [spell_effect](#spell_effect) | mediumint | signed | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [comment](#comment) | text |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### spell_trigger
The [Spell ID](/files/DBC/335/spell#id), which when cast, will trigger the spell listed in **spell_effect**.
&nbsp;

### spell_effect
The [Spell ID](/files/DBC/335/spell#id) that you want to be triggered. How this spell acts is determined by the **type** field.
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

<a href="https://trinitycore.info/en/database/335/world/spell_learn_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_learn_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
