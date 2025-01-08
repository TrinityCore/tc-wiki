---
title: spawn_tracking_state
description: 
published: true
date: 2025-01-08T23:21:39.303Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T23:21:39.303Z
---

<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_quest_objective" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_tracking_quest_objective'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_tracking_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
| [State](#state) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Visible](#visible) | tinyint | unsigned |  | NO | 1 |  |  |
| [StateSpellVisualId](#statespellvisualid) | int | unsigned |  | NO |  |  |  |
| [StateAnimId](#stateanimid) | int | unsigned |  | NO |  |  |  |
| [StateAnimKitId](#stateanimkitid) | int | unsigned |  | NO |  |  |  |
| [StateWorldEffects](#stateworldeffects) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SpawnType
| Spawn Type | Description      |
| ---------- | ---------------- |
|          0 | For creatures    |
|          1 | For gameobjects  |
<!-- {table:.dense} -->
&nbsp;

### SpawnId
Spawn ID/GUID of the creature/game object that should be included in the group. The GUID must exist in the [creature](/en/database/master/world/creature) or [gameobject](/en/database/master/world/gameobject) tables respectively.
&nbsp;

### State
Quest objective ([spawn_tracking.QuestObjectiveId](/en/database/master/world/spawn_tracking#questobjectiveid)) status.
| Value      | Description                                            |
| ---------- | ------------------------------------------------------ |
|          0 | None (no quest)                                        |
|          1 | Active (active quest objective)                        |
|          2 | Complete (quest objective completed or quest rewarded) |
<!-- {table:.dense} -->
&nbsp;

### Visible
| Value      | Description      |
| ---------- | ---------------- |
|          0 | Invisible        |
|          1 | Visible          |
<!-- {table:.dense} -->
&nbsp;

### StateSpellVisualId
SpellVisual ID from SpellVisual.db2 that is applied on creature/gameobject.
&nbsp;

### StateAnimId
Anim ID from AnimationData.db2 that is applied on creature/gameobject.
&nbsp;

### StateAnimKitId
AnimKit ID from AnimKit.db2 that is applied on creature/gameobject.
&nbsp;

### StateWorldEffects
This field controls any world effect (WorldEffect.db2) to be applied on the creature/gameobject. To apply multiple world effects, you can add more world effect ids, separating each id by a space.

<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_quest_objective" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_tracking_quest_objective'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_tracking_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_tracking_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

