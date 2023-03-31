---
title: vw_log_history
description: 
published: true
date: 2022-11-21T22:45:41.222Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-12-15T19:38:24.675Z
---

<a href="https://trinitycore.info/en/database/master/auth/uptime" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'uptime'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vw_rbac'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [First Logged](#first logged) | datetime |  |  | YES | NULL |  |  |
| [Last Logged](#last logged) | datetime |  |  | YES | NULL |  |  |
| [Occurrences](#occurrences) | bigint | signed |  | NO | 0 |  |  |
| [Realm](#realm) | varchar(32) |  |  | YES | '' |  |  |
| [type](#type) | varchar(250) |  |  | NO |  |  |  |
| [level](#level) | tinyint | unsigned |  | NO | 0 |  |  |
| [string](#string) | mediumtext |  |  | YES | NULL |  |  |
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

<a href="https://trinitycore.info/en/database/master/auth/uptime" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'uptime'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vw_rbac'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
