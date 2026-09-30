
-- byte 0

[`enum SheathState`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Entities/Unit/UnitDefines.h#L96-L103)
| Value | Name | Comment |
| --- | --- | --- |
| 0 | SHEATH_STATE_UNARMED | non prepared weapon |
| 1 | SHEATH_STATE_MELEE | prepared melee weapon |
| 2 | SHEATH_STATE_RANGED | prepared ranged weapon |


-- byte 1

[`enum UnitPVPStateFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Entities/Unit/UnitDefines.h#L106-L117)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x01 | UNIT_BYTE2_FLAG_PVP |  |
| 2 | 0x02 | UNIT_BYTE2_FLAG_UNK1 |  |
| 4 | 0x04 | UNIT_BYTE2_FLAG_FFA_PVP |  |
| 8 | 0x08 | UNIT_BYTE2_FLAG_SANCTUARY |  |
| 16 | 0x10 | UNIT_BYTE2_FLAG_UNK4 |  |
| 32 | 0x20 | UNIT_BYTE2_FLAG_UNK5 |  |
| 64 | 0x40 | UNIT_BYTE2_FLAG_UNK6 |  |
| 128 | 0x80 | UNIT_BYTE2_FLAG_UNK7 |  |


-- byte 2

[`enum UnitPetFlag`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Entities/Unit/UnitDefines.h#L122-L127)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x01 | UNIT_PET_FLAG_CAN_BE_RENAMED |  |
| 2 | 0x02 | UNIT_PET_FLAG_CAN_BE_ABANDONED |  |
