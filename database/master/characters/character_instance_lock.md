---
title: character_instance_lock
description: 
published: true
date: 2023-05-11T08:55:46.167Z
tags: database, master, characters
editor: markdown
dateCreated: 2022-12-19T18:36:55.053Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO |  |  |  |
| [mapId](#mapid) | int | unsigned | PRI | NO |  |  |  |
| [lockId](#lockid) | int | unsigned | PRI | NO |  |  |  |
| [instanceId](#instanceid) | int | unsigned |  | YES | NULL |  |  |
| [difficulty](#difficulty) | tinyint | unsigned |  | YES | NULL |  |  |
| [data](#data) | text |  |  | YES | NULL |  |  |
| [completedEncountersMask](#completedencountersmask) | int | unsigned |  | YES | NULL |  |  |
| [entranceWorldSafeLocId](#entranceworldsafelocid) | int | unsigned |  | YES | NULL |  |  |
| [expiryTime](#expirytime) | bigint | unsigned |  | YES | NULL |  |  |
| [extended](#extended) | tinyint | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### lockId
*- no description -*
&nbsp;

### instanceId
*- no description -*
&nbsp;

### difficulty
*- no description -*
&nbsp;

### data
*- no description -*
&nbsp;

### completedEncountersMask
*- no description -*
&nbsp;

### entranceWorldSafeLocId
*- no description -*
&nbsp;

### expiryTime
*- no description -*
&nbsp;

### extended
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_homebind" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_homebind'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_inventory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
