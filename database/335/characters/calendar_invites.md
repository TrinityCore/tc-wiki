---
title: calendar_invites
description: 
published: true
date: 2023-07-25T00:45:22.529Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:59.248Z
---

<a href="https://trinitycore.info/en/database/335/characters/calendar_events" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_events'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'channels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds player event attendance.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | bigint | unsigned | PRI | NO | 0 |  |  |
| [event](#event) | bigint | unsigned |  | NO | 0 |  |  |
| [invitee](#invitee) | int | unsigned |  | NO | 0 |  |  |
| [sender](#sender) | int | unsigned |  | NO | 0 |  |  |
| [status](#status) | tinyint | unsigned |  | NO | 0 |  |  |
| [statustime](#statustime) | int | unsigned |  | NO | 0 |  |  |
| [rank](#rank) | tinyint | unsigned |  | NO | 0 |  |  |
| [text](#text) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id
The GUID of the invite.
&nbsp;

### event
The [calendar event id](../characters/calendar_events#id) the player belongs to.
&nbsp;

### invitee
[character guid](../characters/characters#guid) of the player invited to the event.
&nbsp;

### sender
[character guid](../characters/characters#guid) of the player handing out the invite.

When creating a new event the owner invites itself (**sender** == **invitee**).
&nbsp;

### status
| ID | Name | Comment |
|----|------|---------|
| 0 | CALENDAR_STATUS_INVITED |  |
| 1 | CALENDAR_STATUS_ACCEPTED |  |
| 2 | CALENDAR_STATUS_DECLINED |  |
| 3 | CALENDAR_STATUS_CONFIRMED |  |
| 4 | CALENDAR_STATUS_OUT |  |
| 5 | CALENDAR_STATUS_STANDBY |  |
| 6 | CALENDAR_STATUS_SIGNED_UP |  |
| 7 | CALENDAR_STATUS_NOT_SIGNED_UP | not saved in db |
| 8 | CALENDAR_STATUS_TENTATIVE |  |
| 9 | CALENDAR_STATUS_REMOVED | not saved in db |
{.dense}

&nbsp;

### statustime
Unixtime of last status change.
&nbsp;

### rank
| ID | Name |
|----|------|
| 0 | CALENDAR_RANK_PLAYER |
| 1 | CALENDAR_RANK_MODERATOR |
| 2 | CALENDAR_RANK_OWNER |
{.dense}

&nbsp;

### text
*- unknown -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/calendar_events" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_events'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'channels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
