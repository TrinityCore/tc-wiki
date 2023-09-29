---
title: achievement_criteria_data
description:
published: true
date: 2023-07-07T20:06:01.761Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:33.368Z
---

<a href="https://trinitycore.info/en/database/335/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'access_requirement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_dbc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the data that a player needs to obtain / complete in order to receive a given achievement.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [criteria_id](#criteria_id) | mediumint | signed | PRI | NO |  |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [value1](#value1) | mediumint | unsigned |  | NO | 0 |  |  |
| [value2](#value2) | mediumint | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### criteria_id
This is the [AchievementCriteria ID](/files/DBC/335/achievement_criteria#id).
&nbsp;

### type
Depending on this value, it will determine how [value1](#value1) and [value2](#value2) are used.
| Type | Name |
|------|------|
| 0 | TYPE_NONE |
| 1 | TYPE_T_CREATURE |
| 2 | TYPE_T_PLAYER_CLASS_RACE |
| 3 | TYPE_T_PLAYER_LESS_HEALTH |
| 4 | TYPE_T_PLAYER_DEAD |
| 5 | TYPE_S_AURA |
| 6 | TYPE_S_AREA |
| 7 | TYPE_T_AURA |
| 8 | TYPE_VALUE |
| 9 | TYPE_T_LEVEL |
| 10 | TYPE_T_GENDER |
| 11 | TYPE_SCRIPT |
| 12 | TYPE_MAP_DIFFICULTY |
| 13 | TYPE_MAP_PLAYER_COUNT |
| 14 | TYPE_T_TEAM |
| 15 | TYPE_S_DRUNK |
| 16 | TYPE_HOLIDAY |
| 17 | TYPE_BG_LOSS_TEAM_SCORE |
| 18 | TYPE_INSTANCE_SCRIPT |
| 19 | TYPE_S_EQUIPED_ITEM |
| 20 | TYPE_MAP_ID |
| 21 | TYPE_S_PLAYER_CLASS_RACE |
| 22 | TYPE_NTH_BIRTHDAY |
| 23 | TYPE_S_KNOWN_TITLE |
| 24 | TYPE_GAME_EVENT (7.x only) |
| 25 | TYPE_S_ITEM_QUALITY |
{.dense}

&nbsp;

### value1 / value2
| Type | Value1 | Value 2 | Comment |
|------|--------|---------|---------|
| TYPE_NONE | 0 | 0 |  |
| TYPE_T_CREATURE | creature entry from [creature_template](../world/creature_template#entry) | 0 |  |
| TYPE_T_PLAYER_CLASS_RACE | [ChrClass ID](/files/DBC/335/chrclasses#id) | [ChrRace ID](/files/DBC/335/chrraces#id) |   |
| TYPE_T_PLAYER_LESS_HEALTH | The percentage of health that the target must reach | 0 |  |
| TYPE_T_PLAYER_DEAD | own_team | 0 | not corpse (not released body), own_team == false if enemy team expected |
| TYPE_S_AURA | The spell ID of the aura that must be on the player (see [Spell ID](/files/DBC/335/spell#id)) | Effect Index of the aura |  |
| TYPE_S_AREA | [AreaTable ID](/files/DBC/335/areatable#id) | 0 |  |
| TYPE_T_AURA | The spell ID of the aura that must be on the target | Effect Index of the aura |  |
| TYPE_VALUE | Value to compare needed to attain achievement | ComparisationType:<br>&nbsp;&nbsp;&nbsp;&nbsp;COMP_TYPE_EQ = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;COMP_TYPE_HIGH = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;COMP_TYPE_LOW = 2<br>&nbsp;&nbsp;&nbsp;&nbsp;COMP_TYPE_HIGH_EQ = 3<br>&nbsp;&nbsp;&nbsp;&nbsp;COMP_TYPE_LOW_EQ = 4 | value provided with achievement update must be not less that limit |
| TYPE_T_LEVEL | The minimum level of the target. | 0 |  |
| TYPE_T_GENDER | 0=male; 1=female | 0 |  |
| TYPE_SCRIPT | 0 | 0 | [ScriptName](#scriptname) required |
| TYPE_MAP_DIFFICULTY | Dungeon:<br>&nbsp;&nbsp;&nbsp;&nbsp;0=Normal<br>&nbsp;&nbsp;&nbsp;&nbsp;1=Heroic<br>Raid:<br>&nbsp;&nbsp;&nbsp;&nbsp;0=10 Man Normal<br>&nbsp;&nbsp;&nbsp;&nbsp;1=25 Man Normal<br>&nbsp;&nbsp;&nbsp;&nbsp;2=10 Man Heroic<br>&nbsp;&nbsp;&nbsp;&nbsp;3=25 Man Heroic | 0 |  |
| TYPE_MAP_PLAYER_COUNT | count | 0 | "with less than %u people in the zone" |
| TYPE_T_TEAM | The target must be on this team: Alliance = 469, Horde = 67 | 0 |  |
| TYPE_S_DRUNK | How drunk the player must be:<br>&nbsp;&nbsp;&nbsp;&nbsp;DRUNKEN_SOBER = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;DRUNKEN_TIPSY = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;DRUNKEN_DRUNK = 2<br>&nbsp;&nbsp;&nbsp;&nbsp;DRUNKEN_SMASHED = 3 | 0 | (enum DrunkenState) of player |
| TYPE_HOLIDAY | [Holiday ID](/files/DBC/335/holidays#id) and [game_event](../world/game_event). Must be an active holiday | 0 | event in holiday time |
| TYPE_BG_LOSS_TEAM_SCORE | min. score | max. score | player's team win bg and opposition team have team score in range |
| TYPE_INSTANCE_SCRIPT | 0 | 0 | make instance script call for check current criteria requirements fit |
| TYPE_S_EQUIPPED_ITEM | [Item level](../world/item_template#itemlevel) | [Item quality](../world/item_template#quality) | for equipped item in slot to check item level and quality |
| TYPE_MAP_ID | Player must be on [Map ID](/files/DBC/335/map#id) | 0 |  |
| TYPE_S_PLAYER_CLASS_RACE | [ChrClass ID](/files/DBC/335/chrclasses#id) | [ChrRace ID](/files/DBC/335/chrraces#id) |
| TYPE_NTH_BIRTHDAY | N | 0 | login on day of N-th Birthday |
| TYPE_S_KNOWN_TITLE | [CharTitle ID](/files/DBC/335/chartitles#id) | 0 | known (pvp) title |
| TYPE_GAME_EVENT | - | - | 7.x only |
| TYPE_S_ITEM_QUALITY | [Item quality](../world/item_template#quality) | 0 |  |
{.dense}

&nbsp;
### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](../world/smart_scripts).
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'access_requirement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_dbc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
