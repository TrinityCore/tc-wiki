---
title: Spell.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spammessages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpamMessages'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellcasttimes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellCastTimes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Spell.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spell&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Spell)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Category](#category) | uint32 | [SpellCategory.dbc/0](/files/DBC/335/spellcategory#id) |
| 2 | [DispelType](#dispeltype) | uint32 | [SpellDispelType.dbc/0](/files/DBC/335/spelldispeltype#id) |
| 3 | [Mechanic](#mechanic) | uint32 | [SpellMechanic.dbc/0](/files/DBC/335/spellmechanic#id) |
| 4 | [Attributes](#attributes) | uint32 |  |
| 5 | [AttributesEx](#attributesex) | uint32 |  |
| 6 | [AttributesExB](#attributesexb) | uint32 |  |
| 7 | [AttributesExC](#attributesexc) | uint32 |  |
| 8 | [AttributesExD](#attributesexd) | uint32 |  |
| 9 | [AttributesExE](#attributesexe) | uint32 |  |
| 10 | [AttributesExF](#attributesexf) | uint32 |  |
| 11 | [AttributesExG](#attributesexg) | uint32 |  |
| 12 | [ShapeshiftMask_0](#shapeshiftmask) | uint32 | [SpellShapeshiftForm.dbc/0](/files/DBC/335/spellshapeshiftform#id) |
| 13 | [ShapeshiftMask_1](#shapeshiftmask) | uint32 | [SpellShapeshiftForm.dbc/0](/files/DBC/335/spellshapeshiftform#id) |
| 14 | [ShapeshiftExclude_0](#shapeshiftexclude) | uint32 | [SpellShapeshiftForm.dbc/0](/files/DBC/335/spellshapeshiftform#id) |
| 15 | [ShapeshiftExclude_1](#shapeshiftexclude) | uint32 | [SpellShapeshiftForm.dbc/0](/files/DBC/335/spellshapeshiftform#id) |
| 16 | [Targets](#targets) | uint32 |  |
| 17 | [TargetCreatureType](#targetcreaturetype) | uint32 | [CreatureType.dbc/0](/files/DBC/335/creaturetype#id) |
| 18 | [RequiresSpellFocus](#requiresspellfocus) | uint32 | [SpellFocusObject.dbc/0](/files/DBC/335/spellfocusobject#id) |
| 19 | [FacingCasterFlags](#facingcasterflags) | uint32 |  |
| 20 | [CasterAuraState](#casteraurastate) | uint32 |  |
| 21 | [TargetAuraState](#targetaurastate) | uint32 |  |
| 22 | [ExcludeCasterAuraState](#excludecasteraurastate) | uint32 |  |
| 23 | [ExcludeTargetAuraState](#excludetargetaurastate) | uint32 |  |
| 24 | [CasterAuraSpell](#casterauraspell) | uint32 | [Spell.dbc/0](#id) |
| 25 | [TargetAuraSpell](#targetauraspell) | uint32 | [Spell.dbc/0](#id) |
| 26 | [ExcludeCasterAuraSpell](#excludecasterauraspell) | uint32 | [Spell.dbc/0](#id) |
| 27 | [ExcludeTargetAuraSpell](#excludetargetauraspell) | uint32 | [Spell.dbc/0](#id) |
| 28 | [CastingTimeIndex](#castingtimeindex) | uint32 | [SpellCastTimes.dbc/0](/files/DBC/335/spellcasttimes#id) |
| 29 | [RecoveryTime](#recoverytime) | uint32 |  |
| 30 | [CategoryRecoveryTime](#categoryrecoverytime) | uint32 |  |
| 31 | [InterruptFlags](#interruptflags) | uint32 |  |
| 32 | [AuraInterruptFlags](#aurainterruptflags) | uint32 |  |
| 33 | [ChannelInterruptFlags](#channelinterruptflags) | uint32 |  |
| 34 | [ProcTypeMask](#proctypemask) | uint32 |  |
| 35 | [ProcChance](#procchance) | uint32 |  |
| 36 | [ProcCharges](#proccharges) | uint32 |  |
| 37 | [MaxLevel](#maxlevel) | uint32 |  |
| 38 | [BaseLevel](#baselevel) | uint32 |  |
| 39 | [SpellLevel](#spelllevel) | uint32 |  |
| 40 | [DurationIndex](#durationindex) | uint32 | [SpellDuration.dbc/0](/files/DBC/335/spellduration#id) |
| 41 | [PowerType](#powertype) | int32 |  |
| 42 | [ManaCost](#manacost) | uint32 |  |
| 43 | [ManaCostPerLevel](#manacostperlevel) | uint32 |  |
| 44 | [ManaPerSecond](#manapersecond) | uint32 |  |
| 45 | [ManaPerSecondPerLevel](#manapersecondperlevel) | uint32 |  |
| 46 | [RangeIndex](#rangeindex) | uint32 | [SpellRange.dbc/0](/files/DBC/335/spellrange#id) |
| 47 | [Speed](#speed) | float |  |
| 48 | [ModalNextSpell](#modalnextspell) | uint32 | [Spell.dbc/0](#id) |
| 49 | [CumulativeAura](#cumulativeaura) | uint32 |  |
| 50 | [Totem_0](#totem) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 51 | [Totem_1](#totem) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 52 | [Reagent_0](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 53 | [Reagent_1](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 54 | [Reagent_2](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 55 | [Reagent_3](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 56 | [Reagent_4](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 57 | [Reagent_5](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 58 | [Reagent_6](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 59 | [Reagent_7](#reagent) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 60 | [ReagentCount_0](#reagentcount) | uint32 |  |
| 61 | [ReagentCount_1](#reagentcount) | uint32 |  |
| 62 | [ReagentCount_2](#reagentcount) | uint32 |  |
| 63 | [ReagentCount_3](#reagentcount) | uint32 |  |
| 64 | [ReagentCount_4](#reagentcount) | uint32 |  |
| 65 | [ReagentCount_5](#reagentcount) | uint32 |  |
| 66 | [ReagentCount_6](#reagentcount) | uint32 |  |
| 67 | [ReagentCount_7](#reagentcount) | uint32 |  |
| 68 | [EquippedItemClass](#equippeditemclass) | int32 | [ItemSubClass.dbc/0](/files/DBC/335/itemsubclass#classid); [ItemClass.dbc/0](/files/DBC/335/itemclass#id) |
| 69 | [EquippedItemSubclass](#equippeditemsubclass) | int32 | [ItemSubClass.dbc/1](/files/DBC/335/itemsubclass#subclassid) |
| 70 | [EquippedItemInvTypes](#equippediteminvtypes) | int32 |  |
| 71 | [Effect_0](#effect) | uint32 |  |
| 72 | [Effect_1](#effect) | uint32 |  |
| 73 | [Effect_2](#effect) | uint32 |  |
| 74 | [EffectDieSides_0](#effectdiesides) | int32 |  |
| 75 | [EffectDieSides_1](#effectdiesides) | int32 |  |
| 76 | [EffectDieSides_2](#effectdiesides) | int32 |  |
| 77 | [EffectRealPointsPerLevel_0](#effectrealpointsperlevel) | float |  |
| 78 | [EffectRealPointsPerLevel_1](#effectrealpointsperlevel) | float |  |
| 79 | [EffectRealPointsPerLevel_2](#effectrealpointsperlevel) | float |  |
| 80 | [EffectBasePoints_0](#effectbasepoints) | int32 |  |
| 81 | [EffectBasePoints_1](#effectbasepoints) | int32 |  |
| 82 | [EffectBasePoints_2](#effectbasepoints) | int32 |  |
| 83 | [EffectMechanic_0](#effectmechanic) | uint32 | [SpellMechanic.dbc/0](/files/DBC/335/spellmechanic#id) |
| 84 | [EffectMechanic_1](#effectmechanic) | uint32 | [SpellMechanic.dbc/0](/files/DBC/335/spellmechanic#id) |
| 85 | [EffectMechanic_2](#effectmechanic) | uint32 | [SpellMechanic.dbc/0](/files/DBC/335/spellmechanic#id) |
| 86 | [EffectImplicitTargetA_0](#effectimplicittargeta) | uint32 |  |
| 87 | [EffectImplicitTargetA_1](#effectimplicittargeta) | uint32 |  |
| 88 | [EffectImplicitTargetA_2](#effectimplicittargeta) | uint32 |  |
| 89 | [EffectImplicitTargetB_0](#effectimplicittargetb) | uint32 |  |
| 90 | [EffectImplicitTargetB_1](#effectimplicittargetb) | uint32 |  |
| 91 | [EffectImplicitTargetB_2](#effectimplicittargetb) | uint32 |  |
| 92 | [EffectRadiusIndex_0](#effectradiusindex) | uint32 | [SpellRadius.dbc/0](/files/DBC/335/spellradius#id) |
| 93 | [EffectRadiusIndex_1](#effectradiusindex) | uint32 | [SpellRadius.dbc/0](/files/DBC/335/spellradius#id) |
| 94 | [EffectRadiusIndex_2](#effectradiusindex) | uint32 | [SpellRadius.dbc/0](/files/DBC/335/spellradius#id) |
| 95 | [EffectAura_0](#effectaura) | uint32 |  |
| 96 | [EffectAura_1](#effectaura) | uint32 |  |
| 97 | [EffectAura_2](#effectaura) | uint32 |  |
| 98 | [EffectAuraPeriod_0](#effectauraperiod) | uint32 |  |
| 99 | [EffectAuraPeriod_1](#effectauraperiod) | uint32 |  |
| 100 | [EffectAuraPeriod_2](#effectauraperiod) | uint32 |  |
| 101 | [EffectAmplitude_0](#effectamplitude) | float |  |
| 102 | [EffectAmplitude_1](#effectamplitude) | float |  |
| 103 | [EffectAmplitude_2](#effectamplitude) | float |  |
| 104 | [EffectChainTargets_0](#effectchaintargets) | uint32 |  |
| 105 | [EffectChainTargets_1](#effectchaintargets) | uint32 |  |
| 106 | [EffectChainTargets_2](#effectchaintargets) | uint32 |  |
| 107 | [EffectItemType_0](#effectitemtype) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 108 | [EffectItemType_1](#effectitemtype) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 109 | [EffectItemType_2](#effectitemtype) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 110 | [EffectMiscValue_0](#effectmiscvalue) | int32 |  |
| 111 | [EffectMiscValue_1](#effectmiscvalue) | int32 |  |
| 112 | [EffectMiscValue_2](#effectmiscvalue) | int32 |  |
| 113 | [EffectMiscValueB_0](#effectmiscvalueb) | int32 |  |
| 114 | [EffectMiscValueB_1](#effectmiscvalueb) | int32 |  |
| 115 | [EffectMiscValueB_2](#effectmiscvalueb) | int32 |  |
| 116 | [EffectTriggerSpell_0](#effecttriggerspell) | int32 | [Spell.dbc/0](#id) |
| 117 | [EffectTriggerSpell_1](#effecttriggerspell) | int32 | [Spell.dbc/0](#id) |
| 118 | [EffectTriggerSpell_2](#effecttriggerspell) | int32 | [Spell.dbc/0](#id) |
| 119 | [EffectPointsPerCombo_0](#effectpointspercombo) | float |  |
| 120 | [EffectPointsPerCombo_1](#effectpointspercombo) | float |  |
| 121 | [EffectPointsPerCombo_2](#effectpointspercombo) | float |  |
| 122 | [EffectSpellClassMask_A_0](#effectspellclassmask) | uint32 |  |
| 123 | [EffectSpellClassMask_A_1](#effectspellclassmask) | uint32 |  |
| 124 | [EffectSpellClassMask_A_2](#effectspellclassmask) | uint32 |  |
| 125 | [EffectSpellClassMask_B_0](#effectspellclassmask) | uint32 |  |
| 126 | [EffectSpellClassMask_B_1](#effectspellclassmask) | uint32 |  |
| 127 | [EffectSpellClassMask_B_2](#effectspellclassmask) | uint32 |  |
| 128 | [EffectSpellClassMask_C_0](#effectspellclassmask) | uint32 |  |
| 129 | [EffectSpellClassMask_C_1](#effectspellclassmask) | uint32 |  |
| 130 | [EffectSpellClassMask_C_2](#effectspellclassmask) | uint32 |  |
| 131 | [SpellVisualID_0](#spellvisualid) | uint32 | [SpellVisual.dbc/0](/files/DBC/335/spellvisual#id) |
| 132 | [SpellVisualID_1](#spellvisualid) | uint32 | [SpellVisual.dbc/0](/files/DBC/335/spellvisual#id) |
| 133 | [SpellIconID](#spelliconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
| 134 | [ActiveIconID](#activeiconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
| 135 | [SpellPriority](#spellpriority) | uint32 |  |
| 136 | [Name_0](#name) | string |  |
| 137 | [Name_1](#name) | string |  |
| 138 | [Name_2](#name) | string |  |
| 139 | [Name_3](#name) | string |  |
| 140 | [Name_4](#name) | string |  |
| 141 | [Name_5](#name) | string |  |
| 142 | [Name_6](#name) | string |  |
| 143 | [Name_7](#name) | string |  |
| 144 | [Name_8](#name) | string |  |
| 145 | [Name_9](#name) | string |  |
| 146 | [Name_10](#name) | string |  |
| 147 | [Name_11](#name) | string |  |
| 148 | [Name_12](#name) | string |  |
| 149 | [Name_13](#name) | string |  |
| 150 | [Name_14](#name) | string |  |
| 151 | [Name_15](#name) | string |  |
| 152 | [Name_lang_mask](#name) | uint32 |  |
| 153 | [NameSubtext_0](#namesubtext) | string |  |
| 154 | [NameSubtext_1](#namesubtext) | string |  |
| 155 | [NameSubtext_2](#namesubtext) | string |  |
| 156 | [NameSubtext_3](#namesubtext) | string |  |
| 157 | [NameSubtext_4](#namesubtext) | string |  |
| 158 | [NameSubtext_5](#namesubtext) | string |  |
| 159 | [NameSubtext_6](#namesubtext) | string |  |
| 160 | [NameSubtext_7](#namesubtext) | string |  |
| 161 | [NameSubtext_8](#namesubtext) | string |  |
| 162 | [NameSubtext_9](#namesubtext) | string |  |
| 163 | [NameSubtext_10](#namesubtext) | string |  |
| 164 | [NameSubtext_11](#namesubtext) | string |  |
| 165 | [NameSubtext_12](#namesubtext) | string |  |
| 166 | [NameSubtext_13](#namesubtext) | string |  |
| 167 | [NameSubtext_14](#namesubtext) | string |  |
| 168 | [NameSubtext_15](#namesubtext) | string |  |
| 169 | [NameSubtext_lang_mask](#namesubtext) | uint32 |  |
| 170 | [Description_0](#description) | string |  |
| 171 | [Description_1](#description) | string |  |
| 172 | [Description_2](#description) | string |  |
| 173 | [Description_3](#description) | string |  |
| 174 | [Description_4](#description) | string |  |
| 175 | [Description_5](#description) | string |  |
| 176 | [Description_6](#description) | string |  |
| 177 | [Description_7](#description) | string |  |
| 178 | [Description_8](#description) | string |  |
| 179 | [Description_9](#description) | string |  |
| 180 | [Description_10](#description) | string |  |
| 181 | [Description_11](#description) | string |  |
| 182 | [Description_12](#description) | string |  |
| 183 | [Description_13](#description) | string |  |
| 184 | [Description_14](#description) | string |  |
| 185 | [Description_15](#description) | string |  |
| 186 | [Description_lang_mask](#description) | uint32 |  |
| 187 | [AuraDescription_0](#auradescription) | string |  |
| 188 | [AuraDescription_1](#auradescription) | string |  |
| 189 | [AuraDescription_2](#auradescription) | string |  |
| 190 | [AuraDescription_3](#auradescription) | string |  |
| 191 | [AuraDescription_4](#auradescription) | string |  |
| 192 | [AuraDescription_5](#auradescription) | string |  |
| 193 | [AuraDescription_6](#auradescription) | string |  |
| 194 | [AuraDescription_7](#auradescription) | string |  |
| 195 | [AuraDescription_8](#auradescription) | string |  |
| 196 | [AuraDescription_9](#auradescription) | string |  |
| 197 | [AuraDescription_10](#auradescription) | string |  |
| 198 | [AuraDescription_11](#auradescription) | string |  |
| 199 | [AuraDescription_12](#auradescription) | string |  |
| 200 | [AuraDescription_13](#auradescription) | string |  |
| 201 | [AuraDescription_14](#auradescription) | string |  |
| 202 | [AuraDescription_15](#auradescription) | string |  |
| 203 | [AuraDescription_lang_mask](#auradescription) | uint32 |  |
| 204 | [ManaCostPct](#manacostpct) | uint32 |  |
| 205 | [StartRecoveryCategory](#startrecoverycategory) | uint32 | [SpellCategory.dbc/0](/files/DBC/335/spellcategory#id) |
| 206 | [StartRecoveryTime](#startrecoverytime) | uint32 |  |
| 207 | [MaxTargetLevel](#maxtargetlevel) | uint32 |  |
| 208 | [SpellClassSet](#spellclassset) | uint32 |  |
| 209 | [SpellClassMask_0](#spellclassmask) | uint32 |  |
| 210 | [SpellClassMask_1](#spellclassmask) | uint32 |  |
| 211 | [SpellClassMask_2](#spellclassmask) | uint32 |  |
| 212 | [MaxTargets](#maxtargets) | uint32 |  |
| 213 | [DefenseType](#defensetype) | uint32 |  |
| 214 | [PreventionType](#preventiontype) | uint32 |  |
| 215 | [StanceBarOrder](#stancebarorder) | int32 |  |
| 216 | [EffectChainAmplitude_0](#effectchainamplitude) | float |  |
| 217 | [EffectChainAmplitude_1](#effectchainamplitude) | float |  |
| 218 | [EffectChainAmplitude_2](#effectchainamplitude) | float |  |
| 219 | [MinFactionID](#minfactionid) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 220 | [MinReputation](#minreputation) | uint32 |  |
| 221 | [RequiredAuraVision](#requiredauravision) | uint32 |  |
| 222 | [RequiredTotemCategoryID_0](#requiredtotemcategoryid) | uint32 | [TotemCategory.dbc/0](/files/DBC/335/totemcategory#id); [item TotemCategory](/database/335/world/item_template#totemcategory) |
| 223 | [RequiredTotemCategoryID_1](#requiredtotemcategoryid) | uint32 | [TotemCategory.dbc/0](/files/DBC/335/totemcategory#id); [item TotemCategory](/database/335/world/item_template#totemcategory) |
| 224 | [RequiredAreasID](#requiredareasid) | int32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 225 | [SchoolMask](#schoolmask) | uint32 |  |
| 226 | [RuneCostID](#runecostid) | uint32 | [SpellRuneCost.dbc/0](/files/DBC/335/spellrunecost#id) |
| 227 | [SpellMissileID](#spellmissileid) | uint32 | [SpellMissile.dbc/0](/files/DBC/335/spellmissile#id) |
| 228 | [PowerDisplayID](#powerdisplayid) | int32 | [PowerDisplay.dbc/0](/files/DBC/335/powerdisplay#id) |
| 229 | [EffectBonusCoefficient_0](#effectbonuscoefficient) | float |  |
| 230 | [EffectBonusCoefficient_1](#effectbonuscoefficient) | float |  |
| 231 | [EffectBonusCoefficient_2](#effectbonuscoefficient) | float |  |
| 232 | [DescriptionVariablesID](#descriptionvariablesid) | int32 | [SpellDescriptionVariables.dbc/0](/files/DBC/335/spelldescriptionvariables#id) |
| 233 | [Difficulty](#difficulty) | uint32 | [SpellDifficulty.dbc/0](/files/DBC/335/spelldifficulty#id); [spelldifficulty id](/database/335/world/spelldifficulty_dbc#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Category
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### DispelType
<code>Col: 2 (uint32)</code>

| ID | Name |
|----|------|
| 0 | DISPEL_NONE |
| 1 | DISPEL_MAGIC |
| 2 | DISPEL_CURSE |
| 3 | DISPEL_DISEASE |
| 4 | DISPEL_POISON |
| 5 | DISPEL_STEALTH |
| 6 | DISPEL_INVISIBILITY |
| 7 | DISPEL_ALL |
| 8 | DISPEL_SPE_NPC_ONLY |
| 9 | DISPEL_ENRAGE |
| 10 | DISPEL_ZG_TICKET |
| 11 | DESPEL_OLD_UNUSED |
{.dense}

&nbsp;

### Mechanic
<code>Col: 3 (uint32)</code>

| ID | Name |  | ID | Name |
|----|------|--|----|------|
| 0 | MECHANIC_NONE |  | 16 | MECHANIC_BANDAGE |
| 1 | MECHANIC_CHARM |  | 17 | MECHANIC_POLYMORPH |
| 2 | MECHANIC_DISORIENTED |  | 18 | MECHANIC_BANISH |
| 3 | MECHANIC_DISARM |  | 19 | MECHANIC_SHIELD |
| 4 | MECHANIC_DISTRACT |  | 20 | MECHANIC_SHACKLE |
| 5 | MECHANIC_FEAR |  | 21 | MECHANIC_MOUNT |
| 6 | MECHANIC_GRIP |  | 22 | MECHANIC_INFECTED |
| 7 | MECHANIC_ROOT |  | 23 | MECHANIC_TURN |
| 8 | MECHANIC_SLOW_ATTACK |  | 24 | MECHANIC_HORROR |
| 9 | MECHANIC_SILENCE |  | 25 | MECHANIC_INVULNERABILITY |
| 10 | MECHANIC_SLEEP |  | 26 | MECHANIC_INTERRUPT |
| 11 | MECHANIC_SNARE |  | 27 | MECHANIC_DAZE |
| 12 | MECHANIC_STUN |  | 28 | MECHANIC_DISCOVERY |
| 13 | MECHANIC_FREEZE |  | 29 | MECHANIC_IMMUNE_SHIELD |
| 14 | MECHANIC_KNOCKOUT |  | 30 | MECHANIC_SAPPED |
| 15 | MECHANIC_BLEED |  | 31 | MECHANIC_ENRAGED |
{.dense}

&nbsp;

### Attributes
<code>Col: 4 (uint32)</code>

[`enum SpellAttr0`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L404-L438)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR0_UNK0 | Unknown attribute 0@Attr0 |
| 2 | 0x00000002 | SPELL_ATTR0_REQ_AMMO | Treat as ranged attack DESCRIPTION Use ammo, ranged attack range modifiers, ranged haste, etc. |
| 4 | 0x00000004 | SPELL_ATTR0_ON_NEXT_SWING | On next melee (type 1) DESCRIPTION Both "on next swing" attributes have identical handling in server & client |
| 8 | 0x00000008 | SPELL_ATTR0_IS_REPLENISHMENT | Replenishment (client only) |
| 16 | 0x00000010 | SPELL_ATTR0_ABILITY | Treat as ability DESCRIPTION Cannot be reflected, not affected by cast speed modifiers, etc. |
| 32 | 0x00000020 | SPELL_ATTR0_TRADESPELL | Trade skill recipe DESCRIPTION Displayed in recipe list, not affected by cast speed modifiers |
| 64 | 0x00000040 | SPELL_ATTR0_PASSIVE | Passive spell DESCRIPTION Spell is automatically cast on self by core |
| 128 | 0x00000080 | SPELL_ATTR0_HIDDEN_CLIENTSIDE | Hidden in UI (client only) DESCRIPTION Not visible in spellbook or aura bar |
| 256 | 0x00000100 | SPELL_ATTR0_HIDE_IN_COMBAT_LOG | Hidden in combat log (client only) DESCRIPTION Spell will not appear in combat logs |
| 512 | 0x00000200 | SPELL_ATTR0_TARGET_MAINHAND_ITEM | Auto-target mainhand item (client only) DESCRIPTION Client will automatically select main-hand item as cast target |
| 1024 | 0x00000400 | SPELL_ATTR0_ON_NEXT_SWING_2 | On next melee (type 2) DESCRIPTION Both "on next swing" attributes have identical handling in server & client |
| 2048 | 0x00000800 | SPELL_ATTR0_UNK11 | Unknown attribute 11@Attr0 |
| 4096 | 0x00001000 | SPELL_ATTR0_DAYTIME_ONLY | Only usable during daytime (unused) |
| 8192 | 0x00002000 | SPELL_ATTR0_NIGHT_ONLY | Only usable during nighttime (unused) |
| 16384 | 0x00004000 | SPELL_ATTR0_INDOORS_ONLY | Only usable indoors |
| 32768 | 0x00008000 | SPELL_ATTR0_OUTDOORS_ONLY | Only usable outdoors |
| 65536 | 0x00010000 | SPELL_ATTR0_NOT_SHAPESHIFT | Not usable while shapeshifted |
| 131072 | 0x00020000 | SPELL_ATTR0_ONLY_STEALTHED | Only usable in stealth |
| 262144 | 0x00040000 | SPELL_ATTR0_DONT_AFFECT_SHEATH_STATE | Don't shealthe weapons (client only) |
| 524288 | 0x00080000 | SPELL_ATTR0_LEVEL_DAMAGE_CALCULATION | Scale with caster level DESCRIPTION For non-player casts, scale impact and power cost with caster's level |
| 1048576 | 0x00100000 | SPELL_ATTR0_STOP_ATTACK_TARGET | Stop attacking after cast DESCRIPTION After casting this, the current auto-attack will be interrupted |
| 2097152 | 0x00200000 | SPELL_ATTR0_IMPOSSIBLE_DODGE_PARRY_BLOCK | Prevent physical avoidance DESCRIPTION Spell cannot be dodged, parried or blocked |
| 4194304 | 0x00400000 | SPELL_ATTR0_CAST_TRACK_TARGET | Automatically face target during cast (client only) |
| 8388608 | 0x00800000 | SPELL_ATTR0_CASTABLE_WHILE_DEAD | Can be cast while dead DESCRIPTION Spells without this flag cannot be cast by dead units in non-triggered contexts |
| 16777216 | 0x01000000 | SPELL_ATTR0_CASTABLE_WHILE_MOUNTED | Can be cast while mounted |
| 33554432 | 0x02000000 | SPELL_ATTR0_DISABLED_WHILE_ACTIVE | Cooldown starts on expiry DESCRIPTION Spell is unusable while already active, and cooldown does not begin until the effects have worn off |
| 67108864 | 0x04000000 | SPELL_ATTR0_NEGATIVE_1 | Is negative spell DESCRIPTION Forces the spell to be treated as a negative spell |
| 134217728 | 0x08000000 | SPELL_ATTR0_CASTABLE_WHILE_SITTING | Can be cast while sitting |
| 268435456 | 0x10000000 | SPELL_ATTR0_CANT_USED_IN_COMBAT | Cannot be used in combat |
| 536870912 | 0x20000000 | SPELL_ATTR0_UNAFFECTED_BY_INVULNERABILITY | Pierce invulnerability DESCRIPTION Allows spell to pierce invulnerability, unless the invulnerability spell also has this attribute |
| 1073741824 | 0x40000000 | SPELL_ATTR0_HEARTBEAT_RESIST_CHECK | Periodic resistance checks DESCRIPTION Periodically re-rolls against resistance to potentially expire aura early |
| 2147483648 | 0x80000000 | SPELL_ATTR0_CANT_CANCEL | Aura cannot be cancelled DESCRIPTION Prevents the player from voluntarily canceling a positive aura |
{.dense}

&nbsp;

### AttributesEx
<code>Col: 5 (uint32)</code>

[`enum SpellAttr1`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L441-L475)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR1_DISMISS_PET | Dismiss Pet on cast DESCRIPTION Without this attribute, summoning spells will fail if caster already has a pet |
| 2 | 0x00000002 | SPELL_ATTR1_DRAIN_ALL_POWER | Drain all power DESCRIPTION Ignores listed power cost and drains entire pool instead |
| 4 | 0x00000004 | SPELL_ATTR1_CHANNELED_1 | Channeled (type 1) DESCRIPTION Both "channeled" attributes have identical handling in server & client |
| 8 | 0x00000008 | SPELL_ATTR1_CANT_BE_REDIRECTED | Ignore redirection effects DESCRIPTION Spell will not be attracted by SPELL_MAGNET auras (Grounding Totem) |
| 16 | 0x00000010 | SPELL_ATTR1_UNK4 | Unknown attribute 4@Attr1 |
| 32 | 0x00000020 | SPELL_ATTR1_NOT_BREAK_STEALTH | Does not break stealth |
| 64 | 0x00000040 | SPELL_ATTR1_CHANNELED_2 | Channeled (type 2) DESCRIPTION Both "channeled" attributes have identical handling in server & client |
| 128 | 0x00000080 | SPELL_ATTR1_CANT_BE_REFLECTED | Ignore reflection effects DESCRIPTION Spell will pierce through Spell Reflection and similar |
| 256 | 0x00000100 | SPELL_ATTR1_CANT_TARGET_IN_COMBAT | Target cannot be in combat |
| 512 | 0x00000200 | SPELL_ATTR1_MELEE_COMBAT_START | Starts auto-attack (client only) DESCRIPTION Caster will begin auto-attacking the target on cast |
| 1024 | 0x00000400 | SPELL_ATTR1_NO_THREAT | Does not generate threat DESCRIPTION Also does not cause target to engage |
| 2048 | 0x00000800 | SPELL_ATTR1_DONT_REFRESH_DURATION_ON_RECAST | Aura will not refresh its duration when recast |
| 4096 | 0x00001000 | SPELL_ATTR1_IS_PICKPOCKET | Pickpocket (client only) |
| 8192 | 0x00002000 | SPELL_ATTR1_FARSIGHT | Farsight aura (client only) |
| 16384 | 0x00004000 | SPELL_ATTR1_CHANNEL_TRACK_TARGET | Track target while channeling DESCRIPTION While channeling, adjust facing to face target |
| 32768 | 0x00008000 | SPELL_ATTR1_DISPEL_AURAS_ON_IMMUNITY | Immunity cancels preapplied auras DESCRIPTION For immunity spells, cancel all auras that this spell would make you immune to when the spell is applied |
| 65536 | 0x00010000 | SPELL_ATTR1_UNAFFECTED_BY_SCHOOL_IMMUNE | Unaffected by school immunities DESCRIPTION Will not pierce Divine Shield, Ice Block and other full invulnerabilities |
| 131072 | 0x00020000 | SPELL_ATTR1_UNAUTOCASTABLE_BY_PET | Cannot be autocast by pet |
| 262144 | 0x00040000 | SPELL_ATTR1_PREVENTS_ANIM | NYI, auras apply UNIT_FLAG_PREVENT_EMOTES_FROM_CHAT_TEXT |
| 524288 | 0x00080000 | SPELL_ATTR1_CANT_TARGET_SELF | Cannot be self-cast |
| 1048576 | 0x00100000 | SPELL_ATTR1_REQ_COMBO_POINTS1 | Requires combo points (type 1) |
| 2097152 | 0x00200000 | SPELL_ATTR1_UNK21 | Unknown attribute 21@Attr1 |
| 4194304 | 0x00400000 | SPELL_ATTR1_REQ_COMBO_POINTS2 | Requires combo points (type 2) |
| 8388608 | 0x00800000 | SPELL_ATTR1_UNK23 | Unknwon attribute 23@Attr1 |
| 16777216 | 0x01000000 | SPELL_ATTR1_IS_FISHING | Fishing (client only) |
| 33554432 | 0x02000000 | SPELL_ATTR1_UNK25 | Unknown attribute 25@Attr1 |
| 67108864 | 0x04000000 | SPELL_ATTR1_UNK26 | Unknown attribute 26@Attr1 DESCRIPTION Related to [target=focus] and [target=mouseover] macros? |
| 134217728 | 0x08000000 | SPELL_ATTR1_UNK27 | Unknown attribute 27@Attr1 DESCRIPTION Melee spell? |
| 268435456 | 0x10000000 | SPELL_ATTR1_DONT_DISPLAY_IN_AURA_BAR | Hide in aura bar (client only) |
| 536870912 | 0x20000000 | SPELL_ATTR1_CHANNEL_DISPLAY_SPELL_NAME | Show spell name during channel (client only) |
| 1073741824 | 0x40000000 | SPELL_ATTR1_ENABLE_AT_DODGE | Enable at dodge |
| 2147483648 | 0x80000000 | SPELL_ATTR1_UNK31 | Unknown attribute 31@Attr1 |
{.dense}

&nbsp;

### AttributesExB
<code>Col: 6 (uint32)</code>

[`enum SpellAttr2`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L478-L512)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR2_CAN_TARGET_DEAD | Can target dead players or corpses |
| 2 | 0x00000002 | SPELL_ATTR2_UNK1 | Unknown attribute 1@Attr2 |
| 4 | 0x00000004 | SPELL_ATTR2_CAN_TARGET_NOT_IN_LOS | Ignore Line of Sight |
| 8 | 0x00000008 | SPELL_ATTR2_UNK3 | Ignore aura scaling |
| 16 | 0x00000010 | SPELL_ATTR2_DISPLAY_IN_STANCE_BAR | Show in stance bar (client only) |
| 32 | 0x00000020 | SPELL_ATTR2_AUTOREPEAT_FLAG | Ranged auto-attack spell |
| 64 | 0x00000040 | SPELL_ATTR2_CANT_TARGET_TAPPED | Cannot target others' tapped units DESCRIPTION Can only target untapped units, or those tapped by caster |
| 128 | 0x00000080 | SPELL_ATTR2_UNK7 | Unknown attribute 7@Attr2 |
| 256 | 0x00000100 | SPELL_ATTR2_UNK8 | Unknown attribute 8@Attr2 |
| 512 | 0x00000200 | SPELL_ATTR2_UNK9 | Unknown attribute 9@Attr2 |
| 1024 | 0x00000400 | SPELL_ATTR2_UNK10 | Unknown attribute 10@Attr2 DESCRIPTION Related to taming? |
| 2048 | 0x00000800 | SPELL_ATTR2_HEALTH_FUNNEL | Health Funnel |
| 4096 | 0x00001000 | SPELL_ATTR2_UNK12 | Unknown attribute 12@Attr2 |
| 8192 | 0x00002000 | SPELL_ATTR2_PRESERVE_ENCHANT_IN_ARENA | Enchant persists when entering arena |
| 16384 | 0x00004000 | SPELL_ATTR2_UNK14 | Unknown attribute 14@Attr2 |
| 32768 | 0x00008000 | SPELL_ATTR2_UNK15 | Unknown attribute 15@Attr2 |
| 65536 | 0x00010000 | SPELL_ATTR2_TAME_BEAST | Tame Beast |
| 131072 | 0x00020000 | SPELL_ATTR2_NOT_RESET_AUTO_ACTIONS | Don't reset swing timer DESCRIPTION Does not reset melee/ranged autoattack timer on cast |
| 262144 | 0x00040000 | SPELL_ATTR2_REQ_DEAD_PET | Requires dead pet |
| 524288 | 0x00080000 | SPELL_ATTR2_NOT_NEED_SHAPESHIFT | Also allow outside shapeshift DESCRIPTION Even if Stances are nonzero, allow spell to be cast outside of shapeshift (though not in a different shapeshift) |
| 1048576 | 0x00100000 | SPELL_ATTR2_UNK20 | Unknown attribute 20@Attr2 |
| 2097152 | 0x00200000 | SPELL_ATTR2_DAMAGE_REDUCED_SHIELD | Damage reduction ability DESCRIPTION Causes BG flags to be dropped if combined with ATTR1_DISPEL_AURAS_ON_IMMUNITY |
| 4194304 | 0x00400000 | SPELL_ATTR2_UNK22 | Unknown attribute 22@Attr2 |
| 8388608 | 0x00800000 | SPELL_ATTR2_IS_ARCANE_CONCENTRATION | Arcane Concentration |
| 16777216 | 0x01000000 | SPELL_ATTR2_UNK24 | Unknown attribute 24@Attr2 |
| 33554432 | 0x02000000 | SPELL_ATTR2_UNK25 | Unknown attribute 25@Attr2 |
| 67108864 | 0x04000000 | SPELL_ATTR2_UNAFFECTED_BY_AURA_SCHOOL_IMMUNE | Pierce aura application immunities DESCRIPTION Allow aura to be applied despite target being immune to new aura applications |
| 134217728 | 0x08000000 | SPELL_ATTR2_UNK27 | Unknown attribute 27@Attr2 |
| 268435456 | 0x10000000 | SPELL_ATTR2_UNK28 | Unknown attribute 28@Attr2 |
| 536870912 | 0x20000000 | SPELL_ATTR2_CANT_CRIT | Cannot critically strike |
| 1073741824 | 0x40000000 | SPELL_ATTR2_TRIGGERED_CAN_TRIGGER_PROC | Allow triggered spell to trigger (type 1) DESCRIPTION Without this attribute, any triggered spell will be unable to trigger other auras' procs |
| 2147483648 | 0x80000000 | SPELL_ATTR2_FOOD_BUFF | Food buff (client only) |
{.dense}

&nbsp;

### AttributesExC
<code>Col: 7 (uint32)</code>

[`enum SpellAttr3`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L515-L549)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR3_UNK0 | Unknown attribute 0@Attr3 |
| 2 | 0x00000002 | SPELL_ATTR3_IGNORE_PROC_SUBCLASS_MASK | Ignores subclass mask check when checking proc |
| 4 | 0x00000004 | SPELL_ATTR3_UNK2 | Unknown attribute 2@Attr3 |
| 8 | 0x00000008 | SPELL_ATTR3_COMPLETELY_BLOCKED | Completely Blocked |
| 16 | 0x00000010 | SPELL_ATTR3_IGNORE_RESURRECTION_TIMER | Ignore resurrection timer |
| 32 | 0x00000020 | SPELL_ATTR3_UNK5 | Unknown attribute 5@Attr3 |
| 64 | 0x00000040 | SPELL_ATTR3_UNK6 | Unknown attribute 6@Attr3 |
| 128 | 0x00000080 | SPELL_ATTR3_STACK_FOR_DIFF_CASTERS | Stack separately for each caster |
| 256 | 0x00000100 | SPELL_ATTR3_ONLY_TARGET_PLAYERS | Can only target players |
| 512 | 0x00000200 | SPELL_ATTR3_TRIGGERED_CAN_TRIGGER_PROC_2 | Allow triggered spell to trigger (type 2) DESCRIPTION Without this attribute, any triggered spell will be unable to trigger other auras' procs |
| 1024 | 0x00000400 | SPELL_ATTR3_MAIN_HAND | Require main hand weapon |
| 2048 | 0x00000800 | SPELL_ATTR3_BATTLEGROUND | Can only be cast in battleground |
| 4096 | 0x00001000 | SPELL_ATTR3_ONLY_TARGET_GHOSTS | Can only target ghost players |
| 8192 | 0x00002000 | SPELL_ATTR3_DONT_DISPLAY_CHANNEL_BAR | Do not display channel bar (client only) |
| 16384 | 0x00004000 | SPELL_ATTR3_IS_HONORLESS_TARGET | Honorless Target |
| 32768 | 0x00008000 | SPELL_ATTR3_UNK15 | Unknown attribute 15@Attr3 DESCRIPTION Auto Shoot, Shoot, Throw - ranged normal attack attribute? |
| 65536 | 0x00010000 | SPELL_ATTR3_CANT_TRIGGER_PROC | Cannot trigger procs |
| 131072 | 0x00020000 | SPELL_ATTR3_NO_INITIAL_AGGRO | No initial aggro |
| 262144 | 0x00040000 | SPELL_ATTR3_IGNORE_HIT_RESULT | Ignore hit result DESCRIPTION Spell cannot miss, or be dodged/parried/blocked |
| 524288 | 0x00080000 | SPELL_ATTR3_DISABLE_PROC | Cannot trigger spells during aura proc |
| 1048576 | 0x00100000 | SPELL_ATTR3_DEATH_PERSISTENT | Persists through death |
| 2097152 | 0x00200000 | SPELL_ATTR3_UNK21 | Unknown attribute 21@Attr3 |
| 4194304 | 0x00400000 | SPELL_ATTR3_REQ_WAND | Requires equipped Wand |
| 8388608 | 0x00800000 | SPELL_ATTR3_UNK23 | Unknown attribute 23@Attr3 |
| 16777216 | 0x01000000 | SPELL_ATTR3_REQ_OFFHAND | Requires offhand weapon |
| 33554432 | 0x02000000 | SPELL_ATTR3_TREAT_AS_PERIODIC | Treat as periodic effect |
| 67108864 | 0x04000000 | SPELL_ATTR3_CAN_PROC_WITH_TRIGGERED | Can trigger from triggered spells |
| 134217728 | 0x08000000 | SPELL_ATTR3_DRAIN_SOUL | Drain Soul |
| 268435456 | 0x10000000 | SPELL_ATTR3_UNK28 | Unknown attribute 28@Attr3 |
| 536870912 | 0x20000000 | SPELL_ATTR3_NO_DONE_BONUS | Damage dealt is unaffected by modifiers |
| 1073741824 | 0x40000000 | SPELL_ATTR3_DONT_DISPLAY_RANGE | Do not show range in tooltip (client only) |
| 2147483648 | 0x80000000 | SPELL_ATTR3_UNK31 | Unknown attribute 31@Attr3 |
{.dense}

&nbsp;

### AttributesExD
<code>Col: 8 (uint32)</code>

[`enum SpellAttr4`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L551-L586)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR4_IGNORE_RESISTANCES | Cannot be resisted |
| 2 | 0x00000002 | SPELL_ATTR4_PROC_ONLY_ON_CASTER | Only proc on self-cast |
| 4 | 0x00000004 | SPELL_ATTR4_FADES_WHILE_LOGGED_OUT | Buff expires while offline DESCRIPTION Debuffs (except Resurrection Sickness) will automatically do this |
| 8 | 0x00000008 | SPELL_ATTR4_UNK3 | Unknown attribute 3@Attr4 |
| 16 | 0x00000010 | SPELL_ATTR4_UNK4 | Treat as delayed spell |
| 32 | 0x00000020 | SPELL_ATTR4_UNK5 | Unknown attribute 5@Attr4 |
| 64 | 0x00000040 | SPELL_ATTR4_NOT_STEALABLE | Aura cannot be stolen |
| 128 | 0x00000080 | SPELL_ATTR4_CAN_CAST_WHILE_CASTING | Can be cast while casting DESCRIPTION Ignores already in-progress cast and still casts |
| 256 | 0x00000100 | SPELL_ATTR4_FIXED_DAMAGE | Deals fixed damage |
| 512 | 0x00000200 | SPELL_ATTR4_TRIGGER_ACTIVATE | Spell is initially disabled (client only) |
| 1024 | 0x00000400 | SPELL_ATTR4_SPELL_VS_EXTEND_COST | Attack speed modifies cost DESCRIPTION Adds 10 to power cost for each 1s of weapon speed |
| 2048 | 0x00000800 | SPELL_ATTR4_UNK11 | Unknown attribute 11@Attr4 |
| 4096 | 0x00001000 | SPELL_ATTR4_UNK12 | Unknown attribute 12@Attr4 |
| 8192 | 0x00002000 | SPELL_ATTR4_UNK13 | Unknown attribute 13@Attr4 |
| 16384 | 0x00004000 | SPELL_ATTR4_DAMAGE_DOESNT_BREAK_AURAS | Damage does not break auras |
| 32768 | 0x00008000 | SPELL_ATTR4_UNK15 | Unknown attribute 15@Attr4 |
| 65536 | 0x00010000 | SPELL_ATTR4_NOT_USABLE_IN_ARENA | Not usable in arena DESCRIPTION Makes spell unusable despite CD <= 10min |
| 131072 | 0x00020000 | SPELL_ATTR4_USABLE_IN_ARENA | Usable in arena DESCRIPTION Makes spell usable despite CD > 10min |
| 262144 | 0x00040000 | SPELL_ATTR4_AREA_TARGET_CHAIN | Chain area targets DESCRIPTION [NYI] Hits area targets over time instead of all at once |
| 524288 | 0x00080000 | SPELL_ATTR4_UNK19 | Unknown attribute 19@Attr4 |
| 1048576 | 0x00100000 | SPELL_ATTR4_NOT_CHECK_SELFCAST_POWER | Allow self-cast to override stronger aura (client only) |
| 2097152 | 0x00200000 | SPELL_ATTR4_DONT_REMOVE_IN_ARENA | Keep when entering arena |
| 4194304 | 0x00400000 | SPELL_ATTR4_UNK22 | Unknown attribute 22@Attr4 |
| 8388608 | 0x00800000 | SPELL_ATTR4_CANT_TRIGGER_ITEM_SPELLS | Cannot trigger item spells |
| 16777216 | 0x01000000 | SPELL_ATTR4_UNK24 | Unknown attribute 24@Attr4 DESCRIPTION Shoot-type spell? |
| 33554432 | 0x02000000 | SPELL_ATTR4_IS_PET_SCALING | Pet Scaling aura |
| 67108864 | 0x04000000 | SPELL_ATTR4_CAST_ONLY_IN_OUTLAND | Only in Outland/Northrend |
| 134217728 | 0x08000000 | SPELL_ATTR4_INHERIT_CRIT_FROM_AURA | Inherit critical chance from triggering aura |
| 268435456 | 0x10000000 | SPELL_ATTR4_UNK28 | Unknown attribute 28@Attr4 |
| 536870912 | 0x20000000 | SPELL_ATTR4_UNK29 | Unknown attribute 29@Attr4 |
| 1073741824 | 0x40000000 | SPELL_ATTR4_UNK30 | Unknown attribute 30@Attr4 |
| 2147483648 | 0x80000000 | SPELL_ATTR4_UNK31 | Unknown attribute 31@Attr4 |
{.dense}

&nbsp;

### AttributesExE
<code>Col: 9 (uint32)</code>

[`enum SpellAttr5`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L589-L623)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR5_CAN_CHANNEL_WHEN_MOVING | Can be channeled while moving |
| 2 | 0x00000002 | SPELL_ATTR5_NO_REAGENT_WHILE_PREP | No reagents during arena preparation |
| 4 | 0x00000004 | SPELL_ATTR5_REMOVE_ON_ARENA_ENTER | Remove when entering arena DESCRIPTION Force this aura to be removed on entering arena, regardless of other properties |
| 8 | 0x00000008 | SPELL_ATTR5_USABLE_WHILE_STUNNED | Usable while stunned |
| 16 | 0x00000010 | SPELL_ATTR5_UNK4 | Unknown attribute 4@Attr5 |
| 32 | 0x00000020 | SPELL_ATTR5_SINGLE_TARGET_SPELL | Single-target aura DESCRIPTION Remove previous application to another unit if applied |
| 64 | 0x00000040 | SPELL_ATTR5_UNK6 | Unknown attribute 6@Attr5 |
| 128 | 0x00000080 | SPELL_ATTR5_UNK7 | Unknown attribute 7@Attr5 |
| 256 | 0x00000100 | SPELL_ATTR5_CANT_TARGET_PLAYER_CONTROLLED | Cannot target player controlled units but can target players |
| 512 | 0x00000200 | SPELL_ATTR5_START_PERIODIC_AT_APPLY | Immediately do periodic tick on apply |
| 1024 | 0x00000400 | SPELL_ATTR5_HIDE_DURATION | Do not send aura duration to client |
| 2048 | 0x00000800 | SPELL_ATTR5_ALLOW_TARGET_OF_TARGET_AS_TARGET | Auto-target target of target (client only) |
| 4096 | 0x00001000 | SPELL_ATTR5_UNK12 | Unknown attribute 12@Attr5 DESCRIPTION Cleave related? |
| 8192 | 0x00002000 | SPELL_ATTR5_HASTE_AFFECT_DURATION | Duration scales with Haste Rating |
| 16384 | 0x00004000 | SPELL_ATTR5_NOT_USABLE_WHILE_CHARMED | Charmed units cannot cast this spell |
| 32768 | 0x00008000 | SPELL_ATTR5_UNK15 | Unknown attribute 15@Attr5 DESCRIPTION Related to multi-target spells? |
| 65536 | 0x00010000 | SPELL_ATTR5_UNK16 | Unknown attribute 16@Attr5 |
| 131072 | 0x00020000 | SPELL_ATTR5_USABLE_WHILE_FEARED | Usable while feared |
| 262144 | 0x00040000 | SPELL_ATTR5_USABLE_WHILE_CONFUSED | Usable while confused |
| 524288 | 0x00080000 | SPELL_ATTR5_DONT_TURN_DURING_CAST | Do not auto-turn while casting |
| 1048576 | 0x00100000 | SPELL_ATTR5_UNK20 | Unknown attribute 20@Attr5 |
| 2097152 | 0x00200000 | SPELL_ATTR5_UNK21 | Unknown attribute 21@Attr5 |
| 4194304 | 0x00400000 | SPELL_ATTR5_UNK22 | Unknown attribute 22@Attr5 |
| 8388608 | 0x00800000 | SPELL_ATTR5_UNK23 | Unknown attribute 23@Attr5 |
| 16777216 | 0x01000000 | SPELL_ATTR5_UNK24 | Unknown attribute 24@Attr5 |
| 33554432 | 0x02000000 | SPELL_ATTR5_UNK25 | Unknown attribute 25@Attr5 |
| 67108864 | 0x04000000 | SPELL_ATTR5_SKIP_CHECKCAST_LOS_CHECK | Ignore line of sight checks |
| 134217728 | 0x08000000 | SPELL_ATTR5_DONT_SHOW_AURA_IF_SELF_CAST | Don't show aura if self-cast (client only) |
| 268435456 | 0x10000000 | SPELL_ATTR5_DONT_SHOW_AURA_IF_NOT_SELF_CAST | Don't show aura unless self-cast (client only) |
| 536870912 | 0x20000000 | SPELL_ATTR5_UNK29 | Unknown attribute 29@Attr5 |
| 1073741824 | 0x40000000 | SPELL_ATTR5_UNK30 | Unknown attribute 30@Attr5 |
| 2147483648 | 0x80000000 | SPELL_ATTR5_UNK31 | Unknown attribute 31@Attr5 DESCRIPTION Forces nearby enemies to attack caster? |
{.dense}

&nbsp;

### AttributesExF
<code>Col: 10 (uint32)</code>

[`enum SpellAttr6`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L626-L660)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR6_DONT_DISPLAY_COOLDOWN | Don't display cooldown (client only) |
| 2 | 0x00000002 | SPELL_ATTR6_ONLY_IN_ARENA | Only usable in arena |
| 4 | 0x00000004 | SPELL_ATTR6_IGNORE_CASTER_AURAS | Ignore all preventing caster auras |
| 8 | 0x00000008 | SPELL_ATTR6_ASSIST_IGNORE_IMMUNE_FLAG | Ignore immunity flags when assisting |
| 16 | 0x00000010 | SPELL_ATTR6_UNK4 | Unknown attribute 4@Attr6 |
| 32 | 0x00000020 | SPELL_ATTR6_DONT_CONSUME_PROC_CHARGES | Don't consume proc charges |
| 64 | 0x00000040 | SPELL_ATTR6_USE_SPELL_CAST_EVENT | Generate spell_cast event instead of aura_start (client only) |
| 128 | 0x00000080 | SPELL_ATTR6_UNK7 | Unknown attribute 7@Attr6 |
| 256 | 0x00000100 | SPELL_ATTR6_CANT_TARGET_CROWD_CONTROLLED | Do not implicitly target in CC DESCRIPTION Implicit targeting (chaining and area targeting) will not impact crowd controlled targets |
| 512 | 0x00000200 | SPELL_ATTR6_UNK9 | Unknown attribute 9@Attr6 |
| 1024 | 0x00000400 | SPELL_ATTR6_CAN_TARGET_POSSESSED_FRIENDS | Can target possessed friends DESCRIPTION [NYI] |
| 2048 | 0x00000800 | SPELL_ATTR6_NOT_IN_RAID_INSTANCE | Unusable in raid instances |
| 4096 | 0x00001000 | SPELL_ATTR6_CASTABLE_WHILE_ON_VEHICLE | Castable while caster is on vehicle |
| 8192 | 0x00002000 | SPELL_ATTR6_CAN_TARGET_INVISIBLE | Can target invisible units |
| 16384 | 0x00004000 | SPELL_ATTR6_UNK14 | Unknown attribute 14@Attr6 |
| 32768 | 0x00008000 | SPELL_ATTR6_UNK15 | Unknown attribute 15@Attr6 |
| 65536 | 0x00010000 | SPELL_ATTR6_UNK16 | Unknown attribute 16@Attr6 |
| 131072 | 0x00020000 | SPELL_ATTR6_UNK17 | Unknown attribute 17@Attr6 DESCRIPTION Mount related? |
| 262144 | 0x00040000 | SPELL_ATTR6_CAST_BY_CHARMER | Spell is cast by charmer DESCRIPTION Client will prevent casting if not possessed, charmer will be caster for all intents and purposes |
| 524288 | 0x00080000 | SPELL_ATTR6_UNK19 | Unknown attribute 19@Attr6 |
| 1048576 | 0x00100000 | SPELL_ATTR6_ONLY_VISIBLE_TO_CASTER | Only visible to caster (client only) |
| 2097152 | 0x00200000 | SPELL_ATTR6_CLIENT_UI_TARGET_EFFECTS | Client UI target effects (client only) |
| 4194304 | 0x00400000 | SPELL_ATTR6_UNK22 | Unknown attribute 22@Attr6 |
| 8388608 | 0x00800000 | SPELL_ATTR6_UNK23 | Unknown attribute 23@Attr6 |
| 16777216 | 0x01000000 | SPELL_ATTR6_CAN_TARGET_UNTARGETABLE | Can target untargetable units |
| 33554432 | 0x02000000 | SPELL_ATTR6_NOT_RESET_SWING_IF_INSTANT | Do not reset swing timer if cast time is instant |
| 67108864 | 0x04000000 | SPELL_ATTR6_UNK26 | Unknown attribute 26@Attr6 DESCRIPTION Player castable buff? |
| 134217728 | 0x08000000 | SPELL_ATTR6_LIMIT_PCT_HEALING_MODS | Limit applicable %healing modifiers DESCRIPTION This prevents certain healing modifiers from applying - see implementation if you really care about details |
| 268435456 | 0x10000000 | SPELL_ATTR6_UNK28 | Unknown attribute 28@Attr6 DESCRIPTION Death grip? |
| 536870912 | 0x20000000 | SPELL_ATTR6_LIMIT_PCT_DAMAGE_MODS | Limit applicable %damage modifiers DESCRIPTION This prevents certain damage modifiers from applying - see implementation if you really care about details |
| 1073741824 | 0x40000000 | SPELL_ATTR6_UNK30 | Unknown attribute 30@Attr6 |
| 2147483648 | 0x80000000 | SPELL_ATTR6_IGNORE_CATEGORY_COOLDOWN_MODS | Ignore cooldown modifiers for category cooldown |
{.dense}

&nbsp;

### AttributesExG
<code>Col: 11 (uint32)</code>

[`enum SpellAttr7`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L663-L697)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR7_UNK0 | Unknown attribute 0@Attr7 |
| 2 | 0x00000002 | SPELL_ATTR7_IGNORE_DURATION_MODS | Ignore duration modifiers |
| 4 | 0x00000004 | SPELL_ATTR7_REACTIVATE_AT_RESURRECT | Reactivate at resurrect (client only) |
| 8 | 0x00000008 | SPELL_ATTR7_IS_CHEAT_SPELL | Is cheat spell DESCRIPTION Cannot cast if caster doesn't have UnitFlag2 & UNIT_FLAG2_ALLOW_CHEAT_SPELLS |
| 16 | 0x00000010 | SPELL_ATTR7_UNK4 | Unknown attribute 4@Attr7 DESCRIPTION Soulstone related? |
| 32 | 0x00000020 | SPELL_ATTR7_SUMMON_PLAYER_TOTEM | Summons player-owned totem |
| 64 | 0x00000040 | SPELL_ATTR7_NO_PUSHBACK_ON_DAMAGE | Damage dealt by this does not cause spell pushback |
| 128 | 0x00000080 | SPELL_ATTR7_UNK7 | Unknown attribute 7@Attr7 |
| 256 | 0x00000100 | SPELL_ATTR7_HORDE_ONLY | Horde only |
| 512 | 0x00000200 | SPELL_ATTR7_ALLIANCE_ONLY | Alliance only |
| 1024 | 0x00000400 | SPELL_ATTR7_DISPEL_CHARGES | Dispel/Spellsteal remove individual charges |
| 2048 | 0x00000800 | SPELL_ATTR7_INTERRUPT_ONLY_NONPLAYER | Only interrupt non-player casting |
| 4096 | 0x00001000 | SPELL_ATTR7_UNK12 | Unknown attribute 12@Attr7 |
| 8192 | 0x00002000 | SPELL_ATTR7_UNK13 | Unknown attribute 13@Attr7 |
| 16384 | 0x00004000 | SPELL_ATTR7_UNK14 | Unknown attribute 14@Attr7 |
| 32768 | 0x00008000 | SPELL_ATTR7_UNK15 | Unknown attribute 15@Attr7 DESCRIPTION Exorcism - guaranteed crit vs families? |
| 65536 | 0x00010000 | SPELL_ATTR7_CAN_RESTORE_SECONDARY_POWER | Can restore secondary power DESCRIPTION Only spells with this attribute can replenish a non-active power type |
| 131072 | 0x00020000 | SPELL_ATTR7_UNK17 | Unknown attribute 17@Attr7 |
| 262144 | 0x00040000 | SPELL_ATTR7_HAS_CHARGE_EFFECT | Has charge effect |
| 524288 | 0x00080000 | SPELL_ATTR7_ZONE_TELEPORT | Is zone teleport |
| 1048576 | 0x00100000 | SPELL_ATTR7_UNK20 | Unknown attribute 20@Attr7 DESCRIPTION Invulnerability related? |
| 2097152 | 0x00200000 | SPELL_ATTR7_UNK21 | Unknown attribute 21@Attr7 |
| 4194304 | 0x00400000 | SPELL_ATTR7_IGNORE_COLD_WEATHER_FLYING | Ignore cold weather flying restriction DESCRIPTION Set for loaner mounts, allows them to be used despite lacking required flight skill |
| 8388608 | 0x00800000 | SPELL_ATTR7_CANT_DODGE | Spell cannot be dodged |
| 16777216 | 0x01000000 | SPELL_ATTR7_CANT_PARRY | Spell cannot be parried |
| 33554432 | 0x02000000 | SPELL_ATTR7_CANT_MISS | Spell cannot be missed |
| 67108864 | 0x04000000 | SPELL_ATTR7_UNK26 | Unknown attribute 26@Attr7 |
| 134217728 | 0x08000000 | SPELL_ATTR7_BYPASS_NO_RESURRECT_AURA | Bypasses the prevent resurrection aura |
| 268435456 | 0x10000000 | SPELL_ATTR7_CONSOLIDATED_RAID_BUFF | Consolidate in raid buff frame (client only) |
| 536870912 | 0x20000000 | SPELL_ATTR7_UNK29 | Unknown attribute 29@Attr7 |
| 1073741824 | 0x40000000 | SPELL_ATTR7_UNK30 | Unknown attribute 30@Attr7 |
| 2147483648 | 0x80000000 | SPELL_ATTR7_CLIENT_INDICATOR | Client indicator (client only) |
{.dense}

&nbsp;

### ShapeshiftMask
<code>Col: 12 &ndash; 13 (uint32)</code>

| Value | Flag | Name |  | Value | Flag | Name |
|-------|------|------|--|-------|------|------|
| 1 | 0x00000001 | Cat Form |  | 32768 | 0x00008000 | Ghostwolf |
| 2 | 0x00000002 | Tree of Life |  | 65536 | 0x00010000 | Battle Stance |
| 4 | 0x00000004 | Travel Form |  | 131072 | 0x00020000 | Defensive Stance |
| 8 | 0x00000008 | Aquatic Form |  | 262144 | 0x00040000 | Berserker Stance |
| 16 | 0x00000010 | Bear From |  | 524288 | 0x00080000 | Test |
| 32 | 0x00000020 | Ambient |  | 1048576 | 0x00100000 | Zombie |
| 64 | 0x00000040 | Ghoul |  | 2097152 | 0x00200000 | Metamorphosis |
| 128 | 0x00000080 | Dire Bear Form |  | 16777216 | 0x0100000 | Undead |
| 256 | 0x00000100 | Steve's Ghoul |  | 33554432 | 0x02000000 | Frenzy |
| 512 | 0x00000200 | Tharon'ja Skeleton |  | 67108864 | 0x04000000 | Flight Form, Epic |
| 1024 | 0x00000400 | Darkmoon - Test of Strength |  | 134217728 | 0x08000000 | Shadowform |
| 2048 | 0x00000800 | BLB Player |  | 268435456 | 0x10000000 | Flight Form |
| 4096 | 0x00001000 | Shadowdance |  | 536870912 | 0x20000000 | Stealth |
| 8192 | 0x00002000 | Creature - Bear |  | 1073741824 | 0x40000000 | Moonkin Form |
| 16384 | 0x00004000 | Creature - Cat |  | 2147483648 | 0x80000000 | Spirit of Redemption |
{.dense}

&nbsp;

### ShapeshiftExclude
<code>Col: 14 &ndash; 15 (uint32)</code>

*- no description -*
&nbsp;

### Targets
<code>Col: 16 (uint32)</code>


[`enum SpellCastTargetFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L175-L205)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | TARGET_FLAG_UNUSED_1 | not used |
| 2 | 0x00000002 | TARGET_FLAG_UNIT | pguid |
| 4 | 0x00000004 | TARGET_FLAG_UNIT_RAID | not sent, used to validate target (if raid member) |
| 8 | 0x00000008 | TARGET_FLAG_UNIT_PARTY | not sent, used to validate target (if party member) |
| 16 | 0x00000010 | TARGET_FLAG_ITEM | pguid |
| 32 | 0x00000020 | TARGET_FLAG_SOURCE_LOCATION | pguid, 3 float |
| 64 | 0x00000040 | TARGET_FLAG_DEST_LOCATION | pguid, 3 float |
| 128 | 0x00000080 | TARGET_FLAG_UNIT_ENEMY | not sent, used to validate target (if enemy) |
| 256 | 0x00000100 | TARGET_FLAG_UNIT_ALLY | not sent, used to validate target (if ally) |
| 512 | 0x00000200 | TARGET_FLAG_CORPSE_ENEMY | pguid |
| 1024 | 0x00000400 | TARGET_FLAG_UNIT_DEAD | not sent, used to validate target (if dead creature) |
| 2048 | 0x00000800 | TARGET_FLAG_GAMEOBJECT | pguid, used with TARGET_GAMEOBJECT_TARGET |
| 4096 | 0x00001000 | TARGET_FLAG_TRADE_ITEM | pguid |
| 8192 | 0x00002000 | TARGET_FLAG_STRING | string |
| 16384 | 0x00004000 | TARGET_FLAG_GAMEOBJECT_ITEM | not sent, used with TARGET_GAMEOBJECT_ITEM_TARGET |
| 32768 | 0x00008000 | TARGET_FLAG_CORPSE_ALLY | pguid |
| 65536 | 0x00010000 | TARGET_FLAG_UNIT_MINIPET | pguid, used to validate target (if non combat pet) |
| 131072 | 0x00020000 | TARGET_FLAG_GLYPH_SLOT | used in glyph spells |
| 262144 | 0x00040000 | TARGET_FLAG_DEST_TARGET | sometimes appears with DEST_TARGET spells (may appear or not for a given spell) |
| 524288 | 0x00080000 | TARGET_FLAG_UNUSED20 | uint32 counter, loop { vec3 - screen position (?), guid }, not used so far |
| 1048576 | 0x00100000 | TARGET_FLAG_UNIT_PASSENGER | guessed, used to validate target (if vehicle passenger) |
{.dense}

&nbsp;

### TargetCreatureType
<code>Col: 17 (uint32)</code>

| Value | Flag | Name |
|-------|------|------|
| 1 | 0x0001 | Beast |
| 2 | 0x0002 | Dragonkin |
| 4 | 0x0004 | Demon |
| 8 | 0x0008 | Elemental |
| 16 | 0x0010 | Giant |
| 32 | 0x0020 | Undead |
| 64 | 0x0040 | Humanoid |
| 128 | 0x0080 | Critter |
| 256 | 0x0100 | Mechanical |
| 512 | 0x0200 | Not specified |
| 1024 | 0x0400 | Totem |
| 2048 | 0x0800 | Non-combat Pet |
| 4096 | 0x1000 | Gas Cloud |
{.dense}

&nbsp;

### RequiresSpellFocus
<code>Col: 18 (uint32)</code>

Indicates that this spell needs a GO near (e.g. forges).
Required object has the type GAMEOBJECT_TYPE_SPELL_FOCUS (8) and **Data0** matches the **RequiresSpellFocus** value.
&nbsp;

### FacingCasterFlags
<code>Col: 19 (uint32)</code>

[`enum SpellFacingFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L141-L144)
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x1 | SPELL_FACING_FLAG_INFRONT |
{.dense}

&nbsp;

### CasterAuraState
<code>Col: 20 (uint32)</code>

[`enum AuraStateType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1315-L1343)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | AURA_STATE_DEFENSE |  |
| 2 | AURA_STATE_HEALTHLESS_20_PERCENT |  |
| 3 | AURA_STATE_BERSERKING |  |
| 4 | AURA_STATE_FROZEN | frozen target |
| 5 | AURA_STATE_JUDGEMENT |  |
| 6 | AURA_STATE_UNKNOWN6 | not used |
| 7 | AURA_STATE_HUNTER_PARRY | creature cheap shot / focused bursts spells |
| 8 | AURA_STATE_UNKNOWN8 | test spells |
| 9 | AURA_STATE_UNKNOWN9 |  |
| 10 | AURA_STATE_WARRIOR_VICTORY_RUSH | warrior victory rush |
| 11 | AURA_STATE_UNKNOWN11 | 60348 - Maelstrom Ready!, test spells |
| 12 | AURA_STATE_FAERIE_FIRE |  |
| 13 | AURA_STATE_HEALTHLESS_35_PERCENT |  |
| 14 | AURA_STATE_CONFLAGRATE |  |
| 15 | AURA_STATE_SWIFTMEND |  |
| 16 | AURA_STATE_DEADLY_POISON |  |
| 17 | AURA_STATE_ENRAGE |  |
| 18 | AURA_STATE_BLEEDING |  |
| 19 | AURA_STATE_UNKNOWN19 |  |
| 20 | AURA_STATE_UNKNOWN20 | only (45317 Suicide) |
| 21 | AURA_STATE_UNKNOWN21 | not used |
| 22 | AURA_STATE_UNKNOWN22 | varius spells (63884, 50240) |
| 23 | AURA_STATE_HEALTH_ABOVE_75_PERCENT |  |
{.dense}

&nbsp;

### TargetAuraState
<code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

### ExcludeCasterAuraState
<code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

### ExcludeTargetAuraState
<code>Col: 23 (uint32)</code>

*- no description -*
&nbsp;

### CasterAuraSpell
<code>Col: 24 (uint32)</code>

*- no description -*
&nbsp;

### TargetAuraSpell
<code>Col: 25 (uint32)</code>

*- no description -*
&nbsp;

### ExcludeCasterAuraSpell
<code>Col: 26 (uint32)</code>

*- no description -*
&nbsp;

### ExcludeTargetAuraSpell
<code>Col: 27 (uint32)</code>

*- no description -*
&nbsp;

### CastingTimeIndex
<code>Col: 28 (uint32)</code>

*- no description -*
&nbsp;

### RecoveryTime
<code>Col: 29 (uint32)</code>

Cooldown of this spell in msec.
&nbsp;

### CategoryRecoveryTime
<code>Col: 30 (uint32)</code>

Cooldown for all spells this spells **Category** in msec.
&nbsp;

### InterruptFlags
<code>Col: 31 (uint32)</code>

[`enum SpellInterruptFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L43-L51)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | SPELL_INTERRUPT_FLAG_MOVEMENT | why need this for instant? |
| 2 | 0x02 | SPELL_INTERRUPT_FLAG_PUSH_BACK | push back |
| 4 | 0x04 | SPELL_INTERRUPT_FLAG_UNK3 | any info? |
| 8 | 0x08 | SPELL_INTERRUPT_FLAG_INTERRUPT | interrupt |
| 16 | 0x10 | SPELL_INTERRUPT_FLAG_ABORT_ON_DMG | _complete_ interrupt on direct damage |
| 32 | 0x20 | SPELL_INTERRUPT_UNK | unk, 564 of 727 spells having this spell start with "Glyph" |
{.dense}

&nbsp;

### AuraInterruptFlags
<code>Col: 32 (uint32)</code>

[`enum SpellAuraInterruptFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L60-L91)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | AURA_INTERRUPT_FLAG_HITBYSPELL | removed when getting hit by a negative spell? |
| 2 | 0x00000002 | AURA_INTERRUPT_FLAG_TAKE_DAMAGE | removed by any damage |
| 4 | 0x00000004 | AURA_INTERRUPT_FLAG_CAST | cast any spells |
| 8 | 0x00000008 | AURA_INTERRUPT_FLAG_MOVE | removed by any movement |
| 16 | 0x00000010 | AURA_INTERRUPT_FLAG_TURNING | removed by any turning |
| 32 | 0x00000020 | AURA_INTERRUPT_FLAG_JUMP | removed by entering combat |
| 64 | 0x00000040 | AURA_INTERRUPT_FLAG_NOT_MOUNTED | removed by dismounting |
| 128 | 0x00000080 | AURA_INTERRUPT_FLAG_NOT_ABOVEWATER | removed by entering water |
| 256 | 0x00000100 | AURA_INTERRUPT_FLAG_NOT_UNDERWATER | removed by leaving water |
| 512 | 0x00000200 | AURA_INTERRUPT_FLAG_NOT_SHEATHED | removed by unsheathing |
| 1024 | 0x00000400 | AURA_INTERRUPT_FLAG_TALK | talk to npc / interact? |
| 2048 | 0x00000800 | AURA_INTERRUPT_FLAG_LOOTING | mine/use/open action on gameobject / loot |
| 4096 | 0x00001000 | AURA_INTERRUPT_FLAG_MELEE_ATTACK | removed by attacking |
| 8192 | 0x00002000 | AURA_INTERRUPT_FLAG_SPELL_ATTACK | ??? |
| 16384 | 0x00004000 | AURA_INTERRUPT_FLAG_UNK14 |  |
| 32768 | 0x00008000 | AURA_INTERRUPT_FLAG_TRANSFORM | removed by transform? |
| 65536 | 0x00010000 | AURA_INTERRUPT_FLAG_UNK16 |  |
| 131072 | 0x00020000 | AURA_INTERRUPT_FLAG_MOUNT | misdirect, aspect, swim speed |
| 262144 | 0x00040000 | AURA_INTERRUPT_FLAG_NOT_SEATED | removed by standing up (used by food and drink mostly and sleep/Fake Death like) |
| 524288 | 0x00080000 | AURA_INTERRUPT_FLAG_CHANGE_MAP | leaving map/getting teleported |
| 1048576 | 0x00100000 | AURA_INTERRUPT_FLAG_IMMUNE_OR_LOST_SELECTION | removed by auras that make you invulnerable, or make other to lose selection on you |
| 2097152 | 0x00200000 | AURA_INTERRUPT_FLAG_UNK21 |  |
| 4194304 | 0x00400000 | AURA_INTERRUPT_FLAG_TELEPORTED |  |
| 8388608 | 0x00800000 | AURA_INTERRUPT_FLAG_ENTER_PVP_COMBAT | removed by entering pvp combat |
| 16777216 | 0x01000000 | AURA_INTERRUPT_FLAG_DIRECT_DAMAGE | removed by any direct damage |
| 33554432 | 0x02000000 | AURA_INTERRUPT_FLAG_LANDING | removed by hitting the ground |
| 134217728 | 0x80000000 | AURA_INTERRUPT_FLAG_LEAVE_COMBAT | removed by leaving combat |
{.dense}

&nbsp;

### ChannelInterruptFlags
<code>Col: 33 (uint32)</code>

[`enum SpellChannelInterruptFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/SpellDefines.h#L54-L58)
| Value | Flag | Name |
|-------|------|------|
| 8 | 0x0008 | CHANNEL_INTERRUPT_FLAG_INTERRUPT |
| 16384 | 0x4000 | CHANNEL_FLAG_DELAY |
{.dense}

&nbsp;

### ProcTypeMask
<code>Col: 34 (uint32)</code>

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | PROC_FLAG_KILLED | 00 Killed by agressor - not sure about this flag |
| 2 | 0x00000002 | PROC_FLAG_KILL | 01 Kill target (in most cases need XP/Honor reward) |
| 4 | 0x00000004 | PROC_FLAG_DONE_MELEE_AUTO_ATTACK | 02 Done melee auto attack |
| 8 | 0x00000008 | PROC_FLAG_TAKEN_MELEE_AUTO_ATTACK | 03 Taken melee auto attack |
| 16 | 0x00000010 | PROC_FLAG_DONE_SPELL_MELEE_DMG_CLASS | 04 Done attack by Spell that has dmg class melee |
| 32 | 0x00000020 | PROC_FLAG_TAKEN_SPELL_MELEE_DMG_CLASS | 05 Taken attack by Spell that has dmg class melee |
| 64 | 0x00000040 | PROC_FLAG_DONE_RANGED_AUTO_ATTACK | 06 Done ranged auto attack |
| 128 | 0x00000080 | PROC_FLAG_TAKEN_RANGED_AUTO_ATTACK | 07 Taken ranged auto attack |
| 256 | 0x00000100 | PROC_FLAG_DONE_SPELL_RANGED_DMG_CLASS | 08 Done attack by Spell that has dmg class ranged |
| 512 | 0x00000200 | PROC_FLAG_TAKEN_SPELL_RANGED_DMG_CLASS | 09 Taken attack by Spell that has dmg class ranged |
| 1024 | 0x00000400 | PROC_FLAG_DONE_SPELL_NONE_DMG_CLASS_POS | 10 Done positive spell that has dmg class none |
| 2048 | 0x00000800 | PROC_FLAG_TAKEN_SPELL_NONE_DMG_CLASS_POS | 11 Taken positive spell that has dmg class none |
| 4096 | 0x00001000 | PROC_FLAG_DONE_SPELL_NONE_DMG_CLASS_NEG | 12 Done negative spell that has dmg class none |
| 8192 | 0x00002000 | PROC_FLAG_TAKEN_SPELL_NONE_DMG_CLASS_NEG | 13 Taken negative spell that has dmg class none |
| 16384 | 0x00004000 | PROC_FLAG_DONE_SPELL_MAGIC_DMG_CLASS_POS | 14 Done positive spell that has dmg class magic |
| 32768 | 0x00008000 | PROC_FLAG_TAKEN_SPELL_MAGIC_DMG_CLASS_POS | 15 Taken positive spell that has dmg class magic |
| 65536 | 0x00010000 | PROC_FLAG_DONE_SPELL_MAGIC_DMG_CLASS_NEG | 16 Done negative spell that has dmg class magic |
| 131072 | 0x00020000 | PROC_FLAG_TAKEN_SPELL_MAGIC_DMG_CLASS_NEG | 17 Taken negative spell that has dmg class magic |
| 262144 | 0x00040000 | PROC_FLAG_DONE_PERIODIC | 18 Successful do periodic (damage / healing) |
| 524288 | 0x00080000 | PROC_FLAG_TAKEN_PERIODIC | 19 Taken spell periodic (damage / healing) |
| 1048576 | 0x00100000 | PROC_FLAG_TAKEN_DAMAGE | 20 Taken any damage |
| 2097152 | 0x00200000 | PROC_FLAG_DONE_TRAP_ACTIVATION | 21 On trap activation (possibly needs name change to ON_GAMEOBJECT_CAST or USE) |
| 4194304 | 0x00400000 | PROC_FLAG_DONE_MAINHAND_ATTACK | 22 Done main-hand melee attacks (spell and autoattack) |
| 8388608 | 0x00800000 | PROC_FLAG_DONE_OFFHAND_ATTACK | 23 Done off-hand melee attacks (spell and autoattack) |
| 16777216 | 0x01000000 | PROC_FLAG_DEATH | 24 Died in any way |
|  ||||
| 204 | 0x000000CC | AUTO_ATTACK_PROC_FLAG_MASK | Any auto attack |
| 12582972 | 0x00C0003C | MELEE_PROC_FLAG_MASK | Any melee attack |
| 960 | 0x000003C0 | RANGED_PROC_FLAG_MASK | Any ranged attack |
| 3145712 | 0x002FFFF0 | SPELL_PROC_FLAG_MASK | Any spell attack |
| 15029588 | 0x00E55554 | DONE_HIT_PROC_FLAG_MASK | Any dealt attack |
| 1747624 | 0x001AAAA8 | TAKEN_HIT_PROC_FLAG_MASK | Any taken attack |
| 2446672 | 0x00255550 | REQ_SPELL_PHASE_PROC_FLAG_MASK |  |
{.dense}

&nbsp;

### ProcChance
<code>Col: 35 (uint32)</code>

*- no description -*
&nbsp;

### ProcCharges
<code>Col: 36 (uint32)</code>

*- no description -*
&nbsp;

### MaxLevel
<code>Col: 37 (uint32)</code>

Max caster level for spell scaling.
&nbsp;

### BaseLevel
<code>Col: 38 (uint32)</code>

Min caster level for spell scaling.
&nbsp;

### SpellLevel
<code>Col: 39 (uint32)</code>

*- no description -*
&nbsp;

### DurationIndex
<code>Col: 40 (uint32)</code>

*- no description -*
&nbsp;

### PowerType
<code>Col: 41 (int32)</code>

[`enum Powers`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L286-L298)
| ID | Name |
|----|------|
| -2 | POWER_HEALTH |
| 0 | POWER_MANA |
| 1 | POWER_RAGE |
| 2 | POWER_FOCUS |
| 3 | POWER_ENERGY |
| 4 | POWER_HAPPINESS |
| 5 | POWER_RUNE |
| 6 | POWER_RUNIC_POWER |
{.dense}

&nbsp;

### ManaCost
<code>Col: 42 (uint32)</code>

Flat power cost.
&nbsp;

### ManaCostPerLevel
<code>Col: 43 (uint32)</code>

Flat power cost per caster level.
&nbsp;

### ManaPerSecond
<code>Col: 44 (uint32)</code>

Flat power cost per second channeled.
&nbsp;

### ManaPerSecondPerLevel
<code>Col: 45 (uint32)</code>

Flat power cost per second channeled per caster level.
&nbsp;

### RangeIndex
<code>Col: 46 (uint32)</code>

*- no description -*
&nbsp;

### Speed
<code>Col: 47 (float)</code>

*- no description -*
&nbsp;

### ModalNextSpell
:x: <code>Col: 48 (uint32)</code>

*- no description -*
&nbsp;

### CumulativeAura
<code>Col: 49 (uint32)</code>

Aura stacks
&nbsp;

### Totem
<code>Col: 50 &ndash; 51 (uint32)</code>

Items required for spell cast. (not consumed)
&nbsp;

### Reagent
<code>Col: 52 &ndash; 59 (int32)</code>

Items required for spell cast. (consumed)
&nbsp;

### ReagentCount
<code>Col: 60 &ndash; 67 (uint32)</code>

*- no description -*
&nbsp;

### EquippedItemClass
<code>Col: 68 (int32)</code>

*- no description -*
&nbsp;

### EquippedItemSubclass
<code>Col: 69 (int32)</code>

as SubClassMask
&nbsp;

### EquippedItemInvTypes
<code>Col: 70 (int32)</code>

[`enum InventoryType`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L259-L290)
| Value | Flag | Name |  | Value | Flag | Name |
|-------|------|------|--|-------|------|------|
| 1 | 0x00000001 | INVTYPE_HEAD | | 16384 | 0x00004000 | INVTYPE_RANGED |
| 2 | 0x00000002 | INVTYPE_NECK | | 32768 | 0x00008000 | INVTYPE_CLOAK |
| 4 | 0x00000004 | INVTYPE_SHOULDERS | | 65536 | 0x00010000 | INVTYPE_2HWEAPON |
| 8 | 0x00000008 | INVTYPE_BODY | | 131072 | 0x00020000 | INVTYPE_BAG |
| 16 | 0x00000010 | INVTYPE_CHEST | | 262144 | 0x00040000 | INVTYPE_TABARD |
| 32 | 0x00000020 | INVTYPE_WAIST | | 524288 | 0x00080000 | INVTYPE_ROBE |
| 64 | 0x00000040 | INVTYPE_LEGS | | 1048576 | 0x00100000 | INVTYPE_WEAPONMAINHAND |
| 128 | 0x00000080 | INVTYPE_FEET | | 2097152 | 0x00200000 | INVTYPE_WEAPONOFFHAND |
| 256 | 0x00000100 | INVTYPE_WRISTS | | 4194304 | 0x00400000 | INVTYPE_HOLDABLE |
| 512 | 0x00000200 | INVTYPE_HANDS | | 8388608 | 0x00800000 | INVTYPE_AMMO |
| 1024 | 0x00000400 | INVTYPE_FINGER | | 16777216 | 0x01000000 | INVTYPE_THROWN |
| 2048 | 0x00000800 | INVTYPE_TRINKET | | 33554432 | 0x02000000 | INVTYPE_RANGEDRIGHT |
| 4096 | 0x00001000 | INVTYPE_WEAPON | | 67108864 | 0x04000000 | INVTYPE_QUIVER |
| 8192 | 0x00002000 | INVTYPE_SHIELD | | 134217728 | 0x08000000 | INVTYPE_RELIC |
{.dense}

&nbsp;

### Effect
<code>Col: 71 &ndash; 73 (uint32)</code>

[`enum SpellEffects`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L804-L972)
| ID | Name |  | ID | Name |  | ID | Name |
|----|------|--|----|------|--|----|------|
| 1 | SPELL_EFFECT_INSTAKILL |  | 56 | SPELL_EFFECT_SUMMON_PET |  | 111 | SPELL_EFFECT_DURABILITY_DAMAGE |
| 2 | SPELL_EFFECT_SCHOOL_DAMAGE |  | 57 | SPELL_EFFECT_LEARN_PET_SPELL |  | 112 | SPELL_EFFECT_112 |
| 3 | SPELL_EFFECT_DUMMY |  | 58 | SPELL_EFFECT_WEAPON_DAMAGE |  | 113 | SPELL_EFFECT_RESURRECT_NEW |
| 4 | SPELL_EFFECT_PORTAL_TELEPORT |  | 59 | SPELL_EFFECT_CREATE_RANDOM_ITEM |  | 114 | SPELL_EFFECT_ATTACK_ME |
| 5 | SPELL_EFFECT_TELEPORT_UNITS |  | 60 | SPELL_EFFECT_PROFICIENCY |  | 115 | SPELL_EFFECT_DURABILITY_DAMAGE_PCT |
| 6 | SPELL_EFFECT_APPLY_AURA |  | 61 | SPELL_EFFECT_SEND_EVENT |  | 116 | SPELL_EFFECT_SKIN_PLAYER_CORPSE |
| 7 | SPELL_EFFECT_ENVIRONMENTAL_DAMAGE |  | 62 | SPELL_EFFECT_POWER_BURN |  | 117 | SPELL_EFFECT_SPIRIT_HEAL |
| 8 | SPELL_EFFECT_POWER_DRAIN |  | 63 | SPELL_EFFECT_THREAT |  | 118 | SPELL_EFFECT_SKILL |
| 9 | SPELL_EFFECT_HEALTH_LEECH |  | 64 | SPELL_EFFECT_TRIGGER_SPELL |  | 119 | SPELL_EFFECT_APPLY_AREA_AURA_PET |
| 10 | SPELL_EFFECT_HEAL |  | 65 | SPELL_EFFECT_APPLY_AREA_AURA_RAID |  | 120 | SPELL_EFFECT_TELEPORT_GRAVEYARD |
| 11 | SPELL_EFFECT_BIND |  | 66 | SPELL_EFFECT_CREATE_MANA_GEM |  | 121 | SPELL_EFFECT_NORMALIZED_WEAPON_DMG |
| 12 | SPELL_EFFECT_PORTAL |  | 67 | SPELL_EFFECT_HEAL_MAX_HEALTH |  | 122 | SPELL_EFFECT_122 |
| 13 | SPELL_EFFECT_RITUAL_BASE |  | 68 | SPELL_EFFECT_INTERRUPT_CAST |  | 123 | SPELL_EFFECT_SEND_TAXI |
| 14 | SPELL_EFFECT_RITUAL_SPECIALIZE |  | 69 | SPELL_EFFECT_DISTRACT |  | 124 | SPELL_EFFECT_PULL_TOWARDS |
| 15 | SPELL_EFFECT_RITUAL_ACTIVATE_PORTAL |  | 70 | SPELL_EFFECT_PULL |  | 125 | SPELL_EFFECT_MODIFY_THREAT_PERCENT |
| 16 | SPELL_EFFECT_QUEST_COMPLETE |  | 71 | SPELL_EFFECT_PICKPOCKET |  | 126 | SPELL_EFFECT_STEAL_BENEFICIAL_BUFF |
| 17 | SPELL_EFFECT_WEAPON_DAMAGE_NOSCHOOL |  | 72 | SPELL_EFFECT_ADD_FARSIGHT |  | 127 | SPELL_EFFECT_PROSPECTING |
| 18 | SPELL_EFFECT_RESURRECT |  | 73 | SPELL_EFFECT_UNTRAIN_TALENTS |  | 128 | SPELL_EFFECT_APPLY_AREA_AURA_FRIEND |
| 19 | SPELL_EFFECT_ADD_EXTRA_ATTACKS |  | 74 | SPELL_EFFECT_APPLY_GLYPH |  | 129 | SPELL_EFFECT_APPLY_AREA_AURA_ENEMY |
| 20 | SPELL_EFFECT_DODGE |  | 75 | SPELL_EFFECT_HEAL_MECHANICAL |  | 130 | SPELL_EFFECT_REDIRECT_THREAT |
| 21 | SPELL_EFFECT_EVADE |  | 76 | SPELL_EFFECT_SUMMON_OBJECT_WILD |  | 131 | SPELL_EFFECT_PLAY_SOUND |
| 22 | SPELL_EFFECT_PARRY |  | 77 | SPELL_EFFECT_SCRIPT_EFFECT |  | 132 | SPELL_EFFECT_PLAY_MUSIC |
| 23 | SPELL_EFFECT_BLOCK |  | 78 | SPELL_EFFECT_ATTACK |  | 133 | SPELL_EFFECT_UNLEARN_SPECIALIZATION |
| 24 | SPELL_EFFECT_CREATE_ITEM |  | 79 | SPELL_EFFECT_SANCTUARY |  | 134 | SPELL_EFFECT_KILL_CREDIT |
| 25 | SPELL_EFFECT_WEAPON |  | 80 | SPELL_EFFECT_ADD_COMBO_POINTS |  | 135 | SPELL_EFFECT_CALL_PET |
| 26 | SPELL_EFFECT_DEFENSE |  | 81 | SPELL_EFFECT_CREATE_HOUSE |  | 136 | SPELL_EFFECT_HEAL_PCT |
| 27 | SPELL_EFFECT_PERSISTENT_AREA_AURA |  | 82 | SPELL_EFFECT_BIND_SIGHT |  | 137 | SPELL_EFFECT_ENERGIZE_PCT |
| 28 | SPELL_EFFECT_SUMMON |  | 83 | SPELL_EFFECT_DUEL |  | 138 | SPELL_EFFECT_LEAP_BACK |
| 29 | SPELL_EFFECT_LEAP |  | 84 | SPELL_EFFECT_STUCK |  | 139 | SPELL_EFFECT_CLEAR_QUEST |
| 30 | SPELL_EFFECT_ENERGIZE |  | 85 | SPELL_EFFECT_SUMMON_PLAYER |  | 140 | SPELL_EFFECT_FORCE_CAST |
| 31 | SPELL_EFFECT_WEAPON_PERCENT_DAMAGE |  | 86 | SPELL_EFFECT_ACTIVATE_OBJECT |  | 141 | SPELL_EFFECT_FORCE_CAST_WITH_VALUE |
| 32 | SPELL_EFFECT_TRIGGER_MISSILE |  | 87 | SPELL_EFFECT_GAMEOBJECT_DAMAGE |  | 142 | SPELL_EFFECT_TRIGGER_SPELL_WITH_VALUE |
| 33 | SPELL_EFFECT_OPEN_LOCK |  | 88 | SPELL_EFFECT_GAMEOBJECT_REPAIR |  | 143 | SPELL_EFFECT_APPLY_AREA_AURA_OWNER |
| 34 | SPELL_EFFECT_SUMMON_CHANGE_ITEM |  | 89 | SPELL_EFFECT_GAMEOBJECT_SET_DESTRUCTION_STATE |  | 144 | SPELL_EFFECT_KNOCK_BACK_DEST |
| 35 | SPELL_EFFECT_APPLY_AREA_AURA_PARTY |  | 90 | SPELL_EFFECT_KILL_CREDIT |  | 145 | SPELL_EFFECT_PULL_TOWARDS_DEST |
| 36 | SPELL_EFFECT_LEARN_SPELL |  | 91 | SPELL_EFFECT_THREAT_ALL |  | 146 | SPELL_EFFECT_ACTIVATE_RUNE |
| 37 | SPELL_EFFECT_SPELL_DEFENSE |  | 92 | SPELL_EFFECT_ENCHANT_HELD_ITEM |  | 147 | SPELL_EFFECT_QUEST_FAIL |
| 38 | SPELL_EFFECT_DISPEL |  | 93 | SPELL_EFFECT_FORCE_DESELECT |  | 148 | SPELL_EFFECT_TRIGGER_MISSILE_SPELL_WITH_VALUE |
| 39 | SPELL_EFFECT_LANGUAGE |  | 94 | SPELL_EFFECT_SELF_RESURRECT |  | 149 | SPELL_EFFECT_CHARGE_DEST |
| 40 | SPELL_EFFECT_DUAL_WIELD |  | 95 | SPELL_EFFECT_SKINNING |  | 150 | SPELL_EFFECT_QUEST_START |
| 41 | SPELL_EFFECT_JUMP |  | 96 | SPELL_EFFECT_CHARGE |  | 151 | SPELL_EFFECT_TRIGGER_SPELL_2 |
| 42 | SPELL_EFFECT_JUMP_DEST |  | 97 | SPELL_EFFECT_CAST_BUTTON |  | 152 | SPELL_EFFECT_SUMMON_RAF_FRIEND |
| 43 | SPELL_EFFECT_TELEPORT_UNITS_FACE_CASTER |  | 98 | SPELL_EFFECT_KNOCK_BACK |  | 153 | SPELL_EFFECT_CREATE_TAMED_PET |
| 44 | SPELL_EFFECT_SKILL_STEP |  | 99 | SPELL_EFFECT_DISENCHANT |  | 154 | SPELL_EFFECT_DISCOVER_TAXI |
| 45 | SPELL_EFFECT_ADD_HONOR |  | 100 | SPELL_EFFECT_INEBRIATE |  | 155 | SPELL_EFFECT_TITAN_GRIP |
| 46 | SPELL_EFFECT_SPAWN |  | 101 | SPELL_EFFECT_FEED_PET |  | 156 | SPELL_EFFECT_ENCHANT_ITEM_PRISMATIC |
| 47 | SPELL_EFFECT_TRADE_SKILL |  | 102 | SPELL_EFFECT_DISMISS_PET |  | 157 | SPELL_EFFECT_CREATE_ITEM_2 |
| 48 | SPELL_EFFECT_STEALTH |  | 103 | SPELL_EFFECT_REPUTATION |  | 158 | SPELL_EFFECT_MILLING |
| 49 | SPELL_EFFECT_DETECT |  | 104 | SPELL_EFFECT_SUMMON_OBJECT_SLOT1 |  | 159 | SPELL_EFFECT_ALLOW_RENAME_PET |
| 50 | SPELL_EFFECT_TRANS_DOOR |  | 105 | SPELL_EFFECT_SUMMON_OBJECT_SLOT2 |  | 160 | SPELL_EFFECT_FORCE_CAST_2 |
| 51 | SPELL_EFFECT_FORCE_CRITICAL_HIT |  | 106 | SPELL_EFFECT_SUMMON_OBJECT_SLOT3 |  | 161 | SPELL_EFFECT_TALENT_SPEC_COUNT |
| 52 | SPELL_EFFECT_GUARANTEE_HIT |  | 107 | SPELL_EFFECT_SUMMON_OBJECT_SLOT4 |  | 162 | SPELL_EFFECT_TALENT_SPEC_SELECT |
| 53 | SPELL_EFFECT_ENCHANT_ITEM |  | 108 | SPELL_EFFECT_DISPEL_MECHANIC |  | 163 | SPELL_EFFECT_163 |
| 54 | SPELL_EFFECT_ENCHANT_ITEM_TEMPORARY |  | 109 | SPELL_EFFECT_RESURRECT_PET |  | 164 | SPELL_EFFECT_REMOVE_AURA |
| 55 | SPELL_EFFECT_TAMECREATURE |  | 110 | SPELL_EFFECT_DESTROY_ALL_TOTEMS |  |  |  |
{.dense}

&nbsp;

### EffectDieSides
<code>Col: 74 &ndash; 76 (int32)</code>

Random effect amount.
&nbsp;

### EffectRealPointsPerLevel
<code>Col: 77 &ndash; 79 (float)</code>

Fixed effect amount per caster level.
&nbsp;

### EffectBasePoints
<code>Col: 80 &ndash; 82 (int32)</code>

Fixed effect amount.
&nbsp;

### EffectMechanic
<code>Col: 83 &ndash; 85 (uint32)</code>

see **Mechanic**
&nbsp;

### EffectImplicitTargetA
<code>Col: 86 &ndash; 88 (uint32)</code>

[`enum Targets`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1434-L1541)
| ID | Name |  | ID | Name |  | ID | Name |
|----|------|--|----|------|--|----|------|
| 1 | TARGET_UNIT_CASTER |  | 41 | TARGET_DEST_CASTER_FRONT_RIGHT |  | 76 | TARGET_DEST_CHANNEL_TARGET |
| 2 | TARGET_UNIT_NEARBY_ENEMY |  | 42 | TARGET_DEST_CASTER_BACK_RIGHT |  | 77 | TARGET_UNIT_CHANNEL_TARGET |
| 3 | TARGET_UNIT_NEARBY_ALLY |  | 43 | TARGET_DEST_CASTER_BACK_LEFT |  | 78 | TARGET_DEST_DEST_FRONT |
| 4 | TARGET_UNIT_NEARBY_PARTY |  | 44 | TARGET_DEST_CASTER_FRONT_LEFT |  | 79 | TARGET_DEST_DEST_BACK |
| 5 | TARGET_UNIT_PET |  | 45 | TARGET_UNIT_TARGET_CHAINHEAL_ALLY |  | 80 | TARGET_DEST_DEST_RIGHT |
| 6 | TARGET_UNIT_TARGET_ENEMY |  | 46 | TARGET_DEST_NEARBY_ENTRY |  | 81 | TARGET_DEST_DEST_LEFT |
| 7 | TARGET_UNIT_SRC_AREA_ENTRY |  | 47 | TARGET_DEST_CASTER_FRONT |  | 82 | TARGET_DEST_DEST_FRONT_RIGHT |
| 8 | TARGET_UNIT_DEST_AREA_ENTRY |  | 48 | TARGET_DEST_CASTER_BACK |  | 83 | TARGET_DEST_DEST_BACK_RIGHT |
| 9 | TARGET_DEST_HOME |  | 49 | TARGET_DEST_CASTER_RIGHT |  | 84 | TARGET_DEST_DEST_BACK_LEFT |
| 11 | TARGET_UNIT_SRC_AREA_UNK_11 |  | 50 | TARGET_DEST_CASTER_LEFT |  | 85 | TARGET_DEST_DEST_FRONT_LEFT |
| 15 | TARGET_UNIT_SRC_AREA_ENEMY |  | 51 | TARGET_GAMEOBJECT_SRC_AREA |  | 86 | TARGET_DEST_DEST_RANDOM |
| 16 | TARGET_UNIT_DEST_AREA_ENEMY |  | 52 | TARGET_GAMEOBJECT_DEST_AREA |  | 87 | TARGET_DEST_DEST |
| 17 | TARGET_DEST_DB |  | 53 | TARGET_DEST_TARGET_ENEMY |  | 88 | TARGET_DEST_DYNOBJ_NONE |
| 18 | TARGET_DEST_CASTER |  | 54 | TARGET_UNIT_CONE_ENEMY_54 |  | 89 | TARGET_DEST_TRAJ |
| 20 | TARGET_UNIT_CASTER_AREA_PARTY |  | 55 | TARGET_DEST_CASTER_FRONT_LEAP |  | 90 | TARGET_UNIT_TARGET_MINIPET |
| 21 | TARGET_UNIT_TARGET_ALLY |  | 56 | TARGET_UNIT_CASTER_AREA_RAID |  | 91 | TARGET_DEST_DEST_RADIUS |
| 22 | TARGET_SRC_CASTER |  | 57 | TARGET_UNIT_TARGET_RAID |  | 92 | TARGET_UNIT_SUMMONER |
| 23 | TARGET_GAMEOBJECT_TARGET |  | 58 | TARGET_UNIT_NEARBY_RAID |  | 93 | TARGET_CORPSE_SRC_AREA_ENEMY |
| 24 | TARGET_UNIT_CONE_ENEMY_24 |  | 59 | TARGET_UNIT_CONE_ALLY |  | 94 | TARGET_UNIT_VEHICLE |
| 25 | TARGET_UNIT_TARGET_ANY |  | 60 | TARGET_UNIT_CONE_ENTRY |  | 95 | TARGET_UNIT_TARGET_PASSENGER |
| 26 | TARGET_GAMEOBJECT_ITEM_TARGET |  | 61 | TARGET_UNIT_TARGET_AREA_RAID_CLASS |  | 96 | TARGET_UNIT_PASSENGER_0 |
| 27 | TARGET_UNIT_MASTER |  | 62 | TARGET_UNK_62 |  | 97 | TARGET_UNIT_PASSENGER_1 |
| 28 | TARGET_DEST_DYNOBJ_ENEMY |  | 63 | TARGET_DEST_TARGET_ANY |  | 98 | TARGET_UNIT_PASSENGER_2 |
| 29 | TARGET_DEST_DYNOBJ_ALLY |  | 64 | TARGET_DEST_TARGET_FRONT |  | 99 | TARGET_UNIT_PASSENGER_3 |
| 30 | TARGET_UNIT_SRC_AREA_ALLY |  | 65 | TARGET_DEST_TARGET_BACK |  | 100 | TARGET_UNIT_PASSENGER_4 |
| 31 | TARGET_UNIT_DEST_AREA_ALLY |  | 66 | TARGET_DEST_TARGET_RIGHT |  | 101 | TARGET_UNIT_PASSENGER_5 |
| 32 | TARGET_DEST_CASTER_SUMMON |  | 67 | TARGET_DEST_TARGET_LEFT |  | 102 | TARGET_UNIT_PASSENGER_6 |
| 33 | TARGET_UNIT_SRC_AREA_PARTY |  | 68 | TARGET_DEST_TARGET_FRONT_RIGHT |  | 103 | TARGET_UNIT_PASSENGER_7 |
| 34 | TARGET_UNIT_DEST_AREA_PARTY |  | 69 | TARGET_DEST_TARGET_BACK_RIGHT |  | 104 | TARGET_UNIT_CONE_ENEMY_104 |
| 35 | TARGET_UNIT_TARGET_PARTY |  | 70 | TARGET_DEST_TARGET_BACK_LEFT |  | 105 | TARGET_UNIT_UNK_105 |
| 36 | TARGET_DEST_CASTER_UNK_36 |  | 71 | TARGET_DEST_TARGET_FRONT_LEFT |  | 106 | TARGET_DEST_CHANNEL_CASTER |
| 37 | TARGET_UNIT_LASTTARGET_AREA_PARTY |  | 72 | TARGET_DEST_CASTER_RANDOM |  | 107 | TARGET_UNK_DEST_AREA_UNK_107 |
| 38 | TARGET_UNIT_NEARBY_ENTRY |  | 73 | TARGET_DEST_CASTER_RADIUS |  | 108 | TARGET_GAMEOBJECT_CONE |
| 39 | TARGET_DEST_CASTER_FISHING |  | 74 | TARGET_DEST_TARGET_RANDOM |  | 110 | TARGET_UNIT_CONE_ENTRY_110 |
| 40 | TARGET_GAMEOBJECT_NEARBY_ENTRY |  | 75 | TARGET_DEST_TARGET_RADIUS |  |  |  |
{.dense}
&nbsp;

### EffectImplicitTargetB
<code>Col: 89 &ndash; 91 (uint32)</code>

see **EffectImplicitTargetA**
&nbsp;

### EffectRadiusIndex
<code>Col: 92 &ndash; 94 (uint32)</code>

*- no description -*
&nbsp;

### EffectAura
<code>Col: 95 &ndash; 97 (uint32)</code>

[`enum AuraType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Spells/Auras/SpellAuraDefines.h#L78-L398)
| ID | Name |  | ID | Name |  | ID | Name |
|----|------|--|----|------|--|----|------|
| 1 | SPELL_AURA_BIND_SIGHT |  | 107 | SPELL_AURA_ADD_FLAT_MODIFIER |  | 213 | SPELL_AURA_MOD_RAGE_FROM_DAMAGE_DEALT |
| 2 | SPELL_AURA_MOD_POSSESS |  | 108 | SPELL_AURA_ADD_PCT_MODIFIER |  | 214 | SPELL_AURA_214 |
| 3 | SPELL_AURA_PERIODIC_DAMAGE |  | 109 | SPELL_AURA_ADD_TARGET_TRIGGER |  | 215 | SPELL_AURA_ARENA_PREPARATION |
| 4 | SPELL_AURA_DUMMY |  | 110 | SPELL_AURA_MOD_POWER_REGEN_PERCENT |  | 216 | SPELL_AURA_HASTE_SPELLS |
| 5 | SPELL_AURA_MOD_CONFUSE |  | 111 | SPELL_AURA_ADD_CASTER_HIT_TRIGGER |  | 217 | SPELL_AURA_MOD_MELEE_HASTE_2 |
| 6 | SPELL_AURA_MOD_CHARM |  | 112 | SPELL_AURA_OVERRIDE_CLASS_SCRIPTS |  | 218 | SPELL_AURA_HASTE_RANGED |
| 7 | SPELL_AURA_MOD_FEAR |  | 113 | SPELL_AURA_MOD_RANGED_DAMAGE_TAKEN |  | 219 | SPELL_AURA_MOD_MANA_REGEN_FROM_STAT |
| 8 | SPELL_AURA_PERIODIC_HEAL |  | 114 | SPELL_AURA_MOD_RANGED_DAMAGE_TAKEN_PCT |  | 220 | SPELL_AURA_MOD_RATING_FROM_STAT |
| 9 | SPELL_AURA_MOD_ATTACKSPEED |  | 115 | SPELL_AURA_MOD_HEALING |  | 221 | SPELL_AURA_MOD_DETAUNT |
| 10 | SPELL_AURA_MOD_THREAT |  | 116 | SPELL_AURA_MOD_REGEN_DURING_COMBAT |  | 222 | SPELL_AURA_222 |
| 11 | SPELL_AURA_MOD_TAUNT |  | 117 | SPELL_AURA_MOD_MECHANIC_RESISTANCE |  | 223 | SPELL_AURA_RAID_PROC_FROM_CHARGE |
| 12 | SPELL_AURA_MOD_STUN |  | 118 | SPELL_AURA_MOD_HEALING_PCT |  | 224 | SPELL_AURA_224 |
| 13 | SPELL_AURA_MOD_DAMAGE_DONE |  | 119 | SPELL_AURA_119 |  | 225 | SPELL_AURA_RAID_PROC_FROM_CHARGE_WITH_VALUE |
| 14 | SPELL_AURA_MOD_DAMAGE_TAKEN |  | 120 | SPELL_AURA_UNTRACKABLE |  | 226 | SPELL_AURA_PERIODIC_DUMMY |
| 15 | SPELL_AURA_DAMAGE_SHIELD |  | 121 | SPELL_AURA_EMPATHY |  | 227 | SPELL_AURA_PERIODIC_TRIGGER_SPELL_WITH_VALUE |
| 16 | SPELL_AURA_MOD_STEALTH |  | 122 | SPELL_AURA_MOD_OFFHAND_DAMAGE_PCT |  | 228 | SPELL_AURA_DETECT_STEALTH |
| 17 | SPELL_AURA_MOD_STEALTH_DETECT |  | 123 | SPELL_AURA_MOD_TARGET_RESISTANCE |  | 229 | SPELL_AURA_MOD_AOE_DAMAGE_AVOIDANCE |
| 18 | SPELL_AURA_MOD_INVISIBILITY |  | 124 | SPELL_AURA_MOD_RANGED_ATTACK_POWER |  | 230 | SPELL_AURA_230 |
| 19 | SPELL_AURA_MOD_INVISIBILITY_DETECT |  | 125 | SPELL_AURA_MOD_MELEE_DAMAGE_TAKEN |  | 231 | SPELL_AURA_PROC_TRIGGER_SPELL_WITH_VALUE |
| 20 | SPELL_AURA_OBS_MOD_HEALTH |  | 126 | SPELL_AURA_MOD_MELEE_DAMAGE_TAKEN_PCT |  | 232 | SPELL_AURA_MECHANIC_DURATION_MOD |
| 21 | SPELL_AURA_OBS_MOD_POWER |  | 127 | SPELL_AURA_RANGED_ATTACK_POWER_ATTACKER_BONUS |  | 233 | SPELL_AURA_CHANGE_MODEL_FOR_ALL_HUMANOIDS |
| 22 | SPELL_AURA_MOD_RESISTANCE |  | 128 | SPELL_AURA_MOD_POSSESS_PET |  | 234 | SPELL_AURA_MECHANIC_DURATION_MOD_NOT_STACK |
| 23 | SPELL_AURA_PERIODIC_TRIGGER_SPELL |  | 129 | SPELL_AURA_MOD_SPEED_ALWAYS |  | 235 | SPELL_AURA_MOD_DISPEL_RESIST |
| 24 | SPELL_AURA_PERIODIC_ENERGIZE |  | 130 | SPELL_AURA_MOD_MOUNTED_SPEED_ALWAYS |  | 236 | SPELL_AURA_CONTROL_VEHICLE |
| 25 | SPELL_AURA_MOD_PACIFY |  | 131 | SPELL_AURA_MOD_RANGED_ATTACK_POWER_VERSUS |  | 237 | SPELL_AURA_MOD_SPELL_DAMAGE_OF_ATTACK_POWER |
| 26 | SPELL_AURA_MOD_ROOT |  | 132 | SPELL_AURA_MOD_INCREASE_ENERGY_PERCENT |  | 238 | SPELL_AURA_MOD_SPELL_HEALING_OF_ATTACK_POWER |
| 27 | SPELL_AURA_MOD_SILENCE |  | 133 | SPELL_AURA_MOD_INCREASE_HEALTH_PERCENT |  | 239 | SPELL_AURA_MOD_SCALE_2 |
| 28 | SPELL_AURA_REFLECT_SPELLS |  | 134 | SPELL_AURA_MOD_MANA_REGEN_INTERRUPT |  | 240 | SPELL_AURA_MOD_EXPERTISE |
| 29 | SPELL_AURA_MOD_STAT |  | 135 | SPELL_AURA_MOD_HEALING_DONE |  | 241 | SPELL_AURA_FORCE_MOVE_FORWARD |
| 30 | SPELL_AURA_MOD_SKILL |  | 136 | SPELL_AURA_MOD_HEALING_DONE_PERCENT |  | 242 | SPELL_AURA_MOD_SPELL_DAMAGE_FROM_HEALING |
| 31 | SPELL_AURA_MOD_INCREASE_SPEED |  | 137 | SPELL_AURA_MOD_TOTAL_STAT_PERCENTAGE |  | 243 | SPELL_AURA_MOD_FACTION |
| 32 | SPELL_AURA_MOD_INCREASE_MOUNTED_SPEED |  | 138 | SPELL_AURA_MOD_MELEE_HASTE |  | 244 | SPELL_AURA_COMPREHEND_LANGUAGE |
| 33 | SPELL_AURA_MOD_DECREASE_SPEED |  | 139 | SPELL_AURA_FORCE_REACTION |  | 245 | SPELL_AURA_MOD_AURA_DURATION_BY_DISPEL |
| 34 | SPELL_AURA_MOD_INCREASE_HEALTH |  | 140 | SPELL_AURA_MOD_RANGED_HASTE |  | 246 | SPELL_AURA_MOD_AURA_DURATION_BY_DISPEL_NOT_STACK |
| 35 | SPELL_AURA_MOD_INCREASE_ENERGY |  | 141 | SPELL_AURA_MOD_RANGED_AMMO_HASTE |  | 247 | SPELL_AURA_CLONE_CASTER |
| 36 | SPELL_AURA_MOD_SHAPESHIFT |  | 142 | SPELL_AURA_MOD_BASE_RESISTANCE_PCT |  | 248 | SPELL_AURA_MOD_COMBAT_RESULT_CHANCE |
| 37 | SPELL_AURA_EFFECT_IMMUNITY |  | 143 | SPELL_AURA_MOD_RESISTANCE_EXCLUSIVE |  | 249 | SPELL_AURA_CONVERT_RUNE |
| 38 | SPELL_AURA_STATE_IMMUNITY |  | 144 | SPELL_AURA_SAFE_FALL |  | 250 | SPELL_AURA_MOD_INCREASE_HEALTH_2 |
| 39 | SPELL_AURA_SCHOOL_IMMUNITY |  | 145 | SPELL_AURA_MOD_PET_TALENT_POINTS |  | 251 | SPELL_AURA_MOD_ENEMY_DODGE |
| 40 | SPELL_AURA_DAMAGE_IMMUNITY |  | 146 | SPELL_AURA_ALLOW_TAME_PET_TYPE |  | 252 | SPELL_AURA_MOD_SPEED_SLOW_ALL |
| 41 | SPELL_AURA_DISPEL_IMMUNITY |  | 147 | SPELL_AURA_MECHANIC_IMMUNITY_MASK |  | 253 | SPELL_AURA_MOD_BLOCK_CRIT_CHANCE |
| 42 | SPELL_AURA_PROC_TRIGGER_SPELL |  | 148 | SPELL_AURA_RETAIN_COMBO_POINTS |  | 254 | SPELL_AURA_MOD_DISARM_OFFHAND |
| 43 | SPELL_AURA_PROC_TRIGGER_DAMAGE |  | 149 | SPELL_AURA_REDUCE_PUSHBACK |  | 255 | SPELL_AURA_MOD_MECHANIC_DAMAGE_TAKEN_PERCENT |
| 44 | SPELL_AURA_TRACK_CREATURES |  | 150 | SPELL_AURA_MOD_SHIELD_BLOCKVALUE_PCT |  | 256 | SPELL_AURA_NO_REAGENT_USE |
| 45 | SPELL_AURA_TRACK_RESOURCES |  | 151 | SPELL_AURA_TRACK_STEALTHED |  | 257 | SPELL_AURA_MOD_TARGET_RESIST_BY_SPELL_CLASS |
| 46 | SPELL_AURA_46 |  | 152 | SPELL_AURA_MOD_DETECTED_RANGE |  | 258 | SPELL_AURA_258 |
| 47 | SPELL_AURA_MOD_PARRY_PERCENT |  | 153 | SPELL_AURA_SPLIT_DAMAGE_FLAT |  | 259 | SPELL_AURA_MOD_HOT_PCT |
| 48 | SPELL_AURA_PERIODIC_TRIGGER_SPELL_FROM_CLIENT |  | 154 | SPELL_AURA_MOD_STEALTH_LEVEL |  | 260 | SPELL_AURA_SCREEN_EFFECT |
| 49 | SPELL_AURA_MOD_DODGE_PERCENT |  | 155 | SPELL_AURA_MOD_WATER_BREATHING |  | 261 | SPELL_AURA_PHASE |
| 50 | SPELL_AURA_MOD_CRITICAL_HEALING_AMOUNT |  | 156 | SPELL_AURA_MOD_REPUTATION_GAIN |  | 262 | SPELL_AURA_ABILITY_IGNORE_AURASTATE |
| 51 | SPELL_AURA_MOD_BLOCK_PERCENT |  | 157 | SPELL_AURA_PET_DAMAGE_MULTI |  | 263 | SPELL_AURA_ALLOW_ONLY_ABILITY |
| 52 | SPELL_AURA_MOD_WEAPON_CRIT_PERCENT |  | 158 | SPELL_AURA_MOD_SHIELD_BLOCKVALUE |  | 264 | SPELL_AURA_264 |
| 53 | SPELL_AURA_PERIODIC_LEECH |  | 159 | SPELL_AURA_NO_PVP_CREDIT |  | 265 | SPELL_AURA_265 |
| 54 | SPELL_AURA_MOD_HIT_CHANCE |  | 160 | SPELL_AURA_MOD_AOE_AVOIDANCE |  | 266 | SPELL_AURA_266 |
| 55 | SPELL_AURA_MOD_SPELL_HIT_CHANCE |  | 161 | SPELL_AURA_MOD_HEALTH_REGEN_IN_COMBAT |  | 267 | SPELL_AURA_MOD_IMMUNE_AURA_APPLY_SCHOOL |
| 56 | SPELL_AURA_TRANSFORM |  | 162 | SPELL_AURA_POWER_BURN |  | 268 | SPELL_AURA_MOD_ATTACK_POWER_OF_STAT_PERCENT |
| 57 | SPELL_AURA_MOD_SPELL_CRIT_CHANCE |  | 163 | SPELL_AURA_MOD_CRIT_DAMAGE_BONUS |  | 269 | SPELL_AURA_MOD_IGNORE_TARGET_RESIST |
| 58 | SPELL_AURA_MOD_INCREASE_SWIM_SPEED |  | 164 | SPELL_AURA_164 |  | 270 | SPELL_AURA_MOD_ABILITY_IGNORE_TARGET_RESIST |
| 59 | SPELL_AURA_MOD_DAMAGE_DONE_CREATURE |  | 165 | SPELL_AURA_MELEE_ATTACK_POWER_ATTACKER_BONUS |  | 271 | SPELL_AURA_MOD_DAMAGE_FROM_CASTER |
| 60 | SPELL_AURA_MOD_PACIFY_SILENCE |  | 166 | SPELL_AURA_MOD_ATTACK_POWER_PCT |  | 272 | SPELL_AURA_IGNORE_MELEE_RESET |
| 61 | SPELL_AURA_MOD_SCALE |  | 167 | SPELL_AURA_MOD_RANGED_ATTACK_POWER_PCT |  | 273 | SPELL_AURA_X_RAY |
| 62 | SPELL_AURA_PERIODIC_HEALTH_FUNNEL |  | 168 | SPELL_AURA_MOD_DAMAGE_DONE_VERSUS |  | 274 | SPELL_AURA_ABILITY_CONSUME_NO_AMMO |
| 63 | SPELL_AURA_63 |  | 169 | SPELL_AURA_MOD_CRIT_PERCENT_VERSUS |  | 275 | SPELL_AURA_MOD_IGNORE_SHAPESHIFT |
| 64 | SPELL_AURA_PERIODIC_MANA_LEECH |  | 170 | SPELL_AURA_DETECT_AMORE |  | 276 | SPELL_AURA_MOD_DAMAGE_DONE_FOR_MECHANIC |
| 65 | SPELL_AURA_MOD_CASTING_SPEED_NOT_STACK |  | 171 | SPELL_AURA_MOD_SPEED_NOT_STACK |  | 277 | SPELL_AURA_MOD_MAX_AFFECTED_TARGETS |
| 66 | SPELL_AURA_FEIGN_DEATH |  | 172 | SPELL_AURA_MOD_MOUNTED_SPEED_NOT_STACK |  | 278 | SPELL_AURA_MOD_DISARM_RANGED |
| 67 | SPELL_AURA_MOD_DISARM |  | 173 | SPELL_AURA_173 |  | 279 | SPELL_AURA_INITIALIZE_IMAGES |
| 68 | SPELL_AURA_MOD_STALKED |  | 174 | SPELL_AURA_MOD_SPELL_DAMAGE_OF_STAT_PERCENT |  | 280 | SPELL_AURA_MOD_ARMOR_PENETRATION_PCT |
| 69 | SPELL_AURA_SCHOOL_ABSORB |  | 175 | SPELL_AURA_MOD_SPELL_HEALING_OF_STAT_PERCENT |  | 281 | SPELL_AURA_MOD_HONOR_GAIN_PCT |
| 70 | SPELL_AURA_EXTRA_ATTACKS |  | 176 | SPELL_AURA_SPIRIT_OF_REDEMPTION |  | 282 | SPELL_AURA_MOD_BASE_HEALTH_PCT |
| 71 | SPELL_AURA_MOD_SPELL_CRIT_CHANCE_SCHOOL |  | 177 | SPELL_AURA_AOE_CHARM |  | 283 | SPELL_AURA_MOD_HEALING_RECEIVED |
| 72 | SPELL_AURA_MOD_POWER_COST_SCHOOL_PCT |  | 178 | SPELL_AURA_MOD_DEBUFF_RESISTANCE |  | 284 | SPELL_AURA_LINKED |
| 73 | SPELL_AURA_MOD_POWER_COST_SCHOOL |  | 179 | SPELL_AURA_MOD_ATTACKER_SPELL_CRIT_CHANCE |  | 285 | SPELL_AURA_MOD_ATTACK_POWER_OF_ARMOR |
| 74 | SPELL_AURA_REFLECT_SPELLS_SCHOOL |  | 180 | SPELL_AURA_MOD_FLAT_SPELL_DAMAGE_VERSUS |  | 286 | SPELL_AURA_ABILITY_PERIODIC_CRIT |
| 75 | SPELL_AURA_MOD_LANGUAGE |  | 181 | SPELL_AURA_181 |  | 287 | SPELL_AURA_DEFLECT_SPELLS |
| 76 | SPELL_AURA_FAR_SIGHT |  | 182 | SPELL_AURA_MOD_RESISTANCE_OF_STAT_PERCENT |  | 288 | SPELL_AURA_IGNORE_HIT_DIRECTION |
| 77 | SPELL_AURA_MECHANIC_IMMUNITY |  | 183 | SPELL_AURA_MOD_CRITICAL_THREAT |  | 289 | SPELL_AURA_PREVENT_DURABILITY_LOSS |
| 78 | SPELL_AURA_MOUNTED |  | 184 | SPELL_AURA_MOD_ATTACKER_MELEE_HIT_CHANCE |  | 290 | SPELL_AURA_MOD_CRIT_PCT |
| 79 | SPELL_AURA_MOD_DAMAGE_PERCENT_DONE |  | 185 | SPELL_AURA_MOD_ATTACKER_RANGED_HIT_CHANCE |  | 291 | SPELL_AURA_MOD_XP_QUEST_PCT |
| 80 | SPELL_AURA_MOD_PERCENT_STAT |  | 186 | SPELL_AURA_MOD_ATTACKER_SPELL_HIT_CHANCE |  | 292 | SPELL_AURA_OPEN_STABLE |
| 81 | SPELL_AURA_SPLIT_DAMAGE_PCT |  | 187 | SPELL_AURA_MOD_ATTACKER_MELEE_CRIT_CHANCE |  | 293 | SPELL_AURA_OVERRIDE_SPELLS |
| 82 | SPELL_AURA_WATER_BREATHING |  | 188 | SPELL_AURA_MOD_ATTACKER_RANGED_CRIT_CHANCE |  | 294 | SPELL_AURA_PREVENT_REGENERATE_POWER |
| 83 | SPELL_AURA_MOD_BASE_RESISTANCE |  | 189 | SPELL_AURA_MOD_RATING |  | 295 | SPELL_AURA_295 |
| 84 | SPELL_AURA_MOD_REGEN |  | 190 | SPELL_AURA_MOD_FACTION_REPUTATION_GAIN |  | 296 | SPELL_AURA_SET_VEHICLE_ID |
| 85 | SPELL_AURA_MOD_POWER_REGEN |  | 191 | SPELL_AURA_USE_NORMAL_MOVEMENT_SPEED |  | 297 | SPELL_AURA_BLOCK_SPELL_FAMILY |
| 86 | SPELL_AURA_CHANNEL_DEATH_ITEM |  | 192 | SPELL_AURA_MOD_MELEE_RANGED_HASTE |  | 298 | SPELL_AURA_STRANGULATE |
| 87 | SPELL_AURA_MOD_DAMAGE_PERCENT_TAKEN |  | 193 | SPELL_AURA_MELEE_SLOW |  | 299 | SPELL_AURA_299 |
| 88 | SPELL_AURA_MOD_HEALTH_REGEN_PERCENT |  | 194 | SPELL_AURA_MOD_TARGET_ABSORB_SCHOOL |  | 300 | SPELL_AURA_SHARE_DAMAGE_PCT |
| 89 | SPELL_AURA_PERIODIC_DAMAGE_PERCENT |  | 195 | SPELL_AURA_MOD_TARGET_ABILITY_ABSORB_SCHOOL |  | 301 | SPELL_AURA_SCHOOL_HEAL_ABSORB |
| 90 | SPELL_AURA_90 |  | 196 | SPELL_AURA_MOD_COOLDOWN |  | 302 | SPELL_AURA_302 |
| 91 | SPELL_AURA_MOD_DETECT_RANGE |  | 197 | SPELL_AURA_MOD_ATTACKER_SPELL_AND_WEAPON_CRIT_CHANCE |  | 303 | SPELL_AURA_MOD_DAMAGE_DONE_VERSUS_AURASTATE |
| 92 | SPELL_AURA_PREVENTS_FLEEING |  | 198 | SPELL_AURA_198 |  | 304 | SPELL_AURA_MOD_FAKE_INEBRIATE |
| 93 | SPELL_AURA_MOD_UNATTACKABLE |  | 199 | SPELL_AURA_MOD_INCREASES_SPELL_PCT_TO_HIT |  | 305 | SPELL_AURA_MOD_MINIMUM_SPEED |
| 94 | SPELL_AURA_INTERRUPT_REGEN |  | 200 | SPELL_AURA_MOD_XP_PCT |  | 306 | SPELL_AURA_306 |
| 95 | SPELL_AURA_GHOST |  | 201 | SPELL_AURA_FLY |  | 307 | SPELL_AURA_HEAL_ABSORB_TEST |
| 96 | SPELL_AURA_SPELL_MAGNET |  | 202 | SPELL_AURA_IGNORE_COMBAT_RESULT |  | 308 | SPELL_AURA_MOD_CRIT_CHANCE_FOR_CASTER |
| 97 | SPELL_AURA_MANA_SHIELD |  | 203 | SPELL_AURA_MOD_ATTACKER_MELEE_CRIT_DAMAGE |  | 309 | SPELL_AURA_309 |
| 98 | SPELL_AURA_MOD_SKILL_TALENT |  | 204 | SPELL_AURA_MOD_ATTACKER_RANGED_CRIT_DAMAGE |  | 310 | SPELL_AURA_MOD_CREATURE_AOE_DAMAGE_AVOIDANCE |
| 99 | SPELL_AURA_MOD_ATTACK_POWER |  | 205 | SPELL_AURA_MOD_SCHOOL_CRIT_DMG_TAKEN |  | 311 | SPELL_AURA_311 |
| 100 | SPELL_AURA_AURAS_VISIBLE |  | 206 | SPELL_AURA_MOD_INCREASE_VEHICLE_FLIGHT_SPEED |  | 312 | SPELL_AURA_312 |
| 101 | SPELL_AURA_MOD_RESISTANCE_PCT |  | 207 | SPELL_AURA_MOD_INCREASE_MOUNTED_FLIGHT_SPEED |  | 313 | SPELL_AURA_313 |
| 102 | SPELL_AURA_MOD_MELEE_ATTACK_POWER_VERSUS |  | 208 | SPELL_AURA_MOD_INCREASE_FLIGHT_SPEED |  | 314 | SPELL_AURA_PREVENT_RESURRECTION |
| 103 | SPELL_AURA_MOD_TOTAL_THREAT |  | 209 | SPELL_AURA_MOD_MOUNTED_FLIGHT_SPEED_ALWAYS |  | 315 | SPELL_AURA_UNDERWATER_WALKING |
| 104 | SPELL_AURA_WATER_WALK |  | 210 | SPELL_AURA_MOD_VEHICLE_SPEED_ALWAYS |  | 316 | SPELL_AURA_PERIODIC_HASTE |
| 105 | SPELL_AURA_FEATHER_FALL |  | 211 | SPELL_AURA_MOD_FLIGHT_SPEED_NOT_STACK |  |  |  |
| 106 | SPELL_AURA_HOVER |  | 212 | SPELL_AURA_MOD_RANGED_ATTACK_POWER_OF_STAT_PERCENT |  |  |  |
{.dense}

&nbsp;

### EffectAuraPeriod
<code>Col: 98 &ndash; 100 (uint32)</code>

Delay between aura ticks in msec.
&nbsp;

### EffectAmplitude
<code>Col: 101 &ndash; 103 (float)</code>

Secondary effect scaler.
&nbsp;

### EffectChainTargets
<code>Col: 104 &ndash; 106 (uint32)</code>

*- no description -*
&nbsp;

### EffectItemType
<code>Col: 107 &ndash; 109 (uint32)</code>

Item created by spell.
&nbsp;

### EffectMiscValue
<code>Col: 110 &ndash; 112 (int32)</code>

*- no description -*
&nbsp;

### EffectMiscValueB
<code>Col: 113 &ndash; 115 (int32)</code>

*- no description -*
&nbsp;

### EffectTriggerSpell
<code>Col: 116 &ndash; 118 (int32)</code>

*- no description -*
&nbsp;

### EffectPointsPerCombo
<code>Col: 119 &ndash; 121 (float)</code>

Effect amount per combo point.
&nbsp;

### EffectSpellClassMask
<code>Col: 122 &ndash; 130 (flag96)</code>

Select affected spells, matching **SpellClassSet** and **SpellClassMask**.
&nbsp;

### SpellVisualID
<code>Col: 131 &ndash; 132 (uint32)</code>

*- no description -*
&nbsp;

### SpellIconID
<code>Col: 133 (uint32)</code>

*- no description -*
&nbsp;

### ActiveIconID
<code>Col: 134 (uint32)</code>

*- no description -*
&nbsp;

### SpellPriority
<code>Col: 135 (uint32)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 136 &ndash; 152 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### NameSubtext
<code>Col: 153 &ndash; 169 ([Loc](/how-to/localization))</code>

Rank X, Passive, Shapeshift, Racial, etc.
&nbsp;

### Description
:x: <code>Col: 170 &ndash; 186 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### AuraDescription
:x: <code>Col: 187 &ndash; 203 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### ManaCostPct
<code>Col: 204 (uint32)</code>

Relative power cost.
&nbsp;

### StartRecoveryCategory
<code>Col: 205 (uint32)</code>

Global cooldown category.
&nbsp;

### StartRecoveryTime
<code>Col: 206 (uint32)</code>

Global cooldown amount in msec.
&nbsp;

### MaxTargetLevel
<code>Col: 207 (uint32)</code>

*- no description -*
&nbsp;

### SpellClassSet
<code>Col: 208 (uint32)</code>

[`enum SpellFamilyNames`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3575-L3595)
| ID | Name | Comment |
|----|------|---------|
| 0 | SPELLFAMILY_GENERIC |  |
| 1 | SPELLFAMILY_UNK1 | events, holidays, ...  |
| 3 | SPELLFAMILY_MAGE |  |
| 4 | SPELLFAMILY_WARRIOR |  |
| 5 | SPELLFAMILY_WARLOCK |  |
| 6 | SPELLFAMILY_PRIEST |  |
| 7 | SPELLFAMILY_DRUID |  |
| 8 | SPELLFAMILY_ROGUE |  |
| 9 | SPELLFAMILY_HUNTER |  |
| 10 | SPELLFAMILY_PALADIN |  |
| 11 | SPELLFAMILY_SHAMAN |  |
| 12 | SPELLFAMILY_UNK2 | Silence resistance?  |
| 13 | SPELLFAMILY_POTION |  |
| 15 | SPELLFAMILY_DEATHKNIGHT |  |
| 17 | SPELLFAMILY_PET |  |
{.dense}
&nbsp;

### SpellClassMask
<code>Col: 209 &ndash; 211 (flag96)</code>

Similar spells are grouped by their **SpellClassMask**.
&nbsp;

### MaxTargets
<code>Col: 212 (uint32)</code>

*- no description -*
&nbsp;

### DefenseType
<code>Col: 213 (uint32)</code>

[`enum SpellDmgClass`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1570-L1576)
| ID | Name |
|----|------|
| 0 | SPELL_DAMAGE_CLASS_NONE |
| 1 | SPELL_DAMAGE_CLASS_MAGIC |
| 2 | SPELL_DAMAGE_CLASS_MELEE |
| 3 | SPELL_DAMAGE_CLASS_RANGED |
{.dense}

&nbsp;

### PreventionType
<code>Col: 214 (uint32)</code>

[`enum SpellPreventionType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L1579-L1584)
| ID | Name |
|----|------|
| 0 | SPELL_PREVENTION_TYPE_NONE |
| 1 | SPELL_PREVENTION_TYPE_SILENCE |
| 2 | SPELL_PREVENTION_TYPE_PACIFY |
{.dense}

&nbsp;

### StanceBarOrder
:x: <code>Col: 215 (int32)</code>

*- no description -*
&nbsp;

### EffectChainAmplitude
<code>Col: 216 &ndash; 218 (float)</code>

Primary effect scaler.
&nbsp;

### MinFactionID
:x: <code>Col: 219 (uint32)</code>

*- unused -*
&nbsp;

### MinReputation
:x: <code>Col: 220 (uint32)</code>

*- unused -*
&nbsp;

### RequiredAuraVision
:x: <code>Col: 221 (uint32)</code>

*- no description -*
&nbsp;

### RequiredTotemCategoryID
<code>Col: 222 &ndash; 223 (uint32)</code>

Items with TotemCategory required for spell cast. (not consumed)
| ID | Name |  | ID | Name |
|----|------|--|----|------|
|  1 | Skinning Knife (OLD)     |  |  41 | Runed Fel Iron Rod            |
|  2 | Earth Totem              |  |  62 | Runed Adamantite Rod          |
|  3 | Air Totem                |  |  63 | Runed Eternium Rod            |
|  4 | Fire Totem               |  |  81 | Hollow Quill                  |
|  5 | Water Totem              |  | 101 | Runed Azurite Rod             |
|  6 | Runed Copper Rod         |  | 121 | Virtuoso Inking Set           |
|  7 | Runed Silver Rod         |  | 141 | Drums                         |
|  8 | Runed Golden Rod         |  | 161 | Gnomish Army Knife            |
|  9 | Runed Truesilver Rod     |  | 162 | Blacksmith Hammer             |
| 10 | Runed Arcanite Rod       |  | 165 | Mining Pick                   |
| 11 | Mining Pick (OLD)        |  | 166 | Skinning Knife                |
| 12 | Philosopher's Stone      |  | 167 | Hammer Pick                   |
| 13 | Blacksmith Hammer (OLD)  |  | 168 | Bladed Pickaxe                |
| 14 | Arclight Spanner         |  | 169 | Flint and Tinder              |
| 15 | Gyromatic Micro-Adjustor |  | 189 | Runed Cobalt Rod (DO NOT USE) |
| 21 | Master Totem             |  | 190 | Runed Titanium Rod            |
{.dense}

&nbsp;

### RequiredAreasID
<code>Col: 224 (int32)</code>

Spell is disabled outside of area.
&nbsp;

### SchoolMask
<code>Col: 225 (uint32)</code>

[`enum SpellSchools`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L303-L313)
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | SPELL_SCHOOL_NORMAL |
| 2 | 0x02 | SPELL_SCHOOL_HOLY |
| 4 | 0x04 | SPELL_SCHOOL_FIRE |
| 8 | 0x08 | SPELL_SCHOOL_NATURE |
| 16 | 0x10 | SPELL_SCHOOL_FROST |
| 32 | 0x20 | SPELL_SCHOOL_SHADOW |
| 64 | 0x40 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### RuneCostID
<code>Col: 226 (uint32)</code>

*- no description -*
&nbsp;

### SpellMissileID
:x: <code>Col: 227 (uint32)</code>

*- no description -*
&nbsp;

### PowerDisplayID
:x: <code>Col: 228 (int32)</code>

Cosmetic power display.
&nbsp;

### EffectBonusCoefficient
<code>Col: 229 &ndash; 231 (float)</code>

Spellpower / attackpower scaler.
&nbsp;

### DescriptionVariablesID
:x: <code>Col: 232 (int32)</code>

Points to declaration of `$<…>` description variables.
&nbsp;

### Difficulty
:x: <code>Col: 233 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spammessages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpamMessages'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellcasttimes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellCastTimes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
