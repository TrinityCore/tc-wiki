---
title: instance_spawn_groups
description:
published: true
date: 2023-07-10T23:36:33.215Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:55.707Z
---

<a href="https://trinitycore.info/en/database/335/world/instance_encounters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_encounters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table manages spawn groups in instances based on boss state.

A spawn group is activated if any of its FLAG_ACTIVATE_SPAWN conditions are met, unless any of its FLAG_BLOCK_SPAWN conditions are met - this allows for some neat complex management if necessary.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [instanceMapId](#instancemapid) | smallint | unsigned | PRI | NO |  |  |  |
| [bossStateId](#bossstateid) | tinyint | unsigned | PRI | NO |  |  |  |
| [bossStates](#bossstates) | tinyint | unsigned | PRI | NO |  |  |  |
| [spawnGroupId](#spawngroupid) | int | unsigned | PRI | NO |  |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### instanceMapId
[Map ID](/files/DBC/335/map#id) the boss is on.
&nbsp;

### bossStateId
Data index of the boss set in its instance script header file.
&nbsp;

### bossStates
bitmask, `1 << state` for [`enum EncounterState`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Instances/InstanceScript.h) values
| ID | state |
|----|------|
| 0 | NOT_STARTED |
| 1 | IN_PROGRESS |
| 2 | FAIL |
| 3 | DONE |
| 4 | SPECIAL |
{.dense}

&nbsp;

### spawnGroupId
groupId from [spawn_group_template](../world/spawn_group_template#groupid)
&nbsp;

### flags
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | FLAG_ACTIVATE_SPAWN |  |
| 2 | 0x02 | FLAG_BLOCK_SPAWN |  |
| 4 | 0x04 | FLAG_ALLIANCE_ONLY |  |
| 8 | 0x08 | FLAG_HORDE_ONLY |  |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/instance_encounters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance_encounters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
