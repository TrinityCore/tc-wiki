---
title: account_access
description: This table holds security access level for any realm in realmlist table.
published: true
date: 2021-08-21T00:23:20.831Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:41:19.554Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
| [AccountID](#AccountID) | int(10) | unsigned | PRI | NO |  |  |  |
| [SecurityLevel](#SecurityLevel) | tinyint(3) | unsigned |  | NO |  |  |  |
| [RealmID](#SecurityLevel) | int(11) | signed | PRI | NO | -1 |  |  |
| [Comment](#SecurityLevel) | varchar(255) | signed |  | YES | NULL |  |  |

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
