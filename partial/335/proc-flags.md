[`enum ProcFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Spells/SpellMgr.h#L111-L188)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
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
|  |  |  |  |
| 204 | 0x000000CC | AUTO_ATTACK_PROC_FLAG_MASK | Any auto attack |
| 12582972 | 0x00C0003C | MELEE_PROC_FLAG_MASK | Any melee attack |
| 960 | 0x000003C0 | RANGED_PROC_FLAG_MASK | Any ranged attack |
| 3145712 | 0x002FFFF0 | SPELL_PROC_FLAG_MASK | Any spell attack |
| 15029588 | 0x00E55554 | DONE_HIT_PROC_FLAG_MASK | Any dealt attack |
| 1747624 | 0x001AAAA8 | TAKEN_HIT_PROC_FLAG_MASK | Any taken attack |
| 2446672 | 0x00255550 | REQ_SPELL_PHASE_PROC_FLAG_MASK |  |
