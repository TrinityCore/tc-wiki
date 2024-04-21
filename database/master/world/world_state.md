---
title: world_state
description: 
published: true
date: 2022-11-21T22:46:59.216Z
tags: database, master, world
editor: markdown
dateCreated: 2022-07-10T19:37:23.205Z
---

<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_safe_locs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'access_requirement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | signed | PRI | NO |  |  |  |
| [DefaultValue](#defaultvalue) | int | signed |  | NO |  |  |  |
| [MapIDs](#mapids) | varchar(128) |  |  | YES | NULL |  |  |
| [AreaIDs](#areaids) | varchar(255) |  |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
Unique identifier of the world state
&nbsp;

### DefaultValue
Default value of the world state
&nbsp;

### MapIDs
MapIDs where the worldstate should be active (comma separated: `mapId1,mapId2`)
Using NULL as MapID means its active realmwide (= in every map).
Using -1 as MapID marks it as allowed on ALL maps but should be bound to a map.
References to: [Map.db2](https://wow.tools/dbc/?dbc=Map){target=_blank}
&nbsp;

### AreaIDs
AreaIDs where the worldstate should be active (comma separated: `areaId1,areaId2`)
Using NULL means its active in every area of the provided `MapIDs`.
References to: [AreaTable.db2](https://wow.tools/dbc/?dbc=AreaTable){target=_blank}
&nbsp;

### ScriptName
ScriptName for a `WorldStateScript`
&nbsp;

### Comment
Comment describing the world state
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_safe_locs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'access_requirement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
