---
title: broadcast_text
description: 
published: true
date: 2024-05-16T11:19:31.307Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:02.490Z
---

This table (ref https://github.com/TrinityCore/TrinityCore/commit/60e87db) will have everything you need for your scripts' texts, such as: [gossips](../world/gossip_menu_option), [creature texts](../world/creature_text) and [npc_texts](../world/npc_text).

Its purpose is (will be) used as a globalized table containing the texts as mentionned above, and things like their sounds, their emotes and the languages in which the texts should be said.

All the values are from sniffs (ADBVerified) so, don't add things in it - Kinzcool.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [LanguageID](#languageid) | int | unsigned |  | NO | 0 |  |  |
| [Text](#text) | longtext |  |  | YES | NULL |  |  |
| [Text1](#text1) | longtext |  |  | YES | NULL |  |  |
| [EmoteID1](#emoteid1-3) | int | unsigned |  | NO | 0 |  |  |
| [EmoteID2](#emoteid1-3) | int | unsigned |  | NO | 0 |  |  |
| [EmoteID3](#emoteid1-3) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1](#emotedelay1-3) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2](#emotedelay1-3) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3](#emotedelay1-3) | int | unsigned |  | NO | 0 |  |  |
| [SoundEntriesID](#soundentriesid) | int | unsigned |  | NO | 0 |  |  |
| [EmotesID](#emotesid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
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

### EmotesID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

