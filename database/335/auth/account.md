---
title: account
description: 
published: true
date: 2021-08-30T21:52:56.368Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/vw_log_history" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_log_history'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  | auto_increment | Identifier |
| [username](#username) | varchar(32) | signed | UNI | NO | '' |  |  |
| [salt](#salt) | binary(32) | signed |  | NO |  |  |  |
| [verifier](#verifier) | binary(32) | signed |  | NO |  |  |  |
| [session_key_auth](#session_key_auth) | binary(40) | signed |  | YES | NULL |  |  |
| [session_key_bnet](#session_key_bnet) | varbinary(64) | signed |  | YES | NULL |  |  |
| [totp_secret](#totp_secret) | varbinary(128) | signed |  | YES | NULL |  |  |
| [email](#email) | varchar(255) | signed |  | NO | '' |  |  |
| [reg_mail](#reg_mail) | varchar(255) | signed |  | NO | '' |  |  |
| [joindate](#joindate) | timestamp | signed |  | NO | CURRENT_TIMESTAMP |  |  |
| [last_ip](#last_ip) | varchar(15) | signed |  | NO | 127.0.0.1 |  |  |
| [last_attempt_ip](#last_attempt_ip) | varchar(15) | signed |  | NO | 127.0.0.1 |  |  |
| [failed_logins](#failed_logins) | int(10) | unsigned |  | NO | 0 |  |  |
| [locked](#locked) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [lock_country](#lock_country) | varchar(2) | signed |  | NO | 00 |  |  |
| [last_login](#last_login) | timestamp | signed |  | YES | NULL |  |  |
| [online](#online) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [expansion](#expansion) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [mutetime](#mutetime) | bigint(20) | signed |  | NO | 0 |  |  |
| [mutereason](#mutereason) | varchar(255) | signed |  | NO | '' |  |  |
| [muteby](#muteby) | varchar(50) | signed |  | NO | '' |  |  |
| [locale](#locale) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [os](#os) | varchar(3) | signed |  | NO | '' |  |  |
| [recruiter](#recruiter) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### username
*- no description -*
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
*- no description -*
&nbsp;

### reg_mail
*- no description -*
&nbsp;

### joindate
*- no description -*
&nbsp;

### last_ip
*- no description -*
&nbsp;

### last_attempt_ip
*- no description -*
&nbsp;

### failed_logins
*- no description -*
&nbsp;

### locked
*- no description -*
&nbsp;

### lock_country
*- no description -*
&nbsp;

### last_login
*- no description -*
&nbsp;

### online
*- no description -*
&nbsp;

### expansion
*- no description -*
&nbsp;

### mutetime
*- no description -*
&nbsp;

### mutereason
*- no description -*
&nbsp;

### muteby
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### os
*- no description -*
&nbsp;

### recruiter
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/vw_log_history" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_log_history'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

