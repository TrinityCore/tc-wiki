---
title: creature_template_resistance
description: 
published: true
date: 2024-05-16T11:19:32.218Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:01.413Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_template_movement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_movement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table describes what spell schools a creature is resistant to. 

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [School](#school) | tinyint | unsigned | PRI | NO |  |  |  |
| [Resistance](#resistance) | smallint | signed |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
references [creature_template.entry](../world/creature_template#entry)
&nbsp;

### School
The spell school the creature is resistant to.
| Value | Name |
|-------|------|
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### Resistance
The resistance amount.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;


<a href="https://trinitycore.info/en/database/335/world/creature_template_movement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_movement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
