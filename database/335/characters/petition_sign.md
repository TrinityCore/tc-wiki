---
title: petition_sign
description: 
published: true
date: 2023-08-01T14:50:19.953Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:01.622Z
---

<a href="https://trinitycore.info/en/database/335/characters/petition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'petition'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pool_quest_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pool_quest_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds information on all the signatures of a petition for either a guild or an arena team.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ownerguid](#ownerguid) | int | unsigned | MUL | NO |  |  |  |
| [petitionguid](#petitionguid) | int | unsigned | PRI | NO | 0 |  |  |
| [playerguid](#playerguid) | int | unsigned | PRI | NO | 0 |  |  |
| [player_account](#player_account) | int | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ownerguid
The [character guid](../characters/characters#guid) of the owner that is trying to found the guild/arena team.
&nbsp;

### petitionguid
The [guid](../characters/item_instance#guid) of the charter item.
&nbsp;

### playerguid
The [character guid](../characters/characters#guid) of the player that has signed the charter
&nbsp;

### player_account
The [account id](../auth/account#id) of the player that has signed the charter. No two players can sign the same charter from the same account.
&nbsp;

### type
The type of the petition.

`enum CharterTypes`
| ID | Name |
|----|------|
| 2 | ARENA_TEAM_CHARTER_2v2_TYPE |
| 3 | ARENA_TEAM_CHARTER_3v3_TYPE |
| 5 | ARENA_TEAM_CHARTER_5v5_TYPE |
| 9 | GUILD_CHARTER_TYPE |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/petition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'petition'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pool_quest_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pool_quest_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
