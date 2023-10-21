---
title: mail_level_reward
description: 
published: true
date: 2022-11-21T21:06:16.336Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:55.578Z
---

<a href="https://trinitycore.info/en/database/master/world/linked_respawn" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'linked_respawn'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/mail_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [raceMask](#racemask) | bigint | unsigned | PRI | NO |  |  |  |
| [mailTemplateId](#mailtemplateid) | int | unsigned |  | NO | 0 |  |  |
| [senderEntry](#senderentry) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### level
Level required for receiving specific mail
&nbsp;

### raceMask
Players race must match mask to receive mail.
Calculate using table below. (ordered by Race ID)
| Race | Mask |
| ---------- | --- |
| RACE_HUMAN | 0x1 |
| RACE_ORC | 0x2 |
| RACE_DWARF | 0x4 |
| RACE_NIGHTELF | 0x8 |
| RACE_UNDEAD_PLAYER | 0x10 |
| RACE_TAUREN | 0x20 |
| RACE_GNOME | 0x40 |
| RACE_TROLL | 0x80 |
| RACE_GOBLIN | 0x100 |
| RACE_BLOODELF | 0x200 |
| RACE_DRAENEI | 0x400 |
| RACE_WORGEN | 0x200000 |
| RACE_PANDAREN_NEUTRAL | 0x800000 |
| RACE_PANDAREN_ALLIANCE | 0x1000000 |
| RACE_PANDAREN_HORDE | 0x2000000 |
| RACE_NIGHTBORNE | 0x4000000 |
| RACE_HIGHMOUNTAIN_TAUREN | 0x8000000 |
| RACE_VOID_ELF | 0x10000000 |
| RACE_LIGHTFORGED_DRAENEI | 0x20000000 |
| RACE_ZANDALARI_TROLL | 0x40000000 |
| RACE_KUL_TIRAN | 0x80000000 |
| RACE_DARK_IRON_DWARF | 0x800 |
| RACE_VULPERA | 0x1000 |
| RACE_MAGHAR_ORC | 0x2000 |
| RACE_MECHAGNOME | 0x4000 |
| RACE_DRACTHYR_ALLIANCE | 0x10000 |
| RACE_DRACTHYR_HORDE | 0x8000 |


| Precalculated | Mask |
| -------- | ---- |
| RACEMASK_ALLIANCE | 0xB1214C4D |
| RACEMASK_HORDE | 0x4E00B3B2 |
| RACEMASK_ALL_PLAYABLE | 0xFFA1FFFF |
&nbsp;

### mailTemplateId
[MailTemplate ID](https://wow.tools/dbc/?dbc=mailtemplate) to send.
&nbsp;

### senderEntry
[creature_template.entry](../world/creature_template#entry) used as source of the mail.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/linked_respawn" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'linked_respawn'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/mail_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

