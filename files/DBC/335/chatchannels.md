---
title: ChatChannels.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/charvariations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharVariations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chatprofanity" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ChatProfanity'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ChatChannels.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=chatchannels&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ChatChannels)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [FactionGroup](#factiongroup) | uint32 | [FactionGroup.dbc/1](/files/DBC/335/factiongroup#maskid) |
| 3 | [Name_0](#name) | string |  |
| 4 | [Name_1](#name) | string |  |
| 5 | [Name_2](#name) | string |  |
| 6 | [Name_3](#name) | string |  |
| 7 | [Name_4](#name) | string |  |
| 8 | [Name_5](#name) | string |  |
| 9 | [Name_6](#name) | string |  |
| 10 | [Name_7](#name) | string |  |
| 11 | [Name_8](#name) | string |  |
| 12 | [Name_9](#name) | string |  |
| 13 | [Name_10](#name) | string |  |
| 14 | [Name_11](#name) | string |  |
| 15 | [Name_12](#name) | string |  |
| 16 | [Name_13](#name) | string |  |
| 17 | [Name_14](#name) | string |  |
| 18 | [Name_15](#name) | string |  |
| 19 | [Name_lang_mask](#name) | uint32 |  |
| 20 | [Shortcut_0](#shortcut) | string |  |
| 21 | [Shortcut_1](#shortcut) | string |  |
| 22 | [Shortcut_2](#shortcut) | string |  |
| 23 | [Shortcut_3](#shortcut) | string |  |
| 24 | [Shortcut_4](#shortcut) | string |  |
| 25 | [Shortcut_5](#shortcut) | string |  |
| 26 | [Shortcut_6](#shortcut) | string |  |
| 27 | [Shortcut_7](#shortcut) | string |  |
| 28 | [Shortcut_8](#shortcut) | string |  |
| 29 | [Shortcut_9](#shortcut) | string |  |
| 30 | [Shortcut_10](#shortcut) | string |  |
| 31 | [Shortcut_11](#shortcut) | string |  |
| 32 | [Shortcut_12](#shortcut) | string |  |
| 33 | [Shortcut_13](#shortcut) | string |  |
| 34 | [Shortcut_14](#shortcut) | string |  |
| 35 | [Shortcut_15](#shortcut) | string |  |
| 36 | [Shortcut_lang_mask](#shortcut) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

[`enum ChannelDBCFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Chat/Channels/Channel.h#L91-L104)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x00000 | CHANNEL_DBC_FLAG_NONE |  |
| 1 | 0x00001 | CHANNEL_DBC_FLAG_INITIAL | General, Trade, LocalDefense, LFG - Auto-Join |
| 2 | 0x00002 | CHANNEL_DBC_FLAG_ZONE_DEP | General, Trade, LocalDefense, GuildRecruitment - Zone-Based |
| 4 | 0x00004 | CHANNEL_DBC_FLAG_GLOBAL | WorldDefense - Zone Attack Alerts |
| 8 | 0x00008 | CHANNEL_DBC_FLAG_TRADE | Trade, LFG - Allow Item Links |
| 16 | 0x00010 | CHANNEL_DBC_FLAG_CITY_ONLY | Trade, GuildRecruitment, LFG - Only in Cities |
| 32 | 0x00020 | CHANNEL_DBC_FLAG_CITY_ONLY2 | Trade, GuildRecruitment, LFG - Linked Channel |
| 65536 | 0x10000 | CHANNEL_DBC_FLAG_DEFENSE | LocalDefense, WorldDefense - Zone Attack Alerts |
| 131072 | 0x20000 | CHANNEL_DBC_FLAG_GUILD_REQ | GuildRecruitment - Guild Recruitment |
| 262144 | 0x40000 | CHANNEL_DBC_FLAG_LFG | LFG - Looking for Group |
| 524288 | 0x80000 | CHANNEL_DBC_FLAG_UNK1 | General - Global for Tournament |
{.dense}

&nbsp;

### FactionGroup
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 3 &ndash; 19 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Shortcut
:x: <code>Col: 20 &ndash; 36 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/charvariations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharVariations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chatprofanity" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ChatProfanity'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
