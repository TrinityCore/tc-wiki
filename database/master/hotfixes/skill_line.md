---
title: skill_line
description: 
published: true
date: 2022-12-19T18:38:45.978Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:25.040Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/scene_script_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'scene_script_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_ability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_ability'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [DisplayName](#displayname) | text |  |  | YES | NULL |  |  |
| [AlternateVerb](#alternateverb) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [HordeDisplayName](#hordedisplayname) | text |  |  | YES | NULL |  |  |
| [OverrideSourceInfoDisplayName](#overridesourceinfodisplayname) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [CategoryID](#categoryid) | tinyint | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [CanLink](#canlink) | tinyint | signed |  | NO | 0 |  |  |
| [ParentSkillLineID](#parentskilllineid) | int | unsigned |  | NO | 0 |  |  |
| [ParentTierIndex](#parenttierindex) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | smallint | unsigned |  | NO | 0 |  |  |
| [SpellBookSpellID](#spellbookspellid) | int | signed |  | NO | 0 |  |  |
| [ExpansionNameSharedStringID](#expansionnamesharedstringid) | int | signed |  | NO | 0 |  |  |
| [HordeExpansionNameSharedStringID](#hordeexpansionnamesharedstringid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### DisplayName
*- no description -*
&nbsp;

### AlternateVerb
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### HordeDisplayName
*- no description -*
&nbsp;

### OverrideSourceInfoDisplayName
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### CategoryID
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### CanLink
*- no description -*
&nbsp;

### ParentSkillLineID
*- no description -*
&nbsp;

### ParentTierIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellBookSpellID
*- no description -*
&nbsp;

### ExpansionNameSharedStringID
*- no description -*
&nbsp;

### HordeExpansionNameSharedStringID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/scene_script_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'scene_script_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/skill_line_ability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_line_ability'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
