---
title: *_loot_template
description: 
published: false
date: 2023-07-08T00:17:47.784Z
tags: 
editor: markdown
dateCreated: 2023-07-08T00:17:47.784Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Tables: *_loot_template

## General

Well, according to vocabulary the meaning of the word "loot" is good for corpse loot and may be for some gameobjects like chests but quite unfit for fishing "loot". Nevermind. We will use term "loot" here as "a set of items generated on an event for a player" and "loot definition" as "a set of rules for loot generation". And forget about vocabulary for a while.

This table format is used for 11 different tables to generate different loot items for different things. The 11 tables are:
* [creature_loot_template](../world/creature_loot_template)
* [disenchant_loot_template](../world/disenchant_loot_template)
* [fishing_loot_template](../world/fishing_loot_template)
* [gameobject_loot_template](../world/gameobject_loot_template)
* [item_loot_template](../world/item_loot_template)
* [pickpocketing_loot_template](../world/pickpocketing_loot_template)
* [prospecting_loot_template](../world/prospecting_loot_template)
* [skinning_loot_template](../world/skinning_loot_template)
* [quest_mail_loot_template](../world/quest_mail_loot_template)
* [reference_loot_template](../world/reference_loot_template)
* [milling_loot_template](../world/milling_loot_template)

The general description here is valid for all 11 because the loot system is the same across all tables.

Loot templates define only items in the loot. See comments about money drop in corpse, pickpocketing and luggage loot in creature_template and item_template.
&nbsp;

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [Item](#item) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [Reference](#reference) | mediumint | unsigned |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 100 |  |  |
| [QuestRequired](#questrequired) | tinyint(1) | signed |  | NO | 0 |  |  |
| [LootMode](#lootmode) | smallint | unsigned |  | NO | 1 |  |  |
| [GroupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCount](#mincount) | tinyint | unsigned |  | NO | 1 |  |  |
| [MaxCount](#maxcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;

## Relations

The 11 tables have different relations with other DB tables.

| table | field | relation | related table | related field | comment |
|-------|-------|----------|---------------|---------------|---------|
| fishing_loot_template | | no relation | | | entry is linked with ID of the fishing zone or area (see AreaTable.dbc) |
| creature_loot_template | [entry](#entry) | many <- many | [creature_template](../world/creature_template) | [lootid](../creature_template#lootid) |  |
| gameobject_loot_template | [entry](#entry) | many <- many |[gameobject_template](../world/gameobject_template) | [data1](../world/gameobject_template#data1) | Only GAMEOBJECT_TYPE_CHEST (3) or GAMEOBJECT_TYPE_FISHINGHOLE (25) | 
| item_loot_template | [entry](#entry) | many <- one | [item_template](../world/item_template) | [entry](../world/item_template#entry) | | |
| disenchant_loot_template | [entry](#entry) | many <- many | [item_template](../world/item_template) | [DisenchantID](../world/item_template#disenchantid) | | |
| prospecting_loot_template | [entry](#entry) | many <- one | [item_template](../world/item_template) | [entry](../world/item_template#entry) | | |
| milling_loot_template | [entry](#entry) | many <- one | [item_template](../world/item_template) | [entry](../world/item_template#entry) | | 
| pickpocketing_loot_template | [entry](#entry) | many <- many | [creature_template](../world/creature_template) | [pickpocketloot](../world/creature_template#pickpocketloot) | | 
| skinning_loot_template | [entry](#entry) | many <- many | [creature_template](../world/creature_template) | [skinloot](../world/creature_template#skinloot) | Can also store minable/herbable items gathered from creatures | 
| quest_mail_loot_template | [entry](#entry) |  | [quest_template](../world/quest_template) | [RewMailTemplateId](../world/quest_template#RewMailTemplateId) | | 
| reference_loot_template | [entry](#entry) | many <- many | \*_loot_template | [Reference](#Reference) | | 

## Description of fields

### Entry
*- no description -*
&nbsp;

### Item
[Template ID](../world/item_template#entry) of the item which is included into the loot.

NOTE: For reference entries this field has no meaning and is not used by the core in any way. Yet because of the PRIMARY KEY on the entry + item combination, this field will nonetheless need to be a unique number for each reference entry so that no indexing conflicts arise.
&nbsp;

### Reference
*- no description -*
&nbsp;

### Chance
*- no description -*
&nbsp;

### QuestRequired
*- no description -*
&nbsp;

### LootMode
*- no description -*
&nbsp;

### GroupId
*- no description -*
&nbsp;

### MinCount
*- no description -*
&nbsp;

### MaxCount
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;


<a href="https://trinitycore.info/en/database/335/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>