---
title: logs
description: 
published: true
date: 2021-09-07T12:12:52.963Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:53.163Z
---

<a href="https://dev.trinitycore.info/en/database/335/auth/ip_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ip_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/logs_ip_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'logs_ip_actions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table stores all logs from authserver if database logging in config is enabled.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [time](#time) | int(10) | unsigned |  | NO |  |  |  |
| [realm](#realm) | int(10) | unsigned |  | NO |  |  |  |
| [type](#type) | varchar(250) | signed |  | NO |  |  |  |
| [level](#level) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [string](#string) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### time
A unixtime timestamp indicating when this string was logged.
&nbsp;

### realm
The RealmID of the realm this log string came from. 0 if realmd.
&nbsp;

### type
The type of log this is:

```LOG_TYPE_STRING = 0 — a normal informative string
LOG_TYPE_ERROR = 1 — some sort of error
LOG_TYPE_BASIC = 2 — basic information
LOG_TYPE_DETAIL = 3 — detailed information
LOG_TYPE_DEBUG = 4 — debugging information
LOG_TYPE_CHAR = 5 — character-related
LOG_TYPE_WORLD = 6 — world packet dump
LOG_TYPE_RA = 7 — remote access logs
LOG_TYPE_GM = 8 — gm command logs
LOG_TYPE_CRASH = 9 — crash alarm logs
LOG_TYPE_CHAT = 10 – chat/message logs
```
&nbsp;

### level
Depends on LogLevel in authserver.conf

- 1 - (Trace)
- 2 - (Debug)
- 3 - (Info)
- 4 - (Warn)
- 5 - (Error)
- 6 - (Fatal)
&nbsp;

### string
The actual string that has been logged.
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/auth/ip_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ip_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/logs_ip_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'logs_ip_actions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

