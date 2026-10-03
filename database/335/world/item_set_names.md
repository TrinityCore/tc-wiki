---
title: item_set_names
description: 
published: true
date: 2024-05-16T11:19:33.025Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:06.438Z
---

This table contains the item names displayed in an items tooltip in the itemset overview.
Yes those names can be different from the actual item.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO |  |  |  |
| [name](#name-alt) | varchar(255) |  |  | NO | '' |  |  |
| [InventoryType](#inventorytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### entry
An [item_template.entry](../world/item_template#entry) that must be present in [ItemSet](/files/DBC/335/itemset)
&nbsp;

### name {#name-alt}
Name to be displayed
&nbsp;

### InventoryType

<!--@include: @/partial/335/inventory-type.md-->

&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;
