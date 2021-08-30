---
title: characters
description: 
published: true
date: 2021-08-30T21:53:23.597Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [account](#account) | int(10) | unsigned | MUL | NO | 0 |  | Account Identifier |
| [name](#name) | varchar(12) | signed | MUL | NO |  |  |  |
| [race](#race) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [level](#level) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [xp](#xp) | int(10) | unsigned |  | NO | 0 |  |  |
| [money](#money) | int(10) | unsigned |  | NO | 0 |  |  |
| [skin](#skin) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [face](#face) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [hairStyle](#hairstyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [hairColor](#haircolor) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [facialStyle](#facialstyle) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [bankSlots](#bankslots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [restState](#reststate) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [playerFlags](#playerflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint(5) | unsigned |  | NO | 0 |  | Map Identifier |
| [instance_id](#instance_id) | int(10) | unsigned |  | NO | 0 |  |  |
| [instance_mode_mask](#instance_mode_mask) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [taximask](#taximask) | text |  |  | NO |  |  |  |
| [online](#online) | tinyint(3) | unsigned | MUL | NO | 0 |  |  |
| [cinematic](#cinematic) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [totaltime](#totaltime) | int(10) | unsigned |  | NO | 0 |  |  |
| [leveltime](#leveltime) | int(10) | unsigned |  | NO | 0 |  |  |
| [logout_time](#logout_time) | int(10) | unsigned |  | NO | 0 |  |  |
| [is_logout_resting](#is_logout_resting) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [rest_bonus](#rest_bonus) | float |  |  | NO | 0 |  |  |
| [resettalents_cost](#resettalents_cost) | int(10) | unsigned |  | NO | 0 |  |  |
| [resettalents_time](#resettalents_time) | int(10) | unsigned |  | NO | 0 |  |  |
| [trans_x](#trans_x) | float |  |  | NO | 0 |  |  |
| [trans_y](#trans_y) | float |  |  | NO | 0 |  |  |
| [trans_z](#trans_z) | float |  |  | NO | 0 |  |  |
| [trans_o](#trans_o) | float |  |  | NO | 0 |  |  |
| [transguid](#transguid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [extra_flags](#extra_flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [stable_slots](#stable_slots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [at_login](#at_login) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [zone](#zone) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [death_expire_time](#death_expire_time) | int(10) | unsigned |  | NO | 0 |  |  |
| [taxi_path](#taxi_path) | text |  |  | YES | NULL |  |  |
| [arenaPoints](#arenapoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [totalHonorPoints](#totalhonorpoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [todayHonorPoints](#todayhonorpoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [yesterdayHonorPoints](#yesterdayhonorpoints) | int(10) | unsigned |  | NO | 0 |  |  |
| [totalKills](#totalkills) | int(10) | unsigned |  | NO | 0 |  |  |
| [todayKills](#todaykills) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [yesterdayKills](#yesterdaykills) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [chosenTitle](#chosentitle) | int(10) | unsigned |  | NO | 0 |  |  |
| [knownCurrencies](#knowncurrencies) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [watchedFaction](#watchedfaction) | int(10) | unsigned |  | NO | 0 |  |  |
| [drunk](#drunk) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [health](#health) | int(10) | unsigned |  | NO | 0 |  |  |
| [power1](#power1) | int(10) | unsigned |  | NO | 0 |  |  |
| [power2](#power2) | int(10) | unsigned |  | NO | 0 |  |  |
| [power3](#power3) | int(10) | unsigned |  | NO | 0 |  |  |
| [power4](#power4) | int(10) | unsigned |  | NO | 0 |  |  |
| [power5](#power5) | int(10) | unsigned |  | NO | 0 |  |  |
| [power6](#power6) | int(10) | unsigned |  | NO | 0 |  |  |
| [power7](#power7) | int(10) | unsigned |  | NO | 0 |  |  |
| [latency](#latency) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [talentGroupsCount](#talentgroupscount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [activeTalentGroup](#activetalentgroup) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [exploredZones](#exploredzones) | longtext |  |  | YES | NULL |  |  |
| [equipmentCache](#equipmentcache) | longtext |  |  | YES | NULL |  |  |
| [ammoId](#ammoid) | int(10) | unsigned |  | NO | 0 |  |  |
| [knownTitles](#knowntitles) | longtext |  |  | YES | NULL |  |  |
| [actionBars](#actionbars) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [grantableLevels](#grantablelevels) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [deleteInfos_Account](#deleteinfos_account) | int(10) | unsigned |  | YES | NULL |  |  |
| [deleteInfos_Name](#deleteinfos_name) | varchar(12) | signed |  | YES | NULL |  |  |
| [deleteDate](#deletedate) | int(10) | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### account
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### race
*- no description -*
&nbsp;

### class
*- no description -*
&nbsp;

### gender
*- no description -*
&nbsp;

### level
*- no description -*
&nbsp;

### xp
*- no description -*
&nbsp;

### money
*- no description -*
&nbsp;

### skin
*- no description -*
&nbsp;

### face
*- no description -*
&nbsp;

### hairStyle
*- no description -*
&nbsp;

### hairColor
*- no description -*
&nbsp;

### facialStyle
*- no description -*
&nbsp;

### bankSlots
*- no description -*
&nbsp;

### restState
*- no description -*
&nbsp;

### playerFlags
*- no description -*
&nbsp;

### position_x
*- no description -*
&nbsp;

### position_y
*- no description -*
&nbsp;

### position_z
*- no description -*
&nbsp;

### map
*- no description -*
&nbsp;

### instance_id
*- no description -*
&nbsp;

### instance_mode_mask
*- no description -*
&nbsp;

### orientation
*- no description -*
&nbsp;

### taximask
*- no description -*
&nbsp;

### online
*- no description -*
&nbsp;

### cinematic
*- no description -*
&nbsp;

### totaltime
*- no description -*
&nbsp;

### leveltime
*- no description -*
&nbsp;

### logout_time
*- no description -*
&nbsp;

### is_logout_resting
*- no description -*
&nbsp;

### rest_bonus
*- no description -*
&nbsp;

### resettalents_cost
*- no description -*
&nbsp;

### resettalents_time
*- no description -*
&nbsp;

### trans_x
*- no description -*
&nbsp;

### trans_y
*- no description -*
&nbsp;

### trans_z
*- no description -*
&nbsp;

### trans_o
*- no description -*
&nbsp;

### transguid
*- no description -*
&nbsp;

### extra_flags
*- no description -*
&nbsp;

### stable_slots
*- no description -*
&nbsp;

### at_login
*- no description -*
&nbsp;

### zone
*- no description -*
&nbsp;

### death_expire_time
*- no description -*
&nbsp;

### taxi_path
*- no description -*
&nbsp;

### arenaPoints
*- no description -*
&nbsp;

### totalHonorPoints
*- no description -*
&nbsp;

### todayHonorPoints
*- no description -*
&nbsp;

### yesterdayHonorPoints
*- no description -*
&nbsp;

### totalKills
*- no description -*
&nbsp;

### todayKills
*- no description -*
&nbsp;

### yesterdayKills
*- no description -*
&nbsp;

### chosenTitle
*- no description -*
&nbsp;

### knownCurrencies
*- no description -*
&nbsp;

### watchedFaction
*- no description -*
&nbsp;

### drunk
*- no description -*
&nbsp;

### health
*- no description -*
&nbsp;

### power1
*- no description -*
&nbsp;

### power2
*- no description -*
&nbsp;

### power3
*- no description -*
&nbsp;

### power4
*- no description -*
&nbsp;

### power5
*- no description -*
&nbsp;

### power6
*- no description -*
&nbsp;

### power7
*- no description -*
&nbsp;

### latency
*- no description -*
&nbsp;

### talentGroupsCount
*- no description -*
&nbsp;

### activeTalentGroup
*- no description -*
&nbsp;

### exploredZones
*- no description -*
&nbsp;

### equipmentCache
*- no description -*
&nbsp;

### ammoId
*- no description -*
&nbsp;

### knownTitles
*- no description -*
&nbsp;

### actionBars
*- no description -*
&nbsp;

### grantableLevels
*- no description -*
&nbsp;

### deleteInfos_Account
*- no description -*
&nbsp;

### deleteInfos_Name
*- no description -*
&nbsp;

### deleteDate
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

