---
title: rbac_account_permissions
description: 
published: true
date: 2021-08-26T02:17:09.750Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:17:09.750Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[accountId](#accountId) | int(10) | unsigned | PRI | NO |  |  | Account id |
[permissionId](#permissionId) | int(10) | unsigned | PRI | NO |  |  | Permission id |
[granted](#granted) | tinyint(1) | signed |  | NO | 1 |  | Granted = 1, Denied = 0 |
[realmId](#realmId) | int(11) | signed | PRI | NO | -1 |  | Realm Id, -1 means all |

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
