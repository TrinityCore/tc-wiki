---
title: LockType.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/lock" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Lock'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/mailtemplate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'MailTemplate'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LockType.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=locktype&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LockType)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name_0](#name) | string |  |
| 2 | [Name_1](#name) | string |  |
| 3 | [Name_2](#name) | string |  |
| 4 | [Name_3](#name) | string |  |
| 5 | [Name_4](#name) | string |  |
| 6 | [Name_5](#name) | string |  |
| 7 | [Name_6](#name) | string |  |
| 8 | [Name_7](#name) | string |  |
| 9 | [Name_8](#name) | string |  |
| 10 | [Name_9](#name) | string |  |
| 11 | [Name_10](#name) | string |  |
| 12 | [Name_11](#name) | string |  |
| 13 | [Name_12](#name) | string |  |
| 14 | [Name_13](#name) | string |  |
| 15 | [Name_14](#name) | string |  |
| 16 | [Name_15](#name) | string |  |
| 17 | [Name_lang_mask](#name) | uint32 |  |
| 18 | [ResourceName_0](#resourcename) | string |  |
| 19 | [ResourceName_1](#resourcename) | string |  |
| 20 | [ResourceName_2](#resourcename) | string |  |
| 21 | [ResourceName_3](#resourcename) | string |  |
| 22 | [ResourceName_4](#resourcename) | string |  |
| 23 | [ResourceName_5](#resourcename) | string |  |
| 24 | [ResourceName_6](#resourcename) | string |  |
| 25 | [ResourceName_7](#resourcename) | string |  |
| 26 | [ResourceName_8](#resourcename) | string |  |
| 27 | [ResourceName_9](#resourcename) | string |  |
| 28 | [ResourceName_10](#resourcename) | string |  |
| 29 | [ResourceName_11](#resourcename) | string |  |
| 30 | [ResourceName_12](#resourcename) | string |  |
| 31 | [ResourceName_13](#resourcename) | string |  |
| 32 | [ResourceName_14](#resourcename) | string |  |
| 33 | [ResourceName_15](#resourcename) | string |  |
| 34 | [ResourceName_lang_mask](#resourcename) | uint32 |  |
| 35 | [Verb_0](#verb) | string |  |
| 36 | [Verb_1](#verb) | string |  |
| 37 | [Verb_2](#verb) | string |  |
| 38 | [Verb_3](#verb) | string |  |
| 39 | [Verb_4](#verb) | string |  |
| 40 | [Verb_5](#verb) | string |  |
| 41 | [Verb_6](#verb) | string |  |
| 42 | [Verb_7](#verb) | string |  |
| 43 | [Verb_8](#verb) | string |  |
| 44 | [Verb_9](#verb) | string |  |
| 45 | [Verb_10](#verb) | string |  |
| 46 | [Verb_11](#verb) | string |  |
| 47 | [Verb_12](#verb) | string |  |
| 48 | [Verb_13](#verb) | string |  |
| 49 | [Verb_14](#verb) | string |  |
| 50 | [Verb_15](#verb) | string |  |
| 51 | [Verb_lang_mask](#verb) | uint32 |  |
| 52 | [CursorName](#cursorname) | string |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### ResouceName
:x: <code>Col: 18 &ndash; 34 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Verb
:x: <code>Col: 35 &ndash; 51 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### CursorName
:x: <code>Col: 52 (string)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/lock" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Lock'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/mailtemplate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'MailTemplate'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
