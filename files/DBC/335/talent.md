---
title: Talent.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/summonproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SummonProperties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/talenttab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TalentTab'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Talent.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=talent&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Talent)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [TabID](#tabid) | uint32 | [TalentTab.dbc/0](/files/DBC/335/TalentTab#id) |
| 2 | [TierID](#tierid) | uint32 |  |
| 3 | [ColumnIndex](#columnindex) | uint32 |  |
| 4 | [SpellRank_0](#spellrank) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 5 | [SpellRank_1](#spellrank) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 6 | [SpellRank_2](#spellrank) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 7 | [SpellRank_3](#spellrank) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 8 | [SpellRank_4](#spellrank) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 9 | [SpellRank_5](#spellrankunused) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 10 | [SpellRank_6](#spellrankunused) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 11 | [SpellRank_7](#spellrankunused) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 12 | [SpellRank_8](#spellrankunused) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 13 | [PrereqTalent_0](#prereqtalent) | uint32 | [Talent.dbc/0](/files/DBC/335/Talent#id) |
| 14 | [PrereqTalent_1](#prereqtalent) | uint32 | [Talent.dbc/0](/files/DBC/335/Talent#id) |
| 15 | [PrereqTalent_2](#prereqtalent) | uint32 | [Talent.dbc/0](/files/DBC/335/Talent#id) |
| 16 | [PrereqRank_0](#prereqrank) | uint32 |  |
| 17 | [PrereqRank_1](#prereqrank) | uint32 |  |
| 18 | [PrereqRank_2](#prereqrank) | uint32 |  |
| 19 | [Flags](#flags) | uint32 |  |
| 20 | [RequiredSpellID](#requiredspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 21 | [CategoryMask](#categorymask) | uint32 | [CreatureFamily.dbc/9](/files/DBC/335/creaturefamily#categoryenumid) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### TabID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### TierID
<code>Col: 2 (uint32)</code>

row in talent tab
&nbsp;

### ColumnIndex
<code>Col: 3 (uint32)</code>

column in talent tab
&nbsp;

### SpellRank
<code>Col: 4 &ndash; 12 (uint32)</code>

*- no description -*
&nbsp;

### PrereqTalent
<code>Col: 13 &ndash; 15  (uint32)</code>

*- no description -*
&nbsp;

### PrereqRank
<code>Col: 16 &ndash; 18 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 19 (uint32)</code>

* 0x1: Talent only has one point. This flag displays additional spell data like range, cast time, mana cost.
&nbsp;

### RequiredSpellID
:x: <code>Col: 20 (uint32)</code>

all 0
&nbsp;

### CategoryMask
:x: <code>Col: 21 (uint32)</code>

Its a 64 bit mask for pet `1 << CategoryEnumID``
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/summonproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SummonProperties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/talenttab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TalentTab'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
