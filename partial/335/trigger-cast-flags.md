[`enum TriggerCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/d7329e3d3a713404d8ecbd91ae5f988fd143b793/src/server/game/Spells/SpellDefines.h#L147-L175)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x00000001 | TRIGGERED_IGNORE_GCD | Will ignore GCD |
| 2 | 0x00000002 | TRIGGERED_IGNORE_SPELL_AND_CATEGORY_CD | Will ignore Spell and Category cooldowns |
| 4 | 0x00000004 | TRIGGERED_IGNORE_POWER_AND_REAGENT_COST | Will ignore power and reagent cost |
| 8 | 0x00000008 | TRIGGERED_IGNORE_CAST_ITEM | Will not take away cast item or update related achievement criteria |
| 16 | 0x00000010 | TRIGGERED_IGNORE_AURA_SCALING | Will ignore aura scaling |
| 32 | 0x00000020 | TRIGGERED_IGNORE_CAST_IN_PROGRESS | Will not check if a current cast is in progress |
| 64 | 0x00000040 | TRIGGERED_IGNORE_COMBO_POINTS | Will ignore combo point requirement |
| 128 | 0x00000080 | TRIGGERED_CAST_DIRECTLY | In Spell::prepare, will be cast directly without setting containers for executed spell |
| 256 | 0x00000100 | TRIGGERED_IGNORE_AURA_INTERRUPT_FLAGS | Will ignore interruptible aura's at cast |
| 512 | 0x00000200 | TRIGGERED_IGNORE_SET_FACING | Will not adjust facing to target (if any) |
| 1024 | 0x00000400 | TRIGGERED_IGNORE_SHAPESHIFT | Will ignore shapeshift checks |
| 2048 | 0x00000800 | TRIGGERED_IGNORE_CASTER_AURASTATE | Will ignore caster aura states including combat requirements and death state |
| 4096 | 0x00001000 | TRIGGERED_DISALLOW_PROC_EVENTS | Disallows proc events from triggered spell (default) |
| 8192 | 0x00002000 | TRIGGERED_IGNORE_CASTER_MOUNTED_OR_ON_VEHICLE | Will ignore mounted/on vehicle restrictions |
| 65536 | 0x00010000 | TRIGGERED_IGNORE_CASTER_AURAS | Will ignore caster aura restrictions or requirements |
| 131072 | 0x00020000 | TRIGGERED_DONT_RESET_PERIODIC_TIMER | Will allow periodic aura timers to keep ticking (instead of resetting) |
| 262144 | 0x00040000 | TRIGGERED_DONT_REPORT_CAST_ERROR | Will return SPELL_FAILED_DONT_REPORT in CheckCast functions |
| 524288 | 0x00080000 | TRIGGERED_IGNORE_EQUIPPED_ITEM_REQUIREMENT | Will ignore equipped item requirements |
