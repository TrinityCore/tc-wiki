---
title: ip_banned
description: 
published: true
date: 2021-09-07T09:30:10.232Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:50.536Z
---

<a href="https://trinitycore.info/en/database/335/auth/build_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'build_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'logs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ip](#ip) | varchar(15) | signed | PRI | NO | 127.0.0.1 |  |  |
| [bandate](#bandate) | int(10) | unsigned | PRI | NO |  |  |  |
| [unbandate](#unbandate) | int(10) | unsigned |  | NO |  |  |  |
| [bannedby](#bannedby) | varchar(50) | signed |  | NO | [Console] |  |  |
| [banreason](#banreason) | varchar(255) | signed |  | NO | no reason |  |  |
&nbsp;
## Description of fields

### ip
The IP address that is banned.
&nbsp;

### bandate
The date when the IP was first banned, in Unix time.
&nbsp;

### unbandate
The date when the IP will be unbanned in Unix time. Any date that is set lower than the current date basically classifies as a permanent ban as it will never auto expire.
&nbsp;

### bannedby
The name of the character that banned the IP. The character should belong to an account with the rights to the .ban command in-game.
&nbsp;

### banreason
The reason given for the IP ban.
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/build_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'build_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/logs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'logs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

