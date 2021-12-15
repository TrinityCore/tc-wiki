---
title: character_aura
description: 
published: true
date: 2021-09-16T09:50:27.803Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:17.652Z
---

<a href="https://trinitycore.info/de/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains aura information that is loaded when a character is loaded, so the auras that were on the character when it logged out are still kept when it logs back in. A spell can have up to three auras, one in each of its effects.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | bigint(20) | unsigned | PRI | NO | 0 |  | Full Global Unique Identifier |
| [itemGuid](#itemguid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [spell](#spell) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [effectMask](#effectmask) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [recalculateMask](#recalculatemask) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [amount0](#amount0) | int(11) | signed |  | NO | 0 |  |  |
| [amount1](#amount1) | int(11) | signed |  | NO | 0 |  |  |
| [amount2](#amount2) | int(11) | signed |  | NO | 0 |  |  |
| [base_amount0](#base_amount0) | int(11) | signed |  | NO | 0 |  |  |
| [base_amount1](#base_amount1) | int(11) | signed |  | NO | 0 |  |  |
| [base_amount2](#base_amount2) | int(11) | signed |  | NO | 0 |  |  |
| [maxDuration](#maxduration) | int(11) | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int(11) | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [critChance](#critchance) | float |  |  | NO | 0 |  |  |
| [applyResilience](#applyresilience) | tinyint(3) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the target affected by the aura.
&nbsp;

### casterGuid
The GUID of the player who casted the aura. 
&nbsp;

### itemGuid
The GUID of the item which casted the aura. 
&nbsp;

### spell
The spell from which the aura was applied. 
See Spell.dbc column 1
&nbsp;

### effectMask
The effect index of the spell from which the aura came from. A spell has up to three effects, with the index being 0, 1, or 2.
&nbsp;

### recalculateMask
*- no description -*
&nbsp;

### stackCount
Determines how many stacks of the spell the character has.
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
The maximum duration of the aura in ms.
&nbsp;

### remainTime
The time remaining in ms on the aura. -1 means that the aura is indefinite.
&nbsp;

### remainCharges
The number of charges remaining on the aura.
&nbsp;

### critChance
*- no description -*
&nbsp;

### applyResilience
*- no description -*
&nbsp;

<a href="https://trinitycore.info/de/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

