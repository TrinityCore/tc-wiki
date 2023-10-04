---
title: mail
description:
published: true
date: 2023-07-31T21:33:06.629Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:45.503Z
---

<a href="https://trinitycore.info/en/database/335/characters/lfg_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table contains main data about all mails in the game.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [messageType](#messagetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [stationery](#stationery) | tinyint | signed |  | NO | 41 |  |  |
| [mailTemplateId](#mailtemplateid) | smallint | unsigned |  | NO | 0 |  |  |
| [sender](#sender) | int | unsigned |  | NO | 0 |  | Character Global Unique Identifier |
| [receiver](#receiver) | int | unsigned | MUL | NO | 0 |  | Character Global Unique Identifier |
| [subject](#subject) | longtext |  |  | YES | NULL |  |  |
| [body](#body) | longtext |  |  | YES | NULL |  |  |
| [has_items](#has_items) | tinyint | unsigned |  | NO | 0 |  |  |
| [expire_time](#expire_time) | int | unsigned |  | NO | 0 |  |  |
| [deliver_time](#deliver_time) | int | unsigned |  | NO | 0 |  |  |
| [money](#money) | int | unsigned |  | NO | 0 |  |  |
| [cod](#cod) | int | unsigned |  | NO | 0 |  |  |
| [checked](#checked) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
This field contains the unique ID across all messages.
&nbsp;

### messageType
`enum MailMessageType`
| ID | Name | Comment |
|----|------|---------|
| 0 | MAIL_NORMAL |  |
| 2 | MAIL_AUCTION | send by auction house |
| 3 | MAIL_CREATURE | send by npc |
| 4 | MAIL_GAMEOBJECT | send by object |
| 5 | MAIL_CALENDAR | calendar event notification |
{.dense}

&nbsp;

### stationery
Defines the background texture of the mail.

`enum MailStationery` gathered from [Stationery ID](/files/DBC/335/stationery#id)
| ID | Name | Comment |
|----|------|---------|
| 1 | MAIL_STATIONERY_TEST |  |
| 41 | MAIL_STATIONERY_DEFAULT |  |
| 61 | MAIL_STATIONERY_GM |  |
| 62 | MAIL_STATIONERY_AUCTION |  |
| 64 | MAIL_STATIONERY_VAL | Valentine |
| 65 | MAIL_STATIONERY_CHR | Christmas |
| 67 | MAIL_STATIONERY_ORP | Orphan |
{.dense}

&nbsp;

### mailTemplateId
[MailTemplate ID](/files/DBC/335/mailtemplate#id) if available.
&nbsp;

### sender
Can be one of:
* [character guid](../characters/characters#guid)
* [AuctionHouse ID](/files/DBC/335/auctionhouse#id)
* [creature entry](../world/creature_template#entry)
* [gameobject entry](../gameobject_template#entry)
* [calendar event id](../characters/calendar_events#id)
* 0 (unknown sender case)
&nbsp;

### receiver
[character guid](../characters/characters#guid) of the receiving player.
&nbsp;

### subject
The mail subject is stored here.
&nbsp;

### body
The text contained in the mail.
&nbsp;

### has_items
Flag if the mail can contain items.
* 0: no items attached
* 1: check [mail_items](../characters/mail_items)
&nbsp;

### expire_time
Unix timestamp storing when the mail will be returned to sender. (or deleted if already returned or sent by non-player)
&nbsp;

### deliver_time
Unix timestamp when the mail will be received.
Affected by worldserver.conf [`MailDeliveryDelay`](https://trinitycore.info/en/files/configuration/home)
&nbsp;

### money
Amount of copper either as attached or 'Cash On Delivery'
&nbsp;

### cod
Determines if **money** is an attachment or COD due.
* 0: money attachment
* 1: COD to be paid
&nbsp;

### checked
`enum MailCheckMask`
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x00 | MAIL_CHECK_MASK_NONE |  |
| 1 | 0x01 | MAIL_CHECK_MASK_READ |  |
| 2 | 0x02 | MAIL_CHECK_MASK_RETURNED | This mail was returned. Do not allow returning mail back again. |
| 4 | 0x04 | MAIL_CHECK_MASK_COPIED | This mail was copied. Do not allow making a copy of items in mail. |
| 8 | 0x08 | MAIL_CHECK_MASK_COD_PAYMENT |  |
| 16 | 0x10 | MAIL_CHECK_MASK_HAS_BODY | This mail has body text. |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/lfg_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lfg_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/mail_items" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_items'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
