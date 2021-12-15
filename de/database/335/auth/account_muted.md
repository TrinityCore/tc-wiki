---
title: account_muted
description: 
published: true
date: 2021-09-07T08:38:38.259Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:42.686Z
---

<a href="https://trinitycore.info/de/database/335/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/autobroadcast" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'autobroadcast'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [mutedate](#mutedate) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [mutetime](#mutetime) | int(10) | unsigned |  | NO | 0 |  |  |
| [mutedby](#mutedby) | varchar(50) | signed |  | NO |  |  |  |
| [mutereason](#mutereason) | varchar(255) | signed |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
The Account ID of the muted player.
&nbsp;

### mutedate
*- no description -*
&nbsp;

### mutetime
*- no description -*
&nbsp;

### mutedby
*- no description -*
&nbsp;

### mutereason
*- no description -*
&nbsp;

<a href="https://trinitycore.info/de/database/335/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_banned'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/autobroadcast" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'autobroadcast'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

