---
title: linked_respawn
description: 
published: true
date: 2022-11-21T21:06:14.226Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:53.049Z
---

<a href="https://trinitycore.info/en/database/master/world/lfg_dungeon_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_dungeon_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/mail_level_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_level_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [linkedGuid](#linkedguid) | bigint | unsigned |  | NO | 0 |  |  |
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

<a href="https://trinitycore.info/en/database/master/world/lfg_dungeon_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_dungeon_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/mail_level_reward" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_level_reward'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

