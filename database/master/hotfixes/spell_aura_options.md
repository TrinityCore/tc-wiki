---
title: spell_aura_options
description: 
published: true
date: 2022-11-21T21:19:33.280Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:46.515Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/specialization_spells_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'specialization_spells_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_aura_restrictions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_aura_restrictions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [CumulativeAura](#cumulativeaura) | smallint | unsigned |  | NO | 0 |  |  |
| [ProcCategoryRecovery](#proccategoryrecovery) | int | signed |  | NO | 0 |  |  |
| [ProcChance](#procchance) | tinyint | unsigned |  | NO | 0 |  |  |
| [ProcCharges](#proccharges) | int | signed |  | NO | 0 |  |  |
| [SpellProcsPerMinuteID](#spellprocsperminuteid) | smallint | unsigned |  | NO | 0 |  |  |
| [ProcTypeMask1](#proctypemask1) | int | signed |  | NO | 0 |  |  |
| [ProcTypeMask2](#proctypemask2) | int | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### CumulativeAura
*- no description -*
&nbsp;

### ProcCategoryRecovery
*- no description -*
&nbsp;

### ProcChance
*- no description -*
&nbsp;

### ProcCharges
*- no description -*
&nbsp;

### SpellProcsPerMinuteID
*- no description -*
&nbsp;

### ProcTypeMask1
*- no description -*
&nbsp;

### ProcTypeMask2
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/specialization_spells_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'specialization_spells_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/spell_aura_restrictions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_aura_restrictions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

