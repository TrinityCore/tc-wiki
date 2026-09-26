---
title: conversation_line_template
description: Holds additional information for conversation lines, e.g. which actor is used.
published: true
date: 2023-10-06T19:27:09.275Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:35.885Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [UiCameraID](#uicameraid) | int | unsigned |  | NO | 0 |  |  |
| [ActorIdx](#actoridx) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ChatType](#chattype) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
Unique ID for a line in a conversation.
Reference: [ConversationLine.db2](https://wago.tools/db2/conversationline){target=_blank}
&nbsp;

### UiCameraID
Reference: [UiCamera.db2](https://wago.tools/db2/uicamera){target=_blank}
&nbsp;

### ActorIdx
Links the line to an actor by [conversation_actors.Idx](/database/master/world/conversation_actors#idx){target=_blank}.
&nbsp;

### Flags
| Value | Name |Description |
| :---: | --- | --- |
| 0x1 | CONVERSATION_LINE_FLAG_NOTIFY_STARTED  | Client will send CMSG_CONVERSATION_LINE_STARTED when it runs this line |
&nbsp;

### ChatType
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

