---
title: character_cuf_profiles
description: 
published: true
date: 2022-01-03T11:27:55.575Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_battleground_random" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_battleground_random'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_currency" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_currency'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  | Character Guid |
| [id](#id) | tinyint(3) | unsigned | PRI | NO |  |  | Profile Id (0-4) |
| [name](#name) | varchar(12) | signed |  | NO |  |  | Profile Name |
| [frameHeight](#frameheight) | smallint(5) | unsigned |  | NO | 0 |  | Profile Frame Height |
| [frameWidth](#framewidth) | smallint(5) | unsigned |  | NO | 0 |  | Profile Frame Width |
| [sortBy](#sortby) | tinyint(3) | unsigned |  | NO | 0 |  | Frame Sort By |
| [healthText](#healthtext) | tinyint(3) | unsigned |  | NO | 0 |  | Frame Health Text |
| [boolOptions](#booloptions) | int(10) | unsigned |  | NO | 0 |  | Many Configurable Bool Options |
| [topPoint](#toppoint) | tinyint(3) | unsigned |  | NO | 0 |  | Frame top alignment |
| [bottomPoint](#bottompoint) | tinyint(3) | unsigned |  | NO | 0 |  | Frame bottom alignment |
| [leftPoint](#leftpoint) | tinyint(3) | unsigned |  | NO | 0 |  | Frame left alignment |
| [topOffset](#topoffset) | smallint(5) | unsigned |  | NO | 0 |  | Frame position offset from top |
| [bottomOffset](#bottomoffset) | smallint(5) | unsigned |  | NO | 0 |  | Frame position offset from bottom |
| [leftOffset](#leftoffset) | smallint(5) | unsigned |  | NO | 0 |  | Frame position offset from left |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### id
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### frameHeight
*- no description -*
&nbsp;

### frameWidth
*- no description -*
&nbsp;

### sortBy
*- no description -*
&nbsp;

### healthText
*- no description -*
&nbsp;

### boolOptions
*- no description -*
&nbsp;

### topPoint
*- no description -*
&nbsp;

### bottomPoint
*- no description -*
&nbsp;

### leftPoint
*- no description -*
&nbsp;

### topOffset
*- no description -*
&nbsp;

### bottomOffset
*- no description -*
&nbsp;

### leftOffset
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_battleground_random" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_battleground_random'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_currency" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_currency'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

