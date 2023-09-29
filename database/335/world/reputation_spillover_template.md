---
title: reputation_spillover_template
description:
published: true
date: 2023-07-13T21:46:14.167Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:45.284Z
---

<a href="https://trinitycore.info/en/database/335/world/reputation_reward_rate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reputation_reward_rate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_meta" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'script_spline_chain_meta'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table defines when reputation gain with one faction should also affect other factions. Up to four factions can gain or lose an amount relative to the original reputation gain.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [faction](#faction) | smallint | unsigned | PRI | NO | 0 |  | faction entry |
| [faction1](#faction[1-4]) | smallint | unsigned |  | NO | 0 |  | faction to give spillover for |
| [rate_1](#rate_[1-4]) | float |  |  | NO | 0 |  | the given rep points * rate |
| [rank_1](#rank_[1-4]) | tinyint | unsigned |  | NO | 0 |  | max rank,above this will not give any spillover |
| [faction2](#faction[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_2](#rate_[1-4]) | float |  |  | NO | 0 |  |  |
| [rank_2](#rank_[1-4]) | tinyint | unsigned |  | NO | 0 |  |  |
| [faction3](#faction[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_3](#rate_[1-4]) | float |  |  | NO | 0 |  |  |
| [rank_3](#rank_[1-4]) | tinyint | unsigned |  | NO | 0 |  |  |
| [faction4](#faction[1-4]) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_4](#rate_[1-4]) | float |  |  | NO | 0 |  |  |
| [rank_4](#rank_[1-4]) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### faction
[Faction ID](/files/DBC/335/faction#id), whose reputation affects others.
&nbsp;

### faction\[1-4]
[Faction ID](/files/DBC/335/faction#id), receiving the spillover from **faction**.
&nbsp;

### rate_\[1-4]
The factor applied to the original reputation gain. If it is negative the player will lose reputation with **faction\[1-4]**.
`1.0 = 100%`
&nbsp;

### rank_\[1-4]
The `enum ReputationRank` up to and including which the spillover occurs.
| ID | Name |
|----|------|
| 0 | REP_HATED |
| 1 | REP_HOSTILE |
| 2 | REP_UNFRIENDLY |
| 3 | REP_NEUTRAL |
| 4 | REP_FRIENDLY |
| 5 | REP_HONORED |
| 6 | REP_REVERED |
| 7 | REP_EXALTED |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/reputation_reward_rate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reputation_reward_rate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_meta" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'script_spline_chain_meta'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
