---
title: SpellItemEnchantmentCondition.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellitemenchantment" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellItemEnchantment'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellmechanic" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellMechanic'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellItemEnchantmentCondition.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellitemenchantmentcondition&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellItemEnchantmentCondition)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [LtOperandType_0](#ltoperandtype) | uint8 |  |
| 2 | [LtOperandType_1](#ltoperandtype) | uint8 |  |
| 3 | [LtOperandType_2](#ltoperandtype) | uint8 |  |
| 4 | [LtOperandType_3](#ltoperandtype) | uint8 |  |
| 5 | [LtOperandType_4](#ltoperandtype) | uint8 |  |
| 6 | [LtOperand_0](#ltoperand) | uint32 |  |
| 7 | [LtOperand_1](#ltoperand) | uint32 |  |
| 8 | [LtOperand_2](#ltoperand) | uint32 |  |
| 9 | [LtOperand_3](#ltoperand) | uint32 |  |
| 10 | [LtOperand_4](#ltoperand) | uint32 |  |
| 11 | [Operator_0](#operator) | uint8 |  |
| 12 | [Operator_1](#operator) | uint8 |  |
| 13 | [Operator_2](#operator) | uint8 |  |
| 14 | [Operator_3](#operator) | uint8 |  |
| 15 | [RtOperandType_0](#rtoperandtype) | uint8 |  |
| 16 | [RtOperandType_1](#rtoperandtype) | uint8 |  |
| 17 | [RtOperandType_2](#rtoperandtype) | uint8 |  |
| 18 | [RtOperandType_3](#rtoperandtype) | uint8 |  |
| 19 | [RtOperandType_4](#rtoperandtype) | uint8 |  |
| 20 | [RtOperandType_5](#rtoperandtype) | uint8 |  |
| 21 | [RtOperand_0](#rtoperand) | uint32 |  |
| 22 | [RtOperand_1](#rtoperand) | uint32 |  |
| 23 | [RtOperand_2](#rtoperand) | uint32 |  |
| 24 | [RtOperand_3](#rtoperand) | uint32 |  |
| 25 | [Logic_0](#logic) | uint8 |  |
| 26 | [Logic_1](#logic) | uint8 |  |
| 27 | [Logic_2](#logic) | uint8 |  |
| 28 | [Logic_3](#logic) | uint8 |  |
| 29 | [Logic_4](#logic) | uint8 |  |
| 30 | [Logic_5](#logic) | uint8 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### LtOperandType
<code>Col: 1 &ndash; 5 (uint8)</code>

unshifted [`enum SocketColor`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L249-L255)
`ID = LOG(enumBit, 2) + 1`
| ID | Name |
|----|------|
| 1 | SOCKET_COLOR_META |
| 2 | SOCKET_COLOR_RED |
| 3 | SOCKET_COLOR_YELLOW |
| 4 | SOCKET_COLOR_BLUE |
{.dense}

&nbsp;

### LtOperand
:x: <code>Col: 6 &ndash; 10 (uint32)</code>

*- no description -*
&nbsp;

### Operator
<code>Col: 11 &ndash; 15 (uint8)</code>

* 2: `<`
* 3: `>`
* 5: `>=`
&nbsp;

### RtOperandType
<code>Col: 15 &ndash; 20 (uint8)</code>

unshifted [`enum SocketColor`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L249-L255)
`ID = LOG(enumBit, 2) + 1`
| ID | Name |
|----|------|
| 1 | SOCKET_COLOR_META |
| 2 | SOCKET_COLOR_RED |
| 3 | SOCKET_COLOR_YELLOW |
| 4 | SOCKET_COLOR_BLUE |
{.dense}

&nbsp;

### RtOperand
<code>Col: 21 &ndash; 25 (uint32)</code>

Amount of **LtOperandType** gems.
&nbsp;

### Logic
:x: <code>Col: 25 &ndash; 30 (uint8)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellitemenchantment" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellItemEnchantment'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellmechanic" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellMechanic'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
