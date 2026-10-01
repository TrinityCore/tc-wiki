[`enum ProcFlagsHit`](https://github.com/TrinityCore/TrinityCore/blob/e490cad2b0cb538c554006a7a8842b39f7ca143e/src/server/game/Spells/SpellMgr.h#L217-L235)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 0 | 0x0000 | PROC_HIT_NONE | procs on:<br>PROC_HIT_NORMAL \| PROC_HIT_CRITICAL for TAKEN proc type<br>PROC_HIT_NORMAL \| PROC_HIT_CRITICAL \| PROC_HIT_ABSORB for DONE proc type |
| 1 | 0x0001 | PROC_HIT_NORMAL | non-critical hits |
| 2 | 0x0002 | PROC_HIT_CRITICAL |  |
| 4 | 0x0004 | PROC_HIT_MISS |  |
| 8 | 0x0008 | PROC_HIT_FULL_RESIST |  |
| 16 | 0x0010 | PROC_HIT_DODGE |  |
| 32 | 0x0020 | PROC_HIT_PARRY |  |
| 64 | 0x0040 | PROC_HIT_BLOCK | partial or full block |
| 128 | 0x0080 | PROC_HIT_EVADE |  |
| 256 | 0x0100 | PROC_HIT_IMMUNE |  |
| 512 | 0x0200 | PROC_HIT_DEFLECT |  |
| 1024 | 0x0400 | PROC_HIT_ABSORB | partial or full absorb |
| 2048 | 0x0800 | PROC_HIT_REFLECT |  |
| 4096 | 0x1000 | PROC_HIT_INTERRUPT |  |
| 8192 | 0x2000 | PROC_HIT_FULL_BLOCK |  |
