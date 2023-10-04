---
title: ObjectEffect.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/npcsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'NPCSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/objecteffectgroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ObjectEffectGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ObjectEffect.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=objecteffect&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ObjectEffect)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name](#name) | string |  |
| 2 | [ObjectEffectGroupID](#objecteffectgroupid) | uint32 | [ObjectEffectGroup.dbc/0](/files/DBC/335/objecteffectgroup#id) |
| 3 | [TriggerType](#triggertype) | uint32 |  |
| 4 | [EventType](#eventtype) | uint32 |  |
| 5 | [EffectRecType](#effectrectype) | uint32 |  |
| 6 | [SoundKitID](#soundkitid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 7 | [Attachment](#attachment) | uint32 |  |
| 8 | [Offset_X](#offset) | float |  |
| 9 | [Offset_Y](#offset) | float |  |
| 10 | [Offset_Z](#offset) | float |  |
| 11 | [ObjectEffectModifierID](#objecteffectmodifierid) | uint32 | [ObjectEffectModifier.dbc/0](/files/DBC/335/objecteffectmodifier#id) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### ObjectEffectGroupID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### TriggerType
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### EventType
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### EffectRecType
:x: <code>Col: 5 (uint32)</code>

* 1: looping SoundEntry
&nbsp;

### SoundKitID
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### Attachment
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### Offset
:x: <code>Col: 8 &ndash; 10 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### ObjectEffectModifierID
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/npcsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'NPCSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/objecteffectgroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ObjectEffectGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
