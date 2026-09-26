---
title: spell_required
description:
published: true
date: 2024-05-16T11:19:35.905Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:54.130Z
---

Table used to add restrictions for learning spells from trainer. Player can't learn spell **spell_id** till he learns **req_spell**, when he loses **req_spell** **spell_id** will be lost too. Table is used also for profession specialisations as specialisations require profession of certain rank to learn.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_id](#spell_id) | int | signed | PRI | NO | 0 |  |  |
| [req_spell](#req_spell) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### spell_id
[Spell ID](/files/DBC/335/spell#id), which require knowing **req_spell** to learn from trainer.
&nbsp;

### req_spell
[Spell ID](/files/DBC/335/spell#id), which is required to be known before **spell_id** can be learned from trainer.
&nbsp;

