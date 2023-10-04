---
title: BannedAddOns.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/bankbagslotprices" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BankBagSlotPrices'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/barbershopstyle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BarberShopStyle'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# BannedAddOns.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=bannedaddons&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/BannedAddOns)
&nbsp;

Extended by [banned_addons](/database/335/characters/banned_addons) table.

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [NameMD5_0](#namemd5) | uint32 |  |
| 2 | [NameMD5_1](#namemd5) | uint32 |  |
| 3 | [NameMD5_2](#namemd5) | uint32 |  |
| 4 | [NameMD5_3](#namemd5) | uint32 |  |
| 5 | [VersionMD5_0](#versionmd5) | uint32 |  |
| 6 | [VersionMD5_1](#versionmd5) | uint32 |  |
| 7 | [VersionMD5_2](#versionmd5) | uint32 |  |
| 8 | [VersionMD5_3](#versionmd5) | uint32 |  |
| 9 | [LastModified](#lastmodified) | uint32 |  |
| 10 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### NameMD5
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

MD5 of the toc Title tag.
&nbsp;

### VersionMD5
:x: <code>Col: 5 &ndash; 8 (uint32)</code>

MD5 of the toc Version tag.
&nbsp;

### LastModified
:x: <code>Col: 9 (uint32)</code>

In unix time.
&nbsp;

### Flags
:x: <code>Col: 10 (uint32)</code>

always `2`

Entries without this flag are ignored in FindBannedAddOn.
*&nbsp;

<a href="https://trinitycore.info/files/DBC/335/bankbagslotprices" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BankBagSlotPrices'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/barbershopstyle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'BarberShopStyle'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
