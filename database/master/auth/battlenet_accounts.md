---
title: battlenet_accounts
description: This table holds information on all available battlenet accounts.
published: true
date: 2024-02-11T19:53:51.135Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T14:34:01.031Z
---

<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_transmog_illusions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlenet_account_transmog_illusions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_item_appearances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_item_appearances'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  | auto_increment | Identifier |
| [email](#email) | varchar(320) |  |  | NO |  |  |  |
| [srp_version](#srp_version) | tinyint | signed |  | NO | 1 |  |  |
| [salt](#salt) | binary(32) |  |  | NO |  |  |  |
| [verifier](#verifier) | blob |  |  | NO |  |  |  |
| [joindate](#joindate) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| [last_ip](#last_ip) | varchar(15) |  |  | NO | 127.0.0.1 |  |  |
| [failed_logins](#failed_logins) | int | unsigned |  | NO | 0 |  |  |
| [locked](#locked) | tinyint | unsigned |  | NO | 0 |  |  |
| [lock_country](#lock_country) | varchar(2) |  |  | NO | 00 |  |  |
| [last_login](#last_login) | timestamp |  |  | YES | NULL |  |  |
| [online](#online) | tinyint | unsigned |  | NO | 0 |  |  |
| [locale](#locale) | tinyint | unsigned |  | NO | 0 |  |  |
| [os](#os) | varchar(4) |  |  | NO | '' |  |  |
| [LastCharacterUndelete](#lastcharacterundelete) | int | unsigned |  | NO | 0 |  |  |
| [LoginTicket](#loginticket) | varchar(64) |  |  | YES | NULL |  |  |
| [LoginTicketExpiry](#loginticketexpiry) | int | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id
The unique account ID.
&nbsp;

### email
The e-mail address associated with this account.
&nbsp;

### srp_version
*- no description -*
&nbsp;

### salt
*- no description -*
&nbsp;

### verifier
*- no description -*
&nbsp;

### joindate
The date when the account was created.
&nbsp;

### last_ip
The last IP used by the person who logged in the account.
&nbsp;

### failed_logins
The number of failed logins attempted on the account.
&nbsp;

### locked
Boolean 0 or 1 controlling if the account has been locked or not. This can be controlled with the ".account lock" GM command. If locked (1), the user can only log in with their last_ip. If unlocked (0), a user can log in from any IP, and their last_ip will be updated if it is different. ".Ban account" does not lock it.
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

### locale
The locale used by the client logged into this account. If multiple locale data has been configured and added to the world servers, the world servers will return the proper locale strings to the client. See localization IDs
&nbsp;

### os
Stores information about client's OS. Used by Warden system.

- Win
- Mac
&nbsp;

### LastCharacterUndelete
*- no description -*
&nbsp;

### LoginTicket
*- no description -*
&nbsp;

### LoginTicketExpiry
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_transmog_illusions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlenet_account_transmog_illusions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_item_appearances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_item_appearances'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
