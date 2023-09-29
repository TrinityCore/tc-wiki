---
title: guild_member_withdraw
description:
published: true
date: 2023-07-31T00:07:02.912Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:16.371Z
---

<a href="https://trinitycore.info/en/database/335/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_rank" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_rank'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the daily guild bank withdrawal amount in items and money per player as the [slots per day](../characters/guild_bank_right#slotperday) may be limited.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [tab0](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [tab1](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [tab2](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [tab3](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [tab4](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [tab5](#tab[0-5]) | int | unsigned |  | NO | 0 |  |  |
| [money](#money) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
[character guid](../characters/characters#guid) of the player withdrawing from guild bank.
&nbsp;

### tab\[0-5]
Number of items withdrawn from this tab.
&nbsp;

### money
Amount of money withdrawn from guild bank in copper.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/guild_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_rank" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_rank'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
