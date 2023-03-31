---
title: game_event_npc_vendor
description: 
published: true
date: 2023-03-31T16:00:30.881Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:17.730Z
---

<a href="https://trinitycore.info/en/database/master/world/game_event_model_equip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_model_equip'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/game_event_npcflag" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npcflag'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | smallint | signed | MUL | NO | 0 |  |  |
| [item](#item) | int | unsigned | PRI | NO | 0 |  |  |
| [maxcount](#maxcount) | int | unsigned |  | NO | 0 |  |  |
| [incrtime](#incrtime) | int | unsigned |  | NO | 0 |  |  |
| [ExtendedCost](#extendedcost) | int | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 1 |  |  |
| [BonusListIDs](#bonuslistids) | mediumtext |  |  | YES | NULL |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [IgnoreFiltering](#ignorefiltering) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
&nbsp;

### guid
GUID of the creature which this entry should be related to during the event. Referenced in [`creature.guid`](/database/master/world/creature#guid)
&nbsp;

### slot
Position of the item when the vendor window opens (order from top-left to bottom.right of the window with values 0 and then 1,2,3,etc).
&nbsp;

### item
Item to be added during the event, for reference: [ItemSparse.ID](https://wow.tools/dbc/?dbc=itemsparse){target=blank}
&nbsp;

### maxcount
The maximum number of copies of the item the vendor has available to be sold before incrtime is up. If 0, then it is an unlimited number of copies.
&nbsp;

### incrtime
Combined with maxcount, this field tells how often (in seconds) the vendor list is refreshed and the limited item copies are restocked.
&nbsp;

### ExtendedCost
The value here corresponds to the ID in [ItemExtendedCost.ID](https://wow.tools/dbc/?dbc=itemextendedcost){target=blank} and that ID controls the item's non monetary price, be it honor points, arena points, different types of badges or any combination of the above.
&nbsp;

### type
*- no description -*
&nbsp;

### BonusListIDs
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### IgnoreFiltering
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/game_event_model_equip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_model_equip'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/game_event_npcflag" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_npcflag'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

