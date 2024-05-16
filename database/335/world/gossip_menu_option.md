---
title: gossip_menu_option
description: 
published: true
date: 2024-05-16T11:19:32.959Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:41.659Z
---

<a href="https://trinitycore.info/en/database/335/world/gossip_menu" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds information about menu options a gossip NPC can have.
Examples of options: `"Train me!"`, `"I want to unlearn my talents"`

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MenuID](#menuid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [OptionID](#optionid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [OptionIcon](#optionicon) | int | unsigned |  | NO | 0 |  |  |
| [OptionText](#optiontext) | mediumtext |  |  | YES | NULL |  |  |
| [OptionBroadcastTextID](#optionbroadcasttextid) | int | signed |  | NO | 0 |  |  |
| [OptionType](#optiontype) | tinyint | unsigned |  | NO | 0 |  |  |
| [OptionNpcFlag](#optionnpcflag) | int | unsigned |  | NO | 0 |  |  |
| [ActionMenuID](#actionmenuid) | int | unsigned |  | NO | 0 |  |  |
| [ActionPoiID](#actionpoiid) | int | unsigned |  | NO | 0 |  |  |
| [BoxCoded](#boxcoded) | tinyint | unsigned |  | NO | 0 |  |  |
| [BoxMoney](#boxmoney) | int | unsigned |  | NO | 0 |  |  |
| [BoxText](#boxtext) | mediumtext |  |  | YES | NULL |  |  |
| [BoxBroadcastTextID](#boxbroadcasttextid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### MenuID
Gossip entry from [gossip_menu.MenuID](../world/gossip_menu#menuid) this option is associated with.
If this is the default gossip option for the selected NPC, verify that the NPC has this value in it's [creature_template.gossip_menu_id](../world/creature_template#gossip_menu_id) .
&nbsp;

### OptionID
The id associated with this gossip_menu_option. Must be unique for a given **MenuID** starting from 0.
Value increments by 1 if there are multiple options in the same gossip_menu.
&nbsp;

### OptionIcon
| ID | Name | Comment |
|----|------|---------|
| 0 | GOSSIP_ICON_CHAT | white chat bubble |
| 1 | GOSSIP_ICON_VENDOR | brown bag |
| 2 | GOSSIP_ICON_TAXI | flightmarker (paperplane) |
| 3 | GOSSIP_ICON_TRAINER | brown book (trainer) |
| 4 | GOSSIP_ICON_INTERACT_1 | golden interaction wheel |
| 5 | GOSSIP_ICON_INTERACT_2 | golden interaction wheel |
| 6 | GOSSIP_ICON_MONEY_BAG | brown bag (with gold coin in lower corner) |
| 7 | GOSSIP_ICON_TALK | white chat bubble (with "..." inside) |
| 8 | GOSSIP_ICON_TABARD | white tabard |
| 9 | GOSSIP_ICON_BATTLE | two crossed swords |
| 10 | GOSSIP_ICON_DOT | yellow dot/point |
{.dense}

&nbsp;

### OptionText
This is the text that you want to be displayed in the player selectable option. Examples would be: 
* "Please train me."
* "I would like to browse your goods."
* "Learn Dual Spec".

If **OptionBroadcastTextID** contains a valid [broadcast_text.ID](../world/broadcast_text#id), it links to broadcast_text so the content from broadcast_text is displayed directly instead of the **OptionText** field content.

&nbsp;

### OptionBroadcastTextID
The ID of the same text in [broadcast_text](../world/broadcast_text#id).
&nbsp;

### OptionType
| OptionType | Name | npcflag Name | OptionNpcFlag |
|------------|------|--------------|---------------|
| 0 | GOSSIP_OPTION_NONE | UNIT_NPC_FLAG_NONE | 0 | 
| 1 | GOSSIP_OPTION_GOSSIP | UNIT_NPC_FLAG_GOSSIP | 1 | 
| 2 | GOSSIP_OPTION_QUESTGIVER | UNIT_NPC_FLAG_QUESTGIVER | 2 | 
| 3 | GOSSIP_OPTION_VENDOR | UNIT_NPC_FLAG_VENDOR | 128 | 
| 4 | GOSSIP_OPTION_TAXIVENDOR | UNIT_NPC_FLAG_TAXIVENDOR | 8192 | 
| 5 | GOSSIP_OPTION_TRAINER | UNIT_NPC_FLAG_TRAINER | 16 | 
| 6 | GOSSIP_OPTION_SPIRITHEALER | UNIT_NPC_FLAG_SPIRITHEALER | 16384 | 
| 7 | GOSSIP_OPTION_SPIRITGUIDE | UNIT_NPC_FLAG_SPIRITGUIDE | 32768 | 
| 8 | GOSSIP_OPTION_INNKEEPER | UNIT_NPC_FLAG_INNKEEPER | 65536 | 
| 9 | GOSSIP_OPTION_BANKER | UNIT_NPC_FLAG_BANKER | 131072 | 
| 10 | GOSSIP_OPTION_PETITIONER | UNIT_NPC_FLAG_PETITIONER | 262144 | 
| 11 | GOSSIP_OPTION_TABARDDESIGNER | UNIT_NPC_FLAG_TABARDDESIGNER | 524288 | 
| 12 | GOSSIP_OPTION_BATTLEFIELD | UNIT_NPC_FLAG_BATTLEFIELDPERSON | 1048576 | 
| 13 | GOSSIP_OPTION_AUCTIONEER | UNIT_NPC_FLAG_AUCTIONEER | 2097152 | 
| 14 | GOSSIP_OPTION_STABLEPET | UNIT_NPC_FLAG_STABLE | 4194304 | 
| 15 | GOSSIP_OPTION_ARMORER | UNIT_NPC_FLAG_ARMORER | 4096 | 
| 16 | GOSSIP_OPTION_UNLEARNTALENTS | UNIT_NPC_FLAG_TRAINER (bonus option for GOSSIP_OPTION_TRAINER) | 16 |  
| 17 | GOSSIP_OPTION_UNLEARNPETTALENTS | UNIT_NPC_FLAG_TRAINER (bonus option for GOSSIP_OPTION_TRAINER) | 16 |
| 18 | GOSSIP_OPTION_LEARNDUALSPEC | UNIT_NPC_FLAG_TRAINER (bonus option for GOSSIP_OPTION_TRAINER) | 16 |
| 19 | GOSSIP_OPTION_OUTDOORPVP | added by code (option for outdoor pvp creatures) |  |
| 20 | GOSSIP_OPTION_DUALSPEC_INFO | UNIT_NPC_FLAG_TRAINER (bonus option for GOSSIP_OPTION_TRAINER) | 16 |
{.dense}

&nbsp;

### OptionNpcFlag
This is the [npcflag](../world/creature_template#npcflag) that the NPC must have to display this option. (See table in previous field)
&nbsp;

### ActionMenuID
If you want to create a sub-menu, this is the ID ([gossip_menu.MenuID](../world/gossip_menu#menuid) / [gossip_menu_option.menuID](../world/gossip_menu_option#menuid)) to link to to create that sub-menu.
&nbsp;

### ActionPoiID
If you want a POI (point of interest) to display on the minimap (like how a city guard places a marker when you ask directions), this is the ID from [points_of_interest](../world/points_of_interest#id)
&nbsp;

### BoxCoded
If you want a box to display where you have to enter a code, set this field to `1`.
&nbsp;

### BoxMoney
The amount of money the player has to pay for the selected option, appears in the confirmation box as amount of gold, silver, copper.
The DB value you insert here must be given in the number of copper, so 10 gold is entered as 100000 (10g 00s 00c).
&nbsp;

### BoxText
This is the text of the window that appears that has "Yes" or "No" as clickable buttons. This is useful if you want a Yes/No confirmation window before the script executes. For example: "Are you sure you want to teleport to Dalaran?".
If **BoxBroadCastTextID** contains a valid [broadcast_text.ID](../world/broadcast_text#id), it links to broadcast_text so the content from broadcast_text is displayed directly instead of the **BoxText** field content.
&nbsp;

### BoxBroadcastTextID
The ID of the same text in [broadcast_text](../world/broadcast_text#id).
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;


<a href="https://trinitycore.info/en/database/335/world/gossip_menu" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gossip_menu'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gossip_menu_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gossip_menu_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
