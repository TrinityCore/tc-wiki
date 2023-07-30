---
title: guild_bank_right
description: 
published: true
date: 2023-07-30T23:21:24.650Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:05.790Z
---

<a href="https://trinitycore.info/en/database/335/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_item'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_tab'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table hold informations regarding the right guild member have to withdraw, deposit etc at the guild bank.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [rid](#rid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [gbright](#gbright) | tinyint | unsigned |  | NO | 0 |  |  |
| [SlotPerDay](#slotperday) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### TabId
The [TabId](../characters/guild_bank_tab#tabid) this permission belongs to.
&nbsp;

### rid
the guild rank this permission belongs to.
(Range: 0 - 9)
&nbsp;

### gbright
`enum GuildBankRights`
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | GUILD_BANK_RIGHT_VIEW_TAB |  |
| 2 | 0x02 | GUILD_BANK_RIGHT_PUT_ITEM |  |
| 4 | 0x04 | GUILD_BANK_RIGHT_UPDATE_TEXT | update item name shown when navigating the tab |
| 3 | 0x03 | GUILD_BANK_RIGHT_DEPOSIT_ITEM |  |
| 255 | 0xFF | GUILD_BANK_RIGHT_FULL |  |
{.dense}

&nbsp;

### SlotPerDay
The number of items that a player can withdraw per day (if permissions give him the right to withdraw items).
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_bank_item'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_tab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_tab'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
