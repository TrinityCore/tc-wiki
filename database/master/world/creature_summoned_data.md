---
title: creature_summoned_data
description: 
published: true
date: 2024-02-11T20:06:07.582Z
tags: 
editor: markdown
dateCreated: 2022-07-03T15:50:59.544Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [CreatureIDVisibleToSummoner](#creatureidvisibletosummoner) | int | signed |  | YES | NULL |  |  |
| [GroundMountDisplayID](#groundmountdisplayid) | int | unsigned |  | YES | NULL |  |  |
| [FlyingMountDisplayID](#flyingmountdisplayid) | int | unsigned |  | YES | NULL |  |  |
| [DespawnOnQuestsRemoved](#despawnonquestsremoved) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
This is the CreatureID seen by anyone but the summoner.
&nbsp;

### CreatureIDVisibleToSummoner
This is the CreatureID seen by the summoner but everyone else.
&nbsp;

### GroundMountDisplayID
This is the ground mount displayID that the creature will use if the summoner mounts up and uses non-flying speed while mounted. In other words, this will be the default choice until the player takes off if flying is available.
&nbsp;

### FlyingMountDisplayID
This is the flight mount displayID that the creature will use if the summoner mounts up and uses flying speed while mounted. In other words, this will be the the default choice until the player lands.
&nbsp;

### DespawnOnQuestsRemoved
*- no description -*
&nbsp;

