---
title: guild
description: 
published: true
date: 2025-10-24T23:10:52.482Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:57.718Z
---

<a href="https://trinitycore.info/en/database/335/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_eventlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_eventlog'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the main guild information. All created guilds or all guilds in the process of being created have a record in this table.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [name](#name-alt) | varchar(24) |  |  | NO | '' |  |  |
| [leaderguid](#leaderguid) | int | unsigned |  | NO | 0 |  |  |
| [EmblemStyle](#emblemstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [EmblemColor](#emblemcolor) | tinyint | unsigned |  | NO | 0 |  |  |
| [BorderStyle](#borderstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [BorderColor](#bordercolor) | tinyint | unsigned |  | NO | 0 |  |  |
| [BackgroundColor](#backgroundcolor) | tinyint | unsigned |  | NO | 0 |  |  |
| [info](#info) | varchar(500) |  |  | NO | '' |  |  |
| [motd](#motd) | varchar(128) |  |  | NO | '' |  |  |
| [createdate](#createdate) | int | unsigned |  | NO | 0 |  |  |
| [BankMoney](#bankmoney) | bigint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
The ID of the guild. This number is unique to each guild and is the main method to identify a guild.
&nbsp;

### name <!-- {#name-alt} -->
The guild's name.
&nbsp;

### leaderguid
The [character guid](../characters/characters#guid) of the guild leader.
&nbsp;

### EmblemStyle
### EmblemColor
Defined the emblem on the guild tabard.
file index to:
`textures/GuildEmblems/Emblem_<Style>_<Color>_TU_U.blp` / `*_TL_U.blp`
&nbsp;

### BorderStyle
### BorderColor
Defined the border on the guild tabard.
file index to:
`textures/GuildEmblems/Border_<Style>_<Color>_TU_U.blp` / `*_TL_U.blp`
&nbsp;

### BackgroundColor
Defines the background color of the guild tabard.
file index to:
`textures/GuildEmblems/Background_<Color>_TU_U.blp` / `*_TL_U.blp`
&nbsp;

### info
The text message that appears in the Guild Information box.
&nbsp;

### motd
The text that appears in the 'Message Of The Day' box.
&nbsp;

### createdate
Unix timestamp when the guild was created.
&nbsp;

### BankMoney
The total money, in copper, that is currently in the guild's guild bank.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_eventlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_eventlog'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
