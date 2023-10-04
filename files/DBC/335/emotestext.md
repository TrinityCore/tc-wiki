---
title: EmotesText.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/emotes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Emotes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/emotestextdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'EmotesTextData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# EmotesText.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=emotestext&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/EmotesText)
&nbsp;

Player usable text emotes.

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name](#name) | string |  |
| 2 | [EmoteID](#emoteid) | uint32 | [Emotes.dbc/0](/files/DBC/335/emotes#id) |
| 3 | [EmoteText_0](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 4 | [EmoteText_1](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 5 | [EmoteText_2](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 6 | [EmoteText_3](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 7 | [EmoteText_4](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 8 | [EmoteText_5](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 9 | [EmoteText_6](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 10 | [EmoteText_7](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 11 | [EmoteText_8](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 12 | [EmoteText_9](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 13 | [EmoteText_10](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 14 | [EmoteText_11](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 15 | [EmoteText_12](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 16 | [EmoteText_13](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 17 | [EmoteText_14](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
| 18 | [EmoteText_15](#emotetext) | uint32 | [EmotesTextData.dbc/0](/files/DBC/335/emotestextdata#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 (string)</code>

Same as the slash command.
&nbsp;

### EmoteID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### EmoteText
:x: <code>Col: 3 &ndash; 18 (uint32)</code>

| Col | source | target | Comment |
|-----|--------|--------|---------|
| 3 | male | others | %s raises his fist in anger at %s. |
| 4 | male | self | %s raises his fist in anger at you. |
| 5 | self | others | You raise your fist in anger at %s. |
| 6 | self | self | :x: UNUSED |
| 7 | male | no | %s raises his fist in anger. |
| 8 | male | no | :x: UNUSED - redundant with 7 |
| 9 | self | no | You raise your fist in anger. |
| 10 | self | no | :x: UNUSED - redundant with 9 |
| 11 | female | others | %s raises her fist in anger at %s. |
| 12 | female | self | %s raises her fist in anger at you. |
| 13 | self | others | :x: UNUSED - redundant with 5 |
| 14 | self | self | :x: UNUSED - redundant with 6 |
| 15 | female | no | %s raises her fist in anger. |
| 16 | female | no | :x: UNUSED - redundant with 15 |
| 17 | self | no | :x: UNUSED - redundant with 9 |
| 18 | self | no | :x: UNUSED - redundant with 9 |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/emotes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Emotes'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/emotestextdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'EmotesTextData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
