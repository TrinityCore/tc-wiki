---
title: character_reputation
description:
published: true
date: 2023-07-29T18:43:37.897Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:11.525Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_queststatus_weekly" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_queststatus_weekly'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_skills'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the reputation information for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [faction](#faction) | smallint | unsigned | PRI | NO | 0 |  |  |
| [standing](#standing) | int | signed |  | NO | 0 |  |  |
| [flags](#flags) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### faction
The [Faction ID](/files/DBC/335/faction#id) that the character has the given reputation in.
&nbsp;

### standing
The current reputation value that the character has.
&nbsp;

### flags
This field is a bitmask containing flags that apply to the faction and how it's displayed to the character. Just like any flag field, you can combine flags by adding them together. If this field is 0, then it is not shown in the reputation list in-game.

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | FACTION_FLAG_VISIBLE | makes visible in client (set or can be set at interaction with target of this faction) |
| 2 | 0x02 | FACTION_FLAG_AT_WAR | enable AtWar-button in client. player controlled (except opposition team always war state), Flag only set on initial creation |
| 4 | 0x04 | FACTION_FLAG_HIDDEN | hidden faction from reputation pane in client (player can gain reputation, but this update not sent to client) |
| 8 | 0x08 | FACTION_FLAG_INVISIBLE_FORCED | always overwrite FACTION_FLAG_VISIBLE and hide faction in rep.list, used for hide opposite team factions |
| 16 | 0x10 | FACTION_FLAG_PEACE_FORCED | always overwrite FACTION_FLAG_AT_WAR, used for prevent war with own team factions |
| 32 | 0x20 | FACTION_FLAG_INACTIVE | player controlled, state stored in characters.data (CMSG_SET_FACTION_INACTIVE) |
| 64 | 0x40 | FACTION_FLAG_RIVAL | flag for the two competing outland factions |
| 128 | 0x80 | FACTION_FLAG_SPECIAL | horde and alliance home cities and their northrend allies have this flag |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_queststatus_weekly" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_queststatus_weekly'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_skills'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
