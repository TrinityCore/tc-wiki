---
title: achievement_reward
description:
published: true
date: 2023-07-07T20:04:34.933Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:38.555Z
---

<a href="https://trinitycore.info/en/database/335/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table describes the reward that you will receive when you obtain a given achievement.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [TitleA](#titlea) | mediumint | unsigned |  | NO | 0 |  |  |
| [TitleH](#titleh) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemID](#itemid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Sender](#sender) | mediumint | unsigned |  | NO | 0 |  |  |
| [Subject](#subject) | varchar(255) |  |  | YES | NULL |  |  |
| [Body](#body) | text |  |  | YES | NULL |  |  |
| [MailTemplateID](#mailtemplateid) | mediumint | unsigned |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
[Achievement ID](/files/DBC/335/achievement#id)
&nbsp;

### TitleA
This is the [CharTitle ID](/files/DBC/335/chartitles#id) for Alliance if the achievement rewards a title.
&nbsp;

### TitleH
This is the [CharTitle ID](/files/DBC/335/chartitles#id) for Horde from if the achievement rewards a title.
&nbsp;

### ItemID
This is the [item](../world/item_template#entry) that you get if the achievement rewards an item. You will get this item in the mail.
&nbsp;

### Sender
This is the [sender](../world/creature_template#entry) of the mail that you receive.
&nbsp;

### Subject
This is the subject of the mail that you receive.
&nbsp;

### Body
This is the text of the body of that mail that you receive.
&nbsp;

### MailTemplateID
This is the [MailTemplate ID](/files/DBC/335/mailtemplate#id) for the mail that you receive. Subject and Text must be empty. They are read from dbc file.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
