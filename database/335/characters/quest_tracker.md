---
title: quest_tracker
description: 
published: true
date: 2023-07-31T22:16:24.715Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:12.278Z
---

<a href="https://trinitycore.info/en/database/335/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_players'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reserved_name'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Stores quest completion and abandonment data to help finding out bugged quests.
>
> requires worldserver.conf [`Quests.EnableQuestTracker = 1`](https://trinitycore.info/en/files/configuration/home)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | mediumint | unsigned |  | NO | 0 |  |  |
| [character_guid](#character_guid) | int | unsigned |  | NO | 0 |  |  |
| [quest_accept_time](#quest_accept_time) | datetime |  |  | NO |  |  |  |
| [quest_complete_time](#quest_complete_time) | datetime |  |  | YES | NULL |  |  |
| [quest_abandon_time](#quest_abandon_time) | datetime |  |  | YES | NULL |  |  |
| [completed_by_gm](#completed_by_gm) | tinyint(1) | signed |  | NO | 0 |  |  |
| [core_hash](#core_hash) | varchar(120) |  |  | NO | 0 |  |  |
| [core_revision](#core_revision) | varchar(120) |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
The tracked [quest ID](../world/quest_template#id).
&nbsp;

### character_guid
The [character guid](../characters/characters#guid) on the quest.
&nbsp;

### quest_accept_time
Unix timestamp when the quest was accepted.
&nbsp;

### quest_complete_time
Unix timestamp when the quest was completed.
&nbsp;

### quest_abandon_time
Unix timestamp when the quest was abandoned.
&nbsp;

### completed_by_gm
Flag if `.quest complete` command was used.
* 0: player completed the quest on his own
* 1: GM completed the quest for the player
&nbsp;

### core_hash
current `_HASH` (see revision_data.h)
&nbsp;

### core_revision
current `_DATE` (see revision_data.h)
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_players'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reserved_name'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
