---
title: account
description:
published: true
date: 2023-08-01T19:13:27.028Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:34.489Z
---

<a href="https://trinitycore.info/en/database/335/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_rbac'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
>
> This table holds information on all available accounts.
{.is-info}


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
### verifier
auth components (see [TrinityCore#25157](https://github.com/TrinityCore/TrinityCore/issues/25157))
&nbsp;

### session_key_auth
Key generated after successful auth.
&nbsp;

### session_key_bnet
*- not used on 3.3.5. -*
&nbsp;

### totp_secret
The authenticator key.

Key can be generated through the Google Authenticator API, a 3rd-party TOTP generator, or manually specified.
[Implementation link on Wikipedia](http://en.wikipedia.org/wiki/Google_Authenticator#Implementations) for the Google Authenticator API
&nbsp;

### email
The e-mail address associated with this account.
&nbsp;

### reg_mail
The registration e-mail address associated with this account.
&nbsp;

### joindate
The Unix timestamp when the account was created.
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
Controlls if the account has been locked to it's last IP. This can be controlled with the `.account lock` command.
The `.ban account` command does not lock it.
* 0: the user can log in from any IP, and their **last_ip** will be updated if it is different
* 1: the user can only log in with their **last_ip**.
&nbsp;

### lock_country
A country code from [IP2Location](https://lite.ip2location.com/database/ip-country)

worldserver.conf [`IPLocationFile`](https://trinitycore.info/en/files/configuration/home) needs to point to the table fom the service above for this feature to be enabled.
&nbsp;

### last_login
The Unix timestamp when the account was last logged into.
&nbsp;

### online
Signifies if the account is currently logged in and online.
* 0: offline
* 1: online
&nbsp;

### expansion
Integer 0 – 2 controlling if the client logged in on the account has any expansions. (for example if client is TBC, but expansion is set to 0, it will not be able to enter outlands and etc.)

|Value|Expansion|
|:---:|:---: |
|0|Vanilla|
|1|The Burning Crusade (TBC)|
|2|Wrath of the Lich King (WotLK)|
{.dense}

&nbsp;

### mutetime
The Unix timestamp, when the account will be unmuted.

To see when mute will be expired you can use this query:
```sql
SELECT FROM_UNIXTIME(`mutetime`) FROM `account`;
```
&nbsp;

### mutereason
The reason for the mute.
&nbsp;

### muteby
The character name with the rights to the `.mute` command that give the mute.
&nbsp;

### locale
The locale used by the client logged into this account. If multiple locale data has been configured and added to the world servers, the world servers will return the proper locale strings to the client.

See [Localization](/how-to/localization):
| ID | Name |
|----|------|
| 0 | English |
| 1 | Korean |
| 2 | French |
| 3 | German |
| 4 | Chinese |
| 5 | Taiwanese |
| 6 | Spanish (EU) |
| 7 | Spanish (Latin America) |
| 8 | Russian |
{.dense}

&nbsp;

### os
Stores information about client's OS. Used by Warden system.
* `Win`
* `Mac`
&nbsp;

### recruiter
The [account id](#id) of another account. Used for recuit-a-friend system.
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/vw_rbac" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_rbac'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
