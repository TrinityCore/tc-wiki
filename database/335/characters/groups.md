---
title: groups
description:
published: true
date: 2023-07-30T18:46:31.753Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:54.931Z
---

<a href="https://trinitycore.info/en/database/335/characters/group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds basic info about groups.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [leaderGuid](#leaderguid) | int | unsigned | MUL | NO |  |  |  |
| [lootMethod](#lootmethod) | tinyint | unsigned |  | NO |  |  |  |
| [looterGuid](#looterguid) | int | unsigned |  | NO |  |  |  |
| [lootThreshold](#lootthreshold) | tinyint | unsigned |  | NO |  |  |  |
| [icon1](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon2](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon3](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon4](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon5](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon6](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon7](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [icon8](#icon[1-8]) | bigint | unsigned |  | NO |  |  |  |
| [groupType](#grouptype) | tinyint | unsigned |  | NO |  |  |  |
| [difficulty](#difficulty) | tinyint | unsigned |  | NO | 0 |  |  |
| [raidDifficulty](#raiddifficulty) | tinyint | unsigned |  | NO | 0 |  |  |
| [masterLooterGuid](#masterlooterguid) | int | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
Unique group enumerator.
&nbsp;

### leaderGuid
[character guid](../characters/characters#guid) of the group leader.
&nbsp;

### lootMethod
`enum LootMethod`
| ID | Name |
|----|------|
| 0 | FREE_FOR_ALL |
| 1 | ROUND_ROBIN |
| 2 | MASTER_LOOT |
| 3 | GROUP_LOOT |
| 4 | NEED_BEFORE_GREED |
{.dense}

&nbsp;

### looterGuid
Initiated as **leaderGuid**. If **lootMethod** is ROUND_ROBIN (1), this field containts the [character guid](../characters/characters#guid) eligible for the next loot.
&nbsp;

### lootThreshold
Quality threshold past which players have to roll for items.
`enum ItemQualities`
| ID | Name | Comment |
|----|------|---------|
| 0 | ITEM_QUALITY_POOR | GREY |
| 1 | ITEM_QUALITY_NORMAL | WHITE |
| 2 | ITEM_QUALITY_UNCOMMON | GREEN |
| 3 | ITEM_QUALITY_RARE | BLUE |
| 4 | ITEM_QUALITY_EPIC | PURPLE |
| 5 | ITEM_QUALITY_LEGENDARY | ORANGE |
| 6 | ITEM_QUALITY_ARTIFACT | LIGHT YELLOW |
| 7 | ITEM_QUALITY_HEIRLOOM |  |
{.dense}

&nbsp;

### icon\[1-8]
[character guid](../characters/characters#guid) or [creature guid](../characters/creature#guid) the icon is placed on.
| Idx | Name |
|-----|------|
| 1 | Yellow 4-point Star |
| 2 | Orange Circle |
| 3 | Purple Diamond |
| 4 | Green Triangle |
| 5 | White Crescent Moon |
| 6 | Blue Square |
| 7 | Red "X" Cross |
| 8 | White Skull |
{.dense}

&nbsp;

### groupType
`enum GroupType`
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x0 | GROUPTYPE_NORMAL |  |
| 1 | 0x1 | GROUPTYPE_BG |  |
| 2 | 0x2 | GROUPTYPE_RAID |  |
| 3 | 0x3 | GROUPTYPE_BGRAID | mask |
| 4 | 0x4 | GROUPTYPE_LFG_RESTRICTED | Script_HasLFGRestrictions() |
| 8 | 0x8 | GROUPTYPE_LFG |  |
{.dense}

&nbsp;

### difficulty
`enum Difficulty`
| ID | Name |
|----|------|
| 0 | DUNGEON_DIFFICULTY_NORMAL |
| 1 | DUNGEON_DIFFICULTY_HEROIC |
| 2 | DUNGEON_DIFFICULTY_EPIC |
{.dense}

&nbsp;

### raidDifficulty
`enum Difficulty`
| ID | Name |
|----|------|
| 0 | RAID_DIFFICULTY_10MAN_NORMAL |
| 1 | RAID_DIFFICULTY_25MAN_NORMAL |
| 2 | RAID_DIFFICULTY_10MAN_HEROIC |
| 3 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### masterLooterGuid
[character guid](../characters/character#guid) of the member with the master looter flag.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
