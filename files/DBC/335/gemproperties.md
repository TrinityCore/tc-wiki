---
title: GemProperties.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/gametips" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GameTips'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/glyphproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GlyphProperties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# GemProperties.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=gemproperties&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GemProperties)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [EnchantID](#enchantid) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 2 | [MaxCountInv](#maxcountinv) | uint32 |  |
| 3 | [MaxCountItem](#maxcountitem) | uint32 |  |
| 4 | [Type](#type) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### EnchantID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### MaxCountInv
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### MaxCountItem
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### Type
<code>Col: 4 (uint32)</code>

[`enum SocketColor`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L249-L255)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | SOCKET_COLOR_META | never combined with other colors |
| 2 | 0x2 | SOCKET_COLOR_RED |  |
| 4 | 0x4 | SOCKET_COLOR_YELLOW |  |
| 8 | 0x8 | SOCKET_COLOR_BLUE |  |
| 14 | 0xE |  | prismatic |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/gametips" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GameTips'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/glyphproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GlyphProperties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
