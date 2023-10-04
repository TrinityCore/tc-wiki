---
title: game_event_npc_vendor
description:
published: true
date: 2023-07-09T18:14:21.641Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:49.921Z
---

<a href="https://trinitycore.info/en/database/335/world/game_event_model_equip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_model_equip'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_npcflag" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npcflag'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table allows you to change the items a vendor sells, or to create a [vendor](../world/npc_vendor) list for an NPC who does not sell items unless an event is active.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. |
| [guid](#guid) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | smallint | signed | MUL | NO | 0 |  |  |
| [item](#item) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [maxcount](#maxcount) | mediumint | unsigned |  | NO | 0 |  |  |
| [incrtime](#incrtime) | mediumint | unsigned |  | NO | 0 |  |  |
| [ExtendedCost](#extendedcost) | mediumint | unsigned |  | NO | 0 |  |  |
&nbsp;

## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event/#evententry)
&nbsp;

### guid
This is the [guid](../world/creature#guid) of the NPC that you wish to create a vendor list for.
&nbsp;

### slot
Position of the item when the vendor window opens (order from top-left to bottom.right of the window with values 0 and then 1,2,3,etc).
&nbsp;

### item
Refers to to the [item_template.entry](../world/item_template/#entry) of the item being sold.
&nbsp;

### maxcount
The maximum number of copies of the item the vendor has available to be sold before **incrtime** is up. If 0, then it is an unlimited number of copies.
&nbsp;

### incrtime
Combined with **maxcount**, this field tells how often (in seconds) the vendor list is refreshed and the limited item copies are restocked. For limited item copies, every refresh, the quantity is increased by the items [BuyCount](../world/item_template#buycount).
&nbsp;

### ExtendedCost
The value here corresponds to an [ItemExtendedCost ID](/files/DBC/335/itemextendedcost#id) and that ID controls the item's non monetary price, be it honor points, arena points, different types of badges or any combination of the above.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_event_model_equip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_model_equip'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_npcflag" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npcflag'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
