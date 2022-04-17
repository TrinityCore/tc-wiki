---
title: pet_aura
description: 
published: true
date: 2022-04-17T20:59:24.351Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pet_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | bigint | unsigned | PRI | NO | 0 |  | Full Global Unique Identifier |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [effectMask](#effectmask) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [recalculateMask](#recalculatemask) | tinyint | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [amount0](#amount0) | mediumint | signed |  | NO |  |  |  |
| [amount1](#amount1) | mediumint | signed |  | NO |  |  |  |
| [amount2](#amount2) | mediumint | signed |  | NO |  |  |  |
| [base_amount0](#base_amount0) | mediumint | signed |  | NO |  |  |  |
| [base_amount1](#base_amount1) | mediumint | signed |  | NO |  |  |  |
| [base_amount2](#base_amount2) | mediumint | signed |  | NO |  |  |  |
| [maxDuration](#maxduration) | int | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint | unsigned |  | NO | 0 |  |  |
| [critChance](#critchance) | float |  |  | NO | 0 |  |  |
| [applyResilience](#applyresilience) | tinyint | signed |  | NO | 0 |  |  |
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

<a href="https://trinitycore.info/en/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mail_items'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pet_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
