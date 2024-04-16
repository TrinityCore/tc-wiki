---
title: achievement_criteria_data
description: 
published: true
date: 2024-04-16T15:18:07.702Z
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
| [value1](#type) | mediumint | unsigned |  | NO | 0 |  |  |
| [value2](#type) | mediumint | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### criteria_id
This is the [AchievementCriteria ID](/files/DBC/335/achievement_criteria#id).
&nbsp;

### type
Depending on this value, it will determine how **value1** and **value2** are used.

### Tabset {.tabset}
#### type: 0
**ACHIEVEMENT_CRITERIA_DATA_TYPE_NONE**
* **value1**:
0
* **value2**:
0


#### type: 1
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_CREATURE**
* **value1**:
[creature_template.entry](../world/creature_template#entry)
* **value2**:
0


#### type: 2
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_CLASS_RACE**
* **value1**:
[ChrClass ID](/files/DBC/335/chrclasses#id)
* **value2**:
[ChrRace ID](/files/DBC/335/chrraces#id)

 
#### type: 3
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_LESS_HEALTH**
* **value1**:
The percentage of health that the target must reach
* **value2**:
0


#### type: 4
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_DEAD**
* **value1**:
own_team (0, 1)
* **value2**:
0

not corpse (not released body), own_team == false if enemy team expected
#### type: 5
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_AURA**
* **value1**:
The [Spell ID](/files/DBC/335/spell#id) of the aura that must be on the player
* **value2**:
Effect Index of the aura


#### type: 6
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_AREA**
* **value1**:
[AreaTable ID](/files/DBC/335/areatable#id)
* **value2**:
0


#### type: 7
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_AURA**
* **value1**:
The [Spell ID](/files/DBC/335/spell#id) of the aura that must be on the target
* **value2**:
Effect Index of the aura


#### type: 8
**ACHIEVEMENT_CRITERIA_DATA_TYPE_VALUE**
* **value1**:
Value to compare needed to attain achievement
* **value2**:
  [`enum ComparisonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/common/Utilities/Util.h#L505-L513)
  |--|--|
  | COMP_TYPE_EQ | 0 |
  | COMP_TYPE_HIGH | 1 |
  | COMP_TYPE_LOW | 2 |
  | COMP_TYPE_HIGH_EQ | 3 |
  | COMP_TYPE_LOW_EQ | 4 |
  {.dense}

value provided with achievement update must be not less that limit
#### type: 9
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_LEVEL**
* **value1**:
The minimum level of the target.
* **value2**:
0


#### type: 10
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_GENDER**
* **value1**:
[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
  |--|--|
  | GENDER_MALE | 0 |
  | GENDER_FEMALE | 1 |
  | GENDER_NONE | 2 |
  {.dense}
* **value2**:
0


#### type: 11
**ACHIEVEMENT_CRITERIA_DATA_TYPE_SCRIPT**
* **value1**:
0
* **value2**:
0

[ScriptName](#scriptname) required
#### type: 12
**TYPE_MAP_DIFFICULTY**
* **value1**:
  [`enum Difficulty`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L278-L290)
  | Raid | Dungeon | Value |
  |--|--|:-:|
  | RAID_DIFFICULTY_10MAN_NORMAL | DUNGEON_DIFFICULTY_NORMAL | 0 |
  | RAID_DIFFICULTY_25MAN_NORMAL | DUNGEON_DIFFICULTY_HEROIC | 1 |
  | RAID_DIFFICULTY_10MAN_HEROIC |  | 2 |
  | RAID_DIFFICULTY_25MAN_HEROIC |  | 3 |
  {.dense}
* **value2**:
0


#### type: 13
**ACHIEVEMENT_CRITERIA_DATA_TYPE_MAP_PLAYER_COUNT**
* **value1**:
count
* **value2**:
0

"with less than %u people in the zone"
#### type: 14
**ACHIEVEMENT_CRITERIA_DATA_TYPE_T_TEAM**
* **value1**:
The target must be on this team: 
  [`enum Team`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/server/shared/SharedDefines.h#L792-L802)
  |--|--|
  | ALLIANCE | 469 |
  | HORDE | 67 |
  {.dense}
* **value2**:
0


#### type: 15
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_DRUNK**
* **value1**:
How drunk the player must be: 
  [`enum DrunkenState`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Player/Player.h#L319-L325)
  |--|--|
  | DRUNKEN_SOBER | 0 |
  | DRUNKEN_TIPSY | 1 |
  | DRUNKEN_DRUNK | 2 |
  | DRUNKEN_SMASHED | 3 |
  {.dense}
* **value2**:
0


#### type: 16
**ACHIEVEMENT_CRITERIA_DATA_TYPE_HOLIDAY**
* **value1**:
[Holiday ID](/files/DBC/335/holidays#id). Must be an active holiday
* **value2**:
0

event in holiday time
#### type: 17
**ACHIEVEMENT_CRITERIA_DATA_TYPE_BG_LOSS_TEAM_SCORE**
* **value1**:
min. score
* **value2**:
max. score

player's team win bg and opposition team have team score in range
#### type: 18
**ACHIEVEMENT_CRITERIA_DATA_TYPE_INSTANCE_SCRIPT**
* **value1**:
0
* **value2**:
0

make instance script call for check current criteria requirements fit
#### type: 19
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_EQUIPPED_ITEM**
* **value1**:
[item_template.ItemLevel](../world/item_template#itemlevel)
* **value2**:
[item_template.Quality](../world/item_template#quality)

for equipped item in slot to check item level and quality
#### type: 20
**ACHIEVEMENT_CRITERIA_DATA_TYPE_MAP_ID**
* **value1**:
Player must be on [Map ID](/files/DBC/335/map#id)
* **value2**:
0


#### type: 21
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_PLAYER_CLASS_RACE**
* **value1**:
[ChrClass ID](/files/DBC/335/chrclasses#id)
* **value2**:
[ChrRace ID](/files/DBC/335/chrraces#id)


#### type: 22
**ACHIEVEMENT_CRITERIA_DATA_TYPE_NTH_BIRTHDAY**
* **value1**:
N
* **value2**:
0

login on day of N-th Birthday
#### type: 23
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_KNOWN_TITLE**
* **value1**:
[CharTitle ID](/files/DBC/335/chartitles#id)
* **value2**:
0

known (pvp) title
#### :x: type: 24
**ACHIEVEMENT_CRITERIA_DATA_TYPE_GAME_EVENT**
* **value1**:
\-
* **value2**:
\-

> 7.x only
{.is-danger}


#### type: 25
**ACHIEVEMENT_CRITERIA_DATA_TYPE_S_ITEM_QUALITY**
* **value1**:
[item_template.Quality](../world/item_template#quality)
* **value2**:
0


### dummy Tabset {.tabset}
&nbsp;
### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](../world/smart_scripts).
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'access_requirement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_dbc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
