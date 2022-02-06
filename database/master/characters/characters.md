---
title: characters
description: 
published: true
date: 2022-02-06T18:26:45.274Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_void_storage" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_void_storage'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [account](#account) | int | unsigned | MUL | NO | 0 |  | Account Identifier |
| [name](#name) | varchar(12) | signed | MUL | NO |  |  |  |
| [slot](#slot) | tinyint | unsigned |  | NO | 0 |  |  |
| [race](#race) | tinyint | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint | unsigned |  | NO | 0 |  |  |
| [level](#level) | tinyint | unsigned |  | NO | 0 |  |  |
| [xp](#xp) | int | unsigned |  | NO | 0 |  |  |
| [money](#money) | bigint | unsigned |  | NO | 0 |  |  |
| [inventorySlots](#inventoryslots) | tinyint | unsigned |  | NO | 16 |  |  |
| [bankSlots](#bankslots) | tinyint | unsigned |  | NO | 0 |  |  |
| [restState](#reststate) | tinyint | unsigned |  | NO | 0 |  |  |
| [playerFlags](#playerflags) | int | unsigned |  | NO | 0 |  |  |
| [playerFlagsEx](#playerflagsex) | int | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [instance_id](#instance_id) | int | unsigned |  | NO | 0 |  |  |
| [dungeonDifficulty](#dungeondifficulty) | tinyint | unsigned |  | NO | 1 |  |  |
| [raidDifficulty](#raiddifficulty) | tinyint | unsigned |  | NO | 14 |  |  |
| [legacyRaidDifficulty](#legacyraiddifficulty) | tinyint | unsigned |  | NO | 3 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [taximask](#taximask) | text |  |  | NO |  |  |  |
| [online](#online) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [createTime](#createtime) | bigint | signed |  | NO | 0 |  |  |
| [createMode](#createmode) | tinyint | signed |  | NO | 0 |  |  |
| [cinematic](#cinematic) | tinyint | unsigned |  | NO | 0 |  |  |
| [totaltime](#totaltime) | int | unsigned |  | NO | 0 |  |  |
| [leveltime](#leveltime) | int | unsigned |  | NO | 0 |  |  |
| [logout_time](#logout_time) | bigint | signed |  | NO | 0 |  |  |
| [is_logout_resting](#is_logout_resting) | tinyint | unsigned |  | NO | 0 |  |  |
| [rest_bonus](#rest_bonus) | float |  |  | NO | 0 |  |  |
| [resettalents_cost](#resettalents_cost) | int | unsigned |  | NO | 0 |  |  |
| [resettalents_time](#resettalents_time) | bigint | signed |  | NO | 0 |  |  |
| [numRespecs](#numrespecs) | tinyint | unsigned |  | NO | 0 |  |  |
| [primarySpecialization](#primaryspecialization) | int | unsigned |  | NO | 0 |  |  |
| [trans_x](#trans_x) | float |  |  | NO | 0 |  |  |
| [trans_y](#trans_y) | float |  |  | NO | 0 |  |  |
| [trans_z](#trans_z) | float |  |  | NO | 0 |  |  |
| [trans_o](#trans_o) | float |  |  | NO | 0 |  |  |
| [transguid](#transguid) | bigint | unsigned |  | NO | 0 |  |  |
| [extra_flags](#extra_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [summonedPetNumber](#summonedpetnumber) | int | unsigned |  | NO | 0 |  |  |
| [at_login](#at_login) | smallint | unsigned |  | NO | 0 |  |  |
| [zone](#zone) | smallint | unsigned |  | NO | 0 |  |  |
| [death_expire_time](#death_expire_time) | bigint | signed |  | NO | 0 |  |  |
| [taxi_path](#taxi_path) | text |  |  | YES | NULL |  |  |
| [totalKills](#totalkills) | int | unsigned |  | NO | 0 |  |  |
| [todayKills](#todaykills) | smallint | unsigned |  | NO | 0 |  |  |
| [yesterdayKills](#yesterdaykills) | smallint | unsigned |  | NO | 0 |  |  |
| [chosenTitle](#chosentitle) | int | unsigned |  | NO | 0 |  |  |
| [watchedFaction](#watchedfaction) | int | unsigned |  | NO | 0 |  |  |
| [drunk](#drunk) | tinyint | unsigned |  | NO | 0 |  |  |
| [health](#health) | int | unsigned |  | NO | 0 |  |  |
| [power1](#power1) | int | unsigned |  | NO | 0 |  |  |
| [power2](#power2) | int | unsigned |  | NO | 0 |  |  |
| [power3](#power3) | int | unsigned |  | NO | 0 |  |  |
| [power4](#power4) | int | unsigned |  | NO | 0 |  |  |
| [power5](#power5) | int | unsigned |  | NO | 0 |  |  |
| [power6](#power6) | int | unsigned |  | NO | 0 |  |  |
| [power7](#power7) | int | unsigned |  | NO | 0 |  |  |
| [latency](#latency) | int | unsigned |  | NO | 0 |  |  |
| [activeTalentGroup](#activetalentgroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [lootSpecId](#lootspecid) | int | unsigned |  | NO | 0 |  |  |
| [exploredZones](#exploredzones) | longtext |  |  | YES | NULL |  |  |
| [equipmentCache](#equipmentcache) | longtext |  |  | YES | NULL |  |  |
| [knownTitles](#knowntitles) | longtext |  |  | YES | NULL |  |  |
| [actionBars](#actionbars) | tinyint | unsigned |  | NO | 0 |  |  |
| [deleteInfos_Account](#deleteinfos_account) | int | unsigned |  | YES | NULL |  |  |
| [deleteInfos_Name](#deleteinfos_name) | varchar(12) | signed |  | YES | NULL |  |  |
| [deleteDate](#deletedate) | bigint | signed |  | YES | NULL |  |  |
| [honor](#honor) | int | unsigned |  | NO | 0 |  |  |
| [honorLevel](#honorlevel) | int | unsigned |  | NO | 1 |  |  |
| [honorRestState](#honorreststate) | tinyint | unsigned |  | NO | 2 |  |  |
| [honorRestBonus](#honorrestbonus) | float |  |  | NO | 0 |  |  |
| [lastLoginBuild](#lastloginbuild) | int | unsigned |  | NO | 0 |  |  |
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

### slot
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

### inventorySlots
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

### playerFlagsEx
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

### dungeonDifficulty
*- no description -*
&nbsp;

### raidDifficulty
*- no description -*
&nbsp;

### legacyRaidDifficulty
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

### createTime
*- no description -*
&nbsp;

### createMode
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

### numRespecs
*- no description -*
&nbsp;

### primarySpecialization
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

### summonedPetNumber
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

### activeTalentGroup
*- no description -*
&nbsp;

### lootSpecId
*- no description -*
&nbsp;

### exploredZones
*- no description -*
&nbsp;

### equipmentCache
*- no description -*
&nbsp;

### knownTitles
*- no description -*
&nbsp;

### actionBars
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

### honor
*- no description -*
&nbsp;

### honorLevel
*- no description -*
&nbsp;

### honorRestState
*- no description -*
&nbsp;

### honorRestBonus
*- no description -*
&nbsp;

### lastLoginBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_void_storage" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_void_storage'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

