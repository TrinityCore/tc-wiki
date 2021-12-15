---
title: gm_ticket
description: 
published: true
date: 2021-08-30T22:00:42.132Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_survey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  | auto_increment |  |
| [type](#type) | tinyint(3) | unsigned |  | NO | 0 |  | 0 open, 1 closed, 2 character deleted |
| [playerGuid](#playerguid) | int(10) | unsigned |  | NO | 0 |  | Global Unique Identifier of ticket creator |
| [name](#name) | varchar(12) | signed |  | NO |  |  | Name of ticket creator |
| [description](#description) | text |  |  | NO |  |  |  |
| [createTime](#createtime) | int(10) | unsigned |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [lastModifiedTime](#lastmodifiedtime) | int(10) | unsigned |  | NO | 0 |  |  |
| [closedBy](#closedby) | int(10) | signed |  | NO | 0 |  |  |
| [assignedTo](#assignedto) | int(10) | unsigned |  | NO | 0 |  | GUID of admin to whom ticket is assigned |
| [comment](#comment) | text |  |  | NO |  |  |  |
| [response](#response) | text |  |  | NO |  |  |  |
| [completed](#completed) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [escalated](#escalated) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [viewed](#viewed) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [needMoreHelp](#needmorehelp) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [resolvedBy](#resolvedby) | int(10) | signed |  | NO | 0 |  | GUID of GM who resolved the ticket |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### playerGuid
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### description
*- no description -*
&nbsp;

### createTime
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### posX
*- no description -*
&nbsp;

### posY
*- no description -*
&nbsp;

### posZ
*- no description -*
&nbsp;

### lastModifiedTime
*- no description -*
&nbsp;

### closedBy
*- no description -*
&nbsp;

### assignedTo
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

### response
*- no description -*
&nbsp;

### completed
*- no description -*
&nbsp;

### escalated
*- no description -*
&nbsp;

### viewed
*- no description -*
&nbsp;

### needMoreHelp
*- no description -*
&nbsp;

### resolvedBy
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_survey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

