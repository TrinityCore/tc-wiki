---
title: account_access
description: This table holds security access level for any realm in realmlist table.
published: true
date: 2022-11-21T20:58:01.233Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:41:19.554Z
---

> This table holds security access level for any realm in realmlist table.
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
*- no description -*
&nbsp;

### SecurityLevel
*- no description -*
&nbsp;

### RealmID
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

