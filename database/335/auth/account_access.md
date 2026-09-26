---
title: account_access
description: 
published: true
date: 2023-08-01T19:28:47.355Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:37.429Z
---

> This table holds security access level for any realm in [realmlist](../auth/realmlist#id) table.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AccountID](#accountid) | int | unsigned | PRI | NO |  |  |  |
| [SecurityLevel](#securitylevel) | tinyint | unsigned |  | NO |  |  |  |
| [RealmID](#realmid) | int | signed | PRI | NO | -1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### AccountID
references [account.id](../auth/account#id)
&nbsp;

### SecurityLevel
The account security level. Different levels have access to different commands. 
The individual level required for a command is defined in the [command table](../world/command) in each realm.

| ID | Name | Comment |
|----|------|---------|
| 0 | SEC_PLAYER |  |
| 1 | SEC_MODERATOR |  |
| 2 | SEC_GAMEMASTER |  |
| 3 | SEC_ADMINISTRATOR |  |
| 4 | :x: SEC_CONSOLE | not available to accounts |
{.dense}

&nbsp;

### RealmID
The [realm id](../auth/realmlist#id).

`-1` applies the rights to all realms.
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

