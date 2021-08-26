---
title: realmcharacters
description: This table holds information on the number of characters each account has for each realm. The data in this table is maintained by the core.
published: true
date: 2021-08-26T02:41:58.611Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:41:58.611Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[realmid](#realmid) | int(10) | unsigned | PRI | NO | 0 |  |  |
[acctid](#acctid) | int(10) | unsigned | PRI | NO |  |  |  |
[numchars](#numchars) | tinyint(3) | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### realmid   
The ID of the realm. See realmlist.id
&nbsp;
    
### acctid  
The account ID. See account.id
&nbsp;

### numchars
The number of characters the account has on the realm.
&nbsp;
