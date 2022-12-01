---
title: disables
description: 
published: true
date: 2022-12-01T08:19:09.188Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:41.993Z
---

<a href="https://trinitycore.info/en/database/master/world/criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'criteria_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/disenchant_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'disenchant_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [sourceType](#sourcetype) | int | unsigned | PRI | NO |  |  |  |
| [entry](#entry) | int | unsigned | PRI | NO |  |  |  |
| [flags](#flags) | smallint | signed |  | NO |  |  |  |
| [params_0](#params_0) | varchar(255) |  |  | NO | '' |  |  |
| [params_1](#params_1) | varchar(255) |  |  | NO | '' |  |  |
| [comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### sourceType
| Value | Type |
| --- | --- |
| 0 | DISABLE_TYPE_SPELL |
| 1 | DISABLE_TYPE_QUEST |
| 2 | DISABLE_TYPE_MAP |
| 3 | DISABLE_TYPE_BATTLEGROUND |
| 4 | DISABLE_TYPE_ACHIEVEMENT_CRITERIA |
| 5 | DISABLE_TYPE_OUTDOORPVP |
| 6 | DISABLE_TYPE_VMAP |
| 7 | DISABLE_TYPE_MMAP |
| 8	| DISABLE_TYPE_LFG_MAP |
&nbsp;

### entry
Entry of Spell/Quest/Map/BG/Achievement/Map.
&nbsp;

### flags
> flags are dependent on sourceType!
{.is-info}

### Linux {.tabset}
#### DISABLE_TYPE_SPELL
> Specifies who the spell is disabled for.
{.is-info}

| Value | Type |
| --- | --- |
| 0 | Spell enabled |
| 1 | Spell disabled for players |
| 2 | Spell disabled for creatures |
| 4 | Spell disabled for pets |
| 8 | Spell completely disabled (used for no logner existing spells in DBCs) |
| 16 | Spell disabled for MapId |
| 32 | Spell disabled for AreaId |
| 64 | Line of Sight (LOS) is disabled for this spell (replaces "vmap.ignoreSpellIds" config option) |
| 128	| Spell disabled for game objects |
| 256	| Spell disabled in arena |
| 512	| Spell disabled in battlegrounds |
&nbsp;

#### DISABLE_TYPE_MAP
> Specifies what type of map is disabled (5man/10man/heroic/etc).
{.is-info}

| Value | Type |
| --- | --- |
| 1 | DUNGEON_STATUSFLAG_NORMAL OR RAID_STATUSFLAG_10MAN_NORMAL |
| 2 | DUNGEON_STATUSFLAG_HEROIC OR RAID_STATUSFLAG_25MAN_NORMAL |
| 4 | RAID_STATUSFLAG_10MAN_HEROIC |
| 8 | RAID_STATUSFLAG_25MAN_HEROIC |
&nbsp;

#### DISABLE_TYPE_VMAP
> Specifies on which map should be vMap disabled
{.is-info}

| Value | Type |
| --- | --- |
| 1 | VMAP_DISABLE_AREAFLAG |
| 2 | VMAP_DISABLE_HEIGHT |
| 4 | VMAP_DISABLE_LOS |
| 8 | VMAP_LIQUIDSTATUS |
&nbsp;

### params_0
MapId if **DISABLE_TYPE_SPELL** used, 0 for all maps.
&nbsp;

### params_1
AreaId if **DISABLE_TYPE_SPELL** used, 0 for all areas.
&nbsp;

### comment
A comment as to why the something was disabled, or any other text that you want.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'criteria_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/disenchant_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'disenchant_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
