---
title: vw_log_history
description: 
published: true
date: 2021-08-30T22:01:08.224Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/auth/uptime" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'uptime'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [First Logged](#first logged) | datetime |  |  | YES | NULL |  |  |
| [Last Logged](#last logged) | datetime |  |  | YES | NULL |  |  |
| [Occurrences](#occurrences) | bigint(21) | signed |  | NO | 0 |  |  |
| [Realm](#realm) | varchar(32) | signed |  | YES | '' |  |  |
| [type](#type) | varchar(250) | signed |  | NO |  |  |  |
| [level](#level) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [string](#string) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### First Logged
*- no description -*
&nbsp;

### Last Logged
*- no description -*
&nbsp;

### Occurrences
*- no description -*
&nbsp;

### Realm
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### level
*- no description -*
&nbsp;

### string
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/uptime" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'uptime'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

