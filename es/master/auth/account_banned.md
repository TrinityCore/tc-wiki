---
title: account_banned
description: This table lists all of the accounts that have been banned along with the date when (or if) the ban will expire.
published: true
date: 2021-09-07T10:46:04.713Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:45:13.968Z
---

<a href="https://dev.trinitycore.info/en/database/master/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/account_last_played_character" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_last_played_character'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table lists all of the accounts that have been banned along with the date when (or if) the ban will expire.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|---|---|---|---|---|
[id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Account id |
[bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
[unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
[bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
[banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |
[active](#active) | tinyint(3) | unsigned |  | NO | 1 |  |  |

&nbsp;
## Description of fields

### id   
The account ID. See [account.id](/database/master/auth/account#id)
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

<a href="https://dev.trinitycore.info/en/database/master/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/account_last_played_character" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_last_played_character'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>