---
title: conversation_actors
description: 
published: true
date: 2022-05-12T12:16:19.132Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:33.163Z
---

<a href="https://trinitycore.info/en/database/master/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/conversation_line_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_line_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ConversationId](#conversationid) | int | unsigned | PRI | NO |  |  |  |
| [ConversationActorId](#conversationactorid) | int | unsigned |  | NO | 0 |  |  |
| [ConversationActorGuid](#conversationactorguid) | bigint | unsigned |  | NO | 0 |  |  |
| [Idx](#idx) | smallint | unsigned | PRI | NO | 0 |  |  |
| [CreatureId](#creatureid) | int | unsigned |  | NO | 0 |  |  |
| [CreatureDisplayInfoId](#creaturedisplayinfoid) | int | unsigned |  | NO | 0 |  |  |
| [NoActorObject](#noactorobject) | tinyint | unsigned |  | YES | 0 |  |  |
| [ActivePlayerObject](#activeplayerobject) | tinyint | unsigned |  | YES | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ConversationId
Unique ID for a conversation.
&nbsp;

### ConversationActorId
Unique ID for an actor of a conversation.
&nbsp;

### ConversationActorGuid
[CreatureGuid](/en/database/master/world/creature#guid){target=_blank} which participates in a conversation.
&nbsp;

### Idx
Index which sorts the actors in their correct order.
&nbsp;

### CreatureId
Actors can also be Non-WorldObjects.
To display the proper creature inside the conversation frame.
Reference [creature_template.entry](/en/database/master/world/creature_template#entry){target=_blank}
&nbsp;

### CreatureDisplayInfoId
DisplayID from [CreatureDisplayInfo.db2](https://wow.tools/dbc/?dbc=creaturedisplayinfo){target=_blank}
Decides the visual appearance from the actor.
&nbsp;

### NoActorObject
| Value | Description |
| --- | --- |
| 0 | If WorldObject ([ConversationActorGuid](#conversationactorguid)) is missing conversation is interrupted |
| 1 | If WorldObject ([ConversationActorGuid](#conversationactorguid)) is missing conversation is continuing |
&nbsp;

### ActivePlayerObject
| Value | Description |
| --- | --- |
| 0 | CreatureID or WorldObject is actor for conversation |
| 1 | ActivePlayer is actor for conversation |
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/conversation_line_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'conversation_line_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
