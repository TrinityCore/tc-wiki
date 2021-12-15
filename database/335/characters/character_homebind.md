---
title: character_homebind
description: 
published: true
date: 2021-09-16T10:31:01.154Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:42.236Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_glyphs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_glyphs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Contains information on the location where characters get teleported when they use their Hearthstone.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [mapId](#mapid) | smallint(5) | unsigned |  | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint(5) | unsigned |  | NO | 0 |  | Zone Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The GUID of the character.
&nbsp;

### mapId
ID of the map where homebind is set, taken from Map.dbc
&nbsp;

### zoneId
ID of the zone where homebind is set, taken from AreaTable.dbc
&nbsp;

### posX
The X position where the character gets teleported to.
&nbsp;

### posY
The Y position where the character gets teleported to.
&nbsp;

### posZ
The Z position where the character gets teleported to.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_glyphs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_glyphs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

