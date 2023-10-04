---
title: SoundEntriesAdvanced.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-09-05CEST16:09:35.000Z
---
<a href="https://trinitycore.info/files/DBC/335/soundentries" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundEntries'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundfilter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundFilter'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SoundEntriesAdvanced.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=soundentriesadvanced&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SoundEntriesAdvanced)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [SoundEntryID](#soundentryid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 2 | [InnerRadius2D](#innerradius2d) | float |  |
| 3 | [Time_A](#time) | uint32 |  |
| 4 | [Time_B](#time) | uint32 |  |
| 5 | [Time_C](#time) | uint32 |  |
| 6 | [Time_D](#time) | uint32 |  |
| 7 | [RandomOffsetRange](#randomoffsetrange) | uint32 |  |
| 8 | [Usage](#usage) | uint32 |  |
| 9 | [TimeIntervalMin](#timeintervalmin) | uint32 |  |
| 10 | [TimeIntervalMax](#timeintervalmax) | uint32 |  |
| 11 | [VolumeSliderCategory](#volumeslidercategory) | uint32 |  |
| 12 | [DuckToSFX](#ducktosfx) | float |  |
| 13 | [DuckToMusic](#ducktomusic) | float |  |
| 14 | [DuckToAmbience](#ducktoambience) | float |  |
| 15 | [InnerRadiusOfInfluence](#innerradiusofinfluence) | float |  |
| 16 | [OuterRadiusOfInfluence](#outerradiusofinfluence) | float |  |
| 17 | [TimeToDuck](#timetoduck) | uint32 |  |
| 18 | [TimeToUnduck](#timetounduck) | uint32 |  |
| 19 | [InsideAngle](#insideangle) | float |  |
| 20 | [OutsideAngle](#outsideangle) | float |  |
| 21 | [OutsideVolume](#outsidevolume) | float |  |
| 22 | [OuterRadius2D](#outerradius2d) | float |  |
| 23 | [Name](#name) | string |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundEntryID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### InnerRadius2D
:x: <code>Col: 2 (float)</code>

*- no description -*
&nbsp;

### Time
:x: <code>Col: 3 &ndash; 6 (uint32)</code>

*- no description -*
&nbsp;

### RandomOffsetRange
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### Usage
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### TimeIntervalMin
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### TimeIntervalMax
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### VolumeSliderCategory
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### DuckToSFX
:x: <code>Col: 12 (float)</code>

*- no description -*
&nbsp;

### DuckToMusic
:x: <code>Col: 13 (float)</code>

*- no description -*
&nbsp;

### DuckToAmbience
:x: <code>Col: 14 (float)</code>

*- no description -*
&nbsp;

### InnerRadiusOfInfluence
:x: <code>Col: 15 (float)</code>

*- no description -*
&nbsp;

### OuterRadiusOfInfluence
:x: <code>Col: 16 (float)</code>

*- no description -*
&nbsp;

### TimeToDuck
:x: <code>Col: 17 (uint32)</code>

*- no description -*
&nbsp;

### TimeToUnduck
:x: <code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

### InsideAngle
:x: <code>Col: 19 (float)</code>

*- no description -*
&nbsp;

### OutsideAngle
:x: <code>Col: 20 (float)</code>

*- no description -*
&nbsp;

### OutsideVolume
:x: <code>Col: 21 (float)</code>

*- no description -*
&nbsp;

### OuterRadius2D
:x: <code>Col: 22 (float)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 23 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/soundentries" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundEntries'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundfilter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundFilter'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
