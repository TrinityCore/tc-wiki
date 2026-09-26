---
title: account_banned
description: 
published: true
date: 2023-08-01T19:42:19.256Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:40.058Z
---

> This table lists all of the accounts that have been banned along with the date when (or if) the ban will expire.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Account id |
| [bandate](#bandate) | int | unsigned | PRI | NO | 0 |  |  |
| [unbandate](#unbandate) | int | unsigned |  | NO | 0 |  |  |
| [bannedby](#bannedby) | varchar(50) |  |  | NO |  |  |  |
| [banreason](#banreason) | varchar(255) |  |  | NO |  |  |  |
| [active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
references [account.id](../auth/account#id)
&nbsp;

### bandate
Unix timestamp when the account was banned.
&nbsp;

### unbandate
Unix timestamp when the account will be automatically unbanned. 
If **unbandate** is equal to **bandate** this is a permanent ban.
&nbsp;

### bannedby
The name of the character executing the `.ban` command.
&nbsp;

### banreason
The reason for the ban.
&nbsp;

### active
Controls if the ban is currently active or not.
* 0: ban expired
* 1: ban is active
&nbsp;

