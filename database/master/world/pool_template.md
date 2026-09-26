---
title: pool_template
description: 
published: true
date: 2026-02-08T17:09:08.514Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:49.800Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Pool entry |
| [max_limit](#max_limit) | int | unsigned |  | NO | 0 |  | Max number of objects (0) is no limit |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
The pool ID. This is an arbitrary number that is only used to link the gameobjects, creatures or quests in this pool.

| Expansion       | ID start range |
| ---------------------------- | -------------- |
| Vanilla (1.x)                | < 100000       |
| The Burning Crusade (2.X)    | 100000         |
| Wrath of the Lichking (3.X)  | 200000         |
| Cataclysm (4.X)              | 300000         |
| Mists of Pandaria (5.X)      | 400000         |
| Warlords of Dreanor (6.X)    | 500000         |
| Legion (7.X)                 | 600000         |
| Battle for Azeroth (8.X)     | 700000         |
| Shadowlands (9.X)            | 800000         |
| Dragonflight (10.X)          | 900000					|
| The War Within (11.X)				 | 1000000				|
| Midnight (12.X)							 | 1100000				|
&nbsp;

### max_limit
This is the maximum number of objects that should be spawned in this pool.
0 is no limit.
&nbsp;

### description
Field describes the basic information about what the pool refers to. 
Example: `Snarlflare (14272)`
&nbsp;

