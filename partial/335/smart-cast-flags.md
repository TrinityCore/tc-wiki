[`enum SmartCastFlags`](https://github.com/TrinityCore/TrinityCore/blob/d7329e3d3a713404d8ecbd91ae5f988fd143b793/src/server/game/AI/SmartScripts/SmartScriptMgr.h#L1565-L1574)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x01 | SMARTCAST_INTERRUPT_PREVIOUS |  Interrupt any spell casting |
| 2 | 0x02 | SMARTCAST_TRIGGERED |  Triggered (this makes spell cost zero mana and have no cast time) |
| 4 | 0x04 | :x: SMARTCAST_FORCE_CAST | Forces cast even if creature is out of mana or out of range |
| 8 | 0x08 | :x: SMARTCAST_NO_MELEE_IF_OOM | Prevents creature from entering melee if out of mana or out of range |
| 16 | 0x10 | :x: SMARTCAST_FORCE_TARGET_SELF | Forces the target to cast this spell on itself |
| 32 | 0x20 | SMARTCAST_AURA_NOT_PRESENT |  Only casts the spell if the target does not have an aura from the spell |
| 64 | 0x40 | SMARTCAST_COMBAT_MOVE |  Prevents combat movement if cast successful. Allows movement on range, OOM, LOS |
