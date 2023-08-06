---
title: serverside_spell_effect
description: 
published: true
date: 2023-08-06T00:03:06.742Z
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
| EffectAura | ID |
| --- | --- |
|SPELL_AURA_NONE                                         | 0 |
|SPELL_AURA_BIND_SIGHT                                   | 1 |
|SPELL_AURA_MOD_POSSESS                                  | 2 |
|SPELL_AURA_PERIODIC_DAMAGE                              | 3 |
|SPELL_AURA_DUMMY                                        | 4 |
|SPELL_AURA_MOD_CONFUSE                                  | 5 |
|SPELL_AURA_MOD_CHARM                                    | 6 |
|SPELL_AURA_MOD_FEAR                                     | 7 |
|SPELL_AURA_PERIODIC_HEAL                                | 8 |
|SPELL_AURA_MOD_ATTACKSPEED                              | 9 |
|SPELL_AURA_MOD_THREAT                                   | 10 |
|SPELL_AURA_MOD_TAUNT                                    | 11 |
|SPELL_AURA_MOD_STUN                                     | 12 |
|SPELL_AURA_MOD_DAMAGE_DONE                              | 13 |
|SPELL_AURA_MOD_DAMAGE_TAKEN                             | 14 |
|SPELL_AURA_DAMAGE_SHIELD                                | 15 |
|SPELL_AURA_MOD_STEALTH                                  | 16 |
|SPELL_AURA_MOD_STEALTH_DETECT                           | 17 |
|SPELL_AURA_MOD_INVISIBILITY                             | 18 |
|SPELL_AURA_MOD_INVISIBILITY_DETECT                      | 19 |
|SPELL_AURA_OBS_MOD_HEALTH                               | 20 |
|SPELL_AURA_OBS_MOD_POWER                                | 21 |
|SPELL_AURA_MOD_RESISTANCE                               | 22 |
|SPELL_AURA_PERIODIC_TRIGGER_SPELL                       | 23 |
|SPELL_AURA_PERIODIC_ENERGIZE                            | 24 |
|SPELL_AURA_MOD_PACIFY                                   | 25 |
|SPELL_AURA_MOD_ROOT                                     | 26 |
|SPELL_AURA_MOD_SILENCE                                  | 27 |
|SPELL_AURA_REFLECT_SPELLS                               | 28 |
|SPELL_AURA_MOD_STAT                                     | 29 |
|SPELL_AURA_MOD_SKILL                                    | 30 |
|SPELL_AURA_MOD_INCREASE_SPEED                           | 31 |
|SPELL_AURA_MOD_INCREASE_MOUNTED_SPEED                   | 32 |
|SPELL_AURA_MOD_DECREASE_SPEED                           | 33 |
|SPELL_AURA_MOD_INCREASE_HEALTH                          | 34 |
|SPELL_AURA_MOD_INCREASE_ENERGY                          | 35 |
|SPELL_AURA_MOD_SHAPESHIFT                               | 36 |
|SPELL_AURA_EFFECT_IMMUNITY                              | 37 |
|SPELL_AURA_STATE_IMMUNITY                               | 38 |
|SPELL_AURA_SCHOOL_IMMUNITY                              | 39 |
|SPELL_AURA_DAMAGE_IMMUNITY                              | 40 |
|SPELL_AURA_DISPEL_IMMUNITY                              | 41 |
|SPELL_AURA_PROC_TRIGGER_SPELL                           | 42 |
|SPELL_AURA_PROC_TRIGGER_DAMAGE                          | 43 |
|SPELL_AURA_TRACK_CREATURES                              | 44 |
|SPELL_AURA_TRACK_RESOURCES                              | 45 |
|SPELL_AURA_46                                           | 46 |
|SPELL_AURA_MOD_PARRY_PERCENT                            | 47 |
|SPELL_AURA_PERIODIC_TRIGGER_SPELL_FROM_CLIENT           | 48 |
|SPELL_AURA_MOD_DODGE_PERCENT                            | 49 |
|SPELL_AURA_MOD_CRITICAL_HEALING_AMOUNT                  | 50 |
|SPELL_AURA_MOD_BLOCK_PERCENT                            | 51 |
|SPELL_AURA_MOD_WEAPON_CRIT_PERCENT                      | 52 |
|SPELL_AURA_PERIODIC_LEECH                               | 53 |
|SPELL_AURA_MOD_HIT_CHANCE                               | 54 |
|SPELL_AURA_MOD_SPELL_HIT_CHANCE                         | 55 |
|SPELL_AURA_TRANSFORM                                    | 56 |
|SPELL_AURA_MOD_SPELL_CRIT_CHANCE                        | 57 |
|SPELL_AURA_MOD_INCREASE_SWIM_SPEED                      | 58 |
|SPELL_AURA_MOD_DAMAGE_DONE_CREATURE                     | 59 |
|SPELL_AURA_MOD_PACIFY_SILENCE                           | 60 |
|SPELL_AURA_MOD_SCALE                                    | 61 |
|SPELL_AURA_PERIODIC_HEALTH_FUNNEL                       | 62 |
|SPELL_AURA_MOD_ADDITIONAL_POWER_COST                    | 63 |
|SPELL_AURA_PERIODIC_MANA_LEECH                          | 64 |
|SPELL_AURA_MOD_CASTING_SPEED_NOT_STACK                  | 65 |
|SPELL_AURA_FEIGN_DEATH                                  | 66 |
|SPELL_AURA_MOD_DISARM                                   | 67 |
|SPELL_AURA_MOD_STALKED                                  | 68 |
|SPELL_AURA_SCHOOL_ABSORB                                | 69 |
|SPELL_AURA_PERIODIC_WEAPON_PERCENT_DAMAGE               | 70 |
|SPELL_AURA_STORE_TELEPORT_RETURN_POINT                  | 71 |
|SPELL_AURA_MOD_POWER_COST_SCHOOL_PCT                    | 72 |
|SPELL_AURA_MOD_POWER_COST_SCHOOL                        | 73 |
|SPELL_AURA_REFLECT_SPELLS_SCHOOL                        | 74 |
|SPELL_AURA_MOD_LANGUAGE                                 | 75 |
|SPELL_AURA_FAR_SIGHT                                    | 76 |
|SPELL_AURA_MECHANIC_IMMUNITY                            | 77 |
|SPELL_AURA_MOUNTED                                      | 78 |
|SPELL_AURA_MOD_DAMAGE_PERCENT_DONE                      | 79 |
|SPELL_AURA_MOD_PERCENT_STAT                             | 80 |
|SPELL_AURA_SPLIT_DAMAGE_PCT                             | 81 |
|SPELL_AURA_WATER_BREATHING                              | 82 |
|SPELL_AURA_MOD_BASE_RESISTANCE                          | 83 |
|SPELL_AURA_MOD_REGEN                                    | 84 |
|SPELL_AURA_MOD_POWER_REGEN                              | 85 |
|SPELL_AURA_CHANNEL_DEATH_ITEM                           | 86 |
|SPELL_AURA_MOD_DAMAGE_PERCENT_TAKEN                     | 87 |
|SPELL_AURA_MOD_HEALTH_REGEN_PERCENT                     | 88 |
|SPELL_AURA_PERIODIC_DAMAGE_PERCENT                      | 89 |
|SPELL_AURA_90                                           | 90 |
|SPELL_AURA_MOD_DETECT_RANGE                             | 91 |
|SPELL_AURA_PREVENTS_FLEEING                             | 92 |
|SPELL_AURA_MOD_UNATTACKABLE                             | 93 |
|SPELL_AURA_INTERRUPT_REGEN                              | 94 |
|SPELL_AURA_GHOST                                        | 95 |
|SPELL_AURA_SPELL_MAGNET                                 | 96 |
|SPELL_AURA_MANA_SHIELD                                  | 97 |
|SPELL_AURA_MOD_SKILL_TALENT                             | 98 |
|SPELL_AURA_MOD_ATTACK_POWER                             | 99 |
|SPELL_AURA_AURAS_VISIBLE                                | 100 |
|SPELL_AURA_MOD_RESISTANCE_PCT                           | 101 |
|SPELL_AURA_MOD_MELEE_ATTACK_POWER_VERSUS                | 102 |
|SPELL_AURA_MOD_TOTAL_THREAT                             | 103 |
|SPELL_AURA_WATER_WALK                                   | 104 |
|SPELL_AURA_FEATHER_FALL                                 | 105 |
|SPELL_AURA_HOVER                                        | 106 |
|SPELL_AURA_ADD_FLAT_MODIFIER                            | 107 |
|SPELL_AURA_ADD_PCT_MODIFIER                             | 108 |
|SPELL_AURA_ADD_TARGET_TRIGGER                           | 109 |
|SPELL_AURA_MOD_POWER_REGEN_PERCENT                      | 110 |
|SPELL_AURA_INTERCEPT_MELEE_RANGED_ATTACKS               | 111 |
|SPELL_AURA_OVERRIDE_CLASS_SCRIPTS                       | 112 |
|SPELL_AURA_MOD_RANGED_DAMAGE_TAKEN                      | 113 |
|SPELL_AURA_MOD_RANGED_DAMAGE_TAKEN_PCT                  | 114 |
|SPELL_AURA_MOD_HEALING                                  | 115 |
|SPELL_AURA_MOD_REGEN_DURING_COMBAT                      | 116 |
|SPELL_AURA_MOD_MECHANIC_RESISTANCE                      | 117 |
|SPELL_AURA_MOD_HEALING_PCT                              | 118 |
|SPELL_AURA_PVP_TALENTS                                  | 119 |
|SPELL_AURA_UNTRACKABLE                                  | 120 |
|SPELL_AURA_EMPATHY                                      | 121 |
|SPELL_AURA_MOD_OFFHAND_DAMAGE_PCT                       | 122 |
|SPELL_AURA_MOD_TARGET_RESISTANCE                        | 123 |
|SPELL_AURA_MOD_RANGED_ATTACK_POWER                      | 124 |
|SPELL_AURA_MOD_MELEE_DAMAGE_TAKEN                       | 125 |
|SPELL_AURA_MOD_MELEE_DAMAGE_TAKEN_PCT                   | 126 |
|SPELL_AURA_RANGED_ATTACK_POWER_ATTACKER_BONUS           | 127 |
|SPELL_AURA_MOD_FIXATE                                   | 128 |
|SPELL_AURA_MOD_SPEED_ALWAYS                             | 129 |
|SPELL_AURA_MOD_MOUNTED_SPEED_ALWAYS                     | 130 |
|SPELL_AURA_MOD_RANGED_ATTACK_POWER_VERSUS               | 131 |
|SPELL_AURA_MOD_INCREASE_ENERGY_PERCENT                  | 132 |
|SPELL_AURA_MOD_INCREASE_HEALTH_PERCENT                  | 133 |
|SPELL_AURA_MOD_MANA_REGEN_INTERRUPT                     | 134 |
|SPELL_AURA_MOD_HEALING_DONE                             | 135 |
|SPELL_AURA_MOD_HEALING_DONE_PERCENT                     | 136 |
|SPELL_AURA_MOD_TOTAL_STAT_PERCENTAGE                    | 137 |
|SPELL_AURA_MOD_MELEE_HASTE                              | 138 |
|SPELL_AURA_FORCE_REACTION                               | 139 |
|SPELL_AURA_MOD_RANGED_HASTE                             | 140 |
|SPELL_AURA_141                                          | 141 |
|SPELL_AURA_MOD_BASE_RESISTANCE_PCT                      | 142 |
|SPELL_AURA_MOD_RECOVERY_RATE_BY_SPELL_LABEL             | 143 |
|SPELL_AURA_SAFE_FALL                                    | 144 |
|SPELL_AURA_MOD_INCREASE_HEALTH_PERCENT2                 | 145 |
|SPELL_AURA_ALLOW_TAME_PET_TYPE                          | 146 |
|SPELL_AURA_MECHANIC_IMMUNITY_MASK                       | 147 |
|SPELL_AURA_MOD_CHARGE_RECOVERY_RATE                     | 148 |
|SPELL_AURA_REDUCE_PUSHBACK                              | 149 |
|SPELL_AURA_MOD_SHIELD_BLOCKVALUE_PCT                    | 150 |
|SPELL_AURA_TRACK_STEALTHED                              | 151 |
|SPELL_AURA_MOD_DETECTED_RANGE                           | 152 |
|SPELL_AURA_MOD_AUTOATTACK_RANGE                         | 153 |
|SPELL_AURA_MOD_STEALTH_LEVEL                            | 154 |
|SPELL_AURA_MOD_WATER_BREATHING                          | 155 |
|SPELL_AURA_MOD_REPUTATION_GAIN                          | 156 |
|SPELL_AURA_PET_DAMAGE_MULTI                             | 157 |
|SPELL_AURA_ALLOW_TALENT_SWAPPING                        | 158 |
|SPELL_AURA_NO_PVP_CREDIT                                | 159 |
|SPELL_AURA_160                                          | 160 |
|SPELL_AURA_MOD_HEALTH_REGEN_IN_COMBAT                   | 161 |
|SPELL_AURA_POWER_BURN                                   | 162 |
|SPELL_AURA_MOD_CRIT_DAMAGE_BONUS                        | 163 |
|SPELL_AURA_FORCE_BREATH_BAR                             | 164 |
|SPELL_AURA_MELEE_ATTACK_POWER_ATTACKER_BONUS            | 165 |
|SPELL_AURA_MOD_ATTACK_POWER_PCT                         | 166 |
|SPELL_AURA_MOD_RANGED_ATTACK_POWER_PCT                  | 167 |
|SPELL_AURA_MOD_DAMAGE_DONE_VERSUS                       | 168 |
|SPELL_AURA_SET_FFA_PVP                                  | 169 |
|SPELL_AURA_DETECT_AMORE                                 | 170 |
|SPELL_AURA_MOD_SPEED_NOT_STACK                          | 171 |
|SPELL_AURA_MOD_MOUNTED_SPEED_NOT_STACK                  | 172 |
|SPELL_AURA_MOD_RECOVERY_RATE_2                          | 173 |
|SPELL_AURA_MOD_SPELL_DAMAGE_OF_STAT_PERCENT             | 174 |
|SPELL_AURA_MOD_SPELL_HEALING_OF_STAT_PERCENT            | 175 |
|SPELL_AURA_SPIRIT_OF_REDEMPTION                         | 176 |
|SPELL_AURA_AOE_CHARM                                    | 177 |
|SPELL_AURA_MOD_MAX_POWER_PCT                            | 178 |
|SPELL_AURA_MOD_POWER_DISPLAY                            | 179 |
|SPELL_AURA_MOD_FLAT_SPELL_DAMAGE_VERSUS                 | 180 |
|SPELL_AURA_MOD_SPELL_CURRENCY_REAGENTS_COUNT_PCT        | 181 |
|SPELL_AURA_SUPPRESS_ITEM_PASSIVE_EFFECT_BY_SPELL_LABEL  | 182 |
|SPELL_AURA_MOD_CRIT_CHANCE_VERSUS_TARGET_HEALTH         | 183 |
|SPELL_AURA_MOD_ATTACKER_MELEE_HIT_CHANCE                | 184 |
|SPELL_AURA_MOD_ATTACKER_RANGED_HIT_CHANCE               | 185 |
|SPELL_AURA_MOD_ATTACKER_SPELL_HIT_CHANCE                | 186 |
|SPELL_AURA_MOD_ATTACKER_MELEE_CRIT_CHANCE               | 187 |
|SPELL_AURA_MOD_UI_HEALING_RANGE                         | 188 |
|SPELL_AURA_MOD_RATING                                   | 189 |
|SPELL_AURA_MOD_FACTION_REPUTATION_GAIN                  | 190 |
|SPELL_AURA_USE_NORMAL_MOVEMENT_SPEED                    | 191 |
|SPELL_AURA_MOD_MELEE_RANGED_HASTE                       | 192 |
|SPELL_AURA_MELEE_SLOW                                   | 193 |
|SPELL_AURA_MOD_TARGET_ABSORB_SCHOOL                     | 194 |
|SPELL_AURA_LEARN_SPELL                                  | 195 |
|SPELL_AURA_MOD_COOLDOWN                                 | 196 |
|SPELL_AURA_MOD_ATTACKER_SPELL_AND_WEAPON_CRIT_CHANCE    | 197 |
|SPELL_AURA_MOD_COMBAT_RATING_FROM_COMBAT_RATING         | 198 |
|SPELL_AURA_199                                          | 199 |
|SPELL_AURA_MOD_XP_PCT                                   | 200 |
|SPELL_AURA_FLY                                          | 201 |
|SPELL_AURA_IGNORE_COMBAT_RESULT                         | 202 |
|SPELL_AURA_PREVENT_INTERRUPT                            | 203 |
|SPELL_AURA_PREVENT_CORPSE_RELEASE                       | 204 |
|SPELL_AURA_MOD_CHARGE_COOLDOWN                          | 205 |
|SPELL_AURA_MOD_INCREASE_VEHICLE_FLIGHT_SPEED            | 206 |
|SPELL_AURA_MOD_INCREASE_MOUNTED_FLIGHT_SPEED            | 207 |
|SPELL_AURA_MOD_INCREASE_FLIGHT_SPEED                    | 208 |
|SPELL_AURA_MOD_MOUNTED_FLIGHT_SPEED_ALWAYS              | 209 |
|SPELL_AURA_MOD_VEHICLE_SPEED_ALWAYS                     | 210 |
|SPELL_AURA_MOD_FLIGHT_SPEED_NOT_STACK                   | 211 |
|SPELL_AURA_MOD_HONOR_GAIN_PCT                           | 212 |
|SPELL_AURA_MOD_RAGE_FROM_DAMAGE_DEALT                   | 213 |
|SPELL_AURA_214                                          | 214 |
|SPELL_AURA_ARENA_PREPARATION                            | 215 |
|SPELL_AURA_HASTE_SPELLS                                 | 216 |
|SPELL_AURA_MOD_MELEE_HASTE_2                            | 217 |
|SPELL_AURA_ADD_PCT_MODIFIER_BY_SPELL_LABEL              | 218 |
|SPELL_AURA_ADD_FLAT_MODIFIER_BY_SPELL_LABEL             | 219 |
|SPELL_AURA_MOD_ABILITY_SCHOOL_MASK                      | 220 |
|SPELL_AURA_MOD_DETAUNT                                  | 221 |
|SPELL_AURA_REMOVE_TRANSMOG_COST                         | 222 |
|SPELL_AURA_REMOVE_BARBER_SHOP_COST                      | 223 |
|SPELL_AURA_LEARN_TALENT                                 | 224 |
|SPELL_AURA_MOD_VISIBILITY_RANGE                         | 225 |
|SPELL_AURA_PERIODIC_DUMMY                               | 226 |
|SPELL_AURA_PERIODIC_TRIGGER_SPELL_WITH_VALUE            | 227 |
|SPELL_AURA_DETECT_STEALTH                               | 228 |
|SPELL_AURA_MOD_AOE_DAMAGE_AVOIDANCE                     | 229 |
|SPELL_AURA_MOD_MAX_HEALTH                               | 230 |
|SPELL_AURA_PROC_TRIGGER_SPELL_WITH_VALUE                | 231 |
|SPELL_AURA_MECHANIC_DURATION_MOD                        | 232 |
|SPELL_AURA_CHANGE_MODEL_FOR_ALL_HUMANOIDS               | 233 |
|SPELL_AURA_MECHANIC_DURATION_MOD_NOT_STACK              | 234 |
|SPELL_AURA_MOD_HOVER_NO_HEIGHT_OFFSET                   | 235 |
|SPELL_AURA_CONTROL_VEHICLE                              | 236 |
|SPELL_AURA_237                                          | 237 |
|SPELL_AURA_238                                          | 238 |
|SPELL_AURA_MOD_SCALE_2                                  | 239 |
|SPELL_AURA_MOD_EXPERTISE                                | 240 |
|SPELL_AURA_FORCE_MOVE_FORWARD                           | 241 |
|SPELL_AURA_MOD_SPELL_DAMAGE_FROM_HEALING                | 242 |
|SPELL_AURA_MOD_FACTION                                  | 243 |
|SPELL_AURA_COMPREHEND_LANGUAGE                          | 244 |
|SPELL_AURA_MOD_AURA_DURATION_BY_DISPEL                  | 245 |
|SPELL_AURA_MOD_AURA_DURATION_BY_DISPEL_NOT_STACK        | 246 |
|SPELL_AURA_CLONE_CASTER                                 | 247 |
|SPELL_AURA_MOD_COMBAT_RESULT_CHANCE                     | 248 |
|SPELL_AURA_MOD_DAMAGE_PERCENT_DONE_BY_TARGET_AURA_MECHANIC | 249 |
|SPELL_AURA_MOD_INCREASE_HEALTH_2                        | 250 |
|SPELL_AURA_MOD_ENEMY_DODGE                              | 251 |
|SPELL_AURA_MOD_SPEED_SLOW_ALL                           | 252 |
|SPELL_AURA_MOD_BLOCK_CRIT_CHANCE                        | 253 |
|SPELL_AURA_MOD_DISARM_OFFHAND                           | 254 |
|SPELL_AURA_MOD_MECHANIC_DAMAGE_TAKEN_PERCENT            | 255 |
|SPELL_AURA_NO_REAGENT_USE                               | 256 |
|SPELL_AURA_MOD_TARGET_RESIST_BY_SPELL_CLASS             | 257 |
|SPELL_AURA_OVERRIDE_SUMMONED_OBJECT                     | 258 |
|SPELL_AURA_MOD_HOT_PCT                                  | 259 |
|SPELL_AURA_SCREEN_EFFECT                                | 260 |
|SPELL_AURA_PHASE                                        | 261 |
|SPELL_AURA_ABILITY_IGNORE_AURASTATE                     | 262 |
|SPELL_AURA_DISABLE_CASTING_EXCEPT_ABILITIES             | 263 |
|SPELL_AURA_DISABLE_ATTACKING_EXCEPT_ABILITIES           | 264 |
|SPELL_AURA_265                                          | 265 |
|SPELL_AURA_SET_VIGNETTE                                 | 266 |
|SPELL_AURA_MOD_IMMUNE_AURA_APPLY_SCHOOL                 | 267 |
|SPELL_AURA_MOD_ARMOR_PCT_FROM_STAT                      | 268 |
|SPELL_AURA_MOD_IGNORE_TARGET_RESIST                     | 269 |
|SPELL_AURA_MOD_SCHOOL_MASK_DAMAGE_FROM_CASTER           | 270 |
|SPELL_AURA_MOD_SPELL_DAMAGE_FROM_CASTER                 | 271 |
|SPELL_AURA_MOD_BLOCK_VALUE_PCT                          | 272 |
|SPELL_AURA_X_RAY                                        | 273 |
|SPELL_AURA_MOD_BLOCK_VALUE_FLAT                         | 274 |
|SPELL_AURA_MOD_IGNORE_SHAPESHIFT                        | 275 |
|SPELL_AURA_MOD_DAMAGE_DONE_FOR_MECHANIC                 | 276 |
|SPELL_AURA_277                                          | 277 |
|SPELL_AURA_MOD_DISARM_RANGED                            | 278 |
|SPELL_AURA_INITIALIZE_IMAGES                            | 279 |
|SPELL_AURA_280                                          | 280 |
|SPELL_AURA_PROVIDE_SPELL_FOCUS                          | 281 |
|SPELL_AURA_MOD_BASE_HEALTH_PCT                          | 282 |
|SPELL_AURA_MOD_HEALING_RECEIVED                         | 283 |
|SPELL_AURA_LINKED                                       | 284 |
|SPELL_AURA_LINKED_2                                     | 285 |
|SPELL_AURA_MOD_RECOVERY_RATE                            | 286 |
|SPELL_AURA_DEFLECT_SPELLS                               | 287 |
|SPELL_AURA_IGNORE_HIT_DIRECTION                         | 288 |
|SPELL_AURA_PREVENT_DURABILITY_LOSS                      | 289 |
|SPELL_AURA_MOD_CRIT_PCT                                 | 290 |
|SPELL_AURA_MOD_XP_QUEST_PCT                             | 291 |
|SPELL_AURA_OPEN_STABLE                                  | 292 |
|SPELL_AURA_OVERRIDE_SPELLS                              | 293 |
|SPELL_AURA_PREVENT_REGENERATE_POWER                     | 294 |
|SPELL_AURA_MOD_PERIODIC_DAMAGE_TAKEN                    | 295 |
|SPELL_AURA_SET_VEHICLE_ID                               | 296 |
|SPELL_AURA_MOD_ROOT_DISABLE_GRAVITY                     | 297 |
|SPELL_AURA_MOD_STUN_DISABLE_GRAVITY                     | 298 |
|SPELL_AURA_299                                          | 299 |
|SPELL_AURA_SHARE_DAMAGE_PCT                             | 300 |
|SPELL_AURA_SCHOOL_HEAL_ABSORB                           | 301 |
|SPELL_AURA_302                                          | 302 |
|SPELL_AURA_MOD_DAMAGE_DONE_VERSUS_AURASTATE             | 303 |
|SPELL_AURA_MOD_FAKE_INEBRIATE                           | 304 |
|SPELL_AURA_MOD_MINIMUM_SPEED                            | 305 |
|SPELL_AURA_MOD_CRIT_CHANCE_FOR_CASTER                   | 306 |
|SPELL_AURA_CAST_WHILE_WALKING_BY_SPELL_LABEL            | 307 |
|SPELL_AURA_MOD_CRIT_CHANCE_FOR_CASTER_WITH_ABILITIES    | 308 |
|SPELL_AURA_MOD_RESILIENCE                               | 309 |
|SPELL_AURA_MOD_CREATURE_AOE_DAMAGE_AVOIDANCE            | 310 |
|SPELL_AURA_IGNORE_COMBAT                                | 311 |
|SPELL_AURA_ANIM_REPLACEMENT_SET                         | 312 |
|SPELL_AURA_MOUNT_ANIM_REPLACEMENT_SET                   | 313 |
|SPELL_AURA_PREVENT_RESURRECTION                         | 314 |
|SPELL_AURA_UNDERWATER_WALKING                           | 315 |
|SPELL_AURA_SCHOOL_ABSORB_OVERKILL                       | 316 |
|SPELL_AURA_MOD_SPELL_POWER_PCT                          | 317 |
|SPELL_AURA_MASTERY                                      | 318 |
|SPELL_AURA_MOD_MELEE_HASTE_3                            | 319 |
|SPELL_AURA_320                                          | 320 |
|SPELL_AURA_MOD_NO_ACTIONS                               | 321 |
|SPELL_AURA_INTERFERE_TARGETTING                         | 322 |
|SPELL_AURA_323                                          | 323 |
|SPELL_AURA_OVERRIDE_UNLOCKED_AZERITE_ESSENCE_RANK       | 324 |
|SPELL_AURA_LEARN_PVP_TALENT                             | 325 |
|SPELL_AURA_PHASE_GROUP                                  | 326 |
|SPELL_AURA_PHASE_ALWAYS_VISIBLE                         | 327 |
|SPELL_AURA_TRIGGER_SPELL_ON_POWER_PCT                   | 328 |
|SPELL_AURA_MOD_POWER_GAIN_PCT                           | 329 |
|SPELL_AURA_CAST_WHILE_WALKING                           | 330 |
|SPELL_AURA_FORCE_WEATHER                                | 331 |
|SPELL_AURA_OVERRIDE_ACTIONBAR_SPELLS                    | 332 |
|SPELL_AURA_OVERRIDE_ACTIONBAR_SPELLS_TRIGGERED          | 333 |
|SPELL_AURA_MOD_AUTOATTACK_CRIT_CHANCE                   | 334 |
|SPELL_AURA_335                                          | 335 |
|SPELL_AURA_MOUNT_RESTRICTIONS                           | 336 |
|SPELL_AURA_MOD_VENDOR_ITEMS_PRICES                      | 337 |
|SPELL_AURA_MOD_DURABILITY_LOSS                          | 338 |
|SPELL_AURA_MOD_CRIT_CHANCE_FOR_CASTER_PET               | 339 |
|SPELL_AURA_MOD_RESURRECTED_HEALTH_BY_GUILD_MEMBER       | 340 |
|SPELL_AURA_MOD_SPELL_CATEGORY_COOLDOWN                  | 341 |
|SPELL_AURA_MOD_MELEE_RANGED_HASTE_2                     | 342 |
|SPELL_AURA_MOD_MELEE_DAMAGE_FROM_CASTER                 | 343 |
|SPELL_AURA_MOD_AUTOATTACK_DAMAGE                        | 344 |
|SPELL_AURA_BYPASS_ARMOR_FOR_CASTER                      | 345 |
|SPELL_AURA_ENABLE_ALT_POWER                             | 346 |
|SPELL_AURA_MOD_SPELL_COOLDOWN_BY_HASTE                  | 347 |
|SPELL_AURA_MOD_MONEY_GAIN                               | 348 |
|SPELL_AURA_MOD_CURRENCY_GAIN                            | 349 |
|SPELL_AURA_350                                          | 350 |
|SPELL_AURA_MOD_CURRENCY_CATEGORY_GAIN_PCT               | 351 |
|SPELL_AURA_352                                          | 352 |
|SPELL_AURA_MOD_CAMOUFLAGE                               | 353 |
|SPELL_AURA_MOD_HEALING_DONE_PCT_VERSUS_TARGET_HEALTH    | 354 |
|SPELL_AURA_MOD_CASTING_SPEED                            | 355 |
|SPELL_AURA_PROVIDE_TOTEM_CATEGORY                       | 356 |
|SPELL_AURA_ENABLE_BOSS1_UNIT_FRAME                      | 357 |
|SPELL_AURA_WORGEN_ALTERED_FORM                          | 358 |
|SPELL_AURA_MOD_HEALING_DONE_VERSUS_AURASTATE            | 359 |
|SPELL_AURA_PROC_TRIGGER_SPELL_COPY                      | 360 |
|SPELL_AURA_OVERRIDE_AUTOATTACK_WITH_MELEE_SPELL         | 361 |
|SPELL_AURA_362                                          | 362 |
|SPELL_AURA_MOD_NEXT_SPELL                               | 363 |
|SPELL_AURA_364                                          | 364 |
|SPELL_AURA_MAX_FAR_CLIP_PLANE                           | 365 |
|SPELL_AURA_OVERRIDE_SPELL_POWER_BY_AP_PCT               | 366 |
|SPELL_AURA_OVERRIDE_AUTOATTACK_WITH_RANGED_SPELL        | 367 |
|SPELL_AURA_368                                          | 368 |
|SPELL_AURA_ENABLE_POWER_BAR_TIMER                       | 369 |
|SPELL_AURA_SPELL_OVERRIDE_NAME_GROUP                    | 370 |
|SPELL_AURA_371                                          | 371 |
|SPELL_AURA_OVERRIDE_MOUNT_FROM_SET                      | 372 |
|SPELL_AURA_MOD_SPEED_NO_CONTROL                         | 373 |
|SPELL_AURA_MODIFY_FALL_DAMAGE_PCT                       | 374 |
|SPELL_AURA_HIDE_MODEL_AND_EQUIPEMENT_SLOTS              | 375 |
|SPELL_AURA_MOD_CURRENCY_GAIN_FROM_SOURCE                | 376 |
|SPELL_AURA_CAST_WHILE_WALKING_ALL                       | 377 |
|SPELL_AURA_MOD_POSSESS_PET                              | 378 |
|SPELL_AURA_MOD_MANA_REGEN_PCT                           | 379 |
|SPELL_AURA_380                                          | 380 |
|SPELL_AURA_MOD_DAMAGE_TAKEN_FROM_CASTER_PET             | 381 |
|SPELL_AURA_MOD_PET_STAT_PCT                             | 382 |
|SPELL_AURA_IGNORE_SPELL_COOLDOWN                        | 383 |
|SPELL_AURA_384                                          | 384 |
|SPELL_AURA_385                                          | 385 |
|SPELL_AURA_386                                          | 386 |
|SPELL_AURA_387                                          | 387 |
|SPELL_AURA_MOD_TAXI_FLIGHT_SPEED                        | 388 |
|SPELL_AURA_389                                          | 389 |
|SPELL_AURA_390                                          | 390 |
|SPELL_AURA_391                                          | 391 |
|SPELL_AURA_392                                          | 392 |
|SPELL_AURA_BLOCK_SPELLS_IN_FRONT                        | 393 |
|SPELL_AURA_SHOW_CONFIRMATION_PROMPT                     | 394 |
|SPELL_AURA_AREA_TRIGGER                                 | 395 |
|SPELL_AURA_TRIGGER_SPELL_ON_POWER_AMOUNT                | 396 |
|SPELL_AURA_BATTLEGROUND_PLAYER_POSITION_FACTIONAL       | 397 |
|SPELL_AURA_BATTLEGROUND_PLAYER_POSITION                 | 398 |
|SPELL_AURA_MOD_TIME_RATE                                | 399 |
|SPELL_AURA_MOD_SKILL_2                                  | 400 |
|SPELL_AURA_401                                          | 401 |
|SPELL_AURA_MOD_OVERRIDE_POWER_DISPLAY                   | 402 |
|SPELL_AURA_OVERRIDE_SPELL_VISUAL                        | 403 |
|SPELL_AURA_OVERRIDE_ATTACK_POWER_BY_SP_PCT              | 404 |
|SPELL_AURA_MOD_RATING_PCT                               | 405 |
|SPELL_AURA_KEYBOUND_OVERRIDE                            | 406 |
|SPELL_AURA_MOD_FEAR_2                                   | 407 |
|SPELL_AURA_SET_ACTION_BUTTON_SPELL_COUNT                | 408 |
|SPELL_AURA_CAN_TURN_WHILE_FALLING                       | 409 |
|SPELL_AURA_410                                          | 410 |
|SPELL_AURA_MOD_MAX_CHARGES                              | 411 |
|SPELL_AURA_412                                          | 412 |
|SPELL_AURA_MOD_RANGED_ATTACK_DEFLECT_CHANCE             | 413 |
|SPELL_AURA_MOD_RANGED_ATTACK_BLOCK_CHANCE_IN_FRONT      | 414 |
|SPELL_AURA_415                                          | 415 |
|SPELL_AURA_MOD_COOLDOWN_BY_HASTE_REGEN                  | 416 |
|SPELL_AURA_MOD_GLOBAL_COOLDOWN_BY_HASTE_REGEN           | 417 |
|SPELL_AURA_MOD_MAX_POWER                                | 418 |
|SPELL_AURA_MOD_BASE_MANA_PCT                            | 419 |
|SPELL_AURA_MOD_BATTLE_PET_XP_PCT                        | 420 |
|SPELL_AURA_MOD_ABSORB_EFFECTS_DONE_PCT                  | 421 |
|SPELL_AURA_MOD_ABSORB_EFFECTS_TAKEN_PCT                 | 422 |
|SPELL_AURA_MOD_MANA_COST_PCT                            | 423 |
|SPELL_AURA_CASTER_IGNORE_LOS                            | 424 |
|SPELL_AURA_425                                          | 425 |
|SPELL_AURA_426                                          | 426 |
|SPELL_AURA_SCALE_PLAYER_LEVEL                           | 427 |
|SPELL_AURA_LINKED_SUMMON                                | 428 |
|SPELL_AURA_MOD_SUMMON_DAMAGE                            | 429 |
|SPELL_AURA_PLAY_SCENE                                   | 430 |
|SPELL_AURA_MOD_OVERRIDE_ZONE_PVP_TYPE                   | 431 |
|SPELL_AURA_432                                          | 432 |
|SPELL_AURA_433                                          | 433 |
|SPELL_AURA_434                                          | 434 |
|SPELL_AURA_435                                          | 435 |
|SPELL_AURA_MOD_ENVIRONMENTAL_DAMAGE_TAKEN               | 436 |
|SPELL_AURA_MOD_MINIMUM_SPEED_RATE                       | 437 |
|SPELL_AURA_PRELOAD_PHASE                                | 438 |
|SPELL_AURA_439                                          | 439 |
|SPELL_AURA_MOD_MULTISTRIKE_DAMAGE                       | 440 |
|SPELL_AURA_MOD_MULTISTRIKE_CHANCE                       | 441 |
|SPELL_AURA_MOD_READINESS                                | 442 |
|SPELL_AURA_MOD_LEECH                                    | 443 |
|SPELL_AURA_444                                          | 444 |
|SPELL_AURA_445                                          | 445 |
|SPELL_AURA_446                                          | 446 |
|SPELL_AURA_MOD_XP_FROM_CREATURE_TYPE                    | 447 |
|SPELL_AURA_448                                          | 448 |
|SPELL_AURA_449                                          | 449 |
|SPELL_AURA_450                                          | 450 |
|SPELL_AURA_OVERRIDE_PET_SPECS                           | 451 |
|SPELL_AURA_452                                          | 452 |
|SPELL_AURA_CHARGE_RECOVERY_MOD                          | 453 |
|SPELL_AURA_CHARGE_RECOVERY_MULTIPLIER                   | 454 |
|SPELL_AURA_MOD_ROOT_2                                   | 455 |
|SPELL_AURA_CHARGE_RECOVERY_AFFECTED_BY_HASTE            | 456 |
|SPELL_AURA_CHARGE_RECOVERY_AFFECTED_BY_HASTE_REGEN      | 457 |
|SPELL_AURA_IGNORE_DUAL_WIELD_HIT_PENALTY                | 458 |
|SPELL_AURA_IGNORE_MOVEMENT_FORCES                       | 459 |
|SPELL_AURA_RESET_COOLDOWNS_ON_DUEL_START                | 460 |
|SPELL_AURA_461                                          | 461 |
|SPELL_AURA_MOD_HEALING_AND_ABSORB_FROM_CASTER           | 462 |
|SPELL_AURA_CONVERT_CRIT_RATING_PCT_TO_PARRY_RATING      | 463 |
|SPELL_AURA_MOD_ATTACK_POWER_OF_BONUS_ARMOR              | 464 |
|SPELL_AURA_MOD_BONUS_ARMOR                              | 465 |
|SPELL_AURA_MOD_BONUS_ARMOR_PCT                          | 466 |
|SPELL_AURA_MOD_STAT_BONUS_PCT                           | 467 |
|SPELL_AURA_TRIGGER_SPELL_ON_HEALTH_PCT                  | 468 |
|SPELL_AURA_SHOW_CONFIRMATION_PROMPT_WITH_DIFFICULTY     | 469 |
|SPELL_AURA_MOD_AURA_TIME_RATE_BY_SPELL_LABEL            | 470 |
|SPELL_AURA_MOD_VERSATILITY                              | 471 |
|SPELL_AURA_472                                          | 472 |
|SPELL_AURA_PREVENT_DURABILITY_LOSS_FROM_COMBAT          | 473 |
|SPELL_AURA_REPLACE_ITEM_BONUS_TREE                      | 474 |
|SPELL_AURA_ALLOW_USING_GAMEOBJECTS_WHILE_MOUNTED        | 475 |
|SPELL_AURA_MOD_CURRENCY_GAIN_LOOTED                     | 476 |
|SPELL_AURA_477                                          | 477 |
|SPELL_AURA_478                                          | 478 |
|SPELL_AURA_479                                          | 479 |
|SPELL_AURA_MOD_ARTIFACT_ITEM_LEVEL                      | 480 |
|SPELL_AURA_CONVERT_CONSUMED_RUNE                        | 481 |
|SPELL_AURA_482                                          | 482 |
|SPELL_AURA_SUPPRESS_TRANSFORMS                          | 483 |
|SPELL_AURA_ALLOW_INTERRUPT_SPELL                        | 484 |
|SPELL_AURA_MOD_MOVEMENT_FORCE_MAGNITUDE                 | 485 |
|SPELL_AURA_486                                          | 486 |
|SPELL_AURA_COSMETIC_MOUNTED                             | 487 |
|SPELL_AURA_488                                          | 488 |
|SPELL_AURA_MOD_ALTERNATIVE_DEFAULT_LANGUAGE             | 489 |
|SPELL_AURA_490                                          | 490 |
|SPELL_AURA_491                                          | 491 |
|SPELL_AURA_492                                          | 492 |
|SPELL_AURA_493                                          | 493 |
|SPELL_AURA_SET_POWER_POINT_CHARGE                       | 494 |
|SPELL_AURA_TRIGGER_SPELL_ON_EXPIRE                      | 495 |
|SPELL_AURA_ALLOW_CHANGING_EQUIPMENT_IN_TORGHAST         | 496 |
|SPELL_AURA_MOD_ANIMA_GAIN                               | 497 |
|SPELL_AURA_CURRENCY_LOSS_PCT_ON_DEATH                   | 498 |
|SPELL_AURA_MOD_RESTED_XP_CONSUMPTION                    | 499 |
|SPELL_AURA_IGNORE_SPELL_CHARGE_COOLDOWN                 | 500 |
|SPELL_AURA_MOD_CRITICAL_DAMAGE_TAKEN_FROM_CASTER        | 501 |
|SPELL_AURA_MOD_VERSATILITY_DAMAGE_DONE_BENEFIT          | 502 |
|SPELL_AURA_MOD_VERSATILITY_HEALING_DONE_BENEFIT         | 503 |
|SPELL_AURA_MOD_HEALING_TAKEN_FROM_CASTER                | 504 |
|SPELL_AURA_MOD_PLAYER_CHOICE_REROLLS                    | 505 |
|SPELL_AURA_DISABLE_INERTIA                              | 506 |
|SPELL_AURA_MOD_DAMAGE_TAKEN_FROM_CASTER_BY_LABEL        | 507 |
|SPELL_AURA_508                                          | 508 |
|SPELL_AURA_509                                          | 509 |
|SPELL_AURA_MODIFIED_RAID_INSTANCE                       | 510 |
|SPELL_AURA_APPLY_PROFESSION_EFFECT                      | 511 |
|SPELL_AURA_512                                          | 512 |
|SPELL_AURA_513                                          | 513 |
|SPELL_AURA_514                                          | 514 |
|SPELL_AURA_515                                          | 515 |
|SPELL_AURA_516                                          | 516 |
|SPELL_AURA_517                                          | 517 |
|SPELL_AURA_518                                          | 518 |
|SPELL_AURA_MOD_COOLDOWN_RECOVERY_RATE_ALL               | 519 |
|SPELL_AURA_520                                          | 520 |
|SPELL_AURA_521                                          | 521 |
|SPELL_AURA_522                                          | 522 |
|SPELL_AURA_523                                          | 523 |
|SPELL_AURA_524                                          | 524 |
|SPELL_AURA_DISPLAY_PROFESSION_EQUIPMENT                 | 525 |
|SPELL_AURA_526                                          | 526 |
|SPELL_AURA_527                                          | 527 |
|SPELL_AURA_ALLOW_BLOCKING_SPELLS                        | 528 |
|SPELL_AURA_MOD_SPELL_BLOCK_CHANCE                       | 529 |
|SPELL_AURA_530                                          | 530 |
|SPELL_AURA_531                                          | 531 |
|SPELL_AURA_532                                          | 532 |
|SPELL_AURA_DISABLE_NAVIGATION                           | 533 |
|SPELL_AURA_534                                          | 534 |
|SPELL_AURA_535                                          | 535 |
|SPELL_AURA_IGNORE_SPELL_CREATURE_TYPE_REQUIREMENTS      | 536 |
|SPELL_AURA_537                                          | 537 |
|SPELL_AURA_MOD_FAKE_INEBRIATION_MOVEMENT_ONLY           | 538 |
|SPELL_AURA_ALLOW_MOUNT_IN_COMBAT                        | 539 |
|SPELL_AURA_MOD_SUPPORT_STAT                             | 540 |
|SPELL_AURA_MOD_REQUIRED_MOUNT_CAPABILITY_FLAGS          | 541 |
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

