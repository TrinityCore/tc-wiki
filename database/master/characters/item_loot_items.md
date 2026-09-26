---
title: item_loot_items
description: 
published: true
date: 2024-09-05T22:44:42.850Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:13:33.626Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [container_id](#container_id) | bigint | unsigned | PRI | NO | 0 |  | guid of container (item_instance.guid) |
| [item_type](#item_type) | tinyint | signed | PRI | NO | 0 |  | item or currency |
| [item_id](#item_id) | int | unsigned | PRI | NO | 0 |  | loot item entry (item_instance.itemEntry) |
| [item_count](#item_count) | int | signed |  | NO | 0 |  | stack size |
| [item_index](#item_index) | int | unsigned |  | NO | 0 |  |  |
| [follow_rules](#follow_rules) | tinyint(1) | signed |  | NO | 0 |  | follow loot rules |
| [ffa](#ffa) | tinyint(1) | signed |  | NO | 0 |  | free-for-all |
| [blocked](#blocked) | tinyint(1) | signed |  | NO | 0 |  |  |
| [counted](#counted) | tinyint(1) | signed |  | NO | 0 |  |  |
| [under_threshold](#under_threshold) | tinyint(1) | signed |  | NO | 0 |  |  |
| [needs_quest](#needs_quest) | tinyint(1) | signed |  | NO | 0 |  | quest drop |
| [rnd_bonus](#rnd_bonus) | int | unsigned |  | NO | 0 |  | random bonus list added when originally rolled |
| [context](#context) | tinyint | unsigned |  | NO | 0 |  |  |
| [bonus_list_ids](#bonus_list_ids) | text |  |  | YES | NULL |  | Space separated list of bonus list ids |
&nbsp;
## Description of fields

### container_id
*- no description -*
&nbsp;

### item_type
*- no description -*
&nbsp;

### item_id
*- no description -*
&nbsp;

### item_count
*- no description -*
&nbsp;

### item_index
*- no description -*
&nbsp;

### follow_rules
*- no description -*
&nbsp;

### ffa
*- no description -*
&nbsp;

### blocked
*- no description -*
&nbsp;

### counted
*- no description -*
&nbsp;

### under_threshold
*- no description -*
&nbsp;

### needs_quest
*- no description -*
&nbsp;

### rnd_bonus
*- no description -*
&nbsp;

### context
*- no description -*
&nbsp;

### bonus_list_ids
*- no description -*
&nbsp;

