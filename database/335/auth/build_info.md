---
title: build_info
description: 
published: true
date: 2023-08-01T20:30:19.430Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:47.860Z
---

<a href="https://trinitycore.info/en/database/335/auth/autobroadcast" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'autobroadcast'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/ip_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ip_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Holds client build data to verify if a connecting client is supported by the server.
{.is-info}


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
e.g.: <code>335a.<u><b>12340</b></u></code>
&nbsp;

### majorVersion
e.g.: <code><u><b>3</b></u>35a.12340</code>
&nbsp;

### minorVersion
e.g.: <code>3<u><b>3</b></u>5a.12340</code>
&nbsp;

### bugfixVersion
e.g.: <code>33<u><b>5</b></u>a.12340</code>
&nbsp;

### hotfixVersion
e.g.: <code>335<u><b>a</b></u>.12340</code>
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
