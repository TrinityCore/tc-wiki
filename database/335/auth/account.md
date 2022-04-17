---
title: account
description: 
published: true
date: 2022-04-17T20:49:50.493Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:34.489Z
---

<a href="https://trinitycore.info/en/database/335/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_rbac'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  | auto_increment | Identifier |
| [username](#username) | varchar(32) |  | UNI | NO | '' |  |  |
| [salt](#salt) | binary(32) |  |  | NO |  |  |  |
| [verifier](#verifier) | binary(32) |  |  | NO |  |  |  |
| [session_key_auth](#session_key_auth) | binary(40) |  |  | YES | NULL |  |  |
| [session_key_bnet](#session_key_bnet) | varbinary(64) |  |  | YES | NULL |  |  |
| [totp_secret](#totp_secret) | varbinary(128) |  |  | YES | NULL |  |  |
| [email](#email) | varchar(255) |  |  | NO | '' |  |  |
| [reg_mail](#reg_mail) | varchar(255) |  |  | NO | '' |  |  |
| [joindate](#joindate) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| [last_ip](#last_ip) | varchar(15) |  |  | NO | 127.0.0.1 |  |  |
| [last_attempt_ip](#last_attempt_ip) | varchar(15) |  |  | NO | 127.0.0.1 |  |  |
| [failed_logins](#failed_logins) | int | unsigned |  | NO | 0 |  |  |
| [locked](#locked) | tinyint | unsigned |  | NO | 0 |  |  |
| [lock_country](#lock_country) | varchar(2) |  |  | NO | 00 |  |  |
| [last_login](#last_login) | timestamp |  |  | YES | NULL |  |  |
| [online](#online) | tinyint | unsigned |  | NO | 0 |  |  |
| [expansion](#expansion) | tinyint | unsigned |  | NO | 2 |  |  |
| [mutetime](#mutetime) | bigint | signed |  | NO | 0 |  |  |
| [mutereason](#mutereason) | varchar(255) |  |  | NO | '' |  |  |
| [muteby](#muteby) | varchar(50) |  |  | NO | '' |  |  |
| [locale](#locale) | tinyint | unsigned |  | NO | 0 |  |  |
| [os](#os) | varchar(3) |  |  | NO | '' |  |  |
| [recruiter](#recruiter) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
The unique account ID.
&nbsp;

### username
The account name.
&nbsp;

### salt
*- no description -*
&nbsp;

### verifier
*- no description -*
&nbsp;

### session_key_auth
*- no description -*
&nbsp;

### session_key_bnet
*- no description -*
&nbsp;

### totp_secret
*- no description -*
&nbsp;

### email
The e-mail address associated with this account.
&nbsp;

### reg_mail
The registration e-mail address associated with this account.
&nbsp;

### joindate
The date when the account was created.
&nbsp;

### last_ip
The last IP used by the person who logged in the account.
&nbsp;

### last_attempt_ip
The last IP used by the person who tried to log into the account.
&nbsp;

### failed_logins
The number of failed logins attempted on the account.
&nbsp;

### locked
Boolean 0 or 1 controlling if the account has been locked or not. This can be controlled with the ".account lock" GM command. 
If locked (1), the user can only log in with their last_ip. If unlocked (0), a user can log in from any IP, and their last_ip will be updated if it is different. ".Ban account" does not lock it.
&nbsp;

### lock_country
*- no description -*
&nbsp;

### last_login
The date when the account was last logged into.
&nbsp;

### online
Boolean 0 or 1 controlling if the account is currently logged in and online.
&nbsp;

### expansion
Integer 0 - 2 controlling if the client logged in on the account has any expansions. (for example if client is TBC, but expansion is set to 0, it will not be able to enter outlands and etc.)

|Value|Expansion|
|:---:|:---: |
|0|Vanilla|
|1|The Burning Crusade (TBC)|
|2|Wrath of the Lich King (WotLK)|
&nbsp;

### mutetime
The time, in Unix time, when the account will be unmuted. To see when mute will be expired you can use this query:

<div class="next-codeblock-no-line-numbers"></div>

```bash
SELECT FROM_UNIXTIME(`mutetime`);
```
&nbsp;

### mutereason
The reason for the mute.
&nbsp;

### muteby
The character name with the rights to the .mute command that give the mute.
&nbsp;

### locale
The locale used by the client logged into this account. If multiple locale data has been configured and added to the world servers, the world servers will return the proper locale strings to the client. See localization IDs
&nbsp;

### os
Stores information about client's OS. Used by Warden system.

- Win
- Mac
&nbsp;

### recruiter
The account ID of another account. Used for recuit-a-friend system. See [account.id](#id)
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_rbac'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
