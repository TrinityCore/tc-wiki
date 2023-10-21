---
title: quest_pool_members
description: 
published: true
date: 2022-11-21T22:46:01.243Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-21T22:43:59.533Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi_points'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_pool_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [questId](#questid) | int | unsigned | PRI | NO |  |  |  |
| [poolId](#poolid) | int | unsigned |  | NO |  |  |  |
| [poolIndex](#poolindex) | tinyint | unsigned |  | NO |  |  | Multiple quests with the same index will always spawn together! |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### questId
adds a [quest entry](../world/quest_template#ID) to the pool with **poolId**.
> Note: The quest must be repeatable.
{.is-info}

&nbsp;

### poolId
references [quest_pool_template.poolId](quest_pool_template.poolid)
&nbsp;

### poolIndex
Incremental index of pool with **poolId**. Starts at `0`.
&nbsp;

### description
This field usually names the quest and describes the pool it belongs to.
Example: Fueling the Demolishers (Alliance, defenders)
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi_points'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_pool_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
