---
title: npc_vendor
description: 
published: true
date: 2025-07-13T14:08:07.228Z
tags: 
editor: markdown
dateCreated: 2021-08-30T22:06:42.885Z
---

This table holds the vendor data for all NPCs that sell items and currency. The price for each item or currency is in its item template as [BuyPrice](../world/item_template#buyprice) or **ExtendedCost**.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | smallint | signed | MUL | NO | 0 |  |  |
| [item](#item) | int | signed | PRI | NO | 0 |  |  |
| [maxcount](#maxcount) | tinyint | unsigned |  | NO | 0 |  |  |
| [incrtime](#incrtime) | int | unsigned |  | NO | 0 |  |  |
| [ExtendedCost](#extendedcost) | int | unsigned | PRI | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
This is the [entry](../world/creature_template#entry) of the NPC that you wish to create a vendor list for.
&nbsp;

### slot
Position of the item when the vendor window opens (order from top-left to bottom.right of the window with values 0 and then 1,2,3,etc).
&nbsp;

### item
* **item** > 0:
	Refers to to the [item_template.entry](../world/item_template#entry) of the item being sold.
* **item** < 0:
  **-item** is another **entry**, allowing for shared vendor listing definitions.
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

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

