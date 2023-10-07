---
title: Lock.dbc
description: 
published: true
date: 2023-10-07T21:22:35.042Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:05:24.618Z
---

<a href="https://trinitycore.info/files/DBC/335/loadingscreentaxisplines" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LoadingScreenTaxiSplines'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/locktype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LockType'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Lock.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lock&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Lock)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Type_0](#type) | uint32 |  |
| 2 | [Type_1](#type) | uint32 |  |
| 3 | [Type_2](#type) | uint32 |  |
| 4 | [Type_3](#type) | uint32 |  |
| 5 | [Type_4](#type) | uint32 |  |
| 6 | [Type_5](#type) | uint32 |  |
| 7 | [Type_6](#type) | uint32 |  |
| 8 | [Type_7](#type) | uint32 |  |
| 9 | [Index_0](#index) | uint32 |  |
| 10 | [Index_1](#index) | uint32 |  |
| 11 | [Index_2](#index) | uint32 |  |
| 12 | [Index_3](#index) | uint32 |  |
| 13 | [Index_4](#index) | uint32 |  |
| 14 | [Index_5](#index) | uint32 |  |
| 15 | [Index_6](#index) | uint32 |  |
| 16 | [Index_7](#index) | uint32 |  |
| 17 | [Skill_0](#skill) | uint32 |  |
| 18 | [Skill_1](#skill) | uint32 |  |
| 19 | [Skill_2](#skill) | uint32 |  |
| 20 | [Skill_3](#skill) | uint32 |  |
| 21 | [Skill_4](#skill) | uint32 |  |
| 22 | [Skill_5](#skill) | uint32 |  |
| 23 | [Skill_6](#skill) | uint32 |  |
| 24 | [Skill_7](#skill) | uint32 |  |
| 25 | [Action_0](#action) | uint32 |  |
| 26 | [Action_1](#action) | uint32 |  |
| 27 | [Action_2](#action) | uint32 |  |
| 28 | [Action_3](#action) | uint32 |  |
| 29 | [Action_4](#action) | uint32 |  |
| 30 | [Action_5](#action) | uint32 |  |
| 31 | [Action_6](#action) | uint32 |  |
| 32 | [Action_7](#action) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Type
<code>Col: 1 &ndash; 8 (uint32)</code>

[`enum LockKeyType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L2621-L2627)
| ID | Name |
|:--:|------|
| 0 | LOCK_KEY_NONE |
| 1 | LOCK_KEY_ITEM |
| 2 | LOCK_KEY_SKILL |
| 3 | LOCK_KEY_SPELL |
{.dense}

&nbsp;

### Index
<code>Col: 9 &ndash; 16 (uint32)</code>

Dependant on **Type**:
| Type | Name | **Index** |
|:----:|------|------------|
| 1 | LOCK_KEY_ITEM | [item entry](/database/335/world/item_template#id) |
| 2 | LOCK_KEY_SKILL | [LockType ID](/files/DBC/335/locktype#id) |
| 3 | LOCK_KEY_SPELL | [Spell ID](/files/DBC/335/spell#id) |
{.dense}

&nbsp;

### Skill
<code>Col: 17 &ndash; 24 (uint32)</code>

Only for **Type** LOCK_KEY_SKILL (2):
The required skill amount.
&nbsp;

### Action
:x: <code>Col: 25 &ndash; 32 (uint32)</code>

| ID | Comment |
|:--:|---------|
| 0 | Open |
| 1 | Open-Unlock |
| 2 | Close |
| 3 | Destroy |
| 4 | Rebuild |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/loadingscreentaxisplines" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LoadingScreenTaxiSplines'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/locktype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LockType'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
