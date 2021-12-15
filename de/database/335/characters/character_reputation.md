---
title: character_reputation
description: 
published: true
date: 2021-11-15T10:22:34.798Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:11.525Z
---

<a href="https://trinitycore.info/de/database/335/characters/character_queststatus_weekly" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_queststatus_weekly'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_skills'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the reputation information for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [faction](#faction) | smallint(5) | unsigned | PRI | NO | 0 |  |  |
| [standing](#standing) | int(11) | signed |  | NO | 0 |  |  |
| [flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character
&nbsp;

### faction
The faction ID that the character has the given reputation in. See Faction.dbc
&nbsp;

### standing
The current reputation value that the character has.
&nbsp;

### flags
This field is a bitmask containing flags that apply to the faction and how it's displayed to the character. Just like any flag field, you can combine flags by adding them together. If this field is 0, then it is not shown in the reputation list in-game.

Flag | Name | Comments
--- | --- | ---
1 | FACTION_FLAG_VISIBLE | Displayed in the reputation tab
2 | FACTION_FLAG_AT_WAR |Active when the player sets the at war checkbox
4 | FACTION_FLAG_HIDDEN |	Hidden faction from reputation pane in client
8 | FACTION_FLAG_INVISIBLE_FORCED | Always overwrites FACTION_FLAG_VISIBLE and hide faction in rep.list
16 | FACTION_FLAG_PEACE_FORCED | Always overwrites FACTION_FLAG_AT_WAR
32 | FACTION_FLAG_INACTIVE |
64 | FACTION_FLAG_RIVAL | Flag for the two competing outland factions
128 | FACTION_FLAG_SPECIAL | Horde and alliance home cities and their northrend allies have this flag
&nbsp;

<a href="https://trinitycore.info/de/database/335/characters/character_queststatus_weekly" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_queststatus_weekly'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_skills'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

