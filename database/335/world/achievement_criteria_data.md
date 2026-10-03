---
title: achievement_criteria_data
description: 
published: true
date: 2025-12-15T00:34:46.161Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:33.368Z
---

This table contains the data that a player needs to obtain / complete in order to receive a given achievement.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [criteria_id](#criteria_id) | int | signed | PRI | NO |  |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [value1](#type) | int | unsigned |  | NO | 0 |  |  |
| [value2](#type) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |

&nbsp;
## Description of fields

### criteria_id
This is the [AchievementCriteria ID](/files/DBC/335/achievement_criteria#id-alt).
&nbsp;

### type
Depending on this value, it will determine how **value1** and **value2** are used.

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_NONE (0)
* **value1**:  
  `0`
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_CREATURE (1)
* **value1**:  
  [creature_template.entry](../world/creature_template#entry)
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_CLASS_RACE (2)
* **value1**:  
  [ChrClass ID](/files/DBC/335/chrclasses#id-alt)
* **value2**:  
  [ChrRace ID](/files/DBC/335/chrraces#id-alt)

 
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_LESS_HEALTH (3)
* **value1**:  
  The percentage of health that the target must reach
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_PLAYER_DEAD (4)
* **value1**:  
  own_team (0, 1)
* **value2**:  
  `0`

not corpse (not released body), own_team == false if enemy team expected
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_AURA (5)
* **value1**:  
  The [Spell ID](/files/DBC/335/spell#id-alt) of the aura that must be on the player
* **value2**:  
  Effect Index of the aura
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_AREA (6)
* **value1**:  
  [AreaTable ID](/files/DBC/335/areatable#id-alt)
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_AURA (7)
* **value1**:  
  The [Spell ID](/files/DBC/335/spell#id-alt) of the aura that must be on the target
* **value2**:  
  Effect Index of the aura
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_VALUE (8)
* **value1**:  
  Value to compare needed to attain achievement
* **value2**:  
  [`enum ComparisonType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/common/Utilities/Util.h#L505-L513)
  | ID | Form | Name | Comment |
  | --- | :-: | --- | --- |
  | 0 | == | COMP_TYPE_EQ | amount must be equal to **value1** |
  | 1 | > | COMP_TYPE_HIGH | amount must be higher than **value1** |
  | 2 | < | COMP_TYPE_LOW | amount must be lower than **value1** |
  | 3 | >= | COMP_TYPE_HIGH_EQ | amount must be higher or equal to **value1** |
  | 4 | <= | COMP_TYPE_LOW_EQ | amount must be lower or equal to **value1** |
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_LEVEL (9)
* **value1**:  
  The minimum level of the target.
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_GENDER (10)
* **value1**:  
  <!--@include: @/partial/335/gender.md-->

* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_SCRIPT (11)
* **value1**:  
  `0`
* **value2**:  
  `0`

[ScriptName](#scriptname) required
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_MAP_DIFFICULTY (12)
* **value1**:  
  <!--@include: @/partial/335/difficulty.md-->

* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_MAP_PLAYER_COUNT (13)
* **value1**:  
  count
* **value2**:  
  `0`

"with less than %u people in the zone"
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_T_TEAM (14)
* **value1**:  
  The target must be on this team: 
  <!--@include: @/partial/335/team.md-->

* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_DRUNK (15)
* **value1**:  
  How drunk the player must be:  
  <!--@include: @/partial/335/drunken-state.md-->

* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_HOLIDAY (16)
* **value1**:  
  [Holiday ID](/files/DBC/335/holidays#id-alt). Must be an active holiday
* **value2**:  
  `0`

event in holiday time
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_BG_LOSS_TEAM_SCORE (17)
* **value1**:  
  min. score
* **value2**:  
  max. score

player's team win bg and opposition team have team score in range
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_INSTANCE_SCRIPT (18)
* **value1**:  
  `0`
* **value2**:  
  `0`

make instance script call for check current criteria requirements fit
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_EQUIPPED_ITEM (19)
* **value1**:  
  [item_template.ItemLevel](../world/item_template#itemlevel)
* **value2**:  
  [item_template.Quality](../world/item_template#quality)

for equipped item in slot to check item level and quality
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_MAP_ID (20)
* **value1**:  
  Player must be on [Map ID](/files/DBC/335/map#id-alt)
* **value2**:  
  `0`
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_PLAYER_CLASS_RACE (21)
* **value1**:  
  [ChrClass ID](/files/DBC/335/chrclasses#id-alt)
* **value2**:  
  [ChrRace ID](/files/DBC/335/chrraces#id-alt)
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_NTH_BIRTHDAY (22)
* **value1**:  
  N
* **value2**:  
  `0`

login on day of N-th Birthday
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_KNOWN_TITLE (23)
* **value1**:  
  [CharTitle ID](/files/DBC/335/chartitles#id-alt)
* **value2**:  
  `0`

known (pvp) title
:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_GAME_EVENT (24)
* **value1**:  
  [game_event.eventEntry](../world/game_event#evententry)
* **value2**:  
  `0`

:::

::: details ACHIEVEMENT_CRITERIA_DATA_TYPE_S_ITEM_QUALITY (25)
* **value1**:  
  [item_template.Quality](../world/item_template#quality)
* **value2**:  
  0

&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
&nbsp;
