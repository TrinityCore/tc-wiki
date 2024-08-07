---
title: transports
description: 
published: true
date: 2024-08-06T23:25:49.292Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:42.553Z
---

<a href="https://trinitycore.info/en/database/master/world/trainer_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/trinity_string" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trinity_string'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int | unsigned | UNI | NO | 0 |  |  |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
| [phaseUseFlags](#phaseuseflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [phaseid](#phaseid) | int | signed |  | NO | 0 |  |  |
| [phasegroup](#phasegroup) | int | signed |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guid
Unique identifier for transport. When adding a new one, simply use the max(guid)+1. 
&nbsp;

### entry
This is entry to be used for this transport from [`gameobject_template.entry`](/database/master/world/gameobject_template#entry) It must be a type 15 (MOTransport) game object.
&nbsp;

### name <!-- {#name-alt} -->
This is an arbitrary name that is only used to describe this transport entry.
&nbsp;

### phaseUseFlags
| Name | Value |
| --- | :---: |
| PHASE_USE_FLAGS_NONE            | 0x0 |
| PHASE_USE_FLAGS_ALWAYS_VISIBLE  | 0x1 |
| PHASE_USE_FLAGS_INVERSE         | 0x2 |
&nbsp;

### phaseid
Determines in which phase the transport is in.
Available phases can be found in Phase.db2
&nbsp;

### phasegroup
Determines in which PhaseGroup the transport is in.
A PhaseGroup sets a transport in multiple phases at once.
PhaseGroups can contain more Phases than you actually need.
Available PhaseGroups can be found in PhaseGroup.db2
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
&nbsp;

## Appendix: Static Passengers (npcs)
Transports will load static passengers when:
```
    transport moves from inactive to active grid
    the grid that transport is currently in becomes active
```
It will unload static passengers when:

```
    transport moves from active to inactive grid
    the grid that transport is currently in unloads
```
The loading process will get the map from gameobject_template.data6 (SpawnMap), and then creates all creatures and gameobjects that are in the same map.

Creatures and gameobjects spawn points will be used as relative to the transport.

<a href="https://trinitycore.info/en/database/master/world/trainer_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/trinity_string" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trinity_string'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
