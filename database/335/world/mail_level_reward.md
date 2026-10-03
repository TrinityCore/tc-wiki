---
title: mail_level_reward
description:
published: true
date: 2024-05-16T11:19:33.814Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:26.013Z
---

On certain levels, the player receives a mail with some text.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [raceMask](#racemask) | int | unsigned | PRI | NO | 0 |  |  |
| [mailTemplateId](#mailtemplateid) | int | unsigned |  | NO | 0 |  |  |
| [senderEntry](#senderentry) | int | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### level
Level required for receiving specific mail
&nbsp;

### raceMask
Players race must match mask to receive mail.
<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### mailTemplateId
[MailTemplate ID](/files/DBC/335/mailtemplate#id-alt) to send.
&nbsp;

### senderEntry
[creature_template.entry](../world/creature_template#entry) used as source of the mail.
&nbsp;
