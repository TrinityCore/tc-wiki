---
title: item_soulbound_trade_data
description: 
published: true
date: 2023-07-31T19:58:23.714Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:37.733Z
---

> This table stores information about which players can trade soulbound items between each other.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [itemGuid](#itemguid) | int | unsigned | PRI | NO |  |  | Item GUID |
| [allowedPlayers](#allowedplayers) | text |  |  | NO |  |  | Space separated GUID list of players who can receive this item in trade |
&nbsp;
## Description of fields

### itemGuid
The souldbound [item guid](../characters/item_instance#guid) that can be traded.
&nbsp;

### allowedPlayers
Speace separated list of [character guids](../characters/characters#guid) that are eligible to trade.
&nbsp;

