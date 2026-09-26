---
title: quest_tracker
description: 
published: true
date: 2025-09-15T11:24:17.872Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:12.278Z
---

> Stores quest completion and abandonment data to help finding out bugged quests.
>
> requires worldserver.conf [`Quests.EnableQuestTracker = 1`](/files/configuration/home)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned |  | NO | 0 |  |  |
| [character_guid](#character_guid) | int | unsigned |  | NO | 0 |  |  |
| [quest_accept_time](#quest_accept_time) | datetime |  |  | NO |  |  |  |
| [quest_complete_time](#quest_complete_time) | datetime |  |  | YES | NULL |  |  |
| [quest_abandon_time](#quest_abandon_time) | datetime |  |  | YES | NULL |  |  |
| [completed_by_gm](#completed_by_gm) | tinyint(1) | signed |  | NO | 0 |  |  |
| [core_hash](#core_hash) | varchar(120) |  |  | NO | 0 |  |  |
| [core_revision](#core_revision) | varchar(120) |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The tracked [quest ID](../world/quest_template#id).
&nbsp;

### character_guid
The [character guid](../characters/characters#guid) on the quest.
&nbsp;

### quest_accept_time
Unix timestamp when the quest was accepted.
&nbsp;

### quest_complete_time
Unix timestamp when the quest was completed.
&nbsp;

### quest_abandon_time
Unix timestamp when the quest was abandoned.
&nbsp;

### completed_by_gm
Flag if `.quest complete` command was used.
* 0: player completed the quest on his own
* 1: GM completed the quest for the player
&nbsp;

### core_hash
current `_HASH` (see revision_data.h)
&nbsp;

### core_revision
current `_DATE` (see revision_data.h)
&nbsp;

