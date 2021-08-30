---
title: quest_template_addon
description: 
published: true
date: 2021-08-30T09:24:17.517Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/quest_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [MaxLevel](#MaxLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AllowableClasses](#AllowableClasses) | int(10) | unsigned |  | NO | 0 |  |  |
| [SourceSpellID](#SourceSpellID) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [PrevQuestID](#PrevQuestID) | mediumint(8) | signed |  | NO | 0 |  |  |
| [NextQuestID](#NextQuestID) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [ExclusiveGroup](#ExclusiveGroup) | mediumint(8) | signed |  | NO | 0 |  |  |
| [RewardMailTemplateID](#RewardMailTemplateID) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [RewardMailDelay](#RewardMailDelay) | int(10) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillID](#RequiredSkillID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillPoints](#RequiredSkillPoints) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredMinRepFaction](#RequiredMinRepFaction) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredMaxRepFaction](#RequiredMaxRepFaction) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredMinRepValue](#RequiredMinRepValue) | mediumint(8) | signed |  | NO | 0 |  |  |
| [RequiredMaxRepValue](#RequiredMaxRepValue) | mediumint(8) | signed |  | NO | 0 |  |  |
| [ProvidedItemCount](#ProvidedItemCount) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpecialFlags](#SpecialFlags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#ScriptName) | varchar(64) | signed |  | NO | '' |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### AllowableClasses
*- no description -*
&nbsp;

### SourceSpellID
*- no description -*
&nbsp;

### PrevQuestID
*- no description -*
&nbsp;

### NextQuestID
*- no description -*
&nbsp;

### ExclusiveGroup
*- no description -*
&nbsp;

### RewardMailTemplateID
*- no description -*
&nbsp;

### RewardMailDelay
*- no description -*
&nbsp;

### RequiredSkillID
*- no description -*
&nbsp;

### RequiredSkillPoints
*- no description -*
&nbsp;

### RequiredMinRepFaction
*- no description -*
&nbsp;

### RequiredMaxRepFaction
*- no description -*
&nbsp;

### RequiredMinRepValue
*- no description -*
&nbsp;

### RequiredMaxRepValue
*- no description -*
&nbsp;

### ProvidedItemCount
*- no description -*
&nbsp;

### SpecialFlags
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/quest_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/quest_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

