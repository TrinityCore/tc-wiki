---
title: outdoorpvp_template
description: 
published: true
date: 2022-11-21T21:06:30.218Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:13.700Z
---

<a href="https://trinitycore.info/en/database/master/world/npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_vendor'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/page_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'page_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TypeId](#typeid) | tinyint | unsigned | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### TypeId
Id from [`enum OutdoorPvPTypes`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/OutdoorPvP/OutdoorPvP.h)
&nbsp;

### ScriptName
The name of the script that this outdoor pvp uses. This ties a script from a scripting engine to this outdoor pvp.
&nbsp;

### comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/npc_vendor" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_vendor'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/page_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'page_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
