---
title: guild_eventlog
description: 
published: true
date: 2023-07-30T23:50:42.515Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:11.079Z
---

<a href="https://trinitycore.info/en/database/335/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_tab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Logs guild events to be displayed in the guild event log in-game.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO |  |  | Guild Identificator |
| [LogGuid](#logguid) | int | unsigned | PRI | NO |  |  | Log record identificator - auxiliary column |
| [EventType](#eventtype) | tinyint | unsigned |  | NO |  |  | Event type |
| [PlayerGuid1](#eventtype) | int | unsigned | MUL | NO |  |  | Player 1 |
| [PlayerGuid2](#eventtype) | int | unsigned | MUL | NO |  |  | Player 2 |
| [NewRank](#eventtype) | tinyint | unsigned |  | NO |  |  | New rank(in case promotion/demotion) |
| [TimeStamp](#timestamp) | int | unsigned |  | NO |  |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### LogGuid
Log record enumerator, unique per guild.
&nbsp;

### EventType
| Name | EventType | [PlayerGuid1](../characters/characters#guid) | [PlayerGuid2](../characters/characters#guid) | NewRank | Comment |
|--|--|--|--|--|--|
| GUILD_EVENT_LOG_INVITE_PLAYER | 1 | OfficerGUID | InviteeGUID | 0 | player received invite |
| GUILD_EVENT_LOG_JOIN_GUILD | 2 | InviteeGUID | 0 | 0 | player accepted invite |
| GUILD_EVENT_LOG_PROMOTE_PLAYER | 3 | OfficerGUID | MemberGUID | 1 – 8 | guild rank++ |
| GUILD_EVENT_LOG_DEMOTE_PLAYER | 4 | OfficerGUID | MemberGUID | 2 – 9 | guild rank-- |
| GUILD_EVENT_LOG_UNINVITE_PLAYER | 5 | OfficerGUID | MemberGUID | 0 | player was kicked from guild |
| GUILD_EVENT_LOG_LEAVE_GUILD | 6 | MemberGUID | 0 | 0 | player left guild on own volition |
{.dense}

&nbsp;

### TimeStamp
Unix timestamp when the event occured.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_tab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_member'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
