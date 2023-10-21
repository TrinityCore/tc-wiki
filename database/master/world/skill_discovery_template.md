---
title: skill_discovery_template
description: 
published: true
date: 2022-11-21T21:08:43.267Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:16.804Z
---

<a href="https://trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'serverside_spell_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_extra_item_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_extra_item_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
The recipe [Spell ID](https://wow.tools/dbc/?dbc=spell) that has a chance to be automatically discovered.
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

<a href="https://trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'serverside_spell_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_extra_item_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_extra_item_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

