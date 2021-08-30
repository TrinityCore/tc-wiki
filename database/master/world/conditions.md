---
title: conditions
description: 
published: true
date: 2021-08-30T09:24:17.472Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/conversation_actors" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_actors'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceTypeOrReferenceId](#SourceTypeOrReferenceId) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [SourceGroup](#SourceGroup) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [SourceEntry](#SourceEntry) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [SourceId](#SourceId) | int(11) | signed | PRI | NO | 0 |  |  |
| [ElseGroup](#ElseGroup) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [ConditionTypeOrReference](#ConditionTypeOrReference) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [ConditionTarget](#ConditionTarget) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue1](#ConditionValue1) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue2](#ConditionValue2) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue3](#ConditionValue3) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [NegativeCondition](#NegativeCondition) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ErrorType](#ErrorType) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [ErrorTextId](#ErrorTextId) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#ScriptName) | char(64) | signed |  | NO | '' |  |  |
| [Comment](#Comment) | varchar(255) | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SourceTypeOrReferenceId
*- no description -*
&nbsp;

### SourceGroup
*- no description -*
&nbsp;

### SourceEntry
*- no description -*
&nbsp;

### SourceId
*- no description -*
&nbsp;

### ElseGroup
*- no description -*
&nbsp;

### ConditionTypeOrReference
*- no description -*
&nbsp;

### ConditionTarget
*- no description -*
&nbsp;

### ConditionValue1
*- no description -*
&nbsp;

### ConditionValue2
*- no description -*
&nbsp;

### ConditionValue3
*- no description -*
&nbsp;

### NegativeCondition
*- no description -*
&nbsp;

### ErrorType
*- no description -*
&nbsp;

### ErrorTextId
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/conversation_actors" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_actors'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

