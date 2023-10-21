---
title: spell_pet_auras
description: 
published: true
date: 2022-11-21T21:09:17.214Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:08.855Z
---

<a href="https://trinitycore.info/en/database/master/world/spell_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_proc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_proc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell](#spell) | int | unsigned | PRI | NO |  |  | dummy spell id |
| [effectId](#effectid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [pet](#pet) | int | unsigned | PRI | NO | 0 |  | pet id; 0 = all |
| [aura](#aura) | int | unsigned |  | NO |  |  | pet aura id |
&nbsp;
## Description of fields

### spell
Dummy [Spell ID](https://wow.tools/dbc/?dbc=spell).
On the selected **effectId** it must either have SPELL_EFFECT_DUMMY (3) or apply a SPELL_AURA_DUMMY (4).
&nbsp;

### effectId
Effect Index of **spell** to link **aura** to: (0 – 2)
&nbsp;

### pet
If set, **aura** is only applied to this [creature entry](../world/creature_template#entry).
&nbsp;

### aura
[Spell ID](https://wow.tools/dbc/?dbc=spell) with the actual effects described by **spell**.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/spell_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_proc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_proc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

