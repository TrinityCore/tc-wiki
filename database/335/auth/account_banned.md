---
title: account_banned
description: 
published: true
date: 2021-09-07T08:29:17.570Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:40.058Z
---

<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Account id |
| [bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |
| [active](#active) | tinyint(3) | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### id
The [account ID](/database/335/auth/account#id)
&nbsp;

### bandate
The date when the account was banned, in Unix time.
&nbsp;

### unbandate
The date when the account will be automatically unbanned, in Unix time. A value less than the current date means, in effect, a permanent ban.
&nbsp;

### bannedby
The character with the rights to the .ban command that banned the account.
&nbsp;

### banreason
The reason for the ban.
&nbsp;

### active
Boolean 0 or 1 controlling if the ban is currently active or not.
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

