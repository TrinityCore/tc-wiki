---
title: battlenet_account_bans
description: This table lists all of the battlenet accounts that have been banned along with the date when (or if) the ban will expire.
published: true
date: 2021-08-21T03:32:25.633Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T15:28:44.730Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Account id |
[bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
[unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
[bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
[banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |

&nbsp;
## Description of fields

### id   
The battlenet account ID. See [battlenet_accounts.id](/database/master/auth/battlenet_accounts#id).
&nbsp;
    
### bandate  
The date when the account was banned, in Unix time.
&nbsp;

### unbandate
The date when the account will be automatically unbanned, in Unix time. A value less than the current date means, in effect, a permanent ban.
&nbsp;

### bannedby 
The character with the rights to the .ban command that banned the account.
&nbsp;

### banreason
The reason for the ban.
&nbsp;
