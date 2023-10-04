---
title: ItemSubClass.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemSet'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemsubclassmask" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSubClassMask'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemSubClass.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemsubclass&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemSubClass)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ClassID](#classid) | uint32 | [ItemClass.dbc/0](/files/DBC/335/itemclass#id); [SheatheSoundLookups.dbc/1](/files/DBC/335/sheathesoundlookups#classid) |
| 1 | [SubClassID](#subclassid) | uint32 | [SheatheSoundLookups.dbc/2](/files/DBC/335/sheathesoundlookups#subclassid) |
| 2 | [PrerequisiteProficiency](#prerequisiteproficiency) | int32 |  |
| 3 | [PostrequisiteProficiency](#postrequisiteproficiency) | int32 |  |
| 4 | [Flags](#flags) | uint32 |  |
| 5 | [DisplayFlags](#displayflags) | uint32 |  |
| 6 | [WeaponParrySeq](#weaponparryseq) | uint32 |  |
| 7 | [WeaponReadySeq](#weaponreadyseq) | uint32 |  |
| 8 | [WeaponAttackSeq](#weaponattackseq) | uint32 |  |
| 9 | [WeaponSwingSize](#weaponswingsize) | uint32 | [WeaponSwingSounds2.dbc/1](/files/DBC/335/weaponswingsounds2#size) |
| 10 | [DisplayName_0](#displayname) | string |  |
| 11 | [DisplayName_1](#displayname) | string |  |
| 12 | [DisplayName_2](#displayname) | string |  |
| 13 | [DisplayName_3](#displayname) | string |  |
| 14 | [DisplayName_4](#displayname) | string |  |
| 15 | [DisplayName_5](#displayname) | string |  |
| 16 | [DisplayName_6](#displayname) | string |  |
| 17 | [DisplayName_7](#displayname) | string |  |
| 18 | [DisplayName_8](#displayname) | string |  |
| 19 | [DisplayName_9](#displayname) | string |  |
| 20 | [DisplayName_10](#displayname) | string |  |
| 21 | [DisplayName_11](#displayname) | string |  |
| 22 | [DisplayName_12](#displayname) | string |  |
| 23 | [DisplayName_13](#displayname) | string |  |
| 24 | [DisplayName_14](#displayname) | string |  |
| 25 | [DisplayName_15](#displayname) | string |  |
| 26 | [DisplayName_lang_mask](#displayname) | uint32 |  |
| 27 | [VerboseName_0](#verbosename) | string |  |
| 28 | [VerboseName_1](#verbosename) | string |  |
| 29 | [VerboseName_2](#verbosename) | string |  |
| 30 | [VerboseName_3](#verbosename) | string |  |
| 31 | [VerboseName_4](#verbosename) | string |  |
| 32 | [VerboseName_5](#verbosename) | string |  |
| 33 | [VerboseName_6](#verbosename) | string |  |
| 34 | [VerboseName_7](#verbosename) | string |  |
| 35 | [VerboseName_8](#verbosename) | string |  |
| 36 | [VerboseName_9](#verbosename) | string |  |
| 37 | [VerboseName_10](#verbosename) | string |  |
| 38 | [VerboseName_11](#verbosename) | string |  |
| 39 | [VerboseName_12](#verbosename) | string |  |
| 40 | [VerboseName_13](#verbosename) | string |  |
| 41 | [VerboseName_14](#verbosename) | string |  |
| 42 | [VerboseName_15](#verbosename) | string |  |
| 43 | [VerboseName_lang_mask](#verbosename) | uint32 |  |
&nbsp;
## Description of fields

### ClassID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SubClassID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### PrerequisiteProficiency
:x: <code>Col: 2 (int32)</code>

**SubClassID** preceding this
&nbsp;

### PostrequisiteProficiency
:x: <code>Col: 3 (int32)</code>

followup **SubClassID**
&nbsp;

### Flags
:x: <code>Col: 4 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x01 | Can parry |
| 2 | 0x02 | Weapon set finger seq |
| 4 | 0x04 | Weapon is Unarmed |
| 8 | 0x08 | Weapon is Rifle |
| 16 | 0x10 | Weapon is Thrown |
| 32 | 0x20 | Weapon is Right Hand Ranged |
| 64 | 0x40 | Ammunition not required |
| 128 | 0x80 | Weapon is Ranged |
{.dense}

&nbsp;

### DisplayFlags
:x: <code>Col: 5 (uint32)</code>

* 0x1: HideSubClassInTooltip
&nbsp;

### WeaponParrySeq
:x: <code>Col: 6 (uint32)</code>

* 0: ANIM_PARRY2HTIGHT
* 1: ANIM_PARRY2HLOOSE
* 2: ANIM_PARRY1H
* 3: ANIM_STAND
&nbsp;

### WeaponReadySeq
:x: <code>Col: 7 (uint32)</code>

* 0: ANIM_READY2HTIGHT
* 1: ANIM_READY2HLOOSE
* 2: ANIM_READY1H
* 3: ANIM_READYBOW
* 4: ANIM_READYRIFLE
* 5: ANIM_READYTHROWN
&nbsp;

### WeaponAttackSeq
:x: <code>Col: 8 (uint32)</code>

* 0: ANIM_ATTACK2HTIGHT
* 1: ANIM_ATTACK2HLOOSE
* 2: ANIM_ATTACKBOW
* 3: ANIM_ATTACK1H
* 4: ANIM_ATTACKRIFLE
* 5: ANIM_ATTACKTHROWN
&nbsp;

### WeaponSwingSize
:x: <code>Col: 9 (uint32)</code>

| ID | Name | Comment |
|----|------|---------|
| 0 | WEAPONSWING_LIGHT | Dagger |
| 1 | WEAPONSWING_MEDIUM | 1H Sword/Axe |
| 2 | WEAPONSWING_HEAVY | 2H Sword/Axe |
{.dense}

&nbsp;

### DisplayName
:x: <code>Col: 10 &ndash; 26 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### VerboseName
:x: <code>Col: 27 &ndash; 43 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemSet'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemsubclassmask" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSubClassMask'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
