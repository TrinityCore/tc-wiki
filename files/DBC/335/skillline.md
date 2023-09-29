---
title: SkillLine.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/skillcostsdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillCostsData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilllineability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillLineAbility'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SkillLine.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=skillline&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SkillLine)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [CategoryID](#categoryid) | int32 | [SkillLineCategory.dbc/0](/files/DBC/335/skilllinecategory#id) |
| 2 | [SkillCostsID](#skillcostsid) | uint32 | [SkillCostsData.dbc/1](/files/DBC/335/skillcostsdata#skillcostid) |
| 3 | [DisplayName_0](#displayname) | string |  |
| 4 | [DisplayName_1](#displayname) | string |  |
| 5 | [DisplayName_2](#displayname) | string |  |
| 6 | [DisplayName_3](#displayname) | string |  |
| 7 | [DisplayName_4](#displayname) | string |  |
| 8 | [DisplayName_5](#displayname) | string |  |
| 9 | [DisplayName_6](#displayname) | string |  |
| 10 | [DisplayName_7](#displayname) | string |  |
| 11 | [DisplayName_8](#displayname) | string |  |
| 12 | [DisplayName_9](#displayname) | string |  |
| 13 | [DisplayName_10](#displayname) | string |  |
| 14 | [DisplayName_11](#displayname) | string |  |
| 15 | [DisplayName_12](#displayname) | string |  |
| 16 | [DisplayName_13](#displayname) | string |  |
| 17 | [DisplayName_14](#displayname) | string |  |
| 18 | [DisplayName_15](#displayname) | string |  |
| 19 | [DisplayName_lang_mask](#displayname) | uint32 |  |
| 20 | [Description_0](#description) | string |  |
| 21 | [Description_1](#description) | string |  |
| 22 | [Description_2](#description) | string |  |
| 23 | [Description_3](#description) | string |  |
| 24 | [Description_4](#description) | string |  |
| 25 | [Description_5](#description) | string |  |
| 26 | [Description_6](#description) | string |  |
| 27 | [Description_7](#description) | string |  |
| 28 | [Description_8](#description) | string |  |
| 29 | [Description_9](#description) | string |  |
| 30 | [Description_10](#description) | string |  |
| 31 | [Description_11](#description) | string |  |
| 32 | [Description_12](#description) | string |  |
| 33 | [Description_13](#description) | string |  |
| 34 | [Description_14](#description) | string |  |
| 35 | [Description_15](#description) | string |  |
| 36 | [Description_lang_mask](#description) | uint32 |  |
| 37 | [SpellIconID](#spelliconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
| 38 | [AlternateVerb_0](#alternateverb) | string |  |
| 39 | [AlternateVerb_1](#alternateverb) | string |  |
| 40 | [AlternateVerb_2](#alternateverb) | string |  |
| 41 | [AlternateVerb_3](#alternateverb) | string |  |
| 42 | [AlternateVerb_4](#alternateverb) | string |  |
| 43 | [AlternateVerb_5](#alternateverb) | string |  |
| 44 | [AlternateVerb_6](#alternateverb) | string |  |
| 45 | [AlternateVerb_7](#alternateverb) | string |  |
| 46 | [AlternateVerb_8](#alternateverb) | string |  |
| 47 | [AlternateVerb_9](#alternateverb) | string |  |
| 48 | [AlternateVerb_10](#alternateverb) | string |  |
| 49 | [AlternateVerb_11](#alternateverb) | string |  |
| 50 | [AlternateVerb_12](#alternateverb) | string |  |
| 51 | [AlternateVerb_13](#alternateverb) | string |  |
| 52 | [AlternateVerb_14](#alternateverb) | string |  |
| 53 | [AlternateVerb_15](#alternateverb) | string |  |
| 54 | [AlternateVerb_lang_mask](#alternateverb) | uint32 |  |
| 55 | [CanLink](#canlink) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### CategoryID
<code>Col: 1 (int32)</code>

*- no description -*
&nbsp;

### SkillCostsID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### DisplayName
<code>Col: 3 &ndash; 19 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 20 &ndash; 36 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### SpellIconID
<code>Col: 37 (uint32)</code>

*- no description -*
&nbsp;

### AlternateVerb
:x: <code>Col: 38 &ndash; 54 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### CanLink
<code>Col: 55 (bool)</code>

Can generate TradeSkilLink.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/skillcostsdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillCostsData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilllineability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillLineAbility'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
