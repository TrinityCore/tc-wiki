---
title: character_aura
description:
published: true
date: 2023-07-25T19:19:46.251Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:17.652Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains aura information that is loaded when a character is loaded, so the auras that were on the character when it logged out are still kept when it logs back in. A spell can have up to three auras, one in each of its effects.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [casterGuid](#casterguid) | bigint | unsigned | PRI | NO | 0 |  | Full Global Unique Identifier |
| [itemGuid](#itemguid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [effectMask](#effectmask) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [recalculateMask](#recalculatemask) | tinyint | unsigned |  | NO | 0 |  |  |
| [stackCount](#stackcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [amount0](#amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [amount1](#amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [amount2](#amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [base_amount0](#base_amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [base_amount1](#base_amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [base_amount2](#base_amount[0-2]) | int | signed |  | NO | 0 |  |  |
| [maxDuration](#maxduration) | int | signed |  | NO | 0 |  |  |
| [remainTime](#remaintime) | int | signed |  | NO | 0 |  |  |
| [remainCharges](#remaincharges) | tinyint | unsigned |  | NO | 0 |  |  |
| [critChance](#critchance) | float |  |  | NO | 0 |  |  |
| [applyResilience](#applyresilience) | tinyint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [character guid](../characters/characters#guid) of the target affected by the aura.
&nbsp;

### casterGuid
The [character guid](../characters/characters#guid) player who casted the aura.
&nbsp;

### itemGuid
The [item guid](../characters/item_instance#guid) of the item which casted the aura.
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) which applied the aura.
&nbsp;

### effectMask
The effect index of the spell from which the aura came from. A spell has up to three effects, with the index being 0, 1, or 2.
&nbsp;

### recalculateMask
Bitmask of effect indizes that can be recalculated.
| Value | Name |
|-------|------|
| 1 | EFFECT_1 |
| 2 | EFFECT_2 |
| 4 | EFFECT_3 |
{.dense}

&nbsp;

### stackCount
Determines how many stacks of the spell the character has.
&nbsp;

### amount\[0-2]
The base_amount + modifier value associated with the aura.
&nbsp;

### base_amount\[0-2]
The base_amount value associated with the aura.
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
Crit chance of the caster at the moment of aura application.
&nbsp;

### applyResilience
Boolean if this aura is subject to resilience
* 0: full amount
* 1: reduced by resilience
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_arena_stats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
