---
title: realmlist
description: 
published: true
date: 2021-08-30T22:01:08.222Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  | auto_increment |  |
| [name](#name) | varchar(32) | signed | UNI | NO | '' |  |  |
| [address](#address) | varchar(255) | signed |  | NO | 127.0.0.1 |  |  |
| [localAddress](#localaddress) | varchar(255) | signed |  | NO | 127.0.0.1 |  |  |
| [localSubnetMask](#localsubnetmask) | varchar(255) | signed |  | NO | 255.255.255.0 |  |  |
| [port](#port) | smallint(5) | unsigned |  | NO | 8085 |  |  |
| [icon](#icon) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [flag](#flag) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [timezone](#timezone) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [allowedSecurityLevel](#allowedsecuritylevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [population](#population) | float | unsigned |  | NO | 0 |  |  |
| [gamebuild](#gamebuild) | int(10) | unsigned |  | NO | 12340 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### address
*- no description -*
&nbsp;

### localAddress
*- no description -*
&nbsp;

### localSubnetMask
*- no description -*
&nbsp;

### port
*- no description -*
&nbsp;

### icon
*- no description -*
&nbsp;

### flag
*- no description -*
&nbsp;

### timezone
*- no description -*
&nbsp;

### allowedSecurityLevel
*- no description -*
&nbsp;

### population
*- no description -*
&nbsp;

### gamebuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

