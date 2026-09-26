---
title: banned_addons
description: 
published: true
date: 2022-11-21T21:23:03.225Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:48.666Z
---

> Holds information about interface addons banned serversided.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO |  | auto_increment |  |
| [Name](#name-alt) | varchar(255) |  | MUL | NO |  |  |  |
| [Version](#version) | varchar(255) |  |  | NO | '' |  |  |
| [Timestamp](#timestamp) | timestamp |  |  | NO | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |
&nbsp;
## Description of fields

### Id {#id-alt}
Just acts as primary key for the table.
&nbsp;

### Name {#name-alt}
The AddOn Folder name (or .toc file name, must match anyway), for example "AtlasLoot" 
&nbsp;

### Version
Version from .toc file or leave blank for all versions of that AddOns name.
&nbsp;

### Timestamp
*- no description -*
&nbsp;

