---
title: gameobject_addon
description: 
published: true
date: 2022-11-21T21:05:22.258Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:40.941Z
---

<a href="https://trinitycore.info/en/database/master/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [parent_rotation0](#parent_rotation0) | float |  |  | NO | 0 |  |  |
| [parent_rotation1](#parent_rotation1) | float |  |  | NO | 0 |  |  |
| [parent_rotation2](#parent_rotation2) | float |  |  | NO | 0 |  |  |
| [parent_rotation3](#parent_rotation3) | float |  |  | NO | 1 |  |  |
| [invisibilityType](#invisibilitytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [invisibilityValue](#invisibilityvalue) | int | unsigned |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int | unsigned |  | NO | 0 |  |  |
| [AIAnimKitID](#aianimkitid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

### parent_rotation0
parentRotation.x
-1 <= x <= 1
&nbsp;

### parent_rotation1
parentRotation.y
-1 <= y <= 1
&nbsp;

### parent_rotation2
parentRotation.z
-1 <= z <= 1
&nbsp;

### parent_rotation3
parentRotation.w
-1 <= w <= 1
&nbsp;

### invisibilityType
from [`enum InvisibilityType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h)
| ID | Name |
|----|------|
| 0 | INVISIBILITY_GENERAL |
| 3 | INVISIBILITY_TRAP |
| 6 | INVISIBILITY_DRUNK |
{.dense}

&nbsp;

### invisibilityValue
The larger the value the harder it is to detect this gameobject.
&nbsp;

### WorldEffectID
*- no description -*
&nbsp;

### AIAnimKitID
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

