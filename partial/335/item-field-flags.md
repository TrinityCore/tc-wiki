[`enum ItemFieldFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Entities/Item/ItemTemplate.h#L112-L148) excerpt:
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x00000001 | ITEM_FIELD_FLAG_SOULBOUND | Item is soulbound and cannot be traded |
| 4 | 0x00000004 | ITEM_FIELD_FLAG_UNLOCKED | Item had lock but can be opened now |
| 8 | 0x00000008 | ITEM_FIELD_FLAG_WRAPPED | Item is wrapped and contains another item |
| 256 | 0x00000100 | ITEM_FIELD_FLAG_BOP_TRADEABLE | Allows trading soulbound items |
| 512 | 0x00000200 | ITEM_FIELD_FLAG_READABLE | Opens text page when right clicked |
| 4096 | 0x00001000 | ITEM_FIELD_FLAG_REFUNDABLE | Item can be returned to vendor for its original cost (extended cost) |
| 262144 | 0x00040000 | ITEM_FIELD_FLAG_UNK13 | ? |
| 524288 | 0x00080000 | ITEM_FIELD_FLAG_UNK14 | ? |
| 786944 | 0x000C0200 | ITEM_FLAG_MAIL_TEXT_MASK |  |
