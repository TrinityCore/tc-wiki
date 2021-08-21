---
title: account_banned
description: This table lists all of the accounts that have been banned along with the date when (or if) the ban will expire.
published: true
date: 2021-08-21T00:41:20.499Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:45:13.968Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|---|---|---|---|---|
[id](#id) | int(10) | unsigned | PRI | NO | 0 |  | Account id |
[bandate](#bandate) | int(10) | unsigned | PRI | NO | 0 |  |  |
[unbandate](#unbandate) | int(10) | unsigned |  | NO | 0 |  |  |
[bannedby](#bannedby) | varchar(50) | signed |  | NO |  |  |  |
[banreason](#banreason) | varchar(255) | signed |  | NO |  |  |  |
[active](#active) | tinyint(3) | unsigned |  | NO | 1 |  |  |

&nbsp;
## Description of fields

### id   
*- no description -*
&nbsp;
    
### bandate  
*- no description -*
&nbsp;

### unbandate
*- no description -*
&nbsp;

### bannedby 
*- no description -*
&nbsp;

### banreason
*- no description -*
&nbsp;

### active   
*- no description -*
&nbsp;
