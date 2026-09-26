---
title: gameobject_addon
description: 
published: true
date: 2023-10-22T15:47:32.069Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:40.941Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [parent_rotation0](#parent_rotation0) | float |  |  | NO | 0 |  |  |
| [parent_rotation1](#parent_rotation1) | float |  |  | NO | 0 |  |  |
| [parent_rotation2](#parent_rotation2) | float |  |  | NO | 0 |  |  |
| [parent_rotation3](#parent_rotation3) | float |  |  | NO | 1 |  |  |
| [invisibilityType](#invisibilitytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [invisibilityValue](#invisibilityvalue) | int | unsigned |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int | unsigned |  | NO | 0 |  |  |
| [AIAnimKitID](#aianimkitid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

### parent_rotation0
parentRotation.x
-1 <= x <= 1
&nbsp;

### parent_rotation1
parentRotation.y
-1 <= y <= 1
&nbsp;

### parent_rotation2
parentRotation.z
-1 <= z <= 1
&nbsp;

### parent_rotation3
parentRotation.w
-1 <= w <= 1
&nbsp;

### invisibilityType
from [`enum InvisibilityType`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Miscellaneous/SharedDefines.h)
| ID | Name |
|----|------|
| 0 | INVISIBILITY_GENERAL |
| 3 | INVISIBILITY_TRAP |
| 6 | INVISIBILITY_DRUNK |
{.dense}

&nbsp;

### invisibilityValue
The larger the value the harder it is to detect this gameobject.
&nbsp;

### WorldEffectID
*- no description -*
&nbsp;

### AIAnimKitID
*- no description -*
&nbsp;


