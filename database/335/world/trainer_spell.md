---
title: trainer_spell
description:
published: true
date: 2023-07-23T18:07:22.236Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:15.827Z
---

<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/transports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'transports'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains all the trainer spell entries.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TrainerId](#trainerid) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellId](#spellid) | int | unsigned | PRI | NO | 0 |  |  |
| [MoneyCost](#moneycost) | int | unsigned |  | NO | 0 |  |  |
| [ReqSkillLine](#reqskillline) | int | unsigned |  | NO | 0 |  |  |
| [ReqSkillRank](#reqskillrank) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility1](#reqability[1-3]) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility2](#reqability[1-3]) | int | unsigned |  | NO | 0 |  |  |
| [ReqAbility3](#reqability[1-3]) | int | unsigned |  | NO | 0 |  |  |
| [ReqLevel](#reqlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### TrainerId
references [trainer.id](../world/trainer#id)
&nbsp;

### SpellId
The [Spell ID](/files/DBC/335/spell#id) being taught.
&nbsp;

### MoneyCost
The cost in copper for the spell being taught.
&nbsp;

### ReqSkillLine
The [SkillLine ID](/files/DBC/335/skillline#id) the player ist requird to have.

[SkillLine](/files/DBC/335/skillline) excerpt
| ID | Name |
|----|------|
| 129 | First Aid |
| 164 | Blacksmithing |
| 165 | Leatherworking |
| 171 | Alchemy |
| 182 | Herbalism |
| 185 | Cooking |
| 186 | Mining |
| 197 | Tailoring |
| 202 | Engineering |
| 333 | Enchanting |
| 356 | Fishing |
| 393 | Skinning |
| 633 | Lockpicking |
| 755 | Jewelcrafting |
| 773 | Inscription |
| 776 | Runeforging |
{.dense}

&nbsp;

### ReqSkillRank
The minimum level of skill points in **ReqSkillLine** required to be taught the spell.
&nbsp;

### ReqAbility\[1-3]
A [Spell ID](/files/DBC/335/spell#id) the player is required to know.
&nbsp;

### ReqLevel
The required player level to learn this spell.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'trainer_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/transports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'transports'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
