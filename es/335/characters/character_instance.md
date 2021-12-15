---
title: character_instance
description: 
published: true
date: 2021-09-16T11:00:10.428Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:44.864Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains the instance data for characters.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [instance](#instance) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [permanent](#permanent) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [extendState](#extendstate) | tinyint(2) | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character.
&nbsp;

### instance
The Instance ID taken from [instance table](/database/335/characters/instance).
&nbsp;

### permanent
Boolean 0 or 1 controlling if the player has been bound to the instance. 
A player is bound to the instance only when he (or his party/raid) kills a creature with the CREATURE_FLAG_EXTRA_INSTANCE_BIND flag set in the flags_extras field.
&nbsp;

### extendState
EXTEND_STATE_EXPIRED  =   0,
EXTEND_STATE_NORMAL   =   1
EXTEND_STATE_EXTENDED =   2
EXTEND_STATE_KEEP     = 255  
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

