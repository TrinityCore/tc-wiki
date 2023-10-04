---
title: CreatureFamily.dbc
description: 
published: true
date: 2023-10-04T22:47:12.378Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:02:04.989Z
---

<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfoextra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureDisplayInfoExtra'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureModelData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureFamily.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturefamily&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureFamily)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MinScale](#minscale) | float |  |
| 2 | [MinScaleLevel](#minscalelevel) | uint32 |  |
| 3 | [MaxScale](#maxscale) | float |  |
| 4 | [MaxScaleLevel](#maxscalelevel) | uint32 |  |
| 5 | [SkillLine_0](#skillline) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id) |
| 6 | [SkillLine_1](#skillline) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id) |
| 7 | [PetFoodMask](#petfoodmask) | uint32 | [ItemPetFood.dbc/0](/files/DBC/335/itempetfood#id) |
| 8 | [PetTalentType](#pettalenttype) | int32 | [TalentTab.dbc/21](/files/DBC/335/talenttab#pettalentmask) |
| 9 | [CategoryEnumID](#categoryenumid) | int32 |  |
| 10 | [Name_0](#name) | string |  |
| 11 | [Name_1](#name) | string |  |
| 12 | [Name_2](#name) | string |  |
| 13 | [Name_3](#name) | string |  |
| 14 | [Name_4](#name) | string |  |
| 15 | [Name_5](#name) | string |  |
| 16 | [Name_6](#name) | string |  |
| 17 | [Name_7](#name) | string |  |
| 18 | [Name_8](#name) | string |  |
| 19 | [Name_9](#name) | string |  |
| 20 | [Name_10](#name) | string |  |
| 21 | [Name_11](#name) | string |  |
| 22 | [Name_12](#name) | string |  |
| 23 | [Name_13](#name) | string |  |
| 24 | [Name_14](#name) | string |  |
| 25 | [Name_15](#name) | string |  |
| 26 | [Name_lang_mask](#name) | uint32 |  |
| 27 | [IconFile](#iconfile) | string |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MinScale
<code>Col: 1 (float)</code>

Scale model size, depending on pet level.
&nbsp;

### MinScaleLevel
<code>Col: 2 (uint32)</code>

Min level for model scaling.
&nbsp;

### MaxScale
<code>Col: 3 (float)</code>

Scale model size, depending on pet level.
&nbsp;

### MaxScaleLevel
<code>Col: 4 (uint32)</code>

Max level for model scaling.
&nbsp;

### SkillLine
<code>Col: 5 &ndash; 6 (uint32)</code>

*- no description -*
&nbsp;

### PetFoodMask
<code>Col: 7 (uint32)</code>

`PetFoodMask |= 1 << (ItemPetFoodID - 1)`
&nbsp;

### PetTalentType
<code>Col: 8 (int32)</code>

| ID | Name |
|----|------|
| -1 | *- not a beast -* |
| 0 | Ferocity |
| 1 | Tanacity |
| 2 | Cunning |
{.dense}

&nbsp;

### CategoryEnumID
:x: <code>Col: 9 (int32)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 10 &ndash; 26 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### IconFile
:x: <code>Col: 27 (string)</code>

"Interface\\Icons\\\*"
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfoextra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureDisplayInfoExtra'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureModelData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
