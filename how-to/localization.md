---
title: Localization
description:
published: true
date: 2023-09-07T22:00:00.000Z
tags:
editor: markdown
dateCreated: 2023-03-04T06:22:32.729Z
---

# Localization

This is the list of locale codes/indizes used when reading string in dbc or in \*\_locale Trinity table.
&nbsp;

## DBCs

When reading a dbc, all string fields diplayed at client screen are localized if you use a non US/GB version of the client. To get the localized strings, you need to read one of the fields next to the english one.
Use this table to know which column to the right of the English one you have to read to see localized data. The strings block is always followed by a bitmask/flags field of unknown purpose.

> Note: From client version 4.x onwards only a single column is used that contains the string in the clients locale.
{.is-info}

&nbsp;

## Trinity Database

When reading a \*\_locale table from database, the localized string can be fetched by matching the locale string to the locale column.

> Note: The core/database [support only 8 languages](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/common/Common.h#L47-L59) while dbc can support 16 languages.
{.is-info}

&nbsp;

## Localization offsets

| DBC col. offset | TC locale | alt. locale | comment |
| :---: | :---: | :---: | :--- |
| 0 | `enUS` | enGB | English (US / EU) |
| 1 | `koKR` |  | Korean |
| 2 | `frFR` |  | French |
| 3 | `deDE` |  | German |
| 4 | `zhCN` | enCN | Chinese (Traditional / Simplified) |
| 5 | `zhTW` | enTW | Taiwanese (Traditional / Simplified) |
| 6 | `esES` |  | Spanish (EU) |
| 7 | `esMX` |  | Spanish (Latin America) |
| 8 | `ruRU` |  | Russian |
| 9 | `jaJP` |  | :x: Japanese^(unsure)^ |
| 10 | `ptPT` | ptBR | :x: Portugese (EU / Latin America) |
| 11 | `itIT` |  | :x: Italian |
| 12 |  |  | Unknown |
| 13 |  |  | Unknown |
| 14 |  |  | Unknown |
| 15 |  |  | Unknown |
| 16 | - | - | lang ref flags |
{.dense}
