---
title: page_text
description: 
published: true
date: 2026-01-18T09:28:54.171Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:48.225Z
---

<a href="https://trinitycore.info/en/database/335/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'outdoorpvp_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/page_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'page_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds the text for readable items like [books](https://aowow.trinitycore.info/?item=11482), as well as readable gameobjects like [statue plaques](https://aowow.trinitycore.info/?object=193942).

The text will be rendered in the ItemTextFrame, which supports [SimpleHTML](https://warcraft.wiki.gg/wiki/UIOBJECT_SimpleHTML) and [UI escape sequences](https://warcraft.wiki.gg/wiki/UI_escape_sequences).


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Text](#text) | longtext |  |  | NO |  |  |  |
| [NextPageID](#nextpageid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
The ID of the text in the page. This number is unique to every text entry.
&nbsp;

### Text
The actual text. The message in this field will be shown as the text on a page.

You can use certain placeholders that will be filled in in-game:
* `$B`: line break
* `$N`: the players name
* `$R`/`$r`: player race in upper case first/lower case
* `$C`/`$c`: player class in upper case first/lower case
* `$Gmale:female[:reference];`: _male_ and _female_ can be replaced with any synonymn you want and one will be chosen depending on the reference. 
_:reference_ is optional and can be `r` (the players race), `c` (the players class) or if omitted the players chosen gender.
* `$4022W`: references a worldstate and will be replaced with it's current value. (here BATTLEFIELD_WG_WORLD_STATE_DEFENDED_H (4022) is chosen as an example)
&nbsp;

### NextPageID
The **ID** of the next page's text entry.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'outdoorpvp_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/page_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'page_text_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
