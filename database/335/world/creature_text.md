---
title: creature_text
description:
published: true
date: 2023-07-09T13:38:02.143Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:06.752Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds all the speech text (whisper, say, yell, emote text in speech bubbles and in the chat window) and corresponding sounds or emote (if any) used within [smart_scripts](../world/smart_scripts) table and core scripts.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ID](#id) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Text](#text) | longtext |  |  | YES | NULL |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [Language](#language) | tinyint | signed |  | NO | 0 |  |  |
| [Probability](#probability) | float |  |  | NO | 0 |  |  |
| [Emote](#emote) | mediumint | unsigned |  | NO | 0 |  |  |
| [Duration](#duration) | mediumint | unsigned |  | NO | 0 |  |  |
| [Sound](#sound) | mediumint | unsigned |  | NO | 0 |  |  |
| [BroadcastTextId](#broadcasttextid) | mediumint | signed |  | NO | 0 |  |  |
| [TextRange](#textrange) | tinyint | unsigned |  | NO | 0 |  |  |
| [comment](#comment) | varchar(255) |  |  | YES | '' |  |  |
&nbsp;
## Description of fields

### CreatureID
This is the [creature_template.entry](../world/creature_template#entry) to which the script is linked to.
&nbsp;

### GroupID
If there is more than one of the same entry (more than one text the creature says), this column is used to choose if it is a random say or an ordered list. If a creature has got more than one say text to be shown in a given order, it must be incremented for each new matching entry (ex. 0, 1, 2, 3...). If there is only one entry or only one group, this value should be 0. If there are multiple groups of texts, this value stays the same within the group while the id increments within the same group.
&nbsp;

### ID
Entry for each group of texts. This is the unique identifier when entry (creature) is the same and **GroupID** is unchanged, it must be incremented (ex. 0, 1, 2, 3...). A creature say will be randomly selected from this list based on the groupid it belongs to.
&nbsp;

### Text
The text the creature will say.
&nbsp;

### Type
| Value | Old Value | Description | Example |
|-------|-----------|-------------|---------|
| 12 | 0 | Say | ![creature_text_type_say.png](/creature_text_type_say.png) |
| 14 | 1 | Yell | ![creature_text_type_yell.png](/creature_text_type_yell.png) |
| 16 | 2 | Emote | ![creature_text_type_emote.png](/creature_text_type_emote.png) |
| 41 | 3 | Boss Emote | ![creature_text_type_boss_emote.png](/creature_text_type_boss_emote.png) |
| 15 | 4 | Whisper | ![creature_text_type_whisper.png](/creature_text_type_whisper.png) |
| 42 | 5 | Boss Whisper | ![creature_text_type_boss_whisper.png](/creature_text_type_boss_whisper.png) |
{.dense}

&nbsp;

### Language
A [Language ID](/files/DBC/335/languages#id). When set to 0, the current default language will be used.
| ID | Language | | ID | Language |
|----|----------|-|----|----------|
| 1 | Orcish | | 12 | Kalimag |
| 2 | Darnassian | |  13 | Gnomish |
| 3 | Taurahe | |  14 | Troll |
| 6 | Dwarvish | |  33 | Gutterspeak |
| 7 | Common | |  35 | Draenei |
| 8 | Demonic | |  36 | Zombie |
| 9 | Titan | |  37 | Gnomish Binary |
| 10 | Thalassian | |  38 | Goblin Binary |
|11 | Draconic | |   |  |
{.dense}

&nbsp;

### Probability
A value from 1-100 that represents the percentage chance that this text will be executed.
&nbsp;

### Emote
The [Emote ID](/files/DBC/335/emotes#id) that the creature plays when the text is executed.
&nbsp;

### Duration
Time in milliseconds to see the text. 0 is default and calculated by core.
&nbsp;

### Sound
The [SoundEntry ID](/files/DBC/335/soundentries#id) this creature will play at the same time the text is executed.
&nbsp;

### BroadcastTextId
Id of the equivalent text found in [broadcast_text](../world/broadcast_text#ID).
&nbsp;

### TextRange
| Value | Range |
|-------|-------|
| 0 | Normal/Default |
| 1 | Area |
| 2 | Zone |
| 3 | Map |
| 4 | World |
{.dense}

&nbsp;

### comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

## Example
The following snippets for the [Stormwind City Guard](https://aowow.trinitycore.info/?npc=68) are part of the Death Knight introduction questline.

CreatureText excerpt:
| CreatureID | GroupID | ID | Text                                                   | Type | Language | Probability | TextRange | BroadcastTextId |
|------------|---------|----|--------------------------------------------------------|------|----------|-------------|-----------|-----------------|
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:cyan;">**2**</span> |  0 | %s throws a rotten apple at $n.                        |   16 |        0 |         100 |         0 |           31671 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:lightgreen;">**3**</span> |  0 | %s throws rotten banana on $n.                         |   16 |        0 |         100 |         0 |           31672 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#F77;">**4**</span> |  0 | %s spits on $n.                                        |   16 |        0 |         100 |         0 |           31673 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  0 | Monster!                                               |   12 |        0 |         100 |         0 |           31662 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  1 | Murderer!                                              |   12 |        0 |         100 |         0 |           31679 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  2 | GET A ROPE!                                            |   12 |        0 |         100 |         0 |           31669 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  3 | How dare you set foot in our city!                     |   12 |        0 |         100 |         0 |           31684 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  4 | You disgust me.                                        |   12 |        0 |         100 |         0 |           31680 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  5 | Looks like we're going to have ourselves an execution. |   12 |        0 |         100 |         0 |           31682 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  6 | Traitorous dog.                                        |   12 |        0 |         100 |         0 |           31665 |
|         [68](https://aowow.trinitycore.info/?npc=68) |       <span style="color:#C6F;">**5**</span> |  7 | My family was wiped out by the Scourge! MONSTER!       |   12 |        0 |         100 |         0 |           31667 |

SmartAI excerpt:
| entryorguid | source_type | id | event_type | event_param1 | action_type | action_param1 | action_param2 | action_param3 | action_param4 | comment                                                       |
|-------------|-------------|----|------------|--------------|-------------|---------------|---------------|---------------|---------------|---------------------------------------------------------------|
|          [68](https://aowow.trinitycore.info/?npc=68) |           0 | 11 |          8 |        [58533](https://aowow.trinitycore.info/?spell=58533) |          87 |        <span style="color:blue;">**329600**</span> |        <span style="color:green;">**329601**</span> |        <span style="color:darkred;">**329602**</span> |        <span style="color:purple;">**329603**</span> | Stormwind City Guard - On spell hit - Run Random Script       |
|      <span style="color:blue;">**329600**</span> |           9 |  0 |          0 |            0 |          11 |         [58509](https://aowow.trinitycore.info/?spell=58509) |             0 |             0 |             0 | Stormwind City Guard - On Script - Cast ''Rotten Apple Toss'  |
|      <span style="color:blue;">**329600**</span> |           9 |  1 |          0 |            0 |           1 |             <span style="color:cyan;">**2**</span> |             0 |             0 |             0 | Stormwind City Guard - On Script - Say Line 2                 |
|      <span style="color:green;">**329601**</span> |           9 |  0 |          0 |            0 |          11 |         [58513](https://aowow.trinitycore.info/?spell=58513) |             0 |             0 |             0 | Stormwind City Guard - On Script - Cast 'Rotten Banana Toss'  |
|      <span style="color:green;">**329601**</span> |           9 |  1 |          0 |            0 |           1 |             <span style="color:lightgreen;">**3**</span> |             0 |             0 |             0 | Stormwind City Guard - On Script - Say Line 3                 |
|      <span style="color:darkred;">**329602**</span> |           9 |  0 |          0 |            0 |          11 |         [58520](https://aowow.trinitycore.info/?spell=58520) |             0 |             0 |             0 | Stormwind City Guard - On Script - Cast 'Spit'                |
|      <span style="color:darkred;">**329602**</span> |           9 |  1 |          0 |            0 |           1 |             <span style="color:#F77;">**4**</span> |             0 |             0 |             0 | Stormwind City Guard - On Script - Say Line 4                 |
|      <span style="color:purple;">**329603**</span> |           9 |  0 |          0 |            0 |           1 |             <span style="color:#C6F;">**5**</span> |             0 |             0 |             0 | Stormwind City Guard - On Script - Say Line 5                 |

SMART_ACTION_TALK (1) accesses creature_text on with the current **creatureID** and provided **GroupID** as parameter.
In the case of **GroupID** **5** a random text is picked with equal chance (all have **Probability**: 100) and said (**Type**: 12) in the vicinity (**TextRange**: 0) of the guard in its default tongue (**Language**: 0).


<a href="https://trinitycore.info/en/database/335/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
