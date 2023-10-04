---
title: CreatureSpellData.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/creaturesounddata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureSoundData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturetype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureType'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureSpellData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturespelldata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureSpellData)
&nbsp;

It determines information on what spells pets will have after they are tamed by Hunters.

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Spells_0](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id); [spell Id](/database/335/world/spell_dbc#id) |
| 2 | [Spells_1](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id); [spell Id](/database/335/world/spell_dbc#id) |
| 3 | [Spells_2](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id); [spell Id](/database/335/world/spell_dbc#id) |
| 4 | [Spells_3](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id); [spell Id](/database/335/world/spell_dbc#id) |
| 5 | [Availability_0](#availability) | uint32 |  |
| 6 | [Availability_1](#availability) | uint32 |  |
| 7 | [Availability_2](#availability) | uint32 |  |
| 8 | [Availability_3](#availability) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Spells
<code>Col: 1 &ndash; 4 (uint32)</code>

*- no description -*
&nbsp;

### Availability
:x: <code>Col: 5 &ndash; 8 (uint32)</code>

Divide by 10 to get in seconds.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturesounddata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureSoundData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturetype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureType'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
