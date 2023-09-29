---
title: OverrideSpellData.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/objecteffectpackageelem" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ObjectEffectPackageElem'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/package" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Package'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# OverrideSpellData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=overridespelldata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/OverrideSpellData)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Spells_0](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 2 | [Spells_1](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 3 | [Spells_2](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 4 | [Spells_3](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 5 | [Spells_4](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 6 | [Spells_5](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 7 | [Spells_6](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 8 | [Spells_7](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 9 | [Spells_8](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 10 | [Spells_9](#spells) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 11 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Spells
<code>Col: 1 &ndash; 10 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 11 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x1 | can use items |
| 4 | 0x4 | can cast other spells |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/objecteffectpackageelem" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ObjectEffectPackageElem'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/package" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Package'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
