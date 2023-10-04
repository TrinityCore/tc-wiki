---
title: graveyard_zone
description:
published: true
date: 2023-07-10T19:57:27.209Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:47.482Z
---

<a href="https://trinitycore.info/en/database/335/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/holiday_dates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'holiday_dates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains information about zones connected to world's graveyards.
This table is used to set what factions a given graveyard will accept, and also to specify the nearest graveyard to a given zone.

For a list of all existing graveyard zones and their respective IDs, check out [wow.tools](https://wow.tools/dbc/?dbc=worldsafelocs&build=3.3.5.12340#page=1)


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [GhostZone](#ghostzone) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [Faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [Comment](#comment) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID
references [WorldSafeLoc ID](/files/DBC/335/worldsafelocs#id)
&nbsp;

### GhostZone
[AreaTable ID](/files/DBC/335/areatable#id) of ghost position before teleportation to graveyard.
&nbsp;

### Faction
Graveyard's team as [Faction ID](/files/DBC/335/faction#id)
* 0 - Any team accepted
* 469 - Alliance team only
* 67 - Horde team only
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/holiday_dates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'holiday_dates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
