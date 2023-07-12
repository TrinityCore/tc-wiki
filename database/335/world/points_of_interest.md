---
title: points_of_interest
description: 
published: true
date: 2023-07-12T10:25:14.408Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:44.760Z
---

<a href="https://trinitycore.info/en/database/335/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds points of interest (POI) to be displayed as map markers. 
e.g.: When asking a City Guard for the location of a trainer. 


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  |
| [Icon](#icon) | mediumint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | mediumint | unsigned |  | NO | 0 |  |  |
| [Importance](#importance) | mediumint | unsigned |  | NO | 0 |  |  |
| [Name](#name) | text |  |  | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
Unique id to be referenced by the scripting system to display the POI.
&nbsp;

### PositionX
X postion for the _map_ this POI gets shown on.
&nbsp;

### PositionY
Y postion for the _map_ this POI gets shown on.
&nbsp;

### Icon

excerpt from [`enum Poi_Icon`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Creature/GossipDef.h):
| ID | Name | Comment |
|----|------|---------|
| 0 | ICON_POI_BLANK | Blank (not visible) |
| 1 | ICON_POI_GREY_AV_MINE | Grey mine lorry |
| 2 | ICON_POI_RED_AV_MINE | Red mine lorry |
| 3 | ICON_POI_BLUE_AV_MINE | Blue mine lorry |
| 4 | ICON_POI_BWTOMB | Blue and White Tomb Stone |
| 5 | ICON_POI_SMALL_HOUSE | Small house |
| 6 | ICON_POI_GREYTOWER | Grey Tower |
| 7 | ICON_POI_REDFLAG | Red Flag w/Yellow ! |
| 8 | ICON_POI_TOMBSTONE | Normal tomb stone (brown) |
| 9 | ICON_POI_BWTOWER | Blue and White Tower |
| 10 | ICON_POI_REDTOWER | Red Tower |
| 11 | ICON_POI_BLUETOWER | Blue Tower |
| 12 | ICON_POI_RWTOWER | Red and White Tower |
| 13 | ICON_POI_REDTOMB | Red Tomb Stone |
| 14 | ICON_POI_RWTOMB | Red and White Tomb Stone |
| 15 | ICON_POI_BLUETOMB | Blue Tomb Stone |
| 21 | ICON_POI_GREYLOGS | Grey Wood Logs |
| 22 | ICON_POI_BWLOGS | Blue and White Wood Logs |
| 23 | ICON_POI_BLUELOGS | Blue Wood Logs |
| 24 | ICON_POI_RWLOGS | Red and White Wood Logs |
| 25 | ICON_POI_REDLOGS | Red Wood Logs |
| 31 | ICON_POI_GREYHOUSE | Grey House |
| 32 | ICON_POI_BWHOUSE | Blue and White House |
| 33 | ICON_POI_BLUEHOUSE | Blue House |
| 34 | ICON_POI_RWHOUSE | Red and White House |
| 35 | ICON_POI_REDHOUSE | Red House |
| 36 | ICON_POI_GREYHORSE | Grey Horse |
| 37 | ICON_POI_BWHORSE | Blue and White Horse |
| 38 | ICON_POI_BLUEHORSE | Blue Horse |
| 39 | ICON_POI_RWHORSE | Red and White Horse |
| 40 | ICON_POI_REDHORSE | Red Horse |
{.dense}

&nbsp;

### Flags
*unknown / just sent to client*
&nbsp;

### Importance
*unknown / just sent to client*
&nbsp;

### Name
Text of the onMouseover tooltip for the **Icon**.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
