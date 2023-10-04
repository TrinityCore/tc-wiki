---
title: spell_bonus_data
description:
published: true
date: 2023-07-20T22:22:54.555Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:20.855Z
---

<a href="https://trinitycore.info/en/database/335/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_area'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_custom_attr'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Table used for storing custom damage/healing bonus coefficients.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [direct_bonus](#direct_bonus) | float |  |  | NO | 0 |  |  |
| [dot_bonus](#dot_bonus) | float |  |  | NO | 0 |  |  |
| [ap_bonus](#ap_bonus) | float |  |  | NO | 0 |  |  |
| [ap_dot_bonus](#ap_dot_bonus) | float |  |  | NO | 0 |  |  |
| [comments](#comments) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
references [Spell ID](/files/DBC/335/spell#id)
Only the first rank of the spell needs data if spell exists in [spell_ranks](../world/spell_ranks) and coefficients are the same for each rank.
&nbsp;

### direct_bonus
Spell Power coefficient for the direct damage/healing component of the spell.
&nbsp;

### dot_bonus
Spell Power coefficient for the over time component of the spell.
&nbsp;

### ap_bonus
Attack Power coefficient for the direct damage/healing component of the spell.
&nbsp;

### ap_dot_bonus
Attack Power coefficient for the over time component of the spell.
&nbsp;

#### for all fields:
* `0 <= bonus <= 1`: 0%  – 100% scaling
* `-1`: Uses generic scaling depending on cast time and aura duration.

&nbsp;

### comments
commonly: Spell User – Spell Name
e.g.: `Item - Onyxia 10 Caster Trinket - Searing Flames`
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_area'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_custom_attr'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
