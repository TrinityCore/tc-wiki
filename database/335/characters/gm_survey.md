---
title: gm_survey
description:
published: true
date: 2023-07-30T17:15:29.344Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:44.193Z
---

> Stores GM-Surveys, randomly triggered after a GM-Ticket is resolved.
> worldserver.conf setting [`GM.TicketSystem.ChanceOfGMSurvey`](/files/configuration/home) must be > 0 to allow for surveys.
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

