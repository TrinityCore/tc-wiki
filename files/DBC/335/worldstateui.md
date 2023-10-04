---
title: WorldStateUI.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldsafelocs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldSafeLocs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldstatezonesounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldStateZoneSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldStateUI.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldstateui&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldStateUI)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [AreaID](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 3 | [PhaseShift](#phaseshift) | uint32 |  |
| 4 | [Icon](#icon) | string |  |
| 5 | [String_0](#string) | string |  |
| 6 | [String_1](#string) | string |  |
| 7 | [String_2](#string) | string |  |
| 8 | [String_3](#string) | string |  |
| 9 | [String_4](#string) | string |  |
| 10 | [String_5](#string) | string |  |
| 11 | [String_6](#string) | string |  |
| 12 | [String_7](#string) | string |  |
| 13 | [String_8](#string) | string |  |
| 14 | [String_9](#string) | string |  |
| 15 | [String_10](#string) | string |  |
| 16 | [String_11](#string) | string |  |
| 17 | [String_12](#string) | string |  |
| 18 | [String_13](#string) | string |  |
| 19 | [String_14](#string) | string |  |
| 20 | [String_15](#string) | string |  |
| 21 | [String_lang_mask](#string) | uint32 |  |
| 22 | [Tooltip_0](#tooltip) | string |  |
| 23 | [Tooltip_1](#tooltip) | string |  |
| 24 | [Tooltip_2](#tooltip) | string |  |
| 25 | [Tooltip_3](#tooltip) | string |  |
| 26 | [Tooltip_4](#tooltip) | string |  |
| 27 | [Tooltip_5](#tooltip) | string |  |
| 28 | [Tooltip_6](#tooltip) | string |  |
| 29 | [Tooltip_7](#tooltip) | string |  |
| 30 | [Tooltip_8](#tooltip) | string |  |
| 31 | [Tooltip_9](#tooltip) | string |  |
| 32 | [Tooltip_10](#tooltip) | string |  |
| 33 | [Tooltip_11](#tooltip) | string |  |
| 34 | [Tooltip_12](#tooltip) | string |  |
| 35 | [Tooltip_13](#tooltip) | string |  |
| 36 | [Tooltip_14](#tooltip) | string |  |
| 37 | [Tooltip_15](#tooltip) | string |  |
| 38 | [Tooltip_lang_mask](#tooltip) | uint32 |  |
| 39 | [StateVariable](#statevariable) | uint32 |  |
| 40 | [Type](#type) | uint32 |  |
| 41 | [DynamicIcon](#dynamicicon) | string |  |
| 42 | [DynamicTooltip_0](#dynamictooltip) | string |  |
| 43 | [DynamicTooltip_1](#dynamictooltip) | string |  |
| 44 | [DynamicTooltip_2](#dynamictooltip) | string |  |
| 45 | [DynamicTooltip_3](#dynamictooltip) | string |  |
| 46 | [DynamicTooltip_4](#dynamictooltip) | string |  |
| 47 | [DynamicTooltip_5](#dynamictooltip) | string |  |
| 48 | [DynamicTooltip_6](#dynamictooltip) | string |  |
| 49 | [DynamicTooltip_7](#dynamictooltip) | string |  |
| 50 | [DynamicTooltip_8](#dynamictooltip) | string |  |
| 51 | [DynamicTooltip_9](#dynamictooltip) | string |  |
| 52 | [DynamicTooltip_10](#dynamictooltip) | string |  |
| 53 | [DynamicTooltip_11](#dynamictooltip) | string |  |
| 54 | [DynamicTooltip_12](#dynamictooltip) | string |  |
| 55 | [DynamicTooltip_13](#dynamictooltip) | string |  |
| 56 | [DynamicTooltip_14](#dynamictooltip) | string |  |
| 57 | [DynamicTooltip_15](#dynamictooltip) | string |  |
| 58 | [DynamicTooltip_lang_mask](#dynamictooltip) | uint32 |  |
| 59 | [ExtendedUI](#extendedui) | string |  |
| 60 | [ExtendedUIStateVariable_0](#extendeduistatevariable) | uint32 |  |
| 61 | [ExtendedUIStateVariable_1](#extendeduistatevariable) | uint32 |  |
| 62 | [ExtendedUIStateVariable_2](#extendeduistatevariable) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
:x: <code>Col: 1 (uint32)</code>

Can be -1 to show up everywhere.
&nbsp;

### AreaID
:x: <code>Col: 2 (uint32)</code>

Can be zero for "everywhere".
&nbsp;

### PhaseShift
:x: <code>Col: 3 (uint32)</code>

Phase this WorldState is avaliable in.
&nbsp;

### Icon
:x: <code>Col: 4 (string)</code>

The icon that is used in the interface.
&nbsp;

### String
:x: <code>Col: 5 &ndash; 21 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Tooltip
:x: <code>Col: 22 &ndash; 38 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### StateVariable
:x: <code>Col: 39 (uint32)</code>

*- no description -*
&nbsp;

### Type
:x: <code>Col: 40 (uint32)</code>

* 0: unknown
* 1: unknown
* 2: not shown in ui
* 3: wintergrasp
&nbsp;

### DynamicIcon
:x: <code>Col: 41 (string)</code>

*- no description -*
&nbsp;

### DynamicTooltip
:x: <code>Col: 42 &ndash; 58 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### ExtendedUI
:x: <code>Col: 59 (string)</code>

*- no description -*
&nbsp;

### ExtendedUIStateVariable
:x: <code>Col: 60 &ndash; 62 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/worldsafelocs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldSafeLocs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldstatezonesounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldStateZoneSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
