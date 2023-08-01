---
title: logs_ip_actions
description: 
published: true
date: 2023-08-01T22:49:34.208Z
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
Unique log enumerator
&nbsp;

### account_id
references [account.id](../auth/account#id)
&nbsp;

### character_guid
references [characters.guid](../characters/characters#guid)
`0` on account actions
&nbsp;

### realm_id
The [realm](../auth/realmlist#id) this happened on.
`0` on account actions
&nbsp;

### type
| ID | Name | systemnote |
|----|------|---------|
| 0 | ACCOUNT_LOGIN | Logged into WoW |
| 1 | ACCOUNT_FAIL_LOGIN | Login to WoW Failed |
| 2 | ACCOUNT_CHANGE_PW | Password Reset Completed |
| 3 | ACCOUNT_CHANGE_PW_FAIL | Password Reset Failed |
| 4 | ACCOUNT_CHANGE_EMAIL | Email Change Completed |
| 5 | ACCOUNT_CHANGE_EMAIL_FAIL | Email Change Failed |
| 6 | :x: ACCOUNT_LOGOUT | OBSOLETE |
| 7 | CHARACTER_CREATE | Character Created |
| 8 | CHARACTER_LOGIN | Logged onto Character |
| 9 | CHARACTER_LOGOUT | Logged out of Character |
| 10 | CHARACTER_DELETE | Character Deleted |
| 11 | CHARACTER_FAILED_DELETE | Character Deletion Failed |
| 12 | UNKNOWN_ACTION | ERROR! Unknown action! |
{.dense}

### ip
IP address of the player.
&nbsp;

### systemnote
Directly tied to [**type**](#type).
&nbsp;

### unixtime
Timestamp as UnixTime integer.
&nbsp;

### time
Timestamp as DateTime string.
&nbsp;

### comment
Comments can be added manually.
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/rbac_account_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_account_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
