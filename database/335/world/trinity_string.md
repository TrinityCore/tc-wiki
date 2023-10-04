---
title: trinity_string
description:
published: true
date: 2023-07-23T18:33:22.218Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:21.329Z
---

<a href="https://trinitycore.info/en/database/335/world/transports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transports'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/updates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds all of the strings used internally by the server. This table is provided with the main purpose of translation in mind.

> Note: The % arguments need to stay in the exact same order as they are provided by default in the English translation. (see [sprintf()](https://cplusplus.com/reference/cstdio/sprintf/) doc)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [content_default](#content_default) | text |  |  | NO |  |  |  |
| [content_loc1](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc2](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc3](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc4](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc5](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc6](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc7](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
| [content_loc8](#content_loc[1-8]) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
The ID that the core uses to identify a string. These IDs are contained and used internally and need to correspond to what the core expects. The core will not operate if all IDs aren't in this table.
&nbsp;

### content_default
The english string.
&nbsp;

### content_loc\[1-8]
Localized version of **content_default**. The field enumerator refers to a locale. (see [Localization](/how-to/localization))

| idx | Name |
|-----|------|
| 1 | Korean |
| 2 | French |
| 3 | German |
| 4 | Chinese |
| 5 | Taiwanese |
| 6 | Spanish (EU) |
| 7 | Spanish (Latin America) |
| 8 | Russian |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/transports" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transports'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/updates" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'updates'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
