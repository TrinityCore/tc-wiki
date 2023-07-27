---
title: character_gifts
description: 
published: true
date: 2023-07-27T18:12:58.518Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:36.947Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_fishingsteps'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_glyphs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_glyphs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds data about wrapped/gift items.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  |  |
| [item_guid](#item_guid) | int | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### item_guid
The [item guid](../characters/item_instance#guid) of the wrapped item.
&nbsp;

### entry
The [item entry](../world/item_template#entry) of the wrapped item.
&nbsp;

### flags
ITEM_FIELD_FLAGS of the wrapped item.

excerpt:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | ITEM_FIELD_FLAG_SOULBOUND | Item is soulbound and cannot be traded |
| 4 | 0x00000004 | ITEM_FIELD_FLAG_UNLOCKED | Item had lock but can be opened now |
| 8 | 0x00000008 | ITEM_FIELD_FLAG_WRAPPED | Item is wrapped and contains another item |
| 256 | 0x00000100 | ITEM_FIELD_FLAG_BOP_TRADEABLE | Allows trading soulbound items |
| 512 | 0x00000200 | ITEM_FIELD_FLAG_READABLE | Opens text page when right clicked |
| 4096 | 0x00001000 | ITEM_FIELD_FLAG_REFUNDABLE | Item can be returned to vendor for its original cost (extended cost) |
| 262144 | 0x00040000 | ITEM_FIELD_FLAG_UNK13 | ? |
| 524288 | 0x00080000 | ITEM_FIELD_FLAG_UNK14 | ? |
| 786944 | 0x000C0200 | ITEM_FLAG_MAIL_TEXT_MASK |  |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_fishingsteps'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_glyphs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_glyphs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
