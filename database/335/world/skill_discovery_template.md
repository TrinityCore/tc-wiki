---
title: skill_discovery_template
description:
published: true
date: 2023-07-15T09:54:23.592Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:56.168Z
---

<a href="https://trinitycore.info/en/database/335/world/script_waypoint" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_waypoint'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skill_extra_item_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_extra_item_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table controls the so called "discovery" system of learning spells. This system is used by the alchemy and inscription profession and controls the chance for a player to "discover" another recipe while creating items with known recipes.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | mediumint | unsigned | PRI | NO | 0 |  | SpellId of the discoverable spell |
| [reqSpell](#reqspell) | mediumint | unsigned | PRI | NO | 0 |  | spell requirement |
| [reqSkillValue](#reqskillvalue) | smallint | unsigned |  | NO | 0 |  | skill points requirement |
| [chance](#chance) | float |  |  | NO | 0 |  | chance to discover |
&nbsp;
## Description of fields

### spellId
The recipe [Spell ID](/files/DBC/335/spell#id) that has a chance to be automatically discovered.
&nbsp;

### reqSpell
* **reqSpell** = 0: Any recipe spell can trigger the discovery
* **reqSpell** > 0: Must use a specific recipe to trigger the discovery (e.g.: [Cauldron of Major Arcane Protection](aowow.trinitycore.info/?spell=41458) will only be discovered while using [Major Arcane Protection Potion](https://aowow.trinitycore.info/?spell=28575)).
&nbsp;

### reqSkillValue
The minimum points requirement in profession skill to discover **spellId**.
&nbsp;

### chance
The chance, in percent, that a recipe has of being automatically "discovered", whether by any recipe use or by the specific recipe use defined in **reqSpell**.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/script_waypoint" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_waypoint'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skill_extra_item_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_extra_item_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
