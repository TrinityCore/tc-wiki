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
| Value | Flag | Name |
|-------|------|------|
|     1 | 0x0001 | Human     |
|     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |
|     8 | 0x0008 | Night Elf |
|    16 | 0x0010 | Undead    |
|    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |
|   128 | 0x0080 | Troll     |
|   512 | 0x0200 | Blood Elf |
|  1024 | 0x0400 | Draenei   |
{.dense}

&nbsp;

### mailTemplateId
[MailTemplate ID](/files/DBC/335/mailtemplate#id) to send.
&nbsp;

### senderEntry
[creature_template.entry](../world/creature_template#entry) used as source of the mail.
&nbsp;

