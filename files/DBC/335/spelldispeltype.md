---
title: SpellDispelType.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spelldifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellDifficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellduration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellDuration'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellDispelType.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spelldispeltype&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellDispelType)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Name_0](#name-alt) | string |  |
| 2 | [Name_1](#name-alt) | string |  |
| 3 | [Name_2](#name-alt) | string |  |
| 4 | [Name_3](#name-alt) | string |  |
| 5 | [Name_4](#name-alt) | string |  |
| 6 | [Name_5](#name-alt) | string |  |
| 7 | [Name_6](#name-alt) | string |  |
| 8 | [Name_7](#name-alt) | string |  |
| 9 | [Name_8](#name-alt) | string |  |
| 10 | [Name_9](#name-alt) | string |  |
| 11 | [Name_10](#name-alt) | string |  |
| 12 | [Name_11](#name-alt) | string |  |
| 13 | [Name_12](#name-alt) | string |  |
| 14 | [Name_13](#name-alt) | string |  |
| 15 | [Name_14](#name-alt) | string |  |
| 16 | [Name_15](#name-alt) | string |  |
| 17 | [Name_lang_mask](#name-alt) | uint32 |  |
| 18 | [Mask](#mask) | uint32 |  |
| 19 | [ImmunityPossible](#immunitypossible) | uint32 |  |
| 20 | [InternalName](#internalname) | uint32 |  |

&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Mask
:x: <code>Col: 0 (uint32)</code>

<code>**Mask** |= 1 << (**ID** - 1)</code>
&nbsp;

### ImmunityPossible
:x: <code>Col: 0 (bool)</code>

*- no description -*
&nbsp;

### InternalName
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spelldifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellDifficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellduration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellDuration'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
