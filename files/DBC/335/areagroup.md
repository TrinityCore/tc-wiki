---
title: AreaGroup.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/animationdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AnimationData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areapoi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaPOI'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AreaGroup.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=areagroup&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AreaGroup)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [AreaID_0](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 2 | [AreaID_1](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 3 | [AreaID_2](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 4 | [AreaID_3](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 5 | [AreaID_4](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 6 | [AreaID_5](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 7 | [NextAreaID](#nextareaid) | uint32 | [AreaGroup.dbc/0](#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AreaID
<code>Col: 1 &ndash; 6 (uint32)</code>

*- no description -*
&nbsp;

### NextAreaID
<code>Col: 7 (uint32)</code>

If group is to contain more than 6 areas, this links to another part of group (group chaining).
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/animationdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AnimationData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areapoi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaPOI'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
