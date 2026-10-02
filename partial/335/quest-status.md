[`enum QuestStatus`](https://github.com/TrinityCore/TrinityCore/blob/d7329e3d3a713404d8ecbd91ae5f988fd143b793/src/server/game/Quests/QuestDef.h#L101-L111)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x01 | QUEST_STATUS_NONE  | Player does not have or had quest at all. He could accept it, but he did not (yet). |
| 2 | 0x02 | QUEST_STATUS_COMPLETE | Player fulfilled objectives, but did not hand it in yet. |
| 8 | 0x08 | QUEST_STATUS_INCOMPLETE | Player did not fulfill objectives yet. |
| 32 | 0x20 | QUEST_STATUS_FAILED | Player failed to fulfill objectives for any reason, e.g. time limit. |
| 64 | 0x40 | QUEST_STATUS_REWARDED | Player handed quest in and this is sort of a post-quest interaction. |
