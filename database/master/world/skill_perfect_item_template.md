---
title: skill_perfect_item_template
description: 
published: true
date: 2022-11-21T21:08:49.222Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:24.521Z
---

<a href="https://trinitycore.info/en/database/master/world/skill_fishing_base_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_fishing_base_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_tiers" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_tiers'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | int | unsigned | PRI | NO | 0 |  | SpellId of the item creation spell |
| [requiredSpecialization](#requiredspecialization) | int | unsigned |  | NO | 0 |  | Specialization spell id |
| [perfectCreateChance](#perfectcreatechance) | float |  |  | NO | 0 |  | chance to create the perfect item instead |
| [perfectItemType](#perfectitemtype) | int | unsigned |  | NO | 0 |  | perfect item type to create instead |
&nbsp;
## Description of fields

### spellId
[Spell ID](https://wow.tools/dbc/?dbc=spell) that creates the item.
&nbsp;

### requiredSpecialization
The character must have the [Spell ID](https://wow.tools/dbc/?dbc=spell) specified here learned to have a chance at triggering the effect.
&nbsp;

### perfectCreateChance
The chance that the player will create an alternative item.
&nbsp;

### perfectItemType
The [ItemID](https://wow.tools/dbc/?dbc=itemsparse) replacing the original crafted item.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/skill_fishing_base_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_fishing_base_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_tiers" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_tiers'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

