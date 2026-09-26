---
title: guild_bank_right
description: 
published: true
date: 2024-04-16T19:46:15.688Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:05.790Z
---

> This table hold informations regarding the right guild member have to withdraw, deposit etc at the guild bank.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [rid](#rid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [gbright](#gbright) | tinyint | unsigned |  | NO | 0 |  |  |
| [SlotPerDay](#slotperday) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### TabId
The [TabId](../characters/guild_bank_tab#tabid) this permission belongs to.
&nbsp;

### rid
the guild rank this permission belongs to.
(Range: 0 &ndash; 9)
&nbsp;

### gbright
[`enum GuildBankRights`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Guilds/Guild.h#L177-L185)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | GUILD_BANK_RIGHT_VIEW_TAB |  |
| 2 | 0x02 | GUILD_BANK_RIGHT_PUT_ITEM |  |
| 4 | 0x04 | GUILD_BANK_RIGHT_UPDATE_TEXT | update item name shown when navigating the tab |
| 3 | 0x03 | GUILD_BANK_RIGHT_DEPOSIT_ITEM |  |
| 255 | 0xFF | GUILD_BANK_RIGHT_FULL |  |
{.dense}

&nbsp;

### SlotPerDay
The number of items that a player can withdraw per day (if permissions give him the right to withdraw items).
&nbsp;

