---
title: linked_respawn
description: 
published: true
date: 2023-07-11T17:37:34.787Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:23.351Z
---

<a href="https://trinitycore.info/en/database/335/world/lfg_dungeon_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_dungeon_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/mail_level_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_level_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Deprecated: This table has been replaced by [spawn groups](../world/spawn_group_template).
{.is-warning}

This table links trash mobs to bosses so that if you kill the boss, the trash does not respawn before the instance is reset.
Gameobjects can be linked too!

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  | dependent creature |
| [linkedGuid](#linkedguid) | int | unsigned |  | NO |  |  | master creature |
| [linkType](#linktype) | tinyint | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
This is the guid of the [creature](../world/creature#guid) or [gameobject](../world/gameobject#guid) you want to link.
&nbsp;

### linkedGuid
This is the guid of the [creature](../world/creature#guid) or [gameobject](../world/gameobject#guid) (boss most likely) that you want to link to.
&nbsp;

### linkType
| Value | Dependent | Master |
|-------|-----------|--------|
| 0 | creature | creature |
| 1 | creature | gameobject |
| 2 | gameobject | gameobject |
| 3 | gameobject | creature |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/lfg_dungeon_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_dungeon_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/mail_level_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_level_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
