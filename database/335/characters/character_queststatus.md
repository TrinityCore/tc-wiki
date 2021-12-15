---
title: character_queststatus
description: 
published: true
date: 2021-09-16T11:28:18.131Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:55.520Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_pet_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_queststatus_daily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_queststatus_daily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Holds information on the quest status of each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [quest](#quest) | int(10) | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [status](#status) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [explored](#explored) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [timer](#timer) | int(10) | unsigned |  | NO | 0 |  |  |
| [mobcount1](#mobcount1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [mobcount2](#mobcount2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [mobcount3](#mobcount3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [mobcount4](#mobcount4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount1](#itemcount1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount2](#itemcount2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount3](#itemcount3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount4](#itemcount4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount5](#itemcount5) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [itemcount6](#itemcount6) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [playercount](#playercount) | smallint(5) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character.
See [characters](/database/335/characters/characters)
&nbsp;

### quest
The quest ID. 
See [quest_template](/database/335/world/quest_template)
&nbsp;

### status
The current quest status.

Value | Status | Comment
-- | -- | --
0 | QUEST_STATUS_NONE | Quest isn't shown in quest list - default
1 | QUEST_STATUS_COMPLETE | Quest has been completed
2 | QUEST_STATUS_UNAVAILABLE | NOT USED
3 | QUEST_STATUS_INCOMPLETE | Quest is active in quest log but incomplete
4 | QUEST_STATUS_AVAILABLE | NOT USED
5 | QUEST_STATUS_FAILED | Player failed to complete the quest
6 | QUEST_STATUS_REWARDED | Not used in DB
&nbsp;

### explored
Boolean 1 or 0 representing if the character has explored what was needed to explore for the quest.
&nbsp;

### timer
*- no description -*
&nbsp;

### mobcount1
Current count of the number of kills or casts on the first creature or gameobject, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredNpcOrGoCount1
&nbsp;

### mobcount2
Current count of the number of kills or casts on the first creature or gameobject, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredNpcOrGoCount2
&nbsp;

### mobcount3
Current count of the number of kills or casts on the first creature or gameobject, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredNpcOrGoCount3
&nbsp;

### mobcount4
Current count of the number of kills or casts on the first creature or gameobject, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredNpcOrGoCount4
&nbsp;

### itemcount1
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId1
&nbsp;

### itemcount2
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId2
&nbsp;

### itemcount3
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId3
&nbsp;

### itemcount4
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId4
&nbsp;

### itemcount5
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId5
&nbsp;

### itemcount6
Current item count for the item in a delivery quest, if any.
Taken from [quest_template](/database/335/world/quest_template) RequiredItemId6
&nbsp;

### playercount
Current player slay count.
Taken from [quest_template](/database/335/world/quest_template) RequiredPlayerKills
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_pet_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_queststatus_daily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_queststatus_daily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

