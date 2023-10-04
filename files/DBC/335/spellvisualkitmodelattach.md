---
title: SpellVisualKitModelAttach.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualKitAreaModel'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualprecasttransitions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualPrecastTransitions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellVisualKitModelAttach.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellvisualkitmodelattach&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellVisualKitModelAttach)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ParentSpellVisualKitID](#parentspellvisualkitid) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 2 | [SpellVisualEffectNameID](#spellvisualeffectnameid) | uint32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 3 | [AttachmentID](#attachmentid) | int32 |  |
| 4 | [Offset_X](#offset_x) | float |  |
| 5 | [Offset_Y](#offset_y) | float |  |
| 6 | [Offset_Z](#offset_z) | float |  |
| 7 | [Yaw](#yaw) | float |  |
| 8 | [Pitch](#pitch) | float |  |
| 9 | [Roll](#roll) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ParentSpellVisualKitID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SpellVisualEffectNameID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### AttachmentID
:x: <code>Col: 3 (int32)</code>

M2-Attachment
&nbsp;

### Offset
:x: <code>Col: 4 &ndash; 6 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### Yaw
:x: <code>Col: 7 (float)</code>

in radians
&nbsp;

### Pitch
:x: <code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### Roll
:x: <code>Col: 9 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualKitAreaModel'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualprecasttransitions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualPrecastTransitions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
