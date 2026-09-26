---
title: warden_action
description: 
published: true
date: 2024-04-16T20:02:35.241Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:25.427Z
---

> This table defines the cores behavior against clients that fail Warden checks.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [wardenId](#wardenid) | smallint | unsigned | PRI | NO |  |  |  |
| [action](#action-alt) | tinyint | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### wardenId
references [warden_checks.id](../world/warden_checks#id)
&nbsp;

### action {#action-alt}
[`enum WardenActions`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Warden/WardenCheckMgr.h#L28-L33)
| ID | Name |
|----|------|
| 0 | WARDEN_ACTION_LOG |
| 1 | WARDEN_ACTION_KICK |
| 2 | WARDEN_ACTION_BAN |
{.dense}

&nbsp;

