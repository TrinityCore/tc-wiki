---
title: achievement_reward
description: This table describes the reward that you will receive when you obtain a given achievement.
published: true
date: 2022-04-17T18:35:04.762Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:41.306Z
---

<a href="https://trinitycore.info/en/database/master/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [TitleA](#titlea) | int | unsigned |  | NO | 0 |  |  |
| [TitleH](#titleh) | int | unsigned |  | NO | 0 |  |  |
| [ItemID](#itemid) | int | unsigned |  | NO | 0 |  |  |
| [Sender](#sender) | int | unsigned |  | NO | 0 |  |  |
| [Subject](#subject) | varchar(255) |  |  | YES | NULL |  |  |
| [Body](#body) | mediumtext |  |  | YES | NULL |  |  |
| [MailTemplateID](#mailtemplateid) | int | unsigned |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID
ID from [Achievement.db2](https://wow.tools/dbc/?dbc=achievement){target=_blank}.
&nbsp;

### TitleA
This is the ID of the title for Aliance from [CharTitles.db2](https://wow.tools/dbc/?dbc=chartitles){target=_blank} if the achievement rewards a title.
&nbsp;

### TitleH
This is the ID of the title for Horde from [CharTitles.db2](https://wow.tools/dbc/?dbc=chartitles){target=_blank} if the achievement rewards a title.
&nbsp;

### ItemID
This is the [item](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} that you get if the achievement rewards an item. You will get this item in the mail.
&nbsp;

### Sender
This is the sender of the mail that you receive.
&nbsp;

### Subject
This is the subject of the mail that you receive.
&nbsp;

### Body
This is the text of the body of that mail that you receive.
&nbsp;

### MailTemplateID
This is Id of MailTemplate from [MailTemplate.db2](https://wow.tools/dbc/?dbc=mailtemplate){target=_blank} of that mail that you receive. Subject and Text must be empty. They are read from db2 file.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_reward_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
