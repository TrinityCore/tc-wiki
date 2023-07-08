---
title: creature_template_movement
description: 
published: true
date: 2023-07-08T17:34:24.285Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:58.727Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_resistance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_resistance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the description of creatures movements, where the creature can move and attack.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureId](#creatureid) | int | unsigned | PRI | NO | 0 |  |  |
| [Ground](#ground) | tinyint | unsigned |  | YES | NULL |  |  |
| [Swim](#swim) | tinyint | unsigned |  | YES | NULL |  |  |
| [Flight](#flight) | tinyint | unsigned |  | YES | NULL |  |  |
| [Rooted](#rooted) | tinyint | unsigned |  | YES | NULL |  |  |
| [Chase](#chase) | tinyint | unsigned |  | YES | NULL |  |  |
| [Random](#random) | tinyint | unsigned |  | YES | NULL |  |  |
| [InteractionPauseTimer](#interactionpausetimer) | int | unsigned |  | YES | NULL |  | Time (in milliseconds) during which creature will not move after interaction with player |
&nbsp;
## Description of fields

### CreatureId
references [creature_template.entry](../world/creature_template#entry)
&nbsp;

### Ground
* 0: None
* 1: Run
* 2: Hover
&nbsp;

### Swim
* 0: None
* 1: Swim
&nbsp;

### Flight
* 0: None
* 1: DisableGravity
* 2: CanFly (Deprecated: Use DisableGravity instead)
&nbsp;

### Rooted
* 0: None
* 1: Rooted
&nbsp;

### Chase
* 0: Run
* 1: CanWalk
* 2: AlwaysWalk
&nbsp;

### Random
* 0: Walk
* 1: CanRun
* 2: AlwaysRun
&nbsp;

### InteractionPauseTimer
Time (in milliseconds) during which the creature will not move after interaction with player.
&nbsp;

> Note:
> \- Rooted creature that doesn't fall once dead must use `Ground=1`, `Swim=0`, `Flight=0`, `Rooted=1` (`Swim=1` if above water)
> \- Rooted creature that falls once dead must use `Ground=0`, `Swim=0`, `Flight=1`, `Rooted=1`
{.is-info}

> Note: You can override this values for a specific spawn in the table: [creature_movement_override](../world/creature_movement_override)
{.is-info}

<a href="https://trinitycore.info/en/database/335/world/creature_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_resistance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_resistance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
