---
title: serverside_spell
description: 
published: true
date: 2023-08-07T19:38:20.671Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:10.897Z
---

<a href="https://trinitycore.info/en/database/master/world/script_spline_chain_waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_spline_chain_waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'serverside_spell_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id) | int | unsigned | PRI | NO |  |  |  |
| [DifficultyID](#difficultyid) | int | signed | PRI | NO | 0 |  |  |
| [CategoryId](#categoryid) | int | unsigned |  | NO | 0 |  |  |
| [Dispel](#dispel) | int | unsigned |  | NO | 0 |  |  |
| [Mechanic](#mechanic) | int | unsigned |  | NO | 0 |  |  |
| [Attributes](#attributes) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx](#attributesex) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx2](#attributesex2) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx3](#attributesex3) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx4](#attributesex4) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx5](#attributesex5) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx6](#attributesex6) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx7](#attributesex7) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx8](#attributesex8) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx9](#attributesex9) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx10](#attributesex10) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx11](#attributesex11) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx12](#attributesex12) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx13](#attributesex13) | int | unsigned |  | NO | 0 |  |  |
| [AttributesEx14](#attributesex14) | int | unsigned |  | NO | 0 |  |  |
| [Stances](#stances) | bigint | unsigned |  | NO | 0 |  |  |
| [StancesNot](#stancesnot) | bigint | unsigned |  | NO | 0 |  |  |
| [Targets](#targets) | int | unsigned |  | NO | 0 |  |  |
| [TargetCreatureType](#targetcreaturetype) | int | unsigned |  | NO | 0 |  |  |
| [RequiresSpellFocus](#requiresspellfocus) | int | unsigned |  | NO | 0 |  |  |
| [FacingCasterFlags](#facingcasterflags) | int | unsigned |  | NO | 0 |  |  |
| [CasterAuraState](#casteraurastate) | int | unsigned |  | NO | 0 |  |  |
| [TargetAuraState](#targetaurastate) | int | unsigned |  | NO | 0 |  |  |
| [ExcludeCasterAuraState](#excludecasteraurastate) | int | unsigned |  | NO | 0 |  |  |
| [ExcludeTargetAuraState](#excludetargetaurastate) | int | unsigned |  | NO | 0 |  |  |
| [CasterAuraSpell](#casterauraspell) | int | unsigned |  | NO | 0 |  |  |
| [TargetAuraSpell](#targetauraspell) | int | unsigned |  | NO | 0 |  |  |
| [ExcludeCasterAuraSpell](#excludecasterauraspell) | int | unsigned |  | NO | 0 |  |  |
| [ExcludeTargetAuraSpell](#excludetargetauraspell) | int | unsigned |  | NO | 0 |  |  |
| [CasterAuraType](#casterauratype) | int | signed |  | NO | 0 |  |  |
| [TargetAuraType](#targetauratype) | int | signed |  | NO | 0 |  |  |
| [ExcludeCasterAuraType](#excludecasterauratype) | int | signed |  | NO | 0 |  |  |
| [ExcludeTargetAuraType](#excludetargetauratype) | int | signed |  | NO | 0 |  |  |
| [CastingTimeIndex](#castingtimeindex) | int | unsigned |  | NO | 1 |  |  |
| [RecoveryTime](#recoverytime) | int | unsigned |  | NO | 0 |  |  |
| [CategoryRecoveryTime](#categoryrecoverytime) | int | unsigned |  | NO | 0 |  |  |
| [StartRecoveryCategory](#startrecoverycategory) | int | unsigned |  | NO | 0 |  |  |
| [StartRecoveryTime](#startrecoverytime) | int | unsigned |  | NO | 0 |  |  |
| [InterruptFlags](#interruptflags) | int | unsigned |  | NO | 0 |  |  |
| [AuraInterruptFlags1](#aurainterruptflags1) | int | unsigned |  | NO | 0 |  |  |
| [AuraInterruptFlags2](#aurainterruptflags2) | int | unsigned |  | NO | 0 |  |  |
| [ChannelInterruptFlags1](#channelinterruptflags1) | int | unsigned |  | NO | 0 |  |  |
| [ChannelInterruptFlags2](#channelinterruptflags2) | int | unsigned |  | NO | 0 |  |  |
| [ProcFlags](#procflags) | int | unsigned |  | NO | 0 |  |  |
| [ProcFlags2](#procflags2) | int | unsigned |  | NO | 0 |  |  |
| [ProcChance](#procchance) | int | unsigned |  | NO | 0 |  |  |
| [ProcCharges](#proccharges) | int | unsigned |  | NO | 0 |  |  |
| [ProcCooldown](#proccooldown) | int | unsigned |  | NO | 0 |  |  |
| [ProcBasePPM](#procbaseppm) | float |  |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | int | unsigned |  | NO | 0 |  |  |
| [BaseLevel](#baselevel) | int | unsigned |  | NO | 0 |  |  |
| [SpellLevel](#spelllevel) | int | unsigned |  | NO | 0 |  |  |
| [DurationIndex](#durationindex) | int | unsigned |  | NO | 0 |  |  |
| [RangeIndex](#rangeindex) | int | unsigned |  | NO | 1 |  |  |
| [Speed](#speed) | float |  |  | NO | 0 |  |  |
| [LaunchDelay](#launchdelay) | float |  |  | NO | 0 |  |  |
| [StackAmount](#stackamount) | int | unsigned |  | NO | 0 |  |  |
| [EquippedItemClass](#equippeditemclass) | int | signed |  | NO | -1 |  |  |
| [EquippedItemSubClassMask](#equippeditemsubclassmask) | int | signed |  | NO | 0 |  |  |
| [EquippedItemInventoryTypeMask](#equippediteminventorytypemask) | int | signed |  | NO | 0 |  |  |
| [ContentTuningId](#contenttuningid) | int | unsigned |  | NO | 0 |  |  |
| [SpellName](#spellname) | varchar(100) |  |  | YES | NULL |  |  |
| [ConeAngle](#coneangle) | float |  |  | NO | 0 |  |  |
| [ConeWidth](#conewidth) | float |  |  | NO | 0 |  |  |
| [MaxTargetLevel](#maxtargetlevel) | int | unsigned |  | NO | 0 |  |  |
| [MaxAffectedTargets](#maxaffectedtargets) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyName](#spellfamilyname) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags1](#spellfamilyflags1) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags2](#spellfamilyflags2) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags3](#spellfamilyflags3) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyFlags4](#spellfamilyflags4) | int | unsigned |  | NO | 0 |  |  |
| [DmgClass](#dmgclass) | int | unsigned |  | NO | 0 |  |  |
| [PreventionType](#preventiontype) | int | unsigned |  | NO | 0 |  |  |
| [AreaGroupId](#areagroupid) | int | signed |  | NO | 0 |  |  |
| [SchoolMask](#schoolmask) | int | unsigned |  | NO | 0 |  |  |
| [ChargeCategoryId](#chargecategoryid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### CategoryId
*- no description -*
&nbsp;

### Dispel
*- no description -*
&nbsp;

### Mechanic
*- no description -*
&nbsp;

### Attributes
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR0_PROC_FAILURE_BURNS_CHARGE | 0x00000001 | Proc Failure Burns Charge |
| SPELL_ATTR0_USES_RANGED_SLOT | 0x00000002 | Use ammo, ranged attack range modifiers, ranged haste, etc. |
| SPELL_ATTR0_ON_NEXT_SWING_NO_DAMAGE | 0x00000004 | Both "on next swing" attributes have identical handling in server & client |
| SPELL_ATTR0_DO_NOT_LOG_IMMUNE_MISSES | 0x00000008 | Do Not Log Immune Misses (client only) |
| SPELL_ATTR0_IS_ABILITY | 0x00000010 | Cannot be reflected, not affected by cast speed modifiers, etc. |
| SPELL_ATTR0_IS_TRADESKILL | 0x00000020 | Displayed in recipe list, not affected by cast speed modifiers |
| SPELL_ATTR0_PASSIVE | 0x00000040 | Spell is automatically cast on self by core |
| SPELL_ATTR0_DO_NOT_DISPLAY_SPELLBOOK_AURA_ICON_COMBAT_LOG | 0x00000080 | Not visible in spellbook or aura bar
| SPELL_ATTR0_DO_NOT_LOG | 0x00000100 | Spell will not appear in combat logs |
| SPELL_ATTR0_HELD_ITEM_ONLY | 0x00000200 | Client will automatically select main-hand item as cast target |
| SPELL_ATTR0_ON_NEXT_SWING | 0x00000400 | Both "on next swing" attributes have identical handling in server & client |
| SPELL_ATTR0_WEARER_CASTS_PROC_TRIGGER | 0x00000800 | Just a marker attribute to show auras that trigger another spell (either directly or with a script) |
| SPELL_ATTR0_SERVER_ONLY | 0x00001000 | Server Only |
| SPELL_ATTR0_ALLOW_ITEM_SPELL_IN_PVP | 0x00002000 | Allow Item Spell In PvP |
| SPELL_ATTR0_ONLY_INDOORS | 0x00004000 | Only Indoors |
| SPELL_ATTR0_ONLY_OUTDOORS | 0x00008000 | Only Outdoors |
| SPELL_ATTR0_NOT_SHAPESHIFTED | 0x00010000 | Not Shapeshifted |
| SPELL_ATTR0_ONLY_STEALTHED | 0x00020000 | Only Stealthed |
| SPELL_ATTR0_DO_NOT_SHEATH | 0x00040000 | Do Not Sheath (client only) |
| SPELL_ATTR0_SCALES_WITH_CREATURE_LEVEL | 0x00080000 | For non-player casts, scale impact and power cost with caster's level |
| SPELL_ATTR0_CANCELS_AUTO_ATTACK_COMBAT | 0x00100000 | After casting this, the current auto-attack will be interrupted |
| SPELL_ATTR0_NO_ACTIVE_DEFENSE | 0x00200000 | Spell cannot be dodged, parried or blocked |
| SPELL_ATTR0_TRACK_TARGET_IN_CAST_PLAYER_ONLY | 0x00400000 | Track Target in Cast (Player Only) (client only) |
| SPELL_ATTR0_ALLOW_CAST_WHILE_DEAD | 0x00800000 | Spells without this flag cannot be cast by dead units in non-triggered contexts |
| SPELL_ATTR0_ALLOW_WHILE_MOUNTED | 0x01000000 | Allow While Mounted |
| SPELL_ATTR0_COOLDOWN_ON_EVENT | 0x02000000 | Spell is unusable while already active, and cooldown does not begin until the effects have worn off |
| SPELL_ATTR0_AURA_IS_DEBUFF | 0x04000000 | Forces the spell to be treated as a negative spell |
| SPELL_ATTR0_ALLOW_WHILE_SITTING | 0x08000000 | Allow While Sitting |
| SPELL_ATTR0_NOT_IN_COMBAT_ONLY_PEACEFUL | 0x10000000 | Not In Combat (Only Peaceful) |
| SPELL_ATTR0_NO_IMMUNITIES | 0x20000000 | Allows spell to pierce invulnerability, unless the invulnerability spell also has this attribute |
| SPELL_ATTR0_HEARTBEAT_RESIST | 0x40000000 | Periodically re-rolls against resistance to potentially expire aura early |
| SPELL_ATTR0_NO_AURA_CANCEL | 0x80000000 | Prevents the player from voluntarily canceling a positive aura |
&nbsp;

### AttributesEx
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR1_DISMISS_PET_FIRST | 0x00000001 | Without this attribute, summoning spells will fail if caster already has a pet|
| SPELL_ATTR1_USE_ALL_MANA | 0x00000002 | Ignores listed power cost and drains entire pool instead|
| SPELL_ATTR1_IS_CHANNELLED | 0x00000004 | Both "channeled" attributes have identical handling in server & client|
| SPELL_ATTR1_NO_REDIRECTION | 0x00000008 | Spell will not be attracted by SPELL_MAGNET auras (Grounding Totem)|
| SPELL_ATTR1_NO_SKILL_INCREASE | 0x00000010 | No Skill Increase|
| SPELL_ATTR1_ALLOW_WHILE_STEALTHED | 0x00000020 | Allow While Stealthed|
| SPELL_ATTR1_IS_SELF_CHANNELLED | 0x00000040 | Both "channeled" attributes have identical handling in server & client|
| SPELL_ATTR1_NO_REFLECTION | 0x00000080 | Spell will pierce through Spell Reflection and similar|
| SPELL_ATTR1_ONLY_PEACEFUL_TARGETS | 0x00000100 | Target cannot be in combat|
| SPELL_ATTR1_INITIATES_COMBAT_ENABLES_AUTO_ATTACK | 0x00000200 | Initiates Combat (Enables Auto-Attack) (client only) Caster will begin auto-attacking the target on cast|
| SPELL_ATTR1_NO_THREAT | 0x00000400 | No Threat. Also does not cause target to engage|
| SPELL_ATTR1_AURA_UNIQUE | 0x00000800 | Aura will not refresh its duration when recast|
| SPELL_ATTR1_FAILURE_BREAKS_STEALTH | 0x00001000 | Failure Breaks Stealth|
| SPELL_ATTR1_TOGGLE_FAR_SIGHT | 0x00002000 | Toggle Far Sight (client only)|
| SPELL_ATTR1_TRACK_TARGET_IN_CHANNEL | 0x00004000 | While channeling, adjust facing to face target|
| SPELL_ATTR1_IMMUNITY_PURGES_EFFECT | 0x00008000 | For immunity spells, cancel all auras that this spell would make you immune to when the spell is applied|
| SPELL_ATTR1_IMMUNITY_TO_HOSTILE_AND_FRIENDLY_EFFECTS | 0x00010000 | /*WRONG IMPL*/ Immunity to Hostile & Friendly Effects. Will not pierce Divine Shield, Ice Block and other full invulnerabilities|
| SPELL_ATTR1_NO_AUTOCAST_AI | 0x00020000 | No AutoCast (AI)|
| SPELL_ATTR1_PREVENTS_ANIM | 0x00040000 | /*NYI*/ // Prevents Anim. Auras apply UNIT_FLAG_PREVENT_EMOTES_FROM_CHAT_TEXT|
| SPELL_ATTR1_EXCLUDE_CASTER | 0x00080000 | Exclude Caster|
| SPELL_ATTR1_FINISHING_MOVE_DAMAGE | 0x00100000 | Finishing Move - Damage|
| SPELL_ATTR1_THREAT_ONLY_ON_MISS | 0x00200000 | /*NYI*/ // Threat only on Miss|
| SPELL_ATTR1_FINISHING_MOVE_DURATION | 0x00400000 | Finishing Move - Duration|
| SPELL_ATTR1_IGNORE_OWNERS_DEATH | 0x00800000 | /*NYI*/ // Ignore Owner's Death|
| SPELL_ATTR1_SPECIAL_SKILLUP | 0x01000000 | Special Skillup|
| SPELL_ATTR1_AURA_STAYS_AFTER_COMBAT | 0x02000000 | Aura Stays After Combat|
| SPELL_ATTR1_REQUIRE_ALL_TARGETS | 0x04000000 | Require All Targets|
| SPELL_ATTR1_DISCOUNT_POWER_ON_MISS | 0x08000000 | Discount Power On Miss|
| SPELL_ATTR1_NO_AURA_ICON | 0x10000000 | No Aura Icon (client only)|
| SPELL_ATTR1_NAME_IN_CHANNEL_BAR | 0x20000000 | Name in Channel Bar (client only)|
| SPELL_ATTR1_DISPEL_ALL_STACKS | 0x40000000 | Dispel All Stacks|
| SPELL_ATTR1_CAST_WHEN_LEARNED | 0x80000000 | Cast When Learned|
&nbsp;

### AttributesEx2
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR2_ALLOW_DEAD_TARGET | 0x00000001 | Allow Dead Target|
| SPELL_ATTR2_NO_SHAPESHIFT_UI | 0x00000002 | Does not replace action bar when shapeshifted|
| SPELL_ATTR2_IGNORE_LINE_OF_SIGHT | 0x00000004 | Ignore Line of Sight|
| SPELL_ATTR2_ALLOW_LOW_LEVEL_BUFF | 0x00000008 | Allow Low Level Buff|
| SPELL_ATTR2_USE_SHAPESHIFT_BAR | 0x00000010 | Use Shapeshift Bar (client only)|
| SPELL_ATTR2_AUTO_REPEAT | 0x00000020 | Auto Repeat|
| SPELL_ATTR2_CANNOT_CAST_ON_TAPPED | 0x00000040 | Can only target untapped units, or those tapped by caster|
| SPELL_ATTR2_DO_NOT_REPORT_SPELL_FAILURE | 0x00000080 | Do Not Report Spell Failure|
| SPELL_ATTR2_INCLUDE_IN_ADVANCED_COMBAT_LOG | 0x00000100 | Determines whether to include this aura in list of auras in SMSG_ENCOUNTER_START|
| SPELL_ATTR2_ALWAYS_CAST_AS_UNIT | 0x00000200 | /*NYI, UNK*/ // Always Cast As Unit|
| SPELL_ATTR2_SPECIAL_TAMING_FLAG | 0x00000400 | Special Taming Flag|
| SPELL_ATTR2_NO_TARGET_PER_SECOND_COSTS | 0x00000800 | No Target Per-Second Costs|
| SPELL_ATTR2_CHAIN_FROM_CASTER | 0x00001000 | Chain From Caster|
| SPELL_ATTR2_ENCHANT_OWN_ITEM_ONLY | 0x00002000 | nchant own item only|
| SPELL_ATTR2_ALLOW_WHILE_INVISIBLE | 0x00004000 | Allow While Invisible|
| SPELL_ATTR2_DO_NOT_CONSUME_IF_GAINED_DURING_CAST | 0x00008000 | Do Not Consume if Gained During Cast|
| SPELL_ATTR2_NO_ACTIVE_PETS | 0x00010000 | No Active Pets|
| SPELL_ATTR2_DO_NOT_RESET_COMBAT_TIMERS | 0x00020000 | Does not reset melee/ranged autoattack timer on cast|
| SPELL_ATTR2_NO_JUMP_WHILE_CAST_PENDING | 0x00040000 | No Jump While Cast Pending (client only)|
| SPELL_ATTR2_ALLOW_WHILE_NOT_SHAPESHIFTED_CASTER_FORM | 0x00080000 | Allow While Not Shapeshifted (caster form). Even if Stances are nonzero, allow spell to be cast outside of shapeshift (though not in a different shapeshift)|
| SPELL_ATTR2_INITIATE_COMBAT_POST_CAST_ENABLES_AUTO_ATTACK | 0x00100000 | Initiate Combat Post-Cast (Enables Auto-Attack)|
| SPELL_ATTR2_FAIL_ON_ALL_TARGETS_IMMUNE | 0x00200000 | Causes BG flags to be dropped if combined with ATTR1_DISPEL_AURAS_ON_IMMUNITY|
| SPELL_ATTR2_NO_INITIAL_THREAT | 0x00400000 | No Initial Threat|
| SPELL_ATTR2_PROC_COOLDOWN_ON_FAILURE | 0x00800000 | Proc Cooldown On Failure|
| SPELL_ATTR2_ITEM_CAST_WITH_OWNER_SKILL | 0x01000000 | Item Cast With Owner Skill|
| SPELL_ATTR2_DONT_BLOCK_MANA_REGEN | 0x02000000 | Don't Block Mana Regen|
| SPELL_ATTR2_NO_SCHOOL_IMMUNITIES | 0x04000000 | Allow aura to be applied despite target being immune to new aura applications|
| SPELL_ATTR2_IGNORE_WEAPONSKILL | 0x08000000 | Ignore Weaponskill|
| SPELL_ATTR2_NOT_AN_ACTION | 0x10000000 | Not an Action|
| SPELL_ATTR2_CANT_CRIT | 0x20000000 | Can't Crit|
| SPELL_ATTR2_ACTIVE_THREAT | 0x40000000 | Active Threat|
| SPELL_ATTR2_RETAIN_ITEM_CAST | 0x80000000 | passes m_CastItem to triggered spells |
&nbsp;

### AttributesEx3
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR3_PVP_ENABLING | 0x00000001 | PvP Enabling|
| SPELL_ATTR3_NO_PROC_EQUIP_REQUIREMENT | 0x00000002 | No Proc Equip Requirement. Ignores subclass mask check when checking proc|
| SPELL_ATTR3_NO_CASTING_BAR_TEXT | 0x00000004 | No Casting Bar Text|
| SPELL_ATTR3_COMPLETELY_BLOCKED | 0x00000008 | Completely Blocked|
| SPELL_ATTR3_NO_RES_TIMER | 0x00000010 | No Res Timer|
| SPELL_ATTR3_NO_DURABILITY_LOSS | 0x00000020 | No Durability Loss|
| SPELL_ATTR3_NO_AVOIDANCE | 0x00000040 | No Avoidance|
| SPELL_ATTR3_DOT_STACKING_RULE | 0x00000080 | DoT Stacking Rule. Stack separately for each caster|
| SPELL_ATTR3_ONLY_ON_PLAYER | 0x00000100 | Only On Player|
| SPELL_ATTR3_NOT_A_PROC | 0x00000200 | Not a Proc. Without this attribute, any triggered spell will be unable to trigger other auras' procs|
| SPELL_ATTR3_REQUIRES_MAIN_HAND_WEAPON | 0x00000400 | Requires Main-Hand Weapon|
| SPELL_ATTR3_ONLY_BATTLEGROUNDS | 0x00000800 | Only Battlegrounds|
| SPELL_ATTR3_ONLY_ON_GHOSTS | 0x00001000 | Only On Ghosts|
| SPELL_ATTR3_HIDE_CHANNEL_BAR | 0x00002000 | Hide Channel Bar (client only)|
| SPELL_ATTR3_HIDE_IN_RAID_FILTER | 0x00004000 | Hide In Raid Filter (client only)|
| SPELL_ATTR3_NORMAL_RANGED_ATTACK | 0x00008000 | Auto Shoot, Shoot, Throw - ranged normal attack attribute?|
| SPELL_ATTR3_SUPPRESS_CASTER_PROCS | 0x00010000 | Suppress Caster Procs|
| SPELL_ATTR3_SUPPRESS_TARGET_PROCS | 0x00020000 | Suppress Target Procs|
| SPELL_ATTR3_ALWAYS_HIT | 0x00040000 | Spell cannot miss, or be dodged/parried/blocked|
| SPELL_ATTR3_INSTANT_TARGET_PROCS | 0x00080000 | Instant Target Procs .Proc events are triggered before spell batching processes the spell hit on target|
| SPELL_ATTR3_ALLOW_AURA_WHILE_DEAD | 0x00100000 | Allow Aura While Dead|
| SPELL_ATTR3_ONLY_PROC_OUTDOORS | 0x00200000 | Only Proc Outdoors|
| SPELL_ATTR3_DO_NOT_TRIGGER_TARGET_STAND | 0x00400000 | Do Not Trigger Target Stand|
| SPELL_ATTR3_NO_DAMAGE_HISTORY | 0x00800000 | /*NYI, no damage history implementation*/ // No Damage History|
| SPELL_ATTR3_REQUIRES_OFF_HAND_WEAPON | 0x01000000 | Requires Off-Hand Weapon|
| SPELL_ATTR3_TREAT_AS_PERIODIC | 0x02000000 | Treat As Periodic|
| SPELL_ATTR3_CAN_PROC_FROM_PROCS | 0x04000000 | Can Proc From Procs|
| SPELL_ATTR3_ONLY_PROC_ON_CASTER | 0x08000000 | Only Proc on Caster|
| SPELL_ATTR3_IGNORE_CASTER_AND_TARGET_RESTRICTIONS | 0x10000000 | /*NYI*/ //Ignore Caster & Target Restrictions|
| SPELL_ATTR3_IGNORE_CASTER_MODIFIERS | 0x20000000 | Ignore Caster Modifiers|
| SPELL_ATTR3_DO_NOT_DISPLAY_RANGE | 0x40000000 | Do Not Display Range (client only)|
| SPELL_ATTR3_NOT_ON_AOE_IMMUNE | 0x80000000 |/*NYI, no aoe immunity implementation*/ |
&nbsp;

### AttributesEx4
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR4_NO_CAST_LOG | 0x00000001 | No Cast Log|
| SPELL_ATTR4_CLASS_TRIGGER_ONLY_ON_TARGET | 0x00000002 | Class Trigger Only On Target|
| SPELL_ATTR4_AURA_EXPIRES_OFFLINE | 0x00000004 | Aura Expires Offline. Debuffs (except Resurrection Sickness) will automatically do this|
| SPELL_ATTR4_NO_HELPFUL_THREAT | 0x00000008 | No Helpful Threat|
| SPELL_ATTR4_NO_HARMFUL_THREAT | 0x00000010 | No Harmful Threat|
| SPELL_ATTR4_ALLOW_CLIENT_TARGETING | 0x00000020 | Allow Client Targeting. Allows client to send spell targets for this spell. Applies only to pet spells, without this attribute CMSG_PET_ACTION is sent instead of CMSG_PET_CAST_SPELL|
| SPELL_ATTR4_CANNOT_BE_STOLEN | 0x00000040 | Cannot Be Stolen|
| SPELL_ATTR4_ALLOW_CAST_WHILE_CASTING | 0x00000080 | Allow Cast While Casting. Ignores already in-progress cast and still casts|
| SPELL_ATTR4_IGNORE_DAMAGE_TAKEN_MODIFIERS | 0x00000100 | Ignore Damage Taken Modifiers|
| SPELL_ATTR4_COMBAT_FEEDBACK_WHEN_USABLE | 0x00000200 | Combat Feedback When Usable (client only)|
| SPELL_ATTR4_WEAPON_SPEED_COST_SCALING | 0x00000400 | Weapon Speed Cost Scaling. Adds 10 to power cost for each 1s of weapon speed|
| SPELL_ATTR4_NO_PARTIAL_IMMUNITY | 0x00000800 | No Partial Immunity|
| SPELL_ATTR4_AURA_IS_BUFF | 0x00001000 | Aura Is Buff|
| SPELL_ATTR4_DO_NOT_LOG_CASTER | 0x00002000 | Do Not Log Caster|
| SPELL_ATTR4_REACTIVE_DAMAGE_PROC | 0x00004000 | Reactive Damage Proc. Damage from spells with this attribute doesn't break auras that normally break on damage taken|
| SPELL_ATTR4_NOT_IN_SPELLBOOK | 0x00008000 | Not In Spellbook|
| SPELL_ATTR4_NOT_IN_ARENA_OR_RATED_BATTLEGROUND | 0x00010000 | Not In Arena or Rated Battleground. Makes spell unusable despite CD <= 10min|
| SPELL_ATTR4_IGNORE_DEFAULT_ARENA_RESTRICTIONS | 0x00020000 | Ignore Default Arena Restrictions. Makes spell usable despite CD > 10min|
| SPELL_ATTR4_BOUNCY_CHAIN_MISSILES | 0x00040000 | Bouncy Chain Missiles. Hits area targets over time instead of all at once|
| SPELL_ATTR4_ALLOW_PROC_WHILE_SITTING | 0x00080000 | Allow Proc While Sitting|
| SPELL_ATTR4_AURA_NEVER_BOUNCES | 0x00100000 | Aura Never Bounces|
| SPELL_ATTR4_ALLOW_ENTERING_ARENA | 0x00200000 | Allow Entering Arena|
| SPELL_ATTR4_PROC_SUPPRESS_SWING_ANIM | 0x00400000 | Proc Suppress Swing Anim|
| SPELL_ATTR4_SUPPRESS_WEAPON_PROCS | 0x00800000 | Suppress Weapon Procs|
| SPELL_ATTR4_AUTO_RANGED_COMBAT | 0x01000000 | Auto Ranged Combat|
| SPELL_ATTR4_OWNER_POWER_SCALING | 0x02000000 | Owner Power Scaling|
| SPELL_ATTR4_ONLY_FLYING_AREAS | 0x04000000 | Only Flying Areas|
| SPELL_ATTR4_FORCE_DISPLAY_CASTBAR | 0x08000000 | Force Display Castbar|
| SPELL_ATTR4_IGNORE_COMBAT_TIMER | 0x10000000 | Ignore Combat Timer|
| SPELL_ATTR4_AURA_BOUNCE_FAILS_SPELL | 0x20000000 | Aura Bounce Fails Spell|
| SPELL_ATTR4_OBSOLETE | 0x40000000 | Obsolete|
| SPELL_ATTR4_USE_FACING_FROM_SPELL | 0x80000000 | Use Facing From Spell|
&nbsp;

### AttributesEx5
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR5_ALLOW_ACTIONS_DURING_CHANNEL | 0x00000001 | Allow Actions During Channel|
| SPELL_ATTR5_NO_REAGENT_COST_WITH_AURA | 0x00000002 | No Reagent Cost With Aura|
| SPELL_ATTR5_REMOVE_ENTERING_ARENA | 0x00000004 | Remove Entering. Force this aura to be removed on entering arena, regardless of other properties|
| SPELL_ATTR5_ALLOW_WHILE_STUNNED | 0x00000008 | Allow While Stunned|
| SPELL_ATTR5_TRIGGERS_CHANNELING | 0x00000010 | Triggers Channeling|
| SPELL_ATTR5_LIMIT_N | 0x00000020 | Remove previous application to another unit if applied|
| SPELL_ATTR5_IGNORE_AREA_EFFECT_PVP_CHECK | 0x00000040 | Ignore Area Effect PvP Check|
| SPELL_ATTR5_NOT_ON_PLAYER | 0x00000080 | Not On Player|
| SPELL_ATTR5_NOT_ON_PLAYER_CONTROLLED_NPC | 0x00000100 | Not On Player Controlled NPC|
| SPELL_ATTR5_EXTRA_INITIAL_PERIOD | 0x00000200 | Extra Initial Period. Immediately do periodic tick on apply|
| SPELL_ATTR5_DO_NOT_DISPLAY_DURATION | 0x00000400 | Do Not Display Duration|
| SPELL_ATTR5_IMPLIED_TARGETING | 0x00000800 | Implied Targeting (client only)|
| SPELL_ATTR5_MELEE_CHAIN_TARGETING | 0x00001000 | Melee Chain Targeting|
| SPELL_ATTR5_SPELL_HASTE_AFFECTS_PERIODIC | 0x00002000 | Spell Haste Affects Periodic|
| SPELL_ATTR5_NOT_AVAILABLE_WHILE_CHARMED | 0x00004000 | Not Available While Charmed|
| SPELL_ATTR5_TREAT_AS_AREA_EFFECT | 0x00008000 | Treat as Area Effect|
| SPELL_ATTR5_AURA_AFFECTS_NOT_JUST_REQ_EQUIPPED_ITEM | 0x00010000 | Aura Affects Not Just Req. Equipped Item|
| SPELL_ATTR5_ALLOW_WHILE_FLEEING | 0x00020000 | Allow While Fleeing|
| SPELL_ATTR5_ALLOW_WHILE_CONFUSED | 0x00040000 | Allow While Confused|
| SPELL_ATTR5_AI_DOESNT_FACE_TARGET | 0x00080000 | AI Doesn't Face Target|
| SPELL_ATTR5_DO_NOT_ATTEMPT_A_PET_RESUMMON_WHEN_DISMOUNTING | 0x00100000 | Do Not Attempt a Pet Resummon When Dismounting. No generic handling possible, used by scripted dismount spells|
| SPELL_ATTR5_IGNORE_TARGET_REQUIREMENTS | 0x00200000 | /*NYI*/ // Ignore Target Requirements|
| SPELL_ATTR5_NOT_ON_TRIVIAL | 0x00400000 | /*NYI*/ // Not On Trivial|
| SPELL_ATTR5_NO_PARTIAL_RESISTS | 0x00800000 | /*NYI, resisting only some spell effects not implemented*/ // No Partial Resists|
| SPELL_ATTR5_IGNORE_CASTER_REQUIREMENTS | 0x01000000 | /*NYI*/ // Ignore Caster Requirements|
| SPELL_ATTR5_ALWAYS_LINE_OF_SIGHT | 0x02000000 | Always Line of Sight|
| SPELL_ATTR5_ALWAYS_AOE_LINE_OF_SIGHT | 0x04000000 | Always AOE Line of Sight. Requires line of sight between caster and target in addition to between dest and target|
| SPELL_ATTR5_NO_CASTER_AURA_ICON | 0x08000000 | No Caster Aura Icon (client only)|
| SPELL_ATTR5_NO_TARGET_AURA_ICON | 0x10000000 | No Target Aura Icon (client only)|
| SPELL_ATTR5_AURA_UNIQUE_PER_CASTER | 0x20000000 | Aura Unique Per Caster|
| SPELL_ATTR5_ALWAYS_SHOW_GROUND_TEXTURE | 0x40000000 | Always Show Ground Texture|
| SPELL_ATTR5_ADD_MELEE_HIT_RATING | 0x80000000 | Add Melee Hit Rating|
&nbsp;

### AttributesEx6
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR6_NO_COOLDOWN_ON_TOOLTIP | 0x00000001 | No Cooldown On Tooltip (client only)|
| SPELL_ATTR6_DO_NOT_RESET_COOLDOWN_IN_ARENA | 0x00000002 | Do Not Reset Cooldown In Arena|
| SPELL_ATTR6_NOT_AN_ATTACK | 0x00000004 | /*NYI*/ // Not an Attack|
| SPELL_ATTR6_CAN_ASSIST_IMMUNE_PC | 0x00000008 | Can Assist Immune PC|
| SPELL_ATTR6_IGNORE_FOR_MOD_TIME_RATE | 0x00000010 | /*NYI, time rate not implemented*/ // Ignore For Mod Time Rate|
| SPELL_ATTR6_DO_NOT_CONSUME_RESOURCES | 0x00000020 | Do Not Consume Resources|
| SPELL_ATTR6_FLOATING_COMBAT_TEXT_ON_CAST | 0x00000040 | Floating Combat Text On Cast (client only)|
| SPELL_ATTR6_AURA_IS_WEAPON_PROC | 0x00000080 | Aura Is Weapon Proc|
| SPELL_ATTR6_DO_NOT_CHAIN_TO_CROWD_CONTROLLED_TARGETS | 0x00000100 | Do Not Chain To Crowd-Controlled Targets. Implicit targeting (chaining and area targeting) will not impact crowd controlled targets|
| SPELL_ATTR6_ALLOW_ON_CHARMED_TARGETS | 0x00000200 | /*NYI*/ // Allow On Charmed Targets|
| SPELL_ATTR6_NO_AURA_LOG | 0x00000400 | No Aura Log|
| SPELL_ATTR6_NOT_IN_RAID_INSTANCES | 0x00000800 | Not In Raid Instances|
| SPELL_ATTR6_ALLOW_WHILE_RIDING_VEHICLE | 0x00001000 | Allow While Riding Vehicle|
| SPELL_ATTR6_IGNORE_PHASE_SHIFT | 0x00002000 | Ignore Phase Shift|
| SPELL_ATTR6_AI_PRIMARY_RANGED_ATTACK | 0x00004000 | /*NYI*/ // AI Primary Ranged Attack|
| SPELL_ATTR6_NO_PUSHBACK | 0x00008000 | No Pushback|
| SPELL_ATTR6_NO_JUMP_PATHING | 0x00010000 | /*NYI, currently jumps dont path at all*/ // No Jump Pathing|
| SPELL_ATTR6_ALLOW_EQUIP_WHILE_CASTING | 0x00020000 | Allow Equip While Casting|
| SPELL_ATTR6_ORIGINATE_FROM_CONTROLLER | 0x00040000 | Originate From Controller. Client will prevent casting if not possessed, charmer will be caster for all intents and purposes|
| SPELL_ATTR6_DELAY_COMBAT_TIMER_DURING_CAST | 0x00080000 | Delay Combat Timer During Cast|
| SPELL_ATTR6_AURA_ICON_ONLY_FOR_CASTER_LIMIT_10 | 0x00100000 | Aura Icon Only For Caster (Limit 10) (client only)|
| SPELL_ATTR6_SHOW_MECHANIC_AS_COMBAT_TEXT | 0x00200000 | Show Mechanic as Combat Text (client only)|
| SPELL_ATTR6_ABSORB_CANNOT_BE_IGNORE | 0x00400000 | Absorb Cannot Be Ignore|
| SPELL_ATTR6_TAPS_IMMEDIATELY | 0x00800000 | Taps immediately|
| SPELL_ATTR6_CAN_TARGET_UNTARGETABLE | 0x01000000 | Can Target Untargetable|
| SPELL_ATTR6_DOESNT_RESET_SWING_TIMER_IF_INSTANT | 0x02000000 | Doesn't Reset Swing Timer if Instant|
| SPELL_ATTR6_VEHICLE_IMMUNITY_CATEGORY | 0x04000000 | /*NYI, immunity to some buffs for some vehicles*/ // Vehicle Immunity Category|
| SPELL_ATTR6_IGNORE_HEALING_MODIFIERS | 0x08000000 | Ignore Healing Modifiers. This prevents certain healing modifiers from applying - see implementation if you really care about details|
| SPELL_ATTR6_DO_NOT_AUTO_SELECT_TARGET_WITH_INITIATES_COMBAT | 0x10000000 | Do Not Auto Select Target with Initiates Combat (client only)|
| SPELL_ATTR6_IGNORE_CASTER_DAMAGE_MODIFIERS | 0x20000000 | Ignore Caster Damage Modifiers. This prevents certain damage modifiers from applying - see implementation if you really care about details|
| SPELL_ATTR6_DISABLE_TIED_EFFECT_POINTS | 0x40000000 | /*NYI*/ // Disable Tied Effect Points|
| SPELL_ATTR6_NO_CATEGORY_COOLDOWN_MODS | 0x80000000 | No Category Cooldown Mods|
&nbsp;

### AttributesEx7
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR7_UNK0 | 0x00000001 | Unknown attribute 0@Attr7|
| SPELL_ATTR7_IGNORE_DURATION_MODS | 0x00000002 | Ignore duration modifiers|
| SPELL_ATTR7_REACTIVATE_AT_RESURRECT | 0x00000004 | Reactivate at resurrect (client only)|
| SPELL_ATTR7_IS_CHEAT_SPELL | 0x00000008 | cheat spell. Cannot cast if caster doesn't have UnitFlag2 & UNIT_FLAG2_ALLOW_CHEAT_SPELLS|
| SPELL_ATTR7_UNK4 | 0x00000010 | Unknown attribute 4@Attr7. Soulstone related?|
| SPELL_ATTR7_SUMMON_TOTEM | 0x00000020 | Summons player-owned totem|
| SPELL_ATTR7_NO_PUSHBACK_ON_DAMAGE | 0x00000040 | Damage dealt by this does not cause spell pushback|
| SPELL_ATTR7_UNK7 | 0x00000080 | Unknown attribute 7@Attr7|
| SPELL_ATTR7_HORDE_ONLY | 0x00000100 | Horde only|
| SPELL_ATTR7_ALLIANCE_ONLY | 0x00000200 | Alliance only|
| SPELL_ATTR7_DISPEL_CHARGES | 0x00000400 | Dispel/Spellsteal remove individual charges|
| SPELL_ATTR7_INTERRUPT_ONLY_NONPLAYER | 0x00000800 | Can Cause Interrupt. Only interrupt non-player casting|
| SPELL_ATTR7_SILENCE_ONLY_NONPLAYER | 0x00001000 | Can Cause Silence|
| SPELL_ATTR7_CAN_ALWAYS_BE_INTERRUPTED | 0x00002000 | No UI Not Interruptible. Can always be interrupted, even if caster is immune|
| SPELL_ATTR7_UNK14 | 0x00004000 | Unknown attribute 14@Attr7|
| SPELL_ATTR7_UNK15 | 0x00008000 | Unknown attribute 15@Attr7. Exorcism - guaranteed crit vs families?|
| SPELL_ATTR7_HIDDEN_IN_SPELLBOOK_WHEN_LEARNED | 0x00010000 | Only In Spellbook Until Learned. After learning these spells become hidden in spellbook (but are visible when not learned for low level characters)|
| SPELL_ATTR7_UNK17 | 0x00020000 | Unknown attribute 17@Attr7|
| SPELL_ATTR7_HAS_CHARGE_EFFECT | 0x00040000 | Has charge effect|
| SPELL_ATTR7_ZONE_TELEPORT | 0x00080000 | Is zone teleport|
| SPELL_ATTR7_UNK20 | 0x00100000 | Unknown attribute 20@Attr7. Invulnerability related?|
| SPELL_ATTR7_UNK21 | 0x00200000 | Unknown attribute 21@Attr7|
| SPELL_ATTR7_IGNORES_COLD_WEATHER_FLYING_REQUIREMENT | 0x00400000 | Ignores Cold Weather Flying Requirement|
| SPELL_ATTR7_NO_ATTACK_DODGE | 0x00800000 | No Attack Dodge|
| SPELL_ATTR7_NO_ATTACK_PARRY | 0x01000000 | No Attack Parry|
| SPELL_ATTR7_NO_ATTACK_MISS | 0x02000000 | No Attack Miss|
| SPELL_ATTR7_UNK26 | 0x04000000 | Unknown attribute 26@Attr7|
| SPELL_ATTR7_BYPASS_NO_RESURRECT_AURA | 0x08000000 | Bypass No Resurrect Aura|
| SPELL_ATTR7_CONSOLIDATED_RAID_BUFF | 0x10000000 | Consolidate in raid buff frame (client only)|
| SPELL_ATTR7_UNK29 | 0x20000000 | Unknown attribute 29@Attr7|
| SPELL_ATTR7_UNK30 | 0x40000000 | Unknown attribute 30@Attr7|
| SPELL_ATTR7_CLIENT_INDICATOR | 0x80000000 | Client indicator (client only)|
&nbsp;

### AttributesEx8
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR8_CANT_MISS | 0x00000001 | No Attack Block|
| SPELL_ATTR8_UNK1 | 0x00000002 | Unknown attribute 1@Attr8|
| SPELL_ATTR8_UNK2 | 0x00000004 | Unknown attribute 2@Attr8|
| SPELL_ATTR8_UNK3 | 0x00000008 | Unknown attribute 3@Attr8|
| SPELL_ATTR8_UNK4 | 0x00000010 | Unknown attribute 4@Attr8|
| SPELL_ATTR8_UNK5 | 0x00000020 | Unknown attribute 5@Attr8|
| SPELL_ATTR8_UNK6 | 0x00000040 | Unknown attribute 6@Attr8|
| SPELL_ATTR8_UNK7 | 0x00000080 | Unknown attribute 7@Attr8|
| SPELL_ATTR8_AFFECT_PARTY_AND_RAID | 0x00000100 | Use Target's Level for Spell Scaling|
| SPELL_ATTR8_DONT_RESET_PERIODIC_TIMER | 0x00000200 | Periodic Can Crit. (WRONG) Periodic auras with this flag keep old periodic timer when refreshing at close to one tick remaining (kind of anti DoT clipping)|
| SPELL_ATTR8_NAME_CHANGED_DURING_TRANSFORM | 0x00000400 | Mirror creature name|
| SPELL_ATTR8_UNK11 | 0x00000800 | Unknown attribute 11@Attr8|
| SPELL_ATTR8_AURA_SEND_AMOUNT | 0x00001000 | Aura Points On Client|
| SPELL_ATTR8_UNK13 | 0x00002000 | Unknown attribute 13@Attr8|
| SPELL_ATTR8_UNK14 | 0x00004000 | Unknown attribute 14@Attr8|
| SPELL_ATTR8_WATER_MOUNT | 0x00008000 | Requires location to be on liquid surface|
| SPELL_ATTR8_UNK16 | 0x00010000 | Unknown attribute 16@Attr8|
| SPELL_ATTR8_HASTE_AFFECTS_DURATION | 0x00020000 | Haste Affects Duration|
| SPELL_ATTR8_REMEMBER_SPELLS | 0x00040000 | Ignore Spellcast Override Cost|
| SPELL_ATTR8_USE_COMBO_POINTS_ON_ANY_TARGET | 0x00080000 | Allow Targets Hidden by Spawn Tracking|
| SPELL_ATTR8_ARMOR_SPECIALIZATION | 0x00100000 | Requires Equipped Inv Types|
| SPELL_ATTR8_UNK21 | 0x00200000 | Unknown attribute 21@Attr8|
| SPELL_ATTR8_UNK22 | 0x00400000 | Unknown attribute 22@Attr8|
| SPELL_ATTR8_BATTLE_RESURRECTION | 0x00800000 | Enforce In Combat Ressurection Limit. Used to limit the number of resurrections in boss encounters|
| SPELL_ATTR8_HEALING_SPELL | 0x01000000 | Heal Prediction|
| SPELL_ATTR8_UNK25 | 0x02000000 | Unknown attribute 25@Attr8|
| SPELL_ATTR8_RAID_MARKER | 0x04000000 | Skip Is Known Check|
| SPELL_ATTR8_UNK27 | 0x08000000 | Unknown attribute 27@Attr8|
| SPELL_ATTR8_NOT_IN_BG_OR_ARENA | 0x10000000 | Not in Battleground|
| SPELL_ATTR8_MASTERY_AFFECTS_POINTS | 0x20000000 | Mastery Affects Points|
| SPELL_ATTR8_UNK30 | 0x40000000 | Unknown attribute 30@Attr8|
| SPELL_ATTR8_ATTACK_IGNORE_IMMUNE_TO_PC_FLAG | 0x80000000 | Can Attack ImmunePC. Do not check UNIT_FLAG_IMMUNE_TO_PC in IsValidAttackTarget|
&nbsp;

### AttributesEx9
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR9_UNK0 | 0x00000001 | Unknown attribute 0@Attr9|
| SPELL_ATTR9_UNK1 | 0x00000002 | Unknown attribute 1@Attr9|
| SPELL_ATTR9_RESTRICTED_FLIGHT_AREA | 0x00000004 | Only When Illegally Mounted|
| SPELL_ATTR9_UNK3 | 0x00000008 | Unknown attribute 3@Attr9|
| SPELL_ATTR9_SPECIAL_DELAY_CALCULATION | 0x00000010 | Missile Speed is Delay (in sec)|
| SPELL_ATTR9_SUMMON_PLAYER_TOTEM | 0x00000020 | Ignore Totem Requirements for Casting|
| SPELL_ATTR9_UNK6 | 0x00000040 | Unknown attribute 6@Attr9|
| SPELL_ATTR9_UNK7 | 0x00000080 | Unknown attribute 7@Attr9|
| SPELL_ATTR9_AIMED_SHOT | 0x00000100 | Cooldown Ignores Ranged Weapon|
| SPELL_ATTR9_NOT_USABLE_IN_ARENA | 0x00000200 | Not In Arena|
| SPELL_ATTR9_UNK10 | 0x00000400 | Unknown attribute 10@Attr9|
| SPELL_ATTR9_UNK11 | 0x00000800 | Unknown attribute 11@Attr9|
| SPELL_ATTR9_UNK12 | 0x00001000 | Unknown attribute 12@Attr9|
| SPELL_ATTR9_SLAM | 0x00002000 | Haste Affects Melee Ability Casttime|
| SPELL_ATTR9_USABLE_IN_RATED_BATTLEGROUNDS | 0x00004000 | Ignore Default Rated Battleground Restrictions|
| SPELL_ATTR9_UNK15 | 0x00008000 | Unknown attribute 15@Attr9|
| SPELL_ATTR9_UNK16 | 0x00010000 | Unknown attribute 16@Attr9|
| SPELL_ATTR9_UNK17 | 0x00020000 | Unknown attribute 17@Attr9|
| SPELL_ATTR9_UNK18 | 0x00040000 | Unknown attribute 18@Attr9|
| SPELL_ATTR9_UNK19 | 0x00080000 | Unknown attribute 19@Attr9|
| SPELL_ATTR9_UNK20 | 0x00100000 | Unknown attribute 20@Attr9|
| SPELL_ATTR9_UNK21 | 0x00200000 | Unknown attribute 21@Attr9|
| SPELL_ATTR9_UNK22 | 0x00400000 | Unknown attribute 22@Attr9|
| SPELL_ATTR9_UNK23 | 0x00800000 | Unknown attribute 23@Attr9|
| SPELL_ATTR9_UNK24 | 0x01000000 | Unknown attribute 24@Attr9|
| SPELL_ATTR9_UNK25 | 0x02000000 | Unknown attribute 25@Attr9|
| SPELL_ATTR9_UNK26 | 0x04000000 | Unknown attribute 26@Attr9|
| SPELL_ATTR9_UNK27 | 0x08000000 | Unknown attribute 27@Attr9|
| SPELL_ATTR9_UNK28 | 0x10000000 | Unknown attribute 28@Attr9|
| SPELL_ATTR9_UNK29 | 0x20000000 | Unknown attribute 29@Attr9|
| SPELL_ATTR9_UNK30 | 0x40000000 | Unknown attribute 30@Attr9|
| SPELL_ATTR9_UNK31 | 0x80000000 | Unknown attribute 31@Attr9|
&nbsp;

### AttributesEx10
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR10_UNK0 | 0x00000001 | Unknown attribute 0@Attr10|
| SPELL_ATTR10_UNK1 | 0x00000002 | Unknown attribute 1@Attr10|
| SPELL_ATTR10_USES_RANGED_SLOT_COSMETIC_ONLY | 0x00000004 | Uses Ranged Slot (Cosmetic Only)|
| SPELL_ATTR10_UNK3 | 0x00000008 | Unknown attribute 3@Attr10|
| SPELL_ATTR10_WATER_SPOUT | 0x00000010 | NPC Knockback - ignore doors|
| SPELL_ATTR10_UNK5 | 0x00000020 | Unknown attribute 5@Attr10|
| SPELL_ATTR10_UNK6 | 0x00000040 | Unknown attribute 6@Attr10|
| SPELL_ATTR10_TELEPORT_PLAYER | 0x00000080 | Ignore instance lock and farm limit on teleport|
| SPELL_ATTR10_UNK8 | 0x00000100 | Unknown attribute 8@Attr10|
| SPELL_ATTR10_UNK9 | 0x00000200 | Unknown attribute 9@Attr10|
| SPELL_ATTR10_UNK10 | 0x00000400 | Unknown attribute 10@Attr10|
| SPELL_ATTR10_HERB_GATHERING_MINING | 0x00000800 | Lock chest at precast|
| SPELL_ATTR10_USE_SPELL_BASE_LEVEL_FOR_SCALING | 0x00001000 | Use Spell Base Level For Scaling|
| SPELL_ATTR10_RESET_COOLDOWN_ON_ENCOUNTER_END | 0x00002000 | Reset cooldown upon ending an encounter|
| SPELL_ATTR10_ROLLING_PERIODIC | 0x00004000 | Rolling Periodic. Add remaining periodic damage to new aura when refreshed|
| SPELL_ATTR10_UNK15 | 0x00008000 | Unknown attribute 15@Attr10|
| SPELL_ATTR10_UNK16 | 0x00010000 | Unknown attribute 16@Attr10|
| SPELL_ATTR10_CAN_DODGE_PARRY_WHILE_CASTING | 0x00020000 | Allow Defense While Casting|
| SPELL_ATTR10_UNK18 | 0x00040000 | Unknown attribute 18@Attr10|
| SPELL_ATTR10_UNK19 | 0x00080000 | Unknown attribute 19@Attr10|
| SPELL_ATTR10_UNK20 | 0x00100000 | Unknown attribute 20@Attr10|
| SPELL_ATTR10_UNK21 | 0x00200000 | Unknown attribute 21@Attr10|
| SPELL_ATTR10_UNK22 | 0x00400000 | Unknown attribute 22@Attr10|
| SPELL_ATTR10_UNK23 | 0x00800000 | Unknown attribute 23@Attr10|
| SPELL_ATTR10_UNK24 | 0x01000000 | Unknown attribute 24@Attr10|
| SPELL_ATTR10_UNK25 | 0x02000000 | Unknown attribute 25@Attr10|
| SPELL_ATTR10_UNK26 | 0x04000000 | Unknown attribute 26@Attr10|
| SPELL_ATTR10_UNK27 | 0x08000000 | Unknown attribute 27@Attr10|
| SPELL_ATTR10_UNK28 | 0x10000000 | Unknown attribute 28@Attr10|
| SPELL_ATTR10_MOUNT_IS_NOT_ACCOUNT_WIDE | 0x20000000 | This Mount is NOT at the account level|
| SPELL_ATTR10_UNK30 | 0x40000000 | Unknown attribute 30@Attr10|
| SPELL_ATTR10_UNK31 | 0x80000000 | Unknown attribute 31@Attr10|
&nbsp;

### AttributesEx11
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR11_UNK0 | 0x00000001 | Unknown attribute 0@Attr11|
| SPELL_ATTR11_UNK1 | 0x00000002 | Unknown attribute 1@Attr11|
| SPELL_ATTR11_SCALES_WITH_ITEM_LEVEL | 0x00000004 | Scales with Casting Item's Level|
| SPELL_ATTR11_UNK3 | 0x00000008 | Unknown attribute 3@Attr11|
| SPELL_ATTR11_UNK4 | 0x00000010 | Unknown attribute 4@Attr11|
| SPELL_ATTR11_ABSORB_ENVIRONMENTAL_DAMAGE | 0x00000020 | Absorb Falling Damage|
| SPELL_ATTR11_UNK6 | 0x00000040 | Unknown attribute 6@Attr11|
| SPELL_ATTR11_RANK_IGNORES_CASTER_LEVEL | 0x00000080 | Ignore Caster's spell level. Spell_C_GetSpellRank returns SpellLevels->MaxLevel * 5 instead of std::min(SpellLevels->MaxLevel, caster->Level) * 5|
| SPELL_ATTR11_UNK8 | 0x00000100 | Unknown attribute 8@Attr11|
| SPELL_ATTR11_UNK9 | 0x00000200 | Unknown attribute 9@Attr11|
| SPELL_ATTR11_UNK10 | 0x00000400 | Unknown attribute 10@Attr11|
| SPELL_ATTR11_NOT_USABLE_IN_INSTANCES | 0x00000800 | Not in Instances|
| SPELL_ATTR11_UNK12 | 0x00001000 | Unknown attribute 12@Attr11|
| SPELL_ATTR11_UNK13 | 0x00002000 | Unknown attribute 13@Attr11|
| SPELL_ATTR11_UNK14 | 0x00004000 | Unknown attribute 14@Attr11|
| SPELL_ATTR11_UNK15 | 0x00008000 | Unknown attribute 15@Attr11|
| SPELL_ATTR11_NOT_USABLE_IN_CHALLENGE_MODE | 0x00010000 | Not in Mythic+ Mode (Challenge Mode)|
| SPELL_ATTR11_UNK17 | 0x00020000 | Unknown attribute 17@Attr11|
| SPELL_ATTR11_UNK18 | 0x00040000 | Unknown attribute 18@Attr11|
| SPELL_ATTR11_UNK19 | 0x00080000 | Unknown attribute 19@Attr11|
| SPELL_ATTR11_UNK20 | 0x00100000 | Unknown attribute 20@Attr11|
| SPELL_ATTR11_UNK21 | 0x00200000 | Unknown attribute 21@Attr11|
| SPELL_ATTR11_UNK22 | 0x00400000 | Unknown attribute 22@Attr11|
| SPELL_ATTR11_UNK23 | 0x00800000 | Unknown attribute 23@Attr11|
| SPELL_ATTR11_UNK24 | 0x01000000 | Unknown attribute 24@Attr11|
| SPELL_ATTR11_UNK25 | 0x02000000 | Unknown attribute 25@Attr11|
| SPELL_ATTR11_UNK26 | 0x04000000 | Unknown attribute 26@Attr11|
| SPELL_ATTR11_UNK27 | 0x08000000 | Unknown attribute 27@Attr11|
| SPELL_ATTR11_UNK28 | 0x10000000 | Unknown attribute 28@Attr11|
| SPELL_ATTR11_UNK29 | 0x20000000 | Unknown attribute 29@Attr11|
| SPELL_ATTR11_UNK30 | 0x40000000 | Unknown attribute 30@Attr11|
| SPELL_ATTR11_UNK31 | 0x80000000 | Unknown attribute 31@Attr11|
&nbsp;

### AttributesEx12
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR12_UNK0 | 0x00000001 | Unknown attribute 0@Attr12|
| SPELL_ATTR12_UNK1 | 0x00000002 | Unknown attribute 1@Attr12|
| SPELL_ATTR12_UNK2 | 0x00000004 | Unknown attribute 2@Attr12|
| SPELL_ATTR12_UNK3 | 0x00000008 | Unknown attribute 3@Attr12|
| SPELL_ATTR12_UNK4 | 0x00000010 | Unknown attribute 4@Attr12|
| SPELL_ATTR12_UNK5 | 0x00000020 | Unknown attribute 5@Attr12|
| SPELL_ATTR12_UNK6 | 0x00000040 | Unknown attribute 6@Attr12|
| SPELL_ATTR12_UNK7 | 0x00000080 | Unknown attribute 7@Attr12|
| SPELL_ATTR12_UNK8 | 0x00000100 | Unknown attribute 8@Attr12|
| SPELL_ATTR12_IGNORE_CASTING_DISABLED | 0x00000200 | Active Passive. Ignores aura 263 SPELL_AURA_DISABLE_CASTING_EXCEPT_ABILITIES|
| SPELL_ATTR12_UNK10 | 0x00000400 | Unknown attribute 10@Attr12|
| SPELL_ATTR12_UNK11 | 0x00000800 | Unknown attribute 11@Attr12|
| SPELL_ATTR12_UNK12 | 0x00001000 | Unknown attribute 12@Attr12|
| SPELL_ATTR12_UNK13 | 0x00002000 | Unknown attribute 13@Attr12|
| SPELL_ATTR12_UNK14 | 0x00004000 | Unknown attribute 14@Attr12|
| SPELL_ATTR12_UNK15 | 0x00008000 | Unknown attribute 15@Attr12|
| SPELL_ATTR12_UNK16 | 0x00010000 | Unknown attribute 16@Attr12|
| SPELL_ATTR12_UNK17 | 0x00020000 | Unknown attribute 17@Attr12|
| SPELL_ATTR12_UNK18 | 0x00040000 | Unknown attribute 18@Attr12|
| SPELL_ATTR12_UNK19 | 0x00080000 | Unknown attribute 19@Attr12|
| SPELL_ATTR12_UNK20 | 0x00100000 | Unknown attribute 20@Attr12|
| SPELL_ATTR12_UNK21 | 0x00200000 | Unknown attribute 21@Attr12|
| SPELL_ATTR12_UNK22 | 0x00400000 | Unknown attribute 22@Attr12|
| SPELL_ATTR12_START_COOLDOWN_ON_CAST_START | 0x00800000 | Trigger Cooldown On Spell Start|
| SPELL_ATTR12_IS_GARRISON_BUFF | 0x01000000 | Never Learn|
| SPELL_ATTR12_UNK25 | 0x02000000 | Unknown attribute 25@Attr12|
| SPELL_ATTR12_UNK26 | 0x04000000 | Unknown attribute 26@Attr12|
| SPELL_ATTR12_IS_READINESS_SPELL | 0x08000000 | Recompute Aura on Mercenary Mode|
| SPELL_ATTR12_UNK28 | 0x10000000 | Unknown attribute 28@Attr12|
| SPELL_ATTR12_UNK29 | 0x20000000 | Unknown attribute 29@Attr12|
| SPELL_ATTR12_UNK30 | 0x40000000 | Unknown attribute 30@Attr12|
| SPELL_ATTR12_ONLY_PROC_FROM_CLASS_ABILITIES | 0x80000000 | Only Proc From Class Abilities|
&nbsp;

### AttributesEx13
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR13_ALLOW_CLASS_ABILITY_PROCS | 0x00000001 | Allow Class Ability Procs|
| SPELL_ATTR13_UNK1 | 0x00000002 | Unknown attribute 0@Attr13|
| SPELL_ATTR13_PASSIVE_IS_UPGRADE | 0x00000004 | Is Upgrade. Displays "Upgrade" in spell tooltip instead of "Passive"|
| SPELL_ATTR13_UNK3 | 0x00000008 | Unknown attribute 3@Attr13|
| SPELL_ATTR13_UNK4 | 0x00000010 | Unknown attribute 4@Attr13|
| SPELL_ATTR13_UNK5 | 0x00000020 | Unknown attribute 5@Attr13|
| SPELL_ATTR13_UNK6 | 0x00000040 | Unknown attribute 6@Attr13|
| SPELL_ATTR13_UNK7 | 0x00000080 | Unknown attribute 7@Attr13|
| SPELL_ATTR13_UNK8 | 0x00000100 | Unknown attribute 8@Attr13|
| SPELL_ATTR13_UNK9 | 0x00000200 | Unknown attribute 9@Attr13|
| SPELL_ATTR13_UNK10 | 0x00000400 | Unknown attribute 10@Attr13|
| SPELL_ATTR13_UNK11 | 0x00000800 | Unknown attribute 11@Attr13|
| SPELL_ATTR13_UNK12 | 0x00001000 | Unknown attribute 12@Attr13|
| SPELL_ATTR13_UNK13 | 0x00002000 | Unknown attribute 13@Attr13|
| SPELL_ATTR13_UNK14 | 0x00004000 | Unknown attribute 14@Attr13|
| SPELL_ATTR13_UNK15 | 0x00008000 | Unknown attribute 15@Attr13|
| SPELL_ATTR13_UNK16 | 0x00010000 | Unknown attribute 16@Attr13|
| SPELL_ATTR13_UNK17 | 0x00020000 | Unknown attribute 17@Attr13|
| SPELL_ATTR13_ACTIVATES_REQUIRED_SHAPESHIFT | 0x00040000 | Do Not Enforce Shapeshift Requirements|
| SPELL_ATTR13_UNK19 | 0x00080000 | Unknown attribute 19@Attr13|
| SPELL_ATTR13_UNK20 | 0x00100000 | Unknown attribute 20@Attr13|
| SPELL_ATTR13_UNK21 | 0x00200000 | Unknown attribute 21@Attr13|
| SPELL_ATTR13_UNK22 | 0x00400000 | Unknown attribute 22@Attr13|
| SPELL_ATTR13_UNK23 | 0x00800000 | Unknown attribute 23@Attr13|
| SPELL_ATTR13_UNK24 | 0x01000000 | Unknown attribute 24@Attr13|
| SPELL_ATTR13_UNK25 | 0x02000000 | Unknown attribute 25@Attr13|
| SPELL_ATTR13_UNK26 | 0x04000000 | Unknown attribute 26@Attr13|
| SPELL_ATTR13_UNK27 | 0x08000000 | Unknown attribute 27@Attr13|
| SPELL_ATTR13_UNK28 | 0x10000000 | Unknown attribute 28@Attr13|
| SPELL_ATTR13_UNK29 | 0x20000000 | Unknown attribute 29@Attr13|
| SPELL_ATTR13_UNK30 | 0x40000000 | Unknown attribute 30@Attr13|
| SPELL_ATTR13_UNK31 | 0x80000000 | Unknown attribute 31@Attr13|
&nbsp;

### AttributesEx14
| Name | Hex | Comment |
| :--- | :--- | :--- |
| SPELL_ATTR14_UNK0 | 0x00000001 | Unknown attribute 0@Attr14|
| SPELL_ATTR14_REAGENT_COST_CONSUMES_CHARGES | 0x00000002 | Reagent Consume Charges. Consumes item charges for reagent costs instead of whole items|
| SPELL_ATTR14_UNK2 | 0x00000004 | Unknown attribute 2@Attr14|
| SPELL_ATTR14_HIDE_PASSIVE_FROM_TOOLTIP | 0x00000008 | Don't show "Passive" or "Upgrade" in tooltip|
| SPELL_ATTR14_UNK4 | 0x00000010 | Unknown attribute 4@Attr14|
| SPELL_ATTR14_UNK5 | 0x00000020 | Unknown attribute 5@Attr14|
| SPELL_ATTR14_UNK6 | 0x00000040 | Unknown attribute 6@Attr14|
| SPELL_ATTR14_UNK7 | 0x00000080 | Unknown attribute 7@Attr14|
| SPELL_ATTR14_UNK8 | 0x00000100 | Unknown attribute 8@Attr14|
| SPELL_ATTR14_UNK9 | 0x00000200 | Unknown attribute 9@Attr14|
| SPELL_ATTR14_UNK10 | 0x00000400 | Unknown attribute 10@Attr14|
| SPELL_ATTR14_UNK11 | 0x00000800 | Unknown attribute 11@Attr14|
| SPELL_ATTR14_UNK12 | 0x00001000 | Unknown attribute 12@Attr14|
| SPELL_ATTR14_UNK13 | 0x00002000 | Unknown attribute 13@Attr14|
| SPELL_ATTR14_UNK14 | 0x00004000 | Unknown attribute 14@Attr14|
| SPELL_ATTR14_UNK15 | 0x00008000 | Unknown attribute 15@Attr14|
| SPELL_ATTR14_UNK16 | 0x00010000 | Unknown attribute 16@Attr14|
| SPELL_ATTR14_UNK17 | 0x00020000 | Unknown attribute 17@Attr14|
| SPELL_ATTR14_UNK18 | 0x00040000 | Unknown attribute 18@Attr14|
| SPELL_ATTR14_UNK19 | 0x00080000 | Unknown attribute 19@Attr14|
| SPELL_ATTR14_UNK20 | 0x00100000 | Unknown attribute 20@Attr14|
| SPELL_ATTR14_UNK21 | 0x00200000 | Unknown attribute 21@Attr14|
| SPELL_ATTR14_UNK22 | 0x00400000 | Unknown attribute 22@Attr14|
| SPELL_ATTR14_UNK23 | 0x00800000 | Unknown attribute 23@Attr14|
| SPELL_ATTR14_UNK24 | 0x01000000 | Unknown attribute 24@Attr14|
| SPELL_ATTR14_UNK25 | 0x02000000 | Unknown attribute 25@Attr14|
| SPELL_ATTR14_UNK26 | 0x04000000 | Unknown attribute 26@Attr14|
| SPELL_ATTR14_UNK27 | 0x08000000 | Unknown attribute 27@Attr14|
| SPELL_ATTR14_UNK28 | 0x10000000 | Unknown attribute 28@Attr14|
| SPELL_ATTR14_UNK29 | 0x20000000 | Unknown attribute 29@Attr14|
| SPELL_ATTR14_UNK30 | 0x40000000 | Unknown attribute 30@Attr14|
| SPELL_ATTR14_UNK31 | 0x80000000 | Unknown attribute 31@Attr14|
&nbsp;

### Stances
*- no description -*
&nbsp;

### StancesNot
*- no description -*
&nbsp;

### Targets
*- no description -*
&nbsp;

### TargetCreatureType
*- no description -*
&nbsp;

### RequiresSpellFocus
*- no description -*
&nbsp;

### FacingCasterFlags
*- no description -*
&nbsp;

### CasterAuraState
*- no description -*
&nbsp;

### TargetAuraState
*- no description -*
&nbsp;

### ExcludeCasterAuraState
*- no description -*
&nbsp;

### ExcludeTargetAuraState
*- no description -*
&nbsp;

### CasterAuraSpell
*- no description -*
&nbsp;

### TargetAuraSpell
*- no description -*
&nbsp;

### ExcludeCasterAuraSpell
*- no description -*
&nbsp;

### ExcludeTargetAuraSpell
*- no description -*
&nbsp;

### CasterAuraType
*- no description -*
&nbsp;

### TargetAuraType
*- no description -*
&nbsp;

### ExcludeCasterAuraType
*- no description -*
&nbsp;

### ExcludeTargetAuraType
*- no description -*
&nbsp;

### CastingTimeIndex
*- no description -*
&nbsp;

### RecoveryTime
*- no description -*
&nbsp;

### CategoryRecoveryTime
*- no description -*
&nbsp;

### StartRecoveryCategory
*- no description -*
&nbsp;

### StartRecoveryTime
*- no description -*
&nbsp;

### InterruptFlags
| Name | Hex |
| :--- | :--- |
|None                        | 0		     |
|Movement                    | 0x00000001|
|DamagePushbackPlayerOnly    | 0x00000002|
|Stun                        | 0x00000004| 
|Combat                      | 0x00000008|
|DamageCancelsPlayerOnly     | 0x00000010|
|MeleeCombat                 | 0x00000020| 
|Immunity                    | 0x00000040| 
|DamageAbsorb                | 0x00000080|
|ZeroDamageCancels           | 0x00000100|
|DamagePushback              | 0x00000200|
|DamageCancels               | 0x00000400|
&nbsp;

### AuraInterruptFlags1
| Name | Hex |
| :--- | :--- |
|None                        | 0         |
|HostileActionReceived       | 0x00000001|
|Damage                      | 0x00000002|
|Action                      | 0x00000004|
|Moving                      | 0x00000008|
|Turning                     | 0x00000010|
|Anim                        | 0x00000020|
|Dismount                    | 0x00000040|
|UnderWater                  | 0x00000080| 
|AboveWater                  | 0x00000100| 
|Sheathing                   | 0x00000200|
|Interacting                 | 0x00000400| 
|Looting                     | 0x00000800|
|Attacking                   | 0x00001000|
|ItemUse                     | 0x00002000|
|DamageChannelDuration       | 0x00004000|
|Shapeshifting               | 0x00008000|
|ActionDelayed               | 0x00010000|
|Mount                       | 0x00020000|
|Standing                    | 0x00040000|
|LeaveWorld                  | 0x00080000|
|StealthOrInvis              | 0x00100000|
|InvulnerabilityBuff         | 0x00200000|
|EnterWorld                  | 0x00400000|
|PvPActive                   | 0x00800000|
|NonPeriodicDamage           | 0x01000000|
|LandingOrFlight             | 0x02000000|
|Release                     | 0x04000000|
|DamageCancelsScript         | 0x08000000| 
|EnteringCombat              | 0x10000000|
|Login                       | 0x20000000|
|Summon                      | 0x40000000|
|LeavingCombat               | 0x80000000|
&nbsp;

### AuraInterruptFlags2
| Name | Hex |
| :--- | :--- |
|None                        | 0         |
|Falling                     | 0x00000001| 
|Swimming                    | 0x00000002|
|NotMoving                   | 0x00000004| 
|Ground                      | 0x00000008|
|Transform                   | 0x00000010| 
|Jump                        | 0x00000020|
|ChangeSpec                  | 0x00000040|
|AbandonVehicle              | 0x00000080| 
|StartOfEncounter            | 0x00000100| 
|EndOfEncounter              | 0x00000200| 
|Disconnect                  | 0x00000400| 
|EnteringInstance            | 0x00000800| 
|DuelEnd                     | 0x00001000| 
|LeaveArenaOrBattleground    | 0x00002000| 
|ChangeTalent                | 0x00004000|
|ChangeGlyph                 | 0x00008000|
|SeamlessTransfer            | 0x00010000| 
|WarModeLeave                | 0x00020000| 
|TouchingGround              | 0x00040000| 
|ChromieTime                 | 0x00080000| 
|SplineFlightOrFreeFlight    | 0x00100000| 
|ProcOrPeriodicAttacking     | 0x00200000| 
&nbsp;

### ChannelInterruptFlags1
*- no description -*
&nbsp;

### ChannelInterruptFlags2
*- no description -*
&nbsp;

### ProcFlags
*- no description -*
&nbsp;

### ProcFlags2
*- no description -*
&nbsp;

### ProcChance
*- no description -*
&nbsp;

### ProcCharges
*- no description -*
&nbsp;

### ProcCooldown
*- no description -*
&nbsp;

### ProcBasePPM
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### BaseLevel
*- no description -*
&nbsp;

### SpellLevel
*- no description -*
&nbsp;

### DurationIndex
[SpellDuration.db2](https://wago.tools/db2/SpellDuration)
&nbsp;

### RangeIndex
[SpellRange.db2](https://wago.tools/db2/SpellRange)
&nbsp;

### Speed
*- no description -*
&nbsp;

### LaunchDelay
*- no description -*
&nbsp;

### StackAmount
*- no description -*
&nbsp;

### EquippedItemClass
*- no description -*
&nbsp;

### EquippedItemSubClassMask
*- no description -*
&nbsp;

### EquippedItemInventoryTypeMask
*- no description -*
&nbsp;

### ContentTuningId
*- no description -*
&nbsp;

### SpellName
*- no description -*
&nbsp;

### ConeAngle
*- no description -*
&nbsp;

### ConeWidth
*- no description -*
&nbsp;

### MaxTargetLevel
*- no description -*
&nbsp;

### MaxAffectedTargets
*- no description -*
&nbsp;

### SpellFamilyName
*- no description -*
&nbsp;

### SpellFamilyFlags1
*- no description -*
&nbsp;

### SpellFamilyFlags2
*- no description -*
&nbsp;

### SpellFamilyFlags3
*- no description -*
&nbsp;

### SpellFamilyFlags4
*- no description -*
&nbsp;

### DmgClass
*- no description -*
&nbsp;

### PreventionType
*- no description -*
&nbsp;

### AreaGroupId
*- no description -*
&nbsp;

### SchoolMask
*- no description -*
&nbsp;

### ChargeCategoryId
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/script_spline_chain_waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_spline_chain_waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/serverside_spell_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'serverside_spell_effect'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
