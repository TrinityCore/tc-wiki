---
title: creature_classlevelstats
description: 
published: true
date: 2025-02-02T13:45:16.365Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:18.477Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_default_trainer" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_default_trainer'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the base values for creatures' health, mana and armor.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO |  |  |  |
| [basehp0](#basehp0) | int | unsigned |  | NO | 1 |  |  |
| [basehp1](#basehp1) | int | unsigned |  | NO | 1 |  |  |
| [basehp2](#basehp2) | int | unsigned |  | NO | 1 |  |  |
| [basemana](#basemana) | int | unsigned |  | NO | 0 |  |  |
| [basearmor](#basearmor) | int | unsigned |  | NO | 1 |  |  |
| [attackpower](#attackpower) | smallint | unsigned |  | NO | 0 |  |  |
| [rangedattackpower](#rangedattackpower) | smallint | unsigned |  | NO | 0 |  |  |
| [damage_base](#damage_base) | float |  |  | NO | 0 |  |  |
| [damage_exp1](#damage_exp1) | float |  |  | NO | 0 |  |  |
| [damage_exp2](#damage_exp2) | float |  |  | NO | 0 |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### level
Level of the creature.
&nbsp;

### class
Class of the creature (referenced to [creature_template.unit_class](../world/creature_template#unit_class))
&nbsp;

### basehp0
Base health for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 0 (this value is multiplied by [creature_template.HealthModifier](../world/creature_template#healthmodifier) to determine the creature's final health).
&nbsp;

### basehp1
Base health for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 1 (this value is multiplied by [creature_template.HealthModifier](../world/creature_template#healthmodifier) to determine the creature's final health).
&nbsp;

### basehp2
Base health for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 2 (this value is multiplied by [creature_template.HealthModifier](../world/creature_template#healthmodifier) to determine the creature's final health).
&nbsp;

### basemana
Base mana for the creature (this value is multiplied by [creature_template.ManaModifier](../world/creature_template#manamodifier) to determine the creature's final mana.
&nbsp;

### basearmor
Base armor for the creature (this value is multiplied by [creature_template.ArmorModifier](../world/creature_template#armormodifier) to determine the creature's final armor.
&nbsp;

### attackpower
adds to melee base damage by: (attackpower / 14) * ([BaseAttackTime](../world/creatute_template#baseattacktime) / 1000)
&nbsp;

### rangedattackpower
adds to ranged base damage by: (rangedattackpower / 14) * ([RangeAttackTime](../world/creatute_template#rangeattacktime) / 1000)
&nbsp;

### damage_base
Base damage for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 0 (this value is multiplied by [creature_template.DamageModifier](../world/creature_template#damagemodifier) to determine the creature's final base damage).
&nbsp;

### damage_exp1
Base damage for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 1 (this value is multiplied by [creature_template.DamageModifier](../world/creature_template#damagemodifier) to determine the creature's final base damage).
&nbsp;

### damage_exp2
Base damage for the creature if [creature_template.exp](../world/creature_template#exp) value is set to 2 (this value is multiplied by [creature_template.DamageModifier](../world/creature_template#damagemodifier) to determine the creature's final base damage).
&nbsp;

### comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_default_trainer" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_default_trainer'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
