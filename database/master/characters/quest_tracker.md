---
title: quest_tracker
description: 
published: true
date: 2022-11-21T21:02:53.249Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:18:26.637Z
---

<a href="https://trinitycore.info/en/database/master/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_players'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reserved_name'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [character_guid](#character_guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [quest_accept_time](#quest_accept_time) | datetime |  |  | NO |  |  |  |
| [quest_complete_time](#quest_complete_time) | datetime |  |  | YES | NULL |  |  |
| [quest_abandon_time](#quest_abandon_time) | datetime |  |  | YES | NULL |  |  |
| [completed_by_gm](#completed_by_gm) | tinyint(1) | signed |  | NO | 0 |  |  |
| [core_hash](#core_hash) | varchar(120) |  |  | NO | 0 |  |  |
| [core_revision](#core_revision) | varchar(120) |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### character_guid
*- no description -*
&nbsp;

### quest_accept_time
*- no description -*
&nbsp;

### quest_complete_time
*- no description -*
&nbsp;

### quest_abandon_time
*- no description -*
&nbsp;

### completed_by_gm
*- no description -*
&nbsp;

### core_hash
*- no description -*
&nbsp;

### core_revision
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_players'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reserved_name'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
