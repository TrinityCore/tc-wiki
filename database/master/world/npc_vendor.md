---
title: npc_vendor
description: 
published: true
date: 2022-11-21T21:06:28.323Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:11.088Z
---

<a href="https://trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'outdoorpvp_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | smallint | signed | MUL | NO | 0 |  |  |
| [item](#item) | int | signed | PRI | NO | 0 |  |  |
| [maxcount](#maxcount) | int | unsigned |  | NO | 0 |  |  |
| [incrtime](#incrtime) | int | unsigned |  | NO | 0 |  |  |
| [ExtendedCost](#extendedcost) | int | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 1 |  |  |
| [BonusListIDs](#bonuslistids) | mediumtext |  |  | YES | NULL |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [IgnoreFiltering](#ignorefiltering) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
This is the [entry](../world/creature_template#entry) of the NPC that you wish to create a vendor list for.
&nbsp;

### slot
Position of the item when the vendor window opens (order from top-left to bottom.right of the window with values 0 and then 1,2,3,etc).
&nbsp;

### item
Refers to to the [ItemID](https://wow.tools/dbc/?dbc=itemsparse) of the item being sold.
&nbsp;

### maxcount
The maximum number of copies of the item the vendor has available to be sold before **incrtime** is up. If 0, then it is an unlimited number of copies.
&nbsp;

### incrtime
Combined with **maxcount**, this field tells how often (in seconds) the vendor list is refreshed and the limited item copies are restocked. For limited item copies, every refresh, the quantity is increased by the items [BuyCount](../world/item_template#buycount).
&nbsp;

### ExtendedCost
The value here corresponds to an [ItemExtendedCost ID](https://wow.tools/dbc/?dbc=itemextendedcost) and that ID controls the item's non monetary price, be it honor points, arena points, different types of badges or any combination of the above.
&nbsp;

### type
*- no description -*
&nbsp;

### BonusListIDs
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### IgnoreFiltering
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'outdoorpvp_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

