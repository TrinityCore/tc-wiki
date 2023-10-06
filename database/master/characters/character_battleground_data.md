---
title: character_battleground_data
description: 
published: true
date: 2023-10-06T19:23:32.957Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:20:54.346Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_battleground_random" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_battleground_random'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [instanceId](#instanceid) | int | unsigned |  | NO |  |  | Instance Identifier |
| [team](#team) | smallint | unsigned |  | NO |  |  |  |
| [joinX](#joinx) | float |  |  | NO | 0 |  |  |
| [joinY](#joiny) | float |  |  | NO | 0 |  |  |
| [joinZ](#joinz) | float |  |  | NO | 0 |  |  |
| [joinO](#joino) | float |  |  | NO | 0 |  |  |
| [joinMapId](#joinmapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [taxiStart](#taxistart) | int | unsigned |  | NO | 0 |  |  |
| [taxiEnd](#taxiend) | int | unsigned |  | NO | 0 |  |  |
| [mountSpell](#mountspell) | int | unsigned |  | NO | 0 |  |  |
| [queueId](#queueid) | bigint | unsigned |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### instanceId
*- no description -*
&nbsp;

### team
*- no description -*
&nbsp;

### joinX
*- no description -*
&nbsp;

### joinY
*- no description -*
&nbsp;

### joinZ
*- no description -*
&nbsp;

### joinO
*- no description -*
&nbsp;

### joinMapId
*- no description -*
&nbsp;

### taxiStart
*- no description -*
&nbsp;

### taxiEnd
*- no description -*
&nbsp;

### mountSpell
*- no description -*
&nbsp;

### queueId
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_battleground_random" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_battleground_random'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
