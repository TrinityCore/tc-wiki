---
title: character_action
description:
published: true
date: 2023-07-25T18:54:11.064Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:12.388Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_achievement_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_achievement_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_arena_stats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains all the individual button data for each character. A button is any of the places in the GUI where you can place for example a spell, item, or macro as a shortcut.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [spec](#spec) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [button](#button) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [action](#action) | int | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### spec
* 0: first spec
* 1: second spec
&nbsp;

### button
The ID of the button on the action bar where the action icon will be placed.
Special bars are used for stances, auras, pets, stealth, and other similar special modes.

Possible Values:
| button | Set (key) |
|--------|-----------|
| 1-11 | 1 (SHIFT + 1) |
| 12-23 | 2 (SHIFT + 2) |
| 24-35 | 3 (SHIFT + 3) Right Side Bar |
| 36-47 | 4 (SHIFT + 4) Right Side Bar 2 |
| 48-59 | 5 (SHIFT + 5) Bottom Right Bar |
| 60-71 | 6 (SHIFT + 6) Bottom Left Bar |
| 72-83 | 1 SpecialA |
| 84-95 | 1 SpecialB |
| 96-107 | 1 SpecialC |
| 108-119 | 1 SpecialD |
{.dense}

&nbsp;

### type
The type of action

### action
The content of **action** depends on the **type**

| type | Flag | Name | Comment | action |
|------|------|------|---------|--------|
| 0 | 0x00 | ACTION_BUTTON_SPELL | Spell | [Spell ID](/files/DBC/335/spell#id)
| 1 | 0x01 | ACTION_BUTTON_C | Click |  |
| 32 | 0x20 | ACTION_BUTTON_EQSET | Equipment Set | Set ID |
| 64 | 0x40 | ACTION_BUTTON_MACRO | Macro | Macro ID |
| 65 | 0x41 | ACTION_BUTTON_CMACRO | Click+Macro |  |
| 128 | 0x80 | ACTION_BUTTON_ITEM | Item | [item entry](../world/item_template#entry) |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_achievement_progress" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_achievement_progress'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_arena_stats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_arena_stats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
