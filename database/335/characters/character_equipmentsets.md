---
title: character_equipmentsets
description: 
published: true
date: 2022-11-21T21:23:35.423Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:31.038Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_fishingsteps'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds info about player's equipment manager settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  |  |
| [setguid](#setguid) | bigint | unsigned | PRI | NO |  | auto_increment |  |
| [setindex](#setindex) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [name](#name) | varchar(31) |  |  | NO |  |  |  |
| [iconname](#iconname) | varchar(100) |  |  | NO |  |  |  |
| [ignore_mask](#ignore_mask) | int | unsigned |  | NO | 0 |  |  |
| [item0](#item0) | int | unsigned |  | NO | 0 |  |  |
| [item1](#item1) | int | unsigned |  | NO | 0 |  |  |
| [item2](#item2) | int | unsigned |  | NO | 0 |  |  |
| [item3](#item3) | int | unsigned |  | NO | 0 |  |  |
| [item4](#item4) | int | unsigned |  | NO | 0 |  |  |
| [item5](#item5) | int | unsigned |  | NO | 0 |  |  |
| [item6](#item6) | int | unsigned |  | NO | 0 |  |  |
| [item7](#item7) | int | unsigned |  | NO | 0 |  |  |
| [item8](#item8) | int | unsigned |  | NO | 0 |  |  |
| [item9](#item9) | int | unsigned |  | NO | 0 |  |  |
| [item10](#item10) | int | unsigned |  | NO | 0 |  |  |
| [item11](#item11) | int | unsigned |  | NO | 0 |  |  |
| [item12](#item12) | int | unsigned |  | NO | 0 |  |  |
| [item13](#item13) | int | unsigned |  | NO | 0 |  |  |
| [item14](#item14) | int | unsigned |  | NO | 0 |  |  |
| [item15](#item15) | int | unsigned |  | NO | 0 |  |  |
| [item16](#item16) | int | unsigned |  | NO | 0 |  |  |
| [item17](#item17) | int | unsigned |  | NO | 0 |  |  |
| [item18](#item18) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character.
&nbsp;

### setguid
First free guid.
&nbsp;

### setindex
Set index, values from 0 to 9 are used.
&nbsp;

### name
Individual. Name is set by player.
&nbsp;

### iconname
Name taken from ItemDisplayInfo.dbc, column 6
&nbsp;

### ignore_mask
*- no description -*
&nbsp;

### item0
Values for item 0-18 are taken from item_instance guid.
Head slot
&nbsp;

### item1
Neck slot
&nbsp;

### item2
Shoulder slot
&nbsp;

### item3
Shirt slot
&nbsp;

### item4
Chest slot
&nbsp;

### item5
Waist slot
&nbsp;

### item6
Legs slot
&nbsp;

### item7
Feet slot
&nbsp;

### item8
Wrist slot
&nbsp;

### item9
Hands slot
&nbsp;

### item10
Ring 1 slot
&nbsp;

### item11
Ring 2 slot
&nbsp;

### item12
Trinket 1 slot
&nbsp;

### item13
Trinket 2 slot
&nbsp;

### item14
Back slot
&nbsp;

### item15
Main Hand slot
&nbsp;

### item16
Off Hand slot
&nbsp;

### item17
Relic slot
&nbsp;

### item18
Tabard slot
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_fishingsteps'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
