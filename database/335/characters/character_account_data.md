---
title: character_account_data
description: 
published: true
date: 2023-07-25T18:12:57.357Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:04.555Z
---

> Contains data about character settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [data](#data) | blob |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
[character guid](../characters/characters#guid) the data belongs to.
&nbsp;

### type
AccountDataType of this entry.
| ID | Name | Comment |
|----|------|---------|
| 1 | PER_CHARACTER_CONFIG_CACHE | Config cache per character |
| 3 | PER_CHARACTER_BINDINGS_CACHE | Bindings cache per character |
| 5 | PER_CHARACTER_MACROS_CACHE | Macros cache per character |
| 6 | PER_CHARACTER_LAYOUT_CACHE | Layout cache per character |
| 7 | PER_CHARACTER_CHAT_CACHE | Chat cache per character |
{.dense}

&nbsp;

### time
Time of last modification in Unixtime
&nbsp;

### data
No description can be written. You just must understand it's data.
&nbsp;

