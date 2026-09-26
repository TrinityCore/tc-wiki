---
title: spell_required
description:
published: true
date: 2022-11-21T21:09:21.277Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:14.146Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_id](#spell_id) | int | signed | PRI | NO | 0 |  |  |
| [req_spell](#req_spell) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### spell_id
[Spell ID](https://wago.tools/db2/spell), which require knowing **req_spell** to learn from trainer.
&nbsp;

### req_spell
[Spell ID](https://wago.tools/db2/spell), which is required to be known before **spell_id** can be learned from trainer.
&nbsp;

