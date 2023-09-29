---
title: Cfg_Categories.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/camerashakes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CameraShakes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cfg_configs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Cfg_Configs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Cfg_Categories.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=cfg_categories&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Cfg_Categories)
&nbsp;

Links to [realmlist.timezone](/database/335/auth/realmlist#timezone)

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [LocaleMask](#localemask) | uint32 | [Loc](/how-to/localization) |
| 2 | [CharsetMask](#charsetmask) | uint32 |  |
| 3 | [Flags](#flags) | uint32 |  |
| 4 | [Name_0](#name) | string |  |
| 5 | [Name_1](#name) | string |  |
| 6 | [Name_2](#name) | string |  |
| 7 | [Name_3](#name) | string |  |
| 8 | [Name_4](#name) | string |  |
| 9 | [Name_5](#name) | string |  |
| 10 | [Name_6](#name) | string |  |
| 11 | [Name_7](#name) | string |  |
| 12 | [Name_8](#name) | string |  |
| 13 | [Name_9](#name) | string |  |
| 14 | [Name_10](#name) | string |  |
| 15 | [Name_11](#name) | string |  |
| 16 | [Name_12](#name) | string |  |
| 17 | [Name_13](#name) | string |  |
| 18 | [Name_14](#name) | string |  |
| 19 | [Name_15](#name) | string |  |
| 20 | [Name_lang_mask](#name) | uint32 |  |

&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### LocaleMask
:x: <code>Col: 1 (uint32)</code>

Mask of localeIDs allowed to connect.
&nbsp;

### CharsetMask
:x: <code>Col: 2 (uint32)</code>

* 1: Western
* 4: Cyrillic script
* 10: Hangul (Korean glyphs)
* 17: Mandarin (Chinese/Taiwanese glyphs)
&nbsp;

### Flags
:x: <code>Col: 3 (uint32)</code>

* 1: you need tournaments enabled on you account.
&nbsp;

### Name
:x: <code>Col: 4 &ndash; 20 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/camerashakes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CameraShakes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cfg_configs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Cfg_Configs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
