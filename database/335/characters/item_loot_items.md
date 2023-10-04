---
title: item_loot_items
description:
published: true
date: 2023-07-31T19:31:11.812Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:29.745Z
---

<a href="https://trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_money'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains the items associated with a [lootable container item](https://aowow.trinitycore.info/?items&filter=cr=11;crs=1;crv=0).
>
> This table is populated the first time the player right-clicks to open an item. Rows are deleted when the player either removes an item or destroys the container item.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [container_id](#container_id) | int | unsigned |  | NO | 0 |  | guid of container (item_instance.guid) |
| [item_id](#item_id) | int | unsigned |  | NO | 0 |  | loot item entry (item_instance.itemEntry) |
| [item_count](#item_count) | int | signed |  | NO | 0 |  | stack size |
| [item_index](#item_index) | int | unsigned |  | NO | 0 |  |  |
| [follow_rules](#follow_rules) | tinyint(1) | signed |  | NO | 0 |  | follow loot rules |
| [ffa](#ffa) | tinyint(1) | signed |  | NO | 0 |  | free-for-all |
| [blocked](#blocked) | tinyint(1) | signed |  | NO | 0 |  |  |
| [counted](#counted) | tinyint(1) | signed |  | NO | 0 |  |  |
| [under_threshold](#under_threshold) | tinyint(1) | signed |  | NO | 0 |  |  |
| [needs_quest](#needs_quest) | tinyint(1) | signed |  | NO | 0 |  | quest drop |
| [rnd_prop](#rnd_prop) | int | signed |  | NO | 0 |  | random enchantment added when originally rolled |
| [rnd_suffix](#rnd_suffix) | int | signed |  | NO | 0 |  | random suffix added when originally rolled |
&nbsp;
## Description of fields

### container_id
The [item guid](../characters/item_instance#guid) of the container that holds the loot item(s).

> Note: A **container_id** can have more than one **item_id** associated with it.
{.is-info}

&nbsp;

### item_id
The [item entry](../world/item_template#entry) of the loot item.

> Note: It is possible for there to be more than one of the same item in a container.
{.is-info}

&nbsp;

### item_count
The stack size of the item.
(**item_count** <= [stackable](../world/item_template#stackable))
&nbsp;

### item_index
The items position in loot window.
&nbsp;

### follow_rules
Flag to determine if the core should apply additional loot rules when the item is removed from the container.
* 0: no extra conditions
* 1: if player is in a group apply its loot rules
&nbsp;

### ffa
Flag to determine if free-for-all looting applies. This should typically be 0 because the items are inside an item in the character's inventory.
* 0: container owner also owns its' content
* 1: container owners party also rolls for loot
&nbsp;

### blocked
Flag to determine if the item can be looted directly?
* 0: can be taken directly from container?
* 1: must be rolled for or assigned by master looter?
&nbsp;

### counted
Flag if item is counted towards loot content? Quest loot or unfulfilled [conditions](../world/conditions) may hide an item from the looter.
* 0: item is not visible in loot
* 1: can be looted
&nbsp;

### under_threshold
The item is below the quality threshold and can be looted normally?
* 0: looting is blocked
* 1: can be looted
&nbsp;

### needs_quest
Flag to determine if the item is a quest item to be counted as a "quest drop".
* 0: not a quest drop
* 1: considered a quest drop
&nbsp;

### rnd_prop
[ItemRandomProperty ID](/files/DBC/335/itemrandomproperties#id) (if any) that was rolled and added to the item when the loot container was originally opened.
Mutually exclusive with **rnd_suffix**.
&nbsp;

### rnd_suffix
[ItemRandomSuffix ID](/files/DBC/335/itemrandomsuffix#id) (if any) that was rolled and added to the item when the loot container was originally opened.
Mutually exclusive with **rnd_prop**.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_money'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
