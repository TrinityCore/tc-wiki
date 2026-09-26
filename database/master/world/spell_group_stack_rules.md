---
title: spell_group_stack_rules
description: 
published: true
date: 2023-01-01T03:05:03.193Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:58.554Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [group_id](#group_id) | int | unsigned | PRI | NO | 0 |  |  |
| [stack_rule](#stack_rule) | tinyint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### group_id
ID from spell_group
&nbsp;

### stack_rule
Rule deciding which spell effect will prevail over the others as they are not stackable.
| Value | Description |
| --- | --- |
| 0 | SPELL_GROUP_STACK_RULE_DEFAULT
| 1 | SPELL_GROUP_STACK_RULE_EXCLUSIVE
| 2 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_FROM_SAME_CASTER
| 3 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_SAME_EFFECT
| 4 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_HIGHEST
&nbsp;


