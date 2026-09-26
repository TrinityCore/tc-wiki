---
title: creature_template_spell
description: 
published: true
date: 2024-05-16T11:19:32.227Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:04.070Z
---

This tables defines spells that can be used by the creatures [AI-Template](../world/creature_template#ainame) or by the player when in control of this creature.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [Index](#index) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Spell](#spell) | int | unsigned |  | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
references [creature_template.entry](../world/creature_template#entry)
&nbsp;

### Index
The spells position on the cast bar if the creature is player controlled. Must be less than MAX_CREATURE_SPELLS (8)
&nbsp;

### Spell
A [Spell ID](/files/DBC/335/spell#id) to use.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

