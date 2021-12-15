---
title: item_instance
description: 
published: true
date: 2021-08-30T21:22:04.001Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/characters/instance_scenario_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_scenario_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/item_instance_artifact" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_instance_artifact'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [itemEntry](#itementry) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [owner_guid](#owner_guid) | bigint(20) | unsigned | MUL | NO | 0 |  |  |
| [creatorGuid](#creatorguid) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [giftCreatorGuid](#giftcreatorguid) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [count](#count) | int(10) | unsigned |  | NO | 1 |  |  |
| [duration](#duration) | int(10) | signed |  | NO | 0 |  |  |
| [charges](#charges) | tinytext |  |  | YES | NULL |  |  |
| [flags](#flags) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [enchantments](#enchantments) | text |  |  | NO |  |  |  |
| [randomBonusListId](#randombonuslistid) | int(10) | unsigned |  | NO | 0 |  |  |
| [durability](#durability) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [playedTime](#playedtime) | int(10) | unsigned |  | NO | 0 |  |  |
| [text](#text) | text |  |  | YES | NULL |  |  |
| [transmogrification](#transmogrification) | int(10) | unsigned |  | NO | 0 |  |  |
| [enchantIllusion](#enchantillusion) | int(10) | unsigned |  | NO | 0 |  |  |
| [battlePetSpeciesId](#battlepetspeciesid) | int(10) | unsigned |  | NO | 0 |  |  |
| [battlePetBreedData](#battlepetbreeddata) | int(10) | unsigned |  | NO | 0 |  |  |
| [battlePetLevel](#battlepetlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [battlePetDisplayId](#battlepetdisplayid) | int(10) | unsigned |  | NO | 0 |  |  |
| [context](#context) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [bonusListIDs](#bonuslistids) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### itemEntry
*- no description -*
&nbsp;

### owner_guid
*- no description -*
&nbsp;

### creatorGuid
*- no description -*
&nbsp;

### giftCreatorGuid
*- no description -*
&nbsp;

### count
*- no description -*
&nbsp;

### duration
*- no description -*
&nbsp;

### charges
*- no description -*
&nbsp;

### flags
*- no description -*
&nbsp;

### enchantments
*- no description -*
&nbsp;

### randomBonusListId
*- no description -*
&nbsp;

### durability
*- no description -*
&nbsp;

### playedTime
*- no description -*
&nbsp;

### text
*- no description -*
&nbsp;

### transmogrification
*- no description -*
&nbsp;

### enchantIllusion
*- no description -*
&nbsp;

### battlePetSpeciesId
*- no description -*
&nbsp;

### battlePetBreedData
*- no description -*
&nbsp;

### battlePetLevel
*- no description -*
&nbsp;

### battlePetDisplayId
*- no description -*
&nbsp;

### context
*- no description -*
&nbsp;

### bonusListIDs
*- no description -*
&nbsp;

<a href="https://trinitycore.info/de/database/master/characters/instance_scenario_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_scenario_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/characters/item_instance_artifact" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_instance_artifact'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

