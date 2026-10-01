-- byte 0

[`enum UnitStandStateType`](https://github.com/TrinityCore/TrinityCore/blob/e490cad2b0cb538c554006a7a8842b39f7ca143e/src/server/game/Entities/Unit/UnitDefines.h#L32-L46)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 0 | UNIT_STAND_STATE_STAND |  |
| 1 | UNIT_STAND_STATE_SIT | Sitting |
| 2 | UNIT_STAND_STATE_SIT_CHAIR |  |
| 3 | UNIT_STAND_STATE_SLEEP | Sleep |
| 4 | UNIT_STAND_STATE_SIT_LOW_CHAIR |  |
| 5 | UNIT_STAND_STATE_SIT_MEDIUM_CHAIR |  |
| 6 | UNIT_STAND_STATE_SIT_HIGH_CHAIR |  |
| 7 | UNIT_STAND_STATE_DEAD | Shows health bar as empty (combine with the state dead emote to make a creature look dead) |
| 8 | UNIT_STAND_STATE_KNEEL | Makes the mob kneel |
| 9 | UNIT_STAND_STATE_SUBMERGED | Submerges the creature below the ground |


-- byte 2

[`enum UnitVisFlags`](https://github.com/TrinityCore/TrinityCore/blob/e490cad2b0cb538c554006a7a8842b39f7ca143e/src/server/game/Entities/Unit/UnitDefines.h#L49-L57)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 2 | 0x02 | UNIT_VIS_FLAGS_CREEP |  |
| 4 | 0x04 | UNIT_VIS_FLAGS_UNTRACKABLE |  |


-- byte 3

[`enum class AnimTier`](https://github.com/TrinityCore/TrinityCore/blob/e490cad2b0cb538c554006a7a8842b39f7ca143e/src/server/game/Entities/Unit/UnitDefines.h#L84-L93)
| Value | Name | Comment |
| --- | --- | --- |
| 0 | Ground | plays ground tier animations |
| 1 | Swim | falls back to ground tier animations, not handled by the client, should never appear in sniffs, will prevent tier change animations from playing correctly if used |
| 2 | Hover | plays flying tier animations or falls back to ground tier animations, automatically enables hover clientside when entering visibility with this value |
| 3 | Fly | plays flying tier animations |
| 4 | Submerged |   |
