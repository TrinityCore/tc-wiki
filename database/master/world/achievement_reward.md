---
title: achievement_reward
description: This table describes the reward that you will receive when you obtain a given achievement.
published: true
date: 2022-11-21T21:03:05.263Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:41.306Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [TitleA](#titlea) | int | unsigned |  | NO | 0 |  |  |
| [TitleH](#titleh) | int | unsigned |  | NO | 0 |  |  |
| [ItemID](#itemid) | int | unsigned |  | NO | 0 |  |  |
| [Sender](#sender) | int | unsigned |  | NO | 0 |  |  |
| [Subject](#subject) | varchar(255) |  |  | YES | NULL |  |  |
| [Body](#body) | mediumtext |  |  | YES | NULL |  |  |
| [MailTemplateID](#mailtemplateid) | int | unsigned |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
ID from [Achievement.db2](https://wago.tools/db2/achievement){target=_blank}.
&nbsp;

### TitleA
This is the ID of the title for Aliance from [CharTitles.db2](https://wago.tools/db2/chartitles){target=_blank} if the achievement rewards a title.
&nbsp;

### TitleH
This is the ID of the title for Horde from [CharTitles.db2](https://wago.tools/db2/chartitles){target=_blank} if the achievement rewards a title.
&nbsp;

### ItemID
This is the [item](https://wago.tools/db2/itemsparse){target=_blank} that you get if the achievement rewards an item. You will get this item in the mail.
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
This is Id of MailTemplate from [MailTemplate.db2](https://wago.tools/db2/mailtemplate){target=_blank} of that mail that you receive. Subject and Text must be empty. They are read from db2 file.
&nbsp;

