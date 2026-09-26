---
title: instance_spawn_groups
description:
published: true
date: 2023-10-06T19:27:11.202Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:32.436Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [instanceMapId](#instancemapid) | smallint | unsigned | PRI | NO |  |  |  |
| [bossStateId](#bossstateid) | tinyint | unsigned | PRI | NO |  |  |  |
| [bossStates](#bossstates) | tinyint | unsigned | PRI | NO |  |  |  |
| [spawnGroupId](#spawngroupid) | int | unsigned | PRI | NO |  |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### instanceMapId
MapID, referenced in [Map.db2](https://wago.tools/db2/map){target=blank}
&nbsp;

### bossStateId
Boss state id referenced in source code. You can find it in `<instance_name>.h` in the `DataTypes` enum. For example for the boss Leymor in Azure Vault you will find it in `src/server/scripts/DragonIsles/AzureVault/azure_vault.h`. In the code below Leymor has data 0 assigned, so we would use 0 as bossStateId here.
For Azureblade 1, for Telash 2 or for Umbrelskul 3.
```c
enum AVDataTypes
{
    // Encounters
    DATA_LEYMOR             = 0,
    DATA_AZUREBLADE,
    DATA_TELASH_GREYWING,
    DATA_UMBRELSKUL,
    [...]
```
&nbsp;

### bossStates
Mask based on EncounterState, you can combine multiple states by OR-ing them, also directly possible in SQL e.g. `(0x08 | 0x10)` for DONE and SPECIAL.
| Name | Value |
| ---- | ----- |
| NOT_STARTED | 0x01 |
| IN_PROGRESS | 0x02 |
| FAIL | 0x04 |
| DONE | 0x08 |
| SPECIAL | 0x10 |
| TO_BE_DECIDED | 0x20 |
&nbsp;

### spawnGroupId
ID of the spawn group, referenced in [`spawn_group_template.groupId`](/database/master/world/spawn_group_template#groupId)
&nbsp;

### flags
| Name | Value |
| ---- | ----- |
| FLAG_ACTIVATE_SPAWN | 0x01 |
| FLAG_BLOCK_SPAWN | 0x02 |
| FLAG_ALLIANCE_ONLY | 0x04 |
| FLAG_HORDE_ONLY | 0x08 |
&nbsp;

