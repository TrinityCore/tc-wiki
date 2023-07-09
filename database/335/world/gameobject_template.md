---
title: gameobject_template
description: 
published: true
date: 2023-07-09T22:55:53.140Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:30.524Z
---

<a href="https://trinitycore.info/en/database/335/world/gameobject_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the description of gameobjects. Each spawned object is an instance of a template present in this table, this means every gameobject MUST be defined in this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [displayId](#displayid) | mediumint | unsigned |  | NO | 0 |  |  |
| [name](#name) | varchar(100) |  | MUL | NO | '' |  |  |
| [IconName](#iconname) | varchar(100) |  |  | NO | '' |  |  |
| [castBarCaption](#castbarcaption) | varchar(100) |  |  | NO | '' |  |  |
| [unk1](#unk1) | varchar(100) |  |  | NO | '' |  |  |
| [size](#size) | float |  |  | NO | 1 |  |  |
| [Data0](#data0) | int | unsigned |  | NO | 0 |  |  |
| [Data1](#data1) | int | signed |  | NO | 0 |  |  |
| [Data2](#data2) | int | unsigned |  | NO | 0 |  |  |
| [Data3](#data3) | int | unsigned |  | NO | 0 |  |  |
| [Data4](#data4) | int | unsigned |  | NO | 0 |  |  |
| [Data5](#data5) | int | unsigned |  | NO | 0 |  |  |
| [Data6](#data6) | int | signed |  | NO | 0 |  |  |
| [Data7](#data7) | int | unsigned |  | NO | 0 |  |  |
| [Data8](#data8) | int | unsigned |  | NO | 0 |  |  |
| [Data9](#data9) | int | unsigned |  | NO | 0 |  |  |
| [Data10](#data10) | int | unsigned |  | NO | 0 |  |  |
| [Data11](#data11) | int | unsigned |  | NO | 0 |  |  |
| [Data12](#data12) | int | unsigned |  | NO | 0 |  |  |
| [Data13](#data13) | int | unsigned |  | NO | 0 |  |  |
| [Data14](#data14) | int | unsigned |  | NO | 0 |  |  |
| [Data15](#data15) | int | unsigned |  | NO | 0 |  |  |
| [Data16](#data16) | int | unsigned |  | NO | 0 |  |  |
| [Data17](#data17) | int | unsigned |  | NO | 0 |  |  |
| [Data18](#data18) | int | unsigned |  | NO | 0 |  |  |
| [Data19](#data19) | int | unsigned |  | NO | 0 |  |  |
| [Data20](#data20) | int | unsigned |  | NO | 0 |  |  |
| [Data21](#data21) | int | unsigned |  | NO | 0 |  |  |
| [Data22](#data22) | int | unsigned |  | NO | 0 |  |  |
| [Data23](#data23) | int | unsigned |  | NO | 0 |  |  |
| [AIName](#ainame) | char(64) |  |  | NO | '' |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### entry
Gameobject's unique id.
&nbsp;

### type
| ID | Name |
|----|------|
| 0 | GAMEOBJECT_TYPE_DOOR |
| 1 | GAMEOBJECT_TYPE_BUTTON |
| 2 | GAMEOBJECT_TYPE_QUESTGIVER |
| 3 | GAMEOBJECT_TYPE_CHEST |
| 4 | GAMEOBJECT_TYPE_BINDER |
| 5 | GAMEOBJECT_TYPE_GENERIC |
| 6 | GAMEOBJECT_TYPE_TRAP |
| 7 | GAMEOBJECT_TYPE_CHAIR |
| 8 | GAMEOBJECT_TYPE_SPELL_FOCUS |
| 9 | GAMEOBJECT_TYPE_TEXT |
| 10 | GAMEOBJECT_TYPE_GOOBER |
| 11 | GAMEOBJECT_TYPE_TRANSPORT |
| 12 | GAMEOBJECT_TYPE_AREADAMAGE |
| 13 | GAMEOBJECT_TYPE_CAMERA |
| 14 | GAMEOBJECT_TYPE_MAP_OBJECT |
| 15 | GAMEOBJECT_TYPE_MO_TRANSPORT |
| 16 | GAMEOBJECT_TYPE_DUEL_ARBITER |
| 17 | GAMEOBJECT_TYPE_FISHINGNODE |
| 18 | GAMEOBJECT_TYPE_SUMMONING_RITUAL |
| 19 | GAMEOBJECT_TYPE_MAILBOX |
| 20 | GAMEOBJECT_TYPE_DO_NOT_USE |
| 21 | GAMEOBJECT_TYPE_GUARDPOST |
| 22 | GAMEOBJECT_TYPE_SPELLCASTER |
| 23 | GAMEOBJECT_TYPE_MEETINGSTONE |
| 24 | GAMEOBJECT_TYPE_FLAGSTAND |
| 25 | GAMEOBJECT_TYPE_FISHINGHOLE |
| 26 | GAMEOBJECT_TYPE_FLAGDROP |
| 27 | GAMEOBJECT_TYPE_MINI_GAME |
| 28 | GAMEOBJECT_TYPE_DO_NOT_USE_2 |
| 29 | GAMEOBJECT_TYPE_CAPTURE_POINT |
| 30 | GAMEOBJECT_TYPE_AURA_GENERATOR |
| 31 | GAMEOBJECT_TYPE_DUNGEON_DIFFICULTY |
| 32 | GAMEOBJECT_TYPE_BARBER_CHAIR |
| 33 | GAMEOBJECT_TYPE_DESTRUCTIBLE_BUILDING |
| 34 | GAMEOBJECT_TYPE_GUILD_BANK |
| 35 | GAMEOBJECT_TYPE_TRAPDOOR |
{.dense}

&nbsp;

### displayId
Graphic model id sent to the client from GameObjectDisplayInfo.dbc 
&nbsp;

### name
Object's name
&nbsp;

### IconName
Use special mouse pointer when hovering over the gameobject. 
| Value | Description | 
|-------|-------------|
| Directions | Used for Guards and Teleporter NPC's. |
| Gunner | Indicator of a Turret NPC/Player Controlled. |
| vehichleCursor | Indicator that this is a PCV (Player Controlled Vehicle) |
| Driver | Shows a Steering Wheel icon when mouse over. |
| Attack | Shows a Sword icon indicating you can attack this target. |
| Buy | Shows a Brown Bag icon. |
| Speak | Shows a Chat Bubble icon if this Object has Quest/Gossip options. |
| Pickup | Shows a Hand Grasping icon if this Object can be picked up for quest/items. |
| Interact | Shows Cog icon commonly used for quest/transport. |
| Trainer | Shows a Book icon. |
| Taxi | Shows a Boot w/Wings icon. |
| Repair | Shows a Anvil icon. |
| LootAll | Shows a Multiple Brown Bag icon (Same as holding Shift before looting a creature). |
| Quest | Unused or Unknown. (See EntryID 32870 The Real Ronakada). |
| PVP | Unused or Unknown.(See EntryID 29387 Arena Master: Dalaran Arena). |
| Point | |
{.dense}

> Note: You may experience minor bugs trying to get the Quest (Yellow exclamation mark) working. However; the rest of the listed icons works.
{.is-info}

&nbsp;

### castBarCaption
Shows unique text in the object's casting bar when the object is used.
&nbsp;

### unk1
Unknown. Just sent to client.
&nbsp;

### size
Object's size must be set because graphic models can be resample.
&nbsp;

### Data\[0-23]
The content of the Data fields depends on the gameobject **type**.

**_GAMEOBJECT_TYPE_DOOR (0)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen | 0, 1 | used client side to determine GO_ACTIVATED means open/closed |
| 1 | lockId | Id from Lock.dbc |  |
| 2 | autoCloseTime |  | time till state reset in milliseconds |
| 3 | noDamageImmune |  0, 1 | unused; break opening whenever you recieve damage? |
| 4 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 5 | closeTextID | unknown TextID | unused |
| 6 | ignoredByPathing | -1, 0, 1| unused |
| 7 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_BUTTON (1)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen | 0, 1 | used client side to determine GO_ACTIVATED |
| 1 | lockId | Id from Lock.dbc |  |
| 2 | autoCloseTime |  | time till state reset in milliseconds |
| 3 | linkedTrap | [object entry](../world/gameobject_template#entry) | the trap object must be of GAMEOBJECT_TYPE_TRAP (6) |
| 4 | noDamageImmune | 0, 1 | unused; isBattlegroundObject |
| 5 | large | 0, 1 | large object are visible from further away |
| 6 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 7 | closeTextID | unknown TextID | unused |
| 8 | losOK | 0, 1 | ignores line of sight checks |
| 9 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_QUESTGIVER (2)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  | -> Lock.dbc |
| 1 | questList |  |  |
| 2 | pageMaterial |  |  |
| 3 | gossipID |  |  |
| 4 | customAnim |  |  |
| 5 | noDamageImmune |  |  |
| 6 | openTextID |  | can be used to replace castBarCaption? |
| 7 | losOK |  |  |
| 8 | allowMounted |  | Is usable while on mount/vehicle. (0/1) |
| 9 | large |  |  |
| 10 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_CHEST (3)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  | -> Lock.dbc |
| 1 | lootId |  |  |
| 2 | chestRestockTime |  |  |
| 3 | consumable |  |  |
| 4 | minSuccessOpens |  | Deprecated, pre 3.0 was used for mining nodes but since WotLK all mining nodes are usable once and grant all loot with a single use |
| 5 | maxSuccessOpens |  | Deprecated, pre 3.0 was used for mining nodes but since WotLK all mining nodes are usable once and grant all loot with a single use |
| 6 | eventId |  | lootedEvent |
| 7 | linkedTrapId |  |  |
| 8 | questId |  | not used currently but store quest required for GO activation for player |
| 9 | level |  |  |
| 10 | losOK |  |  |
| 11 | leaveLoot |  |  |
| 12 | notInCombat |  |  |
| 13 | logLoot |  |  |
| 14 | openTextID |  | can be used to replace castBarCaption? |
| 15 | groupLootRules |  |  |
| 16 | floatingTooltip |  |  |
| 17 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_BINDER (4)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_GENERIC (5)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | floatingTooltip |  |  |
| 1 | highlight |  |  |
| 2 | serverOnly |  |  |
| 3 | large |  |  |
| 4 | floatOnWater |  |  |
| 5 | questID |  |  |
| 6 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_TRAP (6)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  | -> Lock.dbc |
| 1 | level |  |  |
| 2 | diameter |  | diameter for trap activation |
| 3 | spellId |  |  |
| 4 | type |  | 0 trap with no despawn after cast. 1 trap despawns after cast. 2 bomb casts on spawn. |
| 5 | cooldown |  | time in secs |
| 6 | autoCloseTime |  |  |
| 7 | startDelay |  |  |
| 8 | serverOnly |  |  |
| 9 | stealthed |  |  |
| 10 | large |  |  |
| 11 | invisible |  |  |
| 12 | openTextID |  | can be used to replace castBarCaption? |
| 13 | closeTextID |  |  |
| 14 | ignoreTotems |  |  |
| 15 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_CHAIR (7)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | slots |  |  |
| 1 | height |  |  |
| 2 | onlyCreatorUse |  |  |
| 3 | triggeredEvent |  |  |
| 4 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_SPELL_FOCUS (8)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | focusId |  |  |
| 1 | dist |  |  |
| 2 | linkedTrapId |  |  |
| 3 | serverOnly |  |  |
| 4 | questID |  |  |
| 5 | large |  |  |
| 6 | floatingTooltip |  |  |
| 7 | floatOnWater |  |  |
| 8 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_TEXT (9)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | pageID |  |  |
| 1 | language |  |  |
| 2 | pageMaterial |  |  |
| 3 | allowMounted |  | Is usable while on mount/vehicle. (0/1) |
| 4 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_GOOBER (10)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  | -> Lock.dbc |
| 1 | questId |  |  |
| 2 | eventId |  |  |
| 3 | autoCloseTime |  |  |
| 4 | customAnim |  |  |
| 5 | consumable |  |  |
| 6 | cooldown |  |  |
| 7 | pageId |  |  |
| 8 | language |  |  |
| 9 | pageMaterial |  |  |
| 10 | spellId |  |  |
| 11 | noDamageImmune |  |  |
| 12 | linkedTrapId |  |  |
| 13 | large |  |  |
| 14 | openTextID |  | can be used to replace castBarCaption? |
| 15 | closeTextID |  |  |
| 16 | losOK |  | isBattlegroundObject |
| 17 | allowMounted |  | Is usable while on mount/vehicle. (0/1) |
| 18 | floatingTooltip |  |  |
| 19 | gossipID |  |  |
| 20 | WorldStateSetsState |  |  |
| 21 | floatOnWater |  |  |
| 22 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_TRANSPORT (11)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | pause |  |  |
| 1 | startOpen |  |  |
| 2 | autoCloseTime |  | secs till autoclose = autoCloseTime / 0x10000 |
| 3 | pause1EventID |  |  |
| 4 | pause2EventID |  |  |
| 5 | mapID |  |  |
{.dense}

**_GAMEOBJECT_TYPE_AREADAMAGE (12)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  |  |
| 1 | radius |  |  |
| 2 | damageMin |  |  |
| 3 | damageMax |  |  |
| 4 | damageSchool |  |  |
| 5 | autoCloseTime |  | secs till autoclose = autoCloseTime / 0x10000 |
| 6 | openTextID |  |  |
| 7 | closeTextID |  |  |
{.dense}

**_GAMEOBJECT_TYPE_CAMERA (13)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  | -> Lock.dbc |
| 1 | cinematicId |  |  |
| 2 | eventID |  |  |
| 3 | openTextID |  | can be used to replace castBarCaption? |
| 4 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_MAP_OBJECT (14)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_MO_TRANSPORT (15)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | taxiPathId |  |  |
| 1 | moveSpeed |  |  |
| 2 | accelRate |  |  |
| 3 | startEventID |  |  |
| 4 | stopEventID |  |  |
| 5 | transportPhysics |  |  |
| 6 | mapID |  |  |
| 7 | worldState1 |  |  |
| 8 | canBeStopped |  |  |
{.dense}

**_GAMEOBJECT_TYPE_DUEL_ARBITER (16)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_FISHINGNODE (17)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_SUMMONING_RITUAL (18)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | reqParticipants |  |  |
| 1 | spellId |  |  |
| 2 | animSpell |  |  |
| 3 | ritualPersistent |  |  |
| 4 | casterTargetSpell |  |  |
| 5 | casterTargetSpellTargets |  |  |
| 6 | castersGrouped |  |  |
| 7 | ritualNoTargetCheck |  |  |
| 8 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_MAILBOX (19)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_DO_NOT_USE (20)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_GUARDPOST (21)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | creatureID |  |  |
| 1 | charges |  |  |
{.dense}

**_GAMEOBJECT_TYPE_SPELLCASTER (22)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | spellId |  |  |
| 1 | charges |  |  |
| 2 | partyOnly |  |  |
| 3 | allowMounted |  | Is usable while on mount/vehicle. (0/1) |
| 4 | large |  |  |
| 5 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_MEETINGSTONE (23)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | minLevel |  |  |
| 1 | maxLevel |  |  |
| 2 | areaID |  |  |
{.dense}

**_GAMEOBJECT_TYPE_FLAGSTAND (24)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  |  |
| 1 | pickupSpell |  |  |
| 2 | radius |  |  |
| 3 | returnAura |  |  |
| 4 | returnSpell |  |  |
| 5 | noDamageImmune |  |  |
| 6 | openTextID |  |  |
| 7 | losOK |  |  |
| 8 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_FISHINGHOLE (25)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | radius |  | how close bobber must land for sending loot |
| 1 | lootId |  |  |
| 2 | minSuccessOpens |  |  |
| 3 | maxSuccessOpens |  |  |
| 4 | lockId |  | -> Lock.dbc; possibly 1628 for all? |
{.dense}

**_GAMEOBJECT_TYPE_FLAGDROP (26)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId |  |  |
| 1 | eventID |  |  |
| 2 | pickupSpell |  |  |
| 3 | noDamageImmune |  |  |
| 4 | openTextID |  |  |
{.dense}

**_GAMEOBJECT_TYPE_MINI_GAME (27)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | gameType |  |  |
{.dense}

**_GAMEOBJECT_TYPE_DO_NOT_USE_2 (28)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_CAPTURE_POINT (29)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | radius |  |  |
| 1 | spell |  |  |
| 2 | worldState1 |  |  |
| 3 | worldstate2 |  |  |
| 4 | winEventID1 |  |  |
| 5 | winEventID2 |  |  |
| 6 | contestedEventID1 |  |  |
| 7 | contestedEventID2 |  |  |
| 8 | progressEventID1 |  |  |
| 9 | progressEventID2 |  |  |
| 10 | neutralEventID1 |  |  |
| 11 | neutralEventID2 |  |  |
| 12 | neutralPercent |  |  |
| 13 | worldstate3 |  |  |
| 14 | minSuperiority |  |  |
| 15 | maxSuperiority |  |  |
| 16 | minTime |  |  |
| 17 | maxTime |  |  |
| 18 | large |  |  |
| 19 | highlight |  |  |
| 20 | startingValue |  |  |
| 21 | unidirectional |  |  |
{.dense}

**_GAMEOBJECT_TYPE_AURA_GENERATOR (30)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen |  |  |
| 1 | radius |  |  |
| 2 | auraID1 |  |  |
| 3 | conditionID1 |  |  |
| 4 | auraID2 |  |  |
| 5 | conditionID2 |  |  |
| 6 | serverOnly |  |  |
{.dense}

**_GAMEOBJECT_TYPE_DUNGEON_DIFFICULTY (31)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | mapID |  |  |
| 1 | difficulty |  |  |
{.dense}

**_GAMEOBJECT_TYPE_BARBER_CHAIR (32)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | chairheight |  |  |
| 1 | heightOffset |  |  |
{.dense}

**_GAMEOBJECT_TYPE_DESTRUCTIBLE_BUILDING (33)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | intactNumHits |  |  |
| 1 | creditProxyCreature |  |  |
| 2 | empty1 |  |  |
| 3 | intactEvent |  |  |
| 4 | empty2 |  |  |
| 5 | damagedNumHits |  |  |
| 6 | empty3 |  |  |
| 7 | empty4 |  |  |
| 8 | empty5 |  |  |
| 9 | damagedEvent |  |  |
| 10 | empty6 |  |  |
| 11 | empty7 |  |  |
| 12 | empty8 |  |  |
| 13 | empty9 |  |  |
| 14 | destroyedEvent |  |  |
| 15 | empty10 |  |  |
| 16 | rebuildingTimeSecs |  |  |
| 17 | empty11 |  |  |
| 18 | destructibleData |  |  |
| 19 | rebuildingEvent |  |  |
| 20 | empty12 |  |  |
| 21 | empty13 |  |  |
| 22 | damageEvent |  |  |
| 23 | empty14 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_GUILD_BANK (34)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | conditionID1 |  |  |
{.dense}

**_GAMEOBJECT_TYPE_TRAPDOOR (35)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | whenToPause |  |  |
| 1 | startOpen |  |  |
| 2 | autoClose |  |  |
{.dense}

&nbsp;

### AIName
This field is overridden by ScriptName field if both are set.
| Value | Description |
|-------|-------------|
| SmartGameObjectAI | Creature uses new smart AI. |
{.dense}

&nbsp;

### ScriptName
The name of the script that this object uses, if any. This ties a script from a scripting engine to this gameobject.
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/gameobject_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
