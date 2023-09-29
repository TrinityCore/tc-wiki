---
title: skill_perfect_item_template
description:
published: true
date: 2023-07-15T10:46:36.542Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:04.266Z
---

<a href="https://trinitycore.info/en/database/335/world/skill_fishing_base_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_fishing_base_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skinning_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds information about when using certain profession spells will create a different version of the item. (Jewelcrafting - Gem Perfection)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | mediumint | unsigned | PRI | NO | 0 |  | SpellId of the item creation spell |
| [requiredSpecialization](#requiredspecialization) | mediumint | unsigned |  | NO | 0 |  | Specialization spell id |
| [perfectCreateChance](#perfectcreatechance) | float |  |  | NO | 0 |  | chance to create the perfect item instead |
| [perfectItemType](#perfectitemtype) | mediumint | unsigned |  | NO | 0 |  | perfect item type to create instead |
&nbsp;
## Description of fields

### spellId
[Spell ID](/files/DBC/335/spell#id) that creates the item.
&nbsp;

### requiredSpecialization
The character must have the [Spell ID](/files/DBC/335/spell#id) specified here learned to have a chance at triggering the effect.
&nbsp;

### perfectCreateChance
The chance that the player will create an alternative item.
&nbsp;

### perfectItemType
The [item entry](../world/item_template#entry) replacing the original crafted item.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/skill_fishing_base_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'skill_fishing_base_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skinning_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skinning_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
