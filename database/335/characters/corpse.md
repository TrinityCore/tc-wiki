---
title: corpse
description: 
published: true
date: 2022-04-17T20:59:23.640Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Character Global Unique Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [phaseMask](#phasemask) | int | unsigned |  | NO | 1 |  |  |
| [displayId](#displayid) | int | unsigned |  | NO | 0 |  |  |
| [itemCache](#itemcache) | text |  |  | NO |  |  |  |
| [bytes1](#bytes1) | int | unsigned |  | NO | 0 |  |  |
| [bytes2](#bytes2) | int | unsigned |  | NO | 0 |  |  |
| [guildId](#guildid) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [dynFlags](#dynflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [time](#time) | int | unsigned | MUL | NO | 0 |  |  |
| [corpseType](#corpsetype) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [instanceId](#instanceid) | int | unsigned | MUL | NO | 0 |  | Instance Identifier |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### posX
*- no description -*
&nbsp;

### posY
*- no description -*
&nbsp;

### posZ
*- no description -*
&nbsp;

### orientation
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### phaseMask
*- no description -*
&nbsp;

### displayId
*- no description -*
&nbsp;

### itemCache
*- no description -*
&nbsp;

### bytes1
*- no description -*
&nbsp;

### bytes2
*- no description -*
&nbsp;

### guildId
*- no description -*
&nbsp;

### flags
*- no description -*
&nbsp;

### dynFlags
*- no description -*
&nbsp;

### time
*- no description -*
&nbsp;

### corpseType
*- no description -*
&nbsp;

### instanceId
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
