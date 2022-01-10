---
title: creature_addon
description: 
published: true
date: 2022-01-10T03:29:44.440Z
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
For creature_addon, this field signifies a unique creature guid. It will affect just that creature whose GUID matches the one specified here.
For creature_template_addon, this field signifies the creature_template.entry. It will affect all spawned creatures using that template entry.
&nbsp;

### path_id
If a creature has waypoint pathed movement, this field hold the [waypoint_data.id](/en/database/master/world/waypoint_data#id) for the path the creature is to follow.
&nbsp;

### mount
The model ID of the mount to be used to make the creature appear mounted. The value here overrides the value for the creature's unit field UNIT_FIELD_MOUNTDISPLAYID.
&nbsp;

### bytes1
The value here overrides the value for the creature's unit field UNIT_FIELD_BYTES_1.

List of known values and what their visual effects on the creature

- 1 = Sitting
- 2 = Sit chair
- 3 = Sleep
- 4 = Sit low chair
- 5 = Sit medium chair
- 6 = Sit high chair
- 7 = Shows health bar as empty (combine with the state dead emote to make a creature look dead)
- 8 = Makes the mob kneel
- 9 = Submerges the creature below the ground
- 33554432 = Hover mode
- 50331648 = Hover mode 2
&nbsp;

### bytes2
The value here overrides the value for the creature's unit field UNIT_FIELD_BYTES_2.

NOTE: creatures always have melee weapon ready if any unless specified otherwise

List of few known values and what their visual effects on the creature

- 0 = STATE_UNARMED (not prepared weapon)
- 1 = STATE_MELEE (prepared melee weapon)
- 2 = STATE_RANGED (prepared ranged weapon)
&nbsp;

### emote
Emote ID that the creature should continually perform.

List of often used emote IDs and what they do can be found here.
&nbsp;

### aiAnimKit
AnimKit ID from AnimKit.db2 that is applied on creature when spawned.
&nbsp;

### movementAnimKit
AnimKit ID from AnimKit.db2 that is applied on creature when spawned.
&nbsp;

### meleeAnimKit
AnimKit ID from AnimKit.db2 that is applied on creature when spawned.
&nbsp;

### visibilityDistanceType
This field controls the visibility distance for creatures:

Normal = 0,  100.0f  // default visible distance, 100 yards on continents

Tiny = 1,  25.0f

Small = 2,  50.0f

Large = 3, 200.0f

Gigantic = 4, 400.0f

Infinite = 5, SIZE_OF_GRIDS // max distance for visible objects
&nbsp;

### auras
This field controls any auras to be applied on the creature (both in effect and visually). To apply multiple auras, you can add more aura entries, separating each entry by a space. Remember that if a spell applies multiple auras.

List of useful aura entries (examples):

- '16380' - Makes the creature invisible.
- '18950' - Makes the creature detect other invisible units (players or creatures).
- '16380 18950' - Both auras above
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

