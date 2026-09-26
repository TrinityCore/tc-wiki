---
title: creature_template_spell
description:
published: true
date: 2023-04-05T23:13:11.090Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-15T19:39:27.626Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [Index](#index) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Spell](#spell) | int | unsigned |  | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureID
references [creature_template.entry](../world/creature_template#entry)
&nbsp;

### Index
The spells position on the cast bar if the creature is player controlled. Must be less than MAX_CREATURE_SPELLS (8)
&nbsp;

### Spell
A [Spell ID](https://wago.tools/db2/spellname) to use.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

