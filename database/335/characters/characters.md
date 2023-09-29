---
title: characters
description:
published: true
date: 2023-07-29T23:22:54.006Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:30.288Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds vital static information for each character. This information loaded and used to create the player objects in-game.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [account](#account) | int | unsigned | MUL | NO | 0 |  | Account Identifier |
| [name](#name) | varchar(12) |  | MUL | NO |  |  |  |
| [race](#race) | tinyint | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint | unsigned |  | NO | 0 |  |  |
| [level](#level) | tinyint | unsigned |  | NO | 0 |  |  |
| [xp](#xp) | int | unsigned |  | NO | 0 |  |  |
| [money](#money) | int | unsigned |  | NO | 0 |  |  |
| [skin](#skin) | tinyint | unsigned |  | NO | 0 |  |  |
| [face](#face) | tinyint | unsigned |  | NO | 0 |  |  |
| [hairStyle](#hairstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [hairColor](#haircolor) | tinyint | unsigned |  | NO | 0 |  |  |
| [facialStyle](#facialstyle) | tinyint | unsigned |  | NO | 0 |  |  |
| [bankSlots](#bankslots) | tinyint | unsigned |  | NO | 0 |  |  |
| [restState](#reststate) | tinyint | unsigned |  | NO | 0 |  |  |
| [playerFlags](#playerflags) | int | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [instance_id](#instance_id) | int | unsigned |  | NO | 0 |  |  |
| [instance_mode_mask](#instance_mode_mask) | tinyint | unsigned |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [taximask](#taximask) | text |  |  | NO |  |  |  |
| [online](#online) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [cinematic](#cinematic) | tinyint | unsigned |  | NO | 0 |  |  |
| [totaltime](#totaltime) | int | unsigned |  | NO | 0 |  |  |
| [leveltime](#leveltime) | int | unsigned |  | NO | 0 |  |  |
| [logout_time](#logout_time) | int | unsigned |  | NO | 0 |  |  |
| [is_logout_resting](#is_logout_resting) | tinyint | unsigned |  | NO | 0 |  |  |
| [rest_bonus](#rest_bonus) | float |  |  | NO | 0 |  |  |
| [resettalents_cost](#resettalents_cost) | int | unsigned |  | NO | 0 |  |  |
| [resettalents_time](#resettalents_time) | int | unsigned |  | NO | 0 |  |  |
| [trans_x](#trans_x) | float |  |  | NO | 0 |  |  |
| [trans_y](#trans_y) | float |  |  | NO | 0 |  |  |
| [trans_z](#trans_z) | float |  |  | NO | 0 |  |  |
| [trans_o](#trans_o) | float |  |  | NO | 0 |  |  |
| [transguid](#transguid) | mediumint | unsigned |  | NO | 0 |  |  |
| [extra_flags](#extra_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [stable_slots](#stable_slots) | tinyint | unsigned |  | NO | 0 |  |  |
| [at_login](#at_login) | smallint | unsigned |  | NO | 0 |  |  |
| [zone](#zone) | smallint | unsigned |  | NO | 0 |  |  |
| [death_expire_time](#death_expire_time) | int | unsigned |  | NO | 0 |  |  |
| [taxi_path](#taxi_path) | text |  |  | YES | NULL |  |  |
| [arenaPoints](#arenapoints) | int | unsigned |  | NO | 0 |  |  |
| [totalHonorPoints](#totalhonorpoints) | int | unsigned |  | NO | 0 |  |  |
| [todayHonorPoints](#todayhonorpoints) | int | unsigned |  | NO | 0 |  |  |
| [yesterdayHonorPoints](#yesterdayhonorpoints) | int | unsigned |  | NO | 0 |  |  |
| [totalKills](#totalkills) | int | unsigned |  | NO | 0 |  |  |
| [todayKills](#todaykills) | smallint | unsigned |  | NO | 0 |  |  |
| [yesterdayKills](#yesterdaykills) | smallint | unsigned |  | NO | 0 |  |  |
| [chosenTitle](#chosentitle) | int | unsigned |  | NO | 0 |  |  |
| [knownCurrencies](#knowncurrencies) | bigint | unsigned |  | NO | 0 |  |  |
| [watchedFaction](#watchedfaction) | int | unsigned |  | NO | 0 |  |  |
| [drunk](#drunk) | tinyint | unsigned |  | NO | 0 |  |  |
| [health](#health) | int | unsigned |  | NO | 0 |  |  |
| [power1](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power2](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power3](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power4](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power5](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power6](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [power7](#power[1-7]) | int | unsigned |  | NO | 0 |  |  |
| [latency](#latency) | mediumint | unsigned |  | NO | 0 |  |  |
| [talentGroupsCount](#talentgroupscount) | tinyint | unsigned |  | NO | 1 |  |  |
| [activeTalentGroup](#activetalentgroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [exploredZones](#exploredzones) | longtext |  |  | YES | NULL |  |  |
| [equipmentCache](#equipmentcache) | longtext |  |  | YES | NULL |  |  |
| [ammoId](#ammoid) | int | unsigned |  | NO | 0 |  |  |
| [knownTitles](#knowntitles) | longtext |  |  | YES | NULL |  |  |
| [actionBars](#actionbars) | tinyint | unsigned |  | NO | 0 |  |  |
| [grantableLevels](#grantablelevels) | tinyint | unsigned |  | NO | 0 |  |  |
| [deleteInfos_Account](#deleteinfos_account) | int | unsigned |  | YES | NULL |  |  |
| [deleteInfos_Name](#deleteinfos_name) | varchar(12) |  |  | YES | NULL |  |  |
| [deleteDate](#deletedate) | int | unsigned |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
The character global unique identifier. This number must be unique and is the best way to identify separate characters.
&nbsp;

### account
The [account ID](../auth/account#id) in which this character resides.
&nbsp;

### name
The name of the character.
&nbsp;

### race
The [Race ID](/files/DBC/335/chrraces#id) of the character.
&nbsp;

### class
The [Class ID](/files/DBC/335/chrclasses#id) of the character.
&nbsp;

### gender
The gender of the character.
* 0: Male
* 1: Female
* 2: Unknown
&nbsp;

### level
The level of the character.
&nbsp;

### xp
The amount of experience this character has earned towards the next level.
&nbsp;

### money
The amount of money in copper this character has.
&nbsp;

### skin
The skin color id of the character.
&nbsp;

### face
The facial features id of the character.
&nbsp;

### hairStyle
The hair style id of the character.
&nbsp;

### hairColor
The hair color id of the character.
&nbsp;

### facialStyle
The facial hair id of the character.
&nbsp;

### bankSlots
Bag slots in bank bought by the character.
&nbsp;

### restState
| Value | Name | Comment |
|-------|------|---------|
| 1 | REST_STATE_RESTED | rested |
| 2 | REST_STATE_NOT_RAF_LINKED | not rested |
| 6 | REST_STATE_RAF_LINKED | linked by 'recruit a friend' |
{.dense}

&nbsp;

### playerFlags
A bitmask that represents what Player flags the player has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

`enum PlayerFlags` excerpt:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | PLAYER_FLAGS_GROUP_LEADER | |
| 2 | 0x00000002 | PLAYER_FLAGS_AFK | |
| 4 | 0x00000004 | PLAYER_FLAGS_DND | |
| 8 | 0x00000008 | PLAYER_FLAGS_GM | |
| 16 | 0x00000010 | PLAYER_FLAGS_GHOST | |
| 32 | 0x00000020 | PLAYER_FLAGS_RESTING | |
| 128 | 0x00000080 | PLAYER_FLAGS_UNK7 | pre-3.0.3 PLAYER_FLAGS_FFA_PVP flag for FFA PVP state |
| 256 | 0x00000100 | PLAYER_FLAGS_CONTESTED_PVP | Player has been involved in a PvP combat and will be attacked by contested guards |
| 512 | 0x00000200 | PLAYER_FLAGS_IN_PVP | |
| 1024 | 0x00000400 | PLAYER_FLAGS_HIDE_HELM | |
| 2048 | 0x00000800 | PLAYER_FLAGS_HIDE_CLOAK | |
| 4096 | 0x00001000 | PLAYER_FLAGS_PLAYED_LONG_TIME | played long time |
| 8192 | 0x00002000 | PLAYER_FLAGS_PLAYED_TOO_LONG | played too long time |
| 16384 | 0x00004000 | PLAYER_FLAGS_IS_OUT_OF_BOUNDS | |
| 32768 | 0x00008000 | PLAYER_FLAGS_DEVELOPER | \<Dev> prefix for something? |
| 65536 | 0x00010000 | PLAYER_FLAGS_UNK16 | pre-3.0.3 PLAYER_FLAGS_SANCTUARY flag for player entered sanctuary |
| 131072 | 0x00020000 | PLAYER_FLAGS_TAXI_BENCHMARK | taxi benchmark mode (on/off) (2.0.1) |
| 262144 | 0x00040000 | PLAYER_FLAGS_PVP_TIMER | 3.0.2, pvp timer active (after you disable pvp manually) |
| 524288 | 0x00080000 | PLAYER_FLAGS_UBER | |
| 4194304 | 0x00400000 | PLAYER_FLAGS_COMMENTATOR2 | |
| 8388608 | 0x00800000 | PLAYER_ALLOW_ONLY_ABILITY | used by bladestorm and killing spree, allowed only spells with SPELL_ATTR0_REQ_AMMO, SPELL_EFFECT_ATTACK, checked only for active player |
| 16777216 | 0x01000000 | PLAYER_FLAGS_UNK24 | disabled all melee ability on tab include autoattack |
| 33554432 | 0x02000000 | PLAYER_FLAGS_NO_XP_GAIN | |
{.dense}

&nbsp;

### position_x
The x position of the character's location.
&nbsp;

### position_y
The y position of the character's location.
&nbsp;

### position_z
The z position of the character's location.
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) the character is on.
&nbsp;

### instance_id
The [instance id](../characters/instance#id) the character is currently in and bound to.
&nbsp;

### instance_mode_mask
The current difficulty modes that the player has chosen. This field is a bitmask. However, the difficulty should be enocoded directly in each half-byte.
High nibble encodes raid difficulty, Low nibble encodes dungeon difficulty:
| Low Value | Name |
|-----------|------|
| 0 | DUNGEON_DIFFICULTY_NORMAL |
| 1 | DUNGEON_DIFFICULTY_HEROIC |
| **High Value** |  |
| 0 | RAID_DIFFICULTY_10MAN_NORMAL |
| 16 | RAID_DIFFICULTY_25MAN_NORMAL |
| 32 | RAID_DIFFICULTY_10MAN_HEROIC |
| 48 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### orientation
The orientation the character is facing. (North = 0.0, South = 3.14159)
&nbsp;

### taximask
Known [TaxiNode IDs](/files/DBC/335/taxinodes#id) stored in space separated bit masks.
```cpp
uint8  fieldIdx = uint8((nodeId - 1) / 32);
uint32 maskBit  = 1 << ((nodeId - 1) % 32);
```
&nbsp;

### online
Records the character login status
* 0: offline
* 1: online
&nbsp;

### cinematic
Records whether the start cinematic has been shown.
* 0: not shown
* 1: shown
&nbsp;

### totaltime
The total time that the character has been active in the world, measured in seconds.
&nbsp;

### leveltime
The total time the character has spent in the world at the current level, measured in seconds.
&nbsp;

### logout_time
Unix timestamp when the character last logged out.
&nbsp;

### is_logout_resting
Stores if the character is currently in a resting zone or not.
* 0: not resting
* 1: resting
&nbsp;

### rest_bonus
The cumulated bonus of rested rate for gaining experience.
&nbsp;

### resettalents_cost
The cost for the character to reset its talents, measured in copper.
&nbsp;

### resettalents_time
Unix timestamp when the character last reset their talents.
&nbsp;

### trans_x
If this characters was saved on a MO-transport, then this is the x position on the MO-transport.
&nbsp;

### trans_y
If this characters was saved on a MO-transport, then this is the y position on the MO-transport.
&nbsp;

### trans_z
If this characters was saved on a MO-transport, then this is the z position on the MO-transport.
&nbsp;

### trans_o
If this characters was saved on a MO-transport, then this is the orientation on the MO-transport.
&nbsp;

### transguid
If this characters was saved on a MO-transport, then this is the [transport's guid](../world/transports#guid).
&nbsp;

### extra_flags
These flags control certain player specific attributes, mostly GM features.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | PLAYER_EXTRA_GM_ON | Defines GM state |
| 4 | 0x0004 | PLAYER_EXTRA_ACCEPT_WHISPERS | Defines if whispers are accepted |
| 8 | 0x0008 | PLAYER_EXTRA_TAXICHEAT | Sets taxicheat |
| 16 | 0x0010 | PLAYER_EXTRA_GM_INVISIBLE | Defines GM visibility |
| 32 | 0x0020 | PLAYER_EXTRA_GM_CHAT | Show GM badge in chat messages |
| 64 | 0x0040 | PLAYER_EXTRA_HAS_310_FLYER | Marks if player already has 310% speed flying mount |
| 256 | 0x0100 | PLAYER_EXTRA_PVP_DEATH | store PvP death status until corpse creating. |
| 512 | 0x0200 | PLAYER_EXTRA_HAS_RACE_CHANGED | characters races was changed at some point |
| 1024 | 0x0400 | PLAYER_EXTRA_GRANTED_LEVELS_FROM_RAF | was grantend levels from 'recruit a friend' at some point |
| 2048 | 0x0800 | :x: PLAYER_EXTRA_LEVEL_BOOSTED | reserved for master branch |
{.dense}

&nbsp;

### stable_slots
The Stable Slots available (bought) at the Stable Master.
&nbsp;

### at_login
This field is a bitmask controlling different actions taken once a player logs in with the character.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | AT_LOGIN_RENAME | Force character to change name |
| 2 | 0x0002 | AT_LOGIN_RESET_SPELLS | Reset spells (professions as well) |
| 4 | 0x0004 | AT_LOGIN_RESET_TALENTS | Reset talents |
| 8 | 0x0008 | AT_LOGIN_CUSTOMIZE | Customize Character |
| 16 | 0x0010 | AT_LOGIN_RESET_PET_TALENTS | Reset pet talents |
| 32 | 0x0020 | AT_LOGIN_FIRST | Set at character creation and removed after first login |
| 64 | 0x0040 | AT_LOGIN_CHANGE_FACTION | Faction change |
| 128 | 0x0080 | AT_LOGIN_CHANGE_RACE | Race change |
| 256 | 0x0100 | AT_LOGIN_RESURRECT | Resurrect at corpse |
{.dense}

&nbsp;

### zone
The [AreaTable ID](/files/DBC/335/areatable#id) the character is in.
&nbsp;

### death_expire_time
Unix timestamp when a character can be resurrected in case of a server crash or client exit while in ghost form.
&nbsp;

### taxi_path
Stores the players current [TaxiPath ID](/files/DBC/335/taxipath#id) if logged off while on one.
&nbsp;

### arenaPoints
The amount of arena points this character has stored up, and will receive next time arena points are distributed.
&nbsp;

### totalHonorPoints
The amount of honor points this character has got.
&nbsp;

### todayHonorPoints
The amount of honor points this character has gotten today.
&nbsp;

### yesterdayHonorPoints
The amount of honor points this character got yesterday.
&nbsp;

### totalKills
The lifetime amount of players this character has killed.
&nbsp;

### todayKills
The amount of players this character has killed today.
&nbsp;

### yesterdayKills
The amount of players this character killed yesterday.
&nbsp;

### chosenTitle
Currently selected title.
Value of the [CharTitle MaskID](/files/DBC/335/chartitles#maskid)
&nbsp;

### knownCurrencies
Known currencies listed in the characters currency tab.
Value is bitmask of the [CurrencyType BitIndex](/files/DBC/335/currencytypes#bitindex) field.
```cpp
// adding to field
knownCurrencies |= (1 << (BitIndex - 1));
// checking for currency
isKnown = (knownCurrencies & (1 << (BitIndex - 1))) > 0;
// removing from field
knownCurrencies &= ~(1 << (BitIndex - 1));
```
&nbsp;

### watchedFaction
Tracked faction at experience bar.
Value is the [Faction ReputationIndex](/files/DBC/335/faction#reputationindex) field.
&nbsp;

### drunk
Character's drunk state, 0 – 100.
* = 0: Sober
* < 50: Tipsy
* < 90: Drunk
* <= 100: Smashed
&nbsp;

### health
The characters current health.
&nbsp;

### power\[1-7]
Current character powers (snapshot from when the character was saved)
| Index | Name |
|-------|------|
| 1 | Mana |
| 2 | Rage |
| 3 | Focus |
| 4 | Energy |
| 5 | Happiness |
| 6 | Runes |
| 7 | Runic Power |
{.dense}

&nbsp;

### latency
This characters latency, or ping, in milliseconds, as of the last update.
&nbsp;

### talentGroupsCount
The number of specs this character has access to. Default value is 1. Maximum currently supported value is 2. Should never be 0 (this is a sign of a character created before the dual spec system.)
&nbsp;

### activeTalentGroup
The currently activated talent specialization for this character.
* 0: first spec
* 1: second spec
&nbsp;

### exploredZones
Explored areas stored in space separated bit masks of the [AreaTable AreaBit](/files/DBC/335/areatable#areabit) field.
```cpp
uint8  fieldIdx = uint8(AreaBit / 32);
uint32 maskBit  = 1 << (AreaBit % 32);
```
&nbsp;

### equipmentCache
Equipment shown on character login screen.
Space separated list of "[ItemEntry](../world/item_template#entry) EnchantmentId" pairs. 0 for no item equipped or item not enchanted. [SpellItemEnchantment ID](/files/DBC/335/spellitemenchantment#id).
Pairs are ordered from EQUIPMENT_SLOT_HEAD (0) to INVENTORY_SLOT_BAG_END-1 (22)

e.g.: `headItem headEnchantment neckItem neckEnchant … bag4Item bag4Enchantment`
&nbsp;

### ammoId
[item entry](../world/item_template#entry) of the equipped ammo item.
&nbsp;

### knownTitles
Granted titles stored in space separated bit masks of the [CharTitle MaskID](/files/DBC/335/chartitles#maskid) field.
```cpp
uint8  fieldIdx = uint8(MaskID / 32);
uint32 maskBit  = 1 << (MaskID % 32);
```
&nbsp;

### actionBars
A bitmask that contains visible actionbars for the player.
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x1 | Bottom Left Bar |
| 2 | 0x2 | Bottom Right Bar |
| 4 | 0x4 | Rigth Bar |
| 8 | 0x8 | Right Bar 2 |
{.dense}

&nbsp;

### grantableLevels
Number of levels that can be granted to the characters 'recruit a friend' partner.
&nbsp;

### deleteInfos_Account
Stores the [account id](../auth/account#id) if the character is deleted and worldserver.conf [`CharDelete.Method = 1`](/en/files/configuration/home).
&nbsp;

### deleteInfos_Name
Stores the **name** of character if the character is deleted and and worldserver.conf [`CharDelete.Method = 1`](/en/files/configuration/home).
&nbsp;

### deleteDate
Stores the date when the character was deleted and worldserver.conf [`CharDelete.Method = 1`](/en/files/configuration/home).
Will be checked by worldserver against [`CharDelete.KeepDays`](/en/files/configuration/home) in worldserver.conf. If this value is lower than **deleteDate** + `CharDelete.KeepDays` the character will be purged.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/corpse" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'corpse'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
