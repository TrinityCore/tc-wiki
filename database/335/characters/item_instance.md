---
title: item_instance
description: 
published: true
date: 2021-08-30T22:00:42.137Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/characters/instance_reset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_reset'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [itemEntry](#itementry) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [owner_guid](#owner_guid) | int(10) | unsigned | MUL | NO | 0 |  |  |
| [creatorGuid](#creatorguid) | int(10) | unsigned |  | NO | 0 |  |  |
| [giftCreatorGuid](#giftcreatorguid) | int(10) | unsigned |  | NO | 0 |  |  |
| [count](#count) | int(10) | unsigned |  | NO | 1 |  |  |
| [duration](#duration) | int(10) | signed |  | NO | 0 |  |  |
| [charges](#charges) | tinytext |  |  | YES | NULL |  |  |
| [flags](#flags) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [enchantments](#enchantments) | text |  |  | NO |  |  |  |
| [randomPropertyId](#randompropertyid) | smallint(5) | signed |  | NO | 0 |  |  |
| [durability](#durability) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [playedTime](#playedtime) | int(10) | unsigned |  | NO | 0 |  |  |
| [text](#text) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### itemEntry
*- no description -*
&nbsp;

### owner_guid
*- no description -*
&nbsp;

### creatorGuid
*- no description -*
&nbsp;

### giftCreatorGuid
*- no description -*
&nbsp;

### count
*- no description -*
&nbsp;

### duration
*- no description -*
&nbsp;

### charges
*- no description -*
&nbsp;

### flags
*- no description -*
&nbsp;

### enchantments
*- no description -*
&nbsp;

### randomPropertyId
*- no description -*
&nbsp;

### durability
*- no description -*
&nbsp;

### playedTime
*- no description -*
&nbsp;

### text
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/instance_reset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_reset'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_loot_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

