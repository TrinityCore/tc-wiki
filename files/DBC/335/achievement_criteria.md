---
title: Achievement_Criteria.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Achievement_Category'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/animationdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AnimationData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Achievement_Criteria.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=achievement_criteria&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Achievement_Criteria)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [AchievementID](#achievementid) | uint32 | [Achievement.dbc/0](/files/DBC/335/achievement#id); [achievement Id](/database/335/world/achievement_dbc#id) |
| 2 | [Type](#type) | uint32 |  |
| 3 | [Asset](#asset) | uint32 |  |
| 4 | [Quantity](#quantity) | uint32 |  |
| 5 | [AdditionalRequirements_Type_0](#additionalrequirements) | uint32 |  |
| 6 | [AdditionalRequirements_Asset_0](#additionalrequirements) | uint32 |  |
| 7 | [AdditionalRequirements_Type_1](#additionalrequirements) | uint32 |  |
| 8 | [AdditionalRequirements_Asset_1](#additionalrequirements) | uint32 |  |
| 9 | [Description_0](#description) | string |  |
| 10 | [Description_1](#description) | string |  |
| 11 | [Description_2](#description) | string |  |
| 12 | [Description_3](#description) | string |  |
| 13 | [Description_4](#description) | string |  |
| 14 | [Description_5](#description) | string |  |
| 15 | [Description_6](#description) | string |  |
| 16 | [Description_7](#description) | string |  |
| 17 | [Description_8](#description) | string |  |
| 18 | [Description_9](#description) | string |  |
| 19 | [Description_10](#description) | string |  |
| 20 | [Description_11](#description) | string |  |
| 21 | [Description_12](#description) | string |  |
| 22 | [Description_13](#description) | string |  |
| 23 | [Description_14](#description) | string |  |
| 24 | [Description_15](#description) | string |  |
| 25 | [Description_lang_mask](#description) | uint32 |  |
| 26 | [Flags](#flags) | uint32 |  |
| 27 | [StartEvent](#startevent) | uint32 |  |
| 28 | [StartAsset](#startasset) | uint32 |  |
| 29 | [StartTimer](#starttimer) | uint32 |  |
| 30 | [UiOrder](#uiorder) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AchievementID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Type
<code>Col: 2 (uint32)</code>
### Asset
<code>Col: 3 (uint32)</code>

[`enum AchievementCriteriaTypes`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L132-L236)
| Type | Name | Asset | Comment |
|------|------|-------|---------|
| 0 | ACHIEVEMENT_CRITERIA_TYPE_KILL_CREATURE | [creature entry](/database/335/world/creature_template#entry) |  |
| 1 | ACHIEVEMENT_CRITERIA_TYPE_WIN_BG | [Map ID](/files/DBC/335/map#id) |  |
| 5 | ACHIEVEMENT_CRITERIA_TYPE_REACH_LEVEL |  |  |
| 7 | ACHIEVEMENT_CRITERIA_TYPE_REACH_SKILL_LEVEL | [SkillLine ID](/files/DBC/335/skilllline#id) |  |
| 8 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_ACHIEVEMENT | [Achievement ID](/files/DBC/335/achievement#id) |  |
| 9 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_QUEST_COUNT |  |  |
| 10 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_DAILY_QUEST_DAILY |  | you have to complete a daily quest x times in a row |
| 11 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_QUESTS_IN_ZONE | [AreaTable ID](/files/DBC/335/areatable#id) |  |
| 12 | :x: ACHIEVEMENT_CRITERIA_TYPE_CURRENCY | [CurrencyType ID](/files/DBC/335/currencytypes#id) | type unused in 3.3.5a |
| 13 | ACHIEVEMENT_CRITERIA_TYPE_DAMAGE_DONE |  |  |
| 14 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_DAILY_QUEST |  |  |
| 15 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_BATTLEGROUND | [Map ID](/files/DBC/335/map#id) |  |
| 16 | ACHIEVEMENT_CRITERIA_TYPE_DEATH_AT_MAP | [Map ID](/files/DBC/335/map#id) |  |
| 17 | ACHIEVEMENT_CRITERIA_TYPE_DEATH |  |  |
| 18 | ACHIEVEMENT_CRITERIA_TYPE_DEATH_IN_DUNGEON | GroupSize |  |
| 19 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_RAID | GroupSize |  |
| 20 | ACHIEVEMENT_CRITERIA_TYPE_KILLED_BY_CREATURE | [creature entry](/database/335/world/creature_template#entry) |  |
| 23 | ACHIEVEMENT_CRITERIA_TYPE_KILLED_BY_PLAYER |  |  |
| 24 | ACHIEVEMENT_CRITERIA_TYPE_FALL_WITHOUT_DYING |  |  |
| 26 | ACHIEVEMENT_CRITERIA_TYPE_DEATHS_FROM | [`enum EnviromentalDamage`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Player/Player.h#L676-L685) |  |
| 27 | ACHIEVEMENT_CRITERIA_TYPE_COMPLETE_QUEST | [quest ID](/database/335/world/quest_template#id) |  |
| 28 | ACHIEVEMENT_CRITERIA_TYPE_BE_SPELL_TARGET | [Spell ID](/files/DBC/335/spell#id) |  |
| 29 | ACHIEVEMENT_CRITERIA_TYPE_CAST_SPELL | [Spell ID](/files/DBC/335/spell#id) |  |
| 30 | ACHIEVEMENT_CRITERIA_TYPE_BG_OBJECTIVE_CAPTURE |  |  |
| 31 | ACHIEVEMENT_CRITERIA_TYPE_HONORABLE_KILL_AT_AREA | [AreaTable ID](/files/DBC/335/areatable#id) |  |
| 32 | ACHIEVEMENT_CRITERIA_TYPE_WIN_ARENA | [Map ID](/files/DBC/335/map#id) |  |
| 33 | ACHIEVEMENT_CRITERIA_TYPE_PLAY_ARENA | [Map ID](/files/DBC/335/map#id) |  |
| 34 | ACHIEVEMENT_CRITERIA_TYPE_LEARN_SPELL | [Spell ID](/files/DBC/335/spell#id) |  |
| 35 | ACHIEVEMENT_CRITERIA_TYPE_HONORABLE_KILL |  |  |
| 36 | ACHIEVEMENT_CRITERIA_TYPE_OWN_ITEM | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |  |
| 37 | ACHIEVEMENT_CRITERIA_TYPE_WIN_RATED_ARENA |  |  |
| 38 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_TEAM_RATING | [`enum ArenaType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Battlegrounds/Battleground.h#L200-L205) |  |
| 39 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_PERSONAL_RATING | [`enum ArenaType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Battlegrounds/Battleground.h#L200-L205) |  |
| 40 | ACHIEVEMENT_CRITERIA_TYPE_LEARN_SKILL_LEVEL | [SkillLine ID](/files/DBC/335/skilllline#id) |  |
| 41 | ACHIEVEMENT_CRITERIA_TYPE_USE_ITEM | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |  |
| 42 | ACHIEVEMENT_CRITERIA_TYPE_LOOT_ITEM | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |  |
| 43 | ACHIEVEMENT_CRITERIA_TYPE_EXPLORE_AREA | [WorldMapOverlay ID](/files/DBC/335/worldmapoverlay#id) |  |
| 44 | ACHIEVEMENT_CRITERIA_TYPE_OWN_RANK | PvpRank |  |
| 45 | ACHIEVEMENT_CRITERIA_TYPE_BUY_BANK_SLOT |  |  |
| 46 | ACHIEVEMENT_CRITERIA_TYPE_GAIN_REPUTATION | [Faction ID](/files/DBC/335/faction#id) |  |
| 47 | ACHIEVEMENT_CRITERIA_TYPE_GAIN_EXALTED_REPUTATION |  |  |
| 48 | ACHIEVEMENT_CRITERIA_TYPE_VISIT_BARBER_SHOP |  |  |
| 49 | ACHIEVEMENT_CRITERIA_TYPE_EQUIP_EPIC_ITEM | [`enum EquipmentSlots`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Player/Player.h#L536-L559) |  |
| 50 | ACHIEVEMENT_CRITERIA_TYPE_ROLL_NEED_ON_LOOT | RollValue | @todo itemlevel is mentioned in text but not present in dbc |
| 51 | ACHIEVEMENT_CRITERIA_TYPE_ROLL_GREED_ON_LOOT | RollValue |  |
| 52 | ACHIEVEMENT_CRITERIA_TYPE_HK_CLASS | [ChrClass ID](/files/DBC/335/chrclasses#id) |  |
| 53 | ACHIEVEMENT_CRITERIA_TYPE_HK_RACE | [ChrRace ID](/files/DBC/335/chrraces#id) |  |
| 54 | ACHIEVEMENT_CRITERIA_TYPE_DO_EMOTE | [EmotesText ID](/files/DBC/335/emotestext#id) |  |
| 55 | ACHIEVEMENT_CRITERIA_TYPE_HEALING_DONE |  |  |
| 56 | ACHIEVEMENT_CRITERIA_TYPE_GET_KILLING_BLOWS |  | @todo in some cases map not present, and in some cases need do without die |
| 57 | ACHIEVEMENT_CRITERIA_TYPE_EQUIP_ITEM | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |  |
| 59 | ACHIEVEMENT_CRITERIA_TYPE_MONEY_FROM_VENDORS |  |  |
| 60 | ACHIEVEMENT_CRITERIA_TYPE_GOLD_SPENT_FOR_TALENTS |  |  |
| 61 | ACHIEVEMENT_CRITERIA_TYPE_NUMBER_OF_TALENT_RESETS |  |  |
| 62 | ACHIEVEMENT_CRITERIA_TYPE_MONEY_FROM_QUEST_REWARD |  |  |
| 63 | ACHIEVEMENT_CRITERIA_TYPE_GOLD_SPENT_FOR_TRAVELLING |  |  |
| 65 | ACHIEVEMENT_CRITERIA_TYPE_GOLD_SPENT_AT_BARBER |  |  |
| 66 | ACHIEVEMENT_CRITERIA_TYPE_GOLD_SPENT_FOR_MAIL |  |  |
| 67 | ACHIEVEMENT_CRITERIA_TYPE_LOOT_MONEY |  |  |
| 68 | ACHIEVEMENT_CRITERIA_TYPE_USE_GAMEOBJECT | [gameobject entry](/database/335/world/gameobject_template#entry) |  |
| 69 | ACHIEVEMENT_CRITERIA_TYPE_BE_SPELL_TARGET2 | [Spell ID](/files/DBC/335/spell#id) |  |
| 70 | ACHIEVEMENT_CRITERIA_TYPE_SPECIAL_PVP_KILL |  |  |
| 72 | ACHIEVEMENT_CRITERIA_TYPE_FISH_IN_GAMEOBJECT | [gameobject entry](/database/335/world/gameobject_template#entry) |  |
| 73 | :x: UNUSED |  | @todo: Achievements 1515, 1241, 1103 (Name: Mal'Ganis) |
| 74 | ACHIEVEMENT_CRITERIA_TYPE_ON_LOGIN |  |  |
| 75 | ACHIEVEMENT_CRITERIA_TYPE_LEARN_SKILLLINE_SPELLS | [SkillLine ID](/files/DBC/335/skilllline#id) |  |
| 76 | ACHIEVEMENT_CRITERIA_TYPE_WIN_DUEL |  |  |
| 77 | ACHIEVEMENT_CRITERIA_TYPE_LOSE_DUEL |  |  |
| 78 | ACHIEVEMENT_CRITERIA_TYPE_KILL_CREATURE_TYPE |  |  |
| 80 | ACHIEVEMENT_CRITERIA_TYPE_GOLD_EARNED_BY_AUCTIONS |  |  |
| 82 | ACHIEVEMENT_CRITERIA_TYPE_CREATE_AUCTION |  |  |
| 83 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_AUCTION_BID |  |  |
| 84 | ACHIEVEMENT_CRITERIA_TYPE_WON_AUCTIONS |  |  |
| 85 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_AUCTION_SOLD |  |  |
| 86 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_GOLD_VALUE_OWNED |  |  |
| 87 | ACHIEVEMENT_CRITERIA_TYPE_GAIN_REVERED_REPUTATION |  |  |
| 88 | ACHIEVEMENT_CRITERIA_TYPE_GAIN_HONORED_REPUTATION |  |  |
| 89 | ACHIEVEMENT_CRITERIA_TYPE_KNOWN_FACTIONS |  |  |
| 90 | ACHIEVEMENT_CRITERIA_TYPE_LOOT_EPIC_ITEM |  |  |
| 91 | ACHIEVEMENT_CRITERIA_TYPE_RECEIVE_EPIC_ITEM |  |  |
| 93 | ACHIEVEMENT_CRITERIA_TYPE_ROLL_NEED |  |  |
| 94 | ACHIEVEMENT_CRITERIA_TYPE_ROLL_GREED |  |  |
| 95 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_HEALTH |  |  |
| 96 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_POWER |  |  |
| 97 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_STAT |  |  |
| 98 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_SPELLPOWER |  |  |
| 99 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_ARMOR |  |  |
| 100 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_RATING |  |  |
| 101 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_HIT_DEALT |  |  |
| 102 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_HIT_RECEIVED |  |  |
| 103 | ACHIEVEMENT_CRITERIA_TYPE_TOTAL_DAMAGE_RECEIVED |  |  |
| 104 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_HEAL_CAST |  |  |
| 105 | ACHIEVEMENT_CRITERIA_TYPE_TOTAL_HEALING_RECEIVED |  |  |
| 106 | ACHIEVEMENT_CRITERIA_TYPE_HIGHEST_HEALING_RECEIVED |  |  |
| 107 | ACHIEVEMENT_CRITERIA_TYPE_QUEST_ABANDONED |  |  |
| 108 | ACHIEVEMENT_CRITERIA_TYPE_FLIGHT_PATHS_TAKEN |  |  |
| 109 | ACHIEVEMENT_CRITERIA_TYPE_LOOT_TYPE | [`enum LootType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Loot/Loot.h#L80-L96) |  |
| 110 | ACHIEVEMENT_CRITERIA_TYPE_CAST_SPELL2 | [Spell ID](/files/DBC/335/spell#id) |  @todo target entry is missing |
| 112 | ACHIEVEMENT_CRITERIA_TYPE_LEARN_SKILL_LINE | [SkillLine ID](/files/DBC/335/skilllline#id) |  |
| 113 | ACHIEVEMENT_CRITERIA_TYPE_EARN_HONORABLE_KILL |  |  |
| 114 | ACHIEVEMENT_CRITERIA_TYPE_ACCEPTED_SUMMONINGS |  |  |
| 115 | ACHIEVEMENT_CRITERIA_TYPE_EARN_ACHIEVEMENT_POINTS |  |  |
| 117 | :x: UNUSED |  | missing ref Achievement |
| 118 | :x: UNUSED |  | missing ref Achievement |
| 119 | ACHIEVEMENT_CRITERIA_TYPE_USE_LFD_TO_GROUP_WITH_PLAYERS |  |  |
| 120 | :x: UNUSED |  | missing ref Achievement |
| 121 | :x: UNUSED |  | missing ref Achievement |
| 122 | :x: UNUSED |  | missing ref Achievement |
| 123 | :x: UNUSED |  | missing ref Achievement |
{.dense}

&nbsp;

### Quantity
<code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### AdditionalRequirements
<code>Col: 5 &ndash; 8 (uint32)</code>

Two additional \[**Type**, **Asset**\] condition tuples.
&nbsp;

### Description
:x: <code>Col: 9 &ndash; 25 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 26 (uint32)</code>

[`enum AchievementCriteriaFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L110-L118)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | ACHIEVEMENT_CRITERIA_FLAG_SHOW_PROGRESS_BAR | Show progress as bar |
| 2 | 0x02 | ACHIEVEMENT_CRITERIA_FLAG_HIDDEN | Not show criteria in client |
| 4 | 0x04 | ACHIEVEMENT_CRITERIA_FLAG_FAIL_ACHIEVEMENT | achievement is failed if criteria is not met  |
| 8 | 0x08 | ACHIEVEMENT_CRITERIA_FLAG_RESET_ON_START | criteria counters reset each restart  |
| 16 | 0x10 | ACHIEVEMENT_CRITERIA_FLAG_IS_DATE | is a date requirement |
| 32 | 0x20 | ACHIEVEMENT_CRITERIA_FLAG_MONEY_COUNTER | Displays counter as money |
{.dense}

&nbsp;

### StartEvent
<code>Col: 27 (uint32)</code>

[`enum AchievementCriteriaCondition`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L96-L108)
| ID | Name | Comment |
|----|------|---------|
| 1 | ACHIEVEMENT_TIMED_TYPE_EVENT | Timer is started by internal event with id in timerStartEvent |
| 2 | ACHIEVEMENT_TIMED_TYPE_QUEST | Timer is started by accepting quest with entry in timerStartEvent |
| 5 | ACHIEVEMENT_TIMED_TYPE_SPELL_CASTER | Timer is started by casting a spell with entry in timerStartEvent |
| 6 | ACHIEVEMENT_TIMED_TYPE_SPELL_TARGET | Timer is started by being target of spell with entry in timerStartEvent |
| 7 | ACHIEVEMENT_TIMED_TYPE_CREATURE | Timer is started by killing creature with entry in timerStartEvent |
| 9 | ACHIEVEMENT_TIMED_TYPE_ITEM | Timer is started by using item with entry in timerStartEvent |
{.dense}

&nbsp;

### StartAsset
<code>Col: 28 (uint32)</code>

Always appears with timed events, used internally to start the achievement, store
&nbsp;

### StartTimer
<code>Col: 29 (uint32)</code>

time limit in seconds
&nbsp;

### UiOrder
:x: <code>Col: 30 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Achievement_Category'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/animationdata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AnimationData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
