---
title: npc_text
description: 
published: true
date: 2022-11-21T21:06:26.396Z
tags: 
editor: markdown
dateCreated: 2021-08-30T09:33:08.406Z
---

<a href="https://trinitycore.info/en/database/master/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_vendor'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability0](#probability0) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability1](#probability1) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability2](#probability2) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability3](#probability3) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability4](#probability4) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability5](#probability5) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability6](#probability6) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [Probability7](#probability7) | float |  |  | NO | 0 |  |  | SMSG_QUERY_NPC_TEXT_RESPONSE (before 9.2.5) |
| [BroadcastTextID0](#broadcasttextid0) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID1](#broadcasttextid1) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID2](#broadcasttextid2) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID3](#broadcasttextid3) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID4](#broadcasttextid4) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID5](#broadcasttextid5) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID6](#broadcasttextid6) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [BroadcastTextID7](#broadcasttextid7) | int | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### ID
This is the ID of the text entry.

> Since patch 9.2.5, the SMSG_GOSSIP_MESSAGE system uses BroadcastTextID instead of TextID (CMSG_QUERY_NPC_TEXT) so that neither the ID nor the probabilities can be obtained.
{.is-info}

If a new text will be added (and its ID is unknown) it should be within the ID range of the current expansion when the creature using this text was added first on retail.
The ID ranges are defined as followed:
|                    Expansion | ID range start   | ID range end   |
| ---------------------------- | ---------------- | -------------- |
| Vanilla (1.x)                |           500000 |         509999 |
| The Burning Crusade (2.x)    |           510000 |         519999 |
| Wrath of the Lich King (3.x) |           520000 |         529999 |
| Cataclysm (4.x)              |           530000 |         539999 |
| Mists of Pandaria (5.x)      |           540000 |         549999 |
| Warlords of Draenor (6.x)    |           550000 |         559999 |
| Legion (7.x)                 |           560000 |         569999 |
| Battle for Azeroth (8.x)     |           570000 |         579999 |
| Shadowlands (9.x)            |           580000 |         589999 |
| Dragonflight (10.x)          |           590000 |         599999 |
&nbsp;

### Probability0
*- no description -*
&nbsp;

### Probability1
*- no description -*
&nbsp;

### Probability2
*- no description -*
&nbsp;

### Probability3
*- no description -*
&nbsp;

### Probability4
*- no description -*
&nbsp;

### Probability5
*- no description -*
&nbsp;

### Probability6
*- no description -*
&nbsp;

### Probability7
*- no description -*
&nbsp;

### BroadcastTextID0
*- no description -*
&nbsp;

### BroadcastTextID1
*- no description -*
&nbsp;

### BroadcastTextID2
*- no description -*
&nbsp;

### BroadcastTextID3
*- no description -*
&nbsp;

### BroadcastTextID4
*- no description -*
&nbsp;

### BroadcastTextID5
*- no description -*
&nbsp;

### BroadcastTextID6
*- no description -*
&nbsp;

### BroadcastTextID7
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/npc_spellclick_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_spellclick_spells'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_vendor'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

