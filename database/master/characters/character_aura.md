---
title: character_aura
description: 
published: true
date: 2021-08-30T21:22:03.977Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_aura_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_aura_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | binary(16) | signed | PRI | NO |  |  | Full Global Unique Identifier |
| [itemGuid](#itemguid) | binary(16) | signed | PRI | NO |  |  |  |
| [spell](#spell) | int(10) | unsigned | PRI | NO |  |  |  |
| [effectMask](#effectmask) | int(10) | unsigned | PRI | NO |  |  |  |
| [recalculateMask](#recalculatemask) | int(10) | unsigned |  | NO | 0 |  |  |
| [difficulty](#difficulty) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [maxDuration](#maxduration) | int(11) | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int(11) | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [castItemId](#castitemid) | int(10) | unsigned |  | NO | 0 |  |  |
| [castItemLevel](#castitemlevel) | int(11) | signed |  | NO | -1 |  |  |
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

<a href="https://trinitycore.info/en/database/master/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_aura_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_aura_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

