---
title: quest_greeting
description: 
published: true
date: 2024-05-16T11:19:34.536Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:00.967Z
---

This table adds greeting behavior to an NPC or an Gameobject.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [GreetEmoteType](#greetemotetype) | smallint | unsigned |  | NO | 0 |  |  |
| [GreetEmoteDelay](#greetemotedelay) | int | unsigned |  | NO | 0 |  |  |
| [Greeting](#greeting) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
* **Type** = 0: references [creature_template.entry](../world/creature_template#entry)
* **Type** = 1: references [gameobject_template.entry](../world/gameobject_template#entry)
&nbsp;

### Type
* 0: Creature
* 1: GameObject
&nbsp;

### GreetEmoteType
Quest NPC [Emote ID](/files/DBC/335/emotes#id)
&nbsp;

### GreetEmoteDelay
Emote delay in milliseconds.
&nbsp;

### Greeting
Text to display.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

