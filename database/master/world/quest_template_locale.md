---
title: quest_template_locale
description: 
published: true
date: 2022-11-21T21:08:12.491Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:37.173Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_visual_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_visual_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [LogTitle](#logtitle) | mediumtext |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | mediumtext |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | mediumtext |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverText](#portraitgivertext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverName](#portraitgivername) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInText](#portraitturnintext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInName](#portraitturninname) | mediumtext |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### LogTitle
*- no description -*
&nbsp;

### LogDescription
*- no description -*
&nbsp;

### QuestDescription
*- no description -*
&nbsp;

### AreaDescription
*- no description -*
&nbsp;

### PortraitGiverText
*- no description -*
&nbsp;

### PortraitGiverName
*- no description -*
&nbsp;

### PortraitTurnInText
*- no description -*
&nbsp;

### PortraitTurnInName
*- no description -*
&nbsp;

### QuestCompletionLog
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_template_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_visual_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_visual_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
