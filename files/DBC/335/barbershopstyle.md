---
title: BarberShopStyle.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/bannedaddons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BannedAddOns'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/battlemasterlist" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BattlemasterList'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# BarberShopStyle.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=barbershopstyle&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/BarberShopStyle)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Type](#type) | uint32 |  |
| 2 | [DisplayName_0](#displayname) | string |  |
| 3 | [DisplayName_1](#displayname) | string |  |
| 4 | [DisplayName_2](#displayname) | string |  |
| 5 | [DisplayName_3](#displayname) | string |  |
| 6 | [DisplayName_4](#displayname) | string |  |
| 7 | [DisplayName_5](#displayname) | string |  |
| 8 | [DisplayName_6](#displayname) | string |  |
| 9 | [DisplayName_7](#displayname) | string |  |
| 10 | [DisplayName_8](#displayname) | string |  |
| 11 | [DisplayName_9](#displayname) | string |  |
| 12 | [DisplayName_10](#displayname) | string |  |
| 13 | [DisplayName_11](#displayname) | string |  |
| 14 | [DisplayName_12](#displayname) | string |  |
| 15 | [DisplayName_13](#displayname) | string |  |
| 16 | [DisplayName_14](#displayname) | string |  |
| 17 | [DisplayName_15](#displayname) | string |  |
| 18 | [DisplayName_lang_mask](#displayname) | uint32 |  |
| 19 | [Description_0](#description) | string |  |
| 20 | [Description_1](#description) | string |  |
| 21 | [Description_2](#description) | string |  |
| 22 | [Description_3](#description) | string |  |
| 23 | [Description_4](#description) | string |  |
| 24 | [Description_5](#description) | string |  |
| 25 | [Description_6](#description) | string |  |
| 26 | [Description_7](#description) | string |  |
| 27 | [Description_8](#description) | string |  |
| 28 | [Description_9](#description) | string |  |
| 29 | [Description_10](#description) | string |  |
| 30 | [Description_11](#description) | string |  |
| 31 | [Description_12](#description) | string |  |
| 32 | [Description_13](#description) | string |  |
| 33 | [Description_14](#description) | string |  |
| 34 | [Description_15](#description) | string |  |
| 35 | [Description_lang_mask](#description) | uint32 |  |
| 36 | [CostModifier](#costmodifier) | float |  |
| 37 | [Race](#race) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 38 | [Sex](#sex) | uint32 |  |
| 39 | [Data](#data) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Type
<code>Col: 1 (uint32)</code>

* 0: Hair Style
* 1: Hair Color
* 2: Facial Hairstyle
* 3: Unknown
* 4: Face
&nbsp;

### DisplayName
:x: <code>Col: 2 &ndash; 18 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 19 &ndash; 35 ([Loc](/how-to/localization))</code>

all empty
&nbsp;

### CostModifier
:x: <code>Col: 36 (float)</code>

* 0.75 for facials
* 1.0 for hair
&nbsp;

### Race
<code>Col: 37 (uint32)</code>

*- no description -*
&nbsp;

### Sex
<code>Col: 38 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### Data
<code>Col: 39 (uint32)</code>

Real ID to hair/facial hair.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/bannedaddons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BannedAddOns'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/battlemasterlist" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BattlemasterList'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
