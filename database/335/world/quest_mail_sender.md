---
title: quest_mail_sender
description: 
published: true
date: 2023-07-12T11:45:37.510Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:06.303Z
---

This tables holds alternative mail senders for quest reward mails. If not defined here the quest giver is also the sender.

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

