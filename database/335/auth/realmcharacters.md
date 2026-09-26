---
title: realmcharacters
description: 
published: true
date: 2023-08-01T21:12:18.382Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:08.875Z
---

> This table holds information on the number of characters each account has for each realm.
> The data in this table is maintained by the core.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [realmid](#realmid) | int | unsigned | PRI | NO | 0 |  |  |
| [acctid](#acctid) | int | unsigned | PRI | NO |  |  |  |
| [numchars](#numchars) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### realmid
The [id](../auth/realmlist#id) of the realm.
&nbsp;

### acctid
The [account id](../auth/account#id).
&nbsp;

### numchars
The number of characters the account has on the realm.
(Range: 0 – 10)
&nbsp;

