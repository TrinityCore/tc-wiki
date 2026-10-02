---
title: access_requirement
description: 
published: true
date: 2025-11-16T13:34:47.361Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:30.676Z
---

This table contains the access requirements to enter an instance.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [mapId](#mapid) | int | unsigned | PRI | NO |  |  |  |
| [difficulty](#difficulty) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [level_min](#level_min) | tinyint | unsigned |  | NO | 0 |  |  |
| [level_max](#level_max) | tinyint | unsigned |  | NO | 0 |  |  |
| [item_level](#item_level) | smallint | unsigned |  | NO | 0 |  |  |
| [item](#item) | int | unsigned |  | NO | 0 |  |  |
| [item2](#item2) | int | unsigned |  | NO | 0 |  |  |
| [quest_done_A](#quest_done_a) | int | unsigned |  | NO | 0 |  |  |
| [quest_done_H](#quest_done_h) | int | unsigned |  | NO | 0 |  |  |
| [completed_achievement](#completed_achievement) | int | unsigned |  | NO | 0 |  |  |
| [quest_failed_text](#quest_failed_text) | mediumtext |  |  | YES | NULL |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### mapId
The [Map ID](/files/DBC/335/map#id) of the instance.
&nbsp;

### difficulty

<!--@include: @/partial/335/difficulty.md-->

&nbsp;

### level_min
The minimum level that you must be in order to enter the instance.
&nbsp;

### level_max
The maximum level that you can be in order to enter the instance.
&nbsp;

### item_level
The minimum average item level required to enter
 * 219 for Halls of Reflection.
 * 200 for Trial of the Champion, Pit of Saron and The Forge of Souls.
 * 180 for all other WotLK Heroic Dungeons.
&nbsp;

### item
An [item](../world/item_template#entry) that you must have in your inventory to enter the instance. This item can not be in the bank.
&nbsp;

### item2
A second [item](../world/item_template#entry) that you must have in your inventory. This item can not be in the bank.
&nbsp;

### quest_done_A
A [quest](../world/quest_template#id) that you must have completed. This field is only for alliance.
&nbsp;

### quest_done_H
A [quest](../world/quest_template#id) that you must have completed. This field is only for horde.
&nbsp;

### completed_achievement
An [Achievement ID](/files/DBC/335/achievement#id) that must be completed by the player to enter an instance.
&nbsp;

### quest_failed_text
The text that is shown if you try and enter the instance without having completed the quest.
&nbsp;

### comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;
