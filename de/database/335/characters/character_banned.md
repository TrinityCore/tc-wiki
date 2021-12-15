---
title: character_banned
description: 
published: true
date: 2021-09-16T09:52:31.971Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:20.380Z
---

<a href="https://trinitycore.info/de/database/335/characters/character_aura" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_aura'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_battleground_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_battleground_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table lists all of the characters that have been banned along with the date when (or if) the ban will expire.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |
| [active](#active) | tinyint(3) | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character.
&nbsp;

### bandate
The date when the character was banned, in Unix time.
&nbsp;

### unbandate
The date when the character will be automatically unbanned, in Unix time. A value less than the bandate means, in effect, a permanent ban.
&nbsp;

### bannedby
The character with the rights to the .ban command that banned the character.
&nbsp;

### banreason
The reason for the ban.
&nbsp;

### active
Boolean 0 or 1 controlling if the ban is currently active or not.
&nbsp;

<a href="https://trinitycore.info/de/database/335/characters/character_aura" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_aura'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_battleground_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_battleground_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

