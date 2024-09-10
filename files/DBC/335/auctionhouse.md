---
title: AuctionHouse.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/attackanimtypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AttackAnimTypes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/bankbagslotprices" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BankBagSlotPrices'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AuctionHouse.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AuctionHouse)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [FactionID](#factionid) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id-alt) |
| 2 | [DepositRate](#depositrate) | uint32 |  |
| 3 | [ConsignmentRate](#consignmentrate) | uint32 |  |
| 4 | [Name_0](#name-alt) | string |  |
| 5 | [Name_1](#name-alt) | string |  |
| 6 | [Name_2](#name-alt) | string |  |
| 7 | [Name_3](#name-alt) | string |  |
| 8 | [Name_4](#name-alt) | string |  |
| 9 | [Name_5](#name-alt) | string |  |
| 10 | [Name_6](#name-alt) | string |  |
| 11 | [Name_7](#name-alt) | string |  |
| 12 | [Name_8](#name-alt) | string |  |
| 13 | [Name_9](#name-alt) | string |  |
| 14 | [Name_10](#name-alt) | string |  |
| 15 | [Name_11](#name-alt) | string |  |
| 16 | [Name_12](#name-alt) | string |  |
| 17 | [Name_13](#name-alt) | string |  |
| 18 | [Name_14](#name-alt) | string |  |
| 19 | [Name_15](#name-alt) | string |  |
| 20 | [Name_lang_mask](#name-alt) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### FactionID
<code>Col: 1 (uint32)</code>

Player faction associated with city.
&nbsp;

### DepositRate
<code>Col: 2 (uint32)</code>

Used for deposit price calculation (minimum is always 1 silver). 1/3 from real.
&nbsp;

### ConsignmentRate
<code>Col: 3 (uint32)</code>

% of item's sell price cut from earnings.
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 4 &ndash; 20 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/attackanimtypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AttackAnimTypes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/bankbagslotprices" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BankBagSlotPrices'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
