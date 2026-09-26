---
title: guild_bank_item
description: 
published: true
date: 2023-07-30T22:57:43.298Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:03.136Z
---

> This table holds all item information for items that are stored in the guild bank.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [SlotId](#slotid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [item_guid](#item_guid) | int | unsigned | MUL | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### TabId
The [TabId](../characters/guild_bank_tab#tabid) where the item is currently placed in.
(Range: 0 – 5)
&nbsp;

### SlotId
The slot inside the tab where the item is currently placed in.
(Range: 0 – 97)
&nbsp;

### item_guid
The [item guid](../characters/item_instance#guid) of the stored item.
&nbsp;

