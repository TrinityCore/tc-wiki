---
title: quest_details
description: 
published: true
date: 2024-05-16T11:19:34.525Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:58.264Z
---

This table handles Quest NPC emotes with emote delays when accepting a quest.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Emote1](#emote1-4) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote2](#emote1-4) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote3](#emote1-4) | smallint | unsigned |  | NO | 0 |  |  |
| [Emote4](#emote1-4) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1](#emotedelay1-4) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2](#emotedelay1-4) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3](#emotedelay1-4) | int | unsigned |  | NO | 0 |  |  |
| [EmoteDelay4](#emotedelay1-4) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
references [quest_template.ID](../world/quest_template#id)
&nbsp;

### Emote\[1-4]
[Emote ID](/files/DBC/335/emotes#id) played by NPC.
&nbsp;

### EmoteDelay\[1-4]
Emote delay in milliseconds
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

