---
title: pickpocketing_loot_template
description: 
published: true
date: 2023-10-22T16:20:01.585Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:29.100Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [Item](#item) | int | unsigned | PRI | NO | 0 |  |  |
| [Reference](#reference) | int | unsigned |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 100 |  |  |
| [QuestRequired](#questrequired) | tinyint(1) | signed |  | NO | 0 |  |  |
| [LootMode](#lootmode) | smallint | unsigned |  | NO | 1 |  |  |
| [GroupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCount](#mincount) | tinyint | unsigned |  | NO | 1 |  |  |
| [MaxCount](#maxcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

> Click the button for desription: 
{.is-info}

&nbsp;

