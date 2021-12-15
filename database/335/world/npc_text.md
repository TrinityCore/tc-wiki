---
title: npc_text
description: 
published: true
date: 2021-08-30T22:01:28.044Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [text0_0](#text0_0) | longtext |  |  | YES | NULL |  |  |
| [text0_1](#text0_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID0](#broadcasttextid0) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang0](#lang0) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability0](#probability0) | float |  |  | NO | 0 |  |  |
| [EmoteDelay0_0](#emotedelay0_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote0_0](#emote0_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay0_1](#emotedelay0_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote0_1](#emote0_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay0_2](#emotedelay0_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote0_2](#emote0_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text1_0](#text1_0) | longtext |  |  | YES | NULL |  |  |
| [text1_1](#text1_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID1](#broadcasttextid1) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang1](#lang1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability1](#probability1) | float |  |  | NO | 0 |  |  |
| [EmoteDelay1_0](#emotedelay1_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote1_0](#emote1_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1_1](#emotedelay1_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote1_1](#emote1_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1_2](#emotedelay1_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote1_2](#emote1_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text2_0](#text2_0) | longtext |  |  | YES | NULL |  |  |
| [text2_1](#text2_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID2](#broadcasttextid2) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang2](#lang2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability2](#probability2) | float |  |  | NO | 0 |  |  |
| [EmoteDelay2_0](#emotedelay2_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote2_0](#emote2_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2_1](#emotedelay2_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote2_1](#emote2_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2_2](#emotedelay2_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote2_2](#emote2_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text3_0](#text3_0) | longtext |  |  | YES | NULL |  |  |
| [text3_1](#text3_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID3](#broadcasttextid3) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang3](#lang3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability3](#probability3) | float |  |  | NO | 0 |  |  |
| [EmoteDelay3_0](#emotedelay3_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote3_0](#emote3_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3_1](#emotedelay3_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote3_1](#emote3_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3_2](#emotedelay3_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote3_2](#emote3_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text4_0](#text4_0) | longtext |  |  | YES | NULL |  |  |
| [text4_1](#text4_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID4](#broadcasttextid4) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang4](#lang4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability4](#probability4) | float |  |  | NO | 0 |  |  |
| [EmoteDelay4_0](#emotedelay4_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote4_0](#emote4_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay4_1](#emotedelay4_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote4_1](#emote4_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay4_2](#emotedelay4_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote4_2](#emote4_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text5_0](#text5_0) | longtext |  |  | YES | NULL |  |  |
| [text5_1](#text5_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID5](#broadcasttextid5) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang5](#lang5) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability5](#probability5) | float |  |  | NO | 0 |  |  |
| [EmoteDelay5_0](#emotedelay5_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote5_0](#emote5_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay5_1](#emotedelay5_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote5_1](#emote5_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay5_2](#emotedelay5_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote5_2](#emote5_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text6_0](#text6_0) | longtext |  |  | YES | NULL |  |  |
| [text6_1](#text6_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID6](#broadcasttextid6) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang6](#lang6) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability6](#probability6) | float |  |  | NO | 0 |  |  |
| [EmoteDelay6_0](#emotedelay6_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote6_0](#emote6_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay6_1](#emotedelay6_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote6_1](#emote6_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay6_2](#emotedelay6_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote6_2](#emote6_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [text7_0](#text7_0) | longtext |  |  | YES | NULL |  |  |
| [text7_1](#text7_1) | longtext |  |  | YES | NULL |  |  |
| [BroadcastTextID7](#broadcasttextid7) | mediumint(6) | signed |  | NO | 0 |  |  |
| [lang7](#lang7) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Probability7](#probability7) | float |  |  | NO | 0 |  |  |
| [EmoteDelay7_0](#emotedelay7_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote7_0](#emote7_0) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay7_1](#emotedelay7_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote7_1](#emote7_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay7_2](#emotedelay7_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Emote7_2](#emote7_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint(5) | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### text0_0
*- no description -*
&nbsp;

### text0_1
*- no description -*
&nbsp;

### BroadcastTextID0
*- no description -*
&nbsp;

### lang0
*- no description -*
&nbsp;

### Probability0
*- no description -*
&nbsp;

### EmoteDelay0_0
*- no description -*
&nbsp;

### Emote0_0
*- no description -*
&nbsp;

### EmoteDelay0_1
*- no description -*
&nbsp;

### Emote0_1
*- no description -*
&nbsp;

### EmoteDelay0_2
*- no description -*
&nbsp;

### Emote0_2
*- no description -*
&nbsp;

### text1_0
*- no description -*
&nbsp;

### text1_1
*- no description -*
&nbsp;

### BroadcastTextID1
*- no description -*
&nbsp;

### lang1
*- no description -*
&nbsp;

### Probability1
*- no description -*
&nbsp;

### EmoteDelay1_0
*- no description -*
&nbsp;

### Emote1_0
*- no description -*
&nbsp;

### EmoteDelay1_1
*- no description -*
&nbsp;

### Emote1_1
*- no description -*
&nbsp;

### EmoteDelay1_2
*- no description -*
&nbsp;

### Emote1_2
*- no description -*
&nbsp;

### text2_0
*- no description -*
&nbsp;

### text2_1
*- no description -*
&nbsp;

### BroadcastTextID2
*- no description -*
&nbsp;

### lang2
*- no description -*
&nbsp;

### Probability2
*- no description -*
&nbsp;

### EmoteDelay2_0
*- no description -*
&nbsp;

### Emote2_0
*- no description -*
&nbsp;

### EmoteDelay2_1
*- no description -*
&nbsp;

### Emote2_1
*- no description -*
&nbsp;

### EmoteDelay2_2
*- no description -*
&nbsp;

### Emote2_2
*- no description -*
&nbsp;

### text3_0
*- no description -*
&nbsp;

### text3_1
*- no description -*
&nbsp;

### BroadcastTextID3
*- no description -*
&nbsp;

### lang3
*- no description -*
&nbsp;

### Probability3
*- no description -*
&nbsp;

### EmoteDelay3_0
*- no description -*
&nbsp;

### Emote3_0
*- no description -*
&nbsp;

### EmoteDelay3_1
*- no description -*
&nbsp;

### Emote3_1
*- no description -*
&nbsp;

### EmoteDelay3_2
*- no description -*
&nbsp;

### Emote3_2
*- no description -*
&nbsp;

### text4_0
*- no description -*
&nbsp;

### text4_1
*- no description -*
&nbsp;

### BroadcastTextID4
*- no description -*
&nbsp;

### lang4
*- no description -*
&nbsp;

### Probability4
*- no description -*
&nbsp;

### EmoteDelay4_0
*- no description -*
&nbsp;

### Emote4_0
*- no description -*
&nbsp;

### EmoteDelay4_1
*- no description -*
&nbsp;

### Emote4_1
*- no description -*
&nbsp;

### EmoteDelay4_2
*- no description -*
&nbsp;

### Emote4_2
*- no description -*
&nbsp;

### text5_0
*- no description -*
&nbsp;

### text5_1
*- no description -*
&nbsp;

### BroadcastTextID5
*- no description -*
&nbsp;

### lang5
*- no description -*
&nbsp;

### Probability5
*- no description -*
&nbsp;

### EmoteDelay5_0
*- no description -*
&nbsp;

### Emote5_0
*- no description -*
&nbsp;

### EmoteDelay5_1
*- no description -*
&nbsp;

### Emote5_1
*- no description -*
&nbsp;

### EmoteDelay5_2
*- no description -*
&nbsp;

### Emote5_2
*- no description -*
&nbsp;

### text6_0
*- no description -*
&nbsp;

### text6_1
*- no description -*
&nbsp;

### BroadcastTextID6
*- no description -*
&nbsp;

### lang6
*- no description -*
&nbsp;

### Probability6
*- no description -*
&nbsp;

### EmoteDelay6_0
*- no description -*
&nbsp;

### Emote6_0
*- no description -*
&nbsp;

### EmoteDelay6_1
*- no description -*
&nbsp;

### Emote6_1
*- no description -*
&nbsp;

### EmoteDelay6_2
*- no description -*
&nbsp;

### Emote6_2
*- no description -*
&nbsp;

### text7_0
*- no description -*
&nbsp;

### text7_1
*- no description -*
&nbsp;

### BroadcastTextID7
*- no description -*
&nbsp;

### lang7
*- no description -*
&nbsp;

### Probability7
*- no description -*
&nbsp;

### EmoteDelay7_0
*- no description -*
&nbsp;

### Emote7_0
*- no description -*
&nbsp;

### EmoteDelay7_1
*- no description -*
&nbsp;

### Emote7_1
*- no description -*
&nbsp;

### EmoteDelay7_2
*- no description -*
&nbsp;

### Emote7_2
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

