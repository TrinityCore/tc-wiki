---
title: calendar_events
description: 
published: true
date: 2022-11-21T20:59:24.374Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:17:23.993Z
---

<a href="https://trinitycore.info/en/database/master/characters/bugreport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'bugreport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'calendar_invites'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [EventID](#eventid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [Owner](#owner) | bigint | unsigned |  | NO | 0 |  |  |
| [Title](#title) | varchar(255) |  |  | NO | '' |  |  |
| [Description](#description) | varchar(255) |  |  | NO | '' |  |  |
| [EventType](#eventtype) | tinyint | unsigned |  | NO | 4 |  |  |
| [TextureID](#textureid) | int | signed |  | NO | -1 |  |  |
| [Date](#date) | bigint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [LockDate](#lockdate) | bigint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### EventID
*- no description -*
&nbsp;

### Owner
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### EventType
*- no description -*
&nbsp;

### TextureID
*- no description -*
&nbsp;

### Date
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### LockDate
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/bugreport" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'bugreport'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/calendar_invites" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'calendar_invites'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
