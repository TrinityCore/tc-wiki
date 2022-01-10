---
title: creature_addon
description: 
published: true
date: 2022-01-10T03:25:05.302Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:44.302Z
---

<a href="https://trinitycore.info/en/database/master/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

The creature_addon and creature_template_addon tables define different things that are applied on creatures when they are loaded. These "different things" can be for example to have the creature be mounted, to have it emote something, to have it display an aura effect, etc. Through the use of the fields in this table, many things can be changed about the outward visual appearance of the creature. The creature_template_addon table affects all creatures with that creature template ID while the creature_addon table affects individually spawned creatures (so that two creatures using the same template can look different).

> A creature_addon record will override a creature_template_addon record should they overlap on the same creature.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [path_id](#path_id) | int(10) | unsigned |  | NO | 0 |  |  |
| [mount](#mount) | int(10) | unsigned |  | NO | 0 |  |  |
| [bytes1](#bytes1) | int(10) | unsigned |  | NO | 0 |  |  |
| [bytes2](#bytes2) | int(10) | unsigned |  | NO | 1 |  |  |
| [emote](#emote) | int(10) | unsigned |  | NO | 0 |  |  |
| [aiAnimKit](#aianimkit) | smallint(6) | signed |  | NO | 0 |  |  |
| [movementAnimKit](#movementanimkit) | smallint(6) | signed |  | NO | 0 |  |  |
| [meleeAnimKit](#meleeanimkit) | smallint(6) | signed |  | NO | 0 |  |  |
| [visibilityDistanceType](#visibilitydistancetype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [auras](#auras) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### path_id
*- no description -*
&nbsp;

### mount
*- no description -*
&nbsp;

### bytes1
*- no description -*
&nbsp;

### bytes2
*- no description -*
&nbsp;

### emote
*- no description -*
&nbsp;

### aiAnimKit
*- no description -*
&nbsp;

### movementAnimKit
*- no description -*
&nbsp;

### meleeAnimKit
*- no description -*
&nbsp;

### visibilityDistanceType
*- no description -*
&nbsp;

### auras
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

