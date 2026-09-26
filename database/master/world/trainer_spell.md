---
title: trainer_spell
description:
published: true
date: 2023-04-02T01:47:37.276Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:39.919Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TrainerId](#trainerid) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellId](#spellid) | int | unsigned | PRI | NO | 0 |  |  |
| [MoneyCost](#moneycost) | int | unsigned |  | NO | 0 |  |  |
| [ReqSkillLine](#reqskillline) | int | unsigned |  | NO | 0 |  |  |
| [ReqSkillRank](#reqskillrank) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility1](#reqability1) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility2](#reqability2) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility3](#reqability3) | int | unsigned |  | NO | 0 |  |  |
| [ReqLevel](#reqlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### TrainerId
ID referencing [`trainer.Id`](/database/master/world/trainer#Id)
&nbsp;

### SpellId
The ID of spell being taught from [Spell.db2](https://wago.tools/db2/Spell){target=blank}
&nbsp;

### MoneyCost
The cost in copper for the spell being taught.
&nbsp;

### ReqSkillLine
The ID of the skill from [SkillLine.db2](https://wago.tools/db2/SkillLine){target=blank}
&nbsp;

### ReqSkillRank
The minimum level of the rank required to be taught the spell.
&nbsp;

### ReqAbility1
Required ability 1, referencing spell from [Spell.db2](https://wago.tools/db2/Spell){target=blank}
&nbsp;

### ReqAbility2
Required ability 2, referencing spell from [Spell.db2](https://wago.tools/db2/Spell){target=blank}
&nbsp;

### ReqAbility3
Required ability 3, referencing spell from [Spell.db2](https://wago.tools/db2/Spell){target=blank}
&nbsp;

### ReqLevel
The required level before you can be taught the spell.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

