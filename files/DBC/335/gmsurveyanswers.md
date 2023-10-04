---
title: GMSurveyAnswers.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/glyphslot" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GlyphSlot'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/gmsurveycurrentsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GMSurveyCurrentSurvey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# GMSurveyAnswers.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=gmsurveyanswers&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GMSurveyAnswers)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Sort_Index](#sort_index) | uint32 |  |
| 2 | [GMSurveyQuestionID](#gmsurveyquestionid) | uint32 | [GMSurveyQuestion.dbc/0](/files/DBC/335/gmsurveyquestions#id) |
| 3 | [Answer_0](#answer) | string |  |
| 4 | [Answer_1](#answer) | string |  |
| 5 | [Answer_2](#answer) | string |  |
| 6 | [Answer_3](#answer) | string |  |
| 7 | [Answer_4](#answer) | string |  |
| 8 | [Answer_5](#answer) | string |  |
| 9 | [Answer_6](#answer) | string |  |
| 10 | [Answer_7](#answer) | string |  |
| 11 | [Answer_8](#answer) | string |  |
| 12 | [Answer_9](#answer) | string |  |
| 13 | [Answer_10](#answer) | string |  |
| 14 | [Answer_11](#answer) | string |  |
| 15 | [Answer_12](#answer) | string |  |
| 16 | [Answer_13](#answer) | string |  |
| 17 | [Answer_14](#answer) | string |  |
| 18 | [Answer_15](#answer) | string |  |
| 19 | [Answer_lang_mask](#answer) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Sort_Index
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### GMSurveyQuestionID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Answer
:x: <code>Col: 3 &ndash; 19 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/glyphslot" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GlyphSlot'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/gmsurveycurrentsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GMSurveyCurrentSurvey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
