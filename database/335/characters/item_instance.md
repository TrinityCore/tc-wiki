---
title: item_instance
description:
published: true
date: 2023-07-31T17:03:51.640Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:26.999Z
---

<a href="https://trinitycore.info/en/database/335/characters/instance_reset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_reset'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds individual item instance information for all items currently equipped in some kind of character bag or bank, in auctionhouses, in guild banks or in mails.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [itemEntry](#itementry) | mediumint | unsigned |  | NO | 0 |  |  |
| [owner_guid](#owner_guid) | int | unsigned | MUL | NO | 0 |  |  |
| [creatorGuid](#creatorguid) | int | unsigned |  | NO | 0 |  |  |
| [giftCreatorGuid](#giftcreatorguid) | int | unsigned |  | NO | 0 |  |  |
| [count](#count) | int | unsigned |  | NO | 1 |  |  |
| [duration](#duration) | int | signed |  | NO | 0 |  |  |
| [charges](#charges) | tinytext |  |  | YES | NULL |  |  |
| [flags](#flags) | mediumint | unsigned |  | NO | 0 |  |  |
| [enchantments](#enchantments) | text |  |  | NO |  |  |  |
| [randomPropertyId](#randompropertyid) | smallint | signed |  | NO | 0 |  |  |
| [durability](#durability) | smallint | unsigned |  | NO | 0 |  |  |
| [playedTime](#playedtime) | int | unsigned |  | NO | 0 |  |  |
| [text](#text) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the item. This number is unique for each item instance.
&nbsp;

### itemEntry
The [item entry](../world/item_template#entry) this copy was derived from.
&nbsp;

### owner_guid
The [character guid](../characters/characters#guid) who has ownership of this item.
&nbsp;

### creatorGuid
The [character guid](../characters/characters#guid) who created this item, if any.
Displayed on the bottom of an items tooltip.
&nbsp;

### giftCreatorGuid
The [character guid](../characters/characters#guid) who created this [gift](../characters/character_gifts), if any.
&nbsp;

### count
Current number of item copies out of [stackable](../world/item_template#stackable) in the stack.
&nbsp;

### duration
Remaining [item duration](../world/item_template#duration) in sec.
&nbsp;

### charges
The number of charges for each of the five possible [spellcharges](../world/item_template#spellcharges_[1-5]) on an item, specified via five space separated integers.
&nbsp;

### flags
`enum ItemFieldFlags` excerpt:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | ITEM_FIELD_FLAG_SOULBOUND | Item is soulbound and cannot be traded |
| 4 | 0x0004 | ITEM_FIELD_FLAG_UNLOCKED | Item had lock but can be opened now |
| 8 | 0x0008 | ITEM_FIELD_FLAG_WRAPPED | Item is wrapped and contains another item |
| 256 | 0x0100 | ITEM_FIELD_FLAG_BOP_TRADEABLE | Allows trading soulbound items |
| 512 | 0x0200 | ITEM_FIELD_FLAG_READABLE | Opens text page when right clicked |
| 4096 | 0x1000 | ITEM_FIELD_FLAG_REFUNDABLE | Item can be returned to vendor for its original cost (extended cost) |
{.dense}

&nbsp;

### enchantments
Stores all enchantments as 12 space separated 3-tuples of \[EnchantmentId duration charges\]. EnchantmentId is a [SpellItemEnchantment ID](/files/DBC/335/spellitemenchantment#id).
`enum EnchantmentSlot`
| ID | Name | Comment |
|----|------|---------|
| 0 | PERM_ENCHANTMENT_SLOT |  |
| 1 | TEMP_ENCHANTMENT_SLOT |  |
| 2 | SOCK_ENCHANTMENT_SLOT |  |
| 3 | SOCK_ENCHANTMENT_SLOT_2 |  |
| 4 | SOCK_ENCHANTMENT_SLOT_3 |  |
| 5 | BONUS_ENCHANTMENT_SLOT |  |
| 6 | PRISMATIC_ENCHANTMENT_SLOT | added at apply special permanent enchantment |
| 7 | PROP_ENCHANTMENT_SLOT_0 | used with RandomSuffix |
| 8 | PROP_ENCHANTMENT_SLOT_1 | used with RandomSuffix |
| 9 | PROP_ENCHANTMENT_SLOT_2 | used with RandomSuffix and RandomProperty |
| 10 | PROP_ENCHANTMENT_SLOT_3 | used with RandomProperty |
| 11 | PROP_ENCHANTMENT_SLOT_4 | used with RandomProperty |
{.dense}

&nbsp;

### randomPropertyId
* **randomPropertyId** > 0: [ItemRandomProperty ID](/files/DBC/335/itemrandomproperties#id)
* **randomPropertyId** < 0: [ItemRandomSuffix ID](/files/DBC/335/itemrandomsuffix#id)
&nbsp;

### durability
Remaining [item MaxDurability](../world/item_template#maxdurability).
&nbsp;

### playedTime
Stores the age of the item in seconds. (governs refundability)
&nbsp;

### text
Player composed text on readable item. (see [Plain Letter](https://aowow.trinitycore.info/?item=8383), created by mail system)
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/instance_reset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_reset'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
