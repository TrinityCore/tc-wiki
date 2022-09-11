---
title: npc_spellclick_spells
description: 
published: true
date: 2022-09-11T17:39:14.633Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:05.858Z
---

<a href="https://trinitycore.info/en/database/master/world/mount_definitions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mount_definitions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [npc_entry](#npc_entry) | int | unsigned | PRI | NO |  |  | reference to creature_template |
| [spell_id](#spell_id) | int | unsigned | PRI | NO |  |  | spell which should be casted  |
| [cast_flags](#cast_flags) | tinyint | unsigned |  | NO |  |  | first bit defines caster: 1=player, 0=creature; second bit defines target, same mapping as caster bit |
| [user_type](#user_type) | smallint | unsigned |  | NO | 0 |  | relation with summoner: 0-no 1-friendly 2-raid 3-party player can click |
&nbsp;
## Description of fields

### npc_entry
Reference to [creature_template.entry](/en/database/master/world/creature_template#entry)
&nbsp;

### spell_id
The spell which should be cast.

Note that for several quests there are more than one spell per click.

[Planing for the Future](https://www.wowhead.com/quest=11960/planning-for-the-future){target=_blank} for example has [Planning for the Future: Create Snowfall Glade Pup](https://www.wowhead.com/spell=46773/planning-for-the-future-create-snowfall-glade-pup){target=_blank} which will create the item in the player’s inventory
and [Planning for the Future: Create Snowfall Glade Pup Cover](https://www.wowhead.com/spell=46167/planning-for-the-future-create-snowfall-glade-pup-cover){target=_blank} which despawns the creature.

This creates the illusion that the creature has been looted.
&nbsp;

### cast_flags
On every spellclick event, a player and a creature "participate". This field defines who casts the spell on who.
Lower bit defines caster: 1=Clicker, 0=Clickee; higher bit defines target, same mapping as caster bit.
You can use that table for the actual value:
| Caster | Target | Value |
| --- | --- | --- |
| Clickee | Clickee | 0 |
| Clicker | Clickee | 1 |
| Clickee | Clicker | 2 |
| Clicker | Clicker | 3 |
&nbsp;

### user_type
Relation with summoner: defines who is able to use this spellclick.
| Value | Description |
| --- | --- |
| 0 | Only Self |
| 1 | Friendly |
| 2 | Raid |
| 3 | Party |
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/mount_definitions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'mount_definitions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

