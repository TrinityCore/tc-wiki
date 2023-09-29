---
title: creature_movement_info
description:
published: true
date: 2023-07-08T17:12:07.302Z
tags: database, world, 335
editor: markdown
dateCreated: 2022-04-17T21:08:06.224Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_model_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_movement_override'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Supplemental data to [CreatureMovementInfo](/files/DBC/335/creaturemovementinfo) (see [#25964](https://github.com/TrinityCore/TrinityCore/discussions/25964))

> Note: This table is not in use.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MovementID](#movementid) | int | unsigned | PRI | NO | 0 |  | creature_template.movementId value |
| [WalkSpeed](#walkspeed) | float |  |  | YES | NULL |  |  |
| [RunSpeed](#runspeed) | float |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### MovementID
references [creature_template.movementId](../world/creature_template#movementid) / [CreatureMovementInfo ID](/files/DBC/335/creaturemovementinfo#id)
&nbsp;

### WalkSpeed
generic value: `2.5`
&nbsp;

### RunSpeed
generic value: `8.0`
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_model_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_movement_override'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
