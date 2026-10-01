[`enum GameObjectFlags`](https://github.com/TrinityCore/TrinityCore/blob/38354c43a69b1241cba122208fc548b509b85126/src/server/shared/SharedDefines.h#L1688-L1700)
| Value | Flag | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x00000001 | GO_FLAG_IN_USE | Gameobject in use - Disables interaction while being animated |
| 2 | 0x00000002 | GO_FLAG_LOCKED | Makes the Gameobject Locked. Requires a key, spell, or event to be opened. "Locked" appears in tooltip |
| 4 | 0x00000004 | GO_FLAG_INTERACT_COND | Untargetable, cannot interact (condition to interact - requires GO_DYNFLAG_LO_ACTIVATE to enable interaction clientside) |
| 8 | 0x00000008 | GO_FLAG_TRANSPORT | Gameobject can transport (boat, elevator, car) |
| 16 | 0x00000010 | GO_FLAG_NOT_SELECTABLE | Not selectable (Not even in GM-mode) |
| 32 | 0x00000020 | GO_FLAG_NODESPAWN | Never despawns. Typical for gameobjects with on/off state, like doors |
| 64 | 0x00000040 | GO_FLAG_AI_OBSTACLE | makes the client register the object in something called AIObstacleMgr, unknown what it does |
| 128 | 0x00000080 | GO_FLAG_FREEZE_ANIMATION |  |
| 512 | 0x00000200 | GO_FLAG_DAMAGED | Gameobject has been siege damaged |
| 1024 | 0x00000400 | GO_FLAG_DESTROYED | Gameobject has been destroyed |
