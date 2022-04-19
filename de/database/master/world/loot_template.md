---
title: *_loot_template
description: 
published: true
date: 2022-04-19T09:52:37.230Z
tags: database, master, world
editor: markdown
dateCreated: 2022-04-19T09:52:37.230Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_formations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_model_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## General
Well, according to vocabulary the meaning of the word "loot" is good for corpse loot and may be for some gameobjects like chests but quite unfit for fishing "loot". Nevermind. We will use term "loot" here as "a set of items generated on an event for a player" and "loot definition" as "a set of rules for loot generation". And forget about vocabulary for a while.

This table format is used for 12 different tables to generate different loot items for different things. The 12 tables are creature_loot_template, disenchant_loot_template, fishing_loot_template, gameobject_loot_template, item_loot_template, pickpocketing_loot_template, prospecting_loot_template, skinning_loot_template, quest_mail_loot_template, reference_loot_template, milling_loot_template, spell_loot_template. The general description here is valid for all 12 because the loot system is the same for all eleven.

Loot templates define only items in the loot. See comments about money drop in corpse, pickpocketing and luggage loot in [creature_template](/de/database/master/world/creature_template){target=_blank}.
&nbsp;
## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [Item](#item) | int | unsigned | PRI | NO | 0 |  |  |
| [Reference](#reference) | int | unsigned |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 100 |  |  |
| [QuestRequired](#questrequired) | tinyint(1) | signed |  | NO | 0 |  |  |
| [LootMode](#lootmode) | smallint | unsigned |  | NO | 1 |  |  |
| [GroupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCount](#mincount) | tinyint | unsigned |  | NO | 1 |  |  |
| [MaxCount](#maxcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Relations
The 12 tables have different relations with other DB tables.
| Loot table | Field | Relation | Related table | Field | Comment |
| --- | --- | --- | --- | --- | --- |
| fishing_loot_template | no relation | entry is linked with ID of the fishing zone or area |  |  |  |
| creature_loot_template | entry | 	many <- many | [creature_template](/de/database/master/world/creature_template){target=_blank} |  |  |
| gameobject_loot_template | entry | many <- many | [gameobject_template](/de/database/master/world/gameobject_template){target=_blank} |  |  |
| item_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} |  |  |
| disenchant_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} |  |  |
| prospecting_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} |  |  |
| milling_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} |  |  |
| pickpocketing_loot_template | entry | many <- many | [creature_template](/de/database/master/world/creature_template){target=_blank} |  |  |
| skinning_loot_template | entry | many <- many | [creature_template](/de/database/master/world/creature_template){target=_blank} |  |  |
| quest_mail_loot_template | entry |  | [quest_template](/de/database/master/world/quest_template){target=_blank} |  |  |
| reference_loot_template | entry | many <- many | *_loot_template |  |  |
| spell_loot_template | entry | many <- many | [Spell.db2 (wow.tools)](https://wow.tools/dbc/?dbc=spell){target=_blank} or [SpellName.db2 (wow.tools)](https://wow.tools/dbc/?dbc=spellname){target=_blank} |  |  |
&nbsp;
## Description of fields

### Entry
*- no description -*
&nbsp;

### Item
*- no description -*
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

<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_formations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_model_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>