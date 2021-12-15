---
title: pet_aura
description: 
published: true
date: 2021-08-30T22:00:42.139Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/pet_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | bigint(20) | unsigned | PRI | NO | 0 |  | Full Global Unique Identifier |
| [spell](#spell) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [effectMask](#effectmask) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [recalculateMask](#recalculatemask) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [amount0](#amount0) | mediumint(8) | signed |  | NO |  |  |  |
| [amount1](#amount1) | mediumint(8) | signed |  | NO |  |  |  |
| [amount2](#amount2) | mediumint(8) | signed |  | NO |  |  |  |
| [base_amount0](#base_amount0) | mediumint(8) | signed |  | NO |  |  |  |
| [base_amount1](#base_amount1) | mediumint(8) | signed |  | NO |  |  |  |
| [base_amount2](#base_amount2) | mediumint(8) | signed |  | NO |  |  |  |
| [maxDuration](#maxduration) | int(11) | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int(11) | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [critChance](#critchance) | float |  |  | NO | 0 |  |  |
| [applyResilience](#applyresilience) | tinyint(3) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### casterGuid
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

### stackCount
*- no description -*
&nbsp;

### amount0
*- no description -*
&nbsp;

### amount1
*- no description -*
&nbsp;

### amount2
*- no description -*
&nbsp;

### base_amount0
*- no description -*
&nbsp;

### base_amount1
*- no description -*
&nbsp;

### base_amount2
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

### critChance
*- no description -*
&nbsp;

### applyResilience
*- no description -*
&nbsp;

<a href="https://trinitycore.info/de/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/pet_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

