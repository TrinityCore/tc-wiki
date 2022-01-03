---
title: channels
description: 
published: true
date: 2022-01-03T11:27:55.572Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_invites'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_account_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_account_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name) | varchar(128) | signed | PRI | NO |  |  |  |
| [team](#team) | int(10) | unsigned | PRI | NO |  |  |  |
| [announce](#announce) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [ownership](#ownership) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [password](#password) | varchar(128) | signed |  | YES | NULL |  |  |
| [bannedList](#bannedlist) | text |  |  | YES | NULL |  |  |
| [lastUsed](#lastused) | bigint(20) | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### name
*- no description -*
&nbsp;

### team
*- no description -*
&nbsp;

### announce
*- no description -*
&nbsp;

### ownership
*- no description -*
&nbsp;

### password
*- no description -*
&nbsp;

### bannedList
*- no description -*
&nbsp;

### lastUsed
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_invites'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_account_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_account_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

