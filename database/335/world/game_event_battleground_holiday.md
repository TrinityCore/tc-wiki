---
title: game_event_battleground_holiday
description:
published: true
date: 2023-07-09T17:43:59.383Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:31.059Z
---

This table is used to add a holiday to a battleground, for things like extra reputation / honor.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [EventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | game_event EventEntry identifier |
| [BattlegroundID](#battlegroundid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### EventEntry
refers to [game_event.EventEntry](../world/game_event#evententry)
&nbsp;

### BattlegroundID

<!--@include: @/partial/335/battlemaster-list.md-->

&nbsp;
