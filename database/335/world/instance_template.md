---
title: instance_template
description:
published: true
date: 2023-07-10T23:41:05.050Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:58.377Z
---

This table has all the templates for every instance. When a group enters an instance, a new copy of that instance is made from the values in these fields.

If you want to change the spot you will start in when you enter/leave an instance, go to [areatrigger_teleport](../world/areatrigger_teleport).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [map](#map) | smallint | unsigned | PRI | NO |  |  |  |
| [parent](#parent) | smallint | unsigned |  | NO |  |  |  |
| [script](#script) | varchar(128) |  |  | NO | '' |  |  |
| [allowMount](#allowmount) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### map
The [Map ID](/files/DBC/335/map#id) of the instance.
&nbsp;

### parent
If the instance is a subinstance of another instance, this field has the parent instance's map ID.
&nbsp;

### script
The name of the instance script that the instance will use and apply (if any).
&nbsp;

### allowMount
* 0: you can't enter on mount and get dismounted on enter
* 1: you can enter on mount and will not get dismounted on enter
&nbsp;

