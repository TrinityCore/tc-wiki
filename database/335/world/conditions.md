---
title: conditions
description: 
published: true
date: 2021-08-30T22:01:28.017Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SourceTypeOrReferenceId](#sourcetypeorreferenceid) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [SourceGroup](#sourcegroup) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [SourceEntry](#sourceentry) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [SourceId](#sourceid) | int(11) | signed | PRI | NO | 0 |  |  |
| [ElseGroup](#elsegroup) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [ConditionTypeOrReference](#conditiontypeorreference) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [ConditionTarget](#conditiontarget) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue1](#conditionvalue1) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue2](#conditionvalue2) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [ConditionValue3](#conditionvalue3) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [NegativeCondition](#negativecondition) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ErrorType](#errortype) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [ErrorTextId](#errortextid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) | signed |  | YES | NULL |  |  |
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

<a href="https://trinitycore.info/en/database/335/world/command" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'command'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

