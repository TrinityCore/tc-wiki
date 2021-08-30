---
title: gm_suggestion
description: 
published: true
date: 2021-08-30T09:14:40.972Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/gm_complaint_chatlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_complaint_chatlog'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  |  |  |
| [playerGuid](#playerGuid) | bigint(20) | unsigned |  | NO |  |  |  |
| [note](#note) | text |  |  | NO |  |  |  |
| [createTime](#createTime) | bigint(20) | signed |  | NO | 0 |  |  |
| [mapId](#mapId) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [posX](#posX) | float |  |  | NO | 0 |  |  |
| [posY](#posY) | float |  |  | NO | 0 |  |  |
| [posZ](#posZ) | float |  |  | NO | 0 |  |  |
| [facing](#facing) | float |  |  | NO | 0 |  |  |
| [closedBy](#closedBy) | bigint(20) | signed |  | NO | 0 |  |  |
| [assignedTo](#assignedTo) | bigint(20) | unsigned |  | NO | 0 |  | GUID of admin to whom ticket is assigned |
| [comment](#comment) | text |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### playerGuid
*- no description -*
&nbsp;

### note
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

### facing
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

<a href="https://dev.trinitycore.info/en/database/master/characters/gm_complaint_chatlog" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_complaint_chatlog'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

