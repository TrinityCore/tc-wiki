---
title: character_void_storage
description: 
published: true
date: 2022-11-21T21:01:08.265Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:37:13.719Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_transmog_outfits" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_transmog_outfits'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'characters'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [itemId](#itemid) | bigint | unsigned | PRI | NO |  |  |  |
| [playerGuid](#playerguid) | bigint | unsigned | MUL | NO |  |  |  |
| [itemEntry](#itementry) | int | unsigned |  | NO |  |  |  |
| [slot](#slot) | tinyint | unsigned |  | NO |  |  |  |
| [creatorGuid](#creatorguid) | bigint | unsigned |  | NO | 0 |  |  |
| [randomBonusListId](#randombonuslistid) | int | unsigned |  | NO | 0 |  |  |
| [fixedScalingLevel](#fixedscalinglevel) | int | unsigned |  | YES | 0 |  |  |
| [artifactKnowledgeLevel](#artifactknowledgelevel) | int | unsigned |  | YES | 0 |  |  |
| [context](#context) | tinyint | unsigned |  | NO | 0 |  |  |
| [bonusListIDs](#bonuslistids) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### itemId
*- no description -*
&nbsp;

### playerGuid
*- no description -*
&nbsp;

### itemEntry
*- no description -*
&nbsp;

### slot
*- no description -*
&nbsp;

### creatorGuid
*- no description -*
&nbsp;

### randomBonusListId
*- no description -*
&nbsp;

### fixedScalingLevel
*- no description -*
&nbsp;

### artifactKnowledgeLevel
*- no description -*
&nbsp;

### context
*- no description -*
&nbsp;

### bonusListIDs
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_transmog_outfits" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_transmog_outfits'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'characters'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

