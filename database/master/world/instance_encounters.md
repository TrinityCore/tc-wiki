---
title: instance_encounters
description: 
published: true
date: 2023-04-01T23:50:54.699Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:29.881Z
---

<a href="https://trinitycore.info/en/database/master/world/guild_rewards_req_achievements" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_rewards_req_achievements'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/instance_spawn_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_spawn_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO |  |  | Unique entry from DungeonEncounter.dbc |
| [creditType](#credittype) | tinyint | unsigned |  | NO | 0 |  |  |
| [creditEntry](#creditentry) | int | unsigned |  | NO | 0 |  |  |
| [lastEncounterDungeon](#lastencounterdungeon) | smallint | unsigned |  | NO | 0 |  | If not 0, LfgDungeon.dbc entry for the instance it is last encounter in |
| [comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### entry
ID as referenced in [DungeonEncounter.db2](https://wow.tools/dbc/?dbc=DungeonEncounter){target=blank}
&nbsp;

### creditType
See enum EncounterCreditType.
```
ENCOUNTER_CREDIT_KILL_CREATURE = 0
ENCOUNTER_CREDIT_CAST_SPELL = 1
```
&nbsp;

### creditEntry
If creditType = 0, then value for this field is creature entry. See [`creature_template.entry`](/database/master/world/creature_template#entry).

If creditType = 1, then value for this field is a spell. See [Spell.db2](https://wow.tools/dbc/?dbc=Spell){target=blank}.
&nbsp;

### lastEncounterDungeon
Reference to [LfgDungeon.db2](https://wow.tools/dbc/?dbc=LfgDungeon){target=blank} entry for the instance it which is this encounter last. If 0, encounter is not last one.
&nbsp;

### comment
Instance encounter comment for easy identification. Encounter name used only.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/guild_rewards_req_achievements" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_rewards_req_achievements'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/instance_spawn_groups" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_spawn_groups'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
