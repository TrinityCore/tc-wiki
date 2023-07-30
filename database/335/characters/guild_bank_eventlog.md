---
title: guild_bank_eventlog
description: 
published: true
date: 2023-07-30T22:44:04.604Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:00.434Z
---

<a href="https://trinitycore.info/en/database/335/characters/guild" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Logs player actions against the guild bank to be displayed in the guild bank log in-game.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  | Guild Identificator |
| [LogGuid](#logguid) | int | unsigned | PRI | NO | 0 |  | Log record identificator - auxiliary column |
| [TabId](#tabid) | tinyint | unsigned | PRI | NO | 0 |  | Guild bank TabId |
| [EventType](#eventtype) | tinyint | unsigned |  | NO | 0 |  | Event type |
| [PlayerGuid](#playerguid) | int | unsigned | MUL | NO | 0 |  |  |
| [ItemOrMoney](#itemormoney) | int | unsigned |  | NO | 0 |  |  |
| [ItemStackCount](#itemstackcount) | smallint | unsigned |  | NO | 0 |  |  |
| [DestTabId](#desttabid) | tinyint | unsigned |  | NO | 0 |  | Destination Tab Id |
| [TimeStamp](#timestamp) | int | unsigned |  | NO | 0 |  | Event UNIX time |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### LogGuid
Log record enumerator, unique per guild.
&nbsp;

### TabId
The bank tab the event occurs on.
* 0 – 5: Item tab
* 100: Money tab
&nbsp;

### EventType
`enum GuildBankEventLogTypes`
| ID | Name |
|----|------|
| 1 | GUILD_BANK_LOG_DEPOSIT_ITEM |
| 2 | GUILD_BANK_LOG_WITHDRAW_ITEM |
| 3 | GUILD_BANK_LOG_MOVE_ITEM |
| 4 | GUILD_BANK_LOG_DEPOSIT_MONEY |
| 5 | GUILD_BANK_LOG_WITHDRAW_MONEY |
| 6 | GUILD_BANK_LOG_REPAIR_MONEY |
| 7 | GUILD_BANK_LOG_MOVE_ITEM2 |
| 8 | GUILD_BANK_LOG_UNK1 |
| 9 | GUILD_BANK_LOG_BUY_SLOT |
{.dense}

&nbsp;

### PlayerGuid
The [character guid](../characters/characters#guid) causing the event.
&nbsp;

### ItemOrMoney
* money event: money in copper
* item event: [item entry](../world/item_template#entry)
&nbsp;

### ItemStackCount
* money event: 0
* item event: [item stack](../world/item_template#stackable)
&nbsp;

### DestTabId
For item move events the destination tab (Range: 0 – 5), else 0.
&nbsp;

### TimeStamp
Unix timestamp when the event occured.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/guild" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/guild_bank_item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'guild_bank_item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
