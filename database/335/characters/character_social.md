---
title: character_social
description: 
published: true
date: 2023-07-29T19:00:46.738Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:16.827Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_skills'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains data about characters friends/ignored list.
>
> Note: There can be only 50 friend and 50 ignored characters. If you have problems with friends disappearing, try removing some of them first.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Character Global Unique Identifier |
| [friend](#friend) | int | unsigned | PRI | NO | 0 |  | Friend Global Unique Identifier |
| [flags](#flags) | tinyint | unsigned | PRI | NO | 0 |  | Friend Flags |
| [note](#note) | varchar(48) |  |  | NO | '' |  | Friend Note |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### friend
The [character guid](../characters/characters#guid) of the friend/ignored.
&nbsp;

### flags
SocialFlag excerpt: A player can be friend and blocked at the same time (0x3).
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x00 |  |  Unused entry - previously listed as friend or blocked (removed/unblocked) |
| 1 | 0x01 | SOCIAL_FLAG_FRIEND | Added as friend |
| 2 | 0x02 | SOCIAL_FLAG_IGNORED | Added as blocked user |
{.dense}

&nbsp;

### note
Note about the friend (which appears beside the friend's name in friend list in Client).
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_skills" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_skills'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_spell'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
