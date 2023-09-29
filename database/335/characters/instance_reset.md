---
title: instance_reset
description:
published: true
date: 2023-07-31T16:03:43.712Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:24.380Z
---

<a href="https://trinitycore.info/en/database/335/characters/instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Date and time when heroic and raid instances will be reset (i.e. instances which have a fixed reset interval, which is independent of the time, when some player(s) entered the instance).
>
>If worldserver.conf [`Rate.InstanceResetTime`](https://trinitycore.info/en/files/configuration/home) is changed, TRUNCATE this table and restart the server in order to repopulate it with the updated "resettime".
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [mapid](#mapid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [difficulty](#difficulty) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [resettime](#resettime) | bigint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### mapid
[Map ID](/files/DBC/335/map#id)
&nbsp;

### difficulty
| ID | Name |
|----|------|
| 0 | RAID_DIFFICULTY_10MAN_NORMAL / DUNGEON_DIFFICULTY_NORMAL |
| 1 | RAID_DIFFICULTY_25MAN_NORMAL / DUNGEON_DIFFICULTY_HEROIC |
| 2 | RAID_DIFFICULTY_10MAN_HEROIC |
| 3 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### resettime
Unix timestamp when this instance (map) will be reset.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/item_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
