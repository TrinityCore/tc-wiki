---
title: guild_member_withdraw
description: 
published: true
date: 2024-04-16T19:47:41.328Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:16.371Z
---

> This table holds the daily guild bank withdrawal amount in items and money per player as the [slots per day](../characters/guild_bank_right#slotperday) may be limited.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [tab0](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [tab1](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [tab2](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [tab3](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [tab4](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [tab5](#tab0-5) | int | unsigned |  | NO | 0 |  |  |
| [money](#money) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
[character guid](../characters/characters#guid) of the player withdrawing from guild bank.
&nbsp;

### tab\[0-5]
Number of items withdrawn from this tab.
&nbsp;

### money
Amount of money withdrawn from guild bank in copper.
&nbsp;

