---
title: creature_text_locale
description: 
published: true
date: 2023-03-27T14:45:32.754Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:34.430Z
---

> This is the localization table of [`creature_text`](/database/master/world/creature_text)
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [ID](#id-alt) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Text](#text) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
This entry must be the same as [`creature_text.CreatureID`](/database/master/world/creature_text#CreatureID) and then the row will be used to provide localization support for this creature record.
&nbsp;

### GroupID
This entry must be the same as [`creature_text.GroupID`](/database/master/world/creature_text#GroupID) and then the row will be used to provide localization support for this creature record.
&nbsp;

### ID {#id-alt}
This entry must be the same as [`creature_text.ID`](/database/master/world/creature_text#ID) and then the row will be used to provide localization support for this creature record.
&nbsp;

### Locale
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

### Text
Translated content for [`creature_text.Text`](/database/master/world/creature_text#Text)
&nbsp;

