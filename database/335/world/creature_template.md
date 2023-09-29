---
title: creature_template
description:
published: true
date: 2023-07-15T09:33:35.488Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:50.335Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the description of creatures. Each spawned creature is an instance of a template present in this table, this means every creature MUST be defined in this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [difficulty_entry_1](#difficulty_entry_1) | mediumint | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_2](#difficulty_entry_2) | mediumint | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_3](#difficulty_entry_3) | mediumint | unsigned |  | NO | 0 |  |  |
| [KillCredit1](#killcredit1) | int | unsigned |  | NO | 0 |  |  |
| [KillCredit2](#killcredit2) | int | unsigned |  | NO | 0 |  |  |
| [modelid1](#modelid1) | mediumint | unsigned |  | NO | 0 |  |  |
| [modelid2](#modelid2) | mediumint | unsigned |  | NO | 0 |  |  |
| [modelid3](#modelid3) | mediumint | unsigned |  | NO | 0 |  |  |
| [modelid4](#modelid4) | mediumint | unsigned |  | NO | 0 |  |  |
| [name](#name) | char(100) |  | MUL | NO | 0 |  |  |
| [subname](#subname) | char(100) |  |  | YES | NULL |  |  |
| [IconName](#iconname) | char(100) |  |  | YES | NULL |  |  |
| [gossip_menu_id](#gossip_menu_id) | mediumint | unsigned |  | NO | 0 |  |  |
| [minlevel](#minlevel) | tinyint | unsigned |  | NO | 1 |  |  |
| [maxlevel](#maxlevel) | tinyint | unsigned |  | NO | 1 |  |  |
| [exp](#exp) | smallint | signed |  | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | int | unsigned |  | NO | 0 |  |  |
| [speed_walk](#speed_walk) | float |  |  | NO | 1 |  | Result of 2.5/2.5, most common value |
| [speed_run](#speed_run) | float |  |  | NO | 1.14286 |  | Result of 8.0/7.0, most common value |
| [scale](#scale) | float |  |  | NO | 1 |  |  |
| [rank](#rank) | tinyint | unsigned |  | NO | 0 |  |  |
| [dmgschool](#dmgschool) | tinyint | signed |  | NO | 0 |  |  |
| [BaseAttackTime](#baseattacktime) | int | unsigned |  | NO | 0 |  |  |
| [RangeAttackTime](#rangeattacktime) | int | unsigned |  | NO | 0 |  |  |
| [BaseVariance](#basevariance) | float |  |  | NO | 1 |  |  |
| [RangeVariance](#rangevariance) | float |  |  | NO | 1 |  |  |
| [unit_class](#unit_class) | tinyint | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int | unsigned |  | NO | 0 |  |  |
| [unit_flags2](#unit_flags2) | int | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int | unsigned |  | NO | 0 |  |  |
| [family](#family) | tinyint | signed |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [type_flags](#type_flags) | int | unsigned |  | NO | 0 |  |  |
| [lootid](#lootid) | mediumint | unsigned |  | NO | 0 |  |  |
| [pickpocketloot](#pickpocketloot) | mediumint | unsigned |  | NO | 0 |  |  |
| [skinloot](#skinloot) | mediumint | unsigned |  | NO | 0 |  |  |
| [PetSpellDataId](#petspelldataid) | mediumint | unsigned |  | NO | 0 |  |  |
| [VehicleId](#vehicleid) | mediumint | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | mediumint | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | mediumint | unsigned |  | NO | 0 |  |  |
| [AIName](#ainame) | char(64) |  |  | NO | '' |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [HoverHeight](#hoverheight) | float |  |  | NO | 1 |  |  |
| [HealthModifier](#healthmodifier) | float |  |  | NO | 1 |  |  |
| [ManaModifier](#manamodifier) | float |  |  | NO | 1 |  |  |
| [ArmorModifier](#armormodifier) | float |  |  | NO | 1 |  |  |
| [DamageModifier](#damagemodifier) | float |  |  | NO | 1 |  |  |
| [ExperienceModifier](#experiencemodifier) | float |  |  | NO | 1 |  |  |
| [RacialLeader](#racialleader) | tinyint | unsigned |  | NO | 0 |  |  |
| [movementId](#movementid) | int | unsigned |  | NO | 0 |  |  |
| [RegenHealth](#regenhealth) | tinyint | unsigned |  | NO | 1 |  |  |
| [mechanic_immune_mask](#mechanic_immune_mask) | int | unsigned |  | NO | 0 |  |  |
| [spell_school_immune_mask](#spell_school_immune_mask) | int | unsigned |  | NO | 0 |  |  |
| [flags_extra](#flags_extra) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### entry
Creature's unique id.
&nbsp;

### difficulty_entry_1
This field connects the stats from another **entry** to this template when in 25man normal, 10man heroic or 25man heroic mode instance.
* For Dungeons: 5 (Heroic)
* For Raids: 25 (Normal)
### difficulty_entry_2
* For Raids: 10 (Heroic)
### difficulty_entry_3
* For Raids: 25 (Heroic)
&nbsp;

### KillCredit1
If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the first **entry** of the creature that could be killed to give quest credit.
&nbsp;

### KillCredit2
If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the second **entry** of the creature that could be killed to give quest credit. If more than two creatures can be killed and count toward a single objective, a smart or C++ script will be required.
&nbsp;

### modelid1
### modelid2
### modelid3
### modelid4
A random graphical model that the client applies on this creature. This is a [creature_model_info.DisplayID](../world/creature_model_info#displayid) / [CreatureDisplayInfo ID](/files/DBC/335/creaturedisplayinfo#id).
&nbsp;

### name
Base name of the creature.
&nbsp;

### subname
The subname of the creature that appears in \<..\> below the creature's name.
&nbsp;

### IconName
Use special mouse pointer when hovering over the creature.
| Value | Description |
|-------|-------------|
| Directions | Used for Guards and Teleporter NPC's. |
| Gunner | Indicator of a Turret NPC/Player Controlled. |
| vehichleCursor | Indicator that this is a PCV (Player Controlled Vehicle) |
| Driver | Shows a Steering Wheel icon when mouse over. |
| Attack | Shows a Sword icon indicating you can attack this target. |
| Buy | Shows a Brown Bag icon usually if the NPC only sells things. |
| Speak | Shows a Chat Bubble icon if this NPC has Quest/Gossip options. |
| Pickup | Shows a Hand Grasping icon of if this NPC can be picked up for quest/items. |
| Interact | Shows Cog icon commonly used for quest/transport. |
| Trainer | Shows a Book icon, identifying this NPC as a "Trainer". |
| Taxi | Shows a Boot w/Wings icon identifying this NPC as a "Taxi". |
| Repair | Shows a Anvil icon identifying this npc as a Repair NPC. |
| LootAll | Shows a Multiple Brown Bag icon (Same as holding Shift before looting a creature). |
| Quest | Unused or Unknown. (See EntryID 32870 The Real Ronakada). |
| PVP | Unused or Unknown.(See EntryID 29387 Arena Master: Dalaran Arena). |
| Point | |
{.dense}

> Note: This is not required to make the creature/npc function unless you are using scripts or gossip options.
> Also: Names are case sensitive. If in doubt use an example above.
{.is-info}

&nbsp;

### gossip_menu_id
The gossip ID of this creature. This field is obtained from sniff (update fields). If you can not sniff this value, and need to make one up, it must be > 50000. This field is the link to [gossip_menu.MenuID](../world/gossip_menu#menuid).
&nbsp;

### minlevel
The minimum level of the creature if the creature has a level range.
&nbsp;

### maxlevel
The maximum level of the creature if the creature has a level range. When added to world, a level in chosen in the specified level range.
&nbsp;

### exp
The expansion table the creatures health value is taken from. Values are from 0 to 2. (see [creature_classlevelstats](../world/creature_classlevelstats))
&nbsp;

### faction
The [FactionTemplate ID](/files/DBC/335/factiontemplate#id) of the creature.
Just because more than one faction has the same name, the inter-faction relationships can be different.

> Note: This field also controls the creature family assistance mechanic. Only creatures with the same faction will assist each other.
{.is-info}

&nbsp;

### npcflag
A bitmask that represents what NPC flags the creature has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | Gossip | If creature has more gossip options, add this flag to bring up a menu.|
| 2 | 0x00000002 | Quest Giver | Any creature giving or taking quests needs to have this flag.|
| 16 | 0x00000010 | Trainer | Allows the creature to have a trainer list to teach spells|
| 32 | 0x00000020 | Class Trainer | |
| 64 | 0x00000040 | Profession Trainer | |
| 128 | 0x00000080 | Vendor | Any creature selling items needs to have this flag.|
| 256 | 0x00000100 | Vendor Ammo | |
| 512 | 0x00000200 | Vendor Food | |
| 1024 | 0x00000400 | Vendor Poison | |
| 2048 | 0x00000800 | Vendor Reagent | |
| 4096 | 0x00001000 | Repairer | Creatures with this flag can repair items.|
| 8192 | 0x00002000 | Flight Master | Any creature serving as flight master has this.|
| 16384 | 0x00004000 | Spirit Healer | Makes the creature invisible to alive characters and has the PvE resurrect function.|
| 32768 | 0x00008000 | Spirit Guide | Makes the creature invisible to alive characters and has the PvP resurrect function.|
| 65536 | 0x00010000 | Innkeeper | Creatures with this flag can set hearthstone locations.|
| 131072 | 0x00020000 | Banker | Creatures with this flag can show the bank|
| 262144 | 0x00040000 | Petitioner |  handles guild/arena petitions|
| 524288 | 0x00080000 | Tabard Designer | Allows the designing of guild tabards.|
| 1048576 | 0x00100000 | Battlemaster | Creatures with this flag port players to battlegrounds.|
| 2097152 | 0x00200000 | Auctioneer | Allows creature to display auction list.|
| 4194304 | 0x00400000 | Stable Master | Has the option to stable pets for hunters.|
| 8388608 | 0x00800000 | Guild Banker | |
| 16777216 | 0x01000000 | Spellclick | Needs data on [npc_spellclick_spells](../world/npc_spellclick_spells) table|
| 33554432 | 0x02000000 | PlayerVehicle | Players with mounts that have vehicle data should have it set|
| 67108864 | 0x04000000 | Mailbox | NPC will act like a mailbox (opens mailbox with right-click)|
{.dense}

So if you want an NPC that is a quest giver, a vendor, and can repair you just add the specific flags together: <code>`npcflag`=`npcflag`|1|2|128|4096</code>
The same with hexadecimal numbers: `0x1 + 0x2 + 0x80 + 0x1000 = 0x1083`
&nbsp;

### speed_walk
Controls how fast the creature can walk. For vehicles: increases fly speed.
&nbsp;

### speed_run
Controls how fast the creature can run. For vehicles: increases ground movement speed.
&nbsp;

### scale
If non-zero, this field defines the size of how the model of the creature appears ingame. If zero, it will use default model size taken from [CreatureDisplayInfo CreatureModelScale](/files/DBC/335/creaturedisplayinfo#creaturemodelscale)
&nbsp;

### rank
The rank of the creature:
| Value | Name | Default Respawn Time<br>[creature.spawntimesecs](../world/creature#spawntimesecs) | Corpse Decay Time<br>Worldserver.conf (Corpse.Decay) | Total Default Respawn<br>[creature.spawntimesecs](../world/creature#spawntimesecs) + Corpse.Decay
|---|---|---|---|---|
| 0 | Normal | 5 min | 60 sec | 6 min |
| 1 | Elite | 5 min | 5 min | 10 min |
| 2 | Rare Elite | 5 min | 5 min | 10 min |
| 3 | Boss | 5 min | 1 hour | 1 hour, 5 min |
| 4 | Rare | 5 min | 5 min | 10 min |
| 5 | Trivial | 5 min | 60 sec | 6 min |
{.dense}

> Note: An NPC's rank is mostly visual (which also requires your Cache to be cleared to see changes). Changing this value will not change its health, damage, or loot. However, it will change the respawn time of the creature.
{.is-info}

> Note: Respawn times can be modified in two other places: Creature.spawntimesecs (only for that single GUID of the creature) and in the worldserver.conf file under the "Corpse.Decay" settings (for ALL creatures of the same rank). The default `spawntimesecs` for all spawned creatures is 300 seconds (5 minutes). For example, using the ".npc add" command to spawn a "Normal" NPC will give it a default respawn time of 6 minutes (spawntimesecs + Corpse.Decay time). Also, the creature must decay first before it can respawn. For this reason, the Corpse Decay Time of the creature is also it's minimum respawn time, since setting the creature's Creature.spawntimesecs = 0 will remove the Default Respawn Time. In the example above, setting our Normal NPC's spawntimesecs = 0 will mean the creature's respawn time decreases from 6 minutes to 60 seconds.
{.is-info}

> Note: If you want the creature to show a skull or "??" in the portrait (often with Bosses), set the **type_flags** to 4.
{.is-info}

&nbsp;

### dmgschool
Creature's melee damage school.
| Value | Name |
|-------|------|
| 0 | SPELL_SCHOOL_NORMAL |
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### BaseAttackTime
This is the base time that determines how long a creature must wait between melee attacks. This time is in milliseconds.
&nbsp;

### RangeAttackTime
This is the base time that determines how long a creature must wait between ranged attacks. This time is in milliseconds.
&nbsp;

### BaseVariance
multiplier applied to the creatures [attackpower](../world/creature_classlevelstats#attackpower)
&nbsp;

### RangeVariance
multiplier applied to the creatures [rangedattackpower](../world/creature_classlevelstats#rangedattackpower)
&nbsp;

### unit_class
This is the creature's class, and it dictates levels of health and mana. Also note that health and mana will change according to **exp**, **HealthModifier** and **ManaModifier**. Not setting this value will report a minor warning in the DB_Errors.log.
| Value | Name | Comment|
|-------|------|--------|
| 1 | CLASS_WARRIOR | Health only (equal to Rogue) |
| 2 | CLASS_PALADIN | Health & Mana (more health than Mage but less mana) |
| 4 | CLASS_ROGUE | Health only (equal to Warrior) |
| 8 | CLASS_MAGE | Health & Mana (less health than Paladin but more mana) |
{.dense}

&nbsp;

### unit_flags
Allows the manual application of unit flags to creatures. Again this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 2 | 0x00000002 | UNIT_FLAG_NON_ATTACKABLE | not attackable, set when creature starts to cast spells with SPELL_EFFECT_SPAWN and cast time, removed when spell hits caster. |
| 8 | 0x00000008 | UNIT_FLAG_PLAYER_CONTROLLED | controlled by player, use _IMMUNE_TO_PC instead of _IMMUNE_TO_NPC |
| 64 | 0x00000040 | UNIT_FLAG_UNK_6 |  |
| 128 | 0x00000080 | UNIT_FLAG_NOT_ATTACKABLE_1 | ?? (UNIT_FLAG_PLAYER_CONTROLLED | UNIT_FLAG_NOT_ATTACKABLE_1) is NON_PVP_ATTACKABLE |
| 256 | 0x00000100 | UNIT_FLAG_IMMUNE_TO_PC | disables combat/assistance with PlayerCharacters (PC) - see Unit::IsValidAttackTarget, Unit::IsValidAssistTarget |
| 512 | 0x00000200 | UNIT_FLAG_IMMUNE_TO_NPC | disables combat/assistance with NonPlayerCharacters (NPC) - see Unit::IsValidAttackTarget, Unit::IsValidAssistTarget |
| 1024 | 0x00000400 | UNIT_FLAG_LOOTING | loot animation |
| 2048 | 0x00000800 | UNIT_FLAG_PET_IN_COMBAT | on player pets: whether the pet is chasing a target to attack || on other units: whether any of the unit's minions is in combat |
| 4096 | 0x00001000 | UNIT_FLAG_PVP_ENABLING | changed in 3.0.3, now UNIT_BYTES_2_OFFSET_PVP_FLAG from UNIT_FIELD_BYTES_2 |
| 8192 | 0x00002000 | UNIT_FLAG_SILENCED | silenced, 2.1.1 |
| 16384 | 0x00004000 | UNIT_FLAG_CANNOT_SWIM | 2.0.8 |
| 32768 | 0x00008000 | UNIT_FLAG_CAN_SWIM | shows swim animation in water |
| 65536 | 0x00010000 | UNIT_FLAG_NON_ATTACKABLE_2 | removes attackable icon, if on yourself, cannot assist self but can cast TARGET_SELF spells - added by SPELL_AURA_MOD_UNATTACKABLE |
| 131072 | 0x00020000 | UNIT_FLAG_PACIFIED | Creature will not attack |
| 262144 | 0x00040000 | UNIT_FLAG_STUNNED |  |
| 524288 | 0x00080000 | UNIT_FLAG_IN_COMBAT |  |
| 2097152 | 0x00200000 | UNIT_FLAG_DISARMED | 3.0.3, disable melee spells casting..., "Required melee weapon" added to melee spells tooltip. |
| 4194304 | 0x00400000 | UNIT_FLAG_CONFUSED |  |
| 8388608 | 0x00800000 | UNIT_FLAG_FLEEING |  |
| 16777216 | 0x01000000 | UNIT_FLAG_POSSESSED | under direct client control by a player (possess or vehicle) |
| 33554432 | 0x02000000 | UNIT_FLAG_UNINTERACTIBLE | Can't be selected by mouse or with /target {name} command. |
| 67108864 | 0x04000000 | UNIT_FLAG_SKINNABLE |  |
| 134217728 | 0x08000000 | UNIT_FLAG_MOUNT | The client seems to handle it perfectly. Also used when making custom mounts. |
| 1073741824 | 0x40000000 | UNIT_FLAG_SHEATHE |  |
| 2147483648 | 0x80000000 | UNIT_FLAG_IMMUNE | Immune to damage |
{.dense}

&nbsp;

### unit_flags2
Allows additional application of unit flags to creatures. Again, this is a bitmask field and to apply more than one flag, just add the different numbers. Some possible flags are:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | UNIT_FLAG2_FEIGN_DEATH |  |
| 2 | 0x00000002 | UNIT_FLAG2_HIDE_BODY | Hide unit model (show only player equip) |
| 4 | 0x00000004 | UNIT_FLAG2_IGNORE_REPUTATION |  |
| 8 | 0x00000008 | UNIT_FLAG2_COMPREHEND_LANG |  |
| 16 | 0x00000010 | UNIT_FLAG2_MIRROR_IMAGE |  |
| 32 | 0x00000020 | UNIT_FLAG2_DO_NOT_FADE_IN | Unit model instantly appears when summoned (does not fade in) |
| 64 | 0x00000040 | UNIT_FLAG2_FORCE_MOVEMENT |  |
| 128 | 0x00000080 | UNIT_FLAG2_DISARM_OFFHAND |  |
| 256 | 0x00000100 | UNIT_FLAG2_DISABLE_PRED_STATS | Player has disabled predicted stats (Used by raid frames) |
| 1024 | 0x00000400 | UNIT_FLAG2_DISARM_RANGED | this does not disable ranged weapon display (maybe additional flag needed?) |
| 2048 | 0x00000800 | UNIT_FLAG2_REGENERATE_POWER |  |
| 4096 | 0x00001000 | UNIT_FLAG2_RESTRICT_PARTY_INTERACTION | Restrict interaction to party or raid |
| 8192 | 0x00002000 | UNIT_FLAG2_PREVENT_SPELL_CLICK | Prevent spellclick |
| 16384 | 0x00004000 | UNIT_FLAG2_ALLOW_ENEMY_INTERACT |  |
| 32768 | 0x00008000 | UNIT_FLAG2_CANNOT_TURN |  |
| 131072 | 0x00020000 | UNIT_FLAG2_PLAY_DEATH_ANIM | Plays special death animation upon death |
| 262144 | 0x00040000 | UNIT_FLAG2_ALLOW_CHEAT_SPELLS | allows casting spells with AttributesEx7 & SPELL_ATTR7_IS_CHEAT_SPELL |
{.dense}

&nbsp;

### dynamicflags
Flags that control visual appearance of the creature. A few known flags and their use are:
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | UNIT_DYNFLAG_LOOTABLE |  |
| 2 | 0x02 | UNIT_DYNFLAG_TRACK_UNIT | Creature's location will be seen as a small dot in the minimap |
| 4 | 0x04 | UNIT_DYNFLAG_TAPPED | Makes creatures name appear grey (Lua_UnitIsTapped) |
| 8 | 0x08 | UNIT_DYNFLAG_TAPPED_BY_PLAYER | Lua_UnitIsTappedByPlayer usually used by PCVs (Player Controlled Vehicles) |
| 16 | 0x10 | UNIT_DYNFLAG_SPECIALINFO |  |
| 32 | 0x20 | UNIT_DYNFLAG_DEAD | Makes the creature appear dead (this DOES NOT make the creature's name grey or not attack players). |
| 64 | 0x40 | UNIT_DYNFLAG_REFER_A_FRIEND |  |
| 128 | 0x80 | UNIT_DYNFLAG_TAPPED_BY_ALL_THREAT_LIST | Lua_UnitIsTappedByAllThreatList |
{.dense}

&nbsp;

### family
The [CreatureFamily ID](/files/DBC/335/creaturefamily#id) this creature belongs to.
| ID | Name | ID | Name |
|----|------|----|------|
| 1 | Wolf | 26 | Owl |
| 2 | Cat | 27 | Wind Serpent |
| 3 | Spider | 28 | Remote Control |
| 4 | Bear | 29 | Felguard |
| 5 | Boar | 30 | Dragonhawk |
| 6 | Crocolisk | 31 | Ravager |
| 7 | Carrion | Bird | 32	Warp Stalker |
| 8 | Crab | 33 | Sporebat |
| 9 | Gorilla | 34 | Nether Ray |
| 11 | Raptor | 35 | Serpent |
| 12 | Tallstrider | 37 | Moth |
| 15 | Felhunter | 38 | Chimaera |
| 16 | Voidwalker | 39 | Devilsaur |
| 17 | Succubus | 40 | Ghoul |
| 19 | Doomguard | 41 | Silithid |
| 20 | Scorpid | 42 | Worm |
| 21 | Turtle | 43 | Rhino |
| 23 | Imp | 44 | Wasp |
| 24 | Bat | 45 | Core Hound |
| 25 | Hyena | 46 | Spirit Beast |
{.dense}

&nbsp;

### type
The [CreatureType ID](/files/DBC/335/creaturetype#id) of the creature.
| ID | Name |
|----|------|
| 0 | None |
| 1 | Beast |
| 2 | Dragonkin |
| 3 | Demon |
| 4 | Elemental |
| 5 | Giant |
| 6 | Undead |
| 7 | Humanoid |
| 8 | Critter |
| 9 | Mechanical |
| 10 | Not specified |
| 11 | Totem |
| 12 | Non-Combat Pet |
| 13 | Gas Cloud |
| 14 | Wild Pet |
| 15 | Aberration |
{.dense}

&nbsp;

### type_flags
This field can control whether a mob is minable or herbable or lootable by engineer. If it is either of those three, then the loot given when it is skinned/mined will be stored in the [skinning_loot_template table](../world/loot_template). It also controls, whether this mob can be tamed by a hunter. Other fields have no special meaning on the serverside. The entire field will be send to the client in SMSG_CREATURE_QUERY_RESPONSE
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | CREATURE_TYPE_FLAG_TAMEABLE | Makes the mob tameable (must also be a beast and have family set) |
| 2 | 0x00000002 | CREATURE_TYPE_FLAG_VISIBLE_TO_GHOSTS | Creature is also visible for not alive player. Allows gossip interaction if npcflag allows? |
| 4 | 0x00000004 | CREATURE_TYPE_FLAG_BOSS_MOB | Changes creature's visible level to "??" in the creature's portrait - Immune Knockback. |
| 8 | 0x00000008 | CREATURE_TYPE_FLAG_DO_NOT_PLAY_WOUND_ANIM | Does not play wound animation on parry. |
| 16 | 0x00000010 | CREATURE_TYPE_FLAG_NO_FACTION_TOOLTIP |  |
| 32 | 0x00000020 | CREATURE_TYPE_FLAG_MORE_AUDIBLE | Sound related |
| 64 | 0x00000040 | CREATURE_TYPE_FLAG_SPELL_ATTACKABLE |  |
| 128 | 0x00000080 | CREATURE_TYPE_FLAG_INTERACT_WHILE_DEAD | Player can interact with the creature if creature is dead (not if player is dead) |
| 256 | 0x00000100 | CREATURE_TYPE_FLAG_SKIN_WITH_HERBALISM | Makes mob herbable |
| 512 | 0x00000200 | CREATURE_TYPE_FLAG_SKIN_WITH_MINING | Makes mob minable |
| 1024 | 0x00000400 | CREATURE_TYPE_FLAG_NO_DEATH_MESSAGE | Death event will not show up in combat log |
| 2048 | 0x00000800 | CREATURE_TYPE_FLAG_ALLOW_MOUNTED_COMBAT | Creature can remain mounted when entering combat |
| 4096 | 0x00001000 | CREATURE_TYPE_FLAG_CAN_ASSIST | Can aid any player in combat if in range? |
| 8192 | 0x00002000 | CREATURE_TYPE_FLAG_NO_PET_BAR |  |
| 16384 | 0x00004000 | CREATURE_TYPE_FLAG_MASK_UID |  |
| 32768 | 0x00008000 | CREATURE_TYPE_FLAG_SKIN_WITH_ENGINEERING | Makes mob lootable by engineer |
| 65536 | 0x00010000 | CREATURE_TYPE_FLAG_EXOTIC_PET | Tamable as an exotic pet. Normal tamable flag must also be set. |
| 131072 | 0x00020000 | CREATURE_TYPE_FLAG_USE_MODEL_COLLISION_SIZE | Collision related. (always using default collision box?) |
| 262144 | 0x00040000 | CREATURE_TYPE_FLAG_ALLOW_INTERACTION_WHILE_IN_COMBAT |  |
| 524288 | 0x00080000 | CREATURE_TYPE_FLAG_COLLIDE_WITH_MISSILES | Projectiles can collide with this creature - interacts with TARGET_DEST_TRAJ |
| 1048576 | 0x00100000 | CREATURE_TYPE_FLAG_NO_NAME_PLATE |  |
| 2097152 | 0x00200000 | CREATURE_TYPE_FLAG_DO_NOT_PLAY_MOUNTED_ANIMATIONS |  |
| 4194304 | 0x00400000 | CREATURE_TYPE_FLAG_LINK_ALL |  |
| 8388608 | 0x00800000 | CREATURE_TYPE_FLAG_INTERACT_ONLY_WITH_CREATOR | Can only interact with its creator. |
| 16777216 | 0x01000000 | CREATURE_TYPE_FLAG_DO_NOT_PLAY_UNIT_EVENT_SOUNDS |  |
| 33554432 | 0x02000000 | CREATURE_TYPE_FLAG_HAS_NO_SHADOW_BLOB |  |
| 67108864 | 0x04000000 | CREATURE_TYPE_FLAG_TREAT_AS_RAID_UNIT | Creature can be targeted by spells that require target to be in caster's party/raid |
| 134217728 | 0x08000000 | CREATURE_TYPE_FLAG_FORCE_GOSSIP | Allows the creature to display a single gossip option. |
| 268435456 | 0x10000000 | CREATURE_TYPE_FLAG_DO_NOT_SHEATHE |  |
| 536870912 | 0x20000000 | CREATURE_TYPE_FLAG_DO_NOT_TARGET_ON_INTERACTION |  |
| 1073741824 | 0x40000000 | CREATURE_TYPE_FLAG_DO_NOT_RENDER_OBJECT_NAME |  |
| 2147483648 | 0x80000000 | CREATURE_TYPE_FLAG_QUEST_BOSS |  |
{.dense}

&nbsp;

### lootid
The ID of the [creature_loot_template](../world/loot_template) that this creature should use to generate loot.
&nbsp;

### pickpocketloot
The ID of the [pickpocketing_loot_template](../world/loot_template) that this creature should use to generate pickpocketing loot.
&nbsp;

### skinloot
The ID of the [skinning_loot_template](../world/loot_template) that this creature should use to generate skinning loot.
&nbsp;

### PetSpellDataId
[CreatureSpellData ID](/files/DBC/335/creaturespelldata#id), that displays what spells the pet has in the client.
&nbsp;

### VehicleId
[Vehicle ID](/files/DBC/335/vehicle#id) if creature is/has a vehicle entry. This field determines how the player appears on the vehicle, how the vehicle moves, and whether or not the vehicle action bar is shown.
For example, a **VehicleId** of 292 will make the player invisible, prevent the vehicle from strafing left/right (but will allow fowards/backwards), and will show the vehicle action bar spells (which are defined in spell1-8). An [npc_spellclick_spells](../world/npc_spellclick_spells) entry must be made for this creature entry in order for this to work.
&nbsp;

### mingold
Minimum money that the creature drops when killed, in copper.
&nbsp;

### maxgold
Maximum money that the creature drops when killed, in copper.
&nbsp;

### AIName
This field is overridden by ScriptName field if both are set.
| Value | Description |
|-------|-------------|
| NullAI | Empty AI, creature does nothing. |
| AggressorAI | Creature attacks as soon as something is in aggro range. |
| ReactorAI | Creature attacks only if aggroed by attack, spell etc. |
| GuardAI |  |
| PetAI | Creature is a pet. |
| TotemAI | Creature casts [Spell](../world/creature_template_spell#spell) from **Index** 1 , otherwise like NullAI. |
| SmartAI | Creature uses [Smart AI](../world/smart_scripts). |
{.dense}

&nbsp;

### MovementType
The creature's default movement type.
| Value | Description |
|-------|-------------|
| 0 | Idle; stay in one place |
| 1 | Random movement inside the spawndist radius |
| 2 | Waypoint movement |
{.dense}

&nbsp;

### HoverHeight
Distance above the ground that the creature will hover if it has MOVEMENTFLAG_DISABLE_GRAVITY enabled. Value taken from sniffs.
&nbsp;

### HealthModifier
Used to modify the base Level/Class health of a creature. This field comes from WDB.
&nbsp;

### ManaModifier
Used to modify the base Level/Class mana of a creature. This field comes from WDB.
&nbsp;

### ArmorModifier
Used to modify the base Level/Class armor of a creature.
&nbsp;

### DamageModifier
Multiplier for mindmg and maxdmg

Example: mindmg=200 maxdmg = 500 DamageModifier = 10
Outcome: mob will hit for 2000-5000
&nbsp;

### ExperienceModifier
Directly multiplies the experience granted on kill.
&nbsp;

### RacialLeader
A flag indicating wheather the creature is a racial leader. Killing racial leaders grants 100 honor.
&nbsp;

### movementId
We have no idea what this field does. It is passed directly to the client.
&nbsp;

### RegenHealth
Boolean 1 or 0 controlling if the creature should regenerate its health out of combat or not.
&nbsp;

### mechanic_immune_mask
This makes the creature immune to specific spell mechanics. (See [Spell EffectMechanic](/files/DBC/335/spell#effectmechanic))
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | MECHANIC_CHARM |  |
| 2 | 0x00000002 | MECHANIC_DISORIENTED |  |
| 4 | 0x00000004 | MECHANIC_DISARM |  |
| 8 | 0x00000008 | MECHANIC_DISTRACT |  |
| 16 | 0x00000010 | MECHANIC_FEAR |  |
| 32 | 0x00000020 | MECHANIC_GRIP | Death Grip and similar effects |
| 64 | 0x00000040 | MECHANIC_ROOT |  |
| 128 | 0x00000080 | MECHANIC_SLOW_ATTACK |  |
| 256 | 0x00000100 | MECHANIC_SILENCE |  |
| 512 | 0x00000200 | MECHANIC_SLEEP |  |
| 1024 | 0x00000400 | MECHANIC_SNARE |  |
| 2048 | 0x00000800 | MECHANIC_STUN |  |
| 4096 | 0x00001000 | MECHANIC_FREEZE |  |
| 8192 | 0x00002000 | MECHANIC_KNOCKOUT | Incapacitate effects such as Repetance (Paladin) |
| 16384 | 0x00004000 | MECHANIC_BLEED |  |
| 32768 | 0x00008000 | MECHANIC_BANDAGE | Healing etc. |
| 65536 | 0x00010000 | MECHANIC_POLYMORPH |  |
| 131072 | 0x00020000 | MECHANIC_BANISH |  |
| 262144 | 0x00040000 | MECHANIC_SHIELD |  |
| 524288 | 0x00080000 | MECHANIC_SHACKLE | Shackle Undead only |
| 1048576 | 0x00100000 | MECHANIC_MOUNT | Any effect that summons a mount |
| 2097152 | 0x00200000 | MECHANIC_INFECTED | Frost Fever, Blood Plague etc. |
| 4194304 | 0x00400000 | MECHANIC_TURN | e.g. Turn Evil |
| 8388608 | 0x00800000 | MECHANIC_HORROR | e.g. Death Coil (Warlock) |
| 16777216 | 0x01000000 | MECHANIC_INVULNERABILITY | Forbearance, Nether Protection, Diplomatic Immunity only |
| 33554432 | 0x02000000 | MECHANIC_INTERRUPT |  |
| 67108864 | 0x04000000 | MECHANIC_DAZE |  |
| 134217728 | 0x08000000 | MECHANIC_DISCOVERY | Any Create Item effect |
| 268435456 | 0x10000000 | MECHANIC_IMMUNE_SHIELD | Divine Shield, Ice Block, Hand of Protection... |
| 536870912 | 0x20000000 | MECHANIC_SAPPED |  |
| 1073741824 | 0x40000000 | MECHANIC_ENRAGED |  |
{.dense}

To combine immunities just add values. Immune to everything corresponds to the value 2147483647 (0x3FFF FFFF).
&nbsp;

### spell_school_immune_mask
This makes the creature immune to spell from specific schools.
| Value | Flag | Name |
|-------|------|
| 1 | 0x01 | SPELL_SCHOOL_NORMAL |
| 2 | 0x02 | SPELL_SCHOOL_HOLY |
| 4 | 0x04 | SPELL_SCHOOL_FIRE |
| 8 | 0x08 | SPELL_SCHOOL_NATURE |
| 16 | 0x10 | SPELL_SCHOOL_FROST |
| 32 | 0x20 | SPELL_SCHOOL_SHADOW |
| 64 | 0x40 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### flags_extra
These flags control certain creature specific attributes. Flags can be added together to apply more than one.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | CREATURE_FLAG_EXTRA_INSTANCE_BIND | creature kill binds instance to killer and killer's group |
| 2 | 0x00000002 | CREATURE_FLAG_EXTRA_CIVILIAN | creature does not aggro (ignore faction/reputation hostility) |
| 4 | 0x00000004 | CREATURE_FLAG_EXTRA_NO_PARRY | creature does not parry |
| 8 | 0x00000008 | CREATURE_FLAG_EXTRA_NO_PARRY_HASTEN | creature does not counter-attack at parry |
| 16 | 0x00000010 | CREATURE_FLAG_EXTRA_NO_BLOCK | creature does not block |
| 32 | 0x00000020 | CREATURE_FLAG_EXTRA_NO_CRUSHING_BLOWS | creature can't do crush attacks |
| 64 | 0x00000040 | CREATURE_FLAG_EXTRA_NO_XP | creature kill does not provide XP |
| 128 | 0x00000080 | CREATURE_FLAG_EXTRA_TRIGGER | creature is trigger-NPC (invisible to players only) |
| 256 | 0x00000100 | CREATURE_FLAG_EXTRA_NO_TAUNT | creature is immune to taunt auras and 'attack me' effects |
| 512 | 0x00000200 | CREATURE_FLAG_EXTRA_NO_MOVE_FLAGS_UPDATE | creature won't update movement flags |
| 1024 | 0x00000400 | CREATURE_FLAG_EXTRA_GHOST_VISIBILITY | creature will only be visible to dead players |
| 2048 | 0x00000800 | CREATURE_FLAG_EXTRA_USE_OFFHAND_ATTACK | creature will use offhand attacks |
| 4096 | 0x00001000 | CREATURE_FLAG_EXTRA_NO_SELL_VENDOR | players can't sell items to this vendor |
| 8192 | 0x00002000 | CREATURE_FLAG_EXTRA_IGNORE_COMBAT | creature is not allowed to enter combat |
| 16384 | 0x00004000 | CREATURE_FLAG_EXTRA_WORLDEVENT | custom flag for world events (left room for merging) |
| 32768 | 0x00008000 | CREATURE_FLAG_EXTRA_GUARD | creature is a guard |
| 65536 | 0x00010000 | CREATURE_FLAG_EXTRA_IGNORE_FEIGN_DEATH | creature ignores feign death |
| 131072 | 0x00020000 | CREATURE_FLAG_EXTRA_NO_CRIT | creature does not do critical strikes |
| 262144 | 0x00040000 | CREATURE_FLAG_EXTRA_NO_SKILL_GAINS | creature won't increase weapon skills |
| 524288 | 0x00080000 | CREATURE_FLAG_EXTRA_OBEYS_TAUNT_DIMINISHING_RETURNS | Taunt is subject to diminishing returns on this creature |
| 1048576 | 0x00100000 | CREATURE_FLAG_EXTRA_ALL_DIMINISH | creature is subject to all diminishing returns as players are |
| 2097152 | 0x00200000 | CREATURE_FLAG_EXTRA_NO_PLAYER_DAMAGE_REQ | NPCs can help with killing this creature and player will still be credited if he tags the creature |
| 268435456 | 0x10000000 | CREATURE_FLAG_EXTRA_DUNGEON_BOSS | Creature is a dungeon boss. This flag is generically set by core during runtime. Setting this in database will give you startup error. |
| 536870912 | 0x20000000 | CREATURE_FLAG_EXTRA_IGNORE_PATHFINDING | Creature will ignore pathfinding. This is like disabling Mmaps, only for one creature. |
| 1073741824 | 0x40000000 | CREATURE_FLAG_EXTRA_IMMUNITY_KNOCKBACK | creature will immune all knockback effects |
{.dense}

&nbsp;

### ScriptName
The name of the script that this creature uses, if any. This ties a script from a scripting engine to this creature.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature_summon_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summon_groups'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
