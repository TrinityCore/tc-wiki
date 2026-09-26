---
title: account_muted
description: 
published: true
date: 2023-08-01T19:51:53.132Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:42.686Z
---

> This table lists all of the accounts that have been muted along with the date when the mute will expire.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [mutedate](#mutedate) | int | unsigned | PRI | NO | 0 |  |  |
| [mutetime](#mutetime) | int | unsigned |  | NO | 0 |  |  |
| [mutedby](#mutedby) | varchar(50) |  |  | NO |  |  |  |
| [mutereason](#mutereason) | varchar(255) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
references [account.id](../auth/account#id)
&nbsp;

### mutedate
Unix timestamp when the account was muted.
&nbsp;

### mutetime
Mute duration in minutes.
&nbsp;

### mutedby
The name of the character executing the `.mute` command.
&nbsp;

### mutereason
The reason for the mute.
&nbsp;

