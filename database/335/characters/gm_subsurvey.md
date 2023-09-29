---
title: gm_subsurvey
description:
published: true
date: 2023-07-30T17:07:49.878Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:41.523Z
---

<a href="https://trinitycore.info/en/database/335/characters/game_event_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_survey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Stores results of individual GM-Survey questions.
> worldserver.conf setting [`GM.TicketSystem.ChanceOfGMSurvey`](https://trinitycore.info/en/files/configuration/home) must be > 0 to allow for surveys.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [surveyId](#surveyid) | int | unsigned | PRI | NO |  | auto_increment |  |
| [questionId](#questionid) | int | unsigned | PRI | NO | 0 |  |  |
| [answer](#answer) | int | unsigned |  | NO | 0 |  |  |
| [answerComment](#answercomment) | text |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### surveyId
references [gm_survey.surveyId](../characters/gm_survey#surveyid).
&nbsp;

### questionId
[GMSurveyQuestion ID](/files/DBC/335/gmsurveyquestions#id)
Should be limited to questions defined by [mainSurvey](../characters/gm_survey#mainsurvey), pointing to [GMSurveySurveys ID](/files/DBC/335/gmsurveysurveys#id)
&nbsp;

### answer
A [GMSurveyAnswers SortIndex](/files/DBC/335/gmsurveyanswers#sortindex) limited by [**questionId**](/files/DBC/335/gmsurveyanswers#gmsurveyquestionid).
(Range: 0 – 11)
&nbsp;

### answerComment
A player composed comment.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/game_event_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_survey'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
