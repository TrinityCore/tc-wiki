---
title: gameobject_addon
description: 
published: true
date: 2024-04-16T17:08:14.087Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:14.318Z
---

This table provides additional parameters to each gameobject on a per spawn basis.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [parent_rotation0](#parent_rotation0) | float |  |  | NO | 0 |  |  |
| [parent_rotation1](#parent_rotation1) | float |  |  | NO | 0 |  |  |
| [parent_rotation2](#parent_rotation2) | float |  |  | NO | 0 |  |  |
| [parent_rotation3](#parent_rotation3) | float |  |  | NO | 1 |  |  |
| [invisibilityType](#invisibilitytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [invisibilityValue](#invisibilityvalue) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

### parent_rotation0
parentRotation.x
`-1 <= x <= 1`
&nbsp;

### parent_rotation1
parentRotation.y
`-1 <= y <= 1`
&nbsp;

### parent_rotation2
parentRotation.z
`-1 <= z <= 1`
&nbsp;

### parent_rotation3
parentRotation.w
`-1 <= w <= 1`
&nbsp;

### invisibilityType
excerpt from [`enum InvisibilityType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1281-L1297)
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

