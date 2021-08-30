---
title: guild
description: 
published: true
date: 2021-08-30T21:53:23.600Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/guild_bank_eventlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_eventlog'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [name](#name) | varchar(24) | signed |  | NO | '' |  |  |
| [leaderguid](#leaderguid) | int(10) | unsigned |  | NO | 0 |  |  |
| [EmblemStyle](#emblemstyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [EmblemColor](#emblemcolor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BorderStyle](#borderstyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BorderColor](#bordercolor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BackgroundColor](#backgroundcolor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [info](#info) | varchar(500) | signed |  | NO | '' |  |  |
| [motd](#motd) | varchar(128) | signed |  | NO | '' |  |  |
| [createdate](#createdate) | int(10) | unsigned |  | NO | 0 |  |  |
| [BankMoney](#bankmoney) | bigint(20) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### leaderguid
*- no description -*
&nbsp;

### EmblemStyle
*- no description -*
&nbsp;

### EmblemColor
*- no description -*
&nbsp;

### BorderStyle
*- no description -*
&nbsp;

### BorderColor
*- no description -*
&nbsp;

### BackgroundColor
*- no description -*
&nbsp;

### info
*- no description -*
&nbsp;

### motd
*- no description -*
&nbsp;

### createdate
*- no description -*
&nbsp;

### BankMoney
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/guild_bank_eventlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_eventlog'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

