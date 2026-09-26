---
title: rbac_account_permissions
description: 
published: false
date: 2023-01-08T00:14:51.680Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:17:09.750Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO |  |  | Account id |
| [permissionId](#permissionid) | int | unsigned | PRI | NO |  |  | Permission id |
| [granted](#granted) | tinyint(1) | signed |  | NO | 1 |  | Granted = 1, Denied = 0 |
| [realmId](#realmid) | int | signed | PRI | NO | -1 |  | Realm Id, -1 means all |
&nbsp;
## Description of fields

### accountId
*- no description -*
&nbsp;

### permissionId
*- no description -*
&nbsp;

### granted
*- no description -*
&nbsp;

### realmId
*- no description -*
&nbsp;


