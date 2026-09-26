---
title: group_instance
description: 
published: true
date: 2023-07-30T18:03:56.960Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:49.574Z
---

> Links player groups to an instance.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [instance](#instance) | int | unsigned | PRI | NO | 0 |  |  |
| [permanent](#permanent) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
references [groups.guid](../characters/groups#guid).
&nbsp;

### instance
[instance id](../characters/instance#id) the group is tied to.
&nbsp;

### permanent
* 0: just visiting..
* 1: bound to instance
&nbsp;

