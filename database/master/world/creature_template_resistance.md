---
title: creature_template_resistance
description: 
published: true
date: 2023-05-29T22:33:10.759Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-15T19:39:20.849Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [School](#school) | tinyint | unsigned | PRI | NO |  |  |  |
| [Resistance](#resistance) | smallint | signed |  | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureID
references [creature_template.entry](../world/creature_template#entry)
&nbsp;

### School
The spell school the creature is resistant to.
| Value | Name |
|-------|------|
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### Resistance
The resistance amount.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


