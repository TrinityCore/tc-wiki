---
title: areatrigger_template
description: This table contains the description of areatrigger.
published: true
date: 2021-11-15T18:28:26.578Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:59.429Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_teleport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_teleport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_template_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_template_actions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id) | int(10) | unsigned | PRI | NO |  |  |  |
| [IsServerSide](#isserverside) | tinyint(1) | unsigned | PRI | NO |  |  |  |
| [Type](#type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [Data0](#data0) | float |  |  | NO | 0 |  |  |
| [Data1](#data1) | float |  |  | NO | 0 |  |  |
| [Data2](#data2) | float |  |  | NO | 0 |  |  |
| [Data3](#data3) | float |  |  | NO | 0 |  |  |
| [Data4](#data4) | float |  |  | NO | 0 |  |  |
| [Data5](#data5) | float |  |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id
*- no description -*
&nbsp;

### IsServerSide
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Data0
*- no description -*
&nbsp;

### Data1
*- no description -*
&nbsp;

### Data2
*- no description -*
&nbsp;

### Data3
*- no description -*
&nbsp;

### Data4
*- no description -*
&nbsp;

### Data5
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_teleport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_teleport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_template_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_template_actions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

