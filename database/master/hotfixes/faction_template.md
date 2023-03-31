---
title: faction_template
description: 
published: true
date: 2022-12-19T18:38:04.045Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:31.343Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'faction_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/friendship_rep_reaction" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'friendship_rep_reaction'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | smallint | unsigned |  | NO | 0 |  |  |
| [FactionGroup](#factiongroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [FriendGroup](#friendgroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [EnemyGroup](#enemygroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [Enemies1](#enemies1) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies2](#enemies2) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies3](#enemies3) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies4](#enemies4) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies5](#enemies5) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies6](#enemies6) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies7](#enemies7) | smallint | unsigned |  | NO | 0 |  |  |
| [Enemies8](#enemies8) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend1](#friend1) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend2](#friend2) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend3](#friend3) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend4](#friend4) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend5](#friend5) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend6](#friend6) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend7](#friend7) | smallint | unsigned |  | NO | 0 |  |  |
| [Friend8](#friend8) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Faction
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### FactionGroup
*- no description -*
&nbsp;

### FriendGroup
*- no description -*
&nbsp;

### EnemyGroup
*- no description -*
&nbsp;

### Enemies1
*- no description -*
&nbsp;

### Enemies2
*- no description -*
&nbsp;

### Enemies3
*- no description -*
&nbsp;

### Enemies4
*- no description -*
&nbsp;

### Enemies5
*- no description -*
&nbsp;

### Enemies6
*- no description -*
&nbsp;

### Enemies7
*- no description -*
&nbsp;

### Enemies8
*- no description -*
&nbsp;

### Friend1
*- no description -*
&nbsp;

### Friend2
*- no description -*
&nbsp;

### Friend3
*- no description -*
&nbsp;

### Friend4
*- no description -*
&nbsp;

### Friend5
*- no description -*
&nbsp;

### Friend6
*- no description -*
&nbsp;

### Friend7
*- no description -*
&nbsp;

### Friend8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'faction_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/friendship_rep_reaction" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'friendship_rep_reaction'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
