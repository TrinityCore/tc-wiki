---
title: corpse
description: 
published: true
date: 2021-08-30T21:22:03.991Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/corpse_customizations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse_customizations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  | Character Global Unique Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint(5) | unsigned |  | NO | 0 |  | Map Identifier |
| [displayId](#displayid) | int(10) | unsigned |  | NO | 0 |  |  |
| [itemCache](#itemcache) | text |  |  | NO |  |  |  |
| [race](#race) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [dynFlags](#dynflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [time](#time) | int(10) | unsigned | MUL | NO | 0 |  |  |
| [corpseType](#corpsetype) | tinyint(3) | unsigned | MUL | NO | 0 |  |  |
| [instanceId](#instanceid) | int(10) | unsigned | MUL | NO | 0 |  | Instance Identifier |
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

### displayId
*- no description -*
&nbsp;

### itemCache
*- no description -*
&nbsp;

### race
*- no description -*
&nbsp;

### class
*- no description -*
&nbsp;

### gender
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

<a href="https://trinitycore.info/de/database/master/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/corpse_customizations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse_customizations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

