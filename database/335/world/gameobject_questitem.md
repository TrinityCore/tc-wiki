---
title: gameobject_questitem
description: 
published: true
date: 2024-05-16T11:19:32.633Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:25.118Z
---

Tells the client (mouse-hovering this gameobject -> tooltip) that the referenced object will drop the items specified in this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [GameObjectEntry](#gameobjectentry) | int | unsigned | PRI | NO | 0 |  |  |
| [Idx](#idx) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemId](#itemid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### GameObjectEntry
The gameobject that is supposed show this information (references [gameobject_template.entry](../world/gameobject_template#entry))
&nbsp;

### Idx
The order in which the items are listed. **Idx** must be less than MAX_GAMEOBJECT_QUEST_ITEMS (6)
&nbsp;

### ItemId
An item that should appear in the tooltip. (references [item_template.entry](../world/item_template#entry))
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

