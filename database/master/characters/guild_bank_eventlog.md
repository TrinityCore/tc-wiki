---
title: guild_bank_eventlog
description: 
published: true
date: 2021-08-30T21:22:03.996Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/guild_achievement_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_achievement_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint(20) | unsigned | PRI | NO | 0 |  | Guild Identificator |
| [LogGuid](#logguid) | int(10) | unsigned | PRI | NO | 0 |  | Log record identificator - auxiliary column |
| [TabId](#tabid) | tinyint(3) | unsigned | PRI | NO | 0 |  | Guild bank TabId |
| [EventType](#eventtype) | tinyint(3) | unsigned |  | NO | 0 |  | Event type |
| [PlayerGuid](#playerguid) | bigint(20) | unsigned | MUL | NO | 0 |  |  |
| [ItemOrMoney](#itemormoney) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [ItemStackCount](#itemstackcount) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [DestTabId](#desttabid) | tinyint(3) | unsigned |  | NO | 0 |  | Destination Tab Id |
| [TimeStamp](#timestamp) | bigint(20) | signed |  | NO | 0 |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
*- no description -*
&nbsp;

### LogGuid
*- no description -*
&nbsp;

### TabId
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### PlayerGuid
*- no description -*
&nbsp;

### ItemOrMoney
*- no description -*
&nbsp;

### ItemStackCount
*- no description -*
&nbsp;

### DestTabId
*- no description -*
&nbsp;

### TimeStamp
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/guild_achievement_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_achievement_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

