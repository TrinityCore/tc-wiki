---
title: spawn_group_template
description: 
published: true
date: 2022-11-21T21:08:59.219Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:37.700Z
---

<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [groupId](#groupid) | int | unsigned | PRI | NO |  |  |  |
| [groupName](#groupname) | varchar(100) |  |  | NO |  |  |  |
| [groupFlags](#groupflags) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### groupId
Group ID for the group. It must be a unique number. **Groups 0-4 are reserved for system tasks**.
&nbsp;

### groupName
Descriptive name for the group.
&nbsp;

### groupFlags

| Flag                                         | Number | Description |
| -------------------------------------------- | ------ | ---------------- |
| SPAWNGROUP_FLAG_NONE                         |   0x00 | No flags applied |
| SPAWNGROUP_FLAG_SYSTEM                       |   0x01 | Group is a system group (applies to standard groups 0-4) |
| SPAWNGROUP_FLAG_COMPATIBILITY_MODE           |   0x02 | Group will contain legacy objects/creatures that don't work with dynamic spawn changes |
| SPAWNGROUP_FLAG_MANUAL_SPAWN                 |   0x04 | Group will not be spawned by core by default. Scripts can manually spawn/despawn these groups on demand. |
| SPAWNGROUP_FLAG_DYNAMIC_SPAWN_RATE           |   0x08 | Group will have dynamic spawn rates applied (by default quest interested creatures/gos and gather nodes use this) |
| SPAWNGROUP_FLAG_ESCORTQUESTNPC               |   0x10 | Group contains Escort quest NPCs. This further enhances Dynamic spawn to begin respawn time at the point a quest is taken and the escort begins |
| SPAWNGROUP_FLAG_DESPAWN_ON_CONDITION_FAILURE | 0x20 | Group despawns on condition failure |

<a href="https://trinitycore.info/en/database/master/world/spawn_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
