---
title: hotfix_blob
description: 
published: true
date: 2021-10-16T17:42:04.475Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:03.837Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/holidays" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'holidays'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/hotfix_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TableHash](#tablehash) | int(10) | unsigned | PRI | NO |  |  |  |
| [RecordId](#recordid) | int(11) | signed | PRI | NO |  |  |  |
| [locale](#locale) | varchar(4) | signed | PRI | NO |  |  |  |
| [Blob](#blob) | blob |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### TableHash
Every DB2 has an unique TableHash.

The header part of each DB2 contains its TableHash.
It can also be calculated: [(wowdev.wiki) SStrHash](https://wowdev.wiki/SStrHash)

A (mostly) full list of all hashes can be found in TrinityCore's [WowPacketParser](https://github.com/TrinityCore/WowPacketParser/blob/master/WowPacketParser/Enums/DB2Hash.cs)
&nbsp;

### RecordId
This is the corresponding identifier. Inside DB2 its the `ID`.
&nbsp;

### locale
Locale string e.g. `enUS`, `deDE`, etc.
&nbsp;

### Blob
Data stored as blob, plainly sent to client without structure.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/holidays" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'holidays'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/hotfix_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

