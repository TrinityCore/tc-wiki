---
title: character_inventory
description: 
published: true
date: 2023-07-27T19:51:14.560Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:47.506Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains all the character inventory data, including the bank data.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  | Global Unique Identifier |
| [bag](#bag) | int | unsigned |  | NO | 0 |  |  |
| [slot](#slot) | tinyint | unsigned |  | NO | 0 |  |  |
| [item](#item) | int | unsigned | PRI | NO | 0 |  | Item Global Unique Identifier |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### bag
* **bag** = 0: **item** is equipped, in basic backpack, in basic bank, on keyring or similar.
* **bag** > 0: This is the [item guid](../characters/item_instance#guid) of the container where **item** it kept.
&nbsp;

### slot
* **bag** > 0: the slot in the **bag** where the **item** is kept. (0 – ([ContainerSlots](../world/item_template#containerslots) - 1))
* **bag** = 0: slot from INVENTORY_SLOT_BAG_0 as described by the table below:

Slot # | Description
-- | --
0 | Head
1 | Neck
2 | Shoulders
3 | Body
4 | Chest
5 | Waist
6 | Legs
7 | Feet
8 | Wrists
9 | Hands
10 | Finger 1
11 | Finger 2
12 | Trinket 1
13 | Trinket 2
14 | Back
15 | Main Hand
16 | Off Hand
17 | Ranged
18 | Tabard
19 – 22 | Bags equipped on Character
23 – 38 | Main Backpack
39 – 66 | Main Bank
67 – 73 | Bags equipped on Bank
74 – 85 | Vendor Buyback Slots
86 – 117 | Keys in Keyring
118 – 149 | Currencies (Emblems, Badges, Marks, etc.)
{.dense}

&nbsp;

### item
The [item guid](../characters/item_instance#guid) in inventory.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
