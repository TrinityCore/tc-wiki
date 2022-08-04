---
title: spawn_group
description: 
published: true
date: 2022-08-04T02:28:07.839Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:35.136Z
---

<a href="https://trinitycore.info/en/database/master/world/smart_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'smart_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [groupId](#groupid) | int | unsigned | PRI | NO |  |  |  |
| [spawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### groupId
Group ID for the group. It must match a group already existing in the [spawn_group_template](/en/database/master/world/spawn_group_template) table.
&nbsp;

### spawnType
| Spawn Type | Description      |
| ---------- | ---------------- |
|          0 | For creatures    |
|          1 | For game gbjects |
&nbsp;

### spawnId
Spawn ID/GUID of the creature/game object that should be included in the group. The GUID must exist in the [creature](/en/database/master/world/creature) or [gameobject](/en/database/master/world/gameobject) tables respectively.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/smart_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'smart_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spawn_group_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

