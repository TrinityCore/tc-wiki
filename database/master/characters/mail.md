---
title: mail
description: 
published: true
date: 2021-08-30T09:14:40.981Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/characters/lfg_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Identifier |
| [messageType](#messageType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stationery](#stationery) | tinyint(3) | signed |  | NO | 41 |  |  |
| [mailTemplateId](#mailTemplateId) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [sender](#sender) | bigint(20) | unsigned |  | NO | 0 |  | Character Global Unique Identifier |
| [receiver](#receiver) | bigint(20) | unsigned | MUL | NO | 0 |  | Character Global Unique Identifier |
| [subject](#subject) | longtext |  |  | YES | NULL |  |  |
| [body](#body) | longtext |  |  | YES | NULL |  |  |
| [has_items](#has_items) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [expire_time](#expire_time) | bigint(20) | signed |  | NO | 0 |  |  |
| [deliver_time](#deliver_time) | bigint(20) | signed |  | NO | 0 |  |  |
| [money](#money) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [cod](#cod) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [checked](#checked) | tinyint(3) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### messageType
*- no description -*
&nbsp;

### stationery
*- no description -*
&nbsp;

### mailTemplateId
*- no description -*
&nbsp;

### sender
*- no description -*
&nbsp;

### receiver
*- no description -*
&nbsp;

### subject
*- no description -*
&nbsp;

### body
*- no description -*
&nbsp;

### has_items
*- no description -*
&nbsp;

### expire_time
*- no description -*
&nbsp;

### deliver_time
*- no description -*
&nbsp;

### money
*- no description -*
&nbsp;

### cod
*- no description -*
&nbsp;

### checked
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/characters/lfg_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

