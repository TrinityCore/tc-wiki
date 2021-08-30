---
title: character_aura
description: 
published: true
date: 2021-08-30T08:27:51.212Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:19:44.413Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/character_aura_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_aura_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterGuid) | binary(16) | signed | PRI | NO |  |  | Full Global Unique Identifier |
| [itemGuid](#itemGuid) | binary(16) | signed | PRI | NO |  |  |  |
| [spell](#spell) | int(10) | unsigned | PRI | NO |  |  |  |
| [effectMask](#effectMask) | int(10) | unsigned | PRI | NO |  |  |  |
| [recalculateMask](#recalculateMask) | int(10) | unsigned |  | NO | 0 |  |  |
| [difficulty](#difficulty) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackCount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [maxDuration](#maxDuration) | int(11) | signed |  | NO | 0 |  |  |
| [remainTime](#remainTime) | int(11) | signed |  | NO | 0 |  |  |
| [remainCharges](#remainCharges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [castItemId](#castItemId) | int(10) | unsigned |  | NO | 0 |  |  |
| [castItemLevel](#castItemLevel) | int(11) | signed |  | NO | -1 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### casterGuid
*- no description -*
&nbsp;

### itemGuid
*- no description -*
&nbsp;

### spell
*- no description -*
&nbsp;

### effectMask
*- no description -*
&nbsp;

### recalculateMask
*- no description -*
&nbsp;

### difficulty
*- no description -*
&nbsp;

### stackCount
*- no description -*
&nbsp;

### maxDuration
*- no description -*
&nbsp;

### remainTime
*- no description -*
&nbsp;

### remainCharges
*- no description -*
&nbsp;

### castItemId
*- no description -*
&nbsp;

### castItemLevel
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/character_aura_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_aura_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

