---
title: rbac_default_permissions
description: Default permission to assign to different account security levels
published: true
date: 2021-08-26T02:22:56.205Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T02:22:56.205Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[secId](#secId) | int(10) | unsigned | PRI | NO |  |  | Security Level id |
[permissionId](#permissionId) | int(10) | unsigned | PRI | NO |  |  | permission id |
[realmId](#realmId) | int(11) | signed | PRI | NO | -1 |  | Realm Id, -1 means all |

&nbsp;
## Description of fields

### secId   
*- no description -*
&nbsp;
    
### permissionId  
*- no description -*
&nbsp;

### realmId
*- no description -*
&nbsp;
