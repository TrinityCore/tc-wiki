---
title: ItemVisuals.dbc
description: 
published: true
date: 2024-07-12T15:16:34.060Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:04:51.922Z
---

<a href="https://trinitycore.info/files/DBC/335/itemvisualeffects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemVisualEffects'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/languages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Languages'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemVisuals.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemvisuals&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemVisuals)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [VisualEffectID_0](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 2 | [VisualEffectID_1](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 3 | [VisualEffectID_2](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 4 | [VisualEffectID_3](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 5 | [VisualEffectID_4](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

Table index
&nbsp;

### VisualEffectID
:x: <code>Col: 1 &ndash; 5 (int32)</code>

Visual effect for each attachment point (0 &ndash; 4) on the item.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemvisualeffects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemVisualEffects'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/languages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Languages'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
