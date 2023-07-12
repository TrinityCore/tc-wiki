---
title: pool_members
description: 
published: true
date: 2023-07-12T10:35:28.242Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:50.183Z
---

<a href="https://trinitycore.info/en/database/335/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'points_of_interest_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pool_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds the contents of pools created in [pool_template](../world/pool_template).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [type](#type) | smallint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | int | unsigned | PRI | NO |  |  |  |
| [poolSpawnId](#poolspawnid) | int | unsigned |  | NO |  |  |  |
| [chance](#chance) | float |  |  | NO |  |  |  |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### type
* 0: Creature
* 1: GameObject
* 2: Pool
&nbsp;

### spawnId
* **type** = 0: [creature guid](../world/creature#guid)
* **type** = 1: [gameobject guid](../world/gameobject#guid)
* **type** = 2: [pool entry](../world/pool_template#entry)
&nbsp;

### poolSpawnId
references [pool_template.entry](../world/pool_template#entry)
&nbsp;

### chance
The explicit percentage chance that this entity will be spawned.

If the pool spawns just one entity (max limit = 1 in the respective pool_template), the core selects the entity to be spawned in a two-step process: First, only the explicitly-chanced (chance > 0) entity of the pool are rolled. If this roll does not produce any entity, all the entity without explicit chance (chance = 0) are rolled with equal chance.
If the pool spawns more than one entity, the chance is ignored and all the creatures in the pool are rolled in one step with equal chance.

In case the pool spawns just one entity and all the entity have a nonzero chance, the sum of the chances for all the entity must equal to 100, otherwise the pool won't be spawned.
&nbsp;

### description
This field usually names the creature/gameobject corresponding to the guid and mentions which spawn point it is.
Example:
* Snarlflare (14272) - Spawn 1
* Spawn Point 4 - Tin Vein
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'points_of_interest_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pool_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
