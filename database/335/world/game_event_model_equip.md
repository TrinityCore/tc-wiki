---
title: game_event_model_equip
description: 
published: true
date: 2024-05-16T11:19:32.472Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:47.232Z
---

<a href="https://trinitycore.info/en/database/335/world/game_event_gameobject_quest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_gameobject_quest'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npc_vendor'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains all creature instances that need to change display id and/or equipment during defined game events.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [modelid](#modelid) | int | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event/#evententry)
&nbsp;

### guid
The [creature.guid](../world/creature#guid) to be modified.
&nbsp;

### modelid
New [DisplayID](../world/creature_model_info#displayid) to be used while the event is active.
Use 0 if only the **equipment_id** is to be changed during event.
&nbsp;

### equipment_id
New [equipmentID](../world/creature_equip_template#id) to be used during the event.
Use 0 if only the **modelid** is to be changed during event.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_event_gameobject_quest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_gameobject_quest'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npc_vendor'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
