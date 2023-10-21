---
title: playercreateinfo
description: 
published: true
date: 2022-11-21T21:07:20.336Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:20.895Z
---

<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_reward_item_choice" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_response_reward_item_choice'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playercreateinfo_action'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race](#race) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [npe_map](#npe_map) | int | unsigned |  | YES | NULL |  |  |
| [npe_position_x](#npe_position_x) | float |  |  | YES | NULL |  |  |
| [npe_position_y](#npe_position_y) | float |  |  | YES | NULL |  |  |
| [npe_position_z](#npe_position_z) | float |  |  | YES | NULL |  |  |
| [npe_orientation](#npe_orientation) | float |  |  | YES | NULL |  |  |
| [npe_transport_guid](#npe_transport_guid) | bigint | unsigned |  | YES | NULL |  |  |
| [intro_movie_id](#intro_movie_id) | int | unsigned |  | YES | NULL |  |  |
| [intro_scene_id](#intro_scene_id) | int | unsigned |  | YES | NULL |  |  |
| [npe_intro_scene_id](#npe_intro_scene_id) | int | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### race
The character's [ChrRace ID](https://wow.tools/dbc/?dbc=chrraces)
| ID | Name      |
|----|-----------|
|  1 | Human     |
|  2 | Orc       |
|  3 | Dwarf     |
|  4 | Night Elf |
|  5 | Undead    |
|  6 | Tauren    |
|  7 | Gnome     |
|  8 | Troll     |
| 10 | Blood Elf |
| 11 | Draenei   |
{.dense}

&nbsp;

### class
The character's [ChrClass ID](https://wow.tools/dbc/?dbc=chrclasses)
| ID | Name         |
|----|--------------|
|  1 | Warrior      |
|  2 | Paladin      |
|  3 | Hunter       |
|  4 | Rogue        |
|  5 | Priest       |
|  6 | Death Knight |
|  7 | Shaman       |
|  8 | Mage         |
|  9 | Warlock      |
| 11 | Druid        |
{.dense}

&nbsp;

### map
The [Map ID](https://wow.tools/dbc/?dbc=map) the player will start on. It can not be instanceable.
&nbsp;

### position_x
The X position.
&nbsp;

### position_y
The Y position.
&nbsp;

### position_z
The Z position.
&nbsp;

### orientation
The direction the new character will be facing.
|--|--|--|
| North: | `0 / 2p` | 6.28319 |
| West: | `0.5p` | 1.57080 |
| South: | `p` | 3.14159 |
| East: | `1.5p` | 4.71239 |
{.dense}
&nbsp;

### npe_map
*- no description -*
&nbsp;

### npe_position_x
*- no description -*
&nbsp;

### npe_position_y
*- no description -*
&nbsp;

### npe_position_z
*- no description -*
&nbsp;

### npe_orientation
*- no description -*
&nbsp;

### npe_transport_guid
*- no description -*
&nbsp;

### intro_movie_id
*- no description -*
&nbsp;

### intro_scene_id
*- no description -*
&nbsp;

### npe_intro_scene_id
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_reward_item_choice" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_response_reward_item_choice'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playercreateinfo_action'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

