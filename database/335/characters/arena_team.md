---
title: arena_team
description: 
published: true
date: 2025-10-24T23:00:37.592Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:37.950Z
---

<a href="https://trinitycore.info/en/database/335/characters/addons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'addons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/arena_team_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'arena_team_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the main ArenaTeam information. All created teams or all teams in the process of being created have a record in this table.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [arenaTeamId](#arenateamid) | int | unsigned | PRI | NO | 0 |  |  |
| [name](#name-alt) | varchar(24) |  |  | NO |  |  |  |
| [captainGuid](#captainguid) | int | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [rating](#rating) | smallint | unsigned |  | NO | 0 |  |  |
| [seasonGames](#seasongames) | smallint | unsigned |  | NO | 0 |  |  |
| [seasonWins](#seasonwins) | smallint | unsigned |  | NO | 0 |  |  |
| [weekGames](#weekgames) | smallint | unsigned |  | NO | 0 |  |  |
| [weekWins](#weekwins) | smallint | unsigned |  | NO | 0 |  |  |
| [rank](#rank) | int | unsigned |  | NO | 0 |  |  |
| [backgroundColor](#backgroundcolor) | int | unsigned |  | NO | 0 |  |  |
| [emblemStyle](#emblemstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [emblemColor](#emblemcolor) | int | unsigned |  | NO | 0 |  |  |
| [borderStyle](#borderstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [borderColor](#bordercolor) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### arenaTeamId
The ID of the ArenaTeam. This number is unique to each team and is the main method to identify a team.
&nbsp;

### name <!-- {#name-alt} -->
Name of the Arena team
&nbsp;

### captainGuid
The [character guid](../characters/characters#guid) of the ArenaTeam's creator.
&nbsp;

### type
Defines the ArenaType:

- 2: 2vs2 Team
- 3: 3vs3 Team
- 5: 5vs5 Team
&nbsp;

### rating
Rating of arena team.
&nbsp;

### seasonGames
Number of games played this season.
&nbsp;

### seasonWins
Number of games won this season.
&nbsp;

### weekGames
Number of games played this week.
&nbsp;

### weekWins
Number of games won this week.
&nbsp;

### rank
Rank of teams in the competition by rating.
&nbsp;

### backgroundColor
ARGB color value.
```c
alpha = (field & 0xFF000000) >> 48
red   = (field & 0xFF0000) >> 32
green = (field & 0xFF00) >> 16
blue  = (field & 0xFF)
```
&nbsp;

### emblemStyle
file index to
`Interface/PvPFrame/Icons/PVP-Banner-Emblem-<emblemStyle>.blp`
&nbsp;

### emblemColor
ARGB color value.
&nbsp;

### borderStyle
file index to
`Interface/PvPFrame/PVP-Banner-<2|3|5>-Border-<borderStyle>.blp`
&nbsp;

### borderColor
ARGB color value.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/addons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'addons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/arena_team_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'arena_team_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
