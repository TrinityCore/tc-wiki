---
title: npc_spellclick_spells
description:
published: true
date: 2023-07-11T17:53:54.832Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:34.153Z
---

<a href="https://trinitycore.info/en/database/335/world/milling_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'milling_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds information about spells to be cast upon receiving CMSG_SPELLCLICK.

That opcode is sent for quests in which you have to loot creatures, who are already dead at spawning. Examples are [Planning for the Future](http://aowow.trinitycore.info/?quest=11960) and [Rifle the Bodies](http://aowow.trinitycore.info/?quest=11999).

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
[creature_template.entry](../world/creature_template#entry) of the creature the player clicks.
&nbsp;

### spell_id
The [Spell ID](/files/DBC/335/spell#id) which should be cast.

> Note: that for several quests there are more than one spell per click.
{.is-info}

Planing for the Future for example has [Planning for the Future: Create Snowfall Glade Pup](http://aowow.trinitycore.info/?spell=46773) which will create the item in the player’s inventory
and [Planning for the Future: Create Snowfall Glade Pup Cover](http://aowow.trinitycore.info/?spell=46167) which despawns the creature.

This creates the illusion that the creature has been looted.
&nbsp;

### cast_flags
On every spellclick event, a player and a creature "participate". This field defines who casts the spell on who.
Lower bit defines caster: 1=Clicker, 0=Clickee; higher bit defines target, same mapping as caster bit.

You can use this table for the actual value:
| Value | Caster | Target |
|-------|--------|--------|
| 0 | Creature | Creature |
| 1 | Player | Creature |
| 2 | Creature | Player |
| 3 | Player | Player |
{.dense}

&nbsp;

### user_type
Relation with summoner: defines who is able to use this spellclick.

| Value | Description |
|-------|-------------|
| 0 | Only self |
| 1 | Friendly |
| 2 | Raid |
| 3 | Party |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/milling_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'milling_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'npc_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
