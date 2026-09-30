[`enum class ReputationFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/game/Reputation/ReputationMgr.h#L32-L43)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | Visible | makes visible in client (set or can be set at interaction with target of this faction) |
| 2 | 0x02 | AtWar | enable AtWar-button in client. player controlled (except opposition team always war state), Flag only set on initial creation |
| 4 | 0x04 | Hidden | hidden faction from reputation pane in client (player can gain reputation, but this update not sent to client) |
| 8 | 0x08 | Header | Display as header in UI |
| 16 | 0x10 | Peaceful | always overwrite FACTION_FLAG_AT_WAR, used for prevent war with own team factions |
| 32 | 0x20 | Inactive | player controlled, state stored in characters.data (CMSG_SET_FACTION_INACTIVE) |
| 64 | 0x40 | ShowPropagated | flag for the two competing outland factions |
| 128 | 0x80 | HeaderShowsBar | Header has its own reputation bar |
