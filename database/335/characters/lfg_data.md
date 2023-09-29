---
title: lfg_data
description:
published: true
date: 2023-07-31T20:28:32.241Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:42.951Z
---

<a href="https://trinitycore.info/en/database/335/characters/lag_reports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lag_reports'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/mail" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds additional information for groups of type: GROUPTYPE_LFG (8)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [dungeon](#dungeon) | int | unsigned |  | NO | 0 |  |  |
| [state](#state) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
references [groups.guid](../characters/groups#guid)
&nbsp;

### dungeon
[LFGDungeon ID](/files/DBC/335/lfgdungeons#id)
&nbsp;

### state
`enum LfgState`
| ID | Name | Comment |
|----|------|---------|
| 0 | LFG_STATE_NONE | Not using LFG / LFR |
| 1 | LFG_STATE_ROLECHECK | Rolecheck active |
| 2 | LFG_STATE_QUEUED | Queued |
| 3 | LFG_STATE_PROPOSAL | Proposal active |
| 4 | :x: LFG_STATE_BOOT | not used - Vote kick active |
| 5 | LFG_STATE_DUNGEON | In LFG Group, in a Dungeon |
| 6 | LFG_STATE_FINISHED_DUNGEON | In LFG Group, in a finished Dungeon |
| 7 | LFG_STATE_RAIDBROWSER | Using Raid finder |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/lag_reports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'lag_reports'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/mail" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
