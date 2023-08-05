---
title: serverside_spell_effect
description: 
published: true
date: 2023-08-05T23:49:38.744Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:13.984Z
---

<a href="https://trinitycore.info/en/database/master/world/serverside_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'serverside_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_discovery_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_discovery_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpellID](#spellid) | int | unsigned | PRI | NO | 0 |  |  |
| [EffectIndex](#effectindex) | int | signed | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int | signed | PRI | NO | 0 |  |  |
| [Effect](#effect) | int | signed |  | NO | 0 |  |  |
| [EffectAura](#effectaura) | smallint | signed |  | NO | 0 |  |  |
| [EffectAmplitude](#effectamplitude) | float |  |  | NO | 0 |  |  |
| [EffectAttributes](#effectattributes) | int | signed |  | NO | 0 |  |  |
| [EffectAuraPeriod](#effectauraperiod) | int | signed |  | NO | 0 |  |  |
| [EffectBonusCoefficient](#effectbonuscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectChainAmplitude](#effectchainamplitude) | float |  |  | NO | 0 |  |  |
| [EffectChainTargets](#effectchaintargets) | int | signed |  | NO | 0 |  |  |
| [EffectItemType](#effectitemtype) | int | signed |  | NO | 0 |  |  |
| [EffectMechanic](#effectmechanic) | int | signed |  | NO | 0 |  |  |
| [EffectPointsPerResource](#effectpointsperresource) | float |  |  | NO | 0 |  |  |
| [EffectPosFacing](#effectposfacing) | float |  |  | NO | 0 |  |  |
| [EffectRealPointsPerLevel](#effectrealpointsperlevel) | float |  |  | NO | 0 |  |  |
| [EffectTriggerSpell](#effecttriggerspell) | int | signed |  | NO | 0 |  |  |
| [BonusCoefficientFromAP](#bonuscoefficientfromap) | float |  |  | NO | 0 |  |  |
| [PvpMultiplier](#pvpmultiplier) | float |  |  | NO | 0 |  |  |
| [Coefficient](#coefficient) | float |  |  | NO | 0 |  |  |
| [Variance](#variance) | float |  |  | NO | 0 |  |  |
| [ResourceCoefficient](#resourcecoefficient) | float |  |  | NO | 0 |  |  |
| [GroupSizeBasePointsCoefficient](#groupsizebasepointscoefficient) | float |  |  | NO | 0 |  |  |
| [EffectBasePoints](#effectbasepoints) | float |  |  | NO | 0 |  |  |
| [EffectMiscValue1](#effectmiscvalue1) | int | signed |  | NO | 0 |  |  |
| [EffectMiscValue2](#effectmiscvalue2) | int | signed |  | NO | 0 |  |  |
| [EffectRadiusIndex1](#effectradiusindex1) | int | unsigned |  | NO | 0 |  |  |
| [EffectRadiusIndex2](#effectradiusindex2) | int | unsigned |  | NO | 0 |  |  |
| [EffectSpellClassMask1](#effectspellclassmask1) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask2](#effectspellclassmask2) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask3](#effectspellclassmask3) | int | signed |  | NO | 0 |  |  |
| [EffectSpellClassMask4](#effectspellclassmask4) | int | signed |  | NO | 0 |  |  |
| [ImplicitTarget1](#implicittarget1) | smallint | signed |  | NO | 0 |  |  |
| [ImplicitTarget2](#implicittarget2) | smallint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SpellID
*- no description -*
&nbsp;

### EffectIndex
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### Effect
| SpellEffect | ID |
| --- | --- |
| SPELL_EFFECT_NONE | 0 |
| SPELL_EFFECT_INSTAKILL | 1 |
| SPELL_EFFECT_SCHOOL_DAMAGE | 2 |
| SPELL_EFFECT_DUMMY | 3 |
| SPELL_EFFECT_PORTAL_TELEPORT | 4 |
| SPELL_EFFECT_5 | 5 |
| SPELL_EFFECT_APPLY_AURA | 6 |
| SPELL_EFFECT_ENVIRONMENTAL_DAMAGE | 7 |
| SPELL_EFFECT_POWER_DRAIN | 8 |
| SPELL_EFFECT_HEALTH_LEECH | 9 |
| SPELL_EFFECT_HEAL | 10 |
| SPELL_EFFECT_BIND | 11 |
| SPELL_EFFECT_PORTAL | 12 |
| SPELL_EFFECT_TELEPORT_TO_RETURN_POINT | 13 |
| SPELL_EFFECT_INCREASE_CURRENCY_CAP | 14 |
| SPELL_EFFECT_TELEPORT_WITH_SPELL_VISUAL_KIT_LOADING_SCREEN | 15 |
| SPELL_EFFECT_QUEST_COMPLETE | 16 |
| SPELL_EFFECT_WEAPON_DAMAGE_NOSCHOOL | 17 |
| SPELL_EFFECT_RESURRECT | 18 |
| SPELL_EFFECT_ADD_EXTRA_ATTACKS | 19 |
| SPELL_EFFECT_DODGE | 20 |
| SPELL_EFFECT_EVADE | 21 |
| SPELL_EFFECT_PARRY | 22 |
| SPELL_EFFECT_BLOCK | 23 |
| SPELL_EFFECT_CREATE_ITEM | 24 |
| SPELL_EFFECT_WEAPON | 25 |
| SPELL_EFFECT_DEFENSE | 26 |
| SPELL_EFFECT_PERSISTENT_AREA_AURA | 27 |
| SPELL_EFFECT_SUMMON | 28 |
| SPELL_EFFECT_LEAP | 29 |
| SPELL_EFFECT_ENERGIZE | 30 |
| SPELL_EFFECT_WEAPON_PERCENT_DAMAGE | 31 |
| SPELL_EFFECT_TRIGGER_MISSILE | 32 |
| SPELL_EFFECT_OPEN_LOCK | 33 |
| SPELL_EFFECT_SUMMON_CHANGE_ITEM | 34 |
| SPELL_EFFECT_APPLY_AREA_AURA_PARTY | 35 |
| SPELL_EFFECT_LEARN_SPELL | 36 |
| SPELL_EFFECT_SPELL_DEFENSE | 37 |
| SPELL_EFFECT_DISPEL | 38 |
| SPELL_EFFECT_LANGUAGE | 39 |
| SPELL_EFFECT_DUAL_WIELD | 40 |
| SPELL_EFFECT_JUMP | 41 |
| SPELL_EFFECT_JUMP_DEST | 42 |
| SPELL_EFFECT_TELEPORT_UNITS_FACE_CASTER | 43 |
| SPELL_EFFECT_SKILL_STEP | 44 |
| SPELL_EFFECT_PLAY_MOVIE | 45 |
| SPELL_EFFECT_SPAWN | 46 |
| SPELL_EFFECT_TRADE_SKILL | 47 |
| SPELL_EFFECT_STEALTH | 48 |
| SPELL_EFFECT_DETECT | 49 |
| SPELL_EFFECT_TRANS_DOOR | 50 |
| SPELL_EFFECT_FORCE_CRITICAL_HIT | 51 |
| SPELL_EFFECT_SET_MAX_BATTLE_PET_COUNT | 52 |
| SPELL_EFFECT_ENCHANT_ITEM | 53 |
| SPELL_EFFECT_ENCHANT_ITEM_TEMPORARY | 54 |
| SPELL_EFFECT_TAMECREATURE | 55 |
| SPELL_EFFECT_SUMMON_PET | 56 |
| SPELL_EFFECT_LEARN_PET_SPELL | 57 |
| SPELL_EFFECT_WEAPON_DAMAGE | 58 |
| SPELL_EFFECT_CREATE_RANDOM_ITEM | 59 |
| SPELL_EFFECT_PROFICIENCY | 60 |
| SPELL_EFFECT_SEND_EVENT | 61 |
| SPELL_EFFECT_POWER_BURN | 62 |
| SPELL_EFFECT_THREAT | 63 |
| SPELL_EFFECT_TRIGGER_SPELL | 64 |
| SPELL_EFFECT_APPLY_AREA_AURA_RAID | 65 |
| SPELL_EFFECT_RECHARGE_ITEM | 66 |
| SPELL_EFFECT_HEAL_MAX_HEALTH | 67 |
| SPELL_EFFECT_INTERRUPT_CAST | 68 |
| SPELL_EFFECT_DISTRACT | 69 |
| SPELL_EFFECT_COMPLETE_AND_REWARD_WORLD_QUEST | 70 |
| SPELL_EFFECT_PICKPOCKET | 71 |
| SPELL_EFFECT_ADD_FARSIGHT | 72 |
| SPELL_EFFECT_UNTRAIN_TALENTS | 73 |
| SPELL_EFFECT_APPLY_GLYPH | 74 |
| SPELL_EFFECT_HEAL_MECHANICAL | 75 |
| SPELL_EFFECT_SUMMON_OBJECT_WILD | 76 |
| SPELL_EFFECT_SCRIPT_EFFECT | 77 |
| SPELL_EFFECT_ATTACK | 78 |
| SPELL_EFFECT_SANCTUARY | 79 |
| SPELL_EFFECT_MODIFY_FOLLOWER_ITEM_LEVEL | 80 |
| SPELL_EFFECT_PUSH_ABILITY_TO_ACTION_BAR | 81 |
| SPELL_EFFECT_BIND_SIGHT | 82 |
| SPELL_EFFECT_DUEL | 83 |
| SPELL_EFFECT_STUCK | 84 |
| SPELL_EFFECT_SUMMON_PLAYER | 85 |
| SPELL_EFFECT_ACTIVATE_OBJECT | 86 |
| SPELL_EFFECT_GAMEOBJECT_DAMAGE | 87 |
| SPELL_EFFECT_GAMEOBJECT_REPAIR | 88 |
| SPELL_EFFECT_GAMEOBJECT_SET_DESTRUCTION_STATE | 89 |
| SPELL_EFFECT_KILL_CREDIT | 90 |
| SPELL_EFFECT_THREAT_ALL | 91 |
| SPELL_EFFECT_ENCHANT_HELD_ITEM | 92 |
| SPELL_EFFECT_FORCE_DESELECT | 93 |
| SPELL_EFFECT_SELF_RESURRECT | 94 |
| SPELL_EFFECT_SKINNING | 95 |
| SPELL_EFFECT_CHARGE | 96 |
| SPELL_EFFECT_CAST_BUTTON | 97 |
| SPELL_EFFECT_KNOCK_BACK | 98 |
| SPELL_EFFECT_DISENCHANT | 99 |
| SPELL_EFFECT_INEBRIATE | 100 |
| SPELL_EFFECT_FEED_PET | 101 |
| SPELL_EFFECT_DISMISS_PET | 102 |
| SPELL_EFFECT_REPUTATION | 103 |
| SPELL_EFFECT_SUMMON_OBJECT_SLOT1 | 104 |
| SPELL_EFFECT_SURVEY | 105 |
| SPELL_EFFECT_CHANGE_RAID_MARKER | 106 |
| SPELL_EFFECT_SHOW_CORPSE_LOOT | 107 |
| SPELL_EFFECT_DISPEL_MECHANIC | 108 |
| SPELL_EFFECT_RESURRECT_PET | 109 |
| SPELL_EFFECT_DESTROY_ALL_TOTEMS | 110 |
| SPELL_EFFECT_DURABILITY_DAMAGE | 111 |
| SPELL_EFFECT_112 | 112 |
| SPELL_EFFECT_CANCEL_CONVERSATION | 113 |
| SPELL_EFFECT_ATTACK_ME | 114 |
| SPELL_EFFECT_DURABILITY_DAMAGE_PCT | 115 |
| SPELL_EFFECT_SKIN_PLAYER_CORPSE | 116 |
| SPELL_EFFECT_SPIRIT_HEAL | 117 |
| SPELL_EFFECT_SKILL | 118 |
| SPELL_EFFECT_APPLY_AREA_AURA_PET | 119 |
| SPELL_EFFECT_TELEPORT_GRAVEYARD | 120 |
| SPELL_EFFECT_NORMALIZED_WEAPON_DMG | 121 |
| SPELL_EFFECT_122 | 122 |
| SPELL_EFFECT_SEND_TAXI | 123 |
| SPELL_EFFECT_PULL_TOWARDS | 124 |
| SPELL_EFFECT_MODIFY_THREAT_PERCENT | 125 |
| SPELL_EFFECT_STEAL_BENEFICIAL_BUFF | 126 |
| SPELL_EFFECT_PROSPECTING | 127 |
| SPELL_EFFECT_APPLY_AREA_AURA_FRIEND | 128 |
| SPELL_EFFECT_APPLY_AREA_AURA_ENEMY | 129 |
| SPELL_EFFECT_REDIRECT_THREAT | 130 |
| SPELL_EFFECT_PLAY_SOUND | 131 |
| SPELL_EFFECT_PLAY_MUSIC | 132 |
| SPELL_EFFECT_UNLEARN_SPECIALIZATION | 133 |
| SPELL_EFFECT_KILL_CREDIT2 | 134 |
| SPELL_EFFECT_CALL_PET | 135 |
| SPELL_EFFECT_HEAL_PCT | 136 |
| SPELL_EFFECT_ENERGIZE_PCT | 137 |
| SPELL_EFFECT_LEAP_BACK | 138 |
| SPELL_EFFECT_CLEAR_QUEST | 139 |
| SPELL_EFFECT_FORCE_CAST | 140 |
| SPELL_EFFECT_FORCE_CAST_WITH_VALUE | 141 |
| SPELL_EFFECT_TRIGGER_SPELL_WITH_VALUE | 142 |
| SPELL_EFFECT_APPLY_AREA_AURA_OWNER | 143 |
| SPELL_EFFECT_KNOCK_BACK_DEST | 144 |
| SPELL_EFFECT_PULL_TOWARDS_DEST | 145 |
| SPELL_EFFECT_RESTORE_GARRISON_TROOP_VITALITY | 146 |
| SPELL_EFFECT_QUEST_FAIL | 147 |
| SPELL_EFFECT_TRIGGER_MISSILE_SPELL_WITH_VALUE | 148 |
| SPELL_EFFECT_CHARGE_DEST | 149 |
| SPELL_EFFECT_QUEST_START | 150 |
| SPELL_EFFECT_TRIGGER_SPELL_2 | 151 |
| SPELL_EFFECT_SUMMON_RAF_FRIEND | 152 |
| SPELL_EFFECT_CREATE_TAMED_PET | 153 |
| SPELL_EFFECT_DISCOVER_TAXI | 154 |
| SPELL_EFFECT_TITAN_GRIP | 155 |
| SPELL_EFFECT_ENCHANT_ITEM_PRISMATIC | 156 |
| SPELL_EFFECT_CREATE_LOOT | 157 |
| SPELL_EFFECT_MILLING | 158 |
| SPELL_EFFECT_ALLOW_RENAME_PET | 159 |
| SPELL_EFFECT_FORCE_CAST_2 | 160 |
| SPELL_EFFECT_TALENT_SPEC_COUNT | 161 |
| SPELL_EFFECT_TALENT_SPEC_SELECT | 162 |
| SPELL_EFFECT_OBLITERATE_ITEM | 163 |
| SPELL_EFFECT_REMOVE_AURA | 164 |
| SPELL_EFFECT_DAMAGE_FROM_MAX_HEALTH_PCT | 165 |
| SPELL_EFFECT_GIVE_CURRENCY | 166 |
| SPELL_EFFECT_UPDATE_PLAYER_PHASE | 167 |
| SPELL_EFFECT_ALLOW_CONTROL_PET | 168 |
| SPELL_EFFECT_DESTROY_ITEM | 169 |
| SPELL_EFFECT_UPDATE_ZONE_AURAS_AND_PHASES | 170 |
| SPELL_EFFECT_SUMMON_PERSONAL_GAMEOBJECT | 171 |
| SPELL_EFFECT_RESURRECT_WITH_AURA | 172 |
| SPELL_EFFECT_UNLOCK_GUILD_VAULT_TAB | 173 |
| SPELL_EFFECT_APPLY_AURA_ON_PET | 174 |
| SPELL_EFFECT_175 | 175 |
| SPELL_EFFECT_SANCTUARY_2 | 176 |
| SPELL_EFFECT_DESPAWN_PERSISTENT_AREA_AURA | 177 |
| SPELL_EFFECT_178 | 178 |
| SPELL_EFFECT_CREATE_AREATRIGGER | 179 |
| SPELL_EFFECT_UPDATE_AREATRIGGER | 180 |
| SPELL_EFFECT_REMOVE_TALENT | 181 |
| SPELL_EFFECT_DESPAWN_AREATRIGGER | 182 |
| SPELL_EFFECT_183 | 183 |
| SPELL_EFFECT_REPUTATION_2 | 184 |
| SPELL_EFFECT_185 | 185 |
| SPELL_EFFECT_186 | 186 |
| SPELL_EFFECT_RANDOMIZE_ARCHAEOLOGY_DIGSITES | 187 |
| SPELL_EFFECT_SUMMON_STABLED_PET_AS_GUARDIAN | 188 |
| SPELL_EFFECT_LOOT | 189 |
| SPELL_EFFECT_CHANGE_PARTY_MEMBERS | 190 |
| SPELL_EFFECT_TELEPORT_TO_DIGSITE | 191 |
| SPELL_EFFECT_UNCAGE_BATTLEPET | 192 |
| SPELL_EFFECT_START_PET_BATTLE | 193 |
| SPELL_EFFECT_194 | 194 |
| SPELL_EFFECT_PLAY_SCENE_SCRIPT_PACKAGE | 195 |
| SPELL_EFFECT_CREATE_SCENE_OBJECT | 196 |
| SPELL_EFFECT_CREATE_PERSONAL_SCENE_OBJECT | 197 |
| SPELL_EFFECT_PLAY_SCENE | 198 |
| SPELL_EFFECT_DESPAWN_SUMMON | 199 |
| SPELL_EFFECT_HEAL_BATTLEPET_PCT | 200 |
| SPELL_EFFECT_ENABLE_BATTLE_PETS | 201 |
| SPELL_EFFECT_APPLY_AREA_AURA_SUMMONS | 202 |
| SPELL_EFFECT_REMOVE_AURA_2 | 203 |
| SPELL_EFFECT_CHANGE_BATTLEPET_QUALITY | 204 |
| SPELL_EFFECT_LAUNCH_QUEST_CHOICE | 205 |
| SPELL_EFFECT_ALTER_ITEM | 206 |
| SPELL_EFFECT_LAUNCH_QUEST_TASK | 207 |
| SPELL_EFFECT_SET_REPUTATION | 208 |
| SPELL_EFFECT_209 | 209 |
| SPELL_EFFECT_LEARN_GARRISON_BUILDING | 210 |
| SPELL_EFFECT_LEARN_GARRISON_SPECIALIZATION | 211 |
| SPELL_EFFECT_REMOVE_AURA_BY_SPELL_LABEL | 212 |
| SPELL_EFFECT_JUMP_DEST_2 | 213 |
| SPELL_EFFECT_CREATE_GARRISON | 214 |
| SPELL_EFFECT_UPGRADE_CHARACTER_SPELLS | 215 |
| SPELL_EFFECT_CREATE_SHIPMENT | 216 |
| SPELL_EFFECT_UPGRADE_GARRISON | 217 |
| SPELL_EFFECT_218 | 218 |
| SPELL_EFFECT_CREATE_CONVERSATION | 219 |
| SPELL_EFFECT_ADD_GARRISON_FOLLOWER | 220 |
| SPELL_EFFECT_ADD_GARRISON_MISSION | 221 |
| SPELL_EFFECT_CREATE_HEIRLOOM_ITEM | 222 |
| SPELL_EFFECT_CHANGE_ITEM_BONUSES | 223 |
| SPELL_EFFECT_ACTIVATE_GARRISON_BUILDING | 224 |
| SPELL_EFFECT_GRANT_BATTLEPET_LEVEL | 225 |
| SPELL_EFFECT_TRIGGER_ACTION_SET | 226 |
| SPELL_EFFECT_TELEPORT_TO_LFG_DUNGEON | 227 |
| SPELL_EFFECT_228 | 228 |
| SPELL_EFFECT_SET_FOLLOWER_QUALITY | 229 |
| SPELL_EFFECT_230 | 230 |
| SPELL_EFFECT_INCREASE_FOLLOWER_EXPERIENCE | 231 |
| SPELL_EFFECT_REMOVE_PHASE | 232 |
| SPELL_EFFECT_RANDOMIZE_FOLLOWER_ABILITIES | 233 |
| SPELL_EFFECT_234 | 234 |
| SPELL_EFFECT_235 | 235 |
| SPELL_EFFECT_GIVE_EXPERIENCE | 236 |
| SPELL_EFFECT_GIVE_RESTED_EXPERIENCE_BONUS | 237 |
| SPELL_EFFECT_INCREASE_SKILL | 238 |
| SPELL_EFFECT_END_GARRISON_BUILDING_CONSTRUCTION | 239 |
| SPELL_EFFECT_GIVE_ARTIFACT_POWER | 240 |
| SPELL_EFFECT_241 | 241 |
| SPELL_EFFECT_GIVE_ARTIFACT_POWER_NO_BONUS | 242 |
| SPELL_EFFECT_APPLY_ENCHANT_ILLUSION | 243 |
| SPELL_EFFECT_LEARN_FOLLOWER_ABILITY | 244 |
| SPELL_EFFECT_UPGRADE_HEIRLOOM | 245 |
| SPELL_EFFECT_FINISH_GARRISON_MISSION | 246 |
| SPELL_EFFECT_ADD_GARRISON_MISSION_SET | 247 |
| SPELL_EFFECT_FINISH_SHIPMENT | 248 |
| SPELL_EFFECT_FORCE_EQUIP_ITEM | 249 |
| SPELL_EFFECT_TAKE_SCREENSHOT | 250 |
| SPELL_EFFECT_SET_GARRISON_CACHE_SIZE | 251 |
| SPELL_EFFECT_TELEPORT_UNITS | 252 |
| SPELL_EFFECT_GIVE_HONOR | 253 |
| SPELL_EFFECT_JUMP_CHARGE | 254 |
| SPELL_EFFECT_LEARN_TRANSMOG_SET | 255 |
| SPELL_EFFECT_256 | 256 |
| SPELL_EFFECT_257 | 257 |
| SPELL_EFFECT_MODIFY_KEYSTONE | 258 |
| SPELL_EFFECT_RESPEC_AZERITE_EMPOWERED_ITEM | 259 |
| SPELL_EFFECT_SUMMON_STABLED_PET | 260 |
| SPELL_EFFECT_SCRAP_ITEM | 261 |
| SPELL_EFFECT_262 | 262 |
| SPELL_EFFECT_REPAIR_ITEM | 263 |
| SPELL_EFFECT_REMOVE_GEM | 264 |
| SPELL_EFFECT_LEARN_AZERITE_ESSENCE_POWER | 265 |
| SPELL_EFFECT_SET_ITEM_BONUS_LIST_GROUP_ENTRY | 266 |
| SPELL_EFFECT_CREATE_PRIVATE_CONVERSATION | 267 |
| SPELL_EFFECT_APPLY_MOUNT_EQUIPMENT | 268 |
| SPELL_EFFECT_INCREASE_ITEM_BONUS_LIST_GROUP_STEP | 269 |
| SPELL_EFFECT_270 | 270 |
| SPELL_EFFECT_APPLY_AREA_AURA_PARTY_NONRANDOM | 271 |
| SPELL_EFFECT_SET_COVENANT | 272 |
| SPELL_EFFECT_CRAFT_RUNEFORGE_LEGENDARY | 273 |
| SPELL_EFFECT_274 | 274 |
| SPELL_EFFECT_275 | 275 |
| SPELL_EFFECT_LEARN_TRANSMOG_ILLUSION | 276 |
| SPELL_EFFECT_SET_CHROMIE_TIME | 277 |
| SPELL_EFFECT_278 | 278 |
| SPELL_EFFECT_LEARN_GARR_TALENT | 279 |
| SPELL_EFFECT_280 | 280 |
| SPELL_EFFECT_LEARN_SOULBIND_CONDUIT | 281 |
| SPELL_EFFECT_CONVERT_ITEMS_TO_CURRENCY | 282 |
| SPELL_EFFECT_COMPLETE_CAMPAIGN | 283 |
| SPELL_EFFECT_SEND_CHAT_MESSAGE | 284 |
| SPELL_EFFECT_MODIFY_KEYSTONE_2 | 285 |
| SPELL_EFFECT_GRANT_BATTLEPET_EXPERIENCE | 286 |
| SPELL_EFFECT_SET_GARRISON_FOLLOWER_LEVEL | 287 |
| SPELL_EFFECT_CRAFT_ITEM | 288 |
| SPELL_EFFECT_MODIFY_AURA_STACKS | 289 |
| SPELL_EFFECT_MODIFY_COOLDOWN | 290 |
| SPELL_EFFECT_MODIFY_COOLDOWNS | 291 |
| SPELL_EFFECT_MODIFY_COOLDOWNS_BY_CATEGORY | 292 |
| SPELL_EFFECT_MODIFY_CHARGES | 293 |
| SPELL_EFFECT_CRAFT_LOOT | 294 |
| SPELL_EFFECT_SALVAGE_ITEM | 295 |
| SPELL_EFFECT_CRAFT_SALVAGE_ITEM | 296 |
| SPELL_EFFECT_RECRAFT_ITEM | 297 |
| SPELL_EFFECT_CANCEL_ALL_PRIVATE_CONVERSATIONS | 298 |
| SPELL_EFFECT_299 | 299 |
| SPELL_EFFECT_300 | 300 |
| SPELL_EFFECT_CRAFT_ENCHANT | 301 |
| SPELL_EFFECT_GATHERING | 302 |
| SPELL_EFFECT_CREATE_TRAIT_TREE_CONFIG | 303 |
| SPELL_EFFECT_CHANGE_ACTIVE_COMBAT_TRAIT_CONFIG | 304 |
| SPELL_EFFECT_305 | 305 |
| SPELL_EFFECT_UPDATE_INTERACTIONS | 306 |
| SPELL_EFFECT_307 | 307 |
| SPELL_EFFECT_CANCEL_PRELOAD_WORLD | 308 |
| SPELL_EFFECT_PRELOAD_WORLD | 309 |
| SPELL_EFFECT_310 | 310 |
| SPELL_EFFECT_ENSURE_WORLD_LOADED | 311 |
| SPELL_EFFECT_312 | 312 |
| SPELL_EFFECT_CHANGE_ITEM_BONUSES_2 | 313 |
| SPELL_EFFECT_ADD_SOCKET_BONUS | 314 |
| SPELL_EFFECT_LEARN_TRANSMOG_APPEARANCE_FROM_ITEM_MOD_APPEARANCE_GROUP | 315 |
&nbsp;

### EffectAura
*- no description -*
&nbsp;

### EffectAmplitude
*- no description -*
&nbsp;

### EffectAttributes
*- no description -*
&nbsp;

### EffectAuraPeriod
*- no description -*
&nbsp;

### EffectBonusCoefficient
*- no description -*
&nbsp;

### EffectChainAmplitude
*- no description -*
&nbsp;

### EffectChainTargets
*- no description -*
&nbsp;

### EffectItemType
*- no description -*
&nbsp;

### EffectMechanic
*- no description -*
&nbsp;

### EffectPointsPerResource
*- no description -*
&nbsp;

### EffectPosFacing
*- no description -*
&nbsp;

### EffectRealPointsPerLevel
*- no description -*
&nbsp;

### EffectTriggerSpell
*- no description -*
&nbsp;

### BonusCoefficientFromAP
*- no description -*
&nbsp;

### PvpMultiplier
*- no description -*
&nbsp;

### Coefficient
*- no description -*
&nbsp;

### Variance
*- no description -*
&nbsp;

### ResourceCoefficient
*- no description -*
&nbsp;

### GroupSizeBasePointsCoefficient
*- no description -*
&nbsp;

### EffectBasePoints
*- no description -*
&nbsp;

### EffectMiscValue1
*- no description -*
&nbsp;

### EffectMiscValue2
*- no description -*
&nbsp;

### EffectRadiusIndex1
*- no description -*
&nbsp;

### EffectRadiusIndex2
*- no description -*
&nbsp;

### EffectSpellClassMask1
*- no description -*
&nbsp;

### EffectSpellClassMask2
*- no description -*
&nbsp;

### EffectSpellClassMask3
*- no description -*
&nbsp;

### EffectSpellClassMask4
*- no description -*
&nbsp;

### ImplicitTarget1
*- no description -*
&nbsp;

### ImplicitTarget2
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/serverside_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'serverside_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/skill_discovery_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_discovery_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

