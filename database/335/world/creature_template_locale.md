---
title: creature_template_locale
description: 
published: true
date: 2024-07-12T10:40:26.173Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:56.062Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
| [Title](#title) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
This entry must be the same as [creature_template.entry](/database/335/world/creature_template#entry) and then the row will be used to provide localization support for this creature record.
&nbsp;

### locale
[Localization](/how-to/localization):
| locale | Name |
| :---: | :---: |
|deDE|German|
|esES|Spanish (EU)|
|esMX|Spanish (Latin America)|
|frFR|French|
|koKR|Korean|
|ruRU|Russian|
|zhCN|Chinese (China)|
|zhTW|Chinese (Taiwan/Traditional)|
{.dense}

&nbsp;

### Name {#name-alt}
Translated content for [creature_template.name](/database/335/world/creature_template#name-alt) field
&nbsp;

### Title
Translated content for [creature_template.subname](/database/335/world/creature_template#subname) field
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

