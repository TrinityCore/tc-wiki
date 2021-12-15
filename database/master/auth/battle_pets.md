---
title: battle_pets
description: 
published: true
date: 2021-12-15T18:51:26.546Z
tags: database, master, auth
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_slots'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_bans" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_bans'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | signed | PRI | NO |  |  |  |
| [battlenetAccountId](#battlenetaccountid) | int(10) | signed |  | NO |  |  |  |
| [species](#species) | int(10) | signed |  | NO |  |  |  |
| [breed](#breed) | smallint(5) | signed |  | NO |  |  |  |
| [displayId](#displayid) | int(11) | signed |  | NO | 0 |  |  |
| [level](#level) | smallint(5) | signed |  | NO | 1 |  |  |
| [exp](#exp) | smallint(5) | signed |  | NO | 0 |  |  |
| [health](#health) | int(10) | signed |  | NO | 1 |  |  |
| [quality](#quality) | tinyint(3) | signed |  | NO | 0 |  |  |
| [flags](#flags) | smallint(5) | signed |  | NO | 0 |  |  |
| [name](#name) | varchar(12) | signed |  | NO |  |  |  |
| [nameTimestamp](#nametimestamp) | bigint(20) | signed |  | NO | 0 |  |  |
| [owner](#owner) | bigint(20) | signed |  | YES | NULL |  |  |
| [ownerRealmId](#ownerrealmid) | int(11) | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
The battle pet global unique identifier.
&nbsp;

### battlenetAccountId
*- no description -*
&nbsp;

### species
The battle pet species (column *ID* from *BattlePetSpecies.db2*).
&nbsp;

### breed
The battle pet breed (column *BattlePetBreedID* from *BattlePetBreedState.db2*).
&nbsp;

### displayId
*- no description -*
&nbsp;

### level
Current battle pet level (1 - 25).
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
List of BattlePetDbFlags.
| Flag | Value   | Name              | Description                                   |
| ----:|:-------:| ----------------- | --------------------------------------------- |
| 0    | 0x000   | None              | None                                          |
| 1    | 0x001   | Favorite          | Marked as favorite in battle pet journal      |
| 2    | 0x002   | Converted         |                                               |
| 4    | 0x004   | Revoked           | Locked in battle pet journal                  |
| 8    | 0x008   | LockedForConvert  | Locked in battle pet journal                  |
| 16   | 0x010   | Ability0Selection | Selected second spell of ability slot 0       |
| 32   | 0x020   | Ability1Selection | Selected second spell of ability slot 1       |
| 64   | 0x040   | Ability2Selection | Selected second spell of ability slot 2       |
| 128  | 0x080   | FanfareNeeded     | Shown as a present in battle pet journal      |
| 256  | 0x100   | DisplayOverridden |                                               |
&nbsp;

### name
Current battle pet name. If empty, the battle pet will use the [name](../world/creature_template#name) of the creature associated with the [species](#species).
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

<a href="https://trinitycore.info/en/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_slots'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_bans" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_bans'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>