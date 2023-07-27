---
title: character_instance
description: 
published: true
date: 2023-07-27T18:33:57.987Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:44.864Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains the instance data for characters.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [instance](#instance) | int | unsigned | PRI | NO | 0 |  |  |
| [permanent](#permanent) | tinyint | unsigned |  | NO | 0 |  |  |
| [extendState](#extendstate) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### instance
The [instance id](/database/335/characters/instance) of the dungeon or raid.
&nbsp;

### permanent
A player is bound to the instance only when he (or his party/raid) kills a creature with the CREATURE_FLAG_EXTRA_INSTANCE_BIND flag set in the flags_extras field.
* 0: instance can be reset
* 1: bound to instance
&nbsp;

### extendState
| ID | Name | Comment |
|----|------|---------|
| 0 | EXTEND_STATE_EXPIRED |  |
| 1 | EXTEND_STATE_NORMAL |  |
| 2 | EXTEND_STATE_EXTENDED | lockout period extended by player |
| 255 | EXTEND_STATE_KEEP | special state: keep current save type |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
