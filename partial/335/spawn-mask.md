[`enum SpawnMask`](https://github.com/TrinityCore/TrinityCore/blob/e490cad2b0cb538c554006a7a8842b39f7ca143e/src/server/shared/DataStores/DBCEnums.h#L296-L313)
| Value | Flag | Continent | Dungeon | Raid | Comment |
| --- | --- | :--: | :--: | :--: | --- |
| 0 | 0x00 | no | no | no |  |
| 1 | 0x01 | yes | 5N | 10N | and all maps without spawn modes |
| 2 | 0x02 | no | 5H | 25N |  |
| 4 | 0x04 | no | no | 10H |  |
| 8 | 0x08 | no | no | 25H |  |
|  |  |  |  |  |  |
| 3 | 0x03 |  |  |  | all dungeon modes and all normal raid modes |
| 12 | 0x0C |  |  |  | all heroic raid modes |
| 15 | 0x0F |  |  |  | all raid modes |
