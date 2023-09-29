---
title: SpellShapeshiftForm.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellrunecost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellRuneCost'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisual'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellShapeshiftForm.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellshapeshiftform&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellShapeshiftForm)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [BonusActionBar](#bonusactionbar) | uint32 |  |
| 2 | [Name_0](#name) | string |  |
| 3 | [Name_1](#name) | string |  |
| 4 | [Name_2](#name) | string |  |
| 5 | [Name_3](#name) | string |  |
| 6 | [Name_4](#name) | string |  |
| 7 | [Name_5](#name) | string |  |
| 8 | [Name_6](#name) | string |  |
| 9 | [Name_7](#name) | string |  |
| 10 | [Name_8](#name) | string |  |
| 11 | [Name_9](#name) | string |  |
| 12 | [Name_10](#name) | string |  |
| 13 | [Name_11](#name) | string |  |
| 14 | [Name_12](#name) | string |  |
| 15 | [Name_13](#name) | string |  |
| 16 | [Name_14](#name) | string |  |
| 17 | [Name_15](#name) | string |  |
| 18 | [Name_lang_mask](#name) | uint32 |  |
| 19 | [Flags](#flags) | uint32 |  |
| 20 | [CreatureType](#creaturetype) | int32 | [CreatureType.dbc/0](/files/DBC/335/creaturetype#id) |
| 21 | [AttackIconID](#attackiconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
| 22 | [CombatRoundTime](#combatroundtime) | uint32 |  |
| 23 | [CreatureDisplayID_0](#creaturedisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 24 | [CreatureDisplayID_1](#creaturedisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 25 | [CreatureDisplayID_2](#creaturedisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 26 | [CreatureDisplayID_3](#creaturedisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 27 | [PresetSpellID_0](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 28 | [PresetSpellID_1](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 29 | [PresetSpellID_2](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 30 | [PresetSpellID_3](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 31 | [PresetSpellID_4](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 32 | [PresetSpellID_5](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 33 | [PresetSpellID_6](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 34 | [PresetSpellID_7](#presetspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### BonusActionBar
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 2 &ndash; 18 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 19 (uint32)</code>

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00001 | Stance | Simulates not being shapeshifted to allow mounts/items/interactions i.e. warrior stances. |
| 2 | 0x00002 | NotToggleable | Prevents cancellation |
| 4 | 0x00004 | PersistOnDeath | Self descriptive. |
| 8 | 0x00008 | CanInteractNPC | Allows interaction |
| 16 | 0x00010 | DontUseWeapon | Self descriptive. |
| 32 | 0x00020 | AgilityAttackBonus | Enables agility AP bonuses e.g. cat form. |
| 64 | 0x00040 | CanUseEquippedItems | Can equip items. |
| 128 | 0x00080 | CanUseItems | Can use items. |
| 256 | 0x00100 | DontAutoUnshift | Allows client to auto-unshift. |
| 512 | 0x00200 | ConsideredDead | Prevents LFG teleportation. |
| 1024 | 0x00400 | CanOnlyCastShapeshiftSpells | Prevents the use of non-shapeshift form spells. |
| 2048 | 0x00800 | StanceCancelsAtFlightmaster | If m_flags & 1 != 0, cancels shapeshift when interacting with flight masters. |
| 4096 | 0x01000 | NoEmoteSounds | Prevents emote sounds. |
| 8192 | 0x02000 | NoTriggerTeleport | Enables Alliance and Horde to participate in the activity as a group together. |
| 16384 | 0x04000 | CannotChangeEquippedItems | Prevents emote sounds.  |
{.dense}

&nbsp;

### CreatureType
<code>Col: 20 (int32)</code>

* <= 0: humanoid
* >= 1: creature type
&nbsp;

### AttackIconID
:x: <code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

### CombatRoundTime
<code>Col: 22 (uint32)</code>

Auto hit delay in msec.
&nbsp;

### CreatureDisplayID
<code>Col: 23 &ndash; 26 (uint32)</code>

* col 23: Alliance
* col 24: Horde
* others unknown
&nbsp;

### PresetSpellID
<code>Col: 27 &ndash; 34 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellrunecost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellRuneCost'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisual" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisual'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
