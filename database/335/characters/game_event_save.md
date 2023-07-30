---
title: game_event_save
description: 
published: true
date: 2023-07-30T16:18:58.178Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:38.886Z
---

<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_condition_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_subsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_subsurvey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Stores the status of running game events.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  |  |
| [state](#state) | tinyint | unsigned |  | NO | 1 |  |  |
| [next_start](#next_start) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
references [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### state
| ID | Name | Comment |
|----|------|---------|
| 0 | GAMEEVENT_NORMAL | standard game events |
| 1 | GAMEEVENT_WORLD_INACTIVE | not yet started |
| 2 | GAMEEVENT_WORLD_CONDITIONS | condition matching phase |
| 3 | GAMEEVENT_WORLD_NEXTPHASE | conditions are met, now 'length' timer to start next event |
| 4 | GAMEEVENT_WORLD_FINISHED | next events are started, unapply this one |
| 5 | GAMEEVENT_INTERNAL | never handled in update |
{.dense}

&nbsp;

### next_start
Unix timestamp when the followup event should start, if any. 
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_condition_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_subsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_subsurvey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
