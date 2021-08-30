---
title: calendar_invites
description: 
published: true
date: 2021-08-30T08:26:07.663Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:17:42.777Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/calendar_events" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_events'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'channels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [InviteID](#InviteID) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [EventID](#EventID) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [Invitee](#Invitee) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [Sender](#Sender) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [Status](#Status) | tinyint(1) | unsigned |  | NO | 0 |  |  |
| [ResponseTime](#ResponseTime) | bigint(20) | signed |  | NO | 0 |  |  |
| [ModerationRank](#ModerationRank) | tinyint(1) | unsigned |  | NO | 0 |  |  |
| [Note](#Note) | varchar(255) | signed |  | NO | '' |  |  |
&nbsp;
## Description of fields

### InviteID
*- no description -*
&nbsp;

### EventID
*- no description -*
&nbsp;

### Invitee
*- no description -*
&nbsp;

### Sender
*- no description -*
&nbsp;

### Status
*- no description -*
&nbsp;

### ResponseTime
*- no description -*
&nbsp;

### ModerationRank
*- no description -*
&nbsp;

### Note
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/characters/calendar_events" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'calendar_events'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'channels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

