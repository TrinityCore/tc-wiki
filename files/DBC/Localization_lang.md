---
title: Localization lang
description: 
published: false
date: 2023-03-04T19:10:54.519Z
tags: 
editor: markdown
dateCreated: 2023-03-04T06:22:32.729Z
---

# TrinityCore : Localization lang
[World](/database/master/world/home)
[DBC](/files/DBC)

**Localization strings numbering**
----------------------------------

This is the list of language/index used when reading string in dbc on in
locales\_\* Trinity table.  
When reading a dbc, all string fields diplayed at client screen are
localized if you use a non US/GB version of the client, to get the
localized strings, you need to read one of the fields next to the
English one.

Use this table to know which column to the right of the English one you
have to read to see localized data.

Note that localization support in core/database support only 8 languages
while dbc can support 16 languages.

**Localization offsets**
------------------------

| **Offset** | **Language**          |
|:----------:|:---------------------:|
| 0          | English               |
| 1          | Korean                |
| 2          | French                |
| 3          | German                |
| 4          | Chinese               |
| 5          | Taiwanese             |
| 6          | Spanish Spain         |
| 7          | Spanish Latin America |
| 8          | Russian               |
| 9          | Unknown               |
| 10         | Unknown               |
| 11         | Unknown               |
| 12         | Unknown               |
| 13         | Unknown               |
| 14         | Unknown               |
| 15         | Unknown               |
