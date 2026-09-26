---
title: creature_default_trainer
description: 
published: true
date: 2023-07-07T23:20:45.251Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:21.129Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureId](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [TrainerId](#trainerid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields
&nbsp;

### CreatureId
references a [creature entry](../world/creature_template#entry)
&nbsp;

### TrainerId
references a [trainer Id](../world/trainer#id)

| ID | Comment |
|---|---|
| 1 | Trainer Warrior |
| 3 | Trainer Paladin |
| 7 | Trainer Hunter |
| 9 | Trainer Rogue |
| 11 | Trainer Priest |
| 13 | Trainer Death Knight |
| 14 | Trainer Shaman |
| 16 | Trainer Mage |
| 31 | Trainer Warlock |
| 33 | Trainer Druid |
| 36 | Trainer Mount and Fly |
{.dense}

&nbsp;

