---
title: item_refund_instance
description:
published: true
date: 2023-07-31T19:55:19.258Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:35.054Z
---

<a href="https://trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_loot_money'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_soulbound_trade_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_soulbound_trade_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table serves as a receipt of refundable purchases during a 2 hour ingame time window. It holds information on what currency was spent to purchase the item.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [item_guid](#item_guid) | int | unsigned | PRI | NO |  |  | Item GUID |
| [player_guid](#player_guid) | int | unsigned | PRI | NO |  |  | Player GUID |
| [paidMoney](#paidmoney) | int | unsigned |  | NO | 0 |  |  |
| [paidExtendedCost](#paidextendedcost) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### item_guid
references [item_instance.guid](../characters/item_instance#guid)
&nbsp;

### player_guid
The [character guid](../characters/characters#guid) eligible for the refund.
&nbsp;

### paidMoney
The amount of money (in copper) paid for the item.
&nbsp;

### paidExtendedCost
The [ItemExtendedCost ID](/files/DBC/335/itemextendedcost#id) that was paid for the item.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_loot_money'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_soulbound_trade_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_soulbound_trade_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
