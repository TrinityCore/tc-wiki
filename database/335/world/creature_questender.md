---
title: creature_questender
description: 
published: true
date: 2024-05-16T11:19:31.722Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:39.647Z
---

Holds NPC quest ender relations on which NPCs finishes which quests.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
&nbsp;
## Description of fields

### id {#id-alt}
The ID of the creature. See [creature_template.entry](../world/creature_template#entry)
&nbsp;

### quest
The quest ID that the creature finishes. See [quest_template.ID](../world/quest_template#id)
&nbsp;

