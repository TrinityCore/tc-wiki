---
title: gossip_menu_option
description: 
published: true
date: 2022-01-13T16:40:37.344Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:12.004Z
---

<a href="https://trinitycore.info/en/database/master/world/gossip_menu" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_action'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [MenuId](#menuid) | int(10) | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [OptionIndex](#optionindex) | int(10) | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [OptionIcon](#optionicon) | tinyint(3) | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [OptionText](#optiontext) | mediumtext |  |  | YES | NULL |  |  | SMSG_GOSSIP_MESSAGE |
| [OptionBroadcastTextId](#optionbroadcasttextid) | int(10) | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
| [OptionType](#optiontype) | int(10) | unsigned |  | NO | 0 |  |  | manually, wpp tries to detect |
| [OptionNpcFlag](#optionnpcflag) | bigint(20) | unsigned |  | NO | 0 |  |  | manually, wpp tries to detect |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### MenuId
*- no description -*
&nbsp;

### OptionIndex
*- no description -*
&nbsp;

### OptionIcon
*- no description -*
&nbsp;

### OptionText
*- no description -*
&nbsp;

### OptionBroadcastTextId
*- no description -*
&nbsp;

### OptionType
*- no description -*
&nbsp;

### OptionNpcFlag
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gossip_menu" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_action'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

