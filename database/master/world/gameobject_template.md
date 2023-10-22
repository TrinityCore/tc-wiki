---
title: gameobject_template
description: 
published: true
date: 2023-10-22T15:59:12.204Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:56.235Z
---

<a href="https://trinitycore.info/en/database/master/world/gameobject_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [displayId](#displayid) | int | unsigned |  | NO | 0 |  |  |
| [name](#name) | varchar(100) |  | MUL | NO | '' |  |  |
| [IconName](#iconname) | varchar(100) |  |  | NO | '' |  |  |
| [castBarCaption](#castbarcaption) | varchar(100) |  |  | NO | '' |  |  |
| [unk1](#unk1) | varchar(100) |  |  | NO | '' |  |  |
| [size](#size) | float |  |  | NO | 1 |  |  |
| [Data0](#data0) | int | signed |  | NO | 0 |  |  |
| [Data1](#data1) | int | signed |  | NO | 0 |  |  |
| [Data2](#data2) | int | signed |  | NO | 0 |  |  |
| [Data3](#data3) | int | signed |  | NO | 0 |  |  |
| [Data4](#data4) | int | signed |  | NO | 0 |  |  |
| [Data5](#data5) | int | signed |  | NO | 0 |  |  |
| [Data6](#data6) | int | signed |  | NO | 0 |  |  |
| [Data7](#data7) | int | signed |  | NO | 0 |  |  |
| [Data8](#data8) | int | signed |  | NO | 0 |  |  |
| [Data9](#data9) | int | signed |  | NO | 0 |  |  |
| [Data10](#data10) | int | signed |  | NO | 0 |  |  |
| [Data11](#data11) | int | signed |  | NO | 0 |  |  |
| [Data12](#data12) | int | signed |  | NO | 0 |  |  |
| [Data13](#data13) | int | signed |  | NO | 0 |  |  |
| [Data14](#data14) | int | signed |  | NO | 0 |  |  |
| [Data15](#data15) | int | signed |  | NO | 0 |  |  |
| [Data16](#data16) | int | signed |  | NO | 0 |  |  |
| [Data17](#data17) | int | signed |  | NO | 0 |  |  |
| [Data18](#data18) | int | signed |  | NO | 0 |  |  |
| [Data19](#data19) | int | signed |  | NO | 0 |  |  |
| [Data20](#data20) | int | signed |  | NO | 0 |  |  |
| [Data21](#data21) | int | signed |  | NO | 0 |  |  |
| [Data22](#data22) | int | signed |  | NO | 0 |  |  |
| [Data23](#data23) | int | signed |  | NO | 0 |  |  |
| [Data24](#data24) | int | signed |  | NO | 0 |  |  |
| [Data25](#data25) | int | signed |  | NO | 0 |  |  |
| [Data26](#data26) | int | signed |  | NO | 0 |  |  |
| [Data27](#data27) | int | signed |  | NO | 0 |  |  |
| [Data28](#data28) | int | signed |  | NO | 0 |  |  |
| [Data29](#data29) | int | signed |  | NO | 0 |  |  |
| [Data30](#data30) | int | signed |  | NO | 0 |  |  |
| [Data31](#data31) | int | signed |  | NO | 0 |  |  |
| [Data32](#data32) | int | signed |  | NO | 0 |  |  |
| [Data33](#data33) | int | signed |  | NO | 0 |  |  |
| [Data34](#data34) | int | signed |  | NO | 0 |  |  |
| [ContentTuningId](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [AIName](#ainame) | varchar(64) |  |  | NO | '' |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [StringId](#stringid) | varchar(64) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
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
[GameObjectDisplayInfo ID](https://wow.tools/dbc/?dbc=gameobjectdisplayinfo) sent to the client.
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

### Data\[0-34]
The content of the Data fields depends on the gameobject **type**.
Fields denoted as *unused* aren't further handled by the core but just sent to the client as is.

**_GAMEOBJECT_TYPE_DOOR (0)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen | 0, 1 | initializes with state: GO_ACTIVATED |
| 1 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 2 | autoCloseTime |  | time untill state reset in milliseconds |
| 3 | noDamageImmune | 0, 1 | can not be used by player under immunity; break opening whenever you recieve damage? |
| 4 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 5 | closeTextID | unknown TextID | unused |
| 6 | ignoredByPathing | -1, 0, 1| unused |
| 7 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_BUTTON (1)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen | 0, 1 | initializes with state: GO_ACTIVATED |
| 1 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 2 | autoCloseTime |  | time untill state reset in milliseconds |
| 3 | linkedTrap | [gameobject_template.entry](../world/gameobject_template#entry) | the trap object must be of GAMEOBJECT_TYPE_TRAP (6) |
| 4 | noDamageImmune | 0, 1 | can not be used by player under immunity; isBattlegroundObject |
| 5 | large | 0, 1 | large objects are visible from further away |
| 6 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 7 | closeTextID | unknown TextID | unused |
| 8 | losOK | 0, 1 | ignores line of sight checks |
| 9 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_QUESTGIVER (2)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | questList | unknown ID | unused |
| 2 | pageMaterial | [PageTextMaterial ID](https://wow.tools/dbc/?dbc=pagetextmaterial) | Background texture of the gossip window |
| 3 | gossipID | [gossip_menu.entry](../world/gossip_menu#entry)  |  |
| 4 | customAnim | 0 � 4 | unused |
| 5 | noDamageImmune | 0, 1 | can not be used by player under immunity |
| 6 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 7 | losOK | 0, 1 | ignores line of sight checks |
| 8 | allowMounted | 0, 1 | Is usable while on mount/vehicle. |
| 9 | large | 0, 1 | large objects are visible from further away |
| 10 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_CHEST (3)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | lootId | [gameobject_loot_template.entry](../world/gameobject_loot_template#entry) |  |
| 2 | chestRestockTime | time in seconds | restocks if not fully looted |
| 3 | consumable | 0, 1 | despawns after use |
| 4 | minSuccessOpens |  | Min successful loot attempts for Mining, Herbalism etc (deprecated post 3.0) |
| 5 | maxSuccessOpens |  | Max successful loot attempts for Mining, Herbalism etc (deprecated post 3.0) |
| 6 | eventId | unknown EventID | lootedEvent |
| 7 | linkedTrapId | [gameobject_template.entry](../world/gameobject_template#entry) | the trap object must be of GAMEOBJECT_TYPE_TRAP (6) |
| 8 | questId | [quest_template.ID](../world/quest_template#id) | quest must be rewarded for GO activation; not currently used |
| 9 | level | 0 � 80 | minimum level required to open this gameobject |
| 10 | losOK | 0, 1 | ignores line of sight checks |
| 11 | leaveLoot | 0, 1 | unused |
| 12 | notInCombat | 0, 1 | unused |
| 13 | logLoot | 0, 1 | unused |
| 14 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 15 | groupLootRules | 0, 1 | use group loot ruleset |
| 16 | floatingTooltip | 0, 1 | unused |
| 17 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_BINDER (4)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_GENERIC (5)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | floatingTooltip | 0, 1 | unused |
| 1 | highlight | 0, 1 | unused |
| 2 | serverOnly | 0, 1 | not visible in client |
| 3 | large | 0, 1 | large objects are visible from further away |
| 4 | floatOnWater | 0, 1 | unused |
| 5 | questID | [quest_template.ID](../world/quest_template#id) | quest must be active for GO interaction |
| 6 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_TRAP (6)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | level |  | npc level equivalent for casted spell |
| 2 | diameter |  | diameter for trap activation |
| 3 | spellId | [Spell ID](https://wow.tools/dbc/?dbc=spell&) |  |
| 4 | type | 0, 1, 2 | 0: trap with no despawn after cast.<br>1: trap despawns after cast.<br>2: spell casts on spawn. |
| 5 | cooldown |  | time in seconds |
| 6 | autoCloseTime |  | time untill state reset in milliseconds |
| 7 | startDelay |  | time in seconds |
| 8 | serverOnly | 0, 1 | not visible in client |
| 9 | stealthed | 0, 1 | requires stealth detection for type trap to be visible |
| 10 | large | 0, 1 | large objects are visible from further away |
| 11 | invisible | 0, 1 | requires invisibility detection for type trap to be visible |
| 12 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 13 | closeTextID | unknown TextID | unused |
| 14 | ignoreTotems | 0, 1 | unused |
| 15 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_CHAIR (7)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | slots |  | number of players that can sit down on it |
| 1 | height | 0, 1, 2 | offset to [`UnitStandStateType`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Entities/Unit/UnitDefines.h) applied to sitting player |
| 2 | onlyCreatorUse | 0, 1 | unused |
| 3 | triggeredEvent | unknown eventID | unused |
| 4 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_SPELL_FOCUS (8)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | focusId | [SpellFocusObject ID](https://wow.tools/dbc/?dbc=spellfocusobject) | also appears as [SpellCastingRequirements RequiresSpellFocus](https://wow.tools/dbc/?dbc=spellcastingrequirements) |
| 1 | dist |  | radius in m |
| 2 | linkedTrapId | [gameobject_template.entry](../world/gameobject_template#entry) | the trap object must be of GAMEOBJECT_TYPE_TRAP (6) |
| 3 | serverOnly | 0, 1 | not visible in client |
| 4 | questID | [quest_template.ID](../world/quest_template#id) | quest must be active for GO interaction |
| 5 | large | 0, 1 | large objects are visible from further away |
| 6 | floatingTooltip | 0, 1 | unused |
| 7 | floatOnWater | 0, 1 | unused |
| 8 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_TEXT (9)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | pageID | [page_text.ID](../world/page_text#id) |  |
| 1 | language | [Language ID](https://wow.tools/dbc/?dbc=languages) |  |
| 2 | pageMaterial | [PageTextMaterial ID](https://wow.tools/dbc/?dbc=pagetextmaterial) | Background texture of the gossip window |
| 3 | allowMounted | 0, 1 | Is usable while on mount/vehicle. |
| 4 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_GOOBER (10)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | questId | [quest_template.ID](../world/quest_template#id) | quest must be active for GO interaction |
| 2 | eventId | [event_script.id](../world/scripts#id) | also usable by script oder SmartAI |
| 3 | autoCloseTime |  | time untill state reset in milliseconds |
| 4 | customAnim | 0 � 4 | just sent to client on use |
| 5 | consumable | 0, 1 | despawns after use |
| 6 | cooldown |  | time in seconds |
| 7 | pageId | [page_text.ID](../world/page_text#id) |  |
| 8 | language | [Language ID](https://wow.tools/dbc/?dbc=languages) |  |
| 9 | pageMaterial | [PageTextMaterial ID](https://wow.tools/dbc/?dbc=pagetextmaterial) | Background texture of the gossip window |
| 10 | spellId | [Spell ID](/files/DBC/335/spell#id) | spell cast on interaction |
| 11 | noDamageImmune | 0, 1 | can not be used by player under immunity |
| 12 | linkedTrapId | [gameobject_template.entry](../world/gameobject_template#entry) | the trap object must be of GAMEOBJECT_TYPE_TRAP (6) |
| 13 | large | 0, 1 | large objects are visible from further away |
| 14 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 15 | closeTextID | unknown TextID | unused |
| 16 | losOK | 0, 1 | ignores line of sight checks; isBattlegroundObject |
| 17 | allowMounted | 0, 1 | Is usable while on mount/vehicle. |
| 18 | floatingTooltip | 0, 1 | unused |
| 19 | gossipID | [gossip_menu.entry](../world/gossip_menu#entry)  |  |
| 20 | WorldStateSetsState | 0, 1 | unused |
| 21 | floatOnWater | 0, 1 | unused |
| 22 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_TRANSPORT (11)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | pause |  | ? used as level of object ? |
| 1 | startOpen | 0, 1 | initializes with state: GO_ACTIVATED |
| 2 | autoCloseTime |  | time untill state reset in milliseconds |
| 3 | pause1EventID | unknown EventID | unused |
| 4 | pause2EventID | unknown EventID | unused |
| 5 | mapID | [Map ID](https://wow.tools/dbc/?dbc=map) | unused; MO-Transports are their own maps |
{.dense}

**_GAMEOBJECT_TYPE_AREADAMAGE (12)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | radius |  | unused |
| 2 | damageMin |  | unused |
| 3 | damageMax |  | unused |
| 4 | damageSchool |  | unused |
| 5 | autoCloseTime |  | time untill state reset in milliseconds |
| 6 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 7 | closeTextID | unknown TextID | unused |
{.dense}

**_GAMEOBJECT_TYPE_CAMERA (13)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | cinematicId | [CinematicCamera ID](https://wow.tools/dbc/?dbc=cinematiccamera) |  |
| 2 | eventID | [event_script.id](../world/scripts#id) | also usable by script oder SmartAI |
| 3 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 4 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_MAP_OBJECT (14)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_MO_TRANSPORT (15)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | taxiPathId | [TaxiPath ID](https://wow.tools/dbc/?dbc=taxipath) |  |
| 1 | moveSpeed |  |  |
| 2 | accelRate |  |  |
| 3 | startEventID | unknown EventID | unused |
| 4 | stopEventID | unknown EventID | unused |
| 5 | transportPhysics |  | unused |
| 6 | mapID | [Map ID](https://wow.tools/dbc/?dbc=map) | MO-Transports are their own maps |
| 7 | worldState1 |  | unused |
| 8 | canBeStopped | 0, 1 |  |
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
| 0 | reqParticipants |  | number of unique player interactions |
| 1 | spellId | [Spell ID](https://wow.tools/dbc/?dbc=spell) | spell cast when **reqParticipants** is fulfilled |
| 2 | animSpell | [Spell ID](https://wow.tools/dbc/?dbc=spell) | spell cast on interaction |
| 3 | ritualPersistent | 0, 1 | do not deactivate after **reqParticipants** is fulfilled |
| 4 | casterTargetSpell | [Spell ID](https://wow.tools/dbc/?dbc=spell) | cast on random user after **reqParticipants** is fulfilled |
| 5 | casterTargetSpellTargets | N | **casterTargetSpell** is cast N times |
| 6 | castersGrouped | 0, 1 | user must be in party with owner |
| 7 | ritualNoTargetCheck | 0, 1 | unused |
| 8 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_MAILBOX (19)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_DO_NOT_USE (20)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_GUARDPOST (21)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | creatureID | [creature_template.entry](../world/creature_template#entry) | unused |
| 1 | charges |  | max. number of uses |
{.dense}

**_GAMEOBJECT_TYPE_SPELLCASTER (22)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | spellId | [Spell ID](https://wow.tools/dbc/?dbc=spell) | spell cast on interaction |
| 1 | charges |  | max. number of uses |
| 2 | partyOnly | 0, 1 | user must be in party with owner |
| 3 | allowMounted | 0, 1 | Is usable while on mount/vehicle. |
| 4 | large | 0, 1 | large objects are visible from further away |
| 5 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_MEETINGSTONE (23)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | minLevel |  | min. player level required for interaction |
| 1 | maxLevel |  | min. player level allowed for interaction |
| 2 | areaID | [AreaTable ID](https://wow.tools/dbc/?dbc=areatable) | unused; |
{.dense}

**_GAMEOBJECT_TYPE_FLAGSTAND (24)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | pickupSpell | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 2 | radius |  | unused; interaction distance? |
| 3 | returnAura | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 4 | returnSpell | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 5 | noDamageImmune | 0, 1 | can not be used by player under immunity |
| 6 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
| 7 | losOK | 0, 1 | ignores line of sight checks |
| 8 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_FISHINGHOLE (25)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | radius |  | how close bobber must land for sending loot |
| 1 | lootId | [gameobject_loot_template.Entry](../world/loot_template#entry) |  |
| 2 | minSuccessOpens |  | minimum number of fishing attempts |
| 3 | maxSuccessOpens |  | maximum number of fishing attempts |
| 4 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) | possibly 1628 for all? |
{.dense}

**_GAMEOBJECT_TYPE_FLAGDROP (26)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | lockId | [Lock ID](https://wow.tools/dbc/?dbc=lock) |  |
| 1 | eventID | unknown EventID | unused |
| 2 | pickupSpell | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 3 | noDamageImmune | 0, 1 | can not be used by player under immunity |
| 4 | openTextID | unknown TextID | unused; can be used to replace castBarCaption? |
{.dense}

**_GAMEOBJECT_TYPE_MINI_GAME (27)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | gameType |  | unused |
{.dense}

**_GAMEOBJECT_TYPE_DO_NOT_USE_2 (28)_**
*no data set*
{.dense}

**_GAMEOBJECT_TYPE_CAPTURE_POINT (29)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | radius |  | distance from which players count towards the objective |
| 1 | spell |  | unused; server side spell |
| 2 | worldState1 |  | worldstate variable for active capture |
| 3 | worldstate2 |  | worldstate variable for capture progress |
| 4 | winEventID1 | unknown EventID  | unused |
| 5 | winEventID2 | unknown EventID  | unused |
| 6 | contestedEventID1 | unknown EventID  | unused |
| 7 | contestedEventID2 | unknown EventID  | unused |
| 8 | progressEventID1 | unknown EventID  | unused |
| 9 | progressEventID2 | unknown EventID  | unused |
| 10 | neutralEventID1 | unknown EventID  | unused |
| 11 | neutralEventID2 | unknown EventID  | unused |
| 12 | neutralPercent | 0 � 100 | neutral area of progress bar; half of remaining pct belongs to each faction  |
| 13 | worldstate3 |  | worldstate variable for **neutralPercent** |
| 14 | minSuperiority |  | unused; min players required for capture |
| 15 | maxSuperiority |  | unused; max players contributing to capture |
| 16 | minTime |  | capture time in seconds for max players for full capture |
| 17 | maxTime |  | capture time in seconds for min players for full capture |
| 18 | large | 0, 1 | large objects are visible from further away |
| 19 | highlight | 0, 1 | unused |
| 20 | startingValue | 0 � 100 | unused; 0: Horde owned; 100: Alliance owned |
| 21 | unidirectional | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_AURA_GENERATOR (30)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | startOpen | 0, 1 | initializes with state: GO_ACTIVATED |
| 1 | radius |  | unused |
| 2 | auraID1 | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 3 | conditionID1 | unknown ID | unused |
| 4 | auraID2 | [Spell ID](https://wow.tools/dbc/?dbc=spell) | unused |
| 5 | conditionID2 | 0, -1 | unused |
| 6 | serverOnly | 0, 1 | not visible in client |
{.dense}

**_GAMEOBJECT_TYPE_DUNGEON_DIFFICULTY (31)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | mapID | [Map ID](/files/DBC/335/map#id) | destination map |
| 1 | difficulty | 0 � 3 | [`enum Difficulty`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/DataStores/DBCEnums.h) |
{.dense}

**_GAMEOBJECT_TYPE_BARBER_CHAIR (32)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | chairheight | 0, 1, 2 | offset to [`UnitStandStateType`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/Entities/Unit/UnitDefines.h) applied to sitting player |
| 1 | heightOffset | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_DESTRUCTIBLE_BUILDING (33)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | intactNumHits |  | **intactNumHits** +  **damagedNumHits** = total health|
| 1 | creditProxyCreature | [creature_template.entry](../world/creature_template#entry) | unused; kill credit |
| 2 | empty1 |  | unused |
| 3 | intactEvent | eventID | unused |
| 4 | empty2 | [GameObjectDisplayInfo ID](https://wow.tools/dbc/?dbc=gameobjectdisplayinfo) | unused; damaged displayId |
| 5 | damagedNumHits |  | if at or below **damagedNumHits**: GO state is DAMAGED |
| 6 | empty3 |  | unused |
| 7 | empty4 |  | unused |
| 8 | empty5 |  | unused |
| 9 | damagedEvent | eventID | handled by script oder SmartAI |
| 10 | empty6 | [GameObjectDisplayInfo ID](https://wow.tools/dbc/?dbc=gameobjectdisplayinfo) | unused; destroyed displayId |
| 11 | empty7 |  | unused |
| 12 | empty8 |  | unused |
| 13 | empty9 |  | unused |
| 14 | destroyedEvent | eventID | handled by script oder SmartAI |
| 15 | empty10 |  | unused |
| 16 | rebuildingTimeSecs |  | unused |
| 17 | empty11 |  | unused |
| 18 | destructibleData | [DestructibleModelData ID](https://wow.tools/dbc/?dbc=destructiblemodeldata) |  |
| 19 | rebuildingEvent | eventID | handled by script oder SmartAI |
| 20 | empty12 |  | unused |
| 21 | empty13 |  | unused |
| 22 | damageEvent | eventID | unused |
| 23 | empty14 |  | unused |
{.dense}

**_GAMEOBJECT_TYPE_GUILD_BANK (34)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | conditionID1 | 0 | unused |
{.dense}

**_GAMEOBJECT_TYPE_TRAPDOOR (35)_**
| Data# | Name | Value | Comment |
|-------|------|-------|---------|
| 0 | whenToPause | 0 | unused |
| 1 | startOpen | 0, 1 | initializes with state: GO_ACTIVATED |
| 2 | autoClose | 0 | unused |
{.dense}

### ContentTuningId
*- no description -*
&nbsp;

### AIName
This field is overridden by ScriptName field if both are set.
| Value | Description |
|-------|-------------|
| SmartGameObjectAI | Gameobject uses smart AI. |
{.dense}
&nbsp;

### ScriptName
The name of the script that this object uses, if any. This ties a script from a scripting engine to this gameobject.
&nbsp;

### StringId
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gameobject_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
