---
title: instance_encounters
description:
published: true
date: 2023-07-10T22:50:24.418Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:53.023Z
---

<a href="https://trinitycore.info/en/database/335/world/holiday_dates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'holiday_dates'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_spawn_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_spawn_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Definitions of instance encounters. Used by the LFG system.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO |  |  | Unique entry from [DungeonEncounter](/files/DBC/335/dungeonencounter) |
| [creditType](#credittype) | tinyint | unsigned |  | NO | 0 |  |  |
| [creditEntry](#creditentry) | int | unsigned |  | NO | 0 |  |  |
| [lastEncounterDungeon](#lastencounterdungeon) | smallint | unsigned |  | NO | 0 |  | If not 0, [LfgDungeon ID](/files/DBC/335/lfgdungeons#id) entry for the instance it is last encounter in |
| [comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### entry
Unique [DungeonEncounter ID](/files/DBC/335/dungeonencounter#id)
&nbsp;

### creditType
from [`enum EncounterCreditType`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game//Globals/ObjectMgr.h)
* 0: ENCOUNTER_CREDIT_KILL_CREATURE
* 1: ENCOUNTER_CREDIT_CAST_SPELL
&nbsp;

### creditEntry
* **creditType** = 0: this field is a [creature entry](../world/creature_template#entry).
* **creditType** = 1: this field is a [Spell ID](/files/DBC/335/spell#id).

Casting the spell or killing the creature will mark the encounter as completed.
&nbsp;

### lastEncounterDungeon
Reference to [LfgDungeon ID](/files/DBC/335/lfgdungeons#id) for the instance which this encounter is the last of. If 0, encounter is not the final one.
&nbsp;

### comment
Instance encounter comment for easy identification. Encounter name used only.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/holiday_dates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'holiday_dates'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_spawn_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_spawn_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
