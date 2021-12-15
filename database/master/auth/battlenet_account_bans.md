---
title: battlenet_account_bans
description: This table lists all of the battlenet accounts that have been banned along with the date when (or if) the ban will expire.
published: true
date: 2021-12-15T18:51:26.547Z
tags: database, master, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/auth/battle_pets" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pets'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_heirlooms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_heirlooms'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Account id |
| [bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |
&nbsp;
## Description of fields

### id
The battlenet account ID. See [battlenet_accounts.id](/database/master/auth/battlenet_accounts#id).
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

<a href="https://trinitycore.info/en/database/master/auth/battle_pets" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pets'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_heirlooms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_heirlooms'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>