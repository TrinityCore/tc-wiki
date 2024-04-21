---
title: character_cuf_profiles
description: 
published: true
date: 2022-11-21T20:59:52.317Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:21:30.199Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_battleground_random" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_battleground_random'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_currency" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_currency'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Character Guid |
| [id](#id-alt) | tinyint | unsigned | PRI | NO |  |  | Profile Id (0-4) |
| [name](#name-alt) | varchar(12) |  |  | NO |  |  | Profile Name |
| [frameHeight](#frameheight) | smallint | unsigned |  | NO | 0 |  | Profile Frame Height |
| [frameWidth](#framewidth) | smallint | unsigned |  | NO | 0 |  | Profile Frame Width |
| [sortBy](#sortby) | tinyint | unsigned |  | NO | 0 |  | Frame Sort By |
| [healthText](#healthtext) | tinyint | unsigned |  | NO | 0 |  | Frame Health Text |
| [boolOptions](#booloptions) | int | unsigned |  | NO | 0 |  | Many Configurable Bool Options |
| [topPoint](#toppoint) | tinyint | unsigned |  | NO | 0 |  | Frame top alignment |
| [bottomPoint](#bottompoint) | tinyint | unsigned |  | NO | 0 |  | Frame bottom alignment |
| [leftPoint](#leftpoint) | tinyint | unsigned |  | NO | 0 |  | Frame left alignment |
| [topOffset](#topoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from top |
| [bottomOffset](#bottomoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from bottom |
| [leftOffset](#leftoffset) | smallint | unsigned |  | NO | 0 |  | Frame position offset from left |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### id <!-- {#id-alt} -->
*- no description -*
&nbsp;

### name <!-- {#name-alt} -->
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
