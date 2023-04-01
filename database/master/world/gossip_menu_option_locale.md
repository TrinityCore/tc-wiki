---
title: gossip_menu_option_locale
description: 
published: true
date: 2023-04-01T23:44:26.807Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:19.746Z
---

<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/graveyard_zone" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'graveyard_zone'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MenuID](#menuid) | int | unsigned | PRI | NO | 0 |  |  |
| [OptionID](#optionid) | int | unsigned | PRI | NO | 0 |  |  |
| [Locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [OptionText](#optiontext) | mediumtext |  |  | YES | NULL |  |  |
| [BoxText](#boxtext) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### MenuID
MenuID as referenced in [`gossip_menu_option.MenuID`](/database/master/world/gossip_menu_option#MenuID)
&nbsp;

### OptionID
Option ID as referenced in [`gossip_menu_option.OptionID`](/database/master/world/gossip_menu_option#OptionID)
&nbsp;

### Locale
|Value|Locale|
|:---:|:---: |
|deDE|German|
|esES|Spanish|
|esMX|Spanish (Latin American)|
|frFR|French|
|itIT|Italian|
|koKR|Korean|
|ptBR|Portuguese|
|ruRU|Russian|
|zhCN|Chinese (China)|
|zhTW|Chinese (Taiwan/Traditional)|
&nbsp;

### OptionText
OptionText for the given locale
&nbsp;

### BoxText
BoxText for the given locale
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gossip_menu_option" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu_option'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/graveyard_zone" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'graveyard_zone'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
