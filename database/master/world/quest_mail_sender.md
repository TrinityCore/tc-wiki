---
title: quest_mail_sender
description: 
published: true
date: 2022-11-21T21:07:46.213Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:02.771Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestId](#questid) | int | unsigned | PRI | NO | 0 |  |  |
| [RewardMailSenderEntry](#rewardmailsenderentry) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestId
references [quest_template.ID](../world/quest_template#id)
&nbsp;

### RewardMailSenderEntry
[creature_template.entry](../world/creature_template#entry) of the NPC appearing as mail sender.
&nbsp;


