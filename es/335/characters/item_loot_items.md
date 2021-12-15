---
title: item_loot_items
description: 
published: true
date: 2021-08-30T22:00:42.137Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_money'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [container_id](#container_id) | int(10) | unsigned |  | NO | 0 |  | guid of container (item_instance.guid) |
| [item_id](#item_id) | int(10) | unsigned |  | NO | 0 |  | loot item entry (item_instance.itemEntry) |
| [item_count](#item_count) | int(10) | signed |  | NO | 0 |  | stack size |
| [item_index](#item_index) | int(10) | unsigned |  | NO | 0 |  |  |
| [follow_rules](#follow_rules) | tinyint(1) | signed |  | NO | 0 |  | follow loot rules |
| [ffa](#ffa) | tinyint(1) | signed |  | NO | 0 |  | free-for-all |
| [blocked](#blocked) | tinyint(1) | signed |  | NO | 0 |  |  |
| [counted](#counted) | tinyint(1) | signed |  | NO | 0 |  |  |
| [under_threshold](#under_threshold) | tinyint(1) | signed |  | NO | 0 |  |  |
| [needs_quest](#needs_quest) | tinyint(1) | signed |  | NO | 0 |  | quest drop |
| [rnd_prop](#rnd_prop) | int(10) | signed |  | NO | 0 |  | random enchantment added when originally rolled |
| [rnd_suffix](#rnd_suffix) | int(10) | signed |  | NO | 0 |  | random suffix added when originally rolled |
&nbsp;
## Description of fields

### container_id
*- no description -*
&nbsp;

### item_id
*- no description -*
&nbsp;

### item_count
*- no description -*
&nbsp;

### item_index
*- no description -*
&nbsp;

### follow_rules
*- no description -*
&nbsp;

### ffa
*- no description -*
&nbsp;

### blocked
*- no description -*
&nbsp;

### counted
*- no description -*
&nbsp;

### under_threshold
*- no description -*
&nbsp;

### needs_quest
*- no description -*
&nbsp;

### rnd_prop
*- no description -*
&nbsp;

### rnd_suffix
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/item_loot_money" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_loot_money'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

