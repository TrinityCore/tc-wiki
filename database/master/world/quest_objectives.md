---
title: quest_objectives
description: 
published: true
date: 2021-08-30T09:24:17.513Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/quest_mail_sender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_mail_sender'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_objectives_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_objectives_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [QuestID](#QuestID) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Type](#Type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Order](#Order) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StorageIndex](#StorageIndex) | tinyint(3) | signed |  | NO | 0 |  |  |
| [ObjectID](#ObjectID) | int(10) | signed |  | NO | 0 |  |  |
| [Amount](#Amount) | int(10) | signed |  | NO | 0 |  |  |
| [Flags](#Flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags2](#Flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [ProgressBarWeight](#ProgressBarWeight) | float |  |  | NO | 0 |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(10) | signed |  | NO | 0 |  |  |
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

