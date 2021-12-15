---
title: account_last_played_character
description: 
published: true
date: 2021-12-15T18:51:26.545Z
tags: database, master, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int(10) | unsigned | PRI | NO |  |  |  |
| [region](#region) | tinyint(3) | unsigned | PRI | NO |  |  |  |
| [battlegroup](#battlegroup) | tinyint(3) | unsigned | PRI | NO |  |  |  |
| [realmId](#realmid) | int(10) | unsigned |  | YES | NULL |  |  |
| [characterName](#charactername) | varchar(12) | signed |  | YES | NULL |  |  |
| [characterGUID](#characterguid) | bigint(20) | unsigned |  | YES | NULL |  |  |
| [lastPlayedTime](#lastplayedtime) | int(10) | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### accountId
*- no description -*
&nbsp;

### region
*- no description -*
&nbsp;

### battlegroup
*- no description -*
&nbsp;

### realmId
*- no description -*
&nbsp;

### characterName
*- no description -*
&nbsp;

### characterGUID
*- no description -*
&nbsp;

### lastPlayedTime
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'account_muted'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>