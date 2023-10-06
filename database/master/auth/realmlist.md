---
title: realmlist
description: This table sets up information on all available realms. Each row controls a different realm.
published: true
date: 2023-10-06T19:22:51.034Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T03:06:24.878Z
---

<a href="https://trinitycore.info/en/database/master/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  | auto_increment |  |
| [name](#name) | varchar(32) |  | UNI | NO | '' |  |  |
| [address](#address) | varchar(255) |  |  | NO | 127.0.0.1 |  |  |
| [localAddress](#localaddress) | varchar(255) |  |  | NO | 127.0.0.1 |  |  |
| [localSubnetMask](#localsubnetmask) | varchar(255) |  |  | NO | 255.255.255.0 |  |  |
| [port](#port) | smallint | unsigned |  | NO | 8085 |  |  |
| [icon](#icon) | tinyint | unsigned |  | NO | 0 |  |  |
| [flag](#flag) | tinyint | unsigned |  | NO | 2 |  |  |
| [timezone](#timezone) | tinyint | unsigned |  | NO | 0 |  |  |
| [allowedSecurityLevel](#allowedsecuritylevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [population](#population) | float |  |  | NO | 0 |  |  |
| [gamebuild](#gamebuild) | int | unsigned |  | NO | 51536 |  |  |
| [Region](#region) | tinyint | unsigned |  | NO | 1 |  |  |
| [Battlegroup](#battlegroup) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### id
The realm ID. This number is unique for every realm and it MUST correlate with the RealmID configuration value in worldserver.conf.
&nbsp;

### name
The name of the realm. This will appear in the realm selection list as well as in the character selection screen.
&nbsp;

### address
The public (WAN) or LAN IP address of the world server. Use 127.0.0.1 in this field if only you is connecting to the server (and it runs on the same machine as your client).

Alternatively you can use a domain name like *example&#46;com*.
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

| Icon | Type |
|---|---|
| 0 | Normal |
| 1 | PvP |
| 4 | Normal |
| 6 | RP |
| 8 | RP PvP |

&nbsp;

### flag
Realmflag of this realm.

| Flag | Hex value | Description |
|---|:---:|---|
| 0 | 0x00 | None |
| 1 | 0x01 | Invalid |
| 2 | 0x02 | Offline |
| 4 | 0x04 | SpecifyBuild |
| 8 | 0x08 | Medium |
| 16 | 0x0F | Medium |
| 32 | 0x10 | New Players |
| 64 | 0x20 | Recommended |
| 128 | 0x40 | Full |

&nbsp;

### timezone
The realm timezone, it will be displayed in the tabs of the realmlist

| Icon | Type |
|---|---|
| 1 | Development |
| 2 | United States |
| 3 | Oceanic |
| 4 | Latin America |
| 5 | Tournament |
| 6 | Korea |
| 7 | Tournament |
| 8 | English |
| 9 | German |
| 10 | French |
| 11 | Spanish |
| 12 | Russian |
| 13 | Tournament |
| 14 | Taiwan |
| 15 | Tournament |
| 16 | China |
| 17 | CN1 |
| 18 | CN2 |
| 19 | CN3 |
| 20 | CN4 |
| 21 | CN5 |
| 22 | CN6 |
| 23 | CN7 |
| 24 | CN8 |
| 25 | Tournament |
| 26 | Test Server |
| 27 | Tournament |
| 28 |  |
| 29 | CN9 |
| 30 | Test Server 2 |
| 31 | CN10 |
| 32 | CTC |
| 33 | CNC |
| 34 | CN1/4 |
| 35 | CN/2/6/9 |
| 36 | CN3/7 |
| 37 | Russian Tournament |
| 38 | 	N5/8 |
| 39 | CN11 |
| 40 | CN12 |
| 41 | CN13 |
| 42 | CN14 |
| 43 | CN15 |
| 44 | CN16 |
| 45 | CN17 |
| 46 | CN18 |
| 47 | CN19 |
| 48 | CN20 |
| 49 | Brazil |
| 50 | Italian |
| 51 | Hyrule |
| 52 | QA2 Test |
| 53 |  |
| 54 |  |
| 55 | Recommended Realm |
| 56 | Test |
| 57 | Recommended Realm |
| 58 |  |
| 59 | Future Test |

&nbsp;

### allowedSecurityLevel
The minimum account gmlevel required for accounts to log in to this realm. Changing this value will automatically update the visible in-game realm list, but the Worldserver must be restarted for it to truly take effect.
&nbsp;

### population
This field is automatically updated at regular intervals and will have the current population. The formula to calculate the value in this field is: playerCount / maxPlayerCount * 2. In the realm list in-game, the thresholds for low, medium, and high population are 0.5, 1.0, and 2.0 respectively.
&nbsp;

### gamebuild
Accepted Client version for the realm.
&nbsp;

### Region
*- no description -*
&nbsp;

### Battlegroup
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/auth/realmcharacters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'realmcharacters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/auth/secret_digest" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'secret_digest'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
