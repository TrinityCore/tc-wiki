---
title: mail_items
description: 
published: true
date: 2023-07-31T21:36:01.472Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:48.242Z
---

> This table contains data regarding items from [item_instance](../characters/item_instance) which are being sent via email.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [mail_id](#mail_id) | int | unsigned | MUL | NO | 0 |  |  |
| [item_guid](#item_guid) | int | unsigned | PRI | NO | 0 |  |  |
| [receiver](#receiver) | int | unsigned | MUL | NO | 0 |  | Character Global Unique Identifier |
&nbsp;
## Description of fields

### mail_id
references [mail.id](../characters/mail#id)
&nbsp;

### item_guid
[item guid](../characters/item_instance#guid) attached to the mail.
&nbsp;

### receiver
[character guid](../characters/characters#guid) which should receive this item.
&nbsp;

