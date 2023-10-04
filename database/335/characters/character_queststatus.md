---
title: character_queststatus
description:
published: true
date: 2023-07-27T22:03:22.688Z
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
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [status](#status) | tinyint | unsigned |  | NO | 0 |  |  |
| [explored](#explored) | tinyint | unsigned |  | NO | 0 |  |  |
| [timer](#timer) | int | unsigned |  | NO | 0 |  |  |
| [mobcount1](#mobcount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [mobcount2](#mobcount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [mobcount3](#mobcount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [mobcount4](#mobcount[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount1](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount2](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount3](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount4](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount5](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [itemcount6](#itemcount[1-6]) | smallint | unsigned |  | NO | 0 |  |  |
| [playercount](#playercount) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### quest
The [quest ID](../world/quest_template#id).
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
{.dense}

&nbsp;

### explored
Boolean 1 or 0 representing if the character has explored what was needed to explore for the quest.
&nbsp;

### timer
Unix Time when [TimeAllowed](../world/quest_template#timeallowed) will run out.
&nbsp;

### mobcount\[1-4]
Current count of the number of kills or casts on the specified creature or gameobject, if any.
Matches [RequiredNpcOrGoCount\[1-4\]](../world/quest_template#requirednpcorgocount1-4)
&nbsp;

### itemcount\[1-6]
Current item count for the item in a delivery quest, if any.
Matches [RequiredItemCount\[1-6\]](../world/quest_template#requireditemcount1-6)
&nbsp;

### playercount
Current player slay count out of [RequiredPlayerKills](../world/quest_template#requiredplayerkills).
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_pet_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_queststatus_daily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_queststatus_daily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
