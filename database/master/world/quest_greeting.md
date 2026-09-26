---
title: quest_greeting
description:
published: true
date: 2022-11-21T21:07:42.256Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:57.623Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [GreetEmoteType](#greetemotetype) | smallint | unsigned |  | NO | 0 |  |  |
| [GreetEmoteDelay](#greetemotedelay) | int | unsigned |  | NO | 0 |  |  |
| [Greeting](#greeting) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
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
Quest NPC [Emote ID](https://wago.tools/db2/emotes)
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

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

