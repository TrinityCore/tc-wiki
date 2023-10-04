---
title: gm_ticket
description:
published: true
date: 2023-07-30T17:50:53.633Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:46.758Z
---

<a href="https://trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_survey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table stores all tickets.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  | auto_increment |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  | 0 open, 1 closed, 2 character deleted |
| [playerGuid](#playerguid) | int | unsigned |  | NO | 0 |  | Global Unique Identifier of ticket creator |
| [name](#name) | varchar(12) |  |  | NO |  |  | Name of ticket creator |
| [description](#description) | text |  |  | NO |  |  |  |
| [createTime](#createtime) | int | unsigned |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [lastModifiedTime](#lastmodifiedtime) | int | unsigned |  | NO | 0 |  |  |
| [closedBy](#closedby) | int | signed |  | NO | 0 |  |  |
| [assignedTo](#assignedto) | int | unsigned |  | NO | 0 |  | GUID of admin to whom ticket is assigned |
| [comment](#comment) | text |  |  | NO |  |  |  |
| [response](#response) | text |  |  | NO |  |  |  |
| [completed](#completed) | tinyint | unsigned |  | NO | 0 |  |  |
| [escalated](#escalated) | tinyint | unsigned |  | NO | 0 |  |  |
| [viewed](#viewed) | tinyint | unsigned |  | NO | 0 |  |  |
| [needMoreHelp](#needmorehelp) | tinyint | unsigned |  | NO | 0 |  |  |
| [resolvedBy](#resolvedby) | int | signed |  | NO | 0 |  | GUID of GM who resolved the ticket |
&nbsp;
## Description of fields

### id
Unique ticket enumerator.
&nbsp;

### type
| ID | Name |
|----|------|
| 0 | TICKET_TYPE_OPEN |
| 1 | TICKET_TYPE_CLOSED |
| 2 | TICKET_TYPE_CHARACTER_DELETED |
{.dense}

&nbsp;

### playerGuid
The [guid](../characters/characters#guid) of the reporting character.
&nbsp;

### name
The [character name](../characters/characters#name), who created that ticket.
&nbsp;

### description
The content of the ticket.
&nbsp;

### createTime
Unix timestamp when the ticket was submitted.
&nbsp;

### mapId
[Map ID](/files/DBC/335/map#id) where ticket has ben created.
&nbsp;

### posX
Position X where ticket has ben created.
&nbsp;

### posY
Position Y where ticket has ben created.
&nbsp;

### posZ
Position Z where ticket has ben created.
&nbsp;

### lastModifiedTime
Unix timestamp when the ticket was closed or deleted by the issuer.
&nbsp;

### closedBy
* 0: ticket is open or was closed by console.
* \>0: [character guid](../characters/characters#guid) of the closing GM or issuer.
&nbsp;

### assignedTo
[character guid](../characters/characters#guid) of the assigned GM, if any.
&nbsp;

### comment
The GM comment to the ticket, only visible to game masters.
&nbsp;

### response
The GMs response to the ticket issuer.
&nbsp;

### completed
Successful resolution?
* 0: not resolved
* 1: resolved
&nbsp;

### escalated
| ID | Name | Comment|
|----|------|--------|
| 0 | TICKET_UNASSIGNED | ticket is not currently assigned to a gm |
| 1 | TICKET_ASSIGNED | ticket is assigned to a normal gm |
| 2 | TICKET_IN_ESCALATION_QUEUE | ticket is in the escalation queue |
| 3 | TICKET_ESCALATED_ASSIGNED | is a custom value and should never actually be sent |
{.dense}

&nbsp;

### viewed
* 0: Not yet viewed
* 1: Ticket has been opened by GM
&nbsp;

### needMoreHelp
Requests further GM interaction on a ticket to which a GM has already responded. Basically means "has a new ticket"
* 0: player consideres issue resolved
* 1: player needs followup ticket
&nbsp;

### resolvedBy
* 0: ticket is open or was closed by console.
* \>0: [character guid](../characters/characters#guid) of the GM who resolved it by closing or completing the ticket.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/gm_survey" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gm_survey'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/group_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'group_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
