---
title: account_banned
description: 
published: true
date: 2021-08-30T21:52:56.371Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
*- no description -*
&nbsp;

### bandate
*- no description -*
&nbsp;

### unbandate
*- no description -*
&nbsp;

### bannedby
*- no description -*
&nbsp;

### banreason
*- no description -*
&nbsp;

### active
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_access'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

