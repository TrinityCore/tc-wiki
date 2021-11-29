---
title: battle_pets
description: 
published: true
date: 2021-11-29T19:25:01.674Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-21T03:48:21.661Z
---

<a href="https://dev.trinitycore.info/en/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_slots'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/battlenet_account_bans" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_bans'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[guid](#guid) | bigint(20) | signed | PRI | NO |  |  |  |
[battlenetAccountId](#battlenetAccountId) | int(10) | signed |  | NO |  |  |  |
[species](#species) | int(10) | signed |  | NO |  |  |  |
[breed](#breed) | smallint(5) | signed |  | NO |  |  |  |
[level](#level) | smallint(5) | signed |  | NO | 1 |  |  |
[exp](#exp) | smallint(5) | signed |  | NO | 0 |  |  |
[health](#health) | int(10) | signed |  | NO | 1 |  |  |
[quality](#quality) | tinyint(3) | signed |  | NO | 0 |  |  |
[flags](#flags) | smallint(5) | signed |  | NO | 0 |  |  |
[name](#name) | varchar(12) | signed |  | NO |  |  |  |
[nameTimestamp](#nameTimestamp) | bigint(20) | signed |  | NO | 0 |  |  |
[owner](#owner) | bigint(20) | signed |  | YES |  |  |  |
[ownerRealmId](#ownerrealmid) | int(11) | signed |  | YES |  |  |  |

&nbsp;
## Description of fields

### guid   
*- no description -*
&nbsp;
    
### battlenetAccountId  
*- no description -*
&nbsp;

### species
*- no description -*
&nbsp;

### breed
*- no description -*
&nbsp;

### level
*- no description -*
&nbsp;

### exp
*- no description -*
&nbsp;

### health
*- no description -*
&nbsp;

### quality
*- no description -*
&nbsp;

### flags
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### nameTimestamp
*- no description -*
&nbsp;

### owner
*- no description -*
&nbsp;

### ownerRealmId
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_slots'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/auth/battlenet_account_bans" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_bans'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>