---
title: DeclinedWordCases.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# DeclinedWordCases.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DeclinedWordCases)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [DeclinedWordID](#declinedwordid) | uint32 | [DeclinedWord.dbc/0](/files/DBC/335/declinedword#id-alt) |
| 2 | [CaseIndex](#caseindex) | uint32 |  |
| 3 | [DeclinedWord](#declinedword) | string |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### DeclinedWordID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### CaseIndex
:x: <code>Col: 2 (uint32)</code>

* 1: Nominative
* 2: Genitive
* 3: Dative
* 4: Accusative
* 5: Ablative
* 6: ?
* 7: ?
* 8: ?
* 9: ?
* 10: ?
&nbsp;

### DeclinedWord
:x: <code>Col: 3 (string)</code>

*- no description -*
&nbsp;

