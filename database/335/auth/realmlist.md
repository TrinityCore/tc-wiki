---
title: realmlist
description: 
published: true
date: 2024-04-16T20:29:25.716Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:11.484Z
---

<a href="https://trinitycore.info/en/database/335/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table sets up information on all available realms. Each row controls a different realm.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  | auto_increment |  |
| [name](#name-alt) | varchar(32) |  | UNI | NO | '' |  |  |
| [address](#address) | varchar(255) |  |  | NO | 127.0.0.1 |  |  |
| [localAddress](#localaddress) | varchar(255) |  |  | NO | 127.0.0.1 |  |  |
| [localSubnetMask](#localsubnetmask) | varchar(255) |  |  | NO | 255.255.255.0 |  |  |
| [port](#port) | smallint | unsigned |  | NO | 8085 |  |  |
| [icon](#icon) | tinyint | unsigned |  | NO | 0 |  |  |
| [flag](#flag) | tinyint | unsigned |  | NO | 2 |  |  |
| [timezone](#timezone) | tinyint | unsigned |  | NO | 0 |  |  |
| [allowedSecurityLevel](#allowedsecuritylevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [population](#population) | float |  |  | NO | 0 |  |  |
| [gamebuild](#gamebuild) | int | unsigned |  | NO | 12340 |  |  |
&nbsp;
## Description of fields

### id <!-- {#id-alt} -->
The realm ID. This number is unique for every realm and it MUST correlate with the RealmID configuration value in worldserver.conf.
&nbsp;

### name <!-- {#name-alt} -->
The name of the realm. This will appear in the realm selection list as well as in the character selection screen.
&nbsp;

### address
The public (WAN) or LAN IP address of the world server. Use 127.0.0.1 in this field if only you is connecting to the server (and it runs on the same machine as your client).

Alternatively you can use a domain name like *example.com*.
&nbsp;

### localAddress
Mostly 127.0.0.1
&nbsp;

### localSubnetMask
*- no description -*
&nbsp;

### port
The port that the world server is running on. If all world servers are on the same machine, they will all need to use a different port.
&nbsp;

### icon
The icon of the realm.

[`enum RealmType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/Realm/Realm.h#L50-L62)
| ID | Name | Comment |
|----|------|---------|
| 0 | REALM_TYPE_NORMAL | Normal |
| 1 | REALM_TYPE_PVP | PvP |
| 4 | REALM_TYPE_NORMAL2 | Normal |
| 6 | REALM_TYPE_RP | RP |
| 8 | REALM_TYPE_RPPVP | RP PvP |
&nbsp;

### flag
Realmflag of this realm.

[`enum RealmFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/Realm/Realm.h#L26-L37)
| Value | Flag | Name | Description |
|-------|------|------|-------------|
| 0 | 0x00 | REALM_FLAG_NONE | None |
| 1 | 0x01 | REALM_FLAG_VERSION_MISMATCH | Invalid |
| 2 | 0x02 | REALM_FLAG_OFFLINE | Offline |
| 4 | 0x04 | REALM_FLAG_SPECIFYBUILD | Specify Build |
| 8 | 0x08 | REALM_FLAG_UNK1 | Medium |
| 16 | 0x10 | REALM_FLAG_UNK2 | Medium |
| 32 | 0x20 | REALM_FLAG_RECOMMENDED | Recommended |
| 64 | 0x40 | REALM_FLAG_NEW | New Players |
| 128 | 0x80 | REALM_FLAG_FULL | Full |
{.dense}

&nbsp;

### timezone
The realm timezone, it will be displayed in the tabs of the realmlist.

**timezone** corresponds to [cfg_categories IDs](/files/DBC/335/cfg_categories#id)
| timezone | displayed name | | timezone | displayed name |
| --- | --- |--| --- | --- |
| 1 | Development | | 20 | CN4 |
| 2 | United States | | 21 | CN5 |
| 3 | Oceanic | | 22 | CN6 |
| 4 | Latin America | | 23 | CN7 |
| 5 | Tournament | | 24 | CN8 |
| 6 | Korea | | 25 | Tournament |
| 7 | Tournament | | 26 | Test Server |
| 8 | English | | 27 | Tournament |
| 9 | German | | 28 | QA Server |
| 10 | French | | 29 | CN9 |
| 11 | Spanish | | 30 | Test Server 2 |
| 12 | Russian | | 31 | CN10 |
| 13 | Tournament | | 32 | CTC |
| 14 | Taiwan | | 33 | CNC |
| 15 | Tournament | | 34 | CN1/4 |
| 16 | China | | 35 | CN2/6/9 |
| 17 | CN1 | | 36 | CN3/7 |
| 18 | CN2 | | 37 | CN5/8 |
| 19 | CN3 | | | |

{.dense}

&nbsp;

### allowedSecurityLevel
The minimum [SecurityLevel](../auth/account_access#securitylevel) required for accounts to log in to this realm.

Changing this value will automatically update the visible in-game realm list, but the Worldserver must be restarted for it to truly take effect.
&nbsp;

### population
This field is automatically updated at regular intervals and will have the current population.

The formula to calculate the value in this field is: `playerCount / maxPlayerCount * 2`.
In the realm list in-game, the thresholds for low, medium, and high population are 0.5, 1.0, and 2.0 respectively.
&nbsp;

### gamebuild
Accepted Client version for the realm.

|gamebuild | Client Patch |
| --- | --- |
| 5875  | 1.12.1 |
| 6005  | 1.12.2 |
| 8606  | 2.4.3  |
| 9947  | 3.1.3 |
| 10146  | 3.2.0  |
| 10505  | 3.2.2a |
| 10571  | 3.3.0  |
| 11159  | 3.3.0a  |
| 11403  | 3.3.2  |
| 11623  | 3.3.3  |
| 11723  | 3.3.3a  |
| 12340  | 3.3.5a  |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
