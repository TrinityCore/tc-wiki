---
title: quest_objectives_completion_effect
description: 
published: true
date: 2025-08-13T22:49:58.720Z
tags: database, master, world
editor: markdown
dateCreated: 2023-10-06T19:42:39.882Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_objectives" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_objectives'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_objectives_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_objectives_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ObjectiveID](#objectiveid) | int | signed | PRI | NO |  |  |  |
| [GameEventID](#gameeventid) | int | signed |  | YES | NULL |  |  |
| [SpellID](#spellid) | int | signed |  | YES | NULL |  |  |
| [ConversationID](#conversationid) | int | signed |  | YES | NULL |  |  |
| [UpdatePhaseShift](#updatephaseshift) | tinyint(1) | signed |  | YES | 0 |  |  |
| [UpdateZoneAuras](#updatezoneauras) | tinyint(1) | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ObjectiveID
Id of the Quest [Objective](/database/master/world/quest_objectives_objectives#ID) 
&nbsp;

### GameEventID
Id of a [GameEvent](/database/master/world/game_event#eventEntry) which starts after player receive the Quest Objective
&nbsp;

### SpellID
SpellID of the spell the player should cast after receive the Quest Objective
&nbsp;

### ConversationID
Id of the [Conversation](/database/master/world/conversation_template#Id) which gets played after player received the Quest Objective
&nbsp;

### UpdatePhaseShift
Send update for phaseshift (0/1)
&nbsp;

### UpdateZoneAuras
Send update for zone auras (0/1)
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_objectives" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_objectives'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_objectives_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_objectives_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
