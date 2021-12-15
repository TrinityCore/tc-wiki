---
title: autobroadcast
description: This table contains the autobroadcast entries for your realms. Values like it's activity, position and Timer (*.On, *.Center, *.Timer) are defined within the worldserver.conf. They are chosen randomly, based on their weight.
published: true
date: 2021-08-30T05:45:12.991Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T14:08:55.833Z
---

<a href="https://trinitycore.info/de/database/master/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_muted'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battle_pet_slots'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
| [realmid](#realmid) | int(11) | signed | PRI | NO | -1 |  |  |
| [id](#id) | tinyint(3) | unsigned | PRI | NO |  | AUTO_INCREMENT |  |
| [weight](#weight) | tinyint(3) | unsigned |  | YES | 1 |  |  |
| [text](#text) | longtext |  |  | NO |  |  |  |

&nbsp;
## Description of fields

### realmid
The realmlist.id. Defines which realm this entry belongs to. Use **-1** for all realms to load this entry.
&nbsp;

### id
Unique identifier key per realm. Entries with same id will override each other without warnings - this can be used to replace -1 realmid entry on a specific realm.
&nbsp;

### weight
A non-negative integer. Entries with higher weight have more chance to get picked.
&nbsp;

### text
The text to broadcast. Color and item/spell/quest link formating codes can be used.
&nbsp;

<a href="https://trinitycore.info/de/database/master/auth/account_muted" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'account_muted'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/auth/battle_pet_slots" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battle_pet_slots'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>