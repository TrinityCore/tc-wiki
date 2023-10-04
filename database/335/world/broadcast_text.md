---
title: broadcast_text
description:
published: true
date: 2023-07-11T18:03:18.853Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:02.490Z
---

<a href="https://trinitycore.info/en/database/335/world/battlemaster_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlemaster_entry'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/broadcast_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'broadcast_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table (ref https://github.com/TrinityCore/TrinityCore/commit/60e87db) will have everything you need for your scripts' texts, such as: [gossips](../world/gossip_menu_option), [creature texts](../world/creature_text) and [npc_texts](../world/npc_text).

Its purpose is (will be) used as a globalized table containing the texts as mentionned above, and things like their sounds, their emotes and the languages in which the texts should be said.

All the values are from sniffs (ADBVerified) so, don't add things in it - Kinzcool.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [LanguageID](#languageid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Text](#text) | longtext |  |  | YES | NULL |  |  |
| [Text1](#text1) | longtext |  |  | YES | NULL |  |  |
| [EmoteID1](#emoteid[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmoteID2](#emoteid[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmoteID3](#emoteid[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1](#emotedelay[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2](#emotedelay[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3](#emotedelay[1-3]) | mediumint | unsigned |  | NO | 0 |  |  |
| [SoundEntriesID](#soundentriesid) | mediumint | unsigned |  | NO | 0 |  |  |
| [EmotesID](#emotesid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | mediumint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
Self description.
&nbsp;

### LanguageID
The [Language ID](/files/DBC/335/languages#id) in which the text will be broadcasted.
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

### Text
The text that the creature will broadcast.
&nbsp;

### Text1
The alternative text that the creature will broadcast.
&nbsp;

### EmoteID\[1-3]
The [Emote ID](/files/DBC/335/emotes#id) played when the texts are broadcasted.
&nbsp;

### EmoteDelay\[1-3]
The delays of the broadcasted emotes.
&nbsp;

### SoundEntriesID
The [SoundEntry ID](/files/DBC/335/soundentries#id) played when the texts are broadcasted.
&nbsp;

### Emote ID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/battlemaster_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlemaster_entry'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/broadcast_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'broadcast_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
