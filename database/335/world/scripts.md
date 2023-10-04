---
title: *_scripts
description:
published: true
date: 2023-07-09T16:57:16.125Z
tags:
editor: markdown
dateCreated: 2023-07-09T16:57:16.125Z
---

<a href="https://trinitycore.info/en/database/335/world/event_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'event_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Tables: \*_scripts
This table format is used for 3 different tables to control possible scripts activated by different actions:
* **[spell_scripts](../world/spell_scripts)**: Holds scripts that can be activated by spells with effect SPELL_EFFECT_SCRIPT_EFFECT (77) or SPELL_EFFECT_DUMMY (3).
* **[event_scripts](../world/event_scripts)**: Holds scripts activated whenever an event is activated, be it by an object or as the spell effect SPELL_EFFECT_SEND_EVENT (61).
* **[waypoint_scripts](../world/waypoint_scripts)**: Holds scripts used in the waypoint_data table.

> Note: An entry in this table may have more than one row as a script may do more than just one action. Also each action the script may make can have a separate delay attached to it. In that case, the core will activate the appropriate action after the correct delay.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | mediumint | unsigned |  | NO | 0 |  |  |
| [effIndex](#effindex) ^\[1]^ | tinyint | unsigned |  | NO | 0 |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [command](#command) | mediumint | unsigned |  | NO | 0 |  |  |
| [datalong](#datalong) | mediumint | unsigned |  | NO | 0 |  |  |
| [datalong2](#datalong2) | int | unsigned |  | NO | 0 |  |  |
| [dataint](#dataint) | int | signed |  | NO | 0 |  |  |
| [x](#x) | float |  |  | NO | 0 |  |  |
| [y](#y) | float |  |  | NO | 0 |  |  |
| [z](#z) | float |  |  | NO | 0 |  |  |
| [o](#o) | float |  |  | NO | 0 |  |  |
| [guid](#guid) ^\[2]^ | int | signed | PRI | NO | 0 |  | Acts as primary key and is set automatically using the GM command 'wp event add' |
| [Comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
^1^ present in spell_scripts table only.
^2^ present in waypoint_scripts table only.
&nbsp;
## Description of fields

### id
* `spell_scripts`: [Spell ID](/files/DBC/335/spell#id)
* `waypoint_scripts`: action ID from [waypoint_data](../world/waypoint_data#action)
* `event_scripts`: an event ID. There doesn't exist currently a full list of events. In any case, the event IDs are taken directly from gameobject WDB data or spell effect data. If both a gameobject and a spell activate the same event, the IDs will match.
&nbsp;

### effIndex
The effect index of the spell that this script is to be applied to.

> Note: only present in [spell_scripts](../world/spell_scripts)
{.is-info}

&nbsp;

### delay
Delay in seconds before this current step of the script activates. 0 = instant.
&nbsp;

### command
The type of action performed by the script after **delay** has passed. The value of this field affects what other fields also need to be set.
The following commands can be used:
| Value | Name | Comment |
|-------|------|---------|
| 0 | TALK | Creature say/whisper/yell/textemote. |
| 1 | EMOTE | Play emote on creature. |
| 2 | FIELD_SET | Change the value at an index for the player. |
| 3 | MOVE_TO | Relocate creature to a destination. |
| 4 | FLAG_SET | Turns on bits on a flag field at an index for the player. |
| 5 | FLAG_REMOVE | Turns off bits on a flag field at an index for the player. |
| 6 | TELEPORT_TO | Teleports the player to a location. |
| 7 | QUEST_EXPLORED | Satisfies the explore requirement for a quest. |
| 8 | KILL_CREDIT | Gives kill credit to the player. |
| 9 | RESPAWN_GAMEOBJECT | Spawns a despawned gameobject. |
| 10 | TEMP_SUMMON_CREATURE | Temporarily summons a creature. |
| 11 | OPEN_DOOR | Opens a door gameobject (type 0). |
| 12 | CLOSE_DOOR | Closes a door gameobject (type 0). |
| 13 | ACTIVATE_OBJECT | Activates an object. |
| 14 | REMOVE_AURA | Removes an aura due to a spell. |
| 15 | CAST_SPELL | Casts a spell. |
| 16 | PLAY_SOUND | Plays a sound. |
| 17 | CREATE_ITEM | Creates specified amount of items for the player. |
| 18 | DESPAWN_SELF | Forces unit to despawn. |
| 20 | LOAD_PATH | Load path to unit, then unit starts waypoint movement. |
| 21 | CALLSCRIPT_TO_UNIT | Calls script from one of \*_scripts table with given unit as source. |
| 22 | KILL | Changes state of the creature to dead and optionally removes its corpse. |
| 30 | ORIENTATION | Changes unit's orientation (Used in Waypoint Scripts) |
| 31 | EQUIP | Sets creature equipment. |
| 32 | MODEL | Sets creature model. |
| 33 | CLOSE_GOSSIP | Closes gossip window. This command is only used for Gossip Scripts. |
| 34 | PLAYMOVIE | Plays movie. |
| 35 | MOVEMENT | Updates creature movement. |
| 36 | PLAY_ANIMKIT | (NOT ON 3.3.5A, DON'T REUSE) |
{.dense}

&nbsp;

### Other Fields
| command | datalong | datalong2 | dataint | coordinate tuple |
|---------|----------|-----------|---------|------------|
| 0 | [ChatType](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Globals/ObjectMgr.h) | talk source: 0 - creature; 1 - player | [broadcast_text](../world/broadcast_text#id) | - |
| 1 | [Emote ID](/files/DBC/335/emotes#id) | play emote as: 0 - oneshot; 1 - state | 0 | - |
| 2 | field index | value to be set | 0 | - |
| 3 | 0 | time for movement (in seconds?) | 0 | destination |
| 4 | field index | bitmask to be set | 0 | - |
| 5 | field index | bitmask to be unset | 0 | - |
| 6 | destination [Map ID](/files/DBC/335/map#id) | target: 0 - player; 1 - creature | 0 | destination |
| 7 | [quest ID](../world/quest_template#id) to satisfy | min distance to target to satisfy (min.: 5m) | 0 | - |
| 8 | [creature entry](../world/creature_template#entry) to credit | granted to: 0 - player; 1 - player+party | 0 | - |
| 9 | [object guid](../world/gameobject#guid) to spawn | despawn delay in seconds (min.: 5s) | 0 | - |
| 10 | [creature entry](../world/creature_template#entry) to spawn | despawn delay in seconds | 0 | destination |
| 11 | [object guid](../world/gameobject#guid) to open | reset delay in milliseconds (min.: 15000ms) | 0 | - |
| 12 | [object guid](../world/gameobject#guid) to close | reset delay in milliseconds (min.: 15000ms) | 0 | - |
| 13 | 0 | 0 | 0 | - |
| 14 | [Spell ID](/files/DBC/335/spell#id) to remove | remove from: 0 - target; 1 - source | 0 | - |
| 15 | [Spell ID](/files/DBC/335/spell#id) to cast | 0: Source -> Target<br>1: Source -> Source (self cast)<br>2: Target -> Target<br>3: Target -> Source (cast back)<br>4: [creature entry](../world/creature_template#entry) from **dataint** | cast type: 0 - normal; 1 - triggered<br><br><br><br>[creature entry](../world/creature_template#entry) | - |
| 16 | [SoundEntry ID](/files/DBC/335/soundentries#id) to play | 0x1: play to everyone instead of player<br>0x2: play with distance dependancy instead of without| 0 | - |
| 17 | [item entry](../world/item_template#entry) to create | amount | 0 | - |
| 18 | despawn delay (in seconds?) | 0 | 0 | - |
| 20 | waypoint [path id](../world/waypoint_data#ID) to load | repeatable: 0 - no; 1 - yes | 0 | - |
| 21 | creature [entry](../world/creature_template#entry) or [guid](../world/creature#guid) to load script on | script **id** | 3: use spell_scripts table<br>5: use event_scripts table<br>6: use waypoint_scripts table | - |
| 22 | 0 | 0 | 0: leave corpse; 1: remove corpse | - |
| 30 | face: 0 - **o** value; 1 - target | 0 | 0 | 0 0 0 orientation (max.: 2π) |
| 31 | ID from [creature_equip_template](../world/creature_equip_template#id) | 0 | 0 | - |
| 32 | [CreatureDisplayInfo ID](/files/DBC/335/creaturedisplayinfo#id) | 0 | 0 | - |
| 33 | 0 | 0 | 0 | - |
| 34 | [Movie ID](/files/DBC/335/movie#id) to play | 0 | 0 | - |
| 35 | MOTION_TYPE: 1 - RANDOM; 2 - WAYPOINT | distance in m for RANDOM_MOTION_TYPE | [path id](../world/waypoint_data#ID) for WAYPOINT_MOTION_TYPE| - |
{.dense}

&nbsp;

### guid
Acts as primary key for waypoint_scripts. It is set automatically using the GM command `.wp event add`.
> Note: only present in [waypoint_scripts](../world/waypoint_scripts)
{.is-info}

&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/event_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'event_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
