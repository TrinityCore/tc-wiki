---
title: creature_template
description: 
published: true
date: 2022-07-24T09:43:34.385Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:15.744Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_summoned_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_summoned_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_template_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [difficulty_entry_1](#difficulty_entry_1-3) | int | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_2](#difficulty_entry_1-3) | int | unsigned |  | NO | 0 |  |  |
| [difficulty_entry_3](#difficulty_entry_1-3) | int | unsigned |  | NO | 0 |  |  |
| [KillCredit1](#killcredit1) | int | unsigned |  | NO | 0 |  |  |
| [KillCredit2](#killcredit2) | int | unsigned |  | NO | 0 |  |  |
| [name](#name) | mediumtext |  |  | YES | NULL |  |  |
| [femaleName](#femalename) | mediumtext |  |  | YES | NULL |  |  |
| [subname](#subname) | mediumtext |  |  | YES | NULL |  |  |
| [TitleAlt](#titlealt) | mediumtext |  |  | YES | NULL |  |  |
| [IconName](#iconname) | varchar(64) |  |  | YES | NULL |  |  |
| [gossip_menu_id](#gossip_menu_id) | int | unsigned |  | NO | 0 |  |  |
| [minlevel](#minlevel) | smallint | signed |  | NO | 1 |  |  |
| [maxlevel](#maxlevel) | smallint | signed |  | NO | 1 |  |  |
| [HealthScalingExpansion](#healthscalingexpansion) | int | signed |  | NO | 0 |  |  |
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
| [dynamicflags](#dynamicflags) | int | unsigned |  | NO | 0 |  |  |
| [family](#family) | int | signed |  | NO | 0 |  |  |
| [trainer_class](#trainer_class) | tinyint | unsigned |  | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [type_flags](#type_flags) | int | unsigned |  | NO | 0 |  |  |
| [type_flags2](#type_flags2) | int | unsigned |  | NO | 0 |  |  |
| [lootid](#lootid) | int | unsigned |  | NO | 0 |  |  |
| [pickpocketloot](#pickpocketloot) | int | unsigned |  | NO | 0 |  |  |
| [skinloot](#skinloot) | int | unsigned |  | NO | 0 |  |  |
| [VehicleId](#vehicleid) | int | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | int | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | int | unsigned |  | NO | 0 |  |  |
| [AIName](#ainame) | varchar(64) |  |  | NO | '' |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [HoverHeight](#hoverheight) | float |  |  | NO | 1 |  |  |
| [HealthModifier](#healthmodifier) | float |  |  | NO | 1 |  |  |
| [HealthModifierExtra](#healthmodifierextra) | float |  |  | NO | 1 |  |  |
| [ManaModifier](#manamodifier) | float |  |  | NO | 1 |  |  |
| [ManaModifierExtra](#manamodifierextra) | float |  |  | NO | 1 |  |  |
| [ArmorModifier](#armormodifier) | float |  |  | NO | 1 |  |  |
| [DamageModifier](#damagemodifier) | float |  |  | NO | 1 |  |  |
| [ExperienceModifier](#experiencemodifier) | float |  |  | NO | 1 |  |  |
| [RacialLeader](#racialleader) | tinyint | unsigned |  | NO | 0 |  |  |
| [movementId](#movementid) | int | unsigned |  | NO | 0 |  |  |
| [CreatureDifficultyID](#creaturedifficultyid) | int | signed |  | NO | 0 |  |  |
| [WidgetSetID](#widgetsetid) | int | signed |  | NO | 0 |  |  |
| [WidgetSetUnitConditionID](#widgetsetunitconditionid) | int | signed |  | NO | 0 |  |  |
| [RegenHealth](#regenhealth) | tinyint | unsigned |  | NO | 1 |  |  |
| [mechanic_immune_mask](#mechanic_immune_mask) | int | unsigned |  | NO | 0 |  |  |
| [spell_school_immune_mask](#spell_school_immune_mask) | int | unsigned |  | NO | 0 |  |  |
| [flags_extra](#flags_extra) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
Creature's unique id.
&nbsp;

### difficulty_entry_1-3
This field connects the stats from another entry to this template when in 25man normal, 10man heroic or 25man heroic mode instance.

**For Dungeons:** 
difficulty_entry_1 = 5 (Heroic)

**For Raids:**
difficulty_entry_1 = 25 (Normal)
difficulty_entry_2 = 10 (Heroic)
difficulty_entry_3 = 25 (Heroic)
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

&nbsp;

### gossip_menu_id
The gossip ID of this creature. This field is obtained from sniff (update fields). If you can not sniff this value, and need to make one up, it must be > 50000. This field is the link to [gossip_menu.MenuId](/en/database/master/world/gossip_menu#menuid).
&nbsp;

### minlevel
*- no description -*
&nbsp;

### maxlevel
*- no description -*
&nbsp;

### HealthScalingExpansion
*- no description -*
&nbsp;

### RequiredExpansion
*- no description -*
&nbsp;

### VignetteID
*- no description -*
&nbsp;

### faction
*- no description -*
&nbsp;

### npcflag
*- no description -*
&nbsp;

### speed_walk
*- no description -*
&nbsp;

### speed_run
*- no description -*
&nbsp;

### scale
*- no description -*
&nbsp;

### rank
*- no description -*
&nbsp;

### dmgschool
*- no description -*
&nbsp;

### BaseAttackTime
*- no description -*
&nbsp;

### RangeAttackTime
*- no description -*
&nbsp;

### BaseVariance
*- no description -*
&nbsp;

### RangeVariance
*- no description -*
&nbsp;

### unit_class
*- no description -*
&nbsp;

### unit_flags
*- no description -*
&nbsp;

### unit_flags2
*- no description -*
&nbsp;

### unit_flags3
*- no description -*
&nbsp;

### dynamicflags
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

### type_flags
*- no description -*
&nbsp;

### type_flags2
*- no description -*
&nbsp;

### lootid
*- no description -*
&nbsp;

### pickpocketloot
*- no description -*
&nbsp;

### skinloot
*- no description -*
&nbsp;

### VehicleId
*- no description -*
&nbsp;

### mingold
*- no description -*
&nbsp;

### maxgold
*- no description -*
&nbsp;

### AIName
*- no description -*
&nbsp;

### MovementType
*- no description -*
&nbsp;

### HoverHeight
*- no description -*
&nbsp;

### HealthModifier
*- no description -*
&nbsp;

### HealthModifierExtra
*- no description -*
&nbsp;

### ManaModifier
*- no description -*
&nbsp;

### ManaModifierExtra
*- no description -*
&nbsp;

### ArmorModifier
*- no description -*
&nbsp;

### DamageModifier
*- no description -*
&nbsp;

### ExperienceModifier
*- no description -*
&nbsp;

### RacialLeader
*- no description -*
&nbsp;

### movementId
*- no description -*
&nbsp;

### CreatureDifficultyID
*- no description -*
&nbsp;

### WidgetSetID
*- no description -*
&nbsp;

### WidgetSetUnitConditionID
*- no description -*
&nbsp;

### RegenHealth
*- no description -*
&nbsp;

### mechanic_immune_mask
*- no description -*
&nbsp;

### spell_school_immune_mask
*- no description -*
&nbsp;

### flags_extra
*- no description -*
&nbsp;

### ScriptName
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
