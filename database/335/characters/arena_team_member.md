---
title: arena_team_member
description: 
published: true
date: 2023-07-24T20:28:03.553Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:40.680Z
---

<a href="https://trinitycore.info/en/database/335/characters/arena_team" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'arena_team'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/auctionbidders" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'auctionbidders'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds arena info about specific team members. All arena_team members have a record in this table.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [arenaTeamId](#arenateamid) | int | unsigned | PRI | NO | 0 |  |  |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [weekGames](#weekgames) | smallint | unsigned |  | NO | 0 |  |  |
| [weekWins](#weekwins) | smallint | unsigned |  | NO | 0 |  |  |
| [seasonGames](#seasongames) | smallint | unsigned |  | NO | 0 |  |  |
| [seasonWins](#seasonwins) | smallint | unsigned |  | NO | 0 |  |  |
| [personalRating](#personalrating) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### arenaTeamId
references [arenaTeamId](../characters/arena_team#arenateamid)
&nbsp;

### guid
[character guid](../characters/characters#guid) of the member
&nbsp;

### weekGames
Number of games played this week.
&nbsp;

### weekWins
Number of games won this week.
&nbsp;

### seasonGames
Number of games played this season.
&nbsp;

### seasonWins
Number of games won this season.
&nbsp;

### personalRating
Personal Arena Team Rating of this member this season.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/arena_team" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'arena_team'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/auctionbidders" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'auctionbidders'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
