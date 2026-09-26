---
title: instance_template
description:
published: true
date: 2023-04-01T23:57:10.066Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:34.977Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [map](#map) | smallint | unsigned | PRI | NO |  |  |  |
| [parent](#parent) | smallint | unsigned |  | NO |  |  |  |
| [script](#script) | varchar(128) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### map
The map ID of the instance. See [Map.db2](https://wago.tools/db2/Map){target=blank}
&nbsp;

### parent
If the instance is a subinstance of another instance, this field has the parent instance's map ID.
&nbsp;

### script
The name of the instance script that the instance will use and apply (if any).
&nbsp;

