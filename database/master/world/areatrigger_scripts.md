---
title: areatrigger_scripts
description: 
published: true
date: 2021-11-15T16:47:14.857Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:51.767Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_involvedrelation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_involvedrelation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_tavern" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_tavern'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint(8) | signed | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | NO |  |  |  |
&nbsp;
## Description of fields

### entry
This is the trigger identifier from [AreaTrigger.db2](https://wow.tools/dbc/?dbc=areatrigger){target=_blank}.

ScriptNames for new areatrigger system are applied inside [areatrigger_template.ScriptName](/database/master/world/areatrigger_template#ScriptName)
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
This might also be 'SmartTrigger'. It will than use [SmartAI](/database/master/world/smart_scripts).
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_involvedrelation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'areatrigger_involvedrelation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/areatrigger_tavern" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_tavern'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

