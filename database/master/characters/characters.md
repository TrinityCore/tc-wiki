---
title: characters
description: 
published: true
date: 2021-08-30T09:14:40.969Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/character_void_storage" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_void_storage'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [account](#account) | int(10) | unsigned | MUL | NO | 0 |  | Account Identifier |
| [name](#name) | varchar(12) | signed | MUL | NO |  |  |  |
| [slot](#slot) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [race](#race) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [level](#level) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [xp](#xp) | int(10) | unsigned |  | NO | 0 |  |  |
| [money](#money) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [inventorySlots](#inventorySlots) | tinyint(3) | unsigned |  | NO | 16 |  |  |
| [bankSlots](#bankSlots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [restState](#restState) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [playerFlags](#playerFlags) | int(10) | unsigned |  | NO | 0 |  |  |
| [playerFlagsEx](#playerFlagsEx) | int(10) | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint(5) | unsigned |  | NO | 0 |  | Map Identifier |
| [instance_id](#instance_id) | int(10) | unsigned |  | NO | 0 |  |  |
| [dungeonDifficulty](#dungeonDifficulty) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [raidDifficulty](#raidDifficulty) | tinyint(3) | unsigned |  | NO | 14 |  |  |
| [legacyRaidDifficulty](#legacyRaidDifficulty) | tinyint(3) | unsigned |  | NO | 3 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [taximask](#taximask) | text |  |  | NO |  |  |  |
| [online](#online) | tinyint(3) | unsigned | MUL | NO | 0 |  |  |
| [cinematic](#cinematic) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [totaltime](#totaltime) | int(10) | unsigned |  | NO | 0 |  |  |
| [leveltime](#leveltime) | int(10) | unsigned |  | NO | 0 |  |  |
| [logout_time](#logout_time) | bigint(20) | signed |  | NO | 0 |  |  |
| [is_logout_resting](#is_logout_resting) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [rest_bonus](#rest_bonus) | float |  |  | NO | 0 |  |  |
| [resettalents_cost](#resettalents_cost) | int(10) | unsigned |  | NO | 0 |  |  |
| [resettalents_time](#resettalents_time) | bigint(20) | signed |  | NO | 0 |  |  |
| [numRespecs](#numRespecs) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [primarySpecialization](#primarySpecialization) | int(10) | unsigned |  | NO | 0 |  |  |
| [trans_x](#trans_x) | float |  |  | NO | 0 |  |  |
| [trans_y](#trans_y) | float |  |  | NO | 0 |  |  |
| [trans_z](#trans_z) | float |  |  | NO | 0 |  |  |
| [trans_o](#trans_o) | float |  |  | NO | 0 |  |  |
| [transguid](#transguid) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [extra_flags](#extra_flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [stable_slots](#stable_slots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [at_login](#at_login) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [zone](#zone) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [death_expire_time](#death_expire_time) | bigint(20) | signed |  | NO | 0 |  |  |
| [taxi_path](#taxi_path) | text |  |  | YES | NULL |  |  |
| [totalKills](#totalKills) | int(10) | unsigned |  | NO | 0 |  |  |
| [todayKills](#todayKills) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [yesterdayKills](#yesterdayKills) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [chosenTitle](#chosenTitle) | int(10) | unsigned |  | NO | 0 |  |  |
| [watchedFaction](#watchedFaction) | int(10) | unsigned |  | NO | 0 |  |  |
| [drunk](#drunk) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [health](#health) | int(10) | unsigned |  | NO | 0 |  |  |
| [power1](#power1) | int(10) | unsigned |  | NO | 0 |  |  |
| [power2](#power2) | int(10) | unsigned |  | NO | 0 |  |  |
| [power3](#power3) | int(10) | unsigned |  | NO | 0 |  |  |
| [power4](#power4) | int(10) | unsigned |  | NO | 0 |  |  |
| [power5](#power5) | int(10) | unsigned |  | NO | 0 |  |  |
| [power6](#power6) | int(10) | unsigned |  | NO | 0 |  |  |
| [latency](#latency) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [activeTalentGroup](#activeTalentGroup) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [lootSpecId](#lootSpecId) | int(10) | unsigned |  | NO | 0 |  |  |
| [exploredZones](#exploredZones) | longtext |  |  | YES | NULL |  |  |
| [equipmentCache](#equipmentCache) | longtext |  |  | YES | NULL |  |  |
| [knownTitles](#knownTitles) | longtext |  |  | YES | NULL |  |  |
| [actionBars](#actionBars) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [deleteInfos_Account](#deleteInfos_Account) | int(10) | unsigned |  | YES | NULL |  |  |
| [deleteInfos_Name](#deleteInfos_Name) | varchar(12) | signed |  | YES | NULL |  |  |
| [deleteDate](#deleteDate) | bigint(20) | signed |  | YES | NULL |  |  |
| [honor](#honor) | int(10) | unsigned |  | NO | 0 |  |  |
| [honorLevel](#honorLevel) | int(10) | unsigned |  | NO | 1 |  |  |
| [honorRestState](#honorRestState) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [honorRestBonus](#honorRestBonus) | float |  |  | NO | 0 |  |  |
| [lastLoginBuild](#lastLoginBuild) | int(10) | unsigned |  | NO | 0 |  |  |
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

<a href="https://dev.trinitycore.info/en/database/master/characters/character_void_storage" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_void_storage'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

