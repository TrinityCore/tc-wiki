---
title: reputation_spillover_template
description: 
published: true
date: 2022-11-21T21:30:31.303Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T22:08:45.284Z
---

<a href="https://trinitycore.info/en/database/335/world/reputation_reward_rate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reputation_reward_rate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_meta" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'script_spline_chain_meta'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [faction](#faction) | smallint | unsigned | PRI | NO | 0 |  | faction entry |
| [faction1](#faction1) | smallint | unsigned |  | NO | 0 |  | faction to give spillover for |
| [rate_1](#rate_1) | float |  |  | NO | 0 |  | the given rep points * rate |
| [rank_1](#rank_1) | tinyint | unsigned |  | NO | 0 |  | max rank,above this will not give any spillover |
| [faction2](#faction2) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_2](#rate_2) | float |  |  | NO | 0 |  |  |
| [rank_2](#rank_2) | tinyint | unsigned |  | NO | 0 |  |  |
| [faction3](#faction3) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_3](#rate_3) | float |  |  | NO | 0 |  |  |
| [rank_3](#rank_3) | tinyint | unsigned |  | NO | 0 |  |  |
| [faction4](#faction4) | smallint | unsigned |  | NO | 0 |  |  |
| [rate_4](#rate_4) | float |  |  | NO | 0 |  |  |
| [rank_4](#rank_4) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### faction
*- no description -*
&nbsp;

### faction1
*- no description -*
&nbsp;

### rate_1
*- no description -*
&nbsp;

### rank_1
*- no description -*
&nbsp;

### faction2
*- no description -*
&nbsp;

### rate_2
*- no description -*
&nbsp;

### rank_2
*- no description -*
&nbsp;

### faction3
*- no description -*
&nbsp;

### rate_3
*- no description -*
&nbsp;

### rank_3
*- no description -*
&nbsp;

### faction4
*- no description -*
&nbsp;

### rate_4
*- no description -*
&nbsp;

### rank_4
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/reputation_reward_rate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reputation_reward_rate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_meta" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'script_spline_chain_meta'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
