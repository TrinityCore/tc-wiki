---
title: gameobject_template_locale
description: 
published: true
date: 2023-04-02T00:14:04.393Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:01.684Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
| [castBarCaption](#castbarcaption) | mediumtext |  |  | YES | NULL |  |  |
| [unk1](#unk1) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
Entry of the gameobject, see [`gameobject_template.entry`](/database/master/world/gameobject_template#entry)
&nbsp;

### locale
|Value|Locale|
|:---:|:---: |
|deDE|German|
|esES|Spanish|
|esMX|Spanish (Latin American)|
|frFR|French|
|itIT|Italian|
|koKR|Korean|
|ptBR|Portuguese|
|ruRU|Russian|
|zhCN|Chinese (China)|
|zhTW|Chinese (Taiwan/Traditional)|
&nbsp;

### name {#name-alt}
Name for the related `locale`
&nbsp;

### castBarCaption
CastBarCaption for the related `locale`
&nbsp;

### unk1
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

