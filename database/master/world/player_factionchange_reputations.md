---
title: player_factionchange_reputations
description: 
published: true
date: 2022-11-21T21:06:50.204Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:41.948Z
---

<a href="https://trinitycore.info/en/database/master/world/player_factionchange_quests" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'player_factionchange_quests'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/player_factionchange_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_factionchange_spells'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Faction ID](https://wow.tools/dbc/?dbc=faction). If you convert to horde and your factions have a record in his table, they will be converted to **horde_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

### horde_id
This is the horde [Faction ID](https://wow.tools/dbc/?dbc=faction). If you convert to alliance and your factions have a record in his table, they will be converted to **alliance_id**.
See [character_reputation.faction](../characters/character_reputation#faction)

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/player_factionchange_quests" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'player_factionchange_quests'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/player_factionchange_spells" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_factionchange_spells'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

