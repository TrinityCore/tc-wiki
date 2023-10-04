---
title: spell_ranks
description:
published: true
date: 2023-07-23T01:04:11.240Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:51.486Z
---

<a href="https://trinitycore.info/en/database/335/world/spell_proc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_proc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_required" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_required'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Table used by the core to group different ranks of spells (the gray text seen on ranked spells) into one "spell stem". This partly involves checks for aura stacking (e.g. different levels of the same spell). One spell can not be linked to multiple rank chains (they are "unique").

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [first_spell_id](#first_spell_id) | int | unsigned | PRI | NO | 0 |  |  |
| [spell_id](#spell_id) | int | unsigned | UNI | NO | 0 |  |  |
| [rank](#rank) | tinyint | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### first_spell_id
[Spell ID](/files/DBC/335/spell#id) which is first rank of spell rank chain. It identifies the whole chain.
&nbsp;

### spell_id
references [Spell ID](/files/DBC/335/spell#id)
&nbsp;

### rank
An integer which ranks the spell within the chain of spell ranks for the given **spell_id**. It can differ from the rank text in game (for example, some ranks in client start with level 0, while the server always starts from level 1 onward).

Several conditions have to be fulfilled:
* At least two ranks are required.
* The ranking must be continuous (e.g. one spell being level 3 and one being level 5 while level 4 is missing altogether)
* There can be no duplicates in ranks.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/spell_proc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_proc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_required" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_required'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
