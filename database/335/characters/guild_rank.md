---
title: guild_rank
description: 
published: true
date: 2023-07-31T00:16:57.621Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:19.039Z
---

<a href="https://trinitycore.info/en/database/335/characters/guild_member_withdraw" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_member_withdraw'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the information on all of the ranks available in a guild along with their names and what rights a person with that rank has.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guildid](#guildid) | int | unsigned | PRI | NO | 0 |  |  |
| [rid](#rid) | tinyint | unsigned | PRI | NO |  |  |  |
| [rname](#rname) | varchar(20) |  |  | NO | '' |  |  |
| [rights](#rights) | mediumint | unsigned |  | NO | 0 |  |  |
| [BankMoneyPerDay](#bankmoneyperday) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guildid
references [guild.guildid](../characters/guild#guildid).
&nbsp;

### rid
The particular rank ID. This number must be unique to each rank in a guild.
A guild must have at least 5 and can have at most 10 ranks.
* 0: GR_GUILDMASTER
* 1: GR_OFFICER
* 2: GR_VETERAN
* 3: GR_MEMBER
* 4: GR_INITIATE
&nbsp;

### rname
The name of the rank that is displayed in-game.
&nbsp;

### rights
The rights a player of this rank has in the guild. 
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 64 | 0x00000040 | GR_RIGHT_EMPTY | Having just this flag by itself is equivalent to having no rights at all. |
| 65 | 0x00000041 | GR_RIGHT_GCHATLISTEN | Player can read messages in the guild general chat channel. |
| 66 | 0x00000042 | GR_RIGHT_GCHATSPEAK | Player can type messages in the guild general chat channel. |
| 68 | 0x00000044 | GR_RIGHT_OFFCHATLISTEN | Player can read messages in the guild officers channel. |
| 72 | 0x00000048 | GR_RIGHT_OFFCHATSPEAK | Player can type messages in the guild officers channel. |
| 80 | 0x00000050 | GR_RIGHT_INVITE | Can invite other players to guild. |
| 96 | 0x00000060 | GR_RIGHT_REMOVE | Can kick other players out of guild. |
| 192 | 0x000000C0 | GR_RIGHT_PROMOTE | Can promote other players. |
| 320 | 0x00000140 | GR_RIGHT_DEMOTE | Can demote other players. |
| 4160 | 0x00001040 | GR_RIGHT_SETMOTD | Can change the guild message of the day. |
| 8256 | 0x00002040 | GR_RIGHT_EPNOTE | Can edit other players' personal notes. |
| 16448 | 0x00004040 | GR_RIGHT_VIEWOFFNOTE | Can view the officer notes of other players. |
| 32832 | 0x00008040 | GR_RIGHT_EOFFNOTE | Can edit officer notes of other players. |
| 65600 | 0x00010040 | GR_RIGHT_MODIFY_GUILD_INFO | Can edit guild info. |
| 131072 | 0x00020000 | GR_RIGHT_WITHDRAW_GOLD_LOCK | Can remove money withdraw capacity. |
| 262144 | 0x00040000 | GR_RIGHT_WITHDRAW_REPAIR | Can withdraw gold for repair. |
| 524288 | 0x00080000 | GR_RIGHT_WITHDRAW_GOLD | Can withdraw gold. |
| 1048576 | 0x00100000 | GR_RIGHT_CREATE_GUILD_EVENT | Can create a guild event. |
| 1962495 | 0x001DF1FF | GR_RIGHT_ALL | Has all of the rights. |
{.dense}

&nbsp;

### BankMoneyPerDay
The total money per day, in copper, that a person with this rank can withdraw. Use the maximum value of an unsigned int (4294967295) to specify unlimited amount.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/guild_member_withdraw" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'guild_member_withdraw'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
