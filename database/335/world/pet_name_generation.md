---
title: pet_name_generation
description: 
published: true
date: 2024-05-16T11:19:34.355Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:56.304Z
---

This table holds pieces of names (first and last half) that are use for pet name generation.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [word](#word) | text |  |  | NO |  |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [half](#half) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The ID of the entry. This is an auto increment field and this is an arbitrary number. When adding entries it is best to just let the database pick the next available ID number.
&nbsp;

### word
The name part for this entry.
&nbsp;

### entry
The [creature_template.entry](../world/creature_template#entry) for the creature that you want this part of the name to be generated for.
&nbsp;

### half
This determines whether this is the first or last half of the name for this entry.
* 0: First half
* 1: Last half
    
&nbsp;

