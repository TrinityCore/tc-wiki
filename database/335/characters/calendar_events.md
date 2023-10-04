---
title: calendar_events
description:
published: true
date: 2023-07-24T23:47:14.596Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:56.548Z
---

<a href="https://trinitycore.info/en/database/335/characters/bugreport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'bugreport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'calendar_invites'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds player created events.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | bigint | unsigned | PRI | NO | 0 |  |  |
| [creator](#creator) | int | unsigned |  | NO | 0 |  |  |
| [title](#title) | varchar(255) |  |  | NO | '' |  |  |
| [description](#description) | varchar(255) |  |  | NO | '' |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 4 |  |  |
| [dungeon](#dungeon) | int | signed |  | NO | -1 |  |  |
| [eventtime](#eventtime) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [time2](#time2) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
The GUID of the event.
&nbsp;

### creator
[character guid](../characters/characters#guid) of the creator.
&nbsp;

### title
short event title
&nbsp;

### description
fulltext event description
&nbsp;

### type
| ID | Name |
|----|------|
| 0 | CALENDAR_TYPE_RAID |
| 1 | CALENDAR_TYPE_DUNGEON |
| 2 | CALENDAR_TYPE_PVP |
| 3 | CALENDAR_TYPE_MEETING |
| 4 | CALENDAR_TYPE_OTHER |
{.dense}

&nbsp;

### dungeon
[LFGDungeon ID](/files/DBC/335/lfgdungeons#id) or `-1` if not set.
&nbsp;

### eventtime
Unixtime when the event is due.
&nbsp;

### flags
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | CALENDAR_FLAG_ALL_ALLOWED | Event is open to all |
| 16 | 0x0010 | CALENDAR_FLAG_INVITES_LOCKED | 'Lock Event' checkbox ticked |
| 64 | 0x0040 | CALENDAR_FLAG_WITHOUT_INVITES | Guild Announcement |
| 1024 | 0x0400 | CALENDAR_FLAG_GUILD_EVENT | Event is restricted to guild |
{.dense}

&nbsp;

### time2
Unixtime of: `946681200 (Sat Jan 01 00:00:00 UTC 2000)`

> Not sure, seems constant from the little sniffs we have
{.is-info}


&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/bugreport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'bugreport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'calendar_invites'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
