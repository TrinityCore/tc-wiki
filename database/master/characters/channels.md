---
title: channels
description: 
published: true
date: 2022-11-21T20:59:28.250Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:18:00.153Z
---

<a href="https://trinitycore.info/en/database/master/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_invites'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_account_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_account_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name-alt) | varchar(128) |  | PRI | NO |  |  |  |
| [team](#team) | int | unsigned | PRI | NO |  |  |  |
| [announce](#announce) | tinyint | unsigned |  | NO | 1 |  |  |
| [ownership](#ownership) | tinyint | unsigned |  | NO | 1 |  |  |
| [password](#password) | varchar(128) |  |  | YES | NULL |  |  |
| [bannedList](#bannedlist) | text |  |  | YES | NULL |  |  |
| [lastUsed](#lastused) | bigint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### name <!-- {#name-alt} -->
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
