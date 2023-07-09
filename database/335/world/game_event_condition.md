---
title: game_event_condition
description: 
published: true
date: 2023-07-09T17:53:37.858Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:33.708Z
---

<a href="https://trinitycore.info/en/database/335/world/game_event_battleground_holiday" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_battleground_holiday'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains conditions to meet for the specified game event to be completed. Also contains the world state fields used for reporting the given conditions progress and/or max required value. This table will do absolutely nothing if you have not set the event to be a [world event](../world/game_event#world_event).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [condition_id](#condition_id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [req_num](#req_num) | float |  |  | YES | 0 |  |  |
| [max_world_state_field](#max_world_state_field) | smallint | unsigned |  | NO | 0 |  |  |
| [done_world_state_field](#done_world_state_field) | smallint | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(25) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### condition_id
This is the condition ID for this particular world event condition. It is an arbitrary number, and you can have multiple conditions for each world event. It links to [game_event_quest_condition.condition_id](../world/game_event_quest_condition#condition_id).
&nbsp;

### req_num
This is an arbitrary value that determines when this condition is met. For example, if you set this value to 1000, and there is only one quest in [game_event_quest_condition](../world/game_event_quest_condition) that will fulfill this condition, and it increases this condition by 100 (by setting the [num](../world/game_event_quest_condition#num) field to 100), then you would need to have your players complete 10 of that quest to fulfill this condition.
&nbsp;

### max_world_state_field
This is the world state update field number sent to the client that is used to report the maximum number of needed points in order to satisfy this condition. It can be found in [gossip texts](../world/npc_text) referenced with `$XXXXw` where `XXXX` is the world state number that will be sent when that gossip is displayed. If you are doing a custom event, you can pick any number you want that isn't in use, it just needs to match the custom text that you put into the [npc_text](../world/npc_text) table.
&nbsp;

### done_world_state_field
This is the world state update field number sent to the client that is used to report the number of accumulated points so far for this condition. It can be found in [gossip texts](../world/npc_text) referenced with `$XXXXw` where `XXXX` is the world state number that will be sent when that gossip is displayed. If you are doing a custom event, you can pick any number you want that isn't in use, it just needs to match the custom text that you put into the [npc_text](../world/npc_text) table.
&nbsp;

### description
Arbitrary text field describing this condition.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_event_battleground_holiday" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_battleground_holiday'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
