---
title: spell_group_stack_rules
description: 
published: true
date: 2023-07-22T19:59:02.897Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:35.133Z
---

Table defines if auras in one [spell_group](../world/spell_group) can't stack with each other.

> Note: The table doesn't affect persistent area auras stacking or passive auras stacking (they can stack always) or spells belonging to same spell_rank (they are always subject of SPELL_GROUP_STACK_RULE_EXCLUSIVE rule)
{.is-info}



## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [group_id](#group_id) | int | unsigned | PRI | NO | 0 |  |  |
| [stack_rule](#stack_rule) | tinyint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### group_id
references [spell_group](../world/spell_group)
&nbsp;

### stack_rule
Rule deciding which spell effect will prevail over the others as they are not stackable.
| Value | Name | Description |
| --- | --- | --- |
| 0 | SPELL_GROUP_STACK_RULE_DEFAULT | No stacking rule defined - placeholder |
| 1 | SPELL_GROUP_STACK_RULE_EXCLUSIVE | Auras from group can't stack with each other |
| 2 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_FROM_SAME_CASTER | Auras from group can't stack with each other when cast by same caster |
| 3 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_SAME_EFFECT | Same effects of spells will not stack, yet auras will remain on a target |
| 4 | SPELL_GROUP_STACK_RULE_EXCLUSIVE_HIGHEST | Only highest effect will remain on target |
{.dense}

A spell should be in only 1 group with this stack rule.
&nbsp;

