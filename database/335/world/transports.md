---
title: transports
description:
published: true
date: 2023-07-23T18:19:18.153Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:18.608Z
---

<a href="https://trinitycore.info/en/database/335/world/trainer_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trinity_string" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trinity_string'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains all GAMEOBJECT_TYPE_MO_TRANSPORT (15) (Boats and Zeppelins).

All other transport types have their frame time read from [TransportAnimation](/files/DBC/335/transportanimation).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  | auto_increment |  |
| [entry](#entry) | mediumint | unsigned | UNI | NO | 0 |  |  |
| [name](#name) | text |  |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guid
Unique identifier for transport. When adding a new one, simply use the `max(guid) + 1`.
&nbsp;

### entry
This is the [gameobject entry](../world/gameobject_template#entry) to be used for this transport. It must be of type GAMEOBJECT_TYPE_MO_TRANSPORT (15).
&nbsp;

### name
This is an arbitrary name that is only used to describe this transport entry.
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
&nbsp;

## Appendix
Static Passengers (NPCs):

Transports will load static passengers when:
* transport moves from inactive to active grid
* the grid that transport is currently in becomes active
&nbsp;

It will unload static passengers when:
* transport moves from active to inactive grid
* the grid that transport is currently in unloads
&nbsp;

The loading process will get the map from [gameobject_template.data6](../world/gameobject_template#type) (mapID), and then creates all creatures and gameobjects that are in the same map.

Creatures and gameobjects spawn points will be used as relative to the transport.

> Note: Transports have their own map: https://wow.tools/dbc/?dbc=map&build=3.3.5.12340#page=1&colFilter[1]=Transport
{.is-info}

<a href="https://trinitycore.info/en/database/335/world/trainer_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trinity_string" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trinity_string'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
