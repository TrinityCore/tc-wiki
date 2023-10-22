---
title: creature_template
description: 
published: true
date: 2023-10-22T15:45:03.894Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:15.744Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_summoned_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summoned_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [KillCredit1](#killcredit1) | int | unsigned |  | NO | 0 |  |  |
| [KillCredit2](#killcredit2) | int | unsigned |  | NO | 0 |  |  |
| [name](#name) | mediumtext |  |  | YES | NULL |  |  |
| [femaleName](#femalename) | mediumtext |  |  | YES | NULL |  |  |
| [subname](#subname) | mediumtext |  |  | YES | NULL |  |  |
| [TitleAlt](#titlealt) | mediumtext |  |  | YES | NULL |  |  |
| [IconName](#iconname) | varchar(64) |  |  | YES | NULL |  |  |
| [RequiredExpansion](#requiredexpansion) | int | signed |  | NO | 0 |  |  |
| [VignetteID](#vignetteid) | int | signed |  | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint | unsigned |  | NO | 0 |  |  |
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
| [unit_flags3](#unit_flags3) | int | unsigned |  | NO | 0 |  |  |
| [family](#family) | int | signed |  | NO | 0 |  |  |
| [trainer_class](#trainer_class) | tinyint | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [VehicleId](#vehicleid) | int | unsigned |  | NO | 0 |  |  |
| [AIName](#ainame) | varchar(64) |  |  | NO | '' |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [ExperienceModifier](#experiencemodifier) | float |  |  | NO | 1 |  |  |
| [RacialLeader](#racialleader) | tinyint | unsigned |  | NO | 0 |  |  |
| [movementId](#movementid) | int | unsigned |  | NO | 0 |  |  |
| [WidgetSetID](#widgetsetid) | int | signed |  | NO | 0 |  |  |
| [WidgetSetUnitConditionID](#widgetsetunitconditionid) | int | signed |  | NO | 0 |  |  |
| [RegenHealth](#regenhealth) | tinyint | unsigned |  | NO | 1 |  |  |
| [mechanic_immune_mask](#mechanic_immune_mask) | bigint | unsigned |  | NO | 0 |  |  |
| [spell_school_immune_mask](#spell_school_immune_mask) | int | unsigned |  | NO | 0 |  |  |
| [flags_extra](#flags_extra) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [StringId](#stringid) | varchar(64) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
Creature's unique id.
&nbsp;

### KillCredit1
If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the first entry of the creature that could be killed to give quest credit.
&nbsp;

### KillCredit2
If this is a kill credit template -- one that is a dummy template that is used when more than one creature can count as a kill in a quest, then this is a link to the second entry of the creature that could be killed to give quest credit. If more than two creatures can be killed and count toward a single objective, an smart or C++ script will be required.
&nbsp;

### name
Base name of the creature.
&nbsp;

### femaleName
Female version of base name of the creature.
&nbsp;

### subname
The subname of the creature that appears in <> below the creature's name.
&nbsp;

### TitleAlt
*- no description -*
&nbsp;

### IconName
Used to tell the player what kind of NPC this creature is.

| Name | Desciption |
| ---- | ---------- |
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

> This is not required to make the creature/npc function unless you are using scripts or gossip options.
>
> Names are case sensitive. If in doubt use an example above.
{.is-info}

### RequiredExpansion
*- no description -*
&nbsp;

### VignetteID
*- no description -*
&nbsp;

### faction
The faction of the creature. See [FactionTmplate.db2](https://wow.tools/dbc/?dbc=factiontemplate){target=_blank}.
Just because more than one faction has the same name, the inter-faction relationships can be different.

> This field also controls the creature family assistance mechanic. Only creatures with the same faction will assist each other.
{.is-info}

### npcflag
A bitmask that represents what NPC flags the creature has. Each bit controls a different flag and to combine flags, you can add each flag that you want, in effect activating the respective bits.

| Flag                    ||        |         |
| Decimal    | Hexadecimal | Name   | Comment |
|:-----------|-------------|--------|---------|
| 1          | 0x0000 0001 | Gossip | If creature has more gossip options, add this flag to bring up a menu. |
| 2          | 0x0000 0002 | Quest Giver | Any creature giving or taking quests needs to have this flag. |
| 4          | 0x0000 0004 | Unknown | Flag is unknown |
| 8          | 0x0000 0008 | Unknown | Flag is unknown |
| 16         | 0x0000 0010 | Trainer | Allows the creature to have a trainer list to teach spells |
| 32         | 0x0000 0020 | Class Trainer |  |
| 64         | 0x0000 0040 | Profession Trainer |  |
| 128        | 0x0000 0080 | Vendor | Any creature selling items needs to have this flag. |
| 256        | 0x0000 0100 | Vendor Ammo |  |
| 512        | 0x0000 0200 | Vendor Food |  |
| 1024       | 0x0000 0400 | Vendor Poison |  |
| 2048       | 0x0000 0800 | Vendor Reagent |  |
| 4096       | 0x0000 1000 | Repairer | 	Creatures with this flag can repair items. |
| 8192       | 0x0000 2000 | Flight Master | Any creature serving as flight master has this. |
| 16384      | 0x0000 4000 | Spirit Healer | Makes the creature invisible to alive characters and has the resurrect function. |
| 32768      | 0x0000 8000 | Spirit Guide |  |
| 65536      | 0x0001 0000 | Innkeeper | Creatures with this flag can set hearthstone locations. |
| 131072     | 0x0002 0000 | Banker | Creatures with this flag can show the bank |
| 262144     | 0x0004 0000 | Petitioner |  |
| 524288     | 0x0008 0000 | Tabard Designer | Allows the designing of guild tabards. |
| 1048576    | 0x0010 0000 | Battlemaster | Creatures with this flag port players to battlegrounds. |
| 2097152    | 0x0020 0000 | Auctioneer | Allows creature to display auction list. |
| 4194304    | 0x0040 0000 | Stable Master | Has the option to stable pets for hunters. |
| 8388608    | 0x0080 0000 | Guild Banker |  |
| 16777216   | 0x0100 0000 | Spellclick | Needs data on npc_spellclick_spells table |
| 33554432   | 0x0200 0000 | Player Vehicle |  |
| 67108864   | 0x0400 0000 | Mailbox | NPC will act like a mailbox (opens mailbox with right-click) |
| 134217728  | 0x0800 0000 | Artifact Power Respec | NPC will act like a mailbox (opens mailbox with right-click) |
| 268435456  | 0x1000 0000 | Transmogrifier | Creatures with this flag can show transmogrification UI |
| 536870912  | 0x2000 0000 | Vaultkeeper | Creatures with this flag can show void storage |
| 1073741824 | 0x4000 0000 | Wild Battle Pet | Creature is battle pet and collectable |
| 2147483648 | 0x8000 0000 | Blackmarket |  |

So if you want an NPC that is a quest giver, a vendor, and can repair you just add the specific flags together: 
```bash
`npcflag`=`npcflag`|1|2|128|4096 
```
The same with hexadecimal numbers: 0x1 + 0x2 + 0x80 + 0x1000 = 0x1083
&nbsp;

### speed_walk
Controls how fast the creature can walk. For vehicles: increases fly speed.
&nbsp;

### speed_run
Controls how fast the creature can run. For vehicles: increases ground movement speed.
&nbsp;

### scale
If non-zero, this field defines the size of how the model of the creature appears ingame. If zero, it will use default model size taken from the DB2.
&nbsp;

### rank
The rank of the creature:

| Rank | Name | Default Respawn Time</br>([creature.spawntimesecs](/en/database/master/world/creature#spawntimesecs)) | Corpse Decay Time</br>([Corpse.Decay](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/worldserver/worldserver.conf.dist#L1745)) | Total Default Respawn</br>([creature.spawntimesecs](/en/database/master/world/creature#spawntimesecs) + [Corpse.Decay](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/worldserver/worldserver.conf.dist#L1745)) |
|---|---|:---:|:---:|:---:|
| 0 | Normal | 5 min | 60 sec | 6 min |
| 1 | Elite | 5 min | 5 min | 10 min |
| 2 | Rare Elite | 5 min | 5 min | 10 min |
| 3 | Boss | 5 min | 1 hour | 1 hour, 5 min |
| 4 | Rare | 5 min | 5 min | 10 min |

> An NPC's rank is mostly visual (which also requires your Cache to be cleared to see changes). Changing this value will not change its health, damage, or loot. However, it will change the respawn time of the creature.
{.is-info}


> Respawn times can be modified in two other places: [creature.spawntimesecs](/en/database/master/world/creature#spawntimesecs) (only for that single GUID of the creature) and in the worldserver.conf file under the "[Corpse.Decay](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/worldserver/worldserver.conf.dist#L1745)" settings (for ALL creatures of the same rank). The default \`spawntimesecs\` for all spawned creatures is 300 seconds (5 minutes). For example, using the ".npc add" command to spawn a "Normal" NPC will give it a default respawn time of 6 minutes (spawntimesecs + Corpse.Decay time). Also, the creature must decay first before it can respawn. For this reason, the Corpse Decay Time of the creature is also it's minimum respawn time, since setting the creature's [creature.spawntimesecs](/en/database/master/world/creature#spawntimesecs) = 0 will remove the Default Respawn Time. In the example above, setting our Normal NPC's spawntimesecs = 0 will mean the creature's respawn time decreases from 6 minutes to 60 seconds.
{.is-info}


> If you want the creature to show a skull or "??" in the portrait (often with Bosses), set the type_flags to 4.
{.is-info}


### dmgschool
Creature's melee damage school.
| ID | Name |
|---|---|
| 0 | SPELL_SCHOOL_NORMAL |
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
&nbsp;

### BaseAttackTime
This is the base time that determines how long a creature must wait between melee attacks. This time is in milliseconds.
&nbsp;

### RangeAttackTime
This is the base time that determines how long a creature must wait between ranged attacks. This time is in milliseconds.
&nbsp;

### BaseVariance
*- no description -*
&nbsp;

### RangeVariance
*- no description -*
&nbsp;

### unit_class
This is the creature's class, and it dictates levels of health and mana. Also note that health and mana will change according to exp, health_mod, and mana_mod. Not setting this value will report a minor warning in the DB_Errors.log.

| Value | Name | Power Shown |
|---|---|---|
| 1 | CLASS_WARRIOR | Health only (equal to Rogue) |
| 2 | CLASS_PALADIN | Health & Mana (more health than Mage but less mana) |
| 4 | CLASS_ROGUE | Health only (equal to Warrior) |
| 8 | CLASS_MAGE | Health & Mana (less health than Paladin but more mana) |
&nbsp;

### unit_flags
Allows the manual application of unit flags to creatures. Again this is a bitmask field and to apply more than one flag, just add the different numbers.
&nbsp;

### unit_flags2
*- no description -*
&nbsp;

### unit_flags3
*- no description -*
&nbsp;

### family
*- no description -*
&nbsp;

### trainer_class
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### VehicleId
[Vehicle ID](https://wow.tools/dbc/?dbc=vehicle) if creature is/has a vehicle entry. This field determines how the player appears on the vehicle, how the vehicle moves, and whether or not the vehicle action bar is shown.
For example, a **VehicleId** of 292 will make the player invisible, prevent the vehicle from strafing left/right (but will allow fowards/backwards), and will show the vehicle action bar spells (which are defined in spell1-8). An [npc_spellclick_spells](../world/npc_spellclick_spells) entry must be made for this creature entry in order for this to work.
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

### ExperienceModifier
Directly multiplies the experience granted on kill.
&nbsp;

### RacialLeader
A flag indicating wheather the creature is a racial leader. Killing racial leaders grants 100 honor.
&nbsp;

### movementId
We have no idea what this field does. It is passed directly to the client.&nbsp;

### WidgetSetID
*- no description -*
&nbsp;

### WidgetSetUnitConditionID
*- no description -*
&nbsp;

### RegenHealth
Boolean 1 or 0 controlling if the creature should regenerate its health out of combat or not.
&nbsp;

### mechanic_immune_mask
This makes the creature immune to specific spell mechanics. (See [SpellEffect EffectMechanic](https://wow.tools/dbc/?dbc=spelleffect))
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
Extra flags which aren't sniffable
| | Flag | | Description |
| --- | --- | --- | ---- |
1 | CREATURE_FLAG_EXTRA_INSTANCE_BIND | 0x00000001 | creature kill binds instance to killer and killer's group
2 | CREATURE_FLAG_EXTRA_CIVILIAN | 0x00000002 | creature does not aggro (ignore faction/reputation hostility)
4 | CREATURE_FLAG_EXTRA_NO_PARRY | 0x00000004 | creature does not parry
8 | CREATURE_FLAG_EXTRA_NO_PARRY_HASTEN | 0x00000008 | creature does not counter-attack at parry
16 | CREATURE_FLAG_EXTRA_NO_BLOCK | 0x00000010 | creature does not block
32 | CREATURE_FLAG_EXTRA_NO_CRUSH | 0x00000020 | creature does not do crush-attacks
64 | CREATURE_FLAG_EXTRA_NO_XP_AT_KILL | 0x00000040 | creature kill does not give XP
128 | CREATURE_FLAG_EXTRA_TRIGGER | 0x00000080 | creature is trigger-NPC (invisible to players only)
256 | CREATURE_FLAG_EXTRA_NO_TAUNT | 0x00000100 | creature is immune to taunt-auras and "attack me"-effects
512 | CREATURE_FLAG_EXTRA_NO_MOVE_FLAGS_UPDATE | 0x00000200 | creature won't update movement flags
1024 | CREATURE_FLAG_EXTRA_GHOST_VISIBILITY  | 0x00000400 | creature will be only visible for dead players
2048 | CREATURE_FLAG_EXTRA_USE_OFFHAND_ATTACK | 0x00000800 | creature will use offhand attacks
4096 | CREATURE_FLAG_EXTRA_NO_SELL_VENDOR  | 0x00001000 | players can't sell items to this vendor
16384 | CREATURE_FLAG_EXTRA_WORLDEVENT | 0x00004000 | custom flag for world events (left room for merging)
32768 | CREATURE_FLAG_EXTRA_GUARD | 0x00008000 | creature is a guard (Will ignore feign death and vanish)
131072 | CREATURE_FLAG_EXTRA_NO_CRIT | 0x00020000 | creature does not do critical strikes
262144 | CREATURE_FLAG_EXTRA_NO_SKILLGAIN | 0x00040000 | creature won't increase weapon skills
524288 | CREATURE_FLAG_EXTRA_TAUNT_DIMINISH | 0x00080000 | creature taunt is subject to diminishing returns
1048576 | CREATURE_FLAG_EXTRA_ALL_DIMINISH | 0x00100000 | Creature is subject to all diminishing returns
2097152 | CREATURE_FLAG_EXTRA_NO_PLAYER_DAMAGE_REQ | 0x00200000 | NPCs can help with killing this creature and player will still be credited if he tags the creature
268435456 | CREATURE_FLAG_EXTRA_DUNGEON_BOSS | 0x10000000 | Creature is a dungeon boss. This flag is generically set by core during runtime. Setting this in database will give you startup error.
536870912 | CREATURE_FLAG_EXTRA_IGNORE_PATHFINDING | 0x20000000 | Creature will ignore pathfinding. This is like disabling Mmaps, only for one creature.
1073741824 | CREATURE_FLAG_EXTRA_IMMUNITY_KNOCKBACK | 0x40000000 | creature will immune all knockback effects
&nbsp;

### ScriptName
The name of the script that this creature uses, if any. This ties a script from a scripting engine to this creature.
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

<a href="https://trinitycore.info/en/database/master/world/creature_summoned_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summoned_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
