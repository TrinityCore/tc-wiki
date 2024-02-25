---
title: creature_text
description: 
published: true
date: 2024-02-25T10:16:32.560Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:31.760Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ID](#id) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Text](#text) | mediumtext |  |  | NO |  |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [Language](#language) | tinyint | signed |  | NO | 0 |  |  |
| [Probability](#probability) | float |  |  | NO | 0 |  |  |
| [Emote](#emote) | int | unsigned |  | NO | 0 |  |  |
| [Duration](#duration) | int | unsigned |  | NO | 0 |  |  |
| [Sound](#sound) | int | unsigned |  | NO | 0 |  |  |
| [SoundPlayType](#soundplaytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [BroadcastTextId](#broadcasttextid) | int | signed |  | NO | 0 |  |  |
| [TextRange](#textrange) | tinyint | unsigned |  | NO | 0 |  |  |
| [comment](#comment) | varchar(255) |  |  | YES | '' |  |  |
&nbsp;
## Description of fields

### CreatureID
This is the [creature_template.entry](/en/database/master/world/creature_template#entry) to which the script is linked to.
&nbsp;

### GroupID
If there is more than one of the same entry (more than one text the creature says), this column is used to choose if it is a random say or an ordered list. If a creature has got more than one say text to be shown in a given order, it must be incremented for each new matching entry (ex. 0, 1, 2, 3...). If there is only one entry or only one group, this value should be 0. If there are multiple groups of texts, this value stays the same within the group while the id increments within the same group.

Example from Stormwind City Guard, creature 68:
| CreatureID | GroupID | ID | Text |
| --- | --- | --- | :--- |
| 68 | 0 | 0 | Taste blade, mongrel! |
| 68 | 0 | 1 | Please tell me that you didn't just do what I think you just did. Please tell me that I'm not going to have to hurt you... |
| 68 | 0 | 2 | As if we don't have enough problems, you go and create more! |
| 68 | 2 | 0 | %s throws a rotten apple at $n. |
| 68 | 3 | 0 | %s throws rotten banana on $n. |
| 68 | 4 | 0 | %s spits on $n. |
| 68 | 5 | 0 | Monster! |
| 68 | 5 | 1 | Murderer! |
| 68 | 5 | 2 | GET A ROPE! |
| 68 | 5 | 3 | How dare you set foot in our city! |
| 68 | 5 | 4 | You disgust me. |
| 68 | 5 | 5 | Looks like we're going to have ourselves an execution. |
| 68 | 5 | 6 | Traitorous dog. |
| 68 | 5 | 7 | My family was wiped out by the Scourge! MONSTER! |
&nbsp;

### ID
Entry for each group of texts. This is the unique identifier when entry (creature) is the same and groupid is unchanged, it must be incremented (ex. 0, 1, 2, 3...). A creature say will be randomly selected from this list based on the groupid it belongs to.
&nbsp;

### Text
The text the creature will say.
&nbsp;

### Type
| Value |         Name | Picture example |
| ----- | ------------ | --------------- |
|    12 |          Say | ![creature_text_type_say.png](/creature_text_type_say.png) |
|    14 |         Yell | ![creature_text_type_yell.png](/creature_text_type_yell.png) |
|    16 |        Emote | ![creature_text_type_emote.png](/creature_text_type_emote.png) |
|    41 |    BossEmote | ![creature_text_type_boss_emote.png](/creature_text_type_boss_emote.png) |
|    15 |      Whisper | ![creature_text_type_whisper.png](/creature_text_type_whisper.png) |
|    42 |  BossWhisper | ![creature_text_type_boss_whisper.png](/creature_text_type_boss_whisper.png) |
&nbsp;

### Language
ID from [Languages.db2](https://wow.tools/dbc/?dbc=Languages){target=_blank}
&nbsp;

### Probability
A value from 1-100 that represents the percentage chance that this text will be executed.
&nbsp;

### Emote
The emote that the creature plays when the text is executed.
&nbsp;

### Duration
Time in ms to see text.
0 is default and calculated by core.
&nbsp;

### Sound
The sound entry this creature will play at the same time the text is executed.
&nbsp;

### SoundPlayType
Assigns which packet should be used to send the sound
|        Type | Value |
| ----------- | ----- |
|      Normal |     0 |
| ObjectSound |     1 |
&nbsp;

### BroadcastTextId
Id of the equivalent text found in [broadcast_text](/en/database/master/hotfixes/broadcast_text#text)

In some rare cases it's not sent in sniff, in that case put `0` in this field, as this field is optional. 
Localization is then handled via. [creature_text_locales](/en/database/master/world/creature_text_locale).
&nbsp;

### TextRange
| Value | Range |
| --- | --- |
| 0 | Default |
| 1 | Area |
| 2 | Zone |
| 3 | Map |
| 4 | World |
| 5 | Personal |
&nbsp;

### comment
This field allows you to label a text entry.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
