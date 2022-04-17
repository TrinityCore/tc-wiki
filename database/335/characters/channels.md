---
title: channels
description: 
published: true
date: 2022-04-17T20:59:22.534Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:01.893Z
---

<a href="https://trinitycore.info/en/database/335/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_invites'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_account_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_account_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Information and settings for ingame, player-based chat channels (not affecting the default system channels)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name) | varchar(128) |  | PRI | NO |  |  |  |
| [team](#team) | int | unsigned | PRI | NO |  |  |  |
| [announce](#announce) | tinyint | unsigned |  | NO | 1 |  |  |
| [ownership](#ownership) | tinyint | unsigned |  | NO | 1 |  |  |
| [password](#password) | varchar(32) |  |  | YES | NULL |  |  |
| [bannedList](#bannedlist) | text |  |  | YES | NULL |  |  |
| [lastUsed](#lastused) | int | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### name
Name of the channel.
&nbsp;

### team
team id -  Allow access to channel from specified player faction ID

For multirace channels, two (or more) separate entries must exist with the EXACT same settings for all fields apart from this (it needs a different team id)

Horde -> 67

Alliance -> 469
&nbsp;

### announce
Channel announce (0/1)

0 = Channel join/part actions will not be sent

1 = Channel join/part actions will be sent
&nbsp;

### ownership
Channel ownership (0/1)

0 = No one will ever be an owner.

1 = Ownership is the first person in the channel.
&nbsp;

### password
Channel password

Empty, or a standard string-based password (no spaces allowed)
&nbsp;

### bannedList
Channel banlist

List of banned player names, separated by spaces
&nbsp;

### lastUsed
Used for automated cleaning of unused channels from database. Time is in unixtime.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_invites'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_account_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_account_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
