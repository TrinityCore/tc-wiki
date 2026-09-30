[`enum AchievementFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/shared/DataStores/DBCEnums.h#L80-L92)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x0001 | ACHIEVEMENT_FLAG_COUNTER | Just count statistic (never stop and complete) |
| 2 | 0x0002 | ACHIEVEMENT_FLAG_HIDDEN | Not sent to client - internal use only |
| 4 | 0x0004 | ACHIEVEMENT_FLAG_STORE_MAX_VALUE | Store only max value? used only in "Reach level xx" |
| 8 | 0x0008 | ACHIEVEMENT_FLAG_SUMM | Use summ criteria value from all requirements (and calculate max value) |
| 16 | 0x0010 | ACHIEVEMENT_FLAG_MAX_USED | Show max criteria (and calculate max value ??) |
| 32 | 0x0020 | ACHIEVEMENT_FLAG_REQ_COUNT | Use not zero req count (and calculate max value) |
| 64 | 0x0040 | ACHIEVEMENT_FLAG_AVERAGE | Show as average value (value / time_in_days) depend from other flag (by def use last criteria value) |
| 128 | 0x0080 | ACHIEVEMENT_FLAG_BAR | Show as progress bar (value / max vale) depend from other flag (by def use last criteria value) |
| 256 | 0x0100 | ACHIEVEMENT_FLAG_REALM_FIRST_REACH |  |
| 512 | 0x0200 | ACHIEVEMENT_FLAG_REALM_FIRST_KILL |  |
