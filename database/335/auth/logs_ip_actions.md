---
title: logs_ip_actions
description: 
published: true
date: 2022-04-17T20:49:50.554Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:55.797Z
---

<a href="https://trinitycore.info/en/database/335/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/rbac_account_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_account_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Used to log ips of individual actions
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  | auto_increment | Unique Identifier |
| [account_id](#account_id) | int | unsigned |  | NO |  |  | Account ID |
| [character_guid](#character_guid) | bigint | unsigned |  | NO |  |  | Character Guid |
| [realm_id](#realm_id) | int | unsigned |  | NO | 0 |  | Realm ID |
| [type](#type) | tinyint | unsigned |  | NO |  |  |  |
| [ip](#ip) | varchar(15) |  |  | NO | 127.0.0.1 |  |  |
| [systemnote](#systemnote) | text |  |  | YES | NULL |  | Notes inserted by system |
| [unixtime](#unixtime) | int | unsigned |  | NO |  |  | Unixtime |
| [time](#time) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED | Timestamp |
| [comment](#comment) | text |  |  | YES | NULL |  | Allows users to add a comment |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### account_id
*- no description -*
&nbsp;

### character_guid
*- no description -*
&nbsp;

### realm_id
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### ip
*- no description -*
&nbsp;

### systemnote
*- no description -*
&nbsp;

### unixtime
*- no description -*
&nbsp;

### time
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/rbac_account_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_account_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
