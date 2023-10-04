---
title: ItemExtendedCost.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemdisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemDisplayInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemgroupsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemGroupSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemExtendedCost.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemextendedcost&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemExtendedCost)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [HonorPoints](#honorpoints) | uint32 |  |
| 2 | [ArenaPoints](#arenapoints) | uint32 |  |
| 3 | [ArenaBracket](#arenabracket) | uint32 |  |
| 4 | [ItemID_0](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 5 | [ItemID_1](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 6 | [ItemID_2](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 7 | [ItemID_3](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 8 | [ItemID_4](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 9 | [ItemCount_0](#itemcount) | uint32 |  |
| 10 | [ItemCount_1](#itemcount) | uint32 |  |
| 11 | [ItemCount_2](#itemcount) | uint32 |  |
| 12 | [ItemCount_3](#itemcount) | uint32 |  |
| 13 | [ItemCount_4](#itemcount) | uint32 |  |
| 14 | [RequiredArenaRating](#requiredarenarating) | uint32 |  |
| 15 | [ItemPurchaseGroup](#itempurchasegroup) | uint32 | [ItemPurchaseGroup.dbc/0](/files/DBC/335/itempurchasegroup#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### HonorPoints
<code>Col: 1 (uint32)</code>

Required honor points.
&nbsp;

### ArenaPoints
<code>Col: 2 (uint32)</code>

Required arena points.
&nbsp;

### ArenaBracket
<code>Col: 3 (uint32)</code>

Arena slot restrictions. (min slot value)
&nbsp;

### ItemID
<code>Col: 4 &ndash; 8 (uint32)</code>

Required [item entry](/database/335/world/item_template#id)
&nbsp;

### ItemCount
<code>Col: 9 &ndash; 13 (uint32)</code>

Required count of item.
&nbsp;

### RequiredArenaRating
<code>Col: 14 (uint32)</code>

Required personal arena rating.
&nbsp;

### ItemPurchaseGroup
:x: <code>Col: 15 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemdisplayinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemDisplayInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemgroupsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemGroupSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
