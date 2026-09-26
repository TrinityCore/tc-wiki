---
title: creature_model_info
description:
published: true
date: 2024-05-16T11:19:31.692Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:31.598Z
---

This table contains all models of mobs, their gender and other information that are model related. This means that when a creature uses another model, this information will change as well.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [DisplayID](#displayid) | int | unsigned | PRI | NO | 0 |  |  |
| [BoundingRadius](#boundingradius) | float |  |  | NO | 0 |  |  |
| [CombatReach](#combatreach) | float |  |  | NO | 0 |  |  |
| [Gender](#gender) | tinyint | unsigned |  | NO | 2 |  |  |
| [DisplayID_Other_Gender](#displayid_other_gender) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### DisplayID
references [CreatureDisplayInfo ID](/files/DBC/335/creaturedisplayinfo#id)
&nbsp;

### BoundingRadius
This is the distance the creature stands from the player to attack him while in melee.
&nbsp;

### CombatReach
This is the maximum distance the creature can reach the player in ranged attack.
&nbsp;

### Gender
Gender of the creature
* 0: Male
* 1: Female
* 2: None

Note: do not modify this field without sniffs or talking to Kinzcool before (ref commit: http://git.io/T7RLmA).
&nbsp;

### DisplayID_Other_Gender
Point to [creature_model_info.DisplayID](../world/creature_model_info#displayid).
When the entry is gender male (0) or female (1), this value can point to the opposite gender counterpart.
&nbsp;

