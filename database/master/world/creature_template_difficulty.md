---
title: creature_template_difficulty
description: 
published: true
date: 2023-05-29T22:25:06.332Z
tags: database, master, world
editor: markdown
dateCreated: 2023-05-29T22:25:06.332Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_template_gossip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_gossip'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [Entry](#entry) | int | unsigned | PRI | NO |  |  |  | SMSG_UPDATE_OBJECT |
| [DifficultyID](#difficultyid) | tinyint | unsigned | PRI | NO | 0 |  |  | SMSG_WORLD_SERVER_INFO |
| [LevelScalingDeltaMin](#levelscalingdeltamin) | smallint | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [LevelScalingDeltaMax](#levelscalingdeltamax) | smallint | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [HealthScalingExpansion](#healthscalingexpansion) | int | signed |  | NO | 0 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [HealthModifier](#healthmodifier) | float |  |  | NO | 1 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [ManaModifier](#manamodifier) | float |  |  | NO | 1 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [ArmorModifier](#armormodifier) | float |  |  | NO | 1 |  |  | Generated |
| [DamageModifier](#damagemodifier) | float |  |  | NO | 1 |  |  | Generated |
| [CreatureDifficultyID](#creaturedifficultyid) | int | signed |  | NO | 0 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [TypeFlags](#typeflags) | int | unsigned |  | NO | 0 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [TypeFlags2](#typeflags2) | int | unsigned |  | NO | 0 |  |  | SMSG_QUERY_CREATURE_RESPONSE |
| [LootID](#lootid) | int | unsigned |  | NO | 0 |  |  |  |
| [PickPocketLootID](#pickpocketlootid) | int | unsigned |  | NO | 0 |  |  |  |
| [SkinLootID](#skinlootid) | int | unsigned |  | NO | 0 |  |  |  |
| [GoldMin](#goldmin) | int | unsigned |  | NO | 0 |  |  |  |
| [GoldMax](#goldmax) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags1](#staticflags1) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags2](#staticflags2) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags3](#staticflags3) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags4](#staticflags4) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags5](#staticflags5) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags6](#staticflags6) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags7](#staticflags7) | int | unsigned |  | NO | 0 |  |  |  |
| [StaticFlags8](#staticflags8) | int | unsigned |  | NO | 0 |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  | Generated |
&nbsp;
## Description of fields

### Entry
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### LevelScalingDeltaMin
*- no description -*
&nbsp;

### LevelScalingDeltaMax
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### HealthScalingExpansion
*- no description -*
&nbsp;

### HealthModifier
*- no description -*
&nbsp;

### ManaModifier
*- no description -*
&nbsp;

### ArmorModifier
*- no description -*
&nbsp;

### DamageModifier
*- no description -*
&nbsp;

### CreatureDifficultyID
*- no description -*
&nbsp;

### TypeFlags
*- no description -*
&nbsp;

### TypeFlags2
*- no description -*
&nbsp;

### LootID
*- no description -*
&nbsp;

### PickPocketLootID
*- no description -*
&nbsp;

### SkinLootID
*- no description -*
&nbsp;

### GoldMin
*- no description -*
&nbsp;

### GoldMax
*- no description -*
&nbsp;

### StaticFlags1
*- no description -*
&nbsp;

### StaticFlags2
*- no description -*
&nbsp;

### StaticFlags3
*- no description -*
&nbsp;

### StaticFlags4
*- no description -*
&nbsp;

### StaticFlags5
*- no description -*
&nbsp;

### StaticFlags6
*- no description -*
&nbsp;

### StaticFlags7
*- no description -*
&nbsp;

### StaticFlags8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_template_gossip" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_gossip'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

