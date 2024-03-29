---
title: quest_reward_choice_items
description: 
published: true
date: 2022-11-21T21:08:03.334Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:25.936Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_reward_display_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int | unsigned | PRI | NO |  |  |  |
| [Type1](#type1) | tinyint | unsigned |  | YES | 0 |  |  |
| [Type2](#type2) | tinyint | unsigned |  | YES | 0 |  |  |
| [Type3](#type3) | tinyint | unsigned |  | YES | 0 |  |  |
| [Type4](#type4) | tinyint | unsigned |  | YES | 0 |  |  |
| [Type5](#type5) | tinyint | unsigned |  | YES | 0 |  |  |
| [Type6](#type6) | tinyint | unsigned |  | YES | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
*- no description -*
&nbsp;

### Type1
*- no description -*
&nbsp;

### Type2
*- no description -*
&nbsp;

### Type3
*- no description -*
&nbsp;

### Type4
*- no description -*
&nbsp;

### Type5
*- no description -*
&nbsp;

### Type6
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_request_items_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_reward_display_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_reward_display_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

