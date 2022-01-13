---
title: gossip_menu_option_box
description: 
published: true
date: 2022-01-13T16:48:15.815Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:17.128Z
---

<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option_action'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [MenuId](#menuid) | int(10) | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [OptionIndex](#optionindex) | int(10) | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [BoxCoded](#boxcoded) | tinyint(3) | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [BoxMoney](#boxmoney) | int(10) | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [BoxText](#boxtext) | mediumtext |  |  | YES | NULL |  |  | SMSG_GOSSIP_MESSAGE |
| [BoxBroadcastTextId](#boxbroadcasttextid) | int(10) | unsigned |  | NO | 0 |  |  | fetched from hotfixes db (via wpp) |
&nbsp;
## Description of fields

### MenuId
*- no description -*
&nbsp;

### OptionIndex
*- no description -*
&nbsp;

### BoxCoded
*- no description -*
&nbsp;

### BoxMoney
*- no description -*
&nbsp;

### BoxText
*- no description -*
&nbsp;

### BoxBroadcastTextId
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_action" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option_action'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

