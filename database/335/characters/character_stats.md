---
title: character_stats
description: 
published: true
date: 2021-11-15T11:25:41.006Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:24.767Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_spell_cooldown" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_spell_cooldown'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_talent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds information on all the stats regarding the character. Used for external applications such as websites.
> Needs a value >0 in config for PlayerSave.Stats.MinLevel
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier, Low part |
| [maxhealth](#maxhealth) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower1](#maxpower1) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower2](#maxpower2) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower3](#maxpower3) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower4](#maxpower4) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower5](#maxpower5) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower6](#maxpower6) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxpower7](#maxpower7) | int(10) | unsigned |  | NO | 0 |  |  |
| [strength](#strength) | int(10) | unsigned |  | NO | 0 |  |  |
| [agility](#agility) | int(10) | unsigned |  | NO | 0 |  |  |
| [stamina](#stamina) | int(10) | unsigned |  | NO | 0 |  |  |
| [intellect](#intellect) | int(10) | unsigned |  | NO | 0 |  |  |
| [spirit](#spirit) | int(10) | unsigned |  | NO | 0 |  |  |
| [armor](#armor) | int(10) | unsigned |  | NO | 0 |  |  |
| [resHoly](#resholy) | int(10) | unsigned |  | NO | 0 |  |  |
| [resFire](#resfire) | int(10) | unsigned |  | NO | 0 |  |  |
| [resNature](#resnature) | int(10) | unsigned |  | NO | 0 |  |  |
| [resFrost](#resfrost) | int(10) | unsigned |  | NO | 0 |  |  |
| [resShadow](#resshadow) | int(10) | unsigned |  | NO | 0 |  |  |
| [resArcane](#resarcane) | int(10) | unsigned |  | NO | 0 |  |  |
| [blockPct](#blockpct) | float | unsigned |  | NO | 0 |  |  |
| [dodgePct](#dodgepct) | float | unsigned |  | NO | 0 |  |  |
| [parryPct](#parrypct) | float | unsigned |  | NO | 0 |  |  |
| [critPct](#critpct) | float | unsigned |  | NO | 0 |  |  |
| [rangedCritPct](#rangedcritpct) | float | unsigned |  | NO | 0 |  |  |
| [spellCritPct](#spellcritpct) | float | unsigned |  | NO | 0 |  |  |
| [attackPower](#attackpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [rangedAttackPower](#rangedattackpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [spellPower](#spellpower) | int(10) | unsigned |  | NO | 0 |  |  |
| [resilience](#resilience) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character
&nbsp;

### maxhealth
Maximum amount of health that the character has.
&nbsp;

### maxpower1
Maximum amount of mana that the character has.
&nbsp;

### maxpower2
Maximum amount of rage that the character has.
&nbsp;

### maxpower3
Maximum amount of focus that the character has.
&nbsp;

### maxpower4
Maximum amount of energy that the character has.
&nbsp;

### maxpower5
Maximum amount of happiness that the character has.
&nbsp;

### maxpower6
Maximum amount of rune that the character has.
&nbsp;

### maxpower7
Maximum amount of runic power that the character has.
&nbsp;

### strength
Character's current strength value.
&nbsp;

### agility
Character's current agility value.
&nbsp;

### stamina
Character's current stamina value.
&nbsp;

### intellect
Character's current intellect value.
&nbsp;

### spirit
Character's current spirit value.
&nbsp;

### armor
Character's current armor value.
&nbsp;

### resHoly
Character's current holy resistance value.
&nbsp;

### resFire
Character's current fire resistance value.
&nbsp;

### resNature
Character's current nature resistance value.
&nbsp;

### resFrost
Character's current frost resistance value.
&nbsp;

### resShadow
Character's current shadow resistance value.
&nbsp;

### resArcane
Character's current arcane resistance value.
&nbsp;

### blockPct
Character's current block chance.
&nbsp;

### dodgePct
Character's current dodge chance.
&nbsp;

### parryPct
Character's current parry chance.
&nbsp;

### critPct
Character's current crit chance.
&nbsp;

### rangedCritPct
Character's current ranged crit chance.
&nbsp;

### spellCritPct
Character's current spell crit chance.
&nbsp;

### attackPower
Character's current attackpower.
&nbsp;

### rangedAttackPower
Character's current ranged attackpower.
&nbsp;

### spellPower
Character's current spellpower.
&nbsp;

### resilience
Character's current resilience value.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_spell_cooldown" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_spell_cooldown'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_talent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

