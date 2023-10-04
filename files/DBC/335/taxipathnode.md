---
title: TaxiPathNode.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/taxipath" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TaxiPath'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/teamcontributionpoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TeamContributionPoints'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# TaxiPathNode.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=taxipathnode&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TaxiPathNode)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [PathID](#pathid) | uint32 | [TaxiPath.dbc/0](/files/DBC/335/taxipath#id) |
| 2 | [NodeIndex](#nodeindex) | uint32 |  |
| 3 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 4 | [Loc_X](#loc) | float |  |
| 5 | [Loc_Y](#loc) | float |  |
| 6 | [Loc_Z](#loc) | float |  |
| 7 | [Flags](#flags) | uint32 |  |
| 8 | [Delay](#delay) | uint32 |  |
| 9 | [ArrivalEventID](#arrivaleventid) | uint32 | [event_script id](/database/335/world/scripts#id) |
| 10 | [DepartureEventID](#departureeventid) | uint32 | [event_script id](/database/335/world/scripts#id) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### PathID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### NodeIndex
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### ContinentID
<code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### Loc
<code>Col: 4 &ndash; 6 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 7 (uint32)</code>

* 0x2: Stops the object for a number of seconds defined by **Delay**.
&nbsp;

### Delay
<code>Col: 8 (uint32)</code>

Delay in seconds before moving to next point. (used on boats / trams / zepplins)
&nbsp;

### ArrivalEventID
<code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### DepartureEventID
<code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/taxipath" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TaxiPath'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/teamcontributionpoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TeamContributionPoints'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
