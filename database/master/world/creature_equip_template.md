---
title: creature_equip_template
description: 
published: true
date: 2022-01-20T10:40:47.751Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:49.778Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_classlevelstats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_formations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ID](#id) | tinyint(3) | unsigned | PRI | NO | 1 |  |  |
| [ItemID1](#itemid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [AppearanceModID1](#appearancemodid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemVisual1](#itemvisual1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [AppearanceModID2](#appearancemodid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemVisual2](#itemvisual2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | int(10) | unsigned |  | NO | 0 |  |  |
| [AppearanceModID3](#appearancemodid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemVisual3](#itemvisual3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureID
The direct corresponding id in creature table or entry in creature_template table.
&nbsp;

### ID
An additional identifier for each individual entry, enabling multiple equipment for one creature entry. Counter **must** start with 1 and grow accordingly.
&nbsp;

### ItemID1
This is the item number of the equipment used in the right hand from [ItemSparse.db2](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} or [Item.db2](https://wow.tools/dbc/?dbc=item){target=_blank}.
&nbsp;

### AppearanceModID1
ItemID + AppearanceModID together form a key to get DisplayID.
Check: [ItemModifiedAppearance.db2](https://wow.tools/dbc/?dbc=itemmodifiedappearance){target=_blank}
&nbsp;

### ItemVisual1
ItemVisual is ID for [ItemVisuals.db2](https://wow.tools/dbc/?dbc=itemvisuals){target=_blank}, for e.g. enchant visuals.
&nbsp;

### ItemID2
This is the item number of the equipment used in the left hand from [ItemSparse.db2](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} or [Item.db2](https://wow.tools/dbc/?dbc=item){target=_blank}.
&nbsp;

### AppearanceModID2
ItemID + AppearanceModID together form a key to get DisplayID.
Check: [ItemModifiedAppearance.db2](https://wow.tools/dbc/?dbc=itemmodifiedappearance){target=_blank}
&nbsp;

### ItemVisual2
ItemVisual is ID for [ItemVisuals.db2](https://wow.tools/dbc/?dbc=itemvisuals){target=_blank}, for e.g. enchant visuals.
&nbsp;

### ItemID3
This is the item number of the equipment used in the ranged slot from [ItemSparse.db2](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} or [Item.db2](https://wow.tools/dbc/?dbc=item){target=_blank}.
&nbsp;

### AppearanceModID3
ItemID + AppearanceModID together form a key to get DisplayID.
Check: [ItemModifiedAppearance.db2](https://wow.tools/dbc/?dbc=itemmodifiedappearance){target=_blank}
&nbsp;

### ItemVisual3
ItemVisual is ID for [ItemVisuals.db2](https://wow.tools/dbc/?dbc=itemvisuals){target=_blank}, for e.g. enchant visuals.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_classlevelstats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_formations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

