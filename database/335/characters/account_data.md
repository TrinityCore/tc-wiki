---
title: account_data
description: 
published: true
date: 2023-07-24T20:10:21.939Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:27.362Z
---

> Contains data about client account and settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO | 0 |  | Account Identifier |
| [type](#type) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [data](#data) | blob |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### accountId
The unique [account id](../auth/account#id).
&nbsp;

### type
- 0: Global-account config cache
- 2: Global-account bindings cache
- 4: Global-account macros cache
&nbsp;

### time
Time of last modification in Unixtime
&nbsp;

### data
No description can be written. You just must understand it's data.
&nbsp;

