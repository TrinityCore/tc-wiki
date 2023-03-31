---
title: build_info
description: 
published: true
date: 2022-11-21T21:22:17.265Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, auth
editor: markdown
dateCreated: 2021-08-30T21:57:47.860Z
---

<a href="https://trinitycore.info/en/database/335/auth/autobroadcast" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'autobroadcast'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/ip_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ip_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [build](#build) | int | signed | PRI | NO |  |  |  |
| [majorVersion](#majorversion) | int | signed |  | YES | NULL |  |  |
| [minorVersion](#minorversion) | int | signed |  | YES | NULL |  |  |
| [bugfixVersion](#bugfixversion) | int | signed |  | YES | NULL |  |  |
| [hotfixVersion](#hotfixversion) | char(3) |  |  | YES | NULL |  |  |
| [winAuthSeed](#winauthseed) | varchar(32) |  |  | YES | NULL |  |  |
| [win64AuthSeed](#win64authseed) | varchar(32) |  |  | YES | NULL |  |  |
| [mac64AuthSeed](#mac64authseed) | varchar(32) |  |  | YES | NULL |  |  |
| [winChecksumSeed](#winchecksumseed) | varchar(40) |  |  | YES | NULL |  |  |
| [macChecksumSeed](#macchecksumseed) | varchar(40) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### build
*- no description -*
&nbsp;

### majorVersion
*- no description -*
&nbsp;

### minorVersion
*- no description -*
&nbsp;

### bugfixVersion
*- no description -*
&nbsp;

### hotfixVersion
*- no description -*
&nbsp;

### winAuthSeed
*- no description -*
&nbsp;

### win64AuthSeed
*- no description -*
&nbsp;

### mac64AuthSeed
*- no description -*
&nbsp;

### winChecksumSeed
*- no description -*
&nbsp;

### macChecksumSeed
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/autobroadcast" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'autobroadcast'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/ip_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ip_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
