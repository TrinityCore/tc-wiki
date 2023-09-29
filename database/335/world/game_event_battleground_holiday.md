---
title: game_event_battleground_holiday
description:
published: true
date: 2023-07-09T17:43:59.383Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:31.059Z
---

<a href="https://trinitycore.info/en/database/335/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_arena_seasons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table is used to add a holiday to a battleground, for things like extra reputation / honor.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [EventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | game_event EventEntry identifier |
| [BattlegroundID](#battlegroundid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### EventEntry
refers to [game_event.EventEntry](../world/game_event#evententry)
&nbsp;

### BattlegroundID
[BattlemasterList ID](/files/DBC/335/battlemasterlist#id) to apply the event to.
| ID | Name | | ID | Name |
|----|------|-|----|------|
| 1 | Alterac Valley | | 7 | Eye of the Storm |
| 2 | Warsong Gulch | | 8 | Ruins of Lordaernon |
| 3 | Arathi Basin | | 9 | Strand of the Ancients |
| 4 | Nagrand Arena | | 10 | Dalaran Sewers |
| 5 | Blade's Edge Arena | | 11 | Ring of Valor |
| 6 | All Arenas | | 30 | Isle of Conquest |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_arena_seasons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_condition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
