---
title: gm_subsurvey
description:
published: true
date: 2023-07-30T17:07:49.878Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:41.523Z
---

> Stores results of individual GM-Survey questions.
> worldserver.conf setting [`GM.TicketSystem.ChanceOfGMSurvey`](/files/configuration/home) must be > 0 to allow for surveys.
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

