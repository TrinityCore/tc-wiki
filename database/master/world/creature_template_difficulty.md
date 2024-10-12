---
title: creature_template_difficulty
description: 
published: true
date: 2024-10-12T11:38:03.387Z
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
[creature_template.entry](/en/database/master/world/creature_template#entry)
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
[ContentTuning.db2.ID](https://wago.tools/db2/ContentTuning)
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
| Name | Hex | Comment |
| :--- | :--- | :--- |
| CREATURE_STATIC_FLAG_MOUNTABLE | 0x00000001 |  |
| CREATURE_STATIC_FLAG_NO_XP | 0x00000002 | CREATURE_FLAG_EXTRA_NO_XP |
| CREATURE_STATIC_FLAG_NO_LOOT | 0x00000004 |  |
| CREATURE_STATIC_FLAG_UNKILLABLE | 0x00000008 |  |
| CREATURE_STATIC_FLAG_TAMEABLE | 0x00000010 | CREATURE_TYPE_FLAG_TAMEABLE |
| CREATURE_STATIC_FLAG_IMMUNE_TO_PC | 0x00000020 | UNIT_FLAG_IMMUNE_TO_PC |
| CREATURE_STATIC_FLAG_IMMUNE_TO_NPC | 0x00000040 | UNIT_FLAG_IMMUNE_TO_NPC |
| CREATURE_STATIC_FLAG_CAN_WIELD_LOOT | 0x00000080 |  |
| CREATURE_STATIC_FLAG_SESSILE | 0x00000100 | Rooted movementflag, creature is permanently rooted in place |
| CREATURE_STATIC_FLAG_UNINTERACTIBLE | 0x00000200 | UNIT_FLAG_UNINTERACTIBLE |
| CREATURE_STATIC_FLAG_NO_AUTOMATIC_REGEN | 0x00000400 | Creatures with that flag uses no UNIT_FLAG2_REGENERATE_POWER |
| CREATURE_STATIC_FLAG_DESPAWN_INSTANTLY | 0x00000800 | Creature instantly disappear when killed |
| CREATURE_STATIC_FLAG_CORPSE_RAID | 0x00001000 |  |
| CREATURE_STATIC_FLAG_CREATOR_LOOT | 0x00002000 | Lootable only by creator (engineering dummies) |
| CREATURE_STATIC_FLAG_NO_DEFENSE | 0x00004000 |  |
| CREATURE_STATIC_FLAG_NO_SPELL_DEFENSE | 0x00008000 |  |
| CREATURE_STATIC_FLAG_BOSS_MOB | 0x00010000 | CREATURE_TYPE_FLAG_BOSS_MOB, original description: Raid Boss Mob |
| CREATURE_STATIC_FLAG_COMBAT_PING | 0x00020000 |  |
| CREATURE_STATIC_FLAG_AQUATIC | 0x00040000 | aka Water Only, creature_template_movement.Ground=0|
| CREATURE_STATIC_FLAG_AMPHIBIOUS | 0x00080000 | Creatures will be able to enter and leave water but can only move on the ocean floor when CREATURE_STATIC_FLAG_CAN_SWIM is not present |
| CREATURE_STATIC_FLAG_NO_MELEE_FLEE | 0x00100000 | "No Melee (Flee)" Prevents melee (moves as-if feared, does not make creature passive) |
| CREATURE_STATIC_FLAG_VISIBLE_TO_GHOSTS | 0x00200000 | CREATURE_TYPE_FLAG_VISIBLE_TO_GHOSTS |
| CREATURE_STATIC_FLAG_PVP_ENABLING | 0x00400000 | Old UNIT_FLAG_PVP_ENABLING, now UNIT_BYTES_2_OFFSET_PVP_FLAG from UNIT_FIELD_BYTES_2 |
| CREATURE_STATIC_FLAG_DO_NOT_PLAY_WOUND_ANIM | 0x00800000 | CREATURE_TYPE_FLAG_DO_NOT_PLAY_WOUND_ANIM |
| CREATURE_STATIC_FLAG_NO_FACTION_TOOLTIP | 0x01000000 | CREATURE_TYPE_FLAG_NO_FACTION_TOOLTIP |
| CREATURE_STATIC_FLAG_IGNORE_COMBAT | 0x02000000 | Actually only changes react state to passive |
| CREATURE_STATIC_FLAG_ONLY_ATTACK_PVP_ENABLING | 0x04000000 | "Only attack targets that are PvP enabling" |
| CREATURE_STATIC_FLAG_CALLS_GUARDS | 0x08000000 | Creature will summon a guard if player is within its aggro range (even if creature doesn't attack per se) |
| CREATURE_STATIC_FLAG_CAN_SWIM | 0x10000000 | UnitFlags 0x8000 UNIT_FLAG_CAN_SWIM |
| CREATURE_STATIC_FLAG_FLOATING | 0x20000000 | sets DisableGravity movementflag on spawn/reset |
| CREATURE_STATIC_FLAG_MORE_AUDIBLE | 0x40000000 | CREATURE_TYPE_FLAG_MORE_AUDIBLE |
| CREATURE_STATIC_FLAG_LARGE_AOI | 0x80000000 | UnitFlags2 0x200000 |
&nbsp;

### StaticFlags2
| Name | Hex | Comment |
| :--- | :--- | :--- |
| CREATURE_STATIC_FLAG_2_NO_PET_SCALING | 0x00000001 |  |
| CREATURE_STATIC_FLAG_2_FORCE_PARTY_MEMBERS_INTO_COMBAT | 0x00000002 | Original description: Force Raid Combat |
| CREATURE_STATIC_FLAG_2_LOCK_TAPPERS_TO_RAID_ON_DEATH | 0x00000004 | "Lock Tappers To Raid On Death", toggleable by 'Set "RAID_LOCK_ON_DEATH" flag for unit(s)' action, CREATURE_FLAG_EXTRA_INSTANCE_BIND |
| CREATURE_STATIC_FLAG_2_SPELL_ATTACKABLE | 0x00000008 | CREATURE_TYPE_FLAG_SPELL_ATTACKABLE, original description(not valid anymore?): No Harmful Vertex Coloring |
| CREATURE_STATIC_FLAG_2_NO_CRUSHING_BLOWS | 0x00000010 | CREATURE_FLAG_EXTRA_NO_CRUSHING_BLOWS |
| CREATURE_STATIC_FLAG_2_NO_OWNER_THREAT | 0x00000020 |  |
| CREATURE_STATIC_FLAG_2_NO_WOUNDED_SLOWDOWN | 0x00000040 |  |
| CREATURE_STATIC_FLAG_2_USE_CREATOR_BONUSES | 0x00000080 |  |
| CREATURE_STATIC_FLAG_2_IGNORE_FEIGN_DEATH | 0x00000100 | CREATURE_FLAG_EXTRA_IGNORE_FEIGN_DEATH |
| CREATURE_STATIC_FLAG_2_IGNORE_SANCTUARY | 0x00000200 | Ignores SPELL_EFFECT_SANCTUARY |
| CREATURE_STATIC_FLAG_2_ACTION_TRIGGERS_WHILE_CHARMED | 0x00000400 |  |
| CREATURE_STATIC_FLAG_2_INTERACT_WHILE_DEAD | 0x00000800 | CREATURE_TYPE_FLAG_INTERACT_WHILE_DEAD|
| CREATURE_STATIC_FLAG_2_NO_INTERRUPT_SCHOOL_COOLDOWN | 0x00001000 |  |
| CREATURE_STATIC_FLAG_2_RETURN_SOUL_SHARD_TO_MASTER_OF_PET | 0x00002000 |  |
| CREATURE_STATIC_FLAG_2_SKIN_WITH_HERBALISM | 0x00004000 | CREATURE_TYPE_FLAG_SKIN_WITH_HERBALISM|
| CREATURE_STATIC_FLAG_2_SKIN_WITH_MINING | 0x00008000 | CREATURE_TYPE_FLAG_SKIN_WITH_MINING |
| CREATURE_STATIC_FLAG_2_ALERT_CONTENT_TEAM_ON_DEATH | 0x00010000 |  |
| CREATURE_STATIC_FLAG_2_ALERT_CONTENT_TEAM_AT_90_PCT_HP | 0x00020000 |  |
| CREATURE_STATIC_FLAG_2_ALLOW_MOUNTED_COMBAT | 0x00040000 | CREATURE_TYPE_FLAG_ALLOW_MOUNTED_COMBAT |
| CREATURE_STATIC_FLAG_2_PVP_ENABLING_OOC | 0x00080000 |  |
| CREATURE_STATIC_FLAG_2_NO_DEATH_MESSAGE | 0x00100000 | CREATURE_TYPE_FLAG_NO_DEATH_MESSAGE |
| CREATURE_STATIC_FLAG_2_IGNORE_PATHING_FAILURE | 0x00200000 |  |
| CREATURE_STATIC_FLAG_2_FULL_SPELL_LIST | 0x00400000 |  |
| CREATURE_STATIC_FLAG_2_DOES_NOT_REDUCE_REPUTATION_FOR_RAIDS | 0x00800000 |  |
| CREATURE_STATIC_FLAG_2_IGNORE_MISDIRECTION | 0x01000000 |  |
| CREATURE_STATIC_FLAG_2_HIDE_BODY | 0x02000000 | UNIT_FLAG2_HIDE_BODY |
| CREATURE_STATIC_FLAG_2_SPAWN_DEFENSIVE | 0x04000000 |  |
| CREATURE_STATIC_FLAG_2_SERVER_ONLY | 0x08000000 |  |
| CREATURE_STATIC_FLAG_2_CAN_SAFE_FALL | 0x10000000 | Original description: No Collision |
| CREATURE_STATIC_FLAG_2_CAN_ASSIST | 0x20000000 | CREATURE_TYPE_FLAG_CAN_ASSIST, original description: Player Can Heal/Buff |
| CREATURE_STATIC_FLAG_2_NO_SKILL_GAINS | 0x40000000 | CREATURE_FLAG_EXTRA_NO_SKILL_GAINS |
| CREATURE_STATIC_FLAG_2_NO_PET_BAR | 0x80000000 | CREATURE_TYPE_FLAG_NO_PET_BAR |
&nbsp;

### StaticFlags3
| Name | Hex | Comment |
| :--- | :--- | :--- |
| CREATURE_STATIC_FLAG_3_NO_DAMAGE_HISTORY | 0x00000001 | UNIT_FLAG2_DO_NOT_FADE_IN |
| CREATURE_STATIC_FLAG_3_DONT_PVP_ENABLE_OWNER | 0x00000002 | CREATURE_TYPE_FLAG_MASK_UID, original description: Non-Unique In Combat Log |
| CREATURE_STATIC_FLAG_3_DO_NOT_FADE_IN | 0x00000004 | CREATURE_TYPE_FLAG_SKIN_WITH_ENGINEERING |
| CREATURE_STATIC_FLAG_3_MASK_UID | 0x00000008 |  |
| CREATURE_STATIC_FLAG_3_SKIN_WITH_ENGINEERING | 0x00000010 |  |
| CREATURE_STATIC_FLAG_3_NO_AGGRO_ON_LEASH | 0x00000020 |  |
| CREATURE_STATIC_FLAG_3_NO_FRIENDLY_AREA_AURAS | 0x00000040 |  |
| CREATURE_STATIC_FLAG_3_EXTENDED_CORPSE_DURATION | 0x00000080 |  |
| CREATURE_STATIC_FLAG_3_CANNOT_SWIM | 0x00000100 | UNIT_FLAG_CANNOT_SWIM |
| CREATURE_STATIC_FLAG_3_TAMEABLE_EXOTIC | 0x00000200 | CREATURE_TYPE_FLAG_TAMEABLE_EXOTIC |
| CREATURE_STATIC_FLAG_3_GIGANTIC_AOI | 0x00000400 | Since MoP, creatures with that flag have UnitFlags2 0x400000 |
| CREATURE_STATIC_FLAG_3_INFINITE_AOI | 0x00000800 | Since MoP, creatures with that flag have UnitFlags2 0x40000000 |
| CREATURE_STATIC_FLAG_3_CANNOT_PENETRATE_WATER | 0x00001000 | Waterwalking |
| CREATURE_STATIC_FLAG_3_NO_NAME_PLATE | 0x00002000 | CREATURE_TYPE_FLAG_NO_NAME_PLATE |
| CREATURE_STATIC_FLAG_3_CHECKS_LIQUIDS | 0x00004000 |  |
| CREATURE_STATIC_FLAG_3_NO_THREAT_FEEDBACK | 0x00008000 |  |
| CREATURE_STATIC_FLAG_3_USE_MODEL_COLLISION_SIZE | 0x00010000 | CREATURE_TYPE_FLAG_USE_MODEL_COLLISION_SIZE |
| CREATURE_STATIC_FLAG_3_ATTACKER_IGNORES_FACING | 0x00020000 | In 3.3.5 used only by Rocket Propelled Warhead |
| CREATURE_STATIC_FLAG_3_ALLOW_INTERACTION_WHILE_IN_COMBAT | 0x00040000 | CREATURE_TYPE_FLAG_ALLOW_INTERACTION_WHILE_IN_COMBAT |
| CREATURE_STATIC_FLAG_3_SPELL_CLICK_FOR_PARTY_ONLY | 0x00080000 |  |
| CREATURE_STATIC_FLAG_3_FACTION_LEADER | 0x00100000 |  |
| CREATURE_STATIC_FLAG_3_IMMUNE_TO_PLAYER_BUFFS | 0x00200000 |  |
| CREATURE_STATIC_FLAG_3_COLLIDE_WITH_MISSILES | 0x00400000 | CREATURE_TYPE_FLAG_COLLIDE_WITH_MISSILES |
| CREATURE_STATIC_FLAG_3_CAN_BE_MULTITAPPED | 0x00800000 | Original description: Do Not Tap (Credit to threat list) |
| CREATURE_STATIC_FLAG_3_DO_NOT_PLAY_MOUNTED_ANIMATIONS | 0x01000000 | CREATURE_TYPE_FLAG_DO_NOT_PLAY_MOUNTED_ANIMATIONS, original description: Disable Dodge, Parry and Block Animations |
| CREATURE_STATIC_FLAG_3_CANNOT_TURN | 0x02000000 | UNIT_FLAG2_CANNOT_TURN |
| CREATURE_STATIC_FLAG_3_ENEMY_CHECK_IGNORES_LOS | 0x04000000 |  |
| CREATURE_STATIC_FLAG_3_FOREVER_CORPSE_DURATION | 0x08000000 | 7 days |
| CREATURE_STATIC_FLAG_3_PETS_ATTACK_WITH_3D_PATHING | 0x10000000 | "Pets attack with 3d pathing (Kologarn)" |
| CREATURE_STATIC_FLAG_3_LINK_ALL | 0x20000000 | CREATURE_TYPE_FLAG_LINK_ALL |
| CREATURE_STATIC_FLAG_3_AI_CAN_AUTO_TAKEOFF_IN_COMBAT | 0x40000000 |  |
| CREATURE_STATIC_FLAG_3_AI_CAN_AUTO_LAND_IN_COMBAT | 0x80000000 |  |
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

