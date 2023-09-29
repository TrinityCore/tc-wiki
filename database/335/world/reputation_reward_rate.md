---
title: reputation_reward_rate
description:
published: true
date: 2023-07-13T21:27:38.633Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:42.575Z
---

<a href="https://trinitycore.info/en/database/335/world/reference_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reference_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/reputation_spillover_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reputation_spillover_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Holds reputation multipliers for specific factions.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [faction](#faction) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [quest_rate](#quest_rate) | float |  |  | NO | 1 |  |  |
| [quest_daily_rate](#quest_daily_rate) | float |  |  | NO | 1 |  |  |
| [quest_weekly_rate](#quest_weekly_rate) | float |  |  | NO | 1 |  |  |
| [quest_monthly_rate](#quest_monthly_rate) | float |  |  | NO | 1 |  |  |
| [quest_repeatable_rate](#quest_repeatable_rate) | float |  |  | NO | 1 |  |  |
| [creature_rate](#creature_rate) | float |  |  | NO | 1 |  |  |
| [spell_rate](#spell_rate) | float |  |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### faction
[Faction ID](/files/DBC/335/faction#id) these rates apply to.
&nbsp;

### quest_rate
The rate for reputation gain from regular quests.
&nbsp;

### quest_daily_rate
The rate for reputation gain from daily repeatable quests.
&nbsp;

### quest_weekly_rate
The rate for reputation gain from weekly repeatable quests.
&nbsp;

### quest_monthly_rate
The rate for reputation gain from monthly repeatable quests.
&nbsp;

### quest_repeatable_rate
The rate for reputation gain from genreral repeatable quests.
&nbsp;

### creature_rate
The rate for reputation gain from creature kills.
&nbsp;

### spell_rate
The rate for reputation gain from spells. (like [Commendation Badges](https://aowow.trinitycore.info/?search=Commendation+Badge))
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/reference_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reference_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/reputation_spillover_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'reputation_spillover_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
