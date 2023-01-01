---
title: spell_group_stack_rules
description: 
published: true
date: 2023-01-01T03:05:01.634Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:58.554Z
---

<a href="https://trinitycore.info/en/database/master/world/spell_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_learn_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_learn_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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

<a href="https://trinitycore.info/en/database/master/world/spell_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_group'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_learn_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_learn_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

