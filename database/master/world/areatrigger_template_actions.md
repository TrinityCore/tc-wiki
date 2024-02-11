---
title: areatrigger_template_actions
description: This table contains the description of areatrigger actions.
published: true
date: 2024-02-11T20:06:06.496Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:02.076Z
---

<a href="https://trinitycore.info/en/database/master/world/areatrigger_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/battle_pet_breeds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battle_pet_breeds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AreaTriggerId](#areatriggerid) | int | unsigned | PRI | NO |  |  |  |
| [IsCustom](#iscustom) | tinyint | unsigned | PRI | NO |  |  |  |
| [ActionType](#actiontype) | int | unsigned |  | NO |  |  |  |
| [ActionParam](#actionparam) | int | unsigned |  | NO |  |  |  |
| [TargetType](#targettype) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### AreaTriggerId
ID from [areatrigger_template](/database/master/world/areatrigger_template).
&nbsp;

### IsCustom
*- no description -*
&nbsp;

### ActionType
| ID | Name |
| --- | --- |
| 0 | AREATRIGGER_ACTION_CAST |
| 1 | AREATRIGGER_ACTION_ADDAURA |
| 2 | AREATRIGGER_ACTION_TELEPORT |
&nbsp;

### ActionParam
Depending on the ActionType the ActionParam fullfills a different purpose.

| ActionType | ActionParam |
| --- | --- |
| AREATRIGGER_ACTION_CAST | SpellID |
| AREATRIGGER_ACTION_ADDAURA | SpellID |
| AREATRIGGER_ACTION_TELEPORT | [world_safe_locs.id](/database/master/world/world_safe_locs) |
&nbsp;

### TargetType
| ID | Name |
| --- | --- |
| 0 | AREATRIGGER_ACTION_USER_ANY |
| 1 | AREATRIGGER_ACTION_USER_FRIEND |
| 2 | AREATRIGGER_ACTION_USER_ENEMY |
| 3 | AREATRIGGER_ACTION_USER_RAID |
| 4 | AREATRIGGER_ACTION_USER_PARTY |
| 5 | AREATRIGGER_ACTION_USER_CASTER |
| 6 | AREATRIGGER_ACTION_USER_MAX |
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/areatrigger_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/battle_pet_breeds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battle_pet_breeds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
