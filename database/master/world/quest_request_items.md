---
title: quest_request_items
description: 
published: true
date: 2022-12-19T18:41:05.506Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:20.746Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_pool_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_request_items_conditional" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_request_items_conditional'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [EmoteOnComplete](#emoteoncomplete) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteOnIncomplete](#emoteonincomplete) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteOnCompleteDelay](#emoteoncompletedelay) | int | unsigned |  | NO | 0 |  |  |
| [EmoteOnIncompleteDelay](#emoteonincompletedelay) | int | unsigned |  | NO | 0 |  |  |
| [CompletionText](#completiontext) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
references [quest_template.ID](../world/quest_template#id)
&nbsp;

### EmoteOnComplete
[Emote ID](https://wow.tools/dbc/?dbc=emotes) played by the quest ender NPC when all quest objectives are completed.
&nbsp;

### EmoteOnIncomplete
[Emote ID](https://wow.tools/dbc/?dbc=emotes) played by the quest ender NPC if any of the quest objectives are incomplete.
&nbsp;

### EmoteOnCompleteDelay
*- no description -*
&nbsp;

### EmoteOnIncompleteDelay
*- no description -*
&nbsp;

### CompletionText
Quest gossip text shown in the final gossip dialogue window when turning in an item delivery quest.
The quest item(s) involved in the quest can either be provided by the quest giver or collected by the player.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_pool_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_pool_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_request_items_conditional" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_request_items_conditional'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

