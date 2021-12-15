---
title: character_inventory
description: 
published: true
date: 2021-09-16T11:08:14.558Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:47.506Z
---

<a href="https://trinitycore.info/de/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains all the character inventory data, including the bank data.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | MUL | NO | 0 |  | Global Unique Identifier |
| [bag](#bag) | int(10) | unsigned |  | NO | 0 |  |  |
| [slot](#slot) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [item](#item) | int(10) | unsigned | PRI | NO | 0 |  | Item Global Unique Identifier |
&nbsp;
## Description of fields

### guid
The GUID of the character.
&nbsp;

### bag
If != 0, its the bags item GUID taken from [item_instance](/database/335/characters/item_instance) table.
&nbsp;

### slot
If the bag field is non-zero, then the slot is the slot in the bag where the item is kept. The range can differ depending on the number of slots the bag has.

If the bag field is zero, then the slot has a range of 0 to 130 and the value stands for the following:

Slot # | Value
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
19-22 | Equipped Bags
23-38 | Main Backpack
39-66 | Main Bank
67-73 | Bank Bags
86-117 | Keys in Keyring
118-135 | Currencies (Emblems, Badges, Marks, etc.)

&nbsp;

### item
The item GUID taken from [item_instance](/database/335/characters/item_instance) table.
&nbsp;

<a href="https://trinitycore.info/de/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

