---
title: battle_pets
description: 
published: true
date: 2022-11-21T20:58:24.335Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-21T03:48:21.661Z
---

<a href="https://trinitycore.info/en/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_slots'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/battlenet_account_bans" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlenet_account_bans'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | signed | PRI | NO |  |  |  |
| [battlenetAccountId](#battlenetaccountid) | int | signed |  | NO |  |  |  |
| [species](#species) | int | signed |  | NO |  |  |  |
| [breed](#breed) | smallint | signed |  | NO |  |  |  |
| [displayId](#displayid) | int | signed |  | NO | 0 |  |  |
| [level](#level) | smallint | signed |  | NO | 1 |  |  |
| [exp](#exp) | smallint | signed |  | NO | 0 |  |  |
| [health](#health) | int | signed |  | NO | 1 |  |  |
| [quality](#quality) | tinyint | signed |  | NO | 0 |  |  |
| [flags](#flags) | smallint | signed |  | NO | 0 |  |  |
| [name](#name-alt) | varchar(12) |  |  | NO |  |  |  |
| [nameTimestamp](#nametimestamp) | bigint | signed |  | NO | 0 |  |  |
| [owner](#owner) | bigint | signed |  | YES | NULL |  |  |
| [ownerRealmId](#ownerrealmid) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
The battle pet global unique identifier.
&nbsp;

### battlenetAccountId
*- no description -*
&nbsp;

### species
ID from [BattlePetSpecies.db2](https://wow.tools/dbc/?dbc=battlepetspecies){target=_blank}.
&nbsp;

### breed
BattlePetBreedID from [BattlePetBreedState.db2](https://wow.tools/dbc/?dbc=battlepetbreedstate){target=_blank}.
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
| 16   | 0x010   | Ability0Selection | Selected second ability of ability slot 0     |
| 32   | 0x020   | Ability1Selection | Selected second ability of ability slot 1     |
| 64   | 0x040   | Ability2Selection | Selected second ability of ability slot 2     |
| 128  | 0x080   | FanfareNeeded     | Shown as a present in battle pet journal      |
| 256  | 0x100   | DisplayOverridden |                                               |
&nbsp;

### name <!-- {#name-alt} -->
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
