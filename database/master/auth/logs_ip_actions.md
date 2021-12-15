---
title: logs_ip_actions
description: Used to log ips of individual actions
published: true
date: 2021-12-15T18:51:26.549Z
tags: database, master, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/rbac_account_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_account_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  | auto_increment | Unique Identifier |
| [account_id](#account_id) | int(10) | unsigned |  | NO |  |  | Account ID |
| [character_guid](#character_guid) | bigint(20) | unsigned |  | NO |  |  | Character Guid |
| [type](#type) | tinyint(3) | unsigned |  | NO |  |  |  |
| [ip](#ip) | varchar(15) | signed |  | NO | 127.0.0.1 |  |  |
| [systemnote](#systemnote) | text |  |  | YES | NULL |  | Notes inserted by system |
| [unixtime](#unixtime) | int(10) | unsigned |  | NO |  |  | Unixtime |
| [time](#time) | timestamp | signed |  | NO | CURRENT_TIMESTAMP |  | Timestamp |
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

<a href="https://trinitycore.info/en/database/master/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/rbac_account_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_account_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
