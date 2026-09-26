---
title: exploration_basexp
description: 
published: true
date: 2024-05-16T11:19:32.389Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:20.225Z
---

This table holds the base experience point information needed for when a player explores a new zone.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [basexp](#basexp) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### level
The player level.
&nbsp;

### basexp
The base experience the player will receive when he or she discovers a new zone at the level specified in the level field.
&nbsp;

