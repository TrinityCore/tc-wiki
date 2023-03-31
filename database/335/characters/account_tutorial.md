---
title: account_tutorial
description: 
published: true
date: 2022-11-21T21:22:51.256Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:32.647Z
---

<a href="https://trinitycore.info/en/database/335/characters/account_instance_times" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_instance_times'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/addons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'addons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO | 0 |  | Account Identifier |
| [tut0](#tut0) | int | unsigned |  | NO | 0 |  |  |
| [tut1](#tut1) | int | unsigned |  | NO | 0 |  |  |
| [tut2](#tut2) | int | unsigned |  | NO | 0 |  |  |
| [tut3](#tut3) | int | unsigned |  | NO | 0 |  |  |
| [tut4](#tut4) | int | unsigned |  | NO | 0 |  |  |
| [tut5](#tut5) | int | unsigned |  | NO | 0 |  |  |
| [tut6](#tut6) | int | unsigned |  | NO | 0 |  |  |
| [tut7](#tut7) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### accountId
The unique account ID.
&nbsp;

### tut0
These values 32bits flags. So 8 x 32bits values makes 256 bits available to store 256 tutorial messages status.
Each bit means:

-   0  -  Not yet shown
-   1  -  Shown

This is used to diplay only tutorial messages the character did not see before.

Unselecting the "Show tutorial" option in game, makes all bits to be set, so all tutX columns will contain then 11111111111111111111111111111111 binary = 4294967295 in decimal after this option is changed.
&nbsp;

### tut1
see above
&nbsp;

### tut2
see above
&nbsp;

### tut3
see above
&nbsp;

### tut4
see above
&nbsp;

### tut5
see above
&nbsp;

### tut6
see above
&nbsp;

### tut7
see above
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/account_instance_times" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_instance_times'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/addons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'addons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
