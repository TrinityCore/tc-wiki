---
title: gm_survey
description:
published: true
date: 2023-07-30T17:15:29.344Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:44.193Z
---

<a href="https://trinitycore.info/en/database/335/characters/gm_subsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_subsurvey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_ticket" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_ticket'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Stores GM-Surveys, randomly triggered after a GM-Ticket is resolved.
> worldserver.conf setting [`GM.TicketSystem.ChanceOfGMSurvey`](https://trinitycore.info/en/files/configuration/home) must be > 0 to allow for surveys.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [surveyId](#surveyid) | int | unsigned | PRI | NO |  | auto_increment |  |
| [guid](#guid) | int | unsigned |  | NO | 0 |  |  |
| [mainSurvey](#mainsurvey) | int | unsigned |  | NO | 0 |  |  |
| [comment](#comment) | longtext |  |  | NO |  |  |  |
| [createTime](#createtime) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### surveyId
Unique survey enumerator.
&nbsp;

### guid
The [guid](../characters/characters#guid) of the surveyed character.
&nbsp;

### mainSurvey
An [GMSurveySurveys ID](/files/DBC/335/gmsurveysurveys#id), defining the questions.
&nbsp;

### comment
A player composed comment.
&nbsp;

### createTime
Unix timestamp when the survey was submitted.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/gm_subsurvey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_subsurvey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/gm_ticket" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gm_ticket'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
