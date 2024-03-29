---
title: character_account_data
description: 
published: true
date: 2023-07-25T18:12:57.357Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:04.555Z
---

<a href="https://trinitycore.info/en/database/335/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'channels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_achievement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_achievement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains data about character settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [data](#data) | blob |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
[character guid](../characters/characters#guid) the data belongs to.
&nbsp;

### type
AccountDataType of this entry.
| ID | Name | Comment |
|----|------|---------|
| 1 | PER_CHARACTER_CONFIG_CACHE | Config cache per character |
| 3 | PER_CHARACTER_BINDINGS_CACHE | Bindings cache per character |
| 5 | PER_CHARACTER_MACROS_CACHE | Macros cache per character |
| 6 | PER_CHARACTER_LAYOUT_CACHE | Layout cache per character |
| 7 | PER_CHARACTER_CHAT_CACHE | Chat cache per character |
{.dense}

&nbsp;

### time
Time of last modification in Unixtime
&nbsp;

### data
No description can be written. You just must understand it's data.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/channels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'channels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_achievement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_achievement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
