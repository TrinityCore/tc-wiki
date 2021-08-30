---
title: auctionhouse
description: 
published: true
date: 2021-08-30T08:25:16.553Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:16:31.153Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/auction_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'auction_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/blackmarket_auctions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'blackmarket_auctions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [auctionHouseId](#auctionHouseId) | int(10) | unsigned |  | NO | 0 |  |  |
| [owner](#owner) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [bidder](#bidder) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [minBid](#minBid) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [buyoutOrUnitPrice](#buyoutOrUnitPrice) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [deposit](#deposit) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [bidAmount](#bidAmount) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [startTime](#startTime) | bigint(20) | signed |  | NO | 0 |  |  |
| [endTime](#endTime) | bigint(20) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### auctionHouseId
*- no description -*
&nbsp;

### owner
*- no description -*
&nbsp;

### bidder
*- no description -*
&nbsp;

### minBid
*- no description -*
&nbsp;

### buyoutOrUnitPrice
*- no description -*
&nbsp;

### deposit
*- no description -*
&nbsp;

### bidAmount
*- no description -*
&nbsp;

### startTime
*- no description -*
&nbsp;

### endTime
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/characters/auction_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'auction_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/blackmarket_auctions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'blackmarket_auctions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

