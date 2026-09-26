---
title: linked_respawn
description: 
published: true
date: 2022-11-21T21:06:14.226Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:53.049Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [linkedGuid](#linkedguid) | bigint | unsigned |  | NO | 0 |  |  |
| [linkType](#linktype) | tinyint | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
This is the guid of the [creature](../world/creature#guid) or [gameobject](../world/gameobject#guid) you want to link.
&nbsp;

### linkedGuid
This is the guid of the [creature](../world/creature#guid) or [gameobject](../world/gameobject#guid) (boss most likely) that you want to link to.
&nbsp;

### linkType
| Value | Dependent | Master |
|-------|-----------|--------|
| 0 | creature | creature |
| 1 | creature | gameobject |
| 2 | gameobject | gameobject |
| 3 | gameobject | creature |
{.dense}

&nbsp;


