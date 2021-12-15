---
title: autobroadcast
description: 
published: true
date: 2021-09-07T08:55:33.143Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:45.276Z
---

<a href="https://trinitycore.info/de/database/335/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_muted'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/build_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'build_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [realmid](#realmid) | int(11) | signed | PRI | NO | -1 |  |  |
| [id](#id) | tinyint(3) | unsigned | PRI | NO |  | auto_increment |  |
| [weight](#weight) | tinyint(3) | unsigned |  | YES | 1 |  |  |
| [text](#text) | longtext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### realmid
The [realmlist ID](/database/335/auth/realmlist#id). Defines which realm this entry belongs to. Use **-1** for all realms to load this entry.
&nbsp;

### id
Unique identifier key per realm. Entries with same id will override each other without warnings - this can be used to replace -1 realmid entry on a specific realm.
&nbsp;

### weight
A non-negative integer. Entries with higher weight have more chance to get picked.
&nbsp;

### text
The text to broadcast. Color and item/spell/quest link formating codes can be used.
&nbsp;

<a href="https://trinitycore.info/de/database/335/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_muted'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/build_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'build_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

