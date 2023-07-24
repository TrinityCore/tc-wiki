---
title: version
description: 
published: true
date: 2023-07-24T18:13:19.941Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:40.788Z
---

<a href="https://trinitycore.info/en/database/335/world/vehicle_template_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_template_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vw_conditions_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vw_conditions_with_labels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Includes information on current core and database version.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [core_version](#core_version) | varchar(255) |  | PRI | NO | '' |  | Core revision dumped at startup. |
| [core_revision](#core_revision) | varchar(120) |  |  | YES | NULL |  |  |
| [db_version](#db_version) | varchar(120) |  |  | YES | NULL |  | Version of world DB. |
| [cache_id](#cache_id) | int | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### core_version
Full text description from the core  version your server is currently running on.

Example: `TrinityCore rev. d1c6b9d253fa+ 2023-06-13 18:56:22 +0200 (3.3.5 branch) (Unix, Debug, Dynamic)`
&nbsp;

### core_revision
Core Revision Hash your server is currently running on.

Example: `Unknown` or `d1c6b9d253fa+`.
&nbsp;

### db_version
Database Version your server is currently running on. 

Example: `TDB 335.23061`
&nbsp;

### cache_id
Minor DB version. 

Example: `23061`
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/vehicle_template_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_template_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vw_conditions_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vw_conditions_with_labels'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
