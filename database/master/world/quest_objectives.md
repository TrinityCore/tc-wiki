---
title: quest_objectives
description: 
published: true
date: 2021-08-30T20:38:02.300Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/quest_mail_sender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_mail_sender'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_objectives_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_objectives_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [QuestID](#questid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Order](#order) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StorageIndex](#storageindex) | tinyint(3) | signed |  | NO | 0 |  |  |
| [ObjectID](#objectid) | int(10) | signed |  | NO | 0 |  |  |
| [Amount](#amount) | int(10) | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags2](#flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProgressBarWeight](#progressbarweight) | float |  |  | NO | 0 |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int(10) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Order
*- no description -*
&nbsp;

### StorageIndex
*- no description -*
&nbsp;

### ObjectID
*- no description -*
&nbsp;

### Amount
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### ProgressBarWeight
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/quest_mail_sender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_mail_sender'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_objectives_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_objectives_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

