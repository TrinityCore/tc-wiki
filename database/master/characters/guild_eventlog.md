---
title: guild_eventlog
description: 
published: true
date: 2022-01-03T11:27:55.591Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_tab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint(20) | unsigned | PRI | NO |  |  | Guild Identificator |
| [LogGuid](#logguid) | int(10) | unsigned | PRI | NO |  |  | Log record identificator - auxiliary column |
| [EventType](#eventtype) | tinyint(3) | unsigned |  | NO |  |  | Event type |
| [PlayerGuid1](#playerguid1) | bigint(20) | unsigned | MUL | NO |  |  | Player 1 |
| [PlayerGuid2](#playerguid2) | bigint(20) | unsigned | MUL | NO |  |  | Player 2 |
| [NewRank](#newrank) | tinyint(3) | unsigned |  | NO |  |  | New rank(in case promotion/demotion) |
| [TimeStamp](#timestamp) | bigint(20) | signed |  | NO |  |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
*- no description -*
&nbsp;

### LogGuid
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### PlayerGuid1
*- no description -*
&nbsp;

### PlayerGuid2
*- no description -*
&nbsp;

### NewRank
*- no description -*
&nbsp;

### TimeStamp
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_tab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

