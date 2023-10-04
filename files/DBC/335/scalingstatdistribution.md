---
title: ScalingStatDistribution.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/resistances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Resistances'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/scalingstatvalues" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ScalingStatValues'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ScalingStatDistribution.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=scalingstatdistribution&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ScalingStatDistribution)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [StatID_0](#statid) | int32 |  |
| 2 | [StatID_1](#statid) | int32 |  |
| 3 | [StatID_2](#statid) | int32 |  |
| 4 | [StatID_3](#statid) | int32 |  |
| 5 | [StatID_4](#statid) | int32 |  |
| 6 | [StatID_5](#statid) | int32 |  |
| 7 | [StatID_6](#statid) | int32 |  |
| 8 | [StatID_7](#statid) | int32 |  |
| 9 | [StatID_8](#statid) | int32 |  |
| 10 | [StatID_9](#statid) | int32 |  |
| 11 | [Bonus_0](#bonus) | uint32 |  |
| 12 | [Bonus_1](#bonus) | uint32 |  |
| 13 | [Bonus_2](#bonus) | uint32 |  |
| 14 | [Bonus_3](#bonus) | uint32 |  |
| 15 | [Bonus_4](#bonus) | uint32 |  |
| 16 | [Bonus_5](#bonus) | uint32 |  |
| 17 | [Bonus_6](#bonus) | uint32 |  |
| 18 | [Bonus_7](#bonus) | uint32 |  |
| 19 | [Bonus_8](#bonus) | uint32 |  |
| 20 | [Bonus_9](#bonus) | uint32 |  |
| 21 | [Maxlevel](#maxlevel) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### StatID
<code>Col: 1 &ndash; 10 (int32)</code>

[`enum Stats`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L275-L283)
| ID | Name |
|----|------|
| 0 | STAT_STRENGTH |
| 1 | STAT_AGILITY |
| 2 | STAT_STAMINA |
| 3 | STAT_INTELLECT |
| 4 | STAT_SPIRIT |
{.dense}

&nbsp;

### Bonus
<code>Col: 11 &ndash; 20 (uint32)</code>

*- no description -*
&nbsp;

### Maxlevel
<code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/resistances" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Resistances'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/scalingstatvalues" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ScalingStatValues'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
