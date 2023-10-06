---
title: criteria
description: 
published: true
date: 2023-10-06T19:24:23.538Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:35.601Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/creature_type_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_type_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/criteria_tree" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'criteria_tree'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | smallint | signed |  | NO | 0 |  |  |
| [Asset](#asset) | int | signed |  | NO | 0 |  |  |
| [ModifierTreeId](#modifiertreeid) | int | unsigned |  | NO | 0 |  |  |
| [StartEvent](#startevent) | int | signed |  | NO | 0 |  |  |
| [StartAsset](#startasset) | int | signed |  | NO | 0 |  |  |
| [StartTimer](#starttimer) | smallint | unsigned |  | NO | 0 |  |  |
| [FailEvent](#failevent) | int | signed |  | NO | 0 |  |  |
| [FailAsset](#failasset) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [EligibilityWorldStateID](#eligibilityworldstateid) | smallint | signed |  | NO | 0 |  |  |
| [EligibilityWorldStateValue](#eligibilityworldstatevalue) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Asset
*- no description -*
&nbsp;

### ModifierTreeId
*- no description -*
&nbsp;

### StartEvent
*- no description -*
&nbsp;

### StartAsset
*- no description -*
&nbsp;

### StartTimer
*- no description -*
&nbsp;

### FailEvent
*- no description -*
&nbsp;

### FailAsset
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### EligibilityWorldStateID
*- no description -*
&nbsp;

### EligibilityWorldStateValue
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/creature_type_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_type_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/criteria_tree" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'criteria_tree'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
