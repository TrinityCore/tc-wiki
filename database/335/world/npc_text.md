---
title: npc_text
description:
published: true
date: 2023-07-11T18:19:56.033Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:36.830Z
---

<a href="https://trinitycore.info/en/database/335/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the texts that are used for gossip. More research needs to be done on this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [text0_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text0_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID0](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang0](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability0](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay0_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote0_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay0_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote0_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay0_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote0_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text1_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text1_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID1](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang1](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability1](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay1_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote1_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote1_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote1_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text2_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text2_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID2](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang2](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability2](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay2_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote2_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote2_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote2_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text3_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text3_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID3](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang3](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability3](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay3_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote3_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote3_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote3_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text4_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text4_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID4](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang4](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability4](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay4_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote4_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay4_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote4_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay4_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote4_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text5_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text5_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID5](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang5](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability5](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay5_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote5_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay5_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote5_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay5_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote5_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text6_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text6_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID6](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang6](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability6](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay6_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote6_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay6_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote6_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay6_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote6_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [text7_0](#text[0-7]_0) | longtext |  |  | YES | NULL |  |  |
| [text7_1](#text[0-7]_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID7](#broadcasttextid[0-7]) | mediumint | signed |  | NO | 0 |  |  |
| [lang7](#lang[0-7]) | tinyint | unsigned |  | NO | 0 |  |  |
| [Probability7](#probability[0-7]) | float |  |  | NO | 0 |  |  |
| [EmoteDelay7_0](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote7_0](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay7_1](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote7_1](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay7_2](#emotedelay[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote7_2](#emote[0-7]_[0-2]) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
This is the ID of the text entry.
&nbsp;

### text\[0-7]_0
This is the text that is displayed if the NPC is male.
&nbsp;

### text\[0-7]_1
This is the text that is displayed if the NPC is female.
&nbsp;

### BroadcastTextID\[0-7]
The [broadcast_text.ID](../world/broadcast_text#id) of this definition. It will entirely override this entry.
&nbsp;

### lang\[0-7]
The [Language ID](/files/DBC/335/languages#id) of the text in game.
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

### Probability\[0-7]
The percent-chance (probability) that the NPC will say either **text\*_0** or **text\*_1** depending on the NPCs gender.
1 will always show this text, while 0.5 will show this text 50% of the time and then choose another text in the current row. The total of all probabilities in the current row should equal 1.
&nbsp;

### EmoteDelay\[0-7]_\[0-2]
The delay in milliseconds after which the next emote can be played.
&nbsp;

### Emote\[0-7]_\[0-2]
The [Emote ID](/files/DBC/335/emotes#id) that the NPC should do when displaying the text. The emotes are played after each other in order (0 - 2).
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
