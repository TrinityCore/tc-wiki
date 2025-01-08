---
title: spawn_tracking
description: 
published: true
date: 2025-01-08T22:51:44.255Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T22:45:39.951Z
---

<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_quest_objective" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_tracking_quest_objective'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnTrackingId](#spawntrackingid) | int | unsigned | PRI | NO |  |  |  |
| [SpawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
| [QuestObjectiveId](#questobjectiveid) | int | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### SpawnTrackingId
SpawnTracking ID for the spawn. It must match a SpawnTracking already existing in the [spawn_tracking_template](/en/database/master/world/spawn_tracking_template) table.
&nbsp;

### SpawnType
| Spawn Type | Description      |
| ---------- | ---------------- |
|          0 | For creatures    |
|          1 | For gameobjects  |
<!-- {table:.dense} -->
&nbsp;

### SpawnId
Spawn ID/GUID of the creature/game object that should be included in the group. The GUID must exist in the [creature](/en/database/master/world/creature) or [gameobject](/en/database/master/world/gameobject) tables respectively.

> Spawn must use the same Phase, PhaseGroup and PhaseUseFlags as the SpawnTracking template.
{.is-info}

### QuestObjectiveId
An existing [quest_objectives.Id](/en/database/master/world/quest_objectives#id).

<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_quest_objective" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_tracking_quest_objective'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

