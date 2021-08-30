---
title: guild
description: 
published: true
date: 2021-08-30T09:14:40.973Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/guild_achievement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_achievement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [name](#name) | varchar(24) | signed |  | NO | '' |  |  |
| [leaderguid](#leaderguid) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [EmblemStyle](#EmblemStyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [EmblemColor](#EmblemColor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BorderStyle](#BorderStyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BorderColor](#BorderColor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BackgroundColor](#BackgroundColor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [info](#info) | varchar(500) | signed |  | NO | '' |  |  |
| [motd](#motd) | varchar(256) | signed |  | NO | '' |  |  |
| [createdate](#createdate) | int(10) | unsigned |  | NO | 0 |  |  |
| [BankMoney](#BankMoney) | bigint(20) | unsigned |  | NO | 0 |  |  |
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

<a href="https://dev.trinitycore.info/en/database/master/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/guild_achievement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_achievement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

