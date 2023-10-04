---
title: achievement_dbc
description:
published: true
date: 2023-07-07T20:05:20.466Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:35.965Z
---

<a href="https://trinitycore.info/en/database/335/world/achievement_criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_criteria_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Stores achievement data that is missing in [Achievement.dbc](/files/DBC/335/achievement) file.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO |  |  |  |
| [requiredFaction](#requiredfaction) | int | signed |  | NO | -1 |  |  |
| [mapID](#mapid) | int | signed |  | NO | -1 |  |  |
| [points](#points) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [count](#count) | int | unsigned |  | NO | 0 |  |  |
| [refAchievement](#refachievement) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
[AchievementCriteria AchievementID](/files/DBC/335/achievement_criteria#achievementid)
&nbsp;

### requiredFaction
* Both: -1
* Horde: 0
* Alliance: 1
&nbsp;

### mapID
Player must be on that map to be allowed criteria updates. (-1 if not set)
&nbsp;

### points
Achievement points awarded for completing the achievement, has no use serverside.
&nbsp;

### flags
| Name | Value | Comment |
|------|-------|---------|
| ACHIEVEMENT_FLAG_COUNTER | 0x0001 | Just count statistic (never stop and complete) |
| ACHIEVEMENT_FLAG_HIDDEN | 0x0002 | Not sent to client - internal use only |
| ACHIEVEMENT_FLAG_STORE_MAX_VALUE | 0x0004 | Store only max value? used only in "Reach level xx" |
| ACHIEVEMENT_FLAG_SUMM | 0x0008 | Use summ criteria value from all requirements (and calculate max value) |
| ACHIEVEMENT_FLAG_MAX_USED | 0x0010 | Show max criteria (and calculate max value ??) |
| ACHIEVEMENT_FLAG_REQ_COUNT | 0x0020 | Use not zero req count (and calculate max value) |
| ACHIEVEMENT_FLAG_AVERAGE | 0x0040 | Show as average value (value / time_in_days) depend from other flag (by def use last criteria value) |
| ACHIEVEMENT_FLAG_BAR | 0x0080 | Show as progress bar (value / max vale) depend from other flag (by def use last criteria value) |
| ACHIEVEMENT_FLAG_REALM_FIRST_REACH | 0x0100 | |
| ACHIEVEMENT_FLAG_REALM_FIRST_KILL | 0x0200 | |
{.dense}

&nbsp;

### count
Should always be 1.
&nbsp;

### refAchievement
Should always be 0.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/achievement_criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_criteria_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
