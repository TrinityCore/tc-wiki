---
title: gameobject_overrides
description: 
published: true
date: 2022-11-21T21:05:26.215Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:46.100Z
---

<a href="https://trinitycore.info/en/database/master/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spawnId](#spawnid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### spawnId
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

### faction
[FactionTemplate ID](https://wow.tools/dbc/?dbc=factiontemplate)
Replaces faction from [gameobject_template_addon.faction](../world/gameobject_template_addon#faction) if set.
&nbsp;

### flags
Replaces flags from [gameobject_template_addon.flags](../world/gameobject_template_addon#flags) if set.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | GO_FLAG_IN_USE | Gameobject in use - Disables interaction while being animated |
| 2 | 0x00000002 | GO_FLAG_LOCKED | Makes the Gameobject Locked. Requires a key, spell, or event to be opened. "Locked" appears in tooltip |
| 4 | 0x00000004 | GO_FLAG_INTERACT_COND | Untargetable, cannot interact (condition to interact - requires GO_DYNFLAG_LO_ACTIVATE to enable interaction clientside) |
| 8 | 0x00000008 | GO_FLAG_TRANSPORT | Gameobject can transport (boat, elevator, car) |
| 16 | 0x00000010 | GO_FLAG_NOT_SELECTABLE | Not selectable (Not even in GM-mode) |
| 32 | 0x00000020 | GO_FLAG_NODESPAWN | Never despawns. Typical for gameobjects with on/off state (doors for example) |
| 64 | 0x00000040 | GO_FLAG_AI_OBSTACLE | makes the client register the object in something called AIObstacleMgr, unknown what it does |
| 128 | 0x00000080 | GO_FLAG_FREEZE_ANIMATION |  |
| 512 | 0x00000200 | GO_FLAG_DAMAGED | Gameobject has been siege damaged |
| 1024 | 0x00000400 | GO_FLAG_DESTROYED | Gameobject has been destroyed |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

