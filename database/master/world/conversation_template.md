---
title: conversation_template
description:
published: true
date: 2025-03-19T16:10:34.473Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:38.658Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [FirstLineId](#firstlineid) | int | unsigned |  | NO |  |  |  |
| [TextureKitId](#texturekitid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | signed |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
Unique ID for a conversation.
&nbsp;

### FirstLineId
ID of [ConversationLine.db2](https://wago.tools/db2/conversationline){target=_blank} where the conversation starts.
&nbsp;

### TextureKitId
Background texture ([UiTextureKit.db2](https://wago.tools/db2/UiTextureKit))
&nbsp;

### Flags
| Name | Flag |
| --- | --- |
| None | 0x00 |
| MultipleConversationType | 0x01 |
| IsTalkingHeadConversation | 0x02 |
| AllowWithoutSpawnedActor | 0x03 |
&nbsp;

### ScriptName
Name of the script this object uses if needed.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

