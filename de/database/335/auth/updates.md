---
title: updates
description: 
published: true
date: 2021-09-07T11:42:24.998Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:16.838Z
---

<a href="https://trinitycore.info/de/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'secret_digest'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates_include'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> List of all applied updates in this database.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [name](#name) | varchar(200) | signed | PRI | NO |  |  | filename with extension of the update. |
| [hash](#hash) | char(40) | signed |  | YES | '' |  | sha1 hash of the sql file. |
| [state](#state) | enum(<br />'RELEASED',<br />'ARCHIVED') |  | NO | RELEASED |  | defines if an update is released or archived. |
| [timestamp](#timestamp) | timestamp | signed |  | NO | CURRENT_TIMESTAMP |  | timestamp when the query was applied. |
| [speed](#speed) | int(10) | unsigned |  | NO | 0 |  | time the query takes to apply in ms. |
&nbsp;
## Description of fields

### name
Filename with extension of the update.
&nbsp;

### hash
sha1 hash of the sql file.
&nbsp;

### state
Defines if an update is released or archived.
&nbsp;

### timestamp
Timestamp when the query was applied.
&nbsp;

### speed
Time the query takes to apply in ms.
&nbsp;

<a href="https://trinitycore.info/de/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'secret_digest'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/335/auth/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates_include'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

