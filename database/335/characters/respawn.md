---
title: respawn
description:
published: true
date: 2023-07-31T22:00:52.925Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:17.522Z
---

<a href="https://trinitycore.info/en/database/335/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reserved_name'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/updates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> The content of this table holds the respawn data of creatures and gameobjects, even if the server crashes or is shut down manually.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [type](#type) | smallint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | int | unsigned | PRI | NO |  |  |  |
| [respawnTime](#respawntime) | bigint | unsigned |  | NO |  |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO |  |  |  |
| [instanceId](#instanceid) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### type
`enum SpawnObjectType`
| ID | Name |
|----|------|
| 0 | SPAWN_TYPE_CREATURE |
| 1 | SPAWN_TYPE_GAMEOBJECT |
{.dense}

&nbsp;

### spawnId
* **type** = 0: [creature guid](../world/creature#guid)
* **type** = 1: [gameobject guid](../world/gameobject#guid)
&nbsp;

### respawnTime
Unix timestamp when the entity should be respawned.
&nbsp;

### mapId
[Map ID](/files/DBC/335/map#id) where the entity should be spawned.
&nbsp;

### instanceId
If the entity was killed/destroyed in an instance, this field holds the [instance id](../characters/instance#id) where this entity should be respawned.

Each instance is different depending on the group so this field is vital in keeping track of which creatures/gameobjects should be respawned for which players at what time.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/reserved_name" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'reserved_name'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/updates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
