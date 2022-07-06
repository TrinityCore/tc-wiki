---
title: creature_summoned_data
description: 
published: true
date: 2022-07-06T11:20:00.846Z
tags: 
editor: markdown
dateCreated: 2022-07-03T15:50:59.544Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_summon_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#CreatureID) | int | unsigned | PRI | NO |  |  |  |
| [CreatureIDVisibleToSummoner](#CreatureIDVisibleToSummoner) | int | unsigned |  | YES |  |  |  |
| [GroundMountDisplayID](#GroundMountDisplayID) | int | unsigned |  | YES |  |  | NYI |
| [FlyingMountDisplayID](#FlyingMountDisplayID) | int | unsigned |  | YES |  |  | NYI |
| [StealthSpellID](#StealthSpellID) | int | unsigned |  | YES |  |  | NYI |
&nbsp;
## Description of fields

### CreatureID
This is the CreatureID seen by anyone but the summoner.
&nbsp;

### CreatureIDVisibleToSummoner
This is the CreatureID seen by the summoner but everyone else.
&nbsp;

### GroundMountDisplayID
This is the ground mount displayID that the creature will use if the summoner mounts up and uses non-flying speed while mounted. In other words, this will be the default choice until the player takes off if flying is available.
&nbsp;

### FlyingMountDisplayID
This is the flight mount displayID that the creature will use if the summoner mounts up and uses flying speed while mounted. In other words, this will be the the default choice until the player lands.
&nbsp;

### StealthSpellID
This is the spellID that the summoned creature will use to get invisible or stealthy if the summoner uses any of those mechanics.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_summon_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
